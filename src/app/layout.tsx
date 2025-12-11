import type { Metadata } from 'next'
import { Inter, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aprenda Chinês Mandarim - 学习中文',
  description: 'Aprenda chinês mandarim com um método divertido e eficaz. Curso completo com lições interativas, áudio nativo e exercícios práticos.',
  keywords: 'aprender chinês, mandarim, curso de chinês, língua chinesa, 中文, 汉语',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${notoSansSC.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-portuguese antialiased">
        {children}
      </body>
    </html>
  )
}