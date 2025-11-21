'use client'

import { useState, useRef } from 'react'
import jsPDF from 'jspdf'
import { useLocale } from '@/contexts/LocaleContext'

type BarcodeType = 'CODE128' | 'CODE39' | 'EAN13' | 'UPC' | 'QR'
type ImageFormat = 'PNG' | 'JPEG' | 'PDF'

export default function BarcodeGenerator() {
  const { t } = useLocale()
  const [barcodeData, setBarcodeData] = useState<string>('')
  const [barcodeType, setBarcodeType] = useState<BarcodeType>('CODE128')
  const [size, setSize] = useState<number>(200)
  const [textColor, setTextColor] = useState<string>('#000000')
  const [bgColor, setBgColor] = useState<string>('#FFFFFF')
  const [format, setFormat] = useState<ImageFormat>('PNG')
  const [barcodes, setBarcodes] = useState<string[]>([])
  const [inputText, setInputText] = useState<string>('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setInputText(text)
    const lines = text
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean)
      .slice(0, 50)
    setBarcodes(lines)
    setBarcodeData(lines[0] || '')
  }

  const generateBarcode = async (data: string, index: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      if (!ctx) {
        reject(new Error('Canvas context not available'))
        return
      }

      canvas.width = size
      canvas.height = size
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (barcodeType === 'QR') {
        import('qrcode').then((QRCode) => {
          QRCode.default.toCanvas(canvas, data, {
            width: size,
            margin: 2,
            color: {
              dark: textColor,
              light: bgColor,
            },
          }, (error: Error | null | undefined) => {
            if (error) {
              reject(error)
            } else {
              resolve(canvas.toDataURL(`image/${format.toLowerCase()}`))
            }
          })
        }).catch(reject)
      } else {
        import('jsbarcode').then((JsBarcode) => {
          try {
            JsBarcode.default(canvas, data, {
              format: barcodeType,
              width: 2,
              height: size * 0.6,
              displayValue: true,
              fontSize: 16,
              textMargin: 5,
              textAlign: 'center',
              textPosition: 'bottom',
              text: data,
              fontOptions: 'bold',
              font: 'Arial',
              lineColor: textColor,
              background: bgColor,
            })
            resolve(canvas.toDataURL(`image/${format.toLowerCase()}`))
          } catch (error) {
            reject(error)
          }
        }).catch(reject)
      }
    })
  }

  const generateAllBarcodes = async () => {
    if (barcodes.length === 0) {
      alert(t.barcode.alerts.noDataInput)
      return
    }

    const urls: string[] = []
    for (let i = 0; i < barcodes.length; i++) {
      try {
        const url = await generateBarcode(barcodes[i], i)
        urls.push(url)
      } catch (error) {
        console.error(`Error generating barcode ${i}:`, error)
        alert(`${t.barcode.alerts.errorPrefix} ${barcodes[i]}`)
      }
    }
    setPreviewUrls(urls)
  }

  const downloadBarcode = async (url: string, filename: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = `${filename}.${format.toLowerCase()}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadAll = async () => {
    if (previewUrls.length === 0) {
      alert(t.barcode.alerts.generateFirst)
      return
    }

    if (previewUrls.length === 1) {
      // Single barcode - direct download
      downloadBarcode(previewUrls[0], barcodes[0])
    } else {
      // Multiple barcodes - ZIP download
      const JSZip = (await import('jszip')).default
      const zip = new JSZip()

      for (let i = 0; i < previewUrls.length; i++) {
        const response = await fetch(previewUrls[i])
        const blob = await response.blob()
        const filename = `${barcodes[i]}.${format.toLowerCase()}`
        zip.file(filename, blob)
      }

      const zipBlob = await zip.generateAsync({ type: 'blob' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(zipBlob)
      link.download = 'barcodes.zip'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
    }
  }

  const downloadAsPDF = async () => {
    if (previewUrls.length === 0) {
      alert(t.barcode.alerts.generateFirst)
      return
    }

    const pdf = new jsPDF()
    const margin = 10
    const itemsPerRow = 3
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const availableWidth = pageWidth - margin * 2
    const imgWidth = (availableWidth - margin * (itemsPerRow - 1)) / itemsPerRow
    const imgHeight = imgWidth
    let xPos = margin
    let yPos = margin
    let itemsInCurrentRow = 0

    for (let i = 0; i < previewUrls.length; i++) {
      if (yPos + imgHeight > pageHeight - margin) {
        pdf.addPage()
        yPos = margin
        xPos = margin
        itemsInCurrentRow = 0
      }

      pdf.addImage(previewUrls[i], 'PNG', xPos, yPos, imgWidth, imgHeight)
      itemsInCurrentRow++

      if (itemsInCurrentRow === itemsPerRow) {
        itemsInCurrentRow = 0
        xPos = margin
        yPos += imgHeight + margin
      } else {
        xPos += imgWidth + margin
      }
    }

    pdf.save('barcodes.pdf')
  }


  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 mb-8 border border-white/20 animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">📊</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t.barcode.generator}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-lg">🏷️</span>
              {t.barcode.barcodeType}
            </label>
            <select
              value={barcodeType}
              onChange={(e) => setBarcodeType(e.target.value as BarcodeType)}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all font-medium"
            >
              <option value="CODE128">Code128</option>
              <option value="CODE39">Code39</option>
              <option value="EAN13">EAN-13</option>
              <option value="UPC">UPC-A</option>
              <option value="QR">QR Code</option>
            </select>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-lg">📏</span>
              {t.barcode.size}: <span className="text-blue-600 font-bold">{size}px</span>
            </label>
            <input
              type="range"
              min="100"
              max="1000"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((size - 100) / 900) * 100}%, #e5e7eb ${((size - 100) / 900) * 100}%, #e5e7eb 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>100px</span>
              <span>1000px</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                {t.barcode.textColor}
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-16 h-16 border-2 border-gray-200 rounded-xl cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 font-mono text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="text-lg">🌈</span>
                {t.barcode.background}
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-16 h-16 border-2 border-gray-200 rounded-xl cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 font-mono text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-lg">💾</span>
              {t.barcode.format}
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as ImageFormat)}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all font-medium"
            >
              <option value="PNG">PNG</option>
              <option value="JPEG">JPEG</option>
              <option value="PDF">PDF</option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <span className="text-lg">📝</span>
            {t.barcode.barcodeData} <span className="text-xs font-normal text-gray-500">{t.barcode.onePerLine}</span>
          </label>
          <textarea
            value={inputText}
            onChange={handleTextChange}
            rows={12}
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none font-mono text-sm"
            placeholder={`${t.barcode.placeholder}\n${t.barcode.placeholderExample}`}
          />
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              <span className={`font-semibold ${barcodes.length >= 50 ? 'text-red-500' : 'text-blue-600'}`}>
                {barcodes.length}
              </span>
              <span className="text-gray-400"> / 50 {t.barcode.itemsLabel}</span>
            </p>
            {barcodes.length > 0 && (
              <button
                onClick={() => {
                  setBarcodes([])
                  setPreviewUrls([])
                  setInputText('')
                }}
                className="text-xs text-red-500 hover:text-red-700 font-medium"
              >
                {t.barcode.clearAll}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={generateAllBarcodes}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <span className="text-xl">✨</span>
          {t.barcode.generate}
        </button>
        {previewUrls.length > 0 && (
          <>
            <button
              onClick={downloadAll}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span className="text-xl">⬇️</span>
              {t.barcode.download} {previewUrls.length === 1 ? t.barcode.itemLabel : t.barcode.downloadZIP}
            </button>
            {format !== 'PDF' && (
              <button
                onClick={downloadAsPDF}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span className="text-xl">📄</span>
                {t.barcode.downloadPDF}
              </button>
            )}
          </>
        )}
      </div>

      {previewUrls.length > 0 && (
        <div className="mt-10 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span className="text-2xl">👁️</span>
            {t.barcode.preview} ({previewUrls.length} {previewUrls.length === 1 ? t.barcode.itemLabel : t.barcode.itemsLabel})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 border-2 border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group">
                <div className="bg-gray-50 rounded-xl p-3 mb-3 overflow-hidden">
                  <img
                    src={url}
                    alt={`Barcode ${index + 1}`}
                    className="max-w-full h-auto mx-auto"
                  />
                </div>
                <p className="text-xs text-gray-600 truncate mb-3 font-mono" title={barcodes[index]}>
                  {barcodes[index]}
                </p>
                <button
                  onClick={() => downloadBarcode(url, barcodes[index])}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium shadow-md hover:shadow-lg"
                >
                  {t.barcode.download}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

