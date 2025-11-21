'use client'

import { useLocale } from '@/contexts/LocaleContext'

export default function AboutPage() {
  const { t } = useLocale()
  const teamNames = [
    'Alex Chen',
    'Sarah Johnson',
    'Michael Zhang',
    'Emily Wang',
    'David Liu',
    'Jessica Brown',
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {t.about.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t.about.subtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Company Introduction */}
        <section className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-10 border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-3xl">🏢</span>
            {t.about.whoWeAre}
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            {t.about.whoWeAreDesc1}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.about.whoWeAreDesc2}
          </p>
        </section>

        {/* Our Mission */}
        <section className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-10 border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            {t.about.mission}
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            {t.about.missionDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-gray-800 mb-2">{t.about.innovation}</h3>
              <p className="text-sm text-gray-600">{t.about.innovationDesc}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="font-bold text-gray-800 mb-2">{t.about.quality}</h3>
              <p className="text-sm text-gray-600">{t.about.qualityDesc}</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="font-bold text-gray-800 mb-2">{t.about.accessibility}</h3>
              <p className="text-sm text-gray-600">{t.about.accessibilityDesc}</p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-10 border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-3xl">✨</span>
            {t.about.whatWeOffer}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{t.about.multipleTypes}</h3>
                <p className="text-sm text-gray-600">{t.about.multipleTypesDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">🎨</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{t.about.customizable}</h3>
                <p className="text-sm text-gray-600">{t.about.customizableDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">📦</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{t.about.bulkGen}</h3>
                <p className="text-sm text-gray-600">{t.about.bulkGenDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">💾</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{t.about.multipleFormats}</h3>
                <p className="text-sm text-gray-600">{t.about.multipleFormatsDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">🆓</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{t.about.freeUnlimited}</h3>
                <p className="text-sm text-gray-600">{t.about.freeUnlimitedDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{t.about.fastReliable}</h3>
                <p className="text-sm text-gray-600">{t.about.fastReliableDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-10 border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-3xl">👥</span>
            {t.about.ourTeam}
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t.about.ourTeamDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamNames.map((name, index) => {
              const meta = t.about.teamMembers[index]
              return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                  {name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-2">{meta.role}</p>
                <p className="text-xs text-gray-500 mb-3">{meta.department}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{meta.description}</p>
              </div>
              )
            })}
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-10 border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-3xl">📧</span>
            {t.about.contactInfo}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-xl">✉️</span>
                {t.about.email}
              </h3>
              <a
                href="mailto:barcode@chdaoai.com"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                barcode@chdaoai.com
              </a>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-xl">📍</span>
                {t.about.address}
              </h3>
              <p className="text-gray-700">
                130 Longhua Avenue, Longhua District, Shenzhen, China
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

