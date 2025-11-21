# Online Bulk Barcode Generator

A free, online barcode generator built with Next.js that supports multiple barcode types and bulk generation.

## Features

- **Multiple Barcode Types**: Code128, Code39, EAN-13, UPC-A, QR Code
- **Customizable Properties**: Size (100-1000px), text color, background color
- **Multiple Formats**: PNG, JPEG, PDF
- **Bulk Generation**: Generate up to 50 barcodes at once or upload CSV/Excel files
- **Responsive Design**: Works on both desktop and mobile devices
- **SEO Optimized**: Includes sitemap, robots.txt, and proper meta tags

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
barcode_web/
├── app/                    # Next.js App Router pages
│   ├── about/             # About us page
│   ├── contact/           # Contact page
│   ├── privacy-policy/    # Privacy policy
│   └── ...                # Other legal pages
├── components/            # React components
│   ├── BarcodeGenerator.tsx
│   ├── BulkBarcodeGenerator.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── public/                # Static files
└── package.json
```

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **jsbarcode**: Barcode generation
- **qrcode**: QR code generation
- **jszip**: ZIP file creation
- **xlsx**: Excel file parsing
- **papaparse**: CSV file parsing
- **jspdf**: PDF generation

## License

This project is free to use.

## Contact

Email: barcode@chdaoai.com
Address: 130 Longhua Avenue, Longhua District, Shenzhen

