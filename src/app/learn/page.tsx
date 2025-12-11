'use client'

import Link from 'next/link'

const tracks = [
  {
    id: 'hsk1',
    level: 1,
    titleCN: '汉语水平考试一级',
    titlePT: 'HSK 1 - Iniciante',
    description: 'Fundamentos do mandarim: saudações, números, cores, família e vocabulário essencial.',
    wordCount: 150,
    lessonCount: 9,
    color: 'emerald',
    available: true
  },
  {
    id: 'hsk2',
    level: 2,
    titleCN: '汉语水平考试二级',
    titlePT: 'HSK 2 - Básico',
    description: 'Expanda seu vocabulário com temas do dia-a-dia: compras, transporte, clima.',
    wordCount: 300,
    lessonCount: 12,
    color: 'blue',
    available: false
  },
  {
    id: 'hsk3',
    level: 3,
    titleCN: '汉语水平考试三级',
    titlePT: 'HSK 3 - Intermediário',
    description: 'Comunicação intermediária: expressões idiomáticas, gramática avançada.',
    wordCount: 600,
    lessonCount: 15,
    color: 'amber',
    available: false
  },
  {
    id: 'hsk4',
    level: 4,
    titleCN: '汉语水平考试四级',
    titlePT: 'HSK 4 - Intermediário Superior',
    description: 'Fluência em tópicos variados: cultura, tecnologia, notícias.',
    wordCount: 1200,
    lessonCount: 18,
    color: 'purple',
    available: false
  },
  {
    id: 'hsk5',
    level: 5,
    titleCN: '汉语水平考试五级',
    titlePT: 'HSK 5 - Avançado',
    description: 'Nível avançado: literatura, negócios, expressões sofisticadas.',
    wordCount: 2500,
    lessonCount: 20,
    color: 'rose',
    available: false
  },
  {
    id: 'hsk6',
    level: 6,
    titleCN: '汉语水平考试六级',
    titlePT: 'HSK 6 - Proficiente',
    description: 'Domínio completo: nuances linguísticas, textos acadêmicos.',
    wordCount: 5000,
    lessonCount: 24,
    color: 'red',
    available: false
  }
]

export default function LearnPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Trilhas de Aprendizado
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Siga o currículo oficial HSK (Hanyu Shuiping Kaoshi) e progrida
          do iniciante ao proficiente em mandarim.
        </p>
      </div>

      {/* Tracks Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
              track.available
                ? 'border-slate-200 hover:border-red-200 hover:shadow-xl cursor-pointer'
                : 'border-slate-100 opacity-70'
            }`}
          >
            {/* Level indicator */}
            <div className={`h-2 bg-${track.color}-500`} />

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-${track.color}-100 flex items-center justify-center`}>
                  <span className={`text-2xl font-bold text-${track.color}-600`}>{track.level}</span>
                </div>
                {!track.available && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 rounded-lg text-xs text-slate-500">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Em breve
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">{track.titlePT}</h3>
              <p className="text-sm font-chinese text-slate-500 mb-3">{track.titleCN}</p>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {track.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {track.lessonCount} lições
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  {track.wordCount} palavras
                </span>
              </div>

              {/* Action */}
              {track.available ? (
                <Link
                  href={`/learn/${track.id}`}
                  className="block w-full text-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-xl transition-all"
                >
                  Começar Trilha
                </Link>
              ) : (
                <button
                  disabled
                  className="block w-full text-center bg-slate-100 text-slate-400 font-semibold py-3 rounded-xl cursor-not-allowed"
                >
                  Bloqueado
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          O que é o HSK?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          O <strong>HSK (Hanyu Shuiping Kaoshi)</strong> é o exame oficial de proficiência em chinês
          reconhecido internacionalmente. Nosso currículo segue exatamente os padrões do HSK,
          permitindo que você se prepare para os exames enquanto aprende.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="font-bold text-slate-900 mb-1">HSK 1-2</div>
            <div className="text-sm text-slate-600">Comunicação básica do dia-a-dia</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="font-bold text-slate-900 mb-1">HSK 3-4</div>
            <div className="text-sm text-slate-600">Conversação fluente em diversos tópicos</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="font-bold text-slate-900 mb-1">HSK 5-6</div>
            <div className="text-sm text-slate-600">Domínio profissional e acadêmico</div>
          </div>
        </div>
      </div>
    </div>
  )
}
