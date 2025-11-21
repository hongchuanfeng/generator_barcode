'use client'

import { LocaleProvider } from '@/contexts/LocaleContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </LocaleProvider>
  )
}

