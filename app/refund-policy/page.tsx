export const metadata = {
  title: 'Refund Policy - Online Bulk Barcode Generator',
  description: 'Refund policy for our barcode generator service.',
}

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Free Service</h2>
        <p className="text-gray-700 mb-4">
          Our barcode generator service is provided free of charge. As such, there are no payments
          to refund. All features are available at no cost to users.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Future Paid Services</h2>
        <p className="text-gray-700 mb-4">
          If we introduce paid services in the future, refund policies will be clearly stated at
          the time of purchase. We will provide fair and transparent refund procedures.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          For questions about refunds, contact us at barcode@chdaoai.com
        </p>
      </div>
    </div>
  )
}

