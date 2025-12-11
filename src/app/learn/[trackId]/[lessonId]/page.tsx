'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

interface VocabularyItem {
  id: number
  hanzi: string
  pinyin: string
  translation: string
  example?: string
  examplePinyin?: string
  exampleTranslation?: string
}

// Lesson data (would come from API in production)
const lessonsData: Record<string, {
  titleCN: string
  titlePT: string
  description: string
  vocabulary: VocabularyItem[]
}> = {
  'lesson-1': {
    titleCN: '问候',
    titlePT: 'Saudações Básicas',
    description: 'Aprenda a cumprimentar, agradecer e se despedir em chinês.',
    vocabulary: [
      { id: 1, hanzi: '你好', pinyin: 'nǐ hǎo', translation: 'Olá', example: '你好，我是安德森。', examplePinyin: 'Nǐ hǎo, wǒ shì Āndésēn.', exampleTranslation: 'Olá, eu sou Anderson.' },
      { id: 2, hanzi: '再见', pinyin: 'zài jiàn', translation: 'Tchau', example: '明天再见！', examplePinyin: 'Míngtiān zàijiàn!', exampleTranslation: 'Até amanhã!' },
      { id: 3, hanzi: '谢谢', pinyin: 'xiè xiè', translation: 'Obrigado', example: '谢谢你的帮助。', examplePinyin: 'Xièxiè nǐ de bāngzhù.', exampleTranslation: 'Obrigado pela sua ajuda.' },
      { id: 4, hanzi: '不客气', pinyin: 'bù kè qì', translation: 'De nada', example: '不客气，很高兴帮忙。', examplePinyin: 'Bù kèqì, hěn gāoxìng bāngmáng.', exampleTranslation: 'De nada, fico feliz em ajudar.' },
      { id: 5, hanzi: '对不起', pinyin: 'duì bu qǐ', translation: 'Desculpa', example: '对不起，我迟到了。', examplePinyin: 'Duìbuqǐ, wǒ chídào le.', exampleTranslation: 'Desculpa, eu me atrasei.' },
      { id: 6, hanzi: '没关系', pinyin: 'méi guān xì', translation: 'Não tem problema', example: '没关系，别担心。', examplePinyin: 'Méi guānxi, bié dānxīn.', exampleTranslation: 'Não tem problema, não se preocupe.' },
      { id: 7, hanzi: '早上好', pinyin: 'zǎo shang hǎo', translation: 'Bom dia', example: '早上好，今天天气很好！', examplePinyin: 'Zǎoshang hǎo, jīntiān tiānqì hěn hǎo!', exampleTranslation: 'Bom dia, o tempo está bom hoje!' },
      { id: 8, hanzi: '晚上好', pinyin: 'wǎn shang hǎo', translation: 'Boa noite', example: '晚上好，吃饭了吗？', examplePinyin: 'Wǎnshang hǎo, chīfàn le ma?', exampleTranslation: 'Boa noite, já comeu?' },
      { id: 9, hanzi: '请', pinyin: 'qǐng', translation: 'Por favor', example: '请坐。', examplePinyin: 'Qǐng zuò.', exampleTranslation: 'Por favor, sente-se.' },
      { id: 10, hanzi: '好', pinyin: 'hǎo', translation: 'Bom/OK', example: '好的，没问题。', examplePinyin: 'Hǎo de, méi wèntí.', exampleTranslation: 'OK, sem problema.' },
      { id: 11, hanzi: '您好', pinyin: 'nín hǎo', translation: 'Olá (formal)', example: '您好，请问您贵姓？', examplePinyin: 'Nín hǎo, qǐngwèn nín guìxìng?', exampleTranslation: 'Olá, qual é o seu sobrenome?' },
      { id: 12, hanzi: '欢迎', pinyin: 'huān yíng', translation: 'Bem-vindo', example: '欢迎来到中国！', examplePinyin: 'Huānyíng lái dào Zhōngguó!', exampleTranslation: 'Bem-vindo à China!' },
    ]
  },
  'lesson-2': {
    titleCN: '数字',
    titlePT: 'Números de 0 a 10',
    description: 'Domine os números básicos e aprenda a contar em chinês.',
    vocabulary: [
      { id: 1, hanzi: '零', pinyin: 'líng', translation: 'Zero', example: '零度', examplePinyin: 'líng dù', exampleTranslation: 'Zero graus' },
      { id: 2, hanzi: '一', pinyin: 'yī', translation: 'Um', example: '一个人', examplePinyin: 'yī gè rén', exampleTranslation: 'Uma pessoa' },
      { id: 3, hanzi: '二', pinyin: 'èr', translation: 'Dois', example: '二月', examplePinyin: 'èr yuè', exampleTranslation: 'Fevereiro' },
      { id: 4, hanzi: '三', pinyin: 'sān', translation: 'Três', example: '三个苹果', examplePinyin: 'sān gè píngguǒ', exampleTranslation: 'Três maçãs' },
      { id: 5, hanzi: '四', pinyin: 'sì', translation: 'Quatro', example: '四季', examplePinyin: 'sì jì', exampleTranslation: 'Quatro estações' },
      { id: 6, hanzi: '五', pinyin: 'wǔ', translation: 'Cinco', example: '五点钟', examplePinyin: 'wǔ diǎn zhōng', exampleTranslation: 'Cinco horas' },
      { id: 7, hanzi: '六', pinyin: 'liù', translation: 'Seis', example: '六月', examplePinyin: 'liù yuè', exampleTranslation: 'Junho' },
      { id: 8, hanzi: '七', pinyin: 'qī', translation: 'Sete', example: '七天', examplePinyin: 'qī tiān', exampleTranslation: 'Sete dias' },
      { id: 9, hanzi: '八', pinyin: 'bā', translation: 'Oito', example: '八月', examplePinyin: 'bā yuè', exampleTranslation: 'Agosto' },
      { id: 10, hanzi: '九', pinyin: 'jiǔ', translation: 'Nove', example: '九点', examplePinyin: 'jiǔ diǎn', exampleTranslation: 'Nove horas' },
      { id: 11, hanzi: '十', pinyin: 'shí', translation: 'Dez', example: '十分钟', examplePinyin: 'shí fēnzhōng', exampleTranslation: 'Dez minutos' },
      { id: 12, hanzi: '百', pinyin: 'bǎi', translation: 'Cem', example: '一百块', examplePinyin: 'yībǎi kuài', exampleTranslation: 'Cem yuan' },
      { id: 13, hanzi: '千', pinyin: 'qiān', translation: 'Mil', example: '一千米', examplePinyin: 'yīqiān mǐ', exampleTranslation: 'Mil metros' },
      { id: 14, hanzi: '两', pinyin: 'liǎng', translation: 'Dois (com classificador)', example: '两个小时', examplePinyin: 'liǎng gè xiǎoshí', exampleTranslation: 'Duas horas' },
      { id: 15, hanzi: '几', pinyin: 'jǐ', translation: 'Quantos?', example: '几点了？', examplePinyin: 'Jǐ diǎn le?', exampleTranslation: 'Que horas são?' },
    ]
  }
}

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const trackId = params.trackId as string
  const lessonId = params.lessonId as string

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showPinyin, setShowPinyin] = useState(true)
  const [showTranslation, setShowTranslation] = useState(true)
  const [flipped, setFlipped] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      setIsLoggedIn(!!user)
    }
    checkAuth()
  }, [])

  const lesson = lessonsData[lessonId]

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Lição não encontrada</h1>
        <p className="text-slate-600 mb-6">Esta lição ainda está em desenvolvimento.</p>
        <Link href={`/learn/${trackId}`} className="text-red-500 hover:text-red-600 font-medium">
          Voltar para a trilha
        </Link>
      </div>
    )
  }

  const currentWord = lesson.vocabulary[currentIndex]
  const progress = ((currentIndex + 1) / lesson.vocabulary.length) * 100

  const handleNext = () => {
    if (currentIndex < lesson.vocabulary.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setFlipped(false)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setFlipped(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext()
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === ' ') {
      e.preventDefault()
      setFlipped(!flipped)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, flipped])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link href="/learn" className="text-slate-500 hover:text-slate-700 text-sm">
          Trilhas
        </Link>
        <span className="mx-2 text-slate-400">/</span>
        <Link href={`/learn/${trackId}`} className="text-slate-500 hover:text-slate-700 text-sm">
          HSK 1
        </Link>
        <span className="mx-2 text-slate-400">/</span>
        <span className="text-slate-900 text-sm font-medium">{lesson.titlePT}</span>
      </nav>

      {/* Lesson Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-1">{lesson.titlePT}</h1>
        <p className="font-chinese text-xl text-slate-500 mb-2">{lesson.titleCN}</p>
        <p className="text-slate-600">{lesson.description}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-500 mb-2">
          <span>Progresso da lição</span>
          <span>{currentIndex + 1} de {lesson.vocabulary.length}</span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full">
          <div
            className="h-2 bg-red-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Flashcard */}
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-lg mb-8 cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        <div className="p-8 md:p-12 text-center min-h-[350px] flex flex-col justify-center">
          {/* Main Character */}
          <div className="font-chinese text-7xl md:text-9xl font-bold text-slate-900 mb-6">
            {currentWord.hanzi}
          </div>

          {/* Pinyin */}
          {(showPinyin || flipped) && (
            <div className="text-2xl text-red-500 mb-4">{currentWord.pinyin}</div>
          )}

          {/* Translation */}
          {(showTranslation || flipped) && (
            <div className="text-xl text-slate-600 mb-6">{currentWord.translation}</div>
          )}

          {/* Example (shown when flipped) */}
          {flipped && currentWord.example && (
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="font-chinese text-lg text-slate-800 mb-1">{currentWord.example}</p>
              <p className="text-sm text-red-400 mb-1">{currentWord.examplePinyin}</p>
              <p className="text-sm text-slate-500">{currentWord.exampleTranslation}</p>
            </div>
          )}
        </div>

        <div className="px-8 pb-6 text-center text-sm text-slate-400">
          {flipped ? 'Clique para esconder' : 'Clique para ver exemplo'}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
            currentIndex === 0
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </button>

        <div className="flex gap-2">
          {lesson.vocabulary.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentIndex(idx); setFlipped(false); }}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-red-500 scale-125'
                  : idx < currentIndex
                  ? 'bg-emerald-400'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === lesson.vocabulary.length - 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
            currentIndex === lesson.vocabulary.length - 1
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-red-500 text-white hover:bg-red-600'
          }`}
        >
          Próximo
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Options */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showPinyin}
            onChange={(e) => setShowPinyin(e.target.checked)}
            className="w-4 h-4 text-red-500 rounded"
          />
          <span className="text-sm text-slate-600">Mostrar pinyin</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showTranslation}
            onChange={(e) => setShowTranslation(e.target.checked)}
            className="w-4 h-4 text-red-500 rounded"
          />
          <span className="text-sm text-slate-600">Mostrar tradução</span>
        </label>
      </div>

      {/* Keyboard hints */}
      <div className="text-center text-sm text-slate-400 mb-8">
        Use as setas <kbd className="px-2 py-1 bg-slate-100 rounded text-xs">←</kbd>{' '}
        <kbd className="px-2 py-1 bg-slate-100 rounded text-xs">→</kbd> ou{' '}
        <kbd className="px-2 py-1 bg-slate-100 rounded text-xs">Espaço</kbd> para navegar
      </div>

      {/* Completion */}
      {currentIndex === lesson.vocabulary.length - 1 && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-xl font-bold text-emerald-800 mb-2">Parabéns!</h3>
          <p className="text-emerald-700 mb-6">
            Você completou todas as palavras desta lição!
          </p>
          {!isLoggedIn && (
            <p className="text-sm text-emerald-600 mb-4">
              <Link href="/register" className="underline">Cadastre-se</Link> para salvar seu progresso.
            </p>
          )}
          <div className="flex justify-center gap-4">
            <Link
              href={`/learn/${trackId}`}
              className="px-6 py-3 bg-white text-emerald-700 font-medium rounded-xl border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              Voltar à trilha
            </Link>
            <button
              onClick={() => { setCurrentIndex(0); setFlipped(false); }}
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
            >
              Revisar novamente
            </button>
          </div>
        </div>
      )}

      {/* All vocabulary list */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Vocabulário da Lição</h2>
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Caractere</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Pinyin</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Tradução</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {lesson.vocabulary.map((word, idx) => (
                <tr
                  key={word.id}
                  className={`hover:bg-slate-50 cursor-pointer ${idx === currentIndex ? 'bg-red-50' : ''}`}
                  onClick={() => { setCurrentIndex(idx); setFlipped(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  <td className="px-6 py-4 font-chinese text-lg">{word.hanzi}</td>
                  <td className="px-6 py-4 text-red-500">{word.pinyin}</td>
                  <td className="px-6 py-4 text-slate-600">{word.translation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
