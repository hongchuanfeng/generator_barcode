'use client'

import { useLocale } from '@/contexts/LocaleContext'

export default function CopyrightPage() {
  const { t } = useLocale()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t.legal.copyrightTitle || 'Copyright Notice'}</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">
          {t.legal.termsUpdated}: {new Date().toLocaleDateString()}
        </p>
        
        {t.legal.copyrightIntroTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.copyrightIntroTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.copyrightIntroDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.copyrightOwnershipTitle || 'Copyright Ownership'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.copyrightOwnershipDesc || 'All content, design, and functionality of this website, including but not limited to text, graphics, logos, and software, are the property of Barcode Generator and are protected by copyright laws.'}
        </p>
        {t.legal.copyrightOwnershipItems && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {t.legal.copyrightOwnershipItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.copyrightUserContentTitle || 'User-Generated Content'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.copyrightUserContentDesc || 'Barcodes generated using our service are created by users and belong to the users who generated them. We do not claim ownership of user-generated barcodes.'}
        </p>
        
        {t.legal.copyrightPermittedUseTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.copyrightPermittedUseTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.copyrightPermittedUseDesc}
            </p>
            {t.legal.copyrightPermittedUseItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.copyrightPermittedUseItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {t.legal.copyrightProhibitedUseTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.copyrightProhibitedUseTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.copyrightProhibitedUseDesc}
            </p>
            {t.legal.copyrightProhibitedUseItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.copyrightProhibitedUseItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {t.legal.copyrightThirdPartyTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.copyrightThirdPartyTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.copyrightThirdPartyDesc}
            </p>
          </>
        )}
        
        {t.legal.copyrightInfringementTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.copyrightInfringementTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.copyrightInfringementDesc}
            </p>
            {t.legal.copyrightInfringementItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.copyrightInfringementItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {t.legal.copyrightDMCATitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.copyrightDMCATitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.copyrightDMCADesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.copyrightContactTitle || 'Contact Us'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.copyrightContactDesc || 'For copyright inquiries, contact us at barcode@chdaoai.com'}
        </p>
      </div>
    </div>
  )
}

