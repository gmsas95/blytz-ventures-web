"use client"

import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Scene } from "@/components/scene"
import { TransitionLink } from "@/components/transition-link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()
      tl.fromTo(
        ".hero-title span",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" },
      )
        .fromTo(
          ".hero-subtitle",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".hero-buttons",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
          "-=0.5",
        )
        .set(".hero-button", {
          transformOrigin: "center",
          cursor: "pointer",
        })

      gsap.utils.toArray(".hero-button").forEach((button: any) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, { scale: 1.05, duration: 0.2, ease: "power2.out" })
        })
        button.addEventListener("mouseleave", () => {
          gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" })
        })
        button.addEventListener("mousedown", () => {
          gsap.to(button, { scale: 0.95, duration: 0.1 })
        })
        button.addEventListener("mouseup", () => {
          gsap.to(button, { scale: 1.05, duration: 0.1 })
        })
      })
    },
    { scope: container },
  )

  const title = "Building the Future, One Venture at a Time"
  const splitTitle = title.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden">
      <span className="inline-block">{word}&nbsp;</span>
    </span>
  ))

  return (
    <div ref={container} className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="hero-title font-bold text-4xl md:text-6xl mb-8 leading-tight lg:text-8xl">{splitTitle}</h1>
          <p className="hero-subtitle text-lg md:text-xl lg:text-2xl mb-12 text-neutral-300 max-w-4xl mx-auto">
            Blytz Ventures creates and scales innovative solutions across technology, biotech, and beyond — driving
            impact from Southeast Asia to the world.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center">
            <TransitionLink href="/#ventures">
              <button className="hero-button flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 px-8 rounded-full transition-colors duration-300 min-w-[200px]">
                Explore Our Ventures <ArrowRight size={20} />
              </button>
            </TransitionLink>
            <TransitionLink href="/#contact">
              <button className="hero-button flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-full transition-colors duration-300 min-w-[200px]">
                Partner With Us
              </button>
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  )
}
