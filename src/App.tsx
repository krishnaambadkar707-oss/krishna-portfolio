import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import FeaturedProjects from './components/FeaturedProjects'
import Hackathon from './components/Hackathon'
import Journey from './components/Journey'
import WhatIBuild from './components/WhatIBuild'
import Approach from './components/Approach'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative min-h-screen bg-ink text-paper selection:bg-accent selection:text-ink">
        {/* Portfolio Background Image */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <img
            src="/portfolio-bg.png"
            alt="Portfolio Background"
            className="h-full w-full object-cover object-top opacity-40 filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(11,11,12,0.75)_100%)]" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <FeaturedProjects />
            <TechStack />
            <Hackathon />
            <Journey />
            <WhatIBuild />
            <Approach />
            <Strengths />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  )
}
