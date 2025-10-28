"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useFBO } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

function useDeviceCapabilities() {
  const [capabilities, setCapabilities] = useState({
    isMobile: false,
    isLowEnd: false,
    particleCount: 512,
    enablePostProcessing: true,
  })

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isLowEnd = isMobile || navigator.hardwareConcurrency <= 4

    setCapabilities({
      isMobile,
      isLowEnd,
      particleCount: isLowEnd ? 128 : 512, // Reduce particles on low-end devices
      enablePostProcessing: !isLowEnd, // Disable post-processing on low-end devices
    })
  }, [])

  return capabilities
}

const simulationMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D uCurrentPosition;
    uniform sampler2D uOriginalPosition;
    uniform float uTime;
    uniform float uCurl;
    uniform float uSpeed;

    vec3 simpleNoise(vec3 uv) {
      float s = sin(uv.x + uTime * 0.5) * 0.5;
      float c = cos(uv.y + uTime * 0.3) * 0.5;
      return vec3(s, c, s * c) * uCurl;
    }

    void main() {
      vec3 currentPos = texture2D(uCurrentPosition, vUv).xyz;
      vec3 originalPos = texture2D(uOriginalPosition, vUv).xyz;
      vec3 noise = simpleNoise(currentPos * 0.2);
      currentPos += noise * uSpeed;
      gl_FragColor = vec4(currentPos, 1.0);
    }
  `,
  uniforms: {
    uCurrentPosition: { value: null },
    uOriginalPosition: { value: null },
    uTime: { value: 0 },
    uCurl: { value: 1.0 }, // Reduced curl intensity
    uSpeed: { value: 0.005 }, // Reduced speed for smoother performance
  },
})

const renderMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    uniform sampler2D uPosition;
    uniform float uTime;
    varying vec3 vColor;

    void main() {
      vec3 pos = texture2D(uPosition, position.xy).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = 2.0; // Slightly larger points for better visibility
      vColor = normalize(pos) * 0.5 + 0.5;
    }
  `,
  fragmentShader: `
    varying vec3 vColor;
    void main() {
      gl_FragColor = vec4(vColor, 0.8); // Reduced opacity for better blending
    }
  `,
  uniforms: {
    uPosition: { value: null },
    uTime: { value: 0 },
  },
})

export function Scene() {
  const { isMobile, isLowEnd, particleCount, enablePostProcessing } = useDeviceCapabilities()
  const size = particleCount
  const pointsRef = useRef<THREE.Points>(null!)
  const { gl } = useThree()

  // Create FBOs with reduced precision on mobile
  const fboOptions = useMemo(
    () => ({
      type: isMobile ? THREE.HalfFloatType : THREE.FloatType, // Use half float on mobile
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
    }),
    [isMobile],
  )

  const fbo1 = useFBO(size, size, fboOptions)
  const fbo2 = useFBO(size, size, fboOptions)

  const { particles, originalPositionTexture, particlePositions } = useMemo(() => {
    const particles = new Float32Array(size * size * 4)
    const geometry = isMobile ? new THREE.SphereGeometry(1, 32, 16) : new THREE.TorusKnotGeometry(1.2, 0.3, 200, 16)
    const positions = geometry.attributes.position.array

    for (let i = 0; i < size * size; i++) {
      const i4 = i * 4
      const p_i = (i * 3) % positions.length
      particles[i4 + 0] = positions[p_i + 0]
      particles[i4 + 1] = positions[p_i + 1]
      particles[i4 + 2] = positions[p_i + 2]
      particles[i4 + 3] = 1.0
    }

    const originalPositionTexture = new THREE.DataTexture(particles, size, size, THREE.RGBAFormat, fboOptions.type)
    originalPositionTexture.needsUpdate = true

    // Initialize FBO1
    const tempScene = new THREE.Scene()
    const tempCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const tempMaterial = new THREE.MeshBasicMaterial({ map: originalPositionTexture })
    const tempMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), tempMaterial)
    tempScene.add(tempMesh)

    gl.setRenderTarget(fbo1)
    gl.render(tempScene, tempCamera)
    gl.setRenderTarget(null)

    const particlePositions = new Float32Array(size * size * 3)
    for (let i = 0; i < size * size; i++) {
      const i3 = i * 3
      particlePositions[i3 + 0] = (i % size) / size
      particlePositions[i3 + 1] = Math.floor(i / size) / size
      particlePositions[i3 + 2] = 0
    }

    return { particles, originalPositionTexture, particlePositions }
  }, [size, gl, fbo1, isMobile, fboOptions.type])

  const frameCount = useRef(0)
  useFrame((state) => {
    frameCount.current++

    if (isLowEnd && frameCount.current % 2 !== 0) return

    const { gl, clock } = state
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    simulationMaterial.uniforms.uCurrentPosition.value = fbo1.texture
    simulationMaterial.uniforms.uOriginalPosition.value = originalPositionTexture
    simulationMaterial.uniforms.uTime.value = clock.elapsedTime

    const simulationMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), simulationMaterial)
    scene.add(simulationMesh)

    gl.setRenderTarget(fbo2)
    gl.render(scene, camera)
    gl.setRenderTarget(null)

    // Swap FBOs
    const temp = fbo1.texture
    fbo1.texture = fbo2.texture
    fbo2.texture = temp

    renderMaterial.uniforms.uPosition.value = fbo1.texture
    renderMaterial.uniforms.uTime.value = clock.elapsedTime

    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005
      pointsRef.current.rotation.x += 0.0002
    }
  })

  if (isLowEnd && size < 256) {
    return null
  }

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={size * size} array={particlePositions} itemSize={3} />
        </bufferGeometry>
        <primitive object={renderMaterial} attach="material" />
      </points>
      {enablePostProcessing && (
        <EffectComposer>
          <Bloom intensity={0.3} luminanceThreshold={0.2} luminanceSmoothing={0.9} height={isMobile ? 512 : 1024} />
        </EffectComposer>
      )}
    </>
  )
}
