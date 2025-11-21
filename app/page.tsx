'use client'

import { useState } from 'react'
import BarcodeGenerator from '@/components/BarcodeGenerator'
import BulkBarcodeGenerator from '@/components/BulkBarcodeGenerator'
import Features from '@/components/Features'
import Help from '@/components/Help'
import Examples from '@/components/Examples'
import Feedback from '@/components/Feedback'
import { useLocale } from '@/contexts/LocaleContext'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'single' | 'bulk'>('single')
  const { t } = useLocale()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-block mb-4">
          <span className="text-6xl md:text-7xl">📊</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {t.home.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
          {t.home.subtitle}
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 p-1.5 shadow-2xl">
          <button
            onClick={() => setActiveTab('single')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'single'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {t.home.singleBarcode}
          </button>
          <button
            onClick={() => setActiveTab('bulk')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'bulk'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {t.home.bulkBarcode}
          </button>
        </div>
      </div>

      {activeTab === 'single' ? <BarcodeGenerator /> : <BulkBarcodeGenerator />}

      <Features />
      <Help />
      <Examples />
      <Feedback />
    </div>
  )
}

