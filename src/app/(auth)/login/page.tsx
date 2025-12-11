'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import LoginForm from '@/components/auth/LoginForm'
import OAuthButtons from '@/components/auth/OAuthButtons'

function LoginContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect') || '/dashboard'

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const supabase = createClient()

  const handleEmailLogin = async (email: string, password: string) => {
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push(redirectTo)
    router.refresh()
  }

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback?redirect=${redirectTo}`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="font-portuguese text-2xl font-bold text-gray-800 mb-2">
          Bem-vindo de volta!
        </h2>
        <p className="text-gray-600">
          Entre para continuar sua jornada
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <OAuthButtons onOAuth={handleOAuthLogin} loading={loading} />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">ou continue com email</span>
        </div>
      </div>

      <LoginForm onSubmit={handleEmailLogin} loading={loading} />

      <p className="text-center text-gray-600 text-sm">
        Não tem uma conta?{' '}
        <Link href="/register" className="text-china-red hover:underline font-medium">
          Cadastre-se grátis
        </Link>
      </p>
    </div>
  )
}

function LoginLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="text-center">
        <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
      </div>
      <div className="space-y-3">
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginLoading />}>
      <LoginContent />
    </Suspense>
  )
}
