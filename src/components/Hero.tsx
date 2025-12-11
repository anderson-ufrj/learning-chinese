'use client'

import React from 'react'
import Link from 'next/link'

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Floating Chinese Characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-[15%] left-[10%] text-6xl text-white/5 font-chinese">中</span>
        <span className="absolute top-[25%] right-[15%] text-5xl text-white/5 font-chinese">文</span>
        <span className="absolute bottom-[30%] left-[20%] text-7xl text-white/5 font-chinese">学</span>
        <span className="absolute bottom-[20%] right-[10%] text-4xl text-white/5 font-chinese">习</span>
        <span className="absolute top-[50%] left-[5%] text-5xl text-white/5 font-chinese">语</span>
        <span className="absolute top-[40%] right-[8%] text-6xl text-white/5 font-chinese">言</span>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/70 text-sm font-medium">Plataforma de Aprendizado Interativo</span>
        </div>

        {/* Main Title */}
        <h1 className="font-chinese text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-red-400 via-amber-300 to-red-400 bg-clip-text text-transparent">
            学习中文
          </span>
        </h1>

        {/* Portuguese Subtitle */}
        <h2 className="font-portuguese text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
          Aprenda Chinês Mandarim
        </h2>

        {/* Description */}
        <p className="font-portuguese text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Domine o idioma mais falado do mundo com métodos interativos,
          repetição espaçada e exercícios práticos.
          <span className="text-white/80 font-medium"> Feito para brasileiros.</span>
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">HSK 1-6</div>
            <div className="text-white/50 text-sm">Níveis completos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">5000+</div>
            <div className="text-white/50 text-sm">Palavras</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-white/50 text-sm">Gratuito</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/register"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5"
          >
            Começar Gratuitamente
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ver Demonstração
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-4">Baseado no currículo oficial HSK</p>
          <div className="flex justify-center items-center gap-8 opacity-50">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/60 text-sm">Repetição Espaçada</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/60 text-sm">Áudio Nativo</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/60 text-sm">Gamificação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
