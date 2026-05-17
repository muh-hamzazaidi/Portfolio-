'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  {
    name: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    emoji: '🔵',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Azure Data Engineer Associate (DP-203)',
    issuer: 'Microsoft',
    emoji: '🟦',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    name: 'AWS Certified Data Analytics – Specialty',
    issuer: 'Amazon Web Services',
    emoji: '🟠',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'Databricks Certified Data Engineer',
    issuer: 'Databricks',
    emoji: '⚡',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Snowflake SnowPro Core',
    issuer: 'Snowflake',
    emoji: '❄️',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    emoji: '🔷',
    color: 'from-pink-500 to-rose-500',
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Certifications & Credentials
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className={`glass rounded-xl border border-slate-700 p-6 hover:border-primary transition-all group cursor-pointer bg-gradient-to-br ${cert.color} opacity-0 bg-clip-padding`}
                style={{ backgroundClip: 'padding-box' }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{cert.emoji}</span>
                    <Award className="w-6 h-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-slate-300">{cert.issuer}</p>
                  </div>

                  <motion.div
                    className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>Continuously pursuing professional development and staying current with industry certifications.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
