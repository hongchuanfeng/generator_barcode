export const metadata = {
  title: 'Copyright Notice - Online Bulk Barcode Generator',
  description: 'Copyright notice for our barcode generator service.',
}

export default function CopyrightPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Copyright Notice</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Copyright Ownership</h2>
        <p className="text-gray-700 mb-4">
          All content, design, and functionality of this website, including but not limited to text,
          graphics, logos, and software, are the property of Barcode Generator and are protected by
          copyright laws.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">User-Generated Content</h2>
        <p className="text-gray-700 mb-4">
          Barcodes generated using our service are created by users and belong to the users who generated them.
          We do not claim ownership of user-generated barcodes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Permitted Use</h2>
        <p className="text-gray-700 mb-4">
          You may use our service to generate barcodes for personal or commercial purposes. However,
          you may not reproduce, distribute, or create derivative works of our website or service
          without our written permission.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          For copyright inquiries, contact us at barcode@chdaoai.com
        </p>
      </div>
    </div>
  )
}

