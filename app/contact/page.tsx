'use client'

import { useState } from 'react'
import { useLocale } from '@/contexts/LocaleContext'

export default function ContactPage() {
  const { t } = useLocale()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this to a backend API
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 5000)
  }

  const contactMethods = [
    {
      icon: '✉️',
      title: t.contact.emailUs,
      content: 'barcode@chdaoai.com',
      link: 'mailto:barcode@chdaoai.com',
      description: t.contact.emailDesc,
    },
    {
      icon: '📍',
      title: t.contact.visitUs,
      content: '130 Longhua Avenue, Longhua District, Shenzhen, China',
      link: '#',
      description: t.contact.visitDesc,
    },
    {
      icon: '💬',
      title: t.contact.businessHours,
      content: t.contact.businessHoursContent,
      link: '#',
      description: t.contact.businessHoursDesc,
    },
  ]

  const faqs = [
    {
      question: t.contact.faq1Q,
      answer: t.contact.faq1A,
    },
    {
      question: t.contact.faq2Q,
      answer: t.contact.faq2A,
    },
    {
      question: t.contact.faq3Q,
      answer: t.contact.faq3A,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {t.contact.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
              {method.link !== '#' ? (
                <a
                  href={method.link}
                  className="text-blue-600 hover:text-blue-800 transition-colors font-medium block mb-2"
                >
                  {method.content}
                </a>
              ) : (
                <p className="text-gray-700 font-medium mb-2">{method.content}</p>
              )}
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-10 border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
              <span className="text-3xl">📝</span>
              {t.contact.sendMessage}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.contact.sendMessageDesc}
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.yourName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder={t.contact.yourName}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.emailAddress} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder={t.contact.emailAddress}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.subject} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder={t.contact.subject}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.message} <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder={t.contact.message}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {submitted ? t.contact.sentButton : t.contact.sendButton}
              </button>
              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <p className="text-green-700 font-medium">
                    {t.contact.thankYou}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            {/* Why Contact Us */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-10 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                {t.contact.whyContact}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t.contact.techSupport}</h3>
                    <p className="text-sm text-gray-600">{t.contact.techSupportDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t.contact.businessInquiries}</h3>
                    <p className="text-sm text-gray-600">{t.contact.businessInquiriesDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t.contact.feedback}</h3>
                    <p className="text-sm text-gray-600">{t.contact.feedbackDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🐛</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t.contact.reportIssues}</h3>
                    <p className="text-sm text-gray-600">{t.contact.reportIssuesDesc}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-10 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <span className="text-3xl">❓</span>
                {t.contact.faq}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">⏱️</span>
                <h3 className="text-xl font-bold text-gray-800">{t.contact.responseTime}</h3>
              </div>
              <p className="text-gray-700 mb-2">
                {t.contact.responseTimeDesc}
              </p>
              <p className="text-sm text-gray-600">
                {t.contact.urgentNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

