'use client'

import { useLocale } from '@/contexts/LocaleContext'

export default function TermsOfServicePage() {
  const { t } = useLocale()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t.legal.termsTitle}</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">
          {t.legal.termsUpdated}: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsAcceptanceTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.termsAcceptanceDesc}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsUseTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.termsUseDesc}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsAvailabilityTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.termsAvailabilityDesc}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsLiabilityTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.termsLiabilityDesc}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsContactTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.termsContactDesc}
        </p>
      </div>
    </div>
  )
}

