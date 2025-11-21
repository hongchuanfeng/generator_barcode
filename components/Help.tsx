import { useLocale } from '@/contexts/LocaleContext'

export default function Help() {
  const { t } = useLocale()

  return (
    <section className="py-12 bg-white rounded-lg my-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">{t.help.heading}</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">{t.help.singleTitle}</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {t.help.singleSteps.map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">{t.help.bulkTitle}</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {t.help.bulkSteps.map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">{t.help.tipsTitle}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.help.tips.map((tip: string, index: number) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

