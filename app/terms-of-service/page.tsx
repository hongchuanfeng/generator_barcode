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
        {t.legal.termsUseItems && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {t.legal.termsUseItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        {t.legal.termsUserAccountTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsUserAccountTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.termsUserAccountDesc}
            </p>
          </>
        )}
        
        {t.legal.termsIntellectualPropertyTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsIntellectualPropertyTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.termsIntellectualPropertyDesc}
            </p>
          </>
        )}
        
        {t.legal.termsUserContentTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsUserContentTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.termsUserContentDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsAvailabilityTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.termsAvailabilityDesc}
        </p>
        
        {t.legal.termsModificationsTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsModificationsTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.termsModificationsDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsLiabilityTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.termsLiabilityDesc}
        </p>
        
        {t.legal.termsIndemnificationTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsIndemnificationTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.termsIndemnificationDesc}
            </p>
          </>
        )}
        
        {t.legal.termsTerminationTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsTerminationTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.termsTerminationDesc}
            </p>
          </>
        )}
        
        {t.legal.termsGoverningLawTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsGoverningLawTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.termsGoverningLawDesc}
            </p>
          </>
        )}
        
        {t.legal.termsDisputeResolutionTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsDisputeResolutionTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.termsDisputeResolutionDesc}
            </p>
          </>
        )}
        
        {t.legal.termsSeverabilityTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsSeverabilityTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.termsSeverabilityDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.termsContactTitle}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.termsContactDesc}
        </p>
      </div>
    </div>
  )
}

