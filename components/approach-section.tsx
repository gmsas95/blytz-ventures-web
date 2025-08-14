"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Building2, Rocket, Target, Smartphone } from "lucide-react"

export function ApproachSection() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".approach-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".diagram-element", {
        scrollTrigger: {
          trigger: ".approach-diagram",
          start: "top 80%",
        },
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
    },
    { scope: container },
  )

  const differentiators = [
    "Founder-led innovation",
    "Local roots, global mindset",
    "Strong defense & tech market focus",
  ]

  return (
    <section ref={container} className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="approach-title text-4xl md:text-6xl font-bold mb-8">The Blytz Ventures Approach</h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Our startup studio model creates, funds, and scales subsidiaries through a proven framework that transforms
            innovative ideas into market-leading companies.
          </p>
        </div>

        <div className="approach-diagram max-w-4xl mx-auto mb-20">
          <div className="flex flex-col items-center">
            {/* Parent Company */}
            <motion.div
              className="diagram-element bg-gradient-to-br from-cyan-500 to-blue-500 text-black p-8 rounded-2xl mb-8 text-center min-w-[200px]"
              whileHover={{ scale: 1.05 }}
            >
              <Building2 size={32} className="mx-auto mb-3" />
              <h3 className="text-xl font-bold">Blytz Ventures</h3>
              <p className="text-sm opacity-80">Parent Company</p>
            </motion.div>

            {/* Connection Lines */}
            <div className="diagram-element w-px h-16 bg-gradient-to-b from-cyan-500 to-transparent mb-8"></div>

            {/* Current Subsidiaries */}
            <div className="flex flex-col md:flex-row gap-8 mb-12 justify-center">
              <motion.div
                className="diagram-element bg-[#1a1a1a] border-2 border-cyan-500 p-6 rounded-2xl text-center min-w-[160px]"
                whileHover={{ scale: 1.05 }}
              >
                <Smartphone size={24} className="mx-auto mb-3 text-cyan-500" />
                <h4 className="font-bold text-lg">Blytz Live</h4>
                <p className="text-sm text-neutral-400">Tech Platform</p>
              </motion.div>

              <motion.div
                className="diagram-element bg-[#1a1a1a] border-2 border-green-500 p-6 rounded-2xl text-center min-w-[160px]"
                whileHover={{ scale: 1.05 }}
              >
                <Target size={24} className="mx-auto mb-3 text-green-500" />
                <h4 className="font-bold text-lg">Blytz Biotech</h4>
                <p className="text-sm text-neutral-400">Defense Medical</p>
              </motion.div>
            </div>

            {/* Future Ventures */}
            <div className="diagram-element flex flex-col items-center gap-3 text-neutral-500">
              <div className="w-32 h-20 border-2 border-dashed border-neutral-600 rounded-2xl flex items-center justify-center">
                <Rocket size={24} />
              </div>
              <span className="text-sm font-medium">Future Ventures</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Key Differentiators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-3 p-4 bg-[#1a1a1a] rounded-xl border border-neutral-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-neutral-300 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
