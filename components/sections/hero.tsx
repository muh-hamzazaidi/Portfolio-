'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-80 w-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Muhammad Hamza Zaidi</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
              Lead Data Engineer & Lakehouse Architect
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable cloud-native data platforms, real-time streaming systems, and enterprise-grade analytics architectures across healthcare, finance, and SaaS ecosystems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-4 font-semibold text-white hover:shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg glass border border-slate-600 px-8 py-4 font-semibold text-white hover:border-primary hover:shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <Download size={20} />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto"
          >
            {[
              { label: '10+', value: 'Years Exp' },
              { label: '50+', value: 'Projects' },
              { label: '30+', value: 'Technologies' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass rounded-lg border border-slate-700 p-4"
                whileHover={{ scale: 1.05, borderColor: 'rgba(0, 217, 255, 0.5)' }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
