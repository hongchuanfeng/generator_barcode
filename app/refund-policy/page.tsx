'use client'

import { useLocale } from '@/contexts/LocaleContext'

export default function RefundPolicyPage() {
  const { t } = useLocale()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t.legal.refundTitle || 'Refund Policy'}</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">
          {t.legal.termsUpdated}: {new Date().toLocaleDateString()}
        </p>
        
        {t.legal.refundIntroTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.refundIntroTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.refundIntroDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.refundFreeServiceTitle || 'Free Service'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.refundFreeServiceDesc || 'Our barcode generator service is provided free of charge. As such, there are no payments to refund. All features are available at no cost to users.'}
        </p>
        
        {t.legal.refundFuturePaidTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.refundFuturePaidTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.refundFuturePaidDesc}
            </p>
            {t.legal.refundFuturePaidItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.refundFuturePaidItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {t.legal.refundEligibilityTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.refundEligibilityTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.refundEligibilityDesc}
            </p>
            {t.legal.refundEligibilityItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.refundEligibilityItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {t.legal.refundNonEligibleTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.refundNonEligibleTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.refundNonEligibleDesc}
            </p>
            {t.legal.refundNonEligibleItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.refundNonEligibleItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {t.legal.refundProcessTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.refundProcessTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.refundProcessDesc}
            </p>
            {t.legal.refundProcessItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.refundProcessItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {t.legal.refundProcessingTimeTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.refundProcessingTimeTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.refundProcessingTimeDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.refundContactTitle || 'Contact Us'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.refundContactDesc || 'For questions about refunds, contact us at barcode@chdaoai.com'}
        </p>
      </div>
    </div>
  )
}

