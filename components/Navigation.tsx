'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLocale } from '@/contexts/LocaleContext'
import type { Locale } from '@/lib/i18n'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, setLocale, t } = useLocale()
  const languageOptions: { value: Locale; label: string }[] = [
    { value: 'en', label: 'English' },
    { value: 'zh', label: '中文' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'ar', label: 'العربية' },
    { value: 'ru', label: 'Русский' },
    { value: 'pt', label: 'Português' },
    { value: 'de', label: 'Deutsch' },
    { value: 'ja', label: '日本語' },
  ]

  const handleLocaleChange = (newLocale: Locale) => {
    if (locale !== newLocale) {
      setLocale(newLocale)
    }
  }

  return (
    <nav className="bg-white/90 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
            <span className="text-3xl">📊</span>
            Barcode Generator
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t.nav.contact}
            </Link>
            <div className="border-l pl-4">
              <label className="sr-only" htmlFor="desktop-language-select">
                Language
              </label>
              <select
                id="desktop-language-select"
                value={locale}
                onChange={(e) => handleLocaleChange(e.target.value as Locale)}
                className="px-3 py-2 border rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500 min-w-[130px]"
              >
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.contact}
            </Link>
            <div className="px-4 pt-2">
              <label className="sr-only" htmlFor="mobile-language-select">
                Language
              </label>
              <select
                id="mobile-language-select"
                value={locale}
                onChange={(e) => {
                  handleLocaleChange(e.target.value as Locale)
                  setIsOpen(false)
                }}
                className="w-full px-3 py-2 border rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500"
              >
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

