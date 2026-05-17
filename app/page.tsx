'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Expertise } from '@/components/sections/expertise'
import { Experience } from '@/components/sections/experience'
import { Certifications } from '@/components/sections/certifications'
import { Projects } from '@/components/sections/projects'
import { TechStack } from '@/components/sections/tech-stack'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Certifications />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
