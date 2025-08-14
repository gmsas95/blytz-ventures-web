"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Zap, Globe, TrendingUp } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    icon: Zap,
    title: "Speed & Agility",
    description: "Fast execution cycles that bring ideas to market quickly",
  },
  {
    icon: Globe,
    title: "Cross-Industry Innovation",
    description: "Where technology meets biotech for breakthrough solutions",
  },
  {
    icon: TrendingUp,
    title: "Scalable Impact",
    description: "Targeting high-growth, high-impact markets globally",
  },
]

export function AboutSection() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".pillar-card", {
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
    },
    { scope: container },
  )

  return (
    <section ref={container} className="py-24 md:py-32 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="about-title text-4xl md:text-6xl font-bold mb-8">About Blytz Ventures</h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            We exist to drive innovation, market speed, and build impactful companies in strategic sectors. Our startup
            studio model creates, funds, and scales subsidiaries that shape the future.
          </p>
        </div>

        <div className="pillars-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={index}
                className="pillar-card bg-[#1a1a1a] p-8 rounded-2xl text-center border border-neutral-800 hover:border-cyan-500/50 transition-colors duration-300 h-full flex flex-col"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full mb-6 mx-auto">
                  <Icon size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-neutral-400 leading-relaxed flex-grow">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-neutral-500 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              <span>Founded 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Current Projects: 2</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-neutral-500 rounded-full"></span>
              <span>Future Pipeline: Expanding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
