'use client'

import React, { useRef, useState } from 'react'
import { useLocale } from '@/contexts/LocaleContext'

export default function BarcodeRecognizer() {
  const BD_FORMAT_LABELS: Record<string, string> = {
    qr_code: 'QR Code',
    code_128: 'Code 128',
    ean_13: 'EAN-13',
    ean_8: 'EAN-8',
    code_39: 'Code 39',
    upc_a: 'UPC-A',
  }
  const { t } = useLocale()
  const home = t.home as any
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [results, setResults] = useState<Array<{ format: string; value: string }>>([])
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImageUrl(url)
    setResults([])
    await detectFromFile(file)
  }

  const detectFromFile = async (file: File) => {
    try {
      if ('BarcodeDetector' in window) {
        const formats = ['qr_code', 'code_128', 'ean_13', 'ean_8', 'code_39', 'upc_a'] as any
        const Detector: any = (window as any).BarcodeDetector
        const detector = new Detector({ formats })
        const bitmap = await createImageBitmap(file)
        const barcodes = await detector.detect(bitmap)
        if (barcodes && barcodes.length > 0) {
          const mapped = barcodes.map((b: any) => ({
            format: BD_FORMAT_LABELS[b.format] || String(b.format),
            value: b.rawValue,
          }))
          setResults(mapped)
          drawBoxes(bitmap, barcodes)
        } else {
          setResults([])
          // 清空 canvas 并绘制图片以便用户查看
          const canvas = canvasRef.current
          if (canvas) {
            canvas.width = bitmap.width
            canvas.height = bitmap.height
            const ctx = canvas.getContext('2d')
            if (ctx) ctx.drawImage(bitmap, 0, 0)
          }
        }
      } else {
        // 浏览器不支持 BarcodeDetector，使用 @zxing/library 作为回退
        try {
          const url = URL.createObjectURL(file)
          const img = new Image()
          img.src = url
          await new Promise((res, rej) => {
            img.onload = () => res(null)
            img.onerror = rej
          })

          // 在 canvas 上先绘制图片
          const canvas = canvasRef.current
          if (canvas) {
            canvas.width = img.width
            canvas.height = img.height
            const ctx = canvas.getContext('2d')
            if (ctx) ctx.drawImage(img, 0, 0)
          }

          // 动态导入 zxing 回退库
          const ZXing = await import('@zxing/library')
          const codeReader = new ZXing.BrowserMultiFormatReader()
          // decodeFromImageElement 支持直接传入 HTMLImageElement
          const result = await codeReader.decodeFromImageElement(img)
          if (result) {
            // 尝试解析 ZXing 返回的格式（可能为枚举值）
            let rawFormat: any = (result as any).getBarcodeFormat ? (result as any).getBarcodeFormat() : ((result as any).format ?? (result as any).barcodeFormat)
            let formatName = 'UNKNOWN'
            if (typeof rawFormat === 'number' && ZXing.BarcodeFormat && ZXing.BarcodeFormat[rawFormat]) {
              formatName = String(ZXing.BarcodeFormat[rawFormat])
            } else if (typeof rawFormat === 'string') {
              formatName = rawFormat
            }
            // 对部分常见名称做友好化显示
            const friendlyFormat = (formatName && (BD_FORMAT_LABELS as any)[formatName.toLowerCase()]) || formatName

            setResults([{ format: friendlyFormat, value: (result as any).text || (result as any).getText?.() || '' }])
          } else {
            setResults([])
            alert(t?.home?.recognizer?.noResults || '未识别到条码，请尝试更清晰的图片或使用支持 BarcodeDetector 的浏览器。')
          }
        } catch (e: any) {
          console.error('ZXing fallback error:', e)
          setResults([])
          alert(t?.home?.recognizer?.fallbackError || '识别失败，建议使用 Chrome / Edge 最新版本以获得更好兼容性。')
        }
      }
    } catch (err: any) {
      console.error('Barcode detection error:', err)
      alert((t?.home?.recognizer?.detectError || '识别出错：') + (err?.message || String(err)))
    }
  }

  const drawBoxes = (imageBitmap: any, barcodes: any[]) => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = imageBitmap.width
    canvas.height = imageBitmap.height
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(imageBitmap, 0, 0)
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 3
    ctx.font = '18px Arial'
    ctx.fillStyle = 'red'
    barcodes.forEach((b: any) => {
      const box = b.boundingBox
      if (box) {
        ctx.strokeRect(box.x, box.y, box.width, box.height)
        const text = b.rawValue || b.rawData || ''
        ctx.fillText(text, Math.max(box.x + 4, 4), Math.min(box.y + 22, canvas.height - 4))
      }
    })
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 mb-8 border border-white/20 animate-fade-in-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">🔍</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {home?.recognize || '识别条码'}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-lg">🔍</span>
              {home?.recognize || '识别条码'}
            </label>

            <div className="flex flex-col items-start gap-6 h-full">
              <div className="flex-1 w-full">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  id="barcode-recognizer-file"
                  className="hidden"
                />
                <label htmlFor="barcode-recognizer-file" className="cursor-pointer inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white border shadow-sm">
                  <span className="text-2xl">📷</span>
                  <div className="flex flex-col text-left">
                <span className="text-sm font-medium text-gray-700">{home?.recognizer?.uploadPrompt || '点击上传图片或拖拽'}</span>
                <span className="text-xs text-gray-500">{home?.recognizer?.uploadHint || '支持 PNG/JPEG'}</span>
                  </div>
                </label>

                <div className="mt-4 flex-1">
              {imageUrl ? (
                <canvas ref={canvasRef} className="w-full h-96 rounded-md border" />
              ) : (
                <div className="w-full h-96 rounded-md bg-white/50 border flex items-center justify-center text-sm text-gray-500">
                      {home?.recognizer?.previewPlaceholder || '上传图片后会在此显示预览'}
                </div>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-4 border h-full">
            <h3 className="font-semibold mb-2">{home?.recognizer?.resultsTitle || '识别结果'}</h3>
            {results.length === 0 ? (
              <p className="text-sm text-gray-500">{home?.recognizer?.noResults || '暂无识别结果'}</p>
            ) : (
              <ul className="space-y-2">
                {results.map((r, idx) => (
                  <li key={idx} className="p-2 border rounded-md bg-gray-50">
                    <div className="text-sm text-gray-600">{(home?.recognizer?.typeLabel || '类型') + '：'}{r.format}</div>
                    <div className="text-md font-mono break-all">{r.value}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


