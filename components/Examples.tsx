import { useLocale } from '@/contexts/LocaleContext'

type ExampleItem = {
  type: string
  data: string
  description?: string
}

export default function Examples() {
  const { t } = useLocale()
  const examples = t.examples.items as ExampleItem[]

  return (
    <section className="py-12 bg-gray-50 rounded-lg my-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t.examples.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{example.type}</h3>
              <p className="text-gray-600 mb-4">{example.description}</p>
              <div className="bg-gray-100 p-4 rounded">
                <code className="text-sm">{example.data}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

