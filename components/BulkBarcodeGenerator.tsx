'use client'

import { useState } from 'react'
import Papa from 'papaparse'
import { useLocale } from '@/contexts/LocaleContext'

type BarcodeType = 'CODE128' | 'CODE39' | 'EAN13' | 'UPC' | 'QR'
type ImageFormat = 'PNG' | 'JPEG'
type GeneratedBarcode = {
  blob: Blob
  dataUrl: string
}

export default function BulkBarcodeGenerator() {
  const { t } = useLocale()
  const [barcodeType, setBarcodeType] = useState<BarcodeType>('CODE128')
  const [size, setSize] = useState<number>(200)
  const [textColor, setTextColor] = useState<string>('#000000')
  const [bgColor, setBgColor] = useState<string>('#FFFFFF')
  const [format, setFormat] = useState<ImageFormat>('PNG')
  const [file, setFile] = useState<File | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCount, setGeneratedCount] = useState(0)
  const [zipBlob, setZipBlob] = useState<Blob | null>(null)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null)
  const statusStyles: Record<'success' | 'error' | 'info', string> = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-700',
    info: 'bg-blue-50 border-blue-200 text-blue-700',
  }
  const templateValues = ['SAMPLE-CODE-001', 'SAMPLE-CODE-002', 'SAMPLE-CODE-003']

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setZipBlob(null)
      setStatus(null)
    }
  }

  const generateBarcode = async (data: string): Promise<GeneratedBarcode> => {
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

      // Libraries will be dynamically imported

      const exportMime = `image/${format.toLowerCase()}`

      const finalizeCanvas = () => {
        const dataUrl = canvas.toDataURL(exportMime)
        canvas.toBlob((blob) => {
          if (blob) {
            resolve({ blob, dataUrl })
          } else {
            reject(new Error('Failed to create blob'))
          }
        }, exportMime)
      }

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
              finalizeCanvas()
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
            finalizeCanvas()
          } catch (error) {
            reject(error)
          }
        }).catch(reject)
      }
    })
  }

  const parseFile = async (file: File): Promise<string[]> => {
    return new Promise((resolve, reject) => {
      const fileExtension = file.name.split('.').pop()?.toLowerCase()
      
      if (fileExtension === 'csv') {
        Papa.parse(file, {
          complete: (results) => {
            const data: string[] = []
            results.data.forEach((row: any) => {
              if (Array.isArray(row)) {
                row.forEach((cell: any) => {
                  if (cell && String(cell).trim()) {
                    data.push(String(cell).trim())
                  }
                })
              } else if (typeof row === 'object') {
                Object.values(row).forEach((cell: any) => {
                  if (cell && String(cell).trim()) {
                    data.push(String(cell).trim())
                  }
                })
              }
            })
            resolve(data.filter(Boolean))
          },
          error: reject,
        })
      } else if (fileExtension === 'xlsx' || fileExtension === 'xls') {
        import('xlsx').then((XLSX) => {
          const reader = new FileReader()
          reader.onload = (e) => {
            try {
              const data = new Uint8Array(e.target?.result as ArrayBuffer)
              const workbook = XLSX.read(data, { type: 'array' })
              const firstSheet = workbook.Sheets[workbook.SheetNames[0]]
              const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 })
              const barcodeData: string[] = []
              jsonData.forEach((row: any) => {
                if (Array.isArray(row)) {
                  row.forEach((cell: any) => {
                    if (cell && String(cell).trim()) {
                      barcodeData.push(String(cell).trim())
                    }
                  })
                }
              })
              resolve(barcodeData.filter(Boolean))
            } catch (error) {
              reject(error)
            }
          }
          reader.readAsArrayBuffer(file)
        }).catch(reject)
      } else {
        reject(new Error('Unsupported file format. Please upload CSV or Excel file.'))
      }
    })
  }

  const handleGenerate = async () => {
    if (!file) {
      setStatus({ type: 'error', message: t.barcode.alerts.fileRequired })
      return
    }

    setIsGenerating(true)
    setGeneratedCount(0)
    setZipBlob(null)
    setStatus({ type: 'info', message: t.barcode.processing })

    try {
      const barcodeData = await parseFile(file)
      
      if (barcodeData.length === 0) {
        setStatus({ type: 'error', message: t.barcode.alerts.noDataFound })
        setIsGenerating(false)
        return
      }

      const JSZip = (await import('jszip')).default
      const { default: jsPDF } = await import('jspdf')
      const zip = new JSZip()
      let count = 0
      const generatedImages: { filename: string; dataUrl: string }[] = []

      for (const data of barcodeData) {
        try {
          const { blob, dataUrl } = await generateBarcode(data)
          const filename = `${data}.${format.toLowerCase()}`
          zip.file(filename, blob)
          generatedImages.push({ filename, dataUrl })
          count++
          setGeneratedCount(count)
        } catch (error) {
          console.error(`Error generating barcode for ${data}:`, error)
        }
      }

      if (generatedImages.length > 0) {
        const pdf = new jsPDF()
        const margin = 10
        const itemsPerRow = 3
        const pageWidth = pdf.internal.pageSize.getWidth()
        const pageHeight = pdf.internal.pageSize.getHeight()
        const availableWidth = pageWidth - margin * 2
        const imgWidth = (availableWidth - margin * (itemsPerRow - 1)) / itemsPerRow
        const imgHeight = imgWidth
        const imageFormat = format === 'JPEG' ? 'JPEG' : 'PNG'
        let xPos = margin
        let yPos = margin
        let itemsInRow = 0

        generatedImages.forEach((item, index) => {
          if (yPos + imgHeight > pageHeight - margin) {
            pdf.addPage()
            xPos = margin
            yPos = margin
            itemsInRow = 0
          }

          pdf.addImage(item.dataUrl, imageFormat, xPos, yPos, imgWidth, imgHeight)
          itemsInRow++

          if (itemsInRow === itemsPerRow) {
            itemsInRow = 0
            xPos = margin
            yPos += imgHeight + margin
          } else {
            xPos += imgWidth + margin
          }
        })

        const pdfBlob = pdf.output('blob')
        zip.file('barcodes.pdf', pdfBlob)
      }

      const generatedZipBlob = await zip.generateAsync({ type: 'blob' })
      setZipBlob(generatedZipBlob)
      setStatus({ type: 'success', message: `${t.barcode.alerts.success} ${count} ${t.barcode.itemsLabel}!` })
    } catch (error) {
      console.error('Error processing file:', error)
      setStatus({ type: 'error', message: `${t.barcode.alerts.processingError} ${(error as Error).message}` })
    } finally {
      setIsGenerating(false)
    }
  }

  const triggerDownload = (blob: Blob, filename: string) => {
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)
  }

  const handleDownloadZip = () => {
    if (!zipBlob) {
      setStatus({ type: 'error', message: t.barcode.alerts.generateFirst })
      return
    }

    triggerDownload(zipBlob, 'barcodes.zip')
    setStatus({ type: 'success', message: t.barcode.alerts.downloadStarted })
  }

  const handleDownloadCSVTemplate = () => {
    const header = 'barcode'
    const csv = [header, ...templateValues].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    triggerDownload(blob, 'barcode-template.csv')
  }

  const handleDownloadExcelTemplate = async () => {
    const XLSX = (await import('xlsx')).default
    const worksheet = XLSX.utils.aoa_to_sheet([['barcode'], ...templateValues.map(value => [value])])
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Barcodes')
    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([wbout], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    triggerDownload(blob, 'barcode-template.xlsx')
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 mb-8 border border-white/20 animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">📦</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          {t.barcode.bulkGenerator}
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
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all font-medium"
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
                {t.barcode.size}: <span className="text-green-600 font-bold">{size}px</span>
              </label>
            <input
              type="range"
              min="100"
              max="1000"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${((size - 100) / 900) * 100}%, #e5e7eb ${((size - 100) / 900) * 100}%, #e5e7eb 100%)`
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
                    className="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 font-mono text-sm"
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
                    className="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 font-mono text-sm"
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
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all font-medium"
            >
              <option value="PNG">PNG</option>
              <option value="JPEG">JPEG</option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <span className="text-lg">📁</span>
            {t.barcode.uploadFile}
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-green-400 transition-colors">
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                <span className="text-3xl">📄</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  {t.barcode.clickUpload}
                </p>
                <p className="text-xs text-gray-500">
                  {t.barcode.fileTypes}
                </p>
              </div>
            </label>
          </div>
          {file && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="text-sm font-semibold text-gray-700">{file.name}</p>
                  <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setFile(null)
                  setZipBlob(null)
                }}
                className="text-red-500 hover:text-red-700 text-xl"
              >
                ✕
              </button>
            </div>
          )}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-xs text-gray-700 leading-relaxed">
              <span className="font-semibold">💡 {t.barcode.tip}</span> {t.barcode.tipDesc}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-3">
              {t.barcode.templateDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleDownloadCSVTemplate}
                className="px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
              >
                {t.barcode.downloadCsvTemplate}
              </button>
              <button
                type="button"
                onClick={handleDownloadExcelTemplate}
                className="px-4 py-2 text-sm font-semibold text-purple-700 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors"
              >
                {t.barcode.downloadExcelTemplate}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={handleGenerate}
          disabled={!file || isGenerating}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
        >
          {isGenerating ? (
            <>
              <span className="animate-spin">⏳</span>
              {t.barcode.generating} ({generatedCount})
            </>
          ) : (
            <>
              <span className="text-xl">✨</span>
              {t.barcode.generate}
            </>
          )}
        </button>
      </div>

      {status && (
        <div className={`mt-4 border rounded-2xl px-5 py-4 text-sm font-medium flex items-center gap-3 ${statusStyles[status.type]}`}>
          <span>
            {status.type === 'success' && '✅'}
            {status.type === 'error' && '⚠️'}
            {status.type === 'info' && 'ℹ️'}
          </span>
          <span>{status.message}</span>
        </div>
      )}

      {zipBlob && !isGenerating && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-green-800 font-medium flex items-center gap-2">
            <span>✅</span>
            <span>{t.barcode.downloadReady}</span>
          </div>
          <button
            onClick={handleDownloadZip}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <span className="text-lg">⬇️</span>
            {t.barcode.downloadGeneratedZip}
          </button>
        </div>
      )}

      {isGenerating && (
        <div className="mt-6">
          <div className="bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-300 shadow-lg"
              style={{ width: `${Math.min((generatedCount / Math.max(generatedCount, 1)) * 100, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            {t.barcode.processing} {generatedCount} {t.barcode.generated}
          </p>
        </div>
      )}
    </div>
  )
}

