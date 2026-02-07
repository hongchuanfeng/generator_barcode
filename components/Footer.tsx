import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="bg-gray-900/95 backdrop-blur-xl text-gray-300 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t.footer.title}</h3>
            <p className="text-sm">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">
                  {t.footer.refund}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  {t.footer.disclaimer}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legalNext}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/copyright" className="hover:text-white transition-colors">
                  {t.footer.copyrightNotice}
                </Link>
              </li>
              <li>
                <Link href="/legal-notice" className="hover:text-white transition-colors">
                  {t.footer.legalNotice}
                </Link>
              </li>
              <li>
                <Link href="/intellectual-property" className="hover:text-white transition-colors">
                  {t.footer.intellectualProperty}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="block">{t.footer.email}: barcode@chdaoai.com</span>
              </li>
              <li>
                <span className="block">{t.footer.address}: {t.footer.addressDetail}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.friendlyLinksTitle}</h4>
            <ul className="space-y-2 text-sm">
              {t.footer.friendlyLinks.map((link: { name: string; url: string }, index: number) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Barcode Generator. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

