'use client'

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Lessons from '@/components/Lessons'
import Footer from '@/components/Footer'
import Header from '@/components/navigation/Header'

export default function Home() {
  const handleGetStarted = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header />
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
    </>
  )
}