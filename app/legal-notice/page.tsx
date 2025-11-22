'use client'

import { useLocale } from '@/contexts/LocaleContext'

export default function LegalNoticePage() {
  const { t } = useLocale()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t.legal.legalNoticeTitle || 'Legal Notice'}</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">
          {t.legal.termsUpdated}: {new Date().toLocaleDateString()}
        </p>
        
        {t.legal.legalNoticeIntroTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.legalNoticeIntroTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.legalNoticeIntroDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.legalNoticeCompanyTitle || 'Company Information'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.legalNoticeCompanyDesc || 'The following information is provided in accordance with applicable legal requirements:'}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>{t.legal.legalNoticeCompanyName || 'Barcode Generator'}</strong><br />
          {t.legal.legalNoticeCompanyAddress || '130 Longhua Avenue, Longhua District, Shenzhen, China'}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.legalNoticeContactInfoTitle || 'Contact Information'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.legalNoticeContactInfoDesc || 'For inquiries, support, or legal matters, you may contact us through the following channels:'}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>{t.legal.legalNoticeContactEmail || 'Email: barcode@chdaoai.com'}</strong><br />
          {t.legal.legalNoticeContactAddress || 'Address: 130 Longhua Avenue, Longhua District, Shenzhen, China'}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.legalNoticeResponsibleTitle || 'Responsible for Content'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.legalNoticeResponsibleDesc || 'The content of our website has been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.'}
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.legalNoticeLiabilityLinksTitle || 'Liability for Links'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.legalNoticeLiabilityLinksDesc || 'Our website may contain links to external websites. We have no control over the content of these external sites and assume no liability for their content.'}
        </p>
        {t.legal.legalNoticeLiabilityLinksItems && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {t.legal.legalNoticeLiabilityLinksItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.legalNoticeCopyrightTitle || 'Copyright'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.legalNoticeCopyrightDesc || 'The content and works on this website are subject to copyright law. Reproduction, processing, distribution, and any form of commercialization require the written consent of the respective author or creator.'}
        </p>
        
        {t.legal.legalNoticeTrademarksTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.legalNoticeTrademarksTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.legalNoticeTrademarksDesc}
            </p>
          </>
        )}
        
        {t.legal.legalNoticeGoverningLawTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.legalNoticeGoverningLawTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.legalNoticeGoverningLawDesc}
            </p>
          </>
        )}
        
        {t.legal.legalNoticeUpdatesTitle && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.legalNoticeUpdatesTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.legal.legalNoticeUpdatesDesc}
            </p>
          </>
        )}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.legal.legalNoticeContactTitle || 'Contact Us'}</h2>
        <p className="text-gray-700 mb-4">
          {t.legal.legalNoticeContactDesc || 'For questions about this legal notice, please contact us at barcode@chdaoai.com'}
        </p>
      </div>
    </div>
  )
}

