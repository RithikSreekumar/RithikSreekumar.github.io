"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Calendar, UserCheck, Eye } from "lucide-react"

type RuleItem = {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const ruleItems: RuleItem[] = [
  {
    icon: <Calendar className="w-8 h-8 text-[#156d95]" />,
    title: "Voting Period",
    description:
      "Online voting opens and closes during the official election window announced by the university.",
    delay: 0,
  },
  {
    icon: <UserCheck className="w-8 h-8 text-[#156d95]" />,
    title: "Eligibility",
    description:
      "All eligible University of Toronto students may vote using their official student credentials.",
    delay: 0.15,
  },
  {
    icon: <Eye className="w-8 h-8 text-[#156d95]" />,
    title: "Transparency",
    description:
      "Results will be released through official student governance channels.",
    delay: 0.3,
  },
]

// @component: IntegrationCarousel
export const IntegrationCarousel = () => {
  const isVisible = true; // Declare the isVisible variable

  return (
    <section className="w-full py-24 px-8 bg-white" id="rules">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <div
            className="relative h-6 inline-flex items-center font-mono uppercase text-xs text-[#156d95] mb-6 px-2"
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
            }}
          >
            Important Information
          </div>

          <h2
            className="text-[40px] font-normal leading-tight tracking-tight text-[#111A4A] mb-4"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
              fontWeight: "400",
            }}
          >
            Election Rules & Timeline
          </h2>

          <p
            className="text-lg leading-7 text-[#666666] max-w-2xl"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
            }}
          >
            This election is conducted in accordance with University of Toronto student governance procedures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ruleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: item.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[#f5f5f5] rounded-3xl p-8"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3
                className="text-xl font-medium text-[#202020] mb-4"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-base leading-6 text-[#666666]"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
