"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TransitionLink } from "./transition-link"
import { ExternalLink, Smartphone, Microscope } from "lucide-react"

const ventures = [
  {
    title: "Blytz Live",
    category: "Tech",
    tagline: "Fastest Live Auction Experience in Southeast Asia",
    description:
      "Revolutionary live commerce platform combining speed, urgency, and gamified auction experiences for the Southeast Asian market.",
    image: "/placeholder-0wpft.png",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-500",
    href: "http://live.blytzventures.com/",
  },
  {
    title: "Blytz Biotech",
    category: "Biotech / Defense Medical",
    tagline: "Next-Gen Mycelium Wound Care for Defense and Disaster Readiness",
    description:
      "Cutting-edge biotech innovation developing mycelium-based wound care solutions for defense contracts and medical emergency preparedness.",
    image: "/biotech-mycelium-research.png",
    icon: Microscope,
    color: "from-green-500 to-emerald-500",
    href: "http://biotech.blytzventures.com/",
  },
]

export function VenturesPortfolio() {
  return (
    <section id="ventures" className="py-24 md:py-32 bg-[#111]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Our Ventures</h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of innovative subsidiaries driving change across technology and biotech sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ventures.map((venture, index) => {
            const Icon = venture.icon
            return (
              <motion.div
                key={venture.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={venture.image || "/placeholder.svg"}
                      fill
                      alt={venture.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} opacity-20`} />
                    <div className="absolute top-6 left-6">
                      <div
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${venture.color} text-black px-4 py-2 rounded-full text-sm font-semibold`}
                      >
                        <Icon size={16} />
                        {venture.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-3xl font-bold mb-3">{venture.title}</h3>
                    <p
                      className={`text-lg font-semibold mb-4 bg-gradient-to-r ${venture.color} bg-clip-text text-transparent`}
                    >
                      {venture.tagline}
                    </p>
                    <p className="text-neutral-400 mb-8 leading-relaxed flex-grow">{venture.description}</p>

                    <TransitionLink href={venture.href}>
                      <motion.button
                        className={`inline-flex items-center justify-center gap-3 bg-gradient-to-r ${venture.color} text-black font-semibold py-4 px-6 rounded-full transition-all duration-300 w-full`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore {venture.title.split(" ")[1]} <ExternalLink size={18} />
                      </motion.button>
                    </TransitionLink>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
