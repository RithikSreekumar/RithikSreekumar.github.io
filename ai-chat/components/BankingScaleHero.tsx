"use client"

import { motion } from "framer-motion"

type PlatformItem = {
  title: string
  description: string
  imageSrc: string
  delay: number
}

const platformItems: PlatformItem[] = [
  {
    title: "Humane Academic Policy",
    description:
      "Advocating for smarter course design, realistic assessment pacing, and academic policies that respect student health.",
    imageSrc: "/images/humane-academic.jpg",
    delay: 0,
  },
  {
    title: "Students Before Branding",
    description:
      "Rankings mean nothing if students are struggling. Governance must prioritize lived student experience over optics.",
    imageSrc: "/images/students-first.jpg",
    delay: 0.2,
  },
  {
    title: "National Culture Shift",
    description: "Rebuilding a culture where UofT students are challenged, supported, and heard equally.",
    imageSrc: "/images/culture-shift.jpg",
    delay: 0.4,
  },
]

// @component: BankingScaleHero
export const BankingScaleHero = () => {
  const isVisible = true; // Declare the isVisible variable

  // @return
  return (
    <div className="w-full overflow-hidden bg-white" id="vision">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="relative h-6 inline-flex items-center font-mono uppercase text-xs text-[#156d95] mb-6 px-2"
              style={{
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              }}
            >
              Platform & Priorities
            </div>

            <h2
              className="text-[40px] font-normal leading-tight tracking-tight text-[#111A4A] mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
              }}
            >
              What I Stand For
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platformItems.map((item, index) => (
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
              className="bg-[#f5f5f5] rounded-3xl p-8 flex flex-col"
            >
              <h3
                className="text-xl font-medium text-[#202020] mb-4"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-base leading-6 text-[#666666] mb-6 flex-grow"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                }}
              >
                {item.description}
              </p>
              <div className="w-full h-48 rounded-2xl overflow-hidden">
                <img
                  src={item.imageSrc || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
