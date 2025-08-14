"use client"

import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
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
          <h1 className="hero-title font-bold text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">{splitTitle}</h1>
          <motion.p
            className="hero-subtitle text-lg md:text-xl lg:text-2xl mb-12 text-neutral-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Blytz Ventures creates and scales innovative solutions across technology, biotech, and beyond — driving
            impact from Southeast Asia to the world.
          </motion.p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center">
            <TransitionLink href="/#ventures">
              <motion.button
                className="flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 min-w-[200px]"
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Ventures <ArrowRight size={20} />
              </motion.button>
            </TransitionLink>
            <TransitionLink href="/#contact">
              <motion.button
                className="flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 min-w-[200px]"
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
              </motion.button>
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  )
}
