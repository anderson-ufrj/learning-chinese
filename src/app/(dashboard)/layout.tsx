import Header from '@/components/navigation/Header'
import Footer from '@/components/Footer'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 pt-16">
        {children}
      </main>
      <Footer />
    </>
  )
}
