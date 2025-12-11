'use client'

import React from 'react'
import Link from 'next/link'

interface Feature {
  icon: React.ReactNode;
  titleCN: string;
  titlePT: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    titleCN: '互动课程',
    titlePT: 'Lições Interativas',
    description: 'Exercícios dinâmicos que tornam o estudo envolvente e eficaz.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    titleCN: '母语发音',
    titlePT: 'Pronúncia Nativa',
    description: 'Áudio de falantes nativos para aperfeiçoar seu sotaque.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    titleCN: '完整课程',
    titlePT: 'Curso Completo',
    description: 'Do básico ao avançado, com conteúdo estruturado HSK 1-6.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    titleCN: '成就系统',
    titlePT: 'Gamificação',
    description: 'Conquistas, XP e streaks para manter sua motivação.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    titleCN: '间隔重复',
    titlePT: 'Repetição Espaçada',
    description: 'Algoritmo SM-2 para memorização de longo prazo.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    titleCN: '随时随地',
    titlePT: 'Aprenda em Qualquer Lugar',
    description: 'Acesse de qualquer dispositivo, no seu ritmo.'
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
            Recursos
          </span>
          <h2 className="font-portuguese text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Tudo que você precisa para
            <span className="block text-red-500">dominar o mandarim</span>
          </h2>
          <p className="font-portuguese text-lg text-slate-600 max-w-2xl mx-auto">
            Combinamos tecnologia moderna com métodos pedagógicos comprovados
            para criar a melhor experiência de aprendizado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100 hover:border-slate-200"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/25">
                {feature.icon}
              </div>

              {/* Chinese Title */}
              <div className="font-chinese text-lg text-red-500/80 mb-1">
                {feature.titleCN}
              </div>

              {/* Portuguese Title */}
              <h3 className="font-portuguese text-xl font-semibold text-slate-900 mb-3">
                {feature.titlePT}
              </h3>

              {/* Description */}
              <p className="font-portuguese text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-slate-900/25"
          >
            Comece Sua Jornada
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
