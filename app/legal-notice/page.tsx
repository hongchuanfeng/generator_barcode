export const metadata = {
  title: 'Legal Notice - Online Bulk Barcode Generator',
  description: 'Legal notice for our barcode generator service.',
}

export default function LegalNoticePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Legal Notice</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Information According to § 5 TMG</h2>
        <p className="text-gray-700 mb-4">
          <strong>Barcode Generator</strong><br />
          130 Longhua Avenue<br />
          Longhua District<br />
          Shenzhen, China
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
        <p className="text-gray-700 mb-4">
          <strong>Email:</strong> barcode@chdaoai.com
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Responsible for Content</h2>
        <p className="text-gray-700 mb-4">
          The content of our website has been created with the utmost care. However, we cannot
          guarantee the accuracy, completeness, or timeliness of the content.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Liability for Links</h2>
        <p className="text-gray-700 mb-4">
          Our website may contain links to external websites. We have no control over the content
          of these external sites and assume no liability for their content.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Copyright</h2>
        <p className="text-gray-700 mb-4">
          The content and works on this website are subject to copyright law. Reproduction,
          processing, distribution, and any form of commercialization require the written consent
          of the respective author or creator.
        </p>
      </div>
    </div>
  )
}

