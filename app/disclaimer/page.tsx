'use client'

import { useLocale } from '@/contexts/LocaleContext'

export default function DisclaimerPage() {
  const { t } = useLocale()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t.legal.disclaimerTitle || 'Disclaimer'}</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">
          {t.legal.termsUpdated}: {new Date().toLocaleDateString()}
        </p>
        
        {t.legal.disclaimerIntroTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.disclaimerIntroTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.disclaimerIntroDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.disclaimerNoWarrantyTitle || 'No Warranty'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.disclaimerNoWarrantyDesc || 'Our barcode generator service is provided "as is" without any warranties, expressed or implied. We do not guarantee that the service will be uninterrupted, error-free, or meet your specific requirements.'}
        </p>
        {t.legal.disclaimerNoWarrantyItems && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {t.legal.disclaimerNoWarrantyItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.disclaimerAccuracyTitle || 'Accuracy of Barcodes'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.disclaimerAccuracyDesc || 'While we strive to generate accurate barcodes, we cannot guarantee that all generated barcodes will be scannable or meet industry standards. Users are responsible for verifying the accuracy and functionality of generated barcodes.'}
        </p>
        {t.legal.disclaimerAccuracyItems && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {t.legal.disclaimerAccuracyItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.disclaimerLiabilityTitle || 'Limitation of Liability'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.disclaimerLiabilityDesc || 'We shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our service.'}
        </p>
        {t.legal.disclaimerLiabilityItems && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {t.legal.disclaimerLiabilityItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        {t.legal.disclaimerThirdPartyTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.disclaimerThirdPartyTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.disclaimerThirdPartyDesc}
            </p>
          </>
        )}
        
        {t.legal.disclaimerUseAtOwnRiskTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.disclaimerUseAtOwnRiskTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.disclaimerUseAtOwnRiskDesc}
            </p>
            {t.legal.disclaimerUseAtOwnRiskItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.disclaimerUseAtOwnRiskItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {t.legal.disclaimerModificationsTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.disclaimerModificationsTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.disclaimerModificationsDesc}
            </p>
          </>
        )}
        
        {t.legal.disclaimerJurisdictionTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.disclaimerJurisdictionTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.disclaimerJurisdictionDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.disclaimerContactTitle || 'Contact Us'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.disclaimerContactDesc || 'For questions about this disclaimer, contact us at barcode@chdaoai.com'}
        </p>
      </div>
    </div>
  )
}

