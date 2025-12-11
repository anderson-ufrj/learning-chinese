'use client'

import React from 'react'
import Link from 'next/link'

interface Lesson {
  id: number;
  icon: React.ReactNode;
  titleCN: string;
  titlePT: string;
  description: string;
  examples: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  wordCount: number;
}

const lessons: Lesson[] = [
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    titleCN: '问候',
    titlePT: 'Saudações',
    description: 'Aprenda as saudações básicas em chinês para iniciar conversas.',
    examples: ['你好 (nǐ hǎo)', '再见 (zài jiàn)', '谢谢 (xiè xiè)'],
    difficulty: 'beginner',
    wordCount: 12
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
    titleCN: '数字',
    titlePT: 'Números',
    description: 'Domine os números de 1 a 100 e aprenda a contar.',
    examples: ['一 (yī)', '二 (èr)', '十 (shí)'],
    difficulty: 'beginner',
    wordCount: 15
  },
  {
    id: 3,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    titleCN: '家庭',
    titlePT: 'Família',
    description: 'Conheça os membros da família e suas relações.',
    examples: ['爸爸 (bà ba)', '妈妈 (mā ma)', '家人 (jiā rén)'],
    difficulty: 'beginner',
    wordCount: 18
  },
  {
    id: 4,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    titleCN: '颜色',
    titlePT: 'Cores',
    description: 'Aprenda as cores básicas e como descrever objetos.',
    examples: ['红色 (hóng sè)', '蓝色 (lán sè)', '绿色 (lǜ sè)'],
    difficulty: 'beginner',
    wordCount: 10
  },
  {
    id: 5,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    titleCN: '食物',
    titlePT: 'Comidas',
    description: 'Explore a culinária chinesa e os nomes dos alimentos.',
    examples: ['米饭 (mǐ fàn)', '面条 (miàn tiáo)', '茶 (chá)'],
    difficulty: 'intermediate',
    wordCount: 20
  },
  {
    id: 6,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    titleCN: '星期',
    titlePT: 'Dias da Semana',
    description: 'Aprenda os dias da semana e expressões de tempo.',
    examples: ['星期一 (xīng qī yī)', '今天 (jīn tiān)', '明天 (míng tiān)'],
    difficulty: 'intermediate',
    wordCount: 14
  }
]

const getDifficultyConfig = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner':
      return { label: 'Iniciante', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' }
    case 'intermediate':
      return { label: 'Intermediário', color: 'bg-amber-500/10 text-amber-600 border-amber-500/20' }
    case 'advanced':
      return { label: 'Avançado', color: 'bg-red-500/10 text-red-600 border-red-500/20' }
    default:
      return { label: 'Desconhecido', color: 'bg-slate-500/10 text-slate-600 border-slate-500/20' }
  }
}

export default function Lessons() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white text-sm font-medium mb-4">
            HSK 1
          </span>
          <h2 className="font-portuguese text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Comece sua jornada
          </h2>
          <p className="font-portuguese text-lg text-slate-600 max-w-2xl mx-auto">
            Lições estruturadas do básico ao avançado.
            Cada lição inclui vocabulário, exemplos e quizzes interativos.
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => {
            const diffConfig = getDifficultyConfig(lesson.difficulty)
            return (
              <div
                key={lesson.id}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 relative overflow-hidden"
              >
                {/* Lesson number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <span className="text-sm font-semibold text-slate-500">{lesson.id}</span>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                  {lesson.icon}
                </div>

                {/* Titles */}
                <div className="mb-4">
                  <h3 className="font-chinese text-2xl font-bold text-red-500 mb-1">
                    {lesson.titleCN}
                  </h3>
                  <h4 className="font-portuguese text-lg font-semibold text-slate-900">
                    {lesson.titlePT}
                  </h4>
                </div>

                {/* Description */}
                <p className="font-portuguese text-slate-600 text-sm mb-4 leading-relaxed">
                  {lesson.description}
                </p>

                {/* Examples Preview */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {lesson.examples.slice(0, 3).map((example, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-chinese text-slate-600"
                    >
                      {example}
                    </span>
                  ))}
                </div>

                {/* Meta info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${diffConfig.color}`}>
                    {diffConfig.label}
                  </span>
                  <span className="text-xs text-slate-500">
                    {lesson.wordCount} palavras
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/90 to-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                  <Link
                    href={`/learn/hsk1/lesson-${lesson.id}`}
                    className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold py-3 px-6 rounded-xl text-sm hover:bg-slate-50 transition-colors"
                  >
                    Iniciar Lição
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            Ver todas as trilhas de aprendizado
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
