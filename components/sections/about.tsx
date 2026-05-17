'use client'

import { motion } from 'framer-motion'

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
    transition: { duration: 0.8 },
  },
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a Senior Lead Data Engineer and Lakehouse Architect with 10+ years of experience building enterprise-grade data systems. My expertise spans cloud-native architectures, real-time streaming platforms, and AI/ML infrastructure.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I've led cross-functional teams in designing and implementing scalable data solutions for Fortune 500 companies in healthcare, finance, and SaaS. My focus is on building resilient, secure, and performant systems that drive business value.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm passionate about modern data stack technologies, mentoring junior engineers, and sharing knowledge through technical talks and open-source contributions.
              </p>
            </div>

            <motion.div
              className="glass rounded-2xl border border-slate-700 p-8 space-y-4"
              whileHover={{ borderColor: 'rgba(0, 217, 255, 0.5)' }}
            >
              <div className="space-y-4">
                {[
                  { icon: '🏢', title: 'Enterprise Data Architecture', desc: 'Designing large-scale lakehouse and data warehouse systems' },
                  { icon: '⚡', title: 'Real-Time Streaming', desc: 'Building low-latency data pipelines and analytics' },
                  { icon: '🔒', title: 'Security & Governance', desc: 'Implementing HIPAA, PCI-DSS, and data governance frameworks' },
                  { icon: '🤖', title: 'AI/ML Infrastructure', desc: 'Creating feature stores and ML pipeline orchestration' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
