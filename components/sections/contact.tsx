'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hamza@example.com',
    href: 'mailto:hamza@example.com',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/hamzazaidi',
    href: 'https://linkedin.com/in/hamzazaidi',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/hamzazaidi',
    href: 'https://github.com/hamzazaidi',
    color: 'from-purple-500 to-pink-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="section-title">Let's Connect</h2>
            <p className="text-lg text-slate-400">
              I'm always interested in discussing data architecture, machine learning infrastructure, and innovative solutions. Feel free to reach out.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {contacts.map((contact, i) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={i}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass rounded-xl border border-slate-700 p-8 hover:border-primary transition-all group text-center bg-gradient-to-br ${contact.color} opacity-5`}
                  style={{ backgroundClip: 'padding-box' }}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
                  }}
                >
                  <motion.div
                    className="inline-flex p-4 rounded-lg bg-gradient-to-r from-primary to-secondary mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {contact.label}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4">
                    {contact.value}
                  </p>

                  <motion.div
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium"
                    whileHover={{ x: 4 }}
                  >
                    Get in touch
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            className="glass rounded-xl border border-slate-700 p-8 text-center space-y-4"
            variants={itemVariants}
          >
            <p className="text-slate-300">
              Available for consulting, speaking engagements, and full-time opportunities.
            </p>
            <motion.a
              href="mailto:hamza@example.com"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
