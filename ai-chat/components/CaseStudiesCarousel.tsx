"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Award, Users, Target } from "lucide-react"

type ExperienceItem = {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const experienceItems: ExperienceItem[] = [
  {
    icon: <Award className="w-8 h-8 text-[#156d95]" />,
    title: "Governance Experience",
    description:
      "Former Student Body President, founder of a representative student senate, and author of a student council constitution.",
    delay: 0,
  },
  {
    icon: <Users className="w-8 h-8 text-[#156d95]" />,
    title: "Administrative Advocacy",
    description:
      "Direct experience representing students to senior administrators and building systems that last beyond one term.",
    delay: 0.15,
  },
  {
    icon: <Target className="w-8 h-8 text-[#156d95]" />,
    title: "Execution Over Optics",
    description:
      "Focused on policy, structure, and accountability rather than performative leadership.",
    delay: 0.3,
  },
]

// @component: CaseStudiesCarousel
export const CaseStudiesCarousel = () => {
  const isVisible = true; // Declare the isVisible variable

  return (
    <section className="w-full py-24 px-8 bg-[#fafafa]" id="experience">
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
            Background
          </div>

          <h2
            className="text-[40px] font-normal leading-tight tracking-tight text-[#111A4A] mb-6"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
              fontWeight: "400",
            }}
          >
            Why I Am Qualified
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceItems.map((item, index) => (
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
              className="bg-white rounded-3xl p-8 border border-[#e5e5e5] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[#156d95]/10 rounded-2xl flex items-center justify-center mb-6">
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
