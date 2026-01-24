// 使用简单的 SVG 返回图标，避免在 Windows 上触发 next/og 字体路径解析问题
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/svg+xml'

export default function Icon() {
  // 记录请求次数，方便调试服务器端日志
  // 这里在每次被调用时输出一条简短日志
  // 注意：在生产环境可以移除或调整日志级别
  console.log('[icon] generating svg icon')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size.width}" height="${size.height}" viewBox="0 0 ${size.width} ${size.height}">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#0ea5e9"/>
        <stop offset="1" stop-color="#0284c7"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#ffffff" font-weight="700">BC</text>
  </svg>`

  return new Response(svg, {
    headers: {
      'Content-Type': contentType,
    },
  })
}

