import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Online Bulk Barcode Generator - Free Barcode Creator',
  description: 'Generate barcodes online for free. Support Code128, Code39, EAN-13, UPC-A, QR Code. Bulk barcode generation with CSV/Excel upload. Download as PNG, JPEG, or PDF.',
  keywords: 'bar code generator',
  authors: [{ name: 'Barcode Generator' }],
  creator: 'Barcode Generator',
  publisher: 'Barcode Generator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://barcode.chdaoai.com'),
  alternates: {
    canonical: 'https://barcode.chdaoai.com',
    languages: {
      'en': 'https://barcode.chdaoai.com/en',
      'zh': 'https://barcode.chdaoai.com/zh',
      'es': 'https://barcode.chdaoai.com/es',
      'fr': 'https://barcode.chdaoai.com/fr',
      'ar': 'https://barcode.chdaoai.com/ar',
      'ru': 'https://barcode.chdaoai.com/ru',
      'pt': 'https://barcode.chdaoai.com/pt',
      'de': 'https://barcode.chdaoai.com/de',
      'ja': 'https://barcode.chdaoai.com/ja',
    },
  },
  openGraph: {
    title: 'Online Bulk Barcode Generator - Free Barcode Creator',
    description: 'Generate barcodes online for free. Support multiple barcode types and bulk generation.',
    url: 'https://barcode.chdaoai.com',
    siteName: 'Barcode Generator',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://barcode.chdaoai.com" />
      </head>
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y1KJD9XLXB"
          strategy="afterInteractive"
        />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7274710287377352"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y1KJD9XLXB');
          `}
        </Script>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}

