'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

// HSK 1 lessons data
const hsk1Lessons = [
  {
    id: 'lesson-1',
    number: 1,
    titleCN: '问候',
    titlePT: 'Saudações Básicas',
    description: 'Aprenda a cumprimentar e se despedir em chinês.',
    vocabulary: ['你好', '再见', '谢谢', '不客气', '对不起', '没关系'],
    wordCount: 12,
    duration: '15 min'
  },
  {
    id: 'lesson-2',
    number: 2,
    titleCN: '数字',
    titlePT: 'Números de 0 a 10',
    description: 'Domine os números básicos e aprenda a contar.',
    vocabulary: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '零'],
    wordCount: 15,
    duration: '20 min'
  },
  {
    id: 'lesson-3',
    number: 3,
    titleCN: '自我介绍',
    titlePT: 'Apresentações',
    description: 'Aprenda a se apresentar e perguntar o nome.',
    vocabulary: ['我', '你', '他', '她', '叫', '什么', '名字', '是'],
    wordCount: 14,
    duration: '18 min'
  },
  {
    id: 'lesson-4',
    number: 4,
    titleCN: '家庭',
    titlePT: 'Família',
    description: 'Vocabulário sobre membros da família.',
    vocabulary: ['爸爸', '妈妈', '哥哥', '姐姐', '弟弟', '妹妹', '家'],
    wordCount: 16,
    duration: '22 min'
  },
  {
    id: 'lesson-5',
    number: 5,
    titleCN: '颜色',
    titlePT: 'Cores',
    description: 'Aprenda as cores básicas em chinês.',
    vocabulary: ['红色', '蓝色', '绿色', '黄色', '白色', '黑色'],
    wordCount: 10,
    duration: '15 min'
  },
  {
    id: 'lesson-6',
    number: 6,
    titleCN: '时间',
    titlePT: 'Tempo e Datas',
    description: 'Dias da semana, meses e expressões de tempo.',
    vocabulary: ['今天', '明天', '昨天', '星期', '月', '年', '点', '分'],
    wordCount: 18,
    duration: '25 min'
  },
  {
    id: 'lesson-7',
    number: 7,
    titleCN: '食物',
    titlePT: 'Comida e Bebida',
    description: 'Vocabulário de alimentos e bebidas comuns.',
    vocabulary: ['米饭', '面条', '水', '茶', '咖啡', '吃', '喝'],
    wordCount: 20,
    duration: '25 min'
  },
  {
    id: 'lesson-8',
    number: 8,
    titleCN: '地方',
    titlePT: 'Lugares',
    description: 'Locais comuns e direções básicas.',
    vocabulary: ['学校', '医院', '商店', '家', '这里', '那里', '在'],
    wordCount: 22,
    duration: '28 min'
  },
  {
    id: 'lesson-9',
    number: 9,
    titleCN: '动作',
    titlePT: 'Ações e Verbos',
    description: 'Verbos essenciais para o dia-a-dia.',
    vocabulary: ['去', '来', '看', '听', '说', '写', '读', '工作', '学习'],
    wordCount: 23,
    duration: '30 min'
  }
]

export default function TrackPage() {
  const params = useParams()
  const trackId = params.trackId as string

  if (trackId !== 'hsk1') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Trilha não disponível</h1>
        <p className="text-slate-600 mb-6">Esta trilha ainda está em desenvolvimento.</p>
        <Link href="/learn" className="text-red-500 hover:text-red-600 font-medium">
          Voltar para trilhas
        </Link>
      </div>
    )
  }

  const totalWords = hsk1Lessons.reduce((acc, l) => acc + l.wordCount, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link href="/learn" className="text-slate-500 hover:text-slate-700 text-sm">
          Trilhas
        </Link>
        <span className="mx-2 text-slate-400">/</span>
        <span className="text-slate-900 text-sm font-medium">HSK 1</span>
      </nav>

      {/* Track Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              Nível Iniciante
            </span>
            <h1 className="text-3xl font-bold mb-2">HSK 1 - Fundamentos</h1>
            <p className="font-chinese text-xl text-white/80 mb-4">汉语水平考试一级</p>
            <p className="text-white/80 max-w-xl">
              Domine os fundamentos do mandarim: saudações, números, cores, família
              e vocabulário essencial para comunicação básica.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center">
              <span className="text-5xl font-bold">1</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
          <div>
            <div className="text-2xl font-bold">{hsk1Lessons.length}</div>
            <div className="text-white/70 text-sm">Lições</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{totalWords}</div>
            <div className="text-white/70 text-sm">Palavras</div>
          </div>
          <div>
            <div className="text-2xl font-bold">0%</div>
            <div className="text-white/70 text-sm">Completo</div>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Lições</h2>

        {hsk1Lessons.map((lesson, index) => (
          <Link
            key={lesson.id}
            href={`/learn/hsk1/${lesson.id}`}
            className="group block bg-white rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all overflow-hidden"
          >
            <div className="flex items-center">
              {/* Lesson Number */}
              <div className="w-20 h-full bg-slate-50 flex items-center justify-center border-r border-slate-100 py-6">
                <span className="text-2xl font-bold text-slate-300 group-hover:text-red-400 transition-colors">
                  {String(lesson.number).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-red-500 transition-colors">
                      {lesson.titlePT}
                    </h3>
                    <p className="font-chinese text-slate-500 text-sm">{lesson.titleCN}</p>
                    <p className="text-slate-600 text-sm mt-1">{lesson.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500">{lesson.wordCount} palavras</div>
                    <div className="text-xs text-slate-400">{lesson.duration}</div>
                  </div>
                </div>

                {/* Vocabulary preview */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {lesson.vocabulary.slice(0, 5).map((word, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-100 rounded text-xs font-chinese text-slate-600"
                    >
                      {word}
                    </span>
                  ))}
                  {lesson.vocabulary.length > 5 && (
                    <span className="px-2 py-0.5 text-xs text-slate-400">
                      +{lesson.vocabulary.length - 5} mais
                    </span>
                  )}
                </div>
              </div>

              {/* Arrow */}
              <div className="px-4">
                <svg className="w-5 h-5 text-slate-300 group-hover:text-red-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
