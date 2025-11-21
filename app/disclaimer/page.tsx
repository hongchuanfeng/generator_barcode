export const metadata = {
  title: 'Disclaimer - Online Bulk Barcode Generator',
  description: 'Disclaimer for our barcode generator service.',
}

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">No Warranty</h2>
        <p className="text-gray-700 mb-4">
          Our barcode generator service is provided "as is" without any warranties, expressed or implied.
          We do not guarantee that the service will be uninterrupted, error-free, or meet your specific requirements.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Accuracy of Barcodes</h2>
        <p className="text-gray-700 mb-4">
          While we strive to generate accurate barcodes, we cannot guarantee that all generated barcodes
          will be scannable or meet industry standards. Users are responsible for verifying the accuracy
          and functionality of generated barcodes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          We shall not be liable for any direct, indirect, incidental, or consequential damages arising
          from the use or inability to use our service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          For questions about this disclaimer, contact us at barcode@chdaoai.com
        </p>
      </div>
    </div>
  )
}

