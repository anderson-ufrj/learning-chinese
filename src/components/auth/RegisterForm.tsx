'use client'

import { useState } from 'react'

interface RegisterFormProps {
  onSubmit: (name: string, email: string, password: string) => Promise<void>
  loading: boolean
}

export default function RegisterForm({ onSubmit, loading }: RegisterFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordError(null)

    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem')
      return
    }

    if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres')
      return
    }

    await onSubmit(name, email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nome completo
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-china-red focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-china-red focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Senha
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
          minLength={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-china-red focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Mínimo 6 caracteres"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
          Confirmar senha
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled={loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-china-red focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Digite a senha novamente"
        />
      </div>

      {passwordError && (
        <div className="text-red-600 text-sm">
          {passwordError}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brazil-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Criando conta...
          </span>
        ) : (
          'Criar conta grátis'
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Ao criar uma conta, você concorda com nossos Termos de Uso e Política de Privacidade.
      </p>
    </form>
  )
}
