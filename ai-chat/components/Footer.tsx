"use client"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#0a0e1a] border-t border-[#1a1f2e]">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-sm text-[#9ca3af]" style={{ fontFamily: "Figtree" }}>
              {currentYear} Rithik Sreekumar · University of Toronto Governing Council Election
            </p>
          </div>

          <a
            href="mailto:rithik.sreekumar@mail.utoronto.ca"
            className="flex items-center gap-2 text-sm text-[#9ca3af] hover:text-white transition-colors duration-150"
            style={{ fontFamily: "Figtree" }}
          >
            <Mail className="w-4 h-4" />
            rithik.sreekumar@mail.utoronto.ca
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
