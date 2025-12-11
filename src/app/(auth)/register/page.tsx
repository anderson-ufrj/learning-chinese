'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import RegisterForm from '@/components/auth/RegisterForm'
import OAuthButtons from '@/components/auth/OAuthButtons'
import type { SupabaseClient } from '@supabase/supabase-js'

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null)

  // Initialize Supabase client only on client-side
  useEffect(() => {
    setSupabase(createClient())
  }, [])

  const handleEmailRegister = async (name: string, email: string, password: string) => {
    if (!supabase) return
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    if (!supabase) return
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  // Loading state while Supabase initializes
  if (!supabase) {
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

  if (success) {
    return (
      <div className="text-center space-y-4">
        <div className="text-6xl">📧</div>
        <h2 className="font-portuguese text-2xl font-bold text-gray-800">
          Verifique seu email
        </h2>
        <p className="text-gray-600">
          Enviamos um link de confirmação para seu email.
          Clique no link para ativar sua conta.
        </p>
        <Link
          href="/login"
          className="inline-block text-china-red hover:underline font-medium"
        >
          Voltar para o login
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="font-portuguese text-2xl font-bold text-gray-800 mb-2">
          Crie sua conta
        </h2>
        <p className="text-gray-600">
          Comece a aprender chinês hoje mesmo
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
          <span className="px-4 bg-white text-gray-500">ou cadastre com email</span>
        </div>
      </div>

      <RegisterForm onSubmit={handleEmailRegister} loading={loading} />

      <p className="text-center text-gray-600 text-sm">
        Já tem uma conta?{' '}
        <Link href="/login" className="text-china-red hover:underline font-medium">
          Entrar
        </Link>
      </p>
    </div>
  )
}
