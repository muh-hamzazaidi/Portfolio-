'use client'

import { motion } from 'framer-motion'

const technologies = [
  // Cloud
  { name: 'AWS', category: 'Cloud', icon: '☁️' },
  { name: 'Azure', category: 'Cloud', icon: '☁️' },
  { name: 'GCP', category: 'Cloud', icon: '☁️' },

  // Data Platforms
  { name: 'Databricks', category: 'Data Platform', icon: '⚡' },
  { name: 'Snowflake', category: 'Data Platform', icon: '❄️' },
  { name: 'Redshift', category: 'Data Platform', icon: '🔴' },
  { name: 'Synapse', category: 'Data Platform', icon: '🔷' },

  // Data Processing
  { name: 'PySpark', category: 'Data Processing', icon: '🔥' },
  { name: 'SQL', category: 'Data Processing', icon: '📊' },
  { name: 'Python', category: 'Data Processing', icon: '🐍' },
  { name: 'dbt', category: 'Data Processing', icon: '🔄' },

  // Streaming
  { name: 'Kafka', category: 'Streaming', icon: '📨' },
  { name: 'Spark Streaming', category: 'Streaming', icon: '⚡' },
  { name: 'Event Hub', category: 'Streaming', icon: '📨' },

  // Orchestration
  { name: 'Airflow', category: 'Orchestration', icon: '✈️' },
  { name: 'Prefect', category: 'Orchestration', icon: '✈️' },
  { name: 'Datahub', category: 'Orchestration', icon: '🎯' },

  // DevOps
  { name: 'Terraform', category: 'DevOps', icon: '🏗️' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' },
  { name: 'Kubernetes', category: 'DevOps', icon: '⚙️' },
  { name: 'Jenkins', category: 'DevOps', icon: '🔧' },

  // Analytics & BI
  { name: 'Power BI', category: 'BI & Analytics', icon: '📊' },
  { name: 'Tableau', category: 'BI & Analytics', icon: '📈' },
  { name: 'Looker', category: 'BI & Analytics', icon: '🔍' },

  // ML & AI
  { name: 'MLflow', category: 'ML/AI', icon: '🤖' },
  { name: 'Vertex AI', category: 'ML/AI', icon: '🧠' },
  { name: 'Ray', category: 'ML/AI', icon: '✨' },

  // Governance
  { name: 'Unity Catalog', category: 'Governance', icon: '🔐' },
  { name: 'Great Expectations', category: 'Governance', icon: '✅' },
  { name: 'Apache Atlas', category: 'Governance', icon: '🗺️' },
]

const categories = [...new Set(technologies.map(t => t.category))]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            Tech Stack & Technologies
          </motion.h2>

          <div className="space-y-8">
            {categories.map((category) => (
              <motion.div
                key={category}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {category}
                </h3>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {technologies
                    .filter(tech => tech.category === category)
                    .map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        className="glass rounded-lg border border-slate-700 p-4 text-center hover:border-primary transition-all group cursor-pointer"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                        }}
                      >
                        <div className="text-2xl mb-2 group-hover:scale-125 transition-transform">
                          {tech.icon}
                        </div>
                        <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                          {tech.name}
                        </p>
                      </motion.div>
                    ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center text-slate-400 text-sm pt-8 border-t border-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>And many more... Constantly learning and adapting to new technologies in the modern data landscape.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
