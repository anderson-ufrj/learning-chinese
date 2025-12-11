'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

interface UserStats {
  totalWords: number
  wordsLearned: number
  currentStreak: number
  totalXP: number
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<UserStats>({
    totalWords: 150,
    wordsLearned: 0,
    currentStreak: 0,
    totalXP: 0
  })

  useEffect(() => {
    const supabase = createClient()

    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login?redirect=/dashboard')
        return
      }
      setUser(user)
      setLoading(false)
    }

    checkUser()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Bem-vindo de volta!
        </h1>
        <p className="text-slate-600">
          Continue sua jornada no aprendizado do mandarim.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <div className="text-3xl font-bold text-slate-900">{stats.wordsLearned}</div>
          <div className="text-sm text-slate-500">Palavras aprendidas</div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <div className="text-3xl font-bold text-slate-900">{stats.currentStreak}</div>
          <div className="text-sm text-slate-500">Dias de streak</div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <div className="text-3xl font-bold text-slate-900">{stats.totalXP}</div>
          <div className="text-sm text-slate-500">XP total</div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <div className="text-3xl font-bold text-slate-900">
            {Math.round((stats.wordsLearned / stats.totalWords) * 100)}%
          </div>
          <div className="text-sm text-slate-500">HSK 1 completo</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Continue Learning */}
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Continuar Aprendendo</h2>
          <p className="text-white/80 mb-6">
            Retome de onde parou na trilha HSK 1
          </p>
          <Link
            href="/learn/hsk1"
            className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold py-3 px-6 rounded-xl hover:bg-red-50 transition-colors"
          >
            Continuar
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Daily Review */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Revisão Diária</h2>
              <p className="text-slate-600">
                Revise palavras usando repetição espaçada
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
          <div className="text-4xl font-bold text-slate-900 mb-4">0</div>
          <p className="text-sm text-slate-500 mb-4">palavras para revisar hoje</p>
          <Link
            href="/review"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            Iniciar revisão
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Learning Tracks */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Trilhas de Aprendizado</h2>
          <Link href="/learn" className="text-red-500 hover:text-red-600 font-medium text-sm">
            Ver todas
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* HSK 1 */}
          <Link href="/learn/hsk1" className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">HSK 1</h3>
                <p className="text-sm text-slate-500">Iniciante</p>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600">Progresso</span>
                <span className="text-slate-900 font-medium">0%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full">
                <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            <p className="text-sm text-slate-500">150 palavras | 9 lições</p>
          </Link>

          {/* HSK 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 opacity-60">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-400">HSK 2</h3>
                <p className="text-sm text-slate-400">Básico</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Complete HSK 1 para desbloquear
            </div>
          </div>

          {/* HSK 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 opacity-60">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-400">HSK 3</h3>
                <p className="text-sm text-slate-400">Intermediário</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Complete HSK 2 para desbloquear
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-6">Atividade Recente</h2>
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Comece sua jornada!</h3>
          <p className="text-slate-600 mb-6">
            Complete sua primeira lição para ver seu progresso aqui.
          </p>
          <Link
            href="/learn/hsk1"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Começar agora
          </Link>
        </div>
      </div>
    </div>
  )
}
