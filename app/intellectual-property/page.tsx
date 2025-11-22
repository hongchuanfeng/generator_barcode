'use client'

import { useLocale } from '@/contexts/LocaleContext'

export default function IntellectualPropertyPage() {
  const { t } = useLocale()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t.legal.intellectualPropertyTitle || 'Intellectual Property Statement'}</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">
          {t.legal.termsUpdated}: {new Date().toLocaleDateString()}
        </p>
        
        {t.legal.intellectualPropertyIntroTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.intellectualPropertyIntroTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.intellectualPropertyIntroDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.intellectualPropertyOwnershipTitle || 'Ownership'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.intellectualPropertyOwnershipDesc || 'All intellectual property rights in our barcode generator service, including trademarks, copyrights, and patents, are owned by Barcode Generator or our licensors.'}
        </p>
        {t.legal.intellectualPropertyOwnershipItems && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {t.legal.intellectualPropertyOwnershipItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.intellectualPropertyTrademarksTitle || 'Trademarks'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.intellectualPropertyTrademarksDesc || 'All trademarks, service marks, and trade names used on this website are the property of their respective owners. Use of our trademarks requires our prior written consent.'}
        </p>
        {t.legal.intellectualPropertyTrademarksItems && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {t.legal.intellectualPropertyTrademarksItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        {t.legal.intellectualPropertyTrademarkUseTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.intellectualPropertyTrademarkUseTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.intellectualPropertyTrademarkUseDesc}
            </p>
          </>
        )}
        
        {t.legal.intellectualPropertyCopyrightTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.intellectualPropertyCopyrightTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.intellectualPropertyCopyrightDesc}
            </p>
            {t.legal.intellectualPropertyCopyrightItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.intellectualPropertyCopyrightItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.intellectualPropertyThirdPartyTitle || 'Third-Party Libraries'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.intellectualPropertyThirdPartyDesc || 'Our service uses third-party libraries and software. These are subject to their respective licenses and intellectual property rights. We respect all third-party intellectual property.'}
        </p>
        {t.legal.intellectualPropertyThirdPartyItems && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {t.legal.intellectualPropertyThirdPartyItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.intellectualPropertyUserContentTitle || 'User Content'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.intellectualPropertyUserContentDesc || 'Users retain all rights to barcodes they generate using our service. We do not claim ownership of user-generated content.'}
        </p>
        {t.legal.intellectualPropertyUserContentItems && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {t.legal.intellectualPropertyUserContentItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        {t.legal.intellectualPropertyEnforcementTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.intellectualPropertyEnforcementTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.intellectualPropertyEnforcementDesc}
            </p>
            {t.legal.intellectualPropertyEnforcementItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.intellectualPropertyEnforcementItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        {t.legal.intellectualPropertyReportingTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.intellectualPropertyReportingTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.intellectualPropertyReportingDesc}
            </p>
            {t.legal.intellectualPropertyReportingItems && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {t.legal.intellectualPropertyReportingItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.intellectualPropertyContactTitle || 'Contact Us'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.intellectualPropertyContactDesc || 'For intellectual property inquiries, contact us at barcode@chdaoai.com'}
        </p>
      </div>
    </div>
  )
}

