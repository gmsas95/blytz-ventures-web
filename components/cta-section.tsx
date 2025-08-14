"use client"

import { motion } from "framer-motion"
import { TransitionLink } from "./transition-link"
import { Users, Briefcase, Lightbulb } from "lucide-react"

const ctaOptions = [
  {
    icon: Briefcase,
    title: "For Investors",
    description: "Discover partnership opportunities with Blytz Ventures",
    buttonText: "Partner With Us",
    href: "#contact",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "For Talent",
    description: "Join our mission to build the future",
    buttonText: "Explore Careers",
    href: "#careers",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Lightbulb,
    title: "For Collaborators",
    description: "Have an innovative idea? Let's discuss it",
    buttonText: "Pitch Your Idea",
    href: "#contact",
    color: "from-purple-500 to-pink-500",
  },
]

export function CTASection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#111]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build the Future?</h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're an investor, talented individual, or have an innovative idea, we want to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-8 rounded-2xl text-center border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 h-full flex flex-col"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${option.color} rounded-full mb-6 mx-auto`}
                >
                  <Icon size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-neutral-400 mb-8 leading-relaxed flex-grow">{option.description}</p>
                <TransitionLink href={option.href}>
                  <motion.button
                    className={`bg-gradient-to-r ${option.color} text-black font-semibold py-4 px-6 rounded-full transition-all duration-300 w-full`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.buttonText}
                  </motion.button>
                </TransitionLink>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
