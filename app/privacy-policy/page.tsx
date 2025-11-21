'use client'

import { useLocale } from '@/contexts/LocaleContext'

export default function PrivacyPolicyPage() {
  const { t } = useLocale()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t.legal.privacyTitle}</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">
          {t.legal.termsUpdated}: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.privacyIntroTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.privacyIntroDesc}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.privacyCollectTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.privacyCollectDesc}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          {t.legal.privacyCollectItems.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.privacyUseTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.privacyUseDesc}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          {t.legal.privacyUseItems.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.privacySecurityTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.privacySecurityDesc}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.privacyContactTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.privacyContactDesc}
        </p>
      </div>
    </div>
  )
}

