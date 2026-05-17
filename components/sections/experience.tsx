'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    title: 'Lead Data Engineer',
    company: 'HealthVerity',
    period: 'May 2023 – Present',
    highlights: [
      'Built enterprise healthcare lakehouse architecture on Databricks + AWS',
      'Designed Kafka streaming pipelines for real-time HIPAA-compliant data flows',
      'Implemented CDC pipelines and HITRUST governance frameworks',
      'Led engineering team of 4 senior engineers on critical projects',
      'Achieved 99.99% uptime with real-time analytics serving 50M+ daily queries',
      'Mentored 3 junior engineers on modern data stack best practices',
    ],
  },
  {
    title: 'Senior Data Engineer',
    company: 'Lovelytics',
    period: 'July 2019 – April 2023',
    highlights: [
      'Led Azure modernization initiative for financial and healthcare pipelines',
      'Architected Synapse + Databricks hybrid solution for compliance',
      'Built PCI-DSS compliant event streaming with Kafka and Event Hub',
      'Designed semantic modeling layer for self-service analytics',
      'Reduced ETL latency by 70% through optimization and parallelization',
      'Implemented data governance framework serving 200+ analysts',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Amplitude',
    period: 'March 2016 – June 2019',
    highlights: [
      'Built SaaS analytics platform on Snowflake and Redshift',
      'Designed Reverse ETL pipelines for customer data sync',
      'Implemented Terraform infrastructure-as-code for reproducible deployments',
      'Orchestrated Kubernetes microservices for data pipeline reliability',
      'Developed CI/CD automation reducing deployment time by 80%',
      'Maintained 99.9% SLA on mission-critical analytics systems',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
}

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline line */}
                {i !== experiences.length - 1 && (
                  <div className="absolute left-6 md:left-0 top-16 md:top-20 w-1 h-32 bg-gradient-to-b from-primary to-transparent" />
                )}

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-4 h-4 bg-background rounded-full" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="ml-20 md:ml-0 md:w-1/2 md:pr-12 glass rounded-xl border border-slate-700 p-6 hover:border-primary transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-400">{exp.period}</span>
                  </div>

                  <div className="space-y-2">
                    {exp.highlights.map((highlight, j) => (
                      <motion.div
                        key={j}
                        className="flex gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.05 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
