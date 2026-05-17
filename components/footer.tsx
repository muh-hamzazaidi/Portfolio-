'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/hamzazaidi',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/hamzazaidi',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/hamzazaidi',
    label: 'Twitter',
  },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-background/50 backdrop-blur-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Muhammad Hamza Zaidi</h3>
            <p className="text-slate-400 text-sm">
              Lead Data Engineer & Lakehouse Architect. Building scalable data infrastructure for the future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-slate-400 hover:text-primary transition-colors text-sm"
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-4">
            <h4 className="font-semibold text-white">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass border border-slate-700 text-slate-400 hover:text-primary hover:border-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-slate-500 text-sm">
            © {currentYear} Muhammad Hamza Zaidi. All rights reserved.
          </p>
          <motion.p
            className="text-slate-500 text-sm flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            Designed & Engineered with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
