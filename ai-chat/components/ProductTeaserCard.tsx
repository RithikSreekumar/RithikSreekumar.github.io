"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"
import { useState, useEffect } from "react"

// @component: ProductTeaserCard
export const ProductTeaserCard = () => {
  const [countdown, setCountdown] = useState("")

  useEffect(() => {
    // Feb 10, 2026 at 10:00 AM EST = 15:00 UTC
    const targetDate = new Date("2026-02-10T15:00:00Z").getTime()

    const updateCountdown = () => {
      const now = Date.now()
      const diff = targetDate - now

      if (diff <= 0) {
        setCountdown("Voting is now open.")
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s until voting opens`)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  // @return
  return (
    <section className="w-full px-8 pt-32 pb-16" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-2">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="col-span-12 lg:col-span-7 bg-[#e9e9e9] rounded-[40px] p-12 lg:p-16 flex flex-col justify-between"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden ring-4 ring-[#156d95]/20 flex-shrink-0"
              >
                <img
                  src="/images/candidate.jpg"
                  alt="Rithik Sreekumar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <motion.span
                  initial={{
                    transform: "translateY(20px)",
                    opacity: 0,
                  }}
                  animate={{
                    transform: "translateY(0px)",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.645, 0.045, 0.355, 1],
                    delay: 0.6,
                  }}
                  className="text-sm uppercase tracking-tight font-mono flex items-center gap-1 text-[#9a9a9a] mb-4"
                  style={{
                    fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  }}
                >
                  First-Year Engineering Science · University of Toronto
                  <ArrowUpRight className="w-[0.71em] h-[0.71em]" />
                </motion.span>

                <h1
                  className="text-[42px] md:text-[56px] leading-[46px] md:leading-[60px] tracking-tight text-[#202020] max-w-[520px] mb-4"
                  style={{
                    fontWeight: "500",
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  Rithik Sreekumar
                </h1>

                <p
                  className="text-lg leading-7 text-[#404040] max-w-[520px]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  Constituency II Candidate for Engineering and Architecture
                </p>
              </div>
            </div>

            <div
              className="border-l-4 border-[#156d95] bg-white/50 p-6 rounded-r-2xl max-w-[520px] mb-8"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              <p className="text-base leading-7 text-[#404040]">
                I advocate for student mental and physical health, and I will not accept a system that treats exhaustion
                as a benchmark of success. If elected, I will challenge harmful academic practices, push for humane
                policy reform, and represent students who are too often unheard at the governing table.
              </p>
            </div>

            <ul className="flex gap-1.5 flex-wrap">
              <li>
                <a
                  href="#vote"
                  className="block cursor-pointer text-white bg-[#156d95] rounded-full px-[18px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
                >
                  Vote for Rithik
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className="block cursor-pointer text-[#202020] border border-[#202020] rounded-full px-[18px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
                >
                  View Platform
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
              delay: 0.2,
            }}
            className="col-span-12 lg:col-span-5 bg-white rounded-[40px] flex flex-col justify-center items-center p-12 lg:p-16 text-center"
            id="vote"
          >
            <h3
              className="text-2xl font-medium text-[#202020] mb-2"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Vote in the Governing Council Election
            </h3>
            <p className="text-[#9a9a9a] mb-6" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
              Your voice matters.
            </p>

            <div
              className="text-3xl font-bold text-[#156d95] mb-8"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {countdown}
            </div>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block cursor-pointer text-white bg-[#156d95] rounded-full px-[18px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl text-center mb-6"
            >
              Vote via Official Ballot
            </a>

            <div className="text-sm text-[#666666]" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
              <p className="mb-2">Questions?</p>
              <a
                href="mailto:rithik.sreekumar@mail.utoronto.ca"
                className="flex items-center justify-center gap-2 text-[#156d95] hover:underline"
              >
                <Mail className="w-4 h-4" />
                rithik.sreekumar@mail.utoronto.ca
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
