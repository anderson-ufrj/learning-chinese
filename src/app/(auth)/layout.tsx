export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-china-red/10 via-white to-brazil-green/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="font-chinese text-4xl font-bold text-china-red mb-2">
            学习中文
          </h1>
          <p className="font-portuguese text-gray-600">
            Aprenda Chinês Mandarim
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {children}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Feito com carinho para brasileiros aprenderem chinês
        </p>
      </div>
    </div>
  )
}
