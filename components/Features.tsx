import { useLocale } from '@/contexts/LocaleContext'

export default function Features() {
  const { t } = useLocale()
  const features = t.features.cards

  return (
    <section className="py-12 bg-gray-50 rounded-lg my-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t.features.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

