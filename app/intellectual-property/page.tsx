export const metadata = {
  title: 'Intellectual Property - Online Bulk Barcode Generator',
  description: 'Intellectual property notice for our barcode generator service.',
}

export default function IntellectualPropertyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Intellectual Property Statement</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Ownership</h2>
        <p className="text-gray-700 mb-4">
          All intellectual property rights in our barcode generator service, including trademarks,
          copyrights, and patents, are owned by Barcode Generator or our licensors.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Trademarks</h2>
        <p className="text-gray-700 mb-4">
          All trademarks, service marks, and trade names used on this website are the property of
          their respective owners. Use of our trademarks requires our prior written consent.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Libraries</h2>
        <p className="text-gray-700 mb-4">
          Our service uses third-party libraries and software. These are subject to their respective
          licenses and intellectual property rights. We respect all third-party intellectual property.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">User Content</h2>
        <p className="text-gray-700 mb-4">
          Users retain all rights to barcodes they generate using our service. We do not claim
          ownership of user-generated content.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          For intellectual property inquiries, contact us at barcode@chdaoai.com
        </p>
      </div>
    </div>
  )
}

