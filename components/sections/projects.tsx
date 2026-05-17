'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Enterprise Healthcare Lakehouse',
    description: 'Built a HIPAA-compliant multi-terabyte lakehouse for 50+ healthcare providers',
    metrics: ['250GB/day', '99.99% uptime', '50M queries/day'],
    tech: ['Databricks', 'Delta Lake', 'AWS', 'Unity Catalog'],
    impact: 'Reduced analytics query time from hours to seconds, enabling real-time clinical insights',
  },
  {
    title: 'Real-Time Financial Streaming',
    description: 'Designed real-time streaming platform for financial transaction processing',
    metrics: ['1M events/sec', '<100ms latency', '24/7 SLA'],
    tech: ['Kafka', 'Spark Streaming', 'Azure Event Hub', 'Faust'],
    impact: 'Enabled sub-100ms fraud detection, preventing $50M+ in fraudulent transactions',
  },
  {
    title: 'Multi-Cloud Analytics Platform',
    description: 'Orchestrated unified analytics across AWS, Azure, and GCP environments',
    metrics: ['3 clouds', '10+ data sources', '500TB warehouse'],
    tech: ['Terraform', 'DBT', 'Airflow', 'Kubernetes'],
    impact: 'Reduced cloud infrastructure costs by 35% through optimization and unified governance',
  },
  {
    title: 'CDC Data Sync Framework',
    description: 'Built change data capture pipeline for real-time data synchronization',
    metrics: ['100% data fidelity', '< 5s sync delay', 'Zero data loss'],
    tech: ['Kafka', 'Debezium', 'PySpark', 'PostgreSQL'],
    impact: 'Ensured data consistency across 20+ systems, enabling accurate reporting',
  },
  {
    title: 'AI/ML Feature Store',
    description: 'Architected centralized feature management platform for ML teams',
    metrics: ['10K+ features', '200+ models', '50M daily predictions'],
    tech: ['Tecton', 'MLflow', 'DynamoDB', 'Python'],
    impact: 'Accelerated model development by 60%, enabling 2x faster experimentation',
  },
  {
    title: 'Data Governance Framework',
    description: 'Implemented enterprise-wide data lineage, cataloging, and compliance system',
    metrics: ['5000+ assets', '99.9% discovery rate', 'PCI-DSS compliant'],
    tech: ['Unity Catalog', 'Apache Atlas', 'Great Expectations', 'dbt'],
    impact: 'Achieved SOC 2 compliance and reduced audit time by 75%',
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

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Featured Architecture & Projects
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="glass rounded-xl border border-slate-700 p-8 hover:border-primary hover:shadow-glow transition-all group"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-1">
                        {project.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-dark-700 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-sm text-slate-300 italic">
                      💡 <span className="text-primary">{project.impact}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
