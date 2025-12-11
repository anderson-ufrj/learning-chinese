'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Lessons from '@/components/Lessons'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('hero')

  const handleGetStarted = () => {
    // Scroll to features section
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleStartLearning = () => {
    // Scroll to lessons section
    const lessonsSection = document.getElementById('lessons')
    if (lessonsSection) {
      lessonsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero">
        <Hero onGetStarted={handleGetStarted} />
      </section>
      
      {/* Features Section */}
      <section id="features">
        <Features />
      </section>
      
      {/* Lessons Section */}
      <section id="lessons">
        <Lessons />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}