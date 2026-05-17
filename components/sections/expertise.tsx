'use client'

import { motion } from 'framer-motion'
import { Cloud, Database, Zap, Boxes, Shield, Brain, Lock, TrendingUp } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    skills: ['AWS', 'Azure', 'GCP', 'Multi-Cloud Architecture'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    skills: ['PySpark', 'SQL', 'Python', 'dbt', 'Airflow'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Streaming & Real-Time',
    skills: ['Kafka', 'Event Hub', 'Kinesis', 'CDC', 'Stream Processing'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Boxes,
    title: 'Data Warehousing',
    skills: ['Databricks', 'Snowflake', 'Redshift', 'Synapse', 'Delta Lake'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'DevOps & Infrastructure',
    skills: ['Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'GitOps'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Brain,
    title: 'AI/ML & MLOps',
    skills: ['MLflow', 'Vertex AI', 'Feature Stores', 'Model Serving', 'LLMs'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Lock,
    title: 'Governance & Security',
    skills: ['HIPAA', 'PCI-DSS', 'Unity Catalog', 'Data Governance', 'IAM'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'BI & Analytics',
    skills: ['Power BI', 'Tableau', 'Looker', 'Analytics', 'Dashboarding'],
    color: 'from-green-500 to-emerald-500',
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
    transition: { duration: 0.8 },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
}

export function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Technical Expertise
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {expertiseAreas.map((area, i) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={i}
                  className="glass rounded-xl border border-slate-700 p-6 hover:border-primary transition-colors group cursor-pointer"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${area.color} mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    {area.title}
                  </h3>

                  <div className="space-y-2">
                    {area.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        className="inline-block"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-sm text-slate-300 bg-dark-800 rounded-full px-3 py-1 inline-block mr-2 mb-2">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
