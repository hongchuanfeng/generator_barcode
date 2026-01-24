export type Locale = 'en' | 'zh' | 'es' | 'fr' | 'ar' | 'ru' | 'pt' | 'de' | 'ja'

export const locales: Locale[] = ['en', 'zh', 'es', 'fr', 'ar', 'ru', 'pt', 'de', 'ja']
export const defaultLocale: Locale = 'en'
export type RecognizerTranslations = {
  uploadPrompt: string
  uploadHint: string
  previewPlaceholder: string
  resultsTitle: string
  noResults: string
  browserNotSupport: string
  browserSuggest: string
  fallbackError: string
  detectError: string
  typeLabel: string
  valueLabel: string
}

export type HomeTranslations = {
  title: string
  subtitle: string
  singleBarcode: string
  bulkBarcode: string
  recognize?: string
  recognizer?: RecognizerTranslations
}

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact Us',
    },
    home: {
      title: 'Online Bulk Barcode Generator',
      subtitle: 'Generate barcodes online for free. Support multiple barcode types and bulk generation.',
      singleBarcode: 'Single Barcode',
      bulkBarcode: 'Bulk Barcode',
      recognize: 'Recognize Barcode',
      recognizer: {
        uploadPrompt: 'Click to upload image or drag and drop',
        uploadHint: 'Supports PNG, JPEG',
        previewPlaceholder: 'Preview will appear here after upload',
        resultsTitle: 'Recognition Results',
        noResults: 'No results yet',
        browserNotSupport: 'Browser does not support BarcodeDetector; using fallback library',
        browserSuggest: 'For best results use latest Chrome or Edge',
        fallbackError: 'Recognition failed with fallback',
        detectError: 'Detection error: ',
        typeLabel: 'Type',
        valueLabel: 'Value',
      },
    },
    footer: {
      description: 'Free online barcode generator supporting multiple barcode types and bulk generation.',
      legal: 'Legal',
      contact: 'Contact',
      email: 'Email',
      address: 'Address',
      copyright: 'All rights reserved.',
      title: 'Barcode Generator',
      legalNext: 'Policies',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      refund: 'Refund Policy',
      disclaimer: 'Disclaimer',
      copyrightNotice: 'Copyright Notice',
      legalNotice: 'Legal Notice',
      intellectualProperty: 'Intellectual Property',
      contactTitle: 'Contact',
      addressDetail: '130 Longhua Avenue, Longhua District, Shenzhen, China',
    },
    features: {
      heading: 'Powerful Features',
      cards: [
        { icon: '📊', title: 'Multiple Barcode Types', description: 'Support Code128, Code39, EAN-13, UPC-A, QR Code, and more.' },
        { icon: '📏', title: 'Customizable Size', description: 'Adjust from 100px up to 1000px for any scenario.' },
        { icon: '🎨', title: 'Color Customization', description: 'Control text color and background color for brand consistency.' },
        { icon: '💾', title: 'Multiple Formats', description: 'Export high-quality PNG, JPEG, or PDF files.' },
        { icon: '📦', title: 'Bulk Generation', description: 'Generate up to 50 barcodes or upload CSV/Excel files.' },
        { icon: '🆓', title: 'Free to Use', description: 'Unlimited usage with zero cost or registration.' },
      ],
    },
    help: {
      heading: 'How to Use',
      singleTitle: 'Single Barcode Generation',
      singleSteps: [
        'Select the barcode type (Code128, Code39, EAN-13, UPC-A, or QR Code).',
        'Adjust the size between 100px and 1000px.',
        'Choose text color and background color.',
        'Select the output format (PNG, JPEG, or PDF).',
        'Enter barcode data in the text area (one per line, up to 50).',
        'Click “Generate Barcodes” to create previews.',
        'Download individual barcodes or all as ZIP/PDF.',
      ],
      bulkTitle: 'Bulk Barcode Generation',
      bulkSteps: [
        'Configure barcode settings (type, size, colors, format).',
        'Upload a CSV or Excel file containing barcode values.',
        'Each cell value will be used to generate a barcode.',
        'Click “Generate Barcodes” to process the file.',
        'Download the generated ZIP file with all barcode images.',
        'Images are named after their barcode content.',
      ],
      tipsTitle: 'Tips',
      tips: [
        'QR codes can encode any text or URL.',
        'EAN-13 and UPC-A require numeric data of specific length.',
        'Code128 and Code39 support alphanumeric characters.',
        'Large files may take longer to process.',
        'Generated images use barcode values as filenames for easy identification.',
      ],
    },
    examples: {
      heading: 'Examples',
      items: [
        { type: 'Code128', data: 'HELLO123', description: 'Alphanumeric barcode for product codes.' },
        { type: 'EAN-13', data: '1234567890128', description: '13-digit barcode for retail products.' },
        { type: 'QR Code', data: 'https://barcode.chdaoai.com', description: 'QR code for URLs and web links.' },
        { type: 'UPC-A', data: '012345678905', description: '12-digit barcode for US products.' },
      ],
    },
    feedback: {
      heading: 'Feedback',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit Feedback',
      success: 'Thank you for your feedback!',
      description: 'Share your thoughts with us. We value every suggestion.',
    },
    about: {
      title: 'About Us',
      subtitle: 'Empowering businesses and individuals with professional barcode generation solutions',
      whoWeAre: 'Who We Are',
      whoWeAreDesc1: 'Welcome to our Online Bulk Barcode Generator! We are a dedicated team of professionals committed to providing free, high-quality barcode generation services to businesses, developers, and individuals worldwide. Our platform combines cutting-edge technology with user-friendly design to deliver exceptional results.',
      whoWeAreDesc2: 'Since our inception, we have been focused on making barcode generation accessible, efficient, and reliable. Whether you need a single barcode or thousands, our platform is designed to meet your needs with precision and speed.',
      mission: 'Our Mission',
      missionDesc: 'Our mission is to democratize access to professional barcode generation tools by providing a reliable, free, and user-friendly service that meets the diverse needs of businesses, developers, and individuals worldwide.',
      innovation: 'Innovation',
      innovationDesc: 'Continuously improving our technology and features',
      quality: 'Quality',
      qualityDesc: 'Delivering high-quality, reliable solutions',
      accessibility: 'Accessibility',
      accessibilityDesc: 'Making professional tools available to everyone',
      whatWeOffer: 'What We Offer',
      multipleTypes: 'Multiple Barcode Types',
      multipleTypesDesc: 'Code128, Code39, EAN-13, UPC-A, QR Code and more',
      customizable: 'Customizable Properties',
      customizableDesc: 'Size, colors, format - fully customizable',
      bulkGen: 'Bulk Generation',
      bulkGenDesc: 'Generate up to 50 barcodes or upload CSV/Excel files',
      multipleFormats: 'Multiple Formats',
      multipleFormatsDesc: 'Export as PNG, JPEG, or PDF',
      freeUnlimited: 'Free & Unlimited',
      freeUnlimitedDesc: 'No cost, no limits, no registration required',
      fastReliable: 'Fast & Reliable',
      fastReliableDesc: 'Lightning-fast generation with 99.9% uptime',
      ourTeam: 'Our Team',
      ourTeamDesc: 'Our diverse team of experts works tirelessly to bring you the best barcode generation experience. Each member brings unique skills and perspectives to create innovative solutions.',
      contactInfo: 'Contact Information',
      email: 'Email',
      address: 'Address',
      teamMembers: [
        {
          role: 'Lead Developer',
          department: 'Tech Innovation',
          description: 'Expert in web technologies and barcode systems with 8+ years of experience.',
        },
        {
          role: 'Product Manager',
          department: 'Product Excellence',
          description: 'Passionate about creating user-friendly solutions and improving user experience.',
        },
        {
          role: 'UI/UX Designer',
          department: 'Design Studio',
          description: 'Specializes in modern, intuitive interfaces and visual design systems.',
        },
        {
          role: 'Quality Assurance',
          department: 'Quality Assurance',
          description: 'Ensures our platform meets the highest standards of reliability and performance.',
        },
        {
          role: 'Backend Engineer',
          department: 'Tech Innovation',
          description: 'Architect of scalable systems and robust API infrastructure.',
        },
        {
          role: 'Marketing Specialist',
          department: 'Growth Marketing',
          description: 'Drives user acquisition and engagement through strategic marketing initiatives.',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have a question, suggestion, or need help? We\'d love to hear from you!',
      emailUs: 'Email Us',
      emailDesc: 'Send us an email anytime! We typically respond within 24 hours.',
      visitUs: 'Visit Us',
      visitDesc: 'Our office is located in the heart of Shenzhen\'s tech district.',
      businessHours: 'Business Hours',
      businessHoursContent: 'Monday - Friday: 9:00 AM - 6:00 PM (CST)',
      businessHoursDesc: 'We\'re here to help during business hours. Outside hours? Email us!',
      sendMessage: 'Send Us a Message',
      sendMessageDesc: 'Fill out the form below and we\'ll get back to you as soon as possible.',
      yourName: 'Your Name',
      emailAddress: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      sendButton: 'Send Message',
      sentButton: 'Message Sent! ✓',
      thankYou: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      whyContact: 'Why Contact Us?',
      techSupport: 'Technical Support',
      techSupportDesc: 'Need help using our barcode generator? We\'re here to assist!',
      businessInquiries: 'Business Inquiries',
      businessInquiriesDesc: 'Interested in partnerships or enterprise solutions? Let\'s talk!',
      feedback: 'Feedback & Suggestions',
      feedbackDesc: 'Have ideas to improve our service? We\'d love to hear them!',
      reportIssues: 'Report Issues',
      reportIssuesDesc: 'Found a bug or experiencing problems? Report it to us!',
      faq: 'Frequently Asked Questions',
      faq1Q: 'How quickly will I receive a response?',
      faq1A: 'We aim to respond to all inquiries within 24 hours during business days.',
      faq2Q: 'Do you offer technical support?',
      faq2A: 'Yes! We provide free technical support for all users of our barcode generator.',
      faq3Q: 'Can I request a custom feature?',
      faq3A: 'Absolutely! We welcome feature requests and feedback. Please use the contact form above.',
      responseTime: 'Response Time',
      responseTimeDesc: 'We typically respond to all inquiries within 24 hours during business days.',
      urgentNote: 'For urgent matters, please mention "URGENT" in your subject line.',
    },
    legal: {
      privacyTitle: 'Privacy Policy',
      privacyIntroTitle: 'Introduction',
      privacyIntroDesc:
        'We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our barcode generator service.',
      privacyCollectTitle: 'Information We Collect',
      privacyCollectDesc: 'We may collect the following types of information:',
      privacyCollectItems: [
        'Information you provide when contacting us (name, email, message).',
        'Usage data and analytics to improve our service.',
        'Barcode data you generate (processed locally in your browser).',
        'Device information such as browser type, operating system, and screen resolution.',
        'IP address and general location data for security and analytics purposes.',
      ],
      privacyUseTitle: 'How We Use Your Information',
      privacyUseDesc: 'We use the information we collect to:',
      privacyUseItems: [
        'Provide and improve our barcode generation service.',
        'Respond to your inquiries and feedback.',
        'Analyze usage patterns to enhance user experience.',
        'Ensure the security and integrity of our service.',
        'Comply with legal obligations and protect our rights.',
      ],
      privacySecurityTitle: 'Data Security',
      privacySecurityDesc:
        'We implement appropriate security measures to protect your personal information. All barcode generation is processed locally in your browser, and we do not store your barcode data on our servers. We use industry-standard encryption and security protocols to safeguard any data we do collect.',
      privacyCookiesTitle: 'Cookies and Tracking Technologies',
      privacyCookiesDesc:
        'We may use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings. Some features may not function properly if cookies are disabled.',
      privacyThirdPartyTitle: 'Third-Party Services',
      privacyThirdPartyDesc:
        'Our service may integrate with third-party analytics and advertising services (such as Google Analytics and Google AdSense) that may collect information about your use of our website. These services have their own privacy policies, and we encourage you to review them.',
      privacyUserRightsTitle: 'Your Rights',
      privacyUserRightsDesc:
        'You have the right to access, update, or delete your personal information. You may also opt out of certain data collection practices. To exercise these rights, please contact us at barcode@chdaoai.com.',
      privacyDataRetentionTitle: 'Data Retention',
      privacyDataRetentionDesc:
        'We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Barcode data generated through our service is processed locally and not stored on our servers.',
      privacyChildrenTitle: 'Children\'s Privacy',
      privacyChildrenDesc:
        'Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.',
      privacyChangesTitle: 'Changes to This Policy',
      privacyChangesDesc:
        'We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our service after such changes constitutes acceptance of the updated policy.',
      privacyContactTitle: 'Contact Us',
      privacyContactDesc:
        'If you have questions about this privacy policy, please contact us at barcode@chdaoai.com.',

      termsTitle: 'Terms of Service',
      termsUpdated: 'Last updated',
      termsAcceptanceTitle: 'Acceptance of Terms',
      termsAcceptanceDesc:
        'By accessing and using our barcode generator service, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.',
      termsUseTitle: 'Use of Service',
      termsUseDesc:
        'You may use our service to generate barcodes for personal or commercial purposes. You agree not to use the service for any illegal or unauthorized purpose, including but not limited to:',
      termsUseItems: [
        'Generating barcodes for counterfeit products or fraudulent activities.',
        'Violating any applicable laws or regulations.',
        'Infringing upon intellectual property rights.',
        'Transmitting malicious code or harmful content.',
        'Attempting to disrupt or compromise the service\'s security.',
      ],
      termsUserAccountTitle: 'User Accounts',
      termsUserAccountDesc:
        'Currently, our service does not require user registration. However, if we introduce account features in the future, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
      termsIntellectualPropertyTitle: 'Intellectual Property',
      termsIntellectualPropertyDesc:
        'All content, features, and functionality of our service, including but not limited to text, graphics, logos, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
      termsUserContentTitle: 'User-Generated Content',
      termsUserContentDesc:
        'You retain ownership of any barcodes you generate using our service. However, by using our service, you grant us a non-exclusive, royalty-free license to use, display, and analyze aggregated usage data for service improvement purposes.',
      termsAvailabilityTitle: 'Service Availability',
      termsAvailabilityDesc:
        'We strive to provide a reliable service but do not guarantee uninterrupted or error-free operation. We reserve the right to modify, suspend, or discontinue the service at any time without prior notice. We are not responsible for any loss or damage resulting from service interruptions.',
      termsModificationsTitle: 'Modifications to Service',
      termsModificationsDesc:
        'We reserve the right to modify, update, or discontinue any aspect of our service at any time. We may also impose limits on certain features or restrict access to parts of the service without notice or liability.',
      termsLiabilityTitle: 'Limitation of Liability',
      termsLiabilityDesc:
        'We are not liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our service. The service is provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      termsIndemnificationTitle: 'Indemnification',
      termsIndemnificationDesc:
        'You agree to indemnify and hold us harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the service, violation of these terms, or infringement of any rights of another party.',
      termsTerminationTitle: 'Termination',
      termsTerminationDesc:
        'We reserve the right to terminate or suspend your access to our service immediately, without prior notice, for any reason, including violation of these terms. Upon termination, your right to use the service will cease immediately.',
      termsGoverningLawTitle: 'Governing Law',
      termsGoverningLawDesc:
        'These Terms of Service shall be governed by and construed in accordance with the laws of the People\'s Republic of China, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Shenzhen, China.',
      termsDisputeResolutionTitle: 'Dispute Resolution',
      termsDisputeResolutionDesc:
        'In the event of any dispute arising from or relating to these terms, we encourage you to contact us first to seek an amicable resolution. If a dispute cannot be resolved through direct communication, it shall be resolved through binding arbitration in accordance with applicable arbitration rules.',
      termsSeverabilityTitle: 'Severability',
      termsSeverabilityDesc:
        'If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.',
      termsContactTitle: 'Contact Us',
      termsContactDesc:
        'For questions about these terms, please contact us at barcode@chdaoai.com.',

      refundTitle: 'Refund Policy',
      refundIntroTitle: 'Introduction',
      refundIntroDesc:
        'This refund policy outlines the terms and conditions regarding refunds for any paid services we may offer in the future. Currently, our barcode generator service is provided free of charge.',
      refundFreeServiceTitle: 'Free Service',
      refundFreeServiceDesc:
        'Our barcode generator service is currently provided free of charge to all users. As such, there are no payments to refund. All features, including single barcode generation, bulk generation, and multiple export formats, are available at no cost.',
      refundFuturePaidTitle: 'Future Paid Services',
      refundFuturePaidDesc:
        'If we introduce paid services, subscriptions, or premium features in the future, the following refund policy will apply:',
      refundFuturePaidItems: [
        'Refund requests must be submitted within 30 days of purchase.',
        'Refunds will be processed to the original payment method within 7-14 business days.',
        'Refunds may be prorated for subscription services based on unused time.',
        'We reserve the right to refuse refunds for services that have been significantly used or abused.',
      ],
      refundEligibilityTitle: 'Refund Eligibility',
      refundEligibilityDesc:
        'Refunds may be granted in the following circumstances:',
      refundEligibilityItems: [
        'Service malfunction or failure to deliver promised features.',
        'Duplicate or accidental charges.',
        'Cancellation of subscription within the refund period.',
        'Technical issues preventing service access that cannot be resolved.',
      ],
      refundNonEligibleTitle: 'Non-Refundable Items',
      refundNonEligibleDesc:
        'The following are generally not eligible for refunds:',
      refundNonEligibleItems: [
        'Services used beyond the refund period.',
        'Refund requests due to user error or misunderstanding of service features.',
        'Services terminated due to violation of Terms of Service.',
        'Custom or personalized services that have been delivered.',
      ],
      refundProcessTitle: 'Refund Process',
      refundProcessDesc:
        'To request a refund, please contact us at barcode@chdaoai.com with the following information:',
      refundProcessItems: [
        'Your account email or transaction ID.',
        'Date of purchase and payment method.',
        'Reason for refund request.',
        'Any relevant documentation or screenshots.',
      ],
      refundProcessingTimeTitle: 'Processing Time',
      refundProcessingTimeDesc:
        'Refund requests will be reviewed within 5-7 business days. Once approved, refunds will be processed to your original payment method within 7-14 business days. Processing times may vary depending on your payment provider.',
      refundContactTitle: 'Contact Us',
      refundContactDesc:
        'For questions about refunds or to submit a refund request, please contact us at barcode@chdaoai.com. We are committed to resolving refund issues fairly and promptly.',

      disclaimerTitle: 'Disclaimer',
      disclaimerIntroTitle: 'Introduction',
      disclaimerIntroDesc:
        'This disclaimer sets forth the general guidelines, disclaimers, and terms of use for our barcode generator service. By using our service, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.',
      disclaimerNoWarrantyTitle: 'No Warranty',
      disclaimerNoWarrantyDesc:
        'Our barcode generator service is provided "as is" and "as available" without any warranties, expressed or implied. We do not guarantee that the service will be uninterrupted, error-free, secure, or meet your specific requirements. We disclaim all warranties, including but not limited to:',
      disclaimerNoWarrantyItems: [
        'Warranties of merchantability or fitness for a particular purpose.',
        'Warranties regarding the accuracy, reliability, or completeness of generated barcodes.',
        'Warranties that the service will be available at all times or free from defects.',
        'Warranties regarding third-party services or integrations.',
      ],
      disclaimerAccuracyTitle: 'Accuracy of Barcodes',
      disclaimerAccuracyDesc:
        'While we strive to generate accurate and scannable barcodes using industry-standard algorithms, we cannot guarantee that all generated barcodes will be scannable by all devices or meet specific industry standards. Users are solely responsible for:',
      disclaimerAccuracyItems: [
        'Verifying the accuracy and functionality of generated barcodes before use.',
        'Ensuring barcodes comply with applicable industry standards and regulations.',
        'Testing barcodes with their intended scanning devices.',
        'Validating barcode data for correctness and completeness.',
      ],
      disclaimerLiabilityTitle: 'Limitation of Liability',
      disclaimerLiabilityDesc:
        'To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:',
      disclaimerLiabilityItems: [
        'The use or inability to use our service.',
        'Errors, omissions, or inaccuracies in generated barcodes.',
        'Loss of data, profits, or business opportunities.',
        'Unauthorized access to or alteration of your data.',
        'Third-party services or content accessed through our service.',
      ],
      disclaimerThirdPartyTitle: 'Third-Party Services',
      disclaimerThirdPartyDesc:
        'Our service may integrate with or link to third-party services, websites, or applications. We are not responsible for the content, privacy practices, or terms of service of these third parties. Your interactions with third-party services are solely between you and the third party.',
      disclaimerUseAtOwnRiskTitle: 'Use at Your Own Risk',
      disclaimerUseAtOwnRiskDesc:
        'Your use of our service is at your own risk. We are not responsible for any consequences resulting from the use of generated barcodes, including but not limited to:',
      disclaimerUseAtOwnRiskItems: [
        'Product identification errors or mislabeling.',
        'Inventory management issues.',
        'Compliance violations or regulatory issues.',
        'Financial losses or business disruptions.',
      ],
      disclaimerModificationsTitle: 'Service Modifications',
      disclaimerModificationsDesc:
        'We reserve the right to modify, suspend, or discontinue any aspect of our service at any time without prior notice. We are not liable for any inconvenience or loss resulting from such modifications or discontinuations.',
      disclaimerJurisdictionTitle: 'Jurisdiction',
      disclaimerJurisdictionDesc:
        'This disclaimer is governed by the laws of the People\'s Republic of China. Any disputes arising from this disclaimer shall be subject to the exclusive jurisdiction of the courts in Shenzhen, China.',
      disclaimerContactTitle: 'Contact Us',
      disclaimerContactDesc:
        'For questions about this disclaimer, please contact us at barcode@chdaoai.com. We are committed to providing transparent information about our service and addressing any concerns you may have.',

      copyrightTitle: 'Copyright Notice',
      copyrightIntroTitle: 'Introduction',
      copyrightIntroDesc:
        'This copyright notice outlines the ownership and usage rights of content, design, and functionality of our barcode generator service. By using our service, you acknowledge and agree to respect these copyright protections.',
      copyrightOwnershipTitle: 'Copyright Ownership',
      copyrightOwnershipDesc:
        'All content, design, and functionality of this website and service, including but not limited to the following, are the exclusive property of Barcode Generator and are protected by copyright laws:',
      copyrightOwnershipItems: [
        'Website design, layout, graphics, logos, and visual elements.',
        'Software code, algorithms, and technical implementations.',
        'Documentation, help text, and user guides.',
        'Brand names, service marks, and trade dress.',
        'Compilations, databases, and aggregated content.',
      ],
      copyrightUserContentTitle: 'User-Generated Content',
      copyrightUserContentDesc:
        'Barcodes generated using our service are created by users and belong exclusively to the users who generated them. We do not claim ownership, copyright, or any intellectual property rights over user-generated barcodes. Users are free to use, distribute, and commercialize their generated barcodes as they see fit.',
      copyrightPermittedUseTitle: 'Permitted Use',
      copyrightPermittedUseDesc:
        'You are granted a limited, non-exclusive, non-transferable license to use our service for generating barcodes for personal or commercial purposes, subject to the following conditions:',
      copyrightPermittedUseItems: [
        'You may use generated barcodes for any lawful purpose.',
        'You may download and save generated barcodes for your use.',
        'You may share generated barcodes with others.',
        'You may use generated barcodes in commercial products or services.',
      ],
      copyrightProhibitedUseTitle: 'Prohibited Use',
      copyrightProhibitedUseDesc:
        'The following activities are strictly prohibited without our express written permission:',
      copyrightProhibitedUseItems: [
        'Reproducing, copying, or duplicating our website or service.',
        'Creating derivative works based on our service or website design.',
        'Reverse engineering, decompiling, or disassembling our software.',
        'Removing, altering, or obscuring copyright notices or proprietary markings.',
        'Using our service to create competing services or products.',
        'Scraping, crawling, or automated data extraction from our service.',
      ],
      copyrightThirdPartyTitle: 'Third-Party Content',
      copyrightThirdPartyDesc:
        'Our service may incorporate or reference third-party content, libraries, or software. Such content remains the property of its respective owners and is subject to their own copyright and licensing terms. We respect all third-party intellectual property rights.',
      copyrightInfringementTitle: 'Copyright Infringement',
      copyrightInfringementDesc:
        'If you believe that any content on our website or service infringes your copyright, please contact us immediately at barcode@chdaoai.com with the following information:',
      copyrightInfringementItems: [
        'A description of the copyrighted work you claim has been infringed.',
        'The location of the allegedly infringing material on our service.',
        'Your contact information, including name, address, and email.',
        'A statement that you have a good faith belief that the use is not authorized.',
        'A statement that the information is accurate and you are authorized to act on behalf of the copyright owner.',
      ],
      copyrightDMCATitle: 'DMCA Compliance',
      copyrightDMCADesc:
        'We comply with applicable copyright laws and will respond promptly to valid DMCA takedown notices. Upon receipt of a valid notice, we will remove or disable access to the allegedly infringing content and notify the user who posted it.',
      copyrightContactTitle: 'Contact Us',
      copyrightContactDesc:
        'For copyright inquiries, licensing requests, or to report copyright infringement, please contact us at barcode@chdaoai.com. We are committed to protecting intellectual property rights and will address all legitimate concerns promptly.',

      legalNoticeTitle: 'Legal Notice',
      legalNoticeIntroTitle: 'Introduction',
      legalNoticeIntroDesc:
        'This legal notice provides important information about our company, service, and legal obligations. It serves as a formal declaration of our business identity, contact information, and legal responsibilities under applicable laws.',
      legalNoticeCompanyTitle: 'Company Information',
      legalNoticeCompanyDesc:
        'The following information is provided in accordance with applicable legal requirements:',
      legalNoticeCompanyName: 'Barcode Generator',
      legalNoticeCompanyAddress: '130 Longhua Avenue, Longhua District, Shenzhen, China',
      legalNoticeContactInfoTitle: 'Contact Information',
      legalNoticeContactInfoDesc:
        'For inquiries, support, or legal matters, you may contact us through the following channels:',
      legalNoticeContactEmail: 'Email: barcode@chdaoai.com',
      legalNoticeContactAddress: 'Address: 130 Longhua Avenue, Longhua District, Shenzhen, China',
      legalNoticeResponsibleTitle: 'Responsible for Content',
      legalNoticeResponsibleDesc:
        'The content of our website has been created with the utmost care and diligence. However, we cannot guarantee the absolute accuracy, completeness, or timeliness of all information. We reserve the right to modify, update, or remove content at any time without prior notice.',
      legalNoticeLiabilityLinksTitle: 'Liability for Links',
      legalNoticeLiabilityLinksDesc:
        'Our website may contain links to external websites operated by third parties. We have no control over the content, privacy practices, or terms of service of these external sites. We assume no liability for:',
      legalNoticeLiabilityLinksItems: [
        'The content, accuracy, or legality of external websites.',
        'Any damages or losses resulting from visiting external links.',
        'Privacy practices or data collection by third-party sites.',
        'Products, services, or information offered on external sites.',
      ],
      legalNoticeCopyrightTitle: 'Copyright',
      legalNoticeCopyrightDesc:
        'The content and works on this website are subject to copyright law. Reproduction, processing, distribution, and any form of commercialization require the written consent of the respective author or creator. Unauthorized use may result in legal action.',
      legalNoticeTrademarksTitle: 'Trademarks',
      legalNoticeTrademarksDesc:
        'All trademarks, service marks, and trade names used on this website are the property of their respective owners. Use of our trademarks, including "Barcode Generator" and related marks, requires our prior written consent. Unauthorized use of our trademarks is prohibited.',
      legalNoticeGoverningLawTitle: 'Governing Law',
      legalNoticeGoverningLawDesc:
        'This legal notice and all matters relating to our service are governed by the laws of the People\'s Republic of China. Any legal disputes shall be subject to the exclusive jurisdiction of the courts in Shenzhen, China.',
      legalNoticeUpdatesTitle: 'Updates to Legal Notice',
      legalNoticeUpdatesDesc:
        'We reserve the right to update this legal notice at any time to reflect changes in our service, legal requirements, or business practices. Users are encouraged to review this notice periodically. Continued use of our service after changes constitutes acceptance of the updated notice.',
      legalNoticeContactTitle: 'Contact Us',
      legalNoticeContactDesc:
        'For questions about this legal notice or any legal matters, please contact us at barcode@chdaoai.com. We are committed to transparency and will respond to all legitimate inquiries promptly.',

      intellectualPropertyTitle: 'Intellectual Property Statement',
      intellectualPropertyIntroTitle: 'Introduction',
      intellectualPropertyIntroDesc:
        'This intellectual property statement outlines our ownership rights, policies, and protections regarding trademarks, copyrights, patents, trade secrets, and other intellectual property assets related to our barcode generator service.',
      intellectualPropertyOwnershipTitle: 'Ownership of Intellectual Property',
      intellectualPropertyOwnershipDesc:
        'All intellectual property rights in our barcode generator service, including but not limited to the following, are owned by Barcode Generator or our licensors:',
      intellectualPropertyOwnershipItems: [
        'Trademarks, service marks, and trade names associated with our brand.',
        'Copyrights in software code, algorithms, and technical documentation.',
        'Patents or patent applications related to our technology (if any).',
        'Trade secrets, proprietary algorithms, and confidential information.',
        'Website design, user interface, and user experience elements.',
        'Business methods, processes, and operational procedures.',
      ],
      intellectualPropertyTrademarksTitle: 'Trademarks',
      intellectualPropertyTrademarksDesc:
        'All trademarks, service marks, and trade names used on this website and in connection with our service are the property of their respective owners. Our trademarks include, but are not limited to:',
      intellectualPropertyTrademarksItems: [
        '"Barcode Generator" and variations thereof.',
        'Our logo and brand identity elements.',
        'Service names and product identifiers.',
        'Slogans and taglines associated with our service.',
      ],
      intellectualPropertyTrademarkUseTitle: 'Trademark Use Policy',
      intellectualPropertyTrademarkUseDesc:
        'Use of our trademarks requires our prior written consent. Unauthorized use of our trademarks is strictly prohibited and may result in legal action. If you wish to use our trademarks, please contact us at barcode@chdaoai.com to request permission.',
      intellectualPropertyCopyrightTitle: 'Copyright Protection',
      intellectualPropertyCopyrightDesc:
        'All original content, software code, documentation, and creative works on our website and service are protected by copyright law. This includes:',
      intellectualPropertyCopyrightItems: [
        'Source code and software implementations.',
        'Website design and layout.',
        'Documentation and user guides.',
        'Graphics, images, and visual elements.',
        'Written content and copy.',
      ],
      intellectualPropertyThirdPartyTitle: 'Third-Party Intellectual Property',
      intellectualPropertyThirdPartyDesc:
        'Our service uses third-party libraries, software, and technologies that are subject to their respective licenses and intellectual property rights. We respect all third-party intellectual property and comply with applicable licenses, including:',
      intellectualPropertyThirdPartyItems: [
        'Open-source software licenses (MIT, Apache, etc.).',
        'Commercial software licenses and agreements.',
        'Third-party API terms and conditions.',
        'Font licenses and design resources.',
      ],
      intellectualPropertyUserContentTitle: 'User-Generated Content',
      intellectualPropertyUserContentDesc:
        'Users retain all intellectual property rights to barcodes they generate using our service. We do not claim ownership, copyright, or any intellectual property rights over user-generated content. Users are free to:',
      intellectualPropertyUserContentItems: [
        'Use generated barcodes for any lawful purpose.',
        'Register trademarks or copyrights for their barcodes.',
        'License or sell their generated barcodes to third parties.',
        'Modify or create derivative works from their barcodes.',
      ],
      intellectualPropertyEnforcementTitle: 'Enforcement of Rights',
      intellectualPropertyEnforcementDesc:
        'We take intellectual property rights seriously and will take appropriate legal action against any infringement of our intellectual property. This may include:',
      intellectualPropertyEnforcementItems: [
        'Issuing cease and desist notices.',
        'Filing lawsuits for damages and injunctive relief.',
        'Reporting violations to relevant authorities.',
        'Pursuing criminal charges for serious violations.',
      ],
      intellectualPropertyReportingTitle: 'Reporting Infringement',
      intellectualPropertyReportingDesc:
        'If you believe that your intellectual property rights have been infringed by content on our service, please contact us immediately at barcode@chdaoai.com with:',
      intellectualPropertyReportingItems: [
        'A detailed description of the allegedly infringing content.',
        'Proof of your ownership of the intellectual property.',
        'Your contact information and authorization to act.',
        'A statement of good faith belief of infringement.',
      ],
      intellectualPropertyContactTitle: 'Contact Us',
      intellectualPropertyContactDesc:
        'For intellectual property inquiries, licensing requests, or to report infringement, please contact us at barcode@chdaoai.com. We are committed to protecting intellectual property rights and will address all legitimate concerns promptly and professionally.',
    },
    barcode: {
      generator: 'Barcode Generator',
      bulkGenerator: 'Bulk Barcode Generator',
      barcodeType: 'Barcode Type',
      size: 'Size',
      textColor: 'Text Color',
      background: 'Background',
      format: 'Format',
      barcodeData: 'Barcode Data',
      onePerLine: '(one per line, max 50)',
      itemLabel: 'barcode',
      itemsLabel: 'barcodes',
      placeholder: 'Enter barcode values, one per line',
      placeholderExample: 'Example:\n1234567890128\nHELLO123\nhttps://example.com',
      generate: 'Generate Barcodes',
      download: 'Download',
      downloadZIP: 'Download ZIP',
      downloadPDF: 'Download as PDF',
      downloadReady: 'ZIP file ready. You can download it anytime.',
      downloadGeneratedZip: 'Download Generated ZIP',
      downloadCsvTemplate: 'Download CSV Template',
      downloadExcelTemplate: 'Download Excel Template',
      templateDescription: 'Use these templates to prepare your barcode list quickly.',
      preview: 'Preview',
      clearAll: 'Clear All',
      uploadFile: 'Upload CSV or Excel File',
      clickUpload: 'Click to upload or drag and drop',
      fileTypes: 'CSV, XLSX, XLS (Max file size: 10MB)',
      tip: 'Tip:',
      tipDesc: 'The file should contain barcode values in cells. Each cell value will be used to generate a barcode. The generated ZIP file will contain barcode images named after their values.',
      generating: 'Generating...',
      processing: 'Processing barcodes...',
      generated: 'generated',
      alerts: {
        noDataInput: 'Please enter at least one barcode value.',
        errorPrefix: 'Error generating barcode for:',
        generateFirst: 'Please generate barcodes first.',
        fileRequired: 'Please upload a CSV or Excel file.',
        noDataFound: 'No valid barcode data found in the file.',
        success: 'Successfully generated',
        processingError: 'Error processing file:',
        downloadStarted: 'Download started.',
      },
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      contact: '联系我们',
    },
    home: {
      title: '在线批量条码生成器',
      subtitle: '免费在线生成条码。支持多种条码类型和批量生成。',
      singleBarcode: '单个条码',
      bulkBarcode: '批量条码',
      recognize: '识别条码',
      recognizer: {
        uploadPrompt: '点击上传图片或拖拽',
        uploadHint: '支持 PNG/JPEG',
        previewPlaceholder: '上传图片后会在此显示预览',
        resultsTitle: '识别结果',
        noResults: '暂无识别结果',
        browserNotSupport: '当前浏览器不支持 BarcodeDetector，已使用回退库进行识别',
        browserSuggest: '建议使用最新版 Chrome 或 Edge 以获得最佳识别效果',
        fallbackError: '回退库识别失败',
        detectError: '识别出错：',
        typeLabel: '类型',
        valueLabel: '内容',
      },
    },
    footer: {
      description: '免费在线条码生成器，支持多种条码类型和批量生成。',
      legal: '法律',
      contact: '联系方式',
      email: '邮箱',
      address: '地址',
      copyright: '版权所有。',
      title: '条码生成器',
      legalNext: '政策',
      privacy: '隐私政策',
      terms: '服务条款',
      refund: '退款政策',
      disclaimer: '免责声明',
      copyrightNotice: '版权声明',
      legalNotice: '法律声明',
      intellectualProperty: '知识产权声明',
      contactTitle: '联系我们',
      addressDetail: '中国深圳市龙华区龙华大道130号',
    },
    features: {
      heading: '功能亮点',
      cards: [
        { icon: '📊', title: '多种条码类型', description: '支持Code128、Code39、EAN-13、UPC-A、QR码等。' },
        { icon: '📏', title: '自定义大小', description: '可在100px到1000px之间自由调整。' },
        { icon: '🎨', title: '颜色自定义', description: '可设置文字颜色与背景颜色，保持品牌一致性。' },
        { icon: '💾', title: '多种格式', description: '可导出高质量的PNG、JPEG或PDF文件。' },
        { icon: '📦', title: '批量生成', description: '最多生成50个条码，或上传CSV/Excel文件批量生成。' },
        { icon: '🆓', title: '永久免费', description: '完全免费，无需注册，无任何限制。' },
      ],
    },
    help: {
      heading: '使用帮助',
      singleTitle: '单个条码生成步骤',
      singleSteps: [
        '选择条码类型（Code128、Code39、EAN-13、UPC-A或QR码）。',
        '调整大小（100px至1000px）。',
        '选择文字颜色和背景颜色。',
        '选择输出格式（PNG、JPEG或PDF）。',
        '在文本框中输入条码数据（每行一个，最多50个）。',
        '点击“生成条码”查看预览。',
        '下载单个条码或全部条码（ZIP/PDF）。',
      ],
      bulkTitle: '批量条码生成步骤',
      bulkSteps: [
        '配置条码设置（类型、大小、颜色、格式）。',
        '上传包含条码数据的CSV或Excel文件。',
        '文件中的每个单元格将用于生成一个条码。',
        '点击“生成条码”开始处理文件。',
        '下载包含所有条码图片的ZIP文件。',
        '生成的图片以条码内容命名，便于识别。',
      ],
      tipsTitle: '使用提示',
      tips: [
        'QR码可编码任意文本或网址。',
        'EAN-13和UPC-A需要固定长度的数字数据。',
        'Code128和Code39支持字母数字组合。',
        '大文件处理时间会更长，请耐心等待。',
        '生成的图片以条码内容命名，方便管理。',
      ],
    },
    examples: {
      heading: '案例展示',
      items: [
        { type: 'Code128', data: 'HELLO123', description: '适用于产品编码的字母数字条码。' },
        { type: 'EAN-13', data: '1234567890128', description: '用于零售产品的13位条码。' },
        { type: 'QR码', data: 'https://barcode.chdaoai.com', description: '可用于网址和链接的QR码。' },
        { type: 'UPC-A', data: '012345678905', description: '用于美国产品的12位条码。' },
      ],
    },
    feedback: {
      heading: '问题反馈',
      name: '姓名',
      email: '邮箱',
      message: '反馈内容',
      submit: '提交反馈',
      success: '感谢您的反馈！',
      description: '欢迎留下您的建议和想法，我们非常重视每一条反馈。',
    },
    about: {
      title: '关于我们',
      subtitle: '为企业和个人提供专业的条码生成解决方案',
      whoWeAre: '我们是谁',
      whoWeAreDesc1: '欢迎使用我们的在线批量条码生成器！我们是一支专业的团队，致力于为全球的企业、开发者和个人提供免费、高质量的条码生成服务。我们的平台结合了前沿技术和用户友好的设计，以提供卓越的结果。',
      whoWeAreDesc2: '自成立以来，我们一直专注于使条码生成变得易于访问、高效和可靠。无论您需要一个条码还是数千个，我们的平台都旨在以精确和速度满足您的需求。',
      mission: '我们的使命',
      missionDesc: '我们的使命是通过提供可靠、免费和用户友好的服务，使专业条码生成工具民主化，满足全球企业、开发者和个人的多样化需求。',
      innovation: '创新',
      innovationDesc: '持续改进我们的技术和功能',
      quality: '质量',
      qualityDesc: '提供高质量、可靠的解决方案',
      accessibility: '可访问性',
      accessibilityDesc: '让专业工具面向所有人',
      whatWeOffer: '我们提供的服务',
      multipleTypes: '多种条码类型',
      multipleTypesDesc: 'Code128、Code39、EAN-13、UPC-A、QR码等',
      customizable: '可自定义属性',
      customizableDesc: '大小、颜色、格式 - 完全可自定义',
      bulkGen: '批量生成',
      bulkGenDesc: '最多生成50个条码或上传CSV/Excel文件',
      multipleFormats: '多种格式',
      multipleFormatsDesc: '导出为PNG、JPEG或PDF',
      freeUnlimited: '免费且无限制',
      freeUnlimitedDesc: '无成本、无限制、无需注册',
      fastReliable: '快速可靠',
      fastReliableDesc: '闪电般快速生成，99.9%正常运行时间',
      ourTeam: '我们的团队',
      ourTeamDesc: '我们多元化的专家团队孜孜不倦地为您带来最佳的条码生成体验。每个成员都带来独特的技能和视角，以创建创新的解决方案。',
      contactInfo: '联系信息',
      email: '邮箱',
      address: '地址',
      teamMembers: [
        {
          role: '首席开发工程师',
          department: '技术创新团队',
          description: '拥有8年以上Web技术和条码系统经验，负责整体技术架构与实现。',
        },
        {
          role: '产品经理',
          department: '产品体验中心',
          description: '专注于打造易用、高效的产品体验，并持续收集和优化用户反馈。',
        },
        {
          role: 'UI/UX设计师',
          department: '设计工作室',
          description: '擅长现代化、直观的界面设计和一致的视觉设计系统。',
        },
        {
          role: '质量保证工程师',
          department: '质量保障团队',
          description: '确保平台在高负载场景下依然保持可靠性和稳定性。',
        },
        {
          role: '后端工程师',
          department: '技术创新团队',
          description: '负责可扩展的系统架构与高性能API服务。',
        },
        {
          role: '市场运营专员',
          department: '增长营销团队',
          description: '通过多渠道运营和活动推广，提升用户获取与活跃度。',
        },
      ],
    },
    contact: {
      title: '联系我们',
      subtitle: '有问题、建议或需要帮助？我们很乐意听到您的声音！',
      emailUs: '发送邮件',
      emailDesc: '随时给我们发邮件！我们通常在24小时内回复。',
      visitUs: '访问我们',
      visitDesc: '我们的办公室位于深圳科技区的中心。',
      businessHours: '营业时间',
      businessHoursContent: '周一至周五：上午9:00 - 下午6:00（中国标准时间）',
      businessHoursDesc: '我们在营业时间内为您提供帮助。非营业时间？请发邮件给我们！',
      sendMessage: '发送消息',
      sendMessageDesc: '填写下面的表单，我们会尽快回复您。',
      yourName: '您的姓名',
      emailAddress: '邮箱地址',
      subject: '主题',
      message: '消息',
      sendButton: '发送消息',
      sentButton: '消息已发送！✓',
      thankYou: '感谢您的消息！我们会在24小时内回复您。',
      whyContact: '为什么联系我们？',
      techSupport: '技术支持',
      techSupportDesc: '需要帮助使用我们的条码生成器？我们随时为您提供帮助！',
      businessInquiries: '业务咨询',
      businessInquiriesDesc: '对合作伙伴关系或企业解决方案感兴趣？让我们谈谈！',
      feedback: '反馈和建议',
      feedbackDesc: '有改进我们服务的想法？我们很乐意听到！',
      reportIssues: '报告问题',
      reportIssuesDesc: '发现错误或遇到问题？请向我们报告！',
      faq: '常见问题',
      faq1Q: '我多久能收到回复？',
      faq1A: '我们致力于在工作日24小时内回复所有咨询。',
      faq2Q: '你们提供技术支持吗？',
      faq2A: '是的！我们为所有条码生成器用户提供免费的技术支持。',
      faq3Q: '我可以请求自定义功能吗？',
      faq3A: '当然可以！我们欢迎功能请求和反馈。请使用上面的联系表单。',
      responseTime: '响应时间',
      responseTimeDesc: '我们通常在工作日24小时内回复所有咨询。',
      urgentNote: '对于紧急事项，请在主题行中注明"紧急"。',
    },
    legal: {
      privacyTitle: '隐私政策',
      privacyIntroTitle: '简介',
      privacyIntroDesc:
        '我们非常重视您的隐私，并致力于保护您的个人数据。本隐私政策说明了当您使用我们的条码生成服务时，我们如何收集、使用和保护您的信息。',
      privacyCollectTitle: '我们收集的信息',
      privacyCollectDesc: '我们可能会收集以下类型的信息：',
      privacyCollectItems: [
        '您在联系我们时提供的信息（姓名、邮箱、留言等）。',
        '用于改进服务的使用数据和分析信息。',
        '您生成的条码数据（仅在您的浏览器本地处理，不会上传到服务器）。',
        '设备信息，如浏览器类型、操作系统和屏幕分辨率。',
        'IP地址和大致位置数据，用于安全和分析目的。',
      ],
      privacyUseTitle: '我们如何使用这些信息',
      privacyUseDesc: '我们使用所收集的信息用于：',
      privacyUseItems: [
        '提供和改进我们的条码生成服务。',
        '回复您的咨询和反馈。',
        '分析使用情况，以优化用户体验。',
        '确保服务的安全性和完整性。',
        '遵守法律义务并保护我们的权利。',
      ],
      privacySecurityTitle: '数据安全',
      privacySecurityDesc:
        '我们采取适当的安全措施来保护您的个人信息。所有条码生成过程均在您的浏览器本地完成，我们不会在服务器上存储您的条码数据。我们使用行业标准的加密和安全协议来保护我们收集的任何数据。',
      privacyCookiesTitle: 'Cookie和跟踪技术',
      privacyCookiesDesc:
        '我们可能使用Cookie和类似的跟踪技术来增强您的体验、分析使用模式并提供个性化内容。您可以通过浏览器设置控制Cookie偏好。如果禁用Cookie，某些功能可能无法正常工作。',
      privacyThirdPartyTitle: '第三方服务',
      privacyThirdPartyDesc:
        '我们的服务可能集成了第三方分析和广告服务（如Google Analytics和Google AdSense），这些服务可能会收集有关您使用我们网站的信息。这些服务有自己的隐私政策，我们鼓励您查看它们。',
      privacyUserRightsTitle: '您的权利',
      privacyUserRightsDesc:
        '您有权访问、更新或删除您的个人信息。您也可以选择退出某些数据收集做法。要行使这些权利，请通过 barcode@chdaoai.com 与我们联系。',
      privacyDataRetentionTitle: '数据保留',
      privacyDataRetentionDesc:
        '我们仅在实现本政策所述目的所需的时间内保留个人信息，除非法律要求更长的保留期。通过我们的服务生成的条码数据在本地处理，不会存储在我们的服务器上。',
      privacyChildrenTitle: '儿童隐私',
      privacyChildrenDesc:
        '我们的服务不适用于13岁以下的儿童。我们不会故意收集儿童的个人信息。如果您认为我们无意中收集了此类信息，请立即与我们联系。',
      privacyChangesTitle: '政策变更',
      privacyChangesDesc:
        '我们可能会不时更新本隐私政策。我们将通过在此页面上发布新政策并更新"最后更新"日期来通知您任何重大变更。您在此类变更后继续使用我们的服务即表示接受更新后的政策。',
      privacyContactTitle: '联系我们',
      privacyContactDesc:
        '如果您对本隐私政策有任何疑问，请通过邮箱 barcode@chdaoai.com 与我们联系。',

      termsTitle: '服务条款',
      termsUpdated: '最后更新日期',
      termsAcceptanceTitle: '条款接受',
      termsAcceptanceDesc:
        '访问和使用我们的条码生成服务，即表示您接受并同意受本服务条款的约束。如果您不同意这些条款，请不要使用我们的服务。',
      termsUseTitle: '服务使用',
      termsUseDesc:
        '您可以将本服务用于个人或商业用途。您同意不将本服务用于任何非法或未经授权的用途，包括但不限于：',
      termsUseItems: [
        '为假冒产品或欺诈活动生成条码。',
        '违反任何适用的法律法规。',
        '侵犯知识产权。',
        '传输恶意代码或有害内容。',
        '试图破坏或损害服务的安全性。',
      ],
      termsUserAccountTitle: '用户账户',
      termsUserAccountDesc:
        '目前，我们的服务不需要用户注册。但是，如果我们在未来引入账户功能，您有责任维护账户凭据的机密性，并对您账户下发生的所有活动负责。',
      termsIntellectualPropertyTitle: '知识产权',
      termsIntellectualPropertyDesc:
        '我们服务的所有内容、功能和特性，包括但不限于文本、图形、徽标和软件，均归我们或我们的许可方所有，并受版权、商标和其他知识产权法保护。未经我们明确书面许可，您不得复制、分发或创建衍生作品。',
      termsUserContentTitle: '用户生成的内容',
      termsUserContentDesc:
        '您保留使用我们服务生成的任何条码的所有权。但是，通过使用我们的服务，您授予我们非排他性、免版税许可，以使用、显示和分析汇总的使用数据，用于服务改进目的。',
      termsAvailabilityTitle: '服务可用性',
      termsAvailabilityDesc:
        '我们努力提供稳定可靠的服务，但不保证服务始终不间断或无错误。我们保留随时修改、暂停或中止服务的权利，无需事先通知。我们对因服务中断而造成的任何损失或损害不承担责任。',
      termsModificationsTitle: '服务修改',
      termsModificationsDesc:
        '我们保留随时修改、更新或中止我们服务任何方面的权利。我们也可能对某些功能施加限制或限制对服务部分的访问，无需通知或承担责任。',
      termsLiabilityTitle: '责任限制',
      termsLiabilityDesc:
        '对于因使用或无法使用我们的服务而产生的任何直接、间接、偶然、特殊或后果性损害，我们不承担责任。本服务按"现状"提供，不附带任何明示或暗示的保证，包括但不限于适销性、特定用途适用性或非侵权性的保证。',
      termsIndemnificationTitle: '赔偿',
      termsIndemnificationDesc:
        '您同意赔偿并使我们免受因您使用服务、违反这些条款或侵犯任何其他方的权利而产生的任何索赔、损害、损失、责任和费用（包括法律费用）。',
      termsTerminationTitle: '终止',
      termsTerminationDesc:
        '我们保留立即终止或暂停您对我们服务的访问的权利，无需事先通知，原因包括违反这些条款。终止后，您使用服务的权利将立即停止。',
      termsGoverningLawTitle: '适用法律',
      termsGoverningLawDesc:
        '本服务条款应受中华人民共和国法律管辖并根据其解释，不考虑其法律冲突条款。因这些条款产生的任何争议应受中国深圳法院的专属管辖。',
      termsDisputeResolutionTitle: '争议解决',
      termsDisputeResolutionDesc:
        '如果因这些条款产生或与之相关的任何争议，我们鼓励您首先联系我们以寻求友好解决。如果争议无法通过直接沟通解决，应根据适用的仲裁规则通过具有约束力的仲裁解决。',
      termsSeverabilityTitle: '可分割性',
      termsSeverabilityDesc:
        '如果发现这些条款的任何规定不可执行或无效，该规定应被限制或消除到必要的最小程度，其余规定应保持完全有效。',
      termsContactTitle: '联系我们',
      termsContactDesc:
        '如果您对本服务条款有任何疑问，请通过邮箱 barcode@chdaoai.com 与我们联系。',

      refundTitle: '退款政策',
      refundIntroTitle: '简介',
      refundIntroDesc:
        '本退款政策概述了关于我们未来可能提供的任何付费服务退款的条款和条件。目前，我们的条码生成服务免费提供给所有用户。',
      refundFreeServiceTitle: '免费服务',
      refundFreeServiceDesc:
        '我们的条码生成服务目前免费提供给所有用户。因此，没有需要退款的付款。所有功能，包括单个条码生成、批量生成和多种导出格式，均可免费使用。',
      refundFuturePaidTitle: '未来付费服务',
      refundFuturePaidDesc:
        '如果我们在未来引入付费服务、订阅或高级功能，将适用以下退款政策：',
      refundFuturePaidItems: [
        '退款请求必须在购买后30天内提交。',
        '退款将在7-14个工作日内处理到原始付款方式。',
        '订阅服务的退款可能会根据未使用的时间按比例计算。',
        '我们保留拒绝为已大量使用或滥用的服务退款的权利。',
      ],
      refundEligibilityTitle: '退款资格',
      refundEligibilityDesc:
        '在以下情况下可以授予退款：',
      refundEligibilityItems: [
        '服务故障或未能提供承诺的功能。',
        '重复或意外收费。',
        '在退款期内取消订阅。',
        '无法解决的技术问题阻止服务访问。',
      ],
      refundNonEligibleTitle: '不可退款项目',
      refundNonEligibleDesc:
        '以下项目通常不符合退款条件：',
      refundNonEligibleItems: [
        '超过退款期使用的服务。',
        '由于用户错误或对服务功能的误解而提出的退款请求。',
        '因违反服务条款而终止的服务。',
        '已交付的定制或个性化服务。',
      ],
      refundProcessTitle: '退款流程',
      refundProcessDesc:
        '要请求退款，请通过 barcode@chdaoai.com 联系我们，并提供以下信息：',
      refundProcessItems: [
        '您的账户邮箱或交易ID。',
        '购买日期和付款方式。',
        '退款请求的原因。',
        '任何相关文档或截图。',
      ],
      refundProcessingTimeTitle: '处理时间',
      refundProcessingTimeDesc:
        '退款请求将在5-7个工作日内审核。一旦批准，退款将在7-14个工作日内处理到您的原始付款方式。处理时间可能因您的付款提供商而异。',
      refundContactTitle: '联系我们',
      refundContactDesc:
        '如有退款问题或提交退款请求，请通过 barcode@chdaoai.com 与我们联系。我们致力于公平、及时地解决退款问题。',

      disclaimerTitle: '免责声明',
      disclaimerIntroTitle: '简介',
      disclaimerIntroDesc:
        '本免责声明规定了我们条码生成服务的一般准则、免责声明和使用条款。通过使用我们的服务，您承认您已阅读、理解并同意受本免责声明的约束。',
      disclaimerNoWarrantyTitle: '无保证',
      disclaimerNoWarrantyDesc:
        '我们的条码生成服务按"现状"和"可用"提供，不附带任何明示或暗示的保证。我们不保证服务将不间断、无错误、安全或满足您的特定要求。我们否认所有保证，包括但不限于：',
      disclaimerNoWarrantyItems: [
        '适销性或特定用途适用性的保证。',
        '关于生成的条码的准确性、可靠性或完整性的保证。',
        '服务将始终可用或无缺陷的保证。',
        '关于第三方服务或集成的保证。',
      ],
      disclaimerAccuracyTitle: '条码准确性',
      disclaimerAccuracyDesc:
        '虽然我们努力使用行业标准算法生成准确且可扫描的条码，但我们不能保证所有生成的条码都能被所有设备扫描或满足特定的行业标准。用户全权负责：',
      disclaimerAccuracyItems: [
        '在使用前验证生成的条码的准确性和功能性。',
        '确保条码符合适用的行业标准和法规。',
        '使用预期的扫描设备测试条码。',
        '验证条码数据的正确性和完整性。',
      ],
      disclaimerLiabilityTitle: '责任限制',
      disclaimerLiabilityDesc:
        '在法律允许的最大范围内，我们不对因以下原因产生的任何直接、间接、偶然、特殊、后果性或惩罚性损害承担责任：',
      disclaimerLiabilityItems: [
        '使用或无法使用我们的服务。',
        '生成的条码中的错误、遗漏或不准确。',
        '数据、利润或商业机会的损失。',
        '未经授权访问或更改您的数据。',
        '通过我们的服务访问的第三方服务或内容。',
      ],
      disclaimerThirdPartyTitle: '第三方服务',
      disclaimerThirdPartyDesc:
        '我们的服务可能集成或链接到第三方服务、网站或应用程序。我们不对这些第三方的内容、隐私做法或服务条款负责。您与第三方服务的互动完全在您和第三方之间进行。',
      disclaimerUseAtOwnRiskTitle: '自担风险使用',
      disclaimerUseAtOwnRiskDesc:
        '您使用我们的服务需自担风险。我们对使用生成的条码产生的任何后果不承担责任，包括但不限于：',
      disclaimerUseAtOwnRiskItems: [
        '产品识别错误或标签错误。',
        '库存管理问题。',
        '合规违规或监管问题。',
        '财务损失或业务中断。',
      ],
      disclaimerModificationsTitle: '服务修改',
      disclaimerModificationsDesc:
        '我们保留随时修改、暂停或中止我们服务任何方面的权利，无需事先通知。我们对因此类修改或中止而产生的任何不便或损失不承担责任。',
      disclaimerJurisdictionTitle: '管辖权',
      disclaimerJurisdictionDesc:
        '本免责声明受中华人民共和国法律管辖。因本免责声明产生的任何争议应受中国深圳法院的专属管辖。',
      disclaimerContactTitle: '联系我们',
      disclaimerContactDesc:
        '如有关于本免责声明的问题，请通过 barcode@chdaoai.com 与我们联系。我们致力于提供有关我们服务的透明信息并解决您可能遇到的任何问题。',

      copyrightTitle: '版权声明',
      copyrightIntroTitle: '简介',
      copyrightIntroDesc:
        '本版权声明概述了我们条码生成服务的内容、设计和功能的所有权和使用权。通过使用我们的服务，您承认并同意尊重这些版权保护。',
      copyrightOwnershipTitle: '版权所有权',
      copyrightOwnershipDesc:
        '本网站和服务的所有内容、设计和功能，包括但不限于以下内容，均为条码生成器的专有财产，受版权法保护：',
      copyrightOwnershipItems: [
        '网站设计、布局、图形、徽标和视觉元素。',
        '软件代码、算法和技术实现。',
        '文档、帮助文本和用户指南。',
        '品牌名称、服务标记和商业外观。',
        '汇编、数据库和聚合内容。',
      ],
      copyrightUserContentTitle: '用户生成的内容',
      copyrightUserContentDesc:
        '使用我们服务生成的条码由用户创建，完全属于生成它们的用户。我们不主张对用户生成的条码拥有所有权、版权或任何知识产权。用户可以自由使用、分发和商业化其生成的条码。',
      copyrightPermittedUseTitle: '允许的使用',
      copyrightPermittedUseDesc:
        '您被授予有限的、非排他性的、不可转让的许可，用于为个人或商业目的使用我们的服务生成条码，但需遵守以下条件：',
      copyrightPermittedUseItems: [
        '您可以将生成的条码用于任何合法目的。',
        '您可以下载并保存生成的条码供自己使用。',
        '您可以与他人分享生成的条码。',
        '您可以在商业产品或服务中使用生成的条码。',
      ],
      copyrightProhibitedUseTitle: '禁止的使用',
      copyrightProhibitedUseDesc:
        '未经我们明确书面许可，严格禁止以下活动：',
      copyrightProhibitedUseItems: [
        '复制、拷贝或复制我们的网站或服务。',
        '基于我们的服务或网站设计创建衍生作品。',
        '对我们的软件进行反向工程、反编译或反汇编。',
        '删除、更改或遮蔽版权声明或专有标记。',
        '使用我们的服务创建竞争性服务或产品。',
        '从我们的服务中抓取、爬取或自动提取数据。',
      ],
      copyrightThirdPartyTitle: '第三方内容',
      copyrightThirdPartyDesc:
        '我们的服务可能包含或引用第三方内容、库或软件。此类内容仍属于其各自所有者的财产，并受其自己的版权和许可条款约束。我们尊重所有第三方的知识产权。',
      copyrightInfringementTitle: '版权侵权',
      copyrightInfringementDesc:
        '如果您认为我们网站或服务上的任何内容侵犯了您的版权，请立即通过 barcode@chdaoai.com 联系我们，并提供以下信息：',
      copyrightInfringementItems: [
        '您声称被侵犯的版权作品的描述。',
        '涉嫌侵权材料在我们服务上的位置。',
        '您的联系信息，包括姓名、地址和邮箱。',
        '您有合理理由相信该使用未经授权的声明。',
        '信息准确的声明以及您有权代表版权所有者行事的声明。',
      ],
      copyrightDMCATitle: 'DMCA合规',
      copyrightDMCADesc:
        '我们遵守适用的版权法，并将及时响应有效的DMCA删除通知。收到有效通知后，我们将删除或禁用对涉嫌侵权内容的访问，并通知发布该内容的用户。',
      copyrightContactTitle: '联系我们',
      copyrightContactDesc:
        '如有版权查询、许可请求或报告版权侵权，请通过 barcode@chdaoai.com 与我们联系。我们致力于保护知识产权，并将及时处理所有合法关切。',

      legalNoticeTitle: '法律声明',
      legalNoticeIntroTitle: '简介',
      legalNoticeIntroDesc:
        '本法律声明提供有关我们公司、服务和法律义务的重要信息。它作为我们业务身份、联系信息和适用法律下法律责任的正式声明。',
      legalNoticeCompanyTitle: '公司信息',
      legalNoticeCompanyDesc:
        '以下信息根据适用的法律要求提供：',
      legalNoticeCompanyName: '条码生成器',
      legalNoticeCompanyAddress: '中国深圳市龙华区龙华大道130号',
      legalNoticeContactInfoTitle: '联系信息',
      legalNoticeContactInfoDesc:
        '如有查询、支持或法律事务，您可以通过以下渠道联系我们：',
      legalNoticeContactEmail: '邮箱：barcode@chdaoai.com',
      legalNoticeContactAddress: '地址：中国深圳市龙华区龙华大道130号',
      legalNoticeResponsibleTitle: '内容责任',
      legalNoticeResponsibleDesc:
        '我们网站的内容已以最大的谨慎和勤勉创建。但是，我们不能保证所有信息的绝对准确性、完整性或及时性。我们保留随时修改、更新或删除内容的权利，无需事先通知。',
      legalNoticeLiabilityLinksTitle: '链接责任',
      legalNoticeLiabilityLinksDesc:
        '我们的网站可能包含由第三方运营的外部网站的链接。我们无法控制这些外部网站的内容、隐私做法或服务条款。我们对以下事项不承担责任：',
      legalNoticeLiabilityLinksItems: [
        '外部网站的内容、准确性或合法性。',
        '访问外部链接造成的任何损害或损失。',
        '第三方网站的隐私做法或数据收集。',
        '外部网站提供的产品、服务或信息。',
      ],
      legalNoticeCopyrightTitle: '版权',
      legalNoticeCopyrightDesc:
        '本网站上的内容和作品受版权法保护。复制、处理、分发和任何形式的商业化都需要相应作者或创建者的书面同意。未经授权使用可能导致法律诉讼。',
      legalNoticeTrademarksTitle: '商标',
      legalNoticeTrademarksDesc:
        '本网站上使用的所有商标、服务标记和商业名称均为其各自所有者的财产。使用我们的商标，包括"条码生成器"和相关标记，需要我们的事先书面同意。禁止未经授权使用我们的商标。',
      legalNoticeGoverningLawTitle: '适用法律',
      legalNoticeGoverningLawDesc:
        '本法律声明和与我们服务相关的所有事项均受中华人民共和国法律管辖。任何法律争议应受中国深圳法院的专属管辖。',
      legalNoticeUpdatesTitle: '法律声明更新',
      legalNoticeUpdatesDesc:
        '我们保留随时更新本法律声明的权利，以反映我们服务、法律要求或业务实践的变化。鼓励用户定期查看本声明。在变更后继续使用我们的服务即表示接受更新后的声明。',
      legalNoticeContactTitle: '联系我们',
      legalNoticeContactDesc:
        '如有关于本法律声明或任何法律事务的问题，请通过 barcode@chdaoai.com 与我们联系。我们致力于透明度，并将及时响应所有合法查询。',

      intellectualPropertyTitle: '知识产权声明',
      intellectualPropertyIntroTitle: '简介',
      intellectualPropertyIntroDesc:
        '本知识产权声明概述了我们对与条码生成服务相关的商标、版权、专利、商业秘密和其他知识产权资产的所有权、政策和保护。',
      intellectualPropertyOwnershipTitle: '知识产权所有权',
      intellectualPropertyOwnershipDesc:
        '我们条码生成服务的所有知识产权，包括但不限于以下内容，均归条码生成器或我们的许可方所有：',
      intellectualPropertyOwnershipItems: [
        '与我们品牌相关的商标、服务标记和商业名称。',
        '软件代码、算法和技术文档的版权。',
        '与我们技术相关的专利或专利申请（如有）。',
        '商业秘密、专有算法和机密信息。',
        '网站设计、用户界面和用户体验元素。',
        '业务方法、流程和操作程序。',
      ],
      intellectualPropertyTrademarksTitle: '商标',
      intellectualPropertyTrademarksDesc:
        '本网站上使用的以及与我们的服务相关的所有商标、服务标记和商业名称均为其各自所有者的财产。我们的商标包括但不限于：',
      intellectualPropertyTrademarksItems: [
        '"条码生成器"及其变体。',
        '我们的徽标和品牌标识元素。',
        '服务名称和产品标识符。',
        '与我们服务相关的口号和标语。',
      ],
      intellectualPropertyTrademarkUseTitle: '商标使用政策',
      intellectualPropertyTrademarkUseDesc:
        '使用我们的商标需要我们的事先书面同意。严格禁止未经授权使用我们的商标，否则可能导致法律诉讼。如果您希望使用我们的商标，请通过 barcode@chdaoai.com 联系我们请求许可。',
      intellectualPropertyCopyrightTitle: '版权保护',
      intellectualPropertyCopyrightDesc:
        '我们网站和服务上的所有原创内容、软件代码、文档和创意作品均受版权法保护。这包括：',
      intellectualPropertyCopyrightItems: [
        '源代码和软件实现。',
        '网站设计和布局。',
        '文档和用户指南。',
        '图形、图像和视觉元素。',
        '书面内容和文案。',
      ],
      intellectualPropertyThirdPartyTitle: '第三方知识产权',
      intellectualPropertyThirdPartyDesc:
        '我们的服务使用受各自许可和知识产权约束的第三方库、软件和技术。我们尊重所有第三方的知识产权，并遵守适用的许可，包括：',
      intellectualPropertyThirdPartyItems: [
        '开源软件许可（MIT、Apache等）。',
        '商业软件许可和协议。',
        '第三方API条款和条件。',
        '字体许可和设计资源。',
      ],
      intellectualPropertyUserContentTitle: '用户生成的内容',
      intellectualPropertyUserContentDesc:
        '用户保留使用我们服务生成的条码的所有知识产权。我们不主张对用户生成的内容拥有所有权、版权或任何知识产权。用户可以自由：',
      intellectualPropertyUserContentItems: [
        '将生成的条码用于任何合法目的。',
        '为其条码注册商标或版权。',
        '将其生成的条码许可或出售给第三方。',
        '修改或从其条码创建衍生作品。',
      ],
      intellectualPropertyEnforcementTitle: '权利执行',
      intellectualPropertyEnforcementDesc:
        '我们认真对待知识产权，并将对任何侵犯我们知识产权的行为采取适当的法律行动。这可能包括：',
      intellectualPropertyEnforcementItems: [
        '发出停止和终止通知。',
        '提起损害赔偿和禁令救济的诉讼。',
        '向相关当局报告违规行为。',
        '对严重违规行为提起刑事诉讼。',
      ],
      intellectualPropertyReportingTitle: '报告侵权',
      intellectualPropertyReportingDesc:
        '如果您认为您的知识产权被我们服务上的内容侵犯，请立即通过 barcode@chdaoai.com 联系我们，并提供：',
      intellectualPropertyReportingItems: [
        '涉嫌侵权内容的详细描述。',
        '您拥有知识产权的证明。',
        '您的联系信息和授权行事。',
        '善意相信侵权的声明。',
      ],
      intellectualPropertyContactTitle: '联系我们',
      intellectualPropertyContactDesc:
        '如有知识产权查询、许可请求或报告侵权，请通过 barcode@chdaoai.com 与我们联系。我们致力于保护知识产权，并将及时、专业地处理所有合法关切。',
    },
    barcode: {
      generator: '条码生成器',
      bulkGenerator: '批量条码生成器',
      barcodeType: '条码类型',
      size: '大小',
      textColor: '文字颜色',
      background: '背景',
      format: '格式',
      barcodeData: '条码数据',
      onePerLine: '（每行一个，最多50个）',
      itemLabel: '条码',
      itemsLabel: '个条码',
      placeholder: '请输入条码内容，每行一个，最多50个',
      placeholderExample: '示例：\n1234567890128\nHELLO123\nhttps://example.com',
      generate: '生成条码',
      download: '下载',
      downloadZIP: '下载ZIP',
      downloadPDF: '下载为PDF',
      downloadReady: '压缩包已生成，可随时下载。',
      downloadGeneratedZip: '下载生成的压缩包',
      downloadCsvTemplate: '下载CSV模板',
      downloadExcelTemplate: '下载Excel模板',
      templateDescription: '可下载以下模板快速准备您的条码列表。',
      preview: '预览',
      clearAll: '清除全部',
      uploadFile: '上传CSV或Excel文件',
      clickUpload: '点击上传或拖放',
      fileTypes: 'CSV、XLSX、XLS（最大文件大小：10MB）',
      tip: '提示：',
      tipDesc: '文件应包含单元格中的条码值。每个单元格值将用于生成条码。生成的ZIP文件将包含以其值命名的条码图像。',
      generating: '生成中...',
      processing: '正在处理条码...',
      generated: '已生成',
      alerts: {
        noDataInput: '请输入至少一个条码内容。',
        errorPrefix: '生成条码时出错：',
        generateFirst: '请先生成条码。',
        fileRequired: '请上传CSV或Excel文件。',
        noDataFound: '文件中未找到有效的条码数据。',
        success: '已成功生成',
        processingError: '处理文件时发生错误：',
        downloadStarted: '下载已开始。',
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre nosotros',
      contact: 'Contáctanos',
    },
    home: {
      title: 'Generador de códigos de barras en línea',
      subtitle: 'Crea códigos de barras gratis. Compatible con múltiples tipos y generación masiva.',
      singleBarcode: 'Código de barras individual',
      bulkBarcode: 'Códigos de barras masivos',
      recognizer: {
        uploadPrompt: 'Haz clic para subir imagen o arrastra',
        uploadHint: 'Soporta PNG, JPEG',
        previewPlaceholder: 'La vista previa aparecerá aquí después de subir',
        resultsTitle: 'Resultados de reconocimiento',
        noResults: 'Sin resultados',
        browserNotSupport: 'El navegador no admite BarcodeDetector; usando librería de respaldo',
        browserSuggest: 'Para mejores resultados use Chrome o Edge recientes',
        fallbackError: 'Fallo en la detección con la librería de respaldo',
        detectError: 'Error de detección: ',
        typeLabel: 'Tipo',
        valueLabel: 'Valor',
      },
    },
    footer: {
      description: 'Generador gratuito de códigos de barras con soporte para múltiples tipos y funciones masivas.',
      legal: 'Legal',
      contact: 'Contacto',
      email: 'Correo',
      address: 'Dirección',
      copyright: 'Todos los derechos reservados.',
      title: 'Generador de códigos de barras',
      legalNext: 'Políticas',
      privacy: 'Política de privacidad',
      terms: 'Términos del servicio',
      refund: 'Política de reembolso',
      disclaimer: 'Descargo de responsabilidad',
      copyrightNotice: 'Aviso de copyright',
      legalNotice: 'Aviso legal',
      intellectualProperty: 'Propiedad intelectual',
      contactTitle: 'Contacto',
      addressDetail: '130 Longhua Avenue, Distrito Longhua, Shenzhen, China',
    },
    features: {
      heading: 'Funciones potentes',
      cards: [
        { icon: '📊', title: 'Múltiples tipos', description: 'Compatibilidad con Code128, Code39, EAN-13, UPC-A, QR y más.' },
        { icon: '📏', title: 'Tamaño personalizable', description: 'Ajusta entre 100 px y 1000 px para cualquier escenario.' },
        { icon: '🎨', title: 'Colores personalizables', description: 'Controla el color del texto y del fondo para mantener tu marca.' },
        { icon: '💾', title: 'Varios formatos', description: 'Exporta imágenes PNG, JPEG o PDF de alta calidad.' },
        { icon: '📦', title: 'Generación masiva', description: 'Genera hasta 50 códigos o carga archivos CSV/Excel.' },
        { icon: '🆓', title: 'Uso gratuito', description: 'Sin límites, sin registro y completamente gratis.' },
      ],
    },
    help: {
      heading: 'Cómo usar',
      singleTitle: 'Generación individual',
      singleSteps: [
        'Elige el tipo de código (Code128, Code39, EAN-13, UPC-A o QR).',
        'Ajusta el tamaño entre 100 px y 1000 px.',
        'Selecciona colores de texto y fondo.',
        'Elige el formato de salida (PNG, JPEG o PDF).',
        'Introduce los datos en el cuadro (uno por línea, máximo 50).',
        'Haz clic en “Generar códigos” para ver la vista previa.',
        'Descarga códigos individuales o todos en ZIP/PDF.',
      ],
      bulkTitle: 'Generación masiva',
      bulkSteps: [
        'Configura tipo, tamaño, colores y formato.',
        'Carga un archivo CSV o Excel con los valores.',
        'Cada celda se usa para crear un código.',
        'Haz clic en “Generar códigos” para procesar.',
        'Descarga el archivo ZIP con todas las imágenes.',
        'Los archivos se nombran con el contenido del código.',
      ],
      tipsTitle: 'Consejos',
      tips: [
        'Los QR pueden codificar texto o URLs.',
        'EAN-13 y UPC-A requieren longitudes numéricas específicas.',
        'Code128 y Code39 aceptan caracteres alfanuméricos.',
        'Los archivos grandes tardan más en procesarse.',
        'Las imágenes usan el valor del código como nombre.',
      ],
    },
    examples: {
      heading: 'Ejemplos',
      items: [
        { type: 'Code128', data: 'HOLA123', description: 'Código alfanumérico para productos.' },
        { type: 'EAN-13', data: '1234567890128', description: 'Código de 13 dígitos para retail.' },
        { type: 'Código QR', data: 'https://barcode.chdaoai.com', description: 'Código QR para enlaces web.' },
        { type: 'UPC-A', data: '012345678905', description: 'Código de 12 dígitos para productos en EE. UU.' },
      ],
    },
    feedback: {
      heading: 'Comentarios',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      submit: 'Enviar comentario',
      success: '¡Gracias por tu comentario!',
      description: 'Comparte tus ideas; valoramos cada sugerencia.',
    },
    about: {
      title: 'Sobre nosotros',
      subtitle: 'Empoderamos a empresas y creadores con soluciones profesionales',
      whoWeAre: 'Quiénes somos',
      whoWeAreDesc1: 'Somos un equipo dedicado a ofrecer un generador de códigos de barras gratuito, moderno y confiable para todo el mundo.',
      whoWeAreDesc2: 'Nuestro objetivo es que crear desde un código único hasta miles sea sencillo, preciso y rápido.',
      mission: 'Nuestra misión',
      missionDesc: 'Democratizar las herramientas profesionales de códigos de barras con un servicio confiable, gratuito y fácil de usar.',
      innovation: 'Innovación',
      innovationDesc: 'Mejoramos constantemente la tecnología y las funciones.',
      quality: 'Calidad',
      qualityDesc: 'Ofrecemos resultados consistentes y de alta fidelidad.',
      accessibility: 'Accesibilidad',
      accessibilityDesc: 'Herramientas profesionales para todos.',
      whatWeOffer: 'Qué ofrecemos',
      multipleTypes: 'Múltiples tipos de código',
      multipleTypesDesc: 'Code128, Code39, EAN-13, UPC-A, QR y más',
      customizable: 'Propiedades personalizables',
      customizableDesc: 'Tamaño, colores y formato completamente configurables',
      bulkGen: 'Generación masiva',
      bulkGenDesc: 'Genera hasta 50 códigos o carga CSV/Excel',
      multipleFormats: 'Varios formatos',
      multipleFormatsDesc: 'Exporta como PNG, JPEG o PDF',
      freeUnlimited: 'Gratis e ilimitado',
      freeUnlimitedDesc: 'Sin costos ni registros',
      fastReliable: 'Rápido y confiable',
      fastReliableDesc: 'Procesamiento veloz con disponibilidad 99.9%',
      ourTeam: 'Nuestro equipo',
      ourTeamDesc: 'Un equipo multidisciplinario apasionado por crear la mejor experiencia de generación.',
      contactInfo: 'Información de contacto',
      email: 'Correo',
      address: 'Dirección',
      teamMembers: [
        {
          role: 'Desarrollador principal',
          department: 'Innovación tecnológica',
          description: 'Experto en web y sistemas de código de barras con más de 8 años.',
        },
        {
          role: 'Product Manager',
          department: 'Excelencia de producto',
          description: 'Enfocado en experiencias simples y claras.',
        },
        {
          role: 'Diseñador UI/UX',
          department: 'Estudio de diseño',
          description: 'Especialista en interfaces modernas e intuitivas.',
        },
        {
          role: 'Calidad',
          department: 'Aseguramiento de calidad',
          description: 'Garantiza confiabilidad y rendimiento.',
        },
        {
          role: 'Ingeniero backend',
          department: 'Innovación tecnológica',
          description: 'Arquitecto de sistemas escalables.',
        },
        {
          role: 'Especialista en marketing',
          department: 'Crecimiento',
          description: 'Impulsa la adopción con estrategias creativas.',
        },
      ],
    },
    contact: {
      title: 'Contáctanos',
      subtitle: '¿Preguntas o ideas? ¡Nos encanta escuchar a los usuarios!',
      emailUs: 'Escríbenos',
      emailDesc: 'Respondemos normalmente en 24 horas.',
      visitUs: 'Visítanos',
      visitDesc: 'Nuestra oficina está en el centro tecnológico de Shenzhen.',
      businessHours: 'Horario laboral',
      businessHoursContent: 'Lunes a viernes: 9:00 - 18:00 (CST)',
      businessHoursDesc: 'Envíanos un correo fuera de horario; te responderemos pronto.',
      sendMessage: 'Envíanos un mensaje',
      sendMessageDesc: 'Completa el formulario y te contactaremos.',
      yourName: 'Nombre',
      emailAddress: 'Correo',
      subject: 'Asunto',
      message: 'Mensaje',
      sendButton: 'Enviar mensaje',
      sentButton: '¡Mensaje enviado! ✓',
      thankYou: 'Gracias por escribirnos. Responderemos en 24 horas.',
      whyContact: '¿Por qué contactarnos?',
      techSupport: 'Soporte técnico',
      techSupportDesc: 'Te ayudamos a usar el generador.',
      businessInquiries: 'Consultas comerciales',
      businessInquiriesDesc: 'Explora alianzas o soluciones empresariales.',
      feedback: 'Sugerencias',
      feedbackDesc: 'Queremos conocer tus ideas para mejorar.',
      reportIssues: 'Reportar problemas',
      reportIssuesDesc: 'Si encuentras un error, cuéntanoslo.',
      faq: 'Preguntas frecuentes',
      faq1Q: '¿Cuándo recibiré respuesta?',
      faq1A: 'Respondemos dentro de las 24 horas hábiles.',
      faq2Q: '¿Ofrecen soporte técnico?',
      faq2A: 'Sí, brindamos soporte gratuito para todos los usuarios.',
      faq3Q: '¿Puedo pedir funciones personalizadas?',
      faq3A: '¡Por supuesto! Envíanos tus ideas mediante el formulario.',
      responseTime: 'Tiempo de respuesta',
      responseTimeDesc: 'Respondemos en 24 horas (días hábiles).',
      urgentNote: 'Para asuntos urgentes añade "URGENTE" en el asunto.',
    },
    legal: {
      privacyTitle: 'Política de privacidad',
      privacyIntroTitle: 'Introducción',
      privacyIntroDesc:
        'Respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestro servicio generador de códigos de barras.',
      privacyCollectTitle: 'Información que recopilamos',
      privacyCollectDesc: 'Podemos recopilar los siguientes tipos de información:',
      privacyCollectItems: [
        'Información que proporcionas al contactarnos (nombre, correo electrónico, mensaje).',
        'Datos de uso y análisis para mejorar nuestro servicio.',
        'Datos de códigos de barras que generas (procesados localmente en tu navegador).',
        'Información del dispositivo como tipo de navegador, sistema operativo y resolución de pantalla.',
        'Dirección IP y datos de ubicación general para fines de seguridad y análisis.',
      ],
      privacyUseTitle: 'Cómo usamos tu información',
      privacyUseDesc: 'Utilizamos la información que recopilamos para:',
      privacyUseItems: [
        'Proporcionar y mejorar nuestro servicio de generación de códigos de barras.',
        'Responder a tus consultas y comentarios.',
        'Analizar patrones de uso para mejorar la experiencia del usuario.',
        'Garantizar la seguridad y la integridad de nuestro servicio.',
        'Cumplir con obligaciones legales y proteger nuestros derechos.',
      ],
      privacySecurityTitle: 'Seguridad de datos',
      privacySecurityDesc:
        'Implementamos medidas de seguridad apropiadas para proteger tu información personal. Toda la generación de códigos de barras se procesa localmente en tu navegador, y no almacenamos tus datos de códigos de barras en nuestros servidores. Utilizamos cifrado y protocolos de seguridad estándar de la industria para proteger cualquier dato que recopilemos.',
      privacyCookiesTitle: 'Cookies y tecnologías de seguimiento',
      privacyCookiesDesc:
        'Podemos utilizar cookies y tecnologías de seguimiento similares para mejorar tu experiencia, analizar patrones de uso y proporcionar contenido personalizado. Puedes controlar las preferencias de cookies a través de la configuración de tu navegador. Algunas funciones pueden no funcionar correctamente si las cookies están deshabilitadas.',
      privacyThirdPartyTitle: 'Servicios de terceros',
      privacyThirdPartyDesc:
        'Nuestro servicio puede integrarse con servicios de análisis y publicidad de terceros (como Google Analytics y Google AdSense) que pueden recopilar información sobre tu uso de nuestro sitio web. Estos servicios tienen sus propias políticas de privacidad, y te recomendamos que las revises.',
      privacyUserRightsTitle: 'Tus derechos',
      privacyUserRightsDesc:
        'Tienes derecho a acceder, actualizar o eliminar tu información personal. También puedes optar por no participar en ciertas prácticas de recopilación de datos. Para ejercer estos derechos, contáctanos en barcode@chdaoai.com.',
      privacyDataRetentionTitle: 'Retención de datos',
      privacyDataRetentionDesc:
        'Conservamos la información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que se requiera un período de retención más largo por ley. Los datos de códigos de barras generados a través de nuestro servicio se procesan localmente y no se almacenan en nuestros servidores.',
      privacyChildrenTitle: 'Privacidad de menores',
      privacyChildrenDesc:
        'Nuestro servicio no está dirigido a menores de 13 años. No recopilamos conscientemente información personal de menores. Si crees que hemos recopilado inadvertidamente dicha información, contáctanos inmediatamente.',
      privacyChangesTitle: 'Cambios en esta política',
      privacyChangesDesc:
        'Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos de cualquier cambio material publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Tu uso continuado de nuestro servicio después de dichos cambios constituye la aceptación de la política actualizada.',
      privacyContactTitle: 'Contáctanos',
      privacyContactDesc:
        'Si tienes preguntas sobre esta política de privacidad, contáctanos en barcode@chdaoai.com.',

      termsTitle: 'Términos del servicio',
      termsUpdated: 'Última actualización',
      termsAcceptanceTitle: 'Aceptación de términos',
      termsAcceptanceDesc:
        'Al acceder y utilizar nuestro servicio generador de códigos de barras, aceptas y acuerdas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con estos términos, no utilices nuestro servicio.',
      termsUseTitle: 'Uso del servicio',
      termsUseDesc:
        'Puedes utilizar nuestro servicio para generar códigos de barras con fines personales o comerciales. Aceptas no utilizar el servicio para ningún propósito ilegal o no autorizado, incluyendo pero no limitado a:',
      termsUseItems: [
        'Generar códigos de barras para productos falsificados o actividades fraudulentas.',
        'Violar cualquier ley o regulación aplicable.',
        'Infringir derechos de propiedad intelectual.',
        'Transmitir código malicioso o contenido dañino.',
        'Intentar interrumpir o comprometer la seguridad del servicio.',
      ],
      termsUserAccountTitle: 'Cuentas de usuario',
      termsUserAccountDesc:
        'Actualmente, nuestro servicio no requiere registro de usuario. Sin embargo, si introducimos funciones de cuenta en el futuro, eres responsable de mantener la confidencialidad de las credenciales de tu cuenta y de todas las actividades que ocurran bajo tu cuenta.',
      termsIntellectualPropertyTitle: 'Propiedad intelectual',
      termsIntellectualPropertyDesc:
        'Todo el contenido, características y funcionalidad de nuestro servicio, incluyendo pero no limitado a texto, gráficos, logotipos y software, son propiedad nuestra o de nuestros licenciantes y están protegidos por derechos de autor, marcas registradas y otras leyes de propiedad intelectual. No puedes reproducir, distribuir o crear obras derivadas sin nuestro permiso escrito expreso.',
      termsUserContentTitle: 'Contenido generado por el usuario',
      termsUserContentDesc:
        'Conservas la propiedad de cualquier código de barras que generes utilizando nuestro servicio. Sin embargo, al utilizar nuestro servicio, nos otorgas una licencia no exclusiva y libre de regalías para usar, mostrar y analizar datos de uso agregados con fines de mejora del servicio.',
      termsAvailabilityTitle: 'Disponibilidad del servicio',
      termsAvailabilityDesc:
        'Nos esforzamos por proporcionar un servicio confiable, pero no garantizamos un funcionamiento ininterrumpido o libre de errores. Nos reservamos el derecho de modificar, suspender o discontinuar el servicio en cualquier momento sin previo aviso. No somos responsables de ninguna pérdida o daño resultante de interrupciones del servicio.',
      termsModificationsTitle: 'Modificaciones al servicio',
      termsModificationsDesc:
        'Nos reservamos el derecho de modificar, actualizar o discontinuar cualquier aspecto de nuestro servicio en cualquier momento. También podemos imponer límites en ciertas características o restringir el acceso a partes del servicio sin previo aviso ni responsabilidad.',
      termsLiabilityTitle: 'Limitación de responsabilidad',
      termsLiabilityDesc:
        'No somos responsables de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de usar nuestro servicio. El servicio se proporciona "tal cual" sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo pero no limitado a garantías de comerciabilidad, idoneidad para un propósito particular o no infracción.',
      termsIndemnificationTitle: 'Indemnización',
      termsIndemnificationDesc:
        'Aceptas indemnizar y mantenernos indemnes de cualquier reclamo, daño, pérdida, responsabilidad y gasto (incluyendo honorarios legales) que surja de tu uso del servicio, violación de estos términos o infracción de cualquier derecho de otra parte.',
      termsTerminationTitle: 'Terminación',
      termsTerminationDesc:
        'Nos reservamos el derecho de terminar o suspender tu acceso a nuestro servicio inmediatamente, sin previo aviso, por cualquier razón, incluyendo la violación de estos términos. Al terminar, tu derecho a usar el servicio cesará inmediatamente.',
      termsGoverningLawTitle: 'Ley aplicable',
      termsGoverningLawDesc:
        'Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes de la República Popular de China, sin tener en cuenta sus disposiciones de conflicto de leyes. Cualquier disputa que surja de estos términos estará sujeta a la jurisdicción exclusiva de los tribunales en Shenzhen, China.',
      termsDisputeResolutionTitle: 'Resolución de disputas',
      termsDisputeResolutionDesc:
        'En caso de cualquier disputa que surja de o se relacione con estos términos, te recomendamos que nos contactes primero para buscar una resolución amistosa. Si una disputa no puede resolverse mediante comunicación directa, se resolverá mediante arbitraje vinculante de acuerdo con las reglas de arbitraje aplicables.',
      termsSeverabilityTitle: 'Divisibilidad',
      termsSeverabilityDesc:
        'Si se determina que alguna disposición de estos términos no es ejecutable o inválida, esa disposición se limitará o eliminará en la medida mínima necesaria, y las disposiciones restantes permanecerán en pleno vigor y efecto.',
      termsContactTitle: 'Contáctanos',
      termsContactDesc:
        'Para preguntas sobre estos términos, contáctanos en barcode@chdaoai.com.',

      refundTitle: 'Política de reembolso',
      refundIntroTitle: 'Introducción',
      refundIntroDesc:
        'Esta política de reembolso describe los términos y condiciones con respecto a los reembolsos de cualquier servicio de pago que podamos ofrecer en el futuro. Actualmente, nuestro servicio generador de códigos de barras se proporciona de forma gratuita.',
      refundFreeServiceTitle: 'Servicio gratuito',
      refundFreeServiceDesc:
        'Nuestro servicio generador de códigos de barras se proporciona actualmente de forma gratuita a todos los usuarios. Como tal, no hay pagos que reembolsar. Todas las características, incluyendo generación de código único, generación masiva y múltiples formatos de exportación, están disponibles sin costo.',
      refundFuturePaidTitle: 'Servicios de pago futuros',
      refundFuturePaidDesc:
        'Si introducimos servicios de pago, suscripciones o características premium en el futuro, se aplicará la siguiente política de reembolso:',
      refundFuturePaidItems: [
        'Las solicitudes de reembolso deben enviarse dentro de los 30 días posteriores a la compra.',
        'Los reembolsos se procesarán al método de pago original dentro de 7-14 días hábiles.',
        'Los reembolsos pueden prorratearse para servicios de suscripción según el tiempo no utilizado.',
        'Nos reservamos el derecho de rechazar reembolsos para servicios que han sido significativamente utilizados o abusados.',
      ],
      refundEligibilityTitle: 'Elegibilidad para reembolso',
      refundEligibilityDesc:
        'Los reembolsos pueden otorgarse en las siguientes circunstancias:',
      refundEligibilityItems: [
        'Mal funcionamiento del servicio o falla en la entrega de características prometidas.',
        'Cargos duplicados o accidentales.',
        'Cancelación de suscripción dentro del período de reembolso.',
        'Problemas técnicos que impiden el acceso al servicio que no pueden resolverse.',
      ],
      refundNonEligibleTitle: 'Artículos no reembolsables',
      refundNonEligibleDesc:
        'Los siguientes generalmente no son elegibles para reembolsos:',
      refundNonEligibleItems: [
        'Servicios utilizados más allá del período de reembolso.',
        'Solicitudes de reembolso debido a error del usuario o malentendido de las características del servicio.',
        'Servicios terminados debido a violación de los Términos de Servicio.',
        'Servicios personalizados o personalizados que han sido entregados.',
      ],
      refundProcessTitle: 'Proceso de reembolso',
      refundProcessDesc:
        'Para solicitar un reembolso, contáctanos en barcode@chdaoai.com con la siguiente información:',
      refundProcessItems: [
        'Tu correo electrónico de cuenta o ID de transacción.',
        'Fecha de compra y método de pago.',
        'Razón de la solicitud de reembolso.',
        'Cualquier documentación o capturas de pantalla relevantes.',
      ],
      refundProcessingTimeTitle: 'Tiempo de procesamiento',
      refundProcessingTimeDesc:
        'Las solicitudes de reembolso se revisarán dentro de 5-7 días hábiles. Una vez aprobadas, los reembolsos se procesarán a tu método de pago original dentro de 7-14 días hábiles. Los tiempos de procesamiento pueden variar según tu proveedor de pago.',
      refundContactTitle: 'Contáctanos',
      refundContactDesc:
        'Para preguntas sobre reembolsos o para enviar una solicitud de reembolso, contáctanos en barcode@chdaoai.com. Estamos comprometidos a resolver los problemas de reembolso de manera justa y rápida.',

      disclaimerTitle: 'Descargo de responsabilidad',
      disclaimerIntroTitle: 'Introducción',
      disclaimerIntroDesc:
        'Este descargo de responsabilidad establece las pautas generales, descargos y términos de uso para nuestro servicio generador de códigos de barras. Al utilizar nuestro servicio, reconoces que has leído, entendido y aceptas estar sujeto a este descargo de responsabilidad.',
      disclaimerNoWarrantyTitle: 'Sin garantía',
      disclaimerNoWarrantyDesc:
        'Nuestro servicio generador de códigos de barras se proporciona "tal cual" y "según disponibilidad" sin ninguna garantía, expresa o implícita. No garantizamos que el servicio será ininterrumpido, libre de errores, seguro o que cumplirá con tus requisitos específicos. Renunciamos a todas las garantías, incluyendo pero no limitado a:',
      disclaimerNoWarrantyItems: [
        'Garantías de comerciabilidad o idoneidad para un propósito particular.',
        'Garantías respecto a la precisión, confiabilidad o integridad de los códigos de barras generados.',
        'Garantías de que el servicio estará disponible en todo momento o libre de defectos.',
        'Garantías respecto a servicios de terceros o integraciones.',
      ],
      disclaimerAccuracyTitle: 'Precisión de los códigos de barras',
      disclaimerAccuracyDesc:
        'Aunque nos esforzamos por generar códigos de barras precisos y escaneables utilizando algoritmos estándar de la industria, no podemos garantizar que todos los códigos de barras generados serán escaneables por todos los dispositivos o cumplirán con estándares específicos de la industria. Los usuarios son únicamente responsables de:',
      disclaimerAccuracyItems: [
        'Verificar la precisión y funcionalidad de los códigos de barras generados antes de usarlos.',
        'Asegurar que los códigos de barras cumplan con los estándares y regulaciones aplicables de la industria.',
        'Probar los códigos de barras con sus dispositivos de escaneo previstos.',
        'Validar los datos de códigos de barras por corrección e integridad.',
      ],
      disclaimerLiabilityTitle: 'Limitación de responsabilidad',
      disclaimerLiabilityDesc:
        'En la máxima medida permitida por la ley, no seremos responsables de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo que surja de:',
      disclaimerLiabilityItems: [
        'El uso o la imposibilidad de usar nuestro servicio.',
        'Errores, omisiones o imprecisiones en los códigos de barras generados.',
        'Pérdida de datos, ganancias u oportunidades comerciales.',
        'Acceso no autorizado o alteración de tus datos.',
        'Servicios de terceros o contenido al que se accede a través de nuestro servicio.',
      ],
      disclaimerThirdPartyTitle: 'Servicios de terceros',
      disclaimerThirdPartyDesc:
        'Nuestro servicio puede integrarse con o vincularse a servicios, sitios web o aplicaciones de terceros. No somos responsables del contenido, prácticas de privacidad o términos de servicio de estos terceros. Tus interacciones con servicios de terceros son únicamente entre tú y el tercero.',
      disclaimerUseAtOwnRiskTitle: 'Uso bajo tu propio riesgo',
      disclaimerUseAtOwnRiskDesc:
        'Tu uso de nuestro servicio es bajo tu propio riesgo. No somos responsables de ninguna consecuencia resultante del uso de códigos de barras generados, incluyendo pero no limitado a:',
      disclaimerUseAtOwnRiskItems: [
        'Errores de identificación de productos o etiquetado incorrecto.',
        'Problemas de gestión de inventario.',
        'Violaciones de cumplimiento o problemas regulatorios.',
        'Pérdidas financieras o interrupciones comerciales.',
      ],
      disclaimerModificationsTitle: 'Modificaciones del servicio',
      disclaimerModificationsDesc:
        'Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestro servicio en cualquier momento sin previo aviso. No somos responsables de ninguna inconveniencia o pérdida resultante de tales modificaciones o discontinuaciones.',
      disclaimerJurisdictionTitle: 'Jurisdicción',
      disclaimerJurisdictionDesc:
        'Este descargo de responsabilidad se rige por las leyes de la República Popular de China. Cualquier disputa que surja de este descargo de responsabilidad estará sujeta a la jurisdicción exclusiva de los tribunales en Shenzhen, China.',
      disclaimerContactTitle: 'Contáctanos',
      disclaimerContactDesc:
        'Para preguntas sobre este descargo de responsabilidad, contáctanos en barcode@chdaoai.com. Estamos comprometidos a proporcionar información transparente sobre nuestro servicio y abordar cualquier preocupación que puedas tener.',

      copyrightTitle: 'Aviso de copyright',
      copyrightIntroTitle: 'Introducción',
      copyrightIntroDesc:
        'Este aviso de copyright describe la propiedad y los derechos de uso del contenido, diseño y funcionalidad de nuestro servicio generador de códigos de barras. Al usar nuestro servicio, reconoces y aceptas respetar estas protecciones de copyright.',
      copyrightOwnershipTitle: 'Propiedad del copyright',
      copyrightOwnershipDesc:
        'Todo el contenido, diseño y funcionalidad de este sitio web y servicio, incluyendo pero no limitado a lo siguiente, son propiedad exclusiva de Barcode Generator y están protegidos por las leyes de copyright:',
      copyrightOwnershipItems: [
        'Diseño del sitio web, diseño, gráficos, logotipos y elementos visuales.',
        'Código de software, algoritmos e implementaciones técnicas.',
        'Documentación, texto de ayuda y guías de usuario.',
        'Nombres de marca, marcas de servicio y apariencia comercial.',
        'Compilaciones, bases de datos y contenido agregado.',
      ],
      copyrightUserContentTitle: 'Contenido generado por el usuario',
      copyrightUserContentDesc:
        'Los códigos de barras generados usando nuestro servicio son creados por usuarios y pertenecen exclusivamente a los usuarios que los generaron. No reclamamos propiedad, copyright o derechos de propiedad intelectual sobre los códigos de barras generados por usuarios. Los usuarios son libres de usar, distribuir y comercializar sus códigos de barras generados como consideren apropiado.',
      copyrightPermittedUseTitle: 'Uso permitido',
      copyrightPermittedUseDesc:
        'Se te otorga una licencia limitada, no exclusiva, no transferible para usar nuestro servicio para generar códigos de barras para fines personales o comerciales, sujeto a las siguientes condiciones:',
      copyrightPermittedUseItems: [
        'Puedes usar los códigos de barras generados para cualquier propósito legal.',
        'Puedes descargar y guardar los códigos de barras generados para tu uso.',
        'Puedes compartir los códigos de barras generados con otros.',
        'Puedes usar los códigos de barras generados en productos o servicios comerciales.',
      ],
      copyrightProhibitedUseTitle: 'Uso prohibido',
      copyrightProhibitedUseDesc:
        'Las siguientes actividades están estrictamente prohibidas sin nuestro permiso escrito expreso:',
      copyrightProhibitedUseItems: [
        'Reproducir, copiar o duplicar nuestro sitio web o servicio.',
        'Crear obras derivadas basadas en nuestro servicio o diseño del sitio web.',
        'Ingeniería inversa, descompilar o desensamblar nuestro software.',
        'Eliminar, alterar u ocultar avisos de copyright o marcas propietarias.',
        'Usar nuestro servicio para crear servicios o productos competidores.',
        'Raspado, rastreo o extracción automatizada de datos de nuestro servicio.',
      ],
      copyrightThirdPartyTitle: 'Contenido de terceros',
      copyrightThirdPartyDesc:
        'Nuestro servicio puede incorporar o hacer referencia a contenido, bibliotecas o software de terceros. Dicho contenido sigue siendo propiedad de sus respectivos propietarios y está sujeto a sus propios términos de copyright y licencia. Respetamos todos los derechos de propiedad intelectual de terceros.',
      copyrightInfringementTitle: 'Infracción de copyright',
      copyrightInfringementDesc:
        'Si crees que cualquier contenido en nuestro sitio web o servicio infringe tu copyright, contáctanos inmediatamente en barcode@chdaoai.com con la siguiente información:',
      copyrightInfringementItems: [
        'Una descripción de la obra con copyright que afirmas ha sido infringida.',
        'La ubicación del material supuestamente infractor en nuestro servicio.',
        'Tu información de contacto, incluyendo nombre, dirección y correo electrónico.',
        'Una declaración de que tienes una creencia de buena fe de que el uso no está autorizado.',
        'Una declaración de que la información es precisa y estás autorizado para actuar en nombre del propietario del copyright.',
      ],
      copyrightDMCATitle: 'Cumplimiento DMCA',
      copyrightDMCADesc:
        'Cumplimos con las leyes de copyright aplicables y responderemos rápidamente a los avisos válidos de eliminación DMCA. Al recibir un aviso válido, eliminaremos o deshabilitaremos el acceso al contenido supuestamente infractor y notificaremos al usuario que lo publicó.',
      copyrightContactTitle: 'Contáctanos',
      copyrightContactDesc:
        'Para consultas de copyright, solicitudes de licencia o para reportar infracción de copyright, contáctanos en barcode@chdaoai.com. Estamos comprometidos a proteger los derechos de propiedad intelectual y abordaremos todas las preocupaciones legítimas rápidamente.',

      legalNoticeTitle: 'Aviso legal',
      legalNoticeIntroTitle: 'Introducción',
      legalNoticeIntroDesc:
        'Este aviso legal proporciona información importante sobre nuestra empresa, servicio y obligaciones legales. Sirve como una declaración formal de nuestra identidad comercial, información de contacto y responsabilidades legales bajo las leyes aplicables.',
      legalNoticeCompanyTitle: 'Información de la empresa',
      legalNoticeCompanyDesc:
        'La siguiente información se proporciona de acuerdo con los requisitos legales aplicables:',
      legalNoticeCompanyName: 'Barcode Generator',
      legalNoticeCompanyAddress: '130 Longhua Avenue, Distrito Longhua, Shenzhen, China',
      legalNoticeContactInfoTitle: 'Información de contacto',
      legalNoticeContactInfoDesc:
        'Para consultas, soporte o asuntos legales, puedes contactarnos a través de los siguientes canales:',
      legalNoticeContactEmail: 'Correo: barcode@chdaoai.com',
      legalNoticeContactAddress: 'Dirección: 130 Longhua Avenue, Distrito Longhua, Shenzhen, China',
      legalNoticeResponsibleTitle: 'Responsable del contenido',
      legalNoticeResponsibleDesc:
        'El contenido de nuestro sitio web ha sido creado con el mayor cuidado y diligencia. Sin embargo, no podemos garantizar la precisión absoluta, integridad o puntualidad de toda la información. Nos reservamos el derecho de modificar, actualizar o eliminar contenido en cualquier momento sin previo aviso.',
      legalNoticeLiabilityLinksTitle: 'Responsabilidad por enlaces',
      legalNoticeLiabilityLinksDesc:
        'Nuestro sitio web puede contener enlaces a sitios web externos operados por terceros. No tenemos control sobre el contenido, prácticas de privacidad o términos de servicio de estos sitios externos. No asumimos responsabilidad por:',
      legalNoticeLiabilityLinksItems: [
        'El contenido, precisión o legalidad de los sitios web externos.',
        'Cualquier daño o pérdida resultante de visitar enlaces externos.',
        'Prácticas de privacidad o recopilación de datos por sitios de terceros.',
        'Productos, servicios o información ofrecidos en sitios externos.',
      ],
      legalNoticeCopyrightTitle: 'Copyright',
      legalNoticeCopyrightDesc:
        'El contenido y las obras en este sitio web están sujetos a la ley de copyright. La reproducción, procesamiento, distribución y cualquier forma de comercialización requieren el consentimiento escrito del autor o creador respectivo. El uso no autorizado puede resultar en acción legal.',
      legalNoticeTrademarksTitle: 'Marcas comerciales',
      legalNoticeTrademarksDesc:
        'Todas las marcas comerciales, marcas de servicio y nombres comerciales utilizados en este sitio web son propiedad de sus respectivos propietarios. El uso de nuestras marcas comerciales, incluyendo "Barcode Generator" y marcas relacionadas, requiere nuestro consentimiento escrito previo. El uso no autorizado de nuestras marcas comerciales está prohibido.',
      legalNoticeGoverningLawTitle: 'Ley aplicable',
      legalNoticeGoverningLawDesc:
        'Este aviso legal y todos los asuntos relacionados con nuestro servicio se rigen por las leyes de la República Popular de China. Cualquier disputa legal estará sujeta a la jurisdicción exclusiva de los tribunales en Shenzhen, China.',
      legalNoticeUpdatesTitle: 'Actualizaciones del aviso legal',
      legalNoticeUpdatesDesc:
        'Nos reservamos el derecho de actualizar este aviso legal en cualquier momento para reflejar cambios en nuestro servicio, requisitos legales o prácticas comerciales. Se alienta a los usuarios a revisar este aviso periódicamente. El uso continuado de nuestro servicio después de los cambios constituye la aceptación del aviso actualizado.',
      legalNoticeContactTitle: 'Contáctanos',
      legalNoticeContactDesc:
        'Para preguntas sobre este aviso legal o cualquier asunto legal, contáctanos en barcode@chdaoai.com. Estamos comprometidos con la transparencia y responderemos a todas las consultas legítimas rápidamente.',

      intellectualPropertyTitle: 'Declaración de propiedad intelectual',
      intellectualPropertyIntroTitle: 'Introducción',
      intellectualPropertyIntroDesc:
        'Esta declaración de propiedad intelectual describe nuestros derechos de propiedad, políticas y protecciones con respecto a marcas comerciales, copyrights, patentes, secretos comerciales y otros activos de propiedad intelectual relacionados con nuestro servicio generador de códigos de barras.',
      intellectualPropertyOwnershipTitle: 'Propiedad de la propiedad intelectual',
      intellectualPropertyOwnershipDesc:
        'Todos los derechos de propiedad intelectual en nuestro servicio generador de códigos de barras, incluyendo pero no limitado a lo siguiente, son propiedad de Barcode Generator o nuestros licenciantes:',
      intellectualPropertyOwnershipItems: [
        'Marcas comerciales, marcas de servicio y nombres comerciales asociados con nuestra marca.',
        'Copyrights en código de software, algoritmos y documentación técnica.',
        'Patentes o solicitudes de patentes relacionadas con nuestra tecnología (si las hay).',
        'Secretos comerciales, algoritmos propietarios e información confidencial.',
        'Diseño del sitio web, interfaz de usuario y elementos de experiencia de usuario.',
        'Métodos comerciales, procesos y procedimientos operativos.',
      ],
      intellectualPropertyTrademarksTitle: 'Marcas comerciales',
      intellectualPropertyTrademarksDesc:
        'Todas las marcas comerciales, marcas de servicio y nombres comerciales utilizados en este sitio web y en relación con nuestro servicio son propiedad de sus respectivos propietarios. Nuestras marcas comerciales incluyen, pero no se limitan a:',
      intellectualPropertyTrademarksItems: [
        '"Barcode Generator" y sus variaciones.',
        'Nuestro logotipo y elementos de identidad de marca.',
        'Nombres de servicio e identificadores de productos.',
        'Esloganes y lemas asociados con nuestro servicio.',
      ],
      intellectualPropertyTrademarkUseTitle: 'Política de uso de marcas comerciales',
      intellectualPropertyTrademarkUseDesc:
        'El uso de nuestras marcas comerciales requiere nuestro consentimiento escrito previo. El uso no autorizado de nuestras marcas comerciales está estrictamente prohibido y puede resultar en acción legal. Si deseas usar nuestras marcas comerciales, contáctanos en barcode@chdaoai.com para solicitar permiso.',
      intellectualPropertyCopyrightTitle: 'Protección de copyright',
      intellectualPropertyCopyrightDesc:
        'Todo el contenido original, código de software, documentación y obras creativas en nuestro sitio web y servicio están protegidos por la ley de copyright. Esto incluye:',
      intellectualPropertyCopyrightItems: [
        'Código fuente e implementaciones de software.',
        'Diseño y diseño del sitio web.',
        'Documentación y guías de usuario.',
        'Gráficos, imágenes y elementos visuales.',
        'Contenido escrito y copia.',
      ],
      intellectualPropertyThirdPartyTitle: 'Propiedad intelectual de terceros',
      intellectualPropertyThirdPartyDesc:
        'Nuestro servicio utiliza bibliotecas, software y tecnologías de terceros que están sujetas a sus respectivas licencias y derechos de propiedad intelectual. Respetamos toda la propiedad intelectual de terceros y cumplimos con las licencias aplicables, incluyendo:',
      intellectualPropertyThirdPartyItems: [
        'Licencias de software de código abierto (MIT, Apache, etc.).',
        'Licencias y acuerdos de software comercial.',
        'Términos y condiciones de API de terceros.',
        'Licencias de fuentes y recursos de diseño.',
      ],
      intellectualPropertyUserContentTitle: 'Contenido generado por el usuario',
      intellectualPropertyUserContentDesc:
        'Los usuarios conservan todos los derechos de propiedad intelectual sobre los códigos de barras que generan usando nuestro servicio. No reclamamos propiedad, copyright o derechos de propiedad intelectual sobre el contenido generado por usuarios. Los usuarios son libres de:',
      intellectualPropertyUserContentItems: [
        'Usar los códigos de barras generados para cualquier propósito legal.',
        'Registrar marcas comerciales o copyrights para sus códigos de barras.',
        'Licenciar o vender sus códigos de barras generados a terceros.',
        'Modificar o crear obras derivadas de sus códigos de barras.',
      ],
      intellectualPropertyEnforcementTitle: 'Aplicación de derechos',
      intellectualPropertyEnforcementDesc:
        'Nos tomamos en serio los derechos de propiedad intelectual y tomaremos las medidas legales apropiadas contra cualquier infracción de nuestra propiedad intelectual. Esto puede incluir:',
      intellectualPropertyEnforcementItems: [
        'Emitir avisos de cese y desistimiento.',
        'Presentar demandas por daños y perjuicios y medidas cautelares.',
        'Reportar violaciones a las autoridades relevantes.',
        'Pursuir cargos criminales por violaciones graves.',
      ],
      intellectualPropertyReportingTitle: 'Reportar infracción',
      intellectualPropertyReportingDesc:
        'Si crees que tus derechos de propiedad intelectual han sido infringidos por contenido en nuestro servicio, contáctanos inmediatamente en barcode@chdaoai.com con:',
      intellectualPropertyReportingItems: [
        'Una descripción detallada del contenido supuestamente infractor.',
        'Prueba de tu propiedad de la propiedad intelectual.',
        'Tu información de contacto y autorización para actuar.',
        'Una declaración de creencia de buena fe de infracción.',
      ],
      intellectualPropertyContactTitle: 'Contáctanos',
      intellectualPropertyContactDesc:
        'Para consultas de propiedad intelectual, solicitudes de licencia o para reportar infracción, contáctanos en barcode@chdaoai.com. Estamos comprometidos a proteger los derechos de propiedad intelectual y abordaremos todas las preocupaciones legítimas rápida y profesionalmente.',
    },
    barcode: {
      generator: 'Generador de códigos',
      bulkGenerator: 'Generador masivo',
      barcodeType: 'Tipo de código',
      size: 'Tamaño',
      textColor: 'Color del texto',
      background: 'Color de fondo',
      format: 'Formato',
      barcodeData: 'Datos del código',
      onePerLine: '(uno por línea, máx. 50)',
      itemLabel: 'código',
      itemsLabel: 'códigos',
      placeholder: 'Introduce valores de código, uno por línea',
      placeholderExample: 'Ejemplo:\n1234567890128\nHOLA123\nhttps://example.com',
      generate: 'Generar códigos',
      download: 'Descargar',
      downloadZIP: 'Descargar ZIP',
      downloadPDF: 'Descargar PDF',
      downloadReady: 'El archivo ZIP está listo. Puedes descargarlo cuando quieras.',
      downloadGeneratedZip: 'Descargar ZIP generado',
      downloadCsvTemplate: 'Descargar plantilla CSV',
      downloadExcelTemplate: 'Descargar plantilla Excel',
      templateDescription: 'Usa estas plantillas para preparar tu lista rápidamente.',
      preview: 'Vista previa',
      clearAll: 'Limpiar todo',
      uploadFile: 'Sube archivo CSV o Excel',
      clickUpload: 'Haz clic para subir o arrastra el archivo',
      fileTypes: 'CSV, XLSX, XLS (máx. 10 MB)',
      tip: 'Consejo:',
      tipDesc: 'Cada celda se convierte en un código. El ZIP usa el valor como nombre.',
      generating: 'Generando...',
      processing: 'Procesando códigos...',
      generated: 'generados',
      alerts: {
        noDataInput: 'Introduce al menos un valor.',
        errorPrefix: 'Error al generar:',
        generateFirst: 'Primero genera los códigos.',
        fileRequired: 'Sube un archivo CSV o Excel.',
        noDataFound: 'No se encontraron datos válidos.',
        success: 'Se generaron correctamente',
        processingError: 'Error al procesar el archivo:',
        downloadStarted: 'Descarga iniciada.',
      },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      contact: 'Contact',
    },
    home: {
      title: 'Générateur de codes-barres en ligne',
      subtitle: 'Créez gratuitement des codes-barres. Compatible avec plusieurs types et la génération en masse.',
      singleBarcode: 'Code-barres unique',
      bulkBarcode: 'Codes-barres en lot',
      recognizer: {
        uploadPrompt: 'Cliquez pour téléverser une image ou glissez-déposez',
        uploadHint: 'Supporte PNG, JPEG',
        previewPlaceholder: 'L’aperçu s’affichera ici après le téléversement',
        resultsTitle: 'Résultats de reconnaissance',
        noResults: 'Aucun résultat',
        browserNotSupport: 'Le navigateur ne prend pas en charge BarcodeDetector ; utilisation d’une bibliothèque de secours',
        browserSuggest: 'Pour de meilleurs résultats, utilisez la dernière version de Chrome ou Edge',
        fallbackError: 'Échec de la détection avec la bibliothèque de secours',
        detectError: 'Erreur de détection : ',
        typeLabel: 'Type',
        valueLabel: 'Valeur',
      },
    },
    footer: {
      description: 'Générateur gratuit de codes-barres avec prise en charge de nombreux formats et de la génération en masse.',
      legal: 'Mentions',
      contact: 'Contact',
      email: 'Email',
      address: 'Adresse',
      copyright: 'Tous droits réservés.',
      title: 'Générateur de codes-barres',
      legalNext: 'Politiques',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d’utilisation',
      refund: 'Politique de remboursement',
      disclaimer: 'Avertissement',
      copyrightNotice: 'Droits d’auteur',
      legalNotice: 'Mentions légales',
      intellectualProperty: 'Propriété intellectuelle',
      contactTitle: 'Contact',
      addressDetail: '130 Longhua Avenue, district de Longhua, Shenzhen, Chine',
    },
    features: {
      heading: 'Fonctionnalités clés',
      cards: [
        { icon: '📊', title: 'Multiples types', description: 'Prend en charge Code128, Code39, EAN-13, UPC-A, QR Code et plus encore.' },
        { icon: '📏', title: 'Taille ajustable', description: 'Réglez librement entre 100 px et 1000 px selon vos besoins.' },
        { icon: '🎨', title: 'Couleurs personnalisées', description: 'Choisissez les couleurs du texte et de l’arrière-plan pour respecter votre charte.' },
        { icon: '💾', title: 'Formats variés', description: 'Exportez en PNG, JPEG ou PDF haute qualité.' },
        { icon: '📦', title: 'Génération en lot', description: 'Générez jusqu’à 50 codes ou importez un fichier CSV/Excel.' },
        { icon: '🆓', title: 'Totalement gratuit', description: 'Aucune limite, aucun compte requis.' },
      ],
    },
    help: {
      heading: 'Guide d’utilisation',
      singleTitle: 'Génération individuelle',
      singleSteps: [
        'Choisissez le type de code (Code128, Code39, EAN-13, UPC-A ou QR).',
        'Ajustez la taille entre 100 px et 1000 px.',
        'Sélectionnez les couleurs du texte et de l’arrière-plan.',
        'Choisissez le format de sortie (PNG, JPEG ou PDF).',
        'Saisissez vos données dans la zone de texte (une par ligne, jusqu’à 50).',
        'Cliquez sur « Générer » pour voir l’aperçu.',
        'Téléchargez un code individuel ou l’ensemble en ZIP/PDF.',
      ],
      bulkTitle: 'Génération en masse',
      bulkSteps: [
        'Configurez le type, la taille, les couleurs et le format.',
        'Chargez un fichier CSV ou Excel contenant vos valeurs.',
        'Chaque cellule est utilisée pour créer un code-barres.',
        'Cliquez sur « Générer » pour lancer le traitement.',
        'Téléchargez l’archive ZIP contenant toutes les images.',
        'Chaque image porte le contenu du code comme nom.',
      ],
      tipsTitle: 'Conseils',
      tips: [
        'Les QR Codes peuvent encoder du texte ou des URL.',
        'EAN-13 et UPC-A exigent des longueurs numériques précises.',
        'Code128 et Code39 acceptent les caractères alphanumériques.',
        'Les gros fichiers demandent plus de temps de traitement.',
        'Les noms de fichiers correspondent aux valeurs des codes.',
      ],
    },
    examples: {
      heading: 'Exemples',
      items: [
        { type: 'Code128', data: 'BONJOUR123', description: 'Code alphanumérique pour références produits.' },
        { type: 'EAN-13', data: '1234567890128', description: 'Code 13 chiffres pour la vente au détail.' },
        { type: 'QR Code', data: 'https://barcode.chdaoai.com', description: 'QR Code pour URL et liens web.' },
        { type: 'UPC-A', data: '012345678905', description: 'Code 12 chiffres pour produits nord-américains.' },
      ],
    },
    feedback: {
      heading: 'Retour d’expérience',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      submit: 'Envoyer',
      success: 'Merci pour votre retour !',
      description: 'Partagez vos idées : chaque suggestion nous aide à progresser.',
    },
    about: {
      title: 'À propos de nous',
      subtitle: 'Des outils professionnels pour les entreprises et les créateurs',
      whoWeAre: 'Qui sommes-nous ?',
      whoWeAreDesc1: 'Nous sommes une équipe dédiée à offrir un générateur de codes-barres gratuit, moderne et fiable pour le monde entier.',
      whoWeAreDesc2: 'Notre objectif : rendre la création de quelques codes ou de milliers d’unités simple, précise et rapide.',
      mission: 'Notre mission',
      missionDesc: 'Démocratiser les outils professionnels via un service fiable, gratuit et facile à utiliser.',
      innovation: 'Innovation',
      innovationDesc: 'Amélioration continue des fonctionnalités et de la technologie.',
      quality: 'Qualité',
      qualityDesc: 'Des résultats cohérents et haute fidélité.',
      accessibility: 'Accessibilité',
      accessibilityDesc: 'Des outils professionnels accessibles à tous.',
      whatWeOffer: 'Ce que nous offrons',
      multipleTypes: 'Multiples types',
      multipleTypesDesc: 'Code128, Code39, EAN-13, UPC-A, QR, etc.',
      customizable: 'Personnalisation complète',
      customizableDesc: 'Taille, couleurs, format : tout est ajustable.',
      bulkGen: 'Production en masse',
      bulkGenDesc: 'Jusqu’à 50 codes ou import CSV/Excel.',
      multipleFormats: 'Formats multiples',
      multipleFormatsDesc: 'Export en PNG, JPEG ou PDF.',
      freeUnlimited: 'Gratuit et illimité',
      freeUnlimitedDesc: 'Sans frais ni inscription.',
      fastReliable: 'Rapide et fiable',
      fastReliableDesc: 'Traitement rapide et disponibilité 99,9 %. ',
      ourTeam: 'Notre équipe',
      ourTeamDesc: 'Une équipe pluridisciplinaire passionnée par la meilleure expérience possible.',
      contactInfo: 'Contact',
      email: 'Email',
      address: 'Adresse',
      teamMembers: [
        {
          role: 'Développeur principal',
          department: 'Innovation technique',
          description: 'Expert web et codes-barres avec plus de 8 ans d’expérience.',
        },
        {
          role: 'Chef de produit',
          department: 'Excellence produit',
          description: 'Focalisé sur des expériences simples et efficaces.',
        },
        {
          role: 'Designer UI/UX',
          department: 'Studio design',
          description: 'Spécialiste des interfaces modernes et intuitives.',
        },
        {
          role: 'Qualité',
          department: 'Assurance qualité',
          description: 'Garantit fiabilité et performance.',
        },
        {
          role: 'Ingénieur backend',
          department: 'Innovation technique',
          description: 'Conçoit des architectures évolutives.',
        },
        {
          role: 'Spécialiste marketing',
          department: 'Croissance',
          description: 'Stimule l’adoption grâce à des campagnes créatives.',
        },
      ],
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Besoin d’aide ou d’une idée à partager ? Parlons-en !',
      emailUs: 'Envoyez-nous un email',
      emailDesc: 'Nous répondons généralement sous 24 heures.',
      visitUs: 'Venez nous voir',
      visitDesc: 'Nos bureaux sont situés au cœur du pôle technologique de Shenzhen.',
      businessHours: 'Horaires',
      businessHoursContent: 'Lundi - Vendredi : 9h00 - 18h00 (CST)',
      businessHoursDesc: 'En dehors de ces horaires, écrivez-nous : nous vous répondrons rapidement.',
      sendMessage: 'Envoyer un message',
      sendMessageDesc: 'Remplissez le formulaire et nous vous recontacterons.',
      yourName: 'Votre nom',
      emailAddress: 'Adresse email',
      subject: 'Objet',
      message: 'Message',
      sendButton: 'Envoyer',
      sentButton: 'Message envoyé ! ✓',
      thankYou: 'Merci pour votre message ! Réponse sous 24 heures.',
      whyContact: 'Pourquoi nous contacter ?',
      techSupport: 'Assistance technique',
      techSupportDesc: 'Nous vous aidons à utiliser le générateur.',
      businessInquiries: 'Demandes professionnelles',
      businessInquiriesDesc: 'Parlons partenariats ou solutions dédiées.',
      feedback: 'Suggestions',
      feedbackDesc: 'Vos idées améliorent notre service.',
      reportIssues: 'Signaler un problème',
      reportIssuesDesc: 'Indiquez-nous tout bug ou anomalie.',
      faq: 'FAQ',
      faq1Q: 'Quel est votre délai de réponse ?',
      faq1A: 'Nous visons une réponse sous 24 h ouvrées.',
      faq2Q: 'Proposez-vous un support technique ?',
      faq2A: 'Oui, l’assistance est gratuite pour tous les utilisateurs.',
      faq3Q: 'Puis-je demander une fonctionnalité ?',
      faq3A: 'Absolument ! Envoyez vos idées via le formulaire.',
      responseTime: 'Délai de réponse',
      responseTimeDesc: 'Réponse en 24 h pendant les jours ouvrés.',
      urgentNote: 'Pour les urgences, ajoutez « URGENT » dans l’objet.',
    },
    legal: {
      privacyTitle: 'Politique de confidentialité',
      privacyIntroTitle: 'Introduction',
      privacyIntroDesc:
        'Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre service de génération de codes-barres.',
      privacyCollectTitle: 'Informations que nous collectons',
      privacyCollectDesc: 'Nous pouvons collecter les types d\'informations suivants :',
      privacyCollectItems: [
        'Informations que vous fournissez lors de la prise de contact (nom, e-mail, message).',
        'Données d\'utilisation et d\'analyse pour améliorer notre service.',
        'Données de codes-barres que vous générez (traitées localement dans votre navigateur).',
        'Informations sur l\'appareil telles que le type de navigateur, le système d\'exploitation et la résolution d\'écran.',
        'Adresse IP et données de localisation générale à des fins de sécurité et d\'analyse.',
      ],
      privacyUseTitle: 'Comment nous utilisons vos informations',
      privacyUseDesc: 'Nous utilisons les informations que nous collectons pour :',
      privacyUseItems: [
        'Fournir et améliorer notre service de génération de codes-barres.',
        'Répondre à vos demandes et commentaires.',
        'Analyser les modèles d\'utilisation pour améliorer l\'expérience utilisateur.',
        'Assurer la sécurité et l\'intégrité de notre service.',
        'Respecter les obligations légales et protéger nos droits.',
      ],
      privacySecurityTitle: 'Sécurité des données',
      privacySecurityDesc:
        'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles. Toute génération de codes-barres est traitée localement dans votre navigateur, et nous ne stockons pas vos données de codes-barres sur nos serveurs. Nous utilisons un chiffrement et des protocoles de sécurité standard de l\'industrie pour protéger toutes les données que nous collectons.',
      privacyCookiesTitle: 'Cookies et technologies de suivi',
      privacyCookiesDesc:
        'Nous pouvons utiliser des cookies et des technologies de suivi similaires pour améliorer votre expérience, analyser les modèles d\'utilisation et fournir du contenu personnalisé. Vous pouvez contrôler les préférences de cookies via les paramètres de votre navigateur. Certaines fonctionnalités peuvent ne pas fonctionner correctement si les cookies sont désactivés.',
      privacyThirdPartyTitle: 'Services tiers',
      privacyThirdPartyDesc:
        'Notre service peut s\'intégrer avec des services d\'analyse et de publicité tiers (tels que Google Analytics et Google AdSense) qui peuvent collecter des informations sur votre utilisation de notre site Web. Ces services ont leurs propres politiques de confidentialité, et nous vous encourageons à les consulter.',
      privacyUserRightsTitle: 'Vos droits',
      privacyUserRightsDesc:
        'Vous avez le droit d\'accéder, de mettre à jour ou de supprimer vos informations personnelles. Vous pouvez également vous désinscrire de certaines pratiques de collecte de données. Pour exercer ces droits, contactez-nous à barcode@chdaoai.com.',
      privacyDataRetentionTitle: 'Conservation des données',
      privacyDataRetentionDesc:
        'Nous conservons les informations personnelles uniquement aussi longtemps que nécessaire pour remplir les objectifs décrits dans cette politique, sauf si une période de conservation plus longue est requise par la loi. Les données de codes-barres générées via notre service sont traitées localement et ne sont pas stockées sur nos serveurs.',
      privacyChildrenTitle: 'Confidentialité des enfants',
      privacyChildrenDesc:
        'Notre service n\'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d\'informations personnelles auprès d\'enfants. Si vous pensez que nous avons collecté par inadvertance de telles informations, contactez-nous immédiatement.',
      privacyChangesTitle: 'Modifications de cette politique',
      privacyChangesDesc:
        'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement important en publiant la nouvelle politique sur cette page et en mettant à jour la date de "Dernière mise à jour". Votre utilisation continue de notre service après de tels changements constitue l\'acceptation de la politique mise à jour.',
      privacyContactTitle: 'Contactez-nous',
      privacyContactDesc:
        'Si vous avez des questions sur cette politique de confidentialité, contactez-nous à barcode@chdaoai.com.',

      termsTitle: 'Conditions d\'utilisation',
      termsUpdated: 'Dernière mise à jour',
      termsAcceptanceTitle: 'Acceptation des conditions',
      termsAcceptanceDesc:
        'En accédant et en utilisant notre service de génération de codes-barres, vous acceptez et convenez d\'être lié par ces Conditions d\'utilisation. Si vous n\'êtes pas d\'accord avec ces conditions, veuillez ne pas utiliser notre service.',
      termsUseTitle: 'Utilisation du service',
      termsUseDesc:
        'Vous pouvez utiliser notre service pour générer des codes-barres à des fins personnelles ou commerciales. Vous acceptez de ne pas utiliser le service à des fins illégales ou non autorisées, y compris mais sans s\'y limiter :',
      termsUseItems: [
        'Générer des codes-barres pour des produits contrefaits ou des activités frauduleuses.',
        'Violer toute loi ou réglementation applicable.',
        'Porter atteinte aux droits de propriété intellectuelle.',
        'Transmettre du code malveillant ou du contenu nuisible.',
        'Tenter de perturber ou de compromettre la sécurité du service.',
      ],
      termsUserAccountTitle: 'Comptes utilisateur',
      termsUserAccountDesc:
        'Actuellement, notre service ne nécessite pas d\'inscription d\'utilisateur. Cependant, si nous introduisons des fonctionnalités de compte à l\'avenir, vous êtes responsable de maintenir la confidentialité des identifiants de votre compte et de toutes les activités qui se produisent sous votre compte.',
      termsIntellectualPropertyTitle: 'Propriété intellectuelle',
      termsIntellectualPropertyDesc:
        'Tout le contenu, les fonctionnalités et la fonctionnalité de notre service, y compris mais sans s\'y limiter le texte, les graphiques, les logos et les logiciels, nous appartiennent ou appartiennent à nos concédants de licence et sont protégés par le droit d\'auteur, les marques de commerce et d\'autres lois sur la propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer ou créer des œuvres dérivées sans notre autorisation écrite expresse.',
      termsUserContentTitle: 'Contenu généré par l\'utilisateur',
      termsUserContentDesc:
        'Vous conservez la propriété de tous les codes-barres que vous générez en utilisant notre service. Cependant, en utilisant notre service, vous nous accordez une licence non exclusive et sans redevance d\'utiliser, d\'afficher et d\'analyser des données d\'utilisation agrégées à des fins d\'amélioration du service.',
      termsAvailabilityTitle: 'Disponibilité du service',
      termsAvailabilityDesc:
        'Nous nous efforçons de fournir un service fiable mais ne garantissons pas un fonctionnement ininterrompu ou sans erreur. Nous nous réservons le droit de modifier, suspendre ou interrompre le service à tout moment sans préavis. Nous ne sommes pas responsables de toute perte ou dommage résultant d\'interruptions de service.',
      termsModificationsTitle: 'Modifications du service',
      termsModificationsDesc:
        'Nous nous réservons le droit de modifier, mettre à jour ou interrompre tout aspect de notre service à tout moment. Nous pouvons également imposer des limites sur certaines fonctionnalités ou restreindre l\'accès à des parties du service sans préavis ni responsabilité.',
      termsLiabilityTitle: 'Limitation de responsabilité',
      termsLiabilityDesc:
        'Nous ne sommes pas responsables de tout dommage direct, indirect, accessoire, spécial ou consécutif résultant de l\'utilisation ou de l\'impossibilité d\'utiliser notre service. Le service est fourni "tel quel" sans garanties d\'aucune sorte, expresse ou implicite, y compris mais sans s\'y limiter les garanties de qualité marchande, d\'adéquation à un usage particulier ou de non-contrefaçon.',
      termsIndemnificationTitle: 'Indemnisation',
      termsIndemnificationDesc:
        'Vous acceptez d\'indemniser et de nous tenir indemnes de toute réclamation, dommage, perte, responsabilité et dépense (y compris les frais juridiques) résultant de votre utilisation du service, de la violation de ces conditions ou de l\'atteinte aux droits d\'une autre partie.',
      termsTerminationTitle: 'Résiliation',
      termsTerminationDesc:
        'Nous nous réservons le droit de résilier ou de suspendre votre accès à notre service immédiatement, sans préavis, pour quelque raison que ce soit, y compris la violation de ces conditions. Lors de la résiliation, votre droit d\'utiliser le service cessera immédiatement.',
      termsGoverningLawTitle: 'Loi applicable',
      termsGoverningLawDesc:
        'Ces Conditions d\'utilisation seront régies et interprétées conformément aux lois de la République populaire de Chine, sans égard à ses dispositions de conflit de lois. Tout litige découlant de ces conditions sera soumis à la juridiction exclusive des tribunaux de Shenzhen, en Chine.',
      termsDisputeResolutionTitle: 'Résolution des litiges',
      termsDisputeResolutionDesc:
        'En cas de litige découlant de ou lié à ces conditions, nous vous encourageons à nous contacter d\'abord pour chercher une résolution amiable. Si un litige ne peut être résolu par communication directe, il sera résolu par arbitrage contraignant conformément aux règles d\'arbitrage applicables.',
      termsSeverabilityTitle: 'Divisibilité',
      termsSeverabilityDesc:
        'Si une disposition de ces conditions est jugée inapplicable ou invalide, cette disposition sera limitée ou éliminée dans la mesure minimale nécessaire, et les dispositions restantes resteront en plein vigueur et effet.',
      termsContactTitle: 'Contactez-nous',
      termsContactDesc:
        'Pour toute question sur ces conditions, contactez-nous à barcode@chdaoai.com.',

      refundTitle: 'Politique de remboursement',
      refundIntroTitle: 'Introduction',
      refundIntroDesc:
        'Cette politique de remboursement décrit les termes et conditions concernant les remboursements pour tout service payant que nous pourrions offrir à l\'avenir. Actuellement, notre service de génération de codes-barres est fourni gratuitement.',
      refundFreeServiceTitle: 'Service gratuit',
      refundFreeServiceDesc:
        'Notre service de génération de codes-barres est actuellement fourni gratuitement à tous les utilisateurs. En tant que tel, il n\'y a pas de paiements à rembourser. Toutes les fonctionnalités, y compris la génération de code-barres unique, la génération en masse et les formats d\'exportation multiples, sont disponibles sans frais.',
      refundFuturePaidTitle: 'Services payants futurs',
      refundFuturePaidDesc:
        'Si nous introduisons des services payants, des abonnements ou des fonctionnalités premium à l\'avenir, la politique de remboursement suivante s\'appliquera :',
      refundFuturePaidItems: [
        'Les demandes de remboursement doivent être soumises dans les 30 jours suivant l\'achat.',
        'Les remboursements seront traités sur le mode de paiement d\'origine dans un délai de 7 à 14 jours ouvrables.',
        'Les remboursements peuvent être calculés au prorata pour les services d\'abonnement en fonction du temps non utilisé.',
        'Nous nous réservons le droit de refuser les remboursements pour les services qui ont été considérablement utilisés ou abusés.',
      ],
      refundEligibilityTitle: 'Admissibilité au remboursement',
      refundEligibilityDesc:
        'Les remboursements peuvent être accordés dans les circonstances suivantes :',
      refundEligibilityItems: [
        'Dysfonctionnement du service ou échec de livraison des fonctionnalités promises.',
        'Charges en double ou accidentelles.',
        'Annulation d\'abonnement dans la période de remboursement.',
        'Problèmes techniques empêchant l\'accès au service qui ne peuvent être résolus.',
      ],
      refundNonEligibleTitle: 'Articles non remboursables',
      refundNonEligibleDesc:
        'Les éléments suivants ne sont généralement pas admissibles aux remboursements :',
      refundNonEligibleItems: [
        'Services utilisés au-delà de la période de remboursement.',
        'Demandes de remboursement dues à une erreur de l\'utilisateur ou à une incompréhension des fonctionnalités du service.',
        'Services résiliés en raison d\'une violation des Conditions d\'utilisation.',
        'Services personnalisés ou sur mesure qui ont été livrés.',
      ],
      refundProcessTitle: 'Processus de remboursement',
      refundProcessDesc:
        'Pour demander un remboursement, contactez-nous à barcode@chdaoai.com avec les informations suivantes :',
      refundProcessItems: [
        'Votre e-mail de compte ou ID de transaction.',
        'Date d\'achat et mode de paiement.',
        'Raison de la demande de remboursement.',
        'Toute documentation ou capture d\'écran pertinente.',
      ],
      refundProcessingTimeTitle: 'Délai de traitement',
      refundProcessingTimeDesc:
        'Les demandes de remboursement seront examinées dans un délai de 5 à 7 jours ouvrables. Une fois approuvées, les remboursements seront traités sur votre mode de paiement d\'origine dans un délai de 7 à 14 jours ouvrables. Les délais de traitement peuvent varier selon votre fournisseur de paiement.',
      refundContactTitle: 'Contactez-nous',
      refundContactDesc:
        'Pour toute question sur les remboursements ou pour soumettre une demande de remboursement, contactez-nous à barcode@chdaoai.com. Nous nous engageons à résoudre les problèmes de remboursement de manière équitable et rapide.',

      disclaimerTitle: 'Avertissement',
      disclaimerIntroTitle: 'Introduction',
      disclaimerIntroDesc:
        'Cet avertissement établit les directives générales, les dénis de responsabilité et les conditions d\'utilisation de notre service de génération de codes-barres. En utilisant notre service, vous reconnaissez avoir lu, compris et accepté d\'être lié par cet avertissement.',
      disclaimerNoWarrantyTitle: 'Aucune garantie',
      disclaimerNoWarrantyDesc:
        'Notre service de génération de codes-barres est fourni "tel quel" et "selon disponibilité" sans aucune garantie, expresse ou implicite. Nous ne garantissons pas que le service sera ininterrompu, sans erreur, sécurisé ou répondra à vos exigences spécifiques. Nous déclinons toutes garanties, y compris mais sans s\'y limiter :',
      disclaimerNoWarrantyItems: [
        'Garanties de qualité marchande ou d\'adéquation à un usage particulier.',
        'Garanties concernant l\'exactitude, la fiabilité ou l\'exhaustivité des codes-barres générés.',
        'Garanties que le service sera disponible en tout temps ou exempt de défauts.',
        'Garanties concernant les services tiers ou les intégrations.',
      ],
      disclaimerAccuracyTitle: 'Exactitude des codes-barres',
      disclaimerAccuracyDesc:
        'Bien que nous nous efforcions de générer des codes-barres précis et scannables en utilisant des algorithmes standard de l\'industrie, nous ne pouvons garantir que tous les codes-barres générés seront scannables par tous les appareils ou répondront à des normes spécifiques de l\'industrie. Les utilisateurs sont uniquement responsables de :',
      disclaimerAccuracyItems: [
        'Vérifier l\'exactitude et la fonctionnalité des codes-barres générés avant utilisation.',
        'S\'assurer que les codes-barres sont conformes aux normes et réglementations applicables de l\'industrie.',
        'Tester les codes-barres avec leurs appareils de numérisation prévus.',
        'Valider les données des codes-barres pour l\'exactitude et l\'exhaustivité.',
      ],
      disclaimerLiabilityTitle: 'Limitation de responsabilité',
      disclaimerLiabilityDesc:
        'Dans la mesure maximale permise par la loi, nous ne serons pas responsables de tout dommage direct, indirect, accessoire, spécial, consécutif ou punitif résultant de :',
      disclaimerLiabilityItems: [
        'L\'utilisation ou l\'impossibilité d\'utiliser notre service.',
        'Erreurs, omissions ou inexactitudes dans les codes-barres générés.',
        'Perte de données, profits ou opportunités commerciales.',
        'Accès non autorisé ou altération de vos données.',
        'Services tiers ou contenu accessible via notre service.',
      ],
      disclaimerThirdPartyTitle: 'Services tiers',
      disclaimerThirdPartyDesc:
        'Notre service peut s\'intégrer avec ou se lier à des services, sites Web ou applications tiers. Nous ne sommes pas responsables du contenu, des pratiques de confidentialité ou des conditions de service de ces tiers. Vos interactions avec les services tiers sont uniquement entre vous et le tiers.',
      disclaimerUseAtOwnRiskTitle: 'Utilisation à vos risques',
      disclaimerUseAtOwnRiskDesc:
        'Votre utilisation de notre service est à vos risques. Nous ne sommes pas responsables des conséquences résultant de l\'utilisation de codes-barres générés, y compris mais sans s\'y limiter :',
      disclaimerUseAtOwnRiskItems: [
        'Erreurs d\'identification de produits ou d\'étiquetage incorrect.',
        'Problèmes de gestion des stocks.',
        'Violations de conformité ou problèmes réglementaires.',
        'Pertes financières ou perturbations commerciales.',
      ],
      disclaimerModificationsTitle: 'Modifications du service',
      disclaimerModificationsDesc:
        'Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect de notre service à tout moment sans préavis. Nous ne sommes pas responsables de tout inconvénient ou perte résultant de telles modifications ou interruptions.',
      disclaimerJurisdictionTitle: 'Juridiction',
      disclaimerJurisdictionDesc:
        'Cet avertissement est régi par les lois de la République populaire de Chine. Tout litige découlant de cet avertissement sera soumis à la juridiction exclusive des tribunaux de Shenzhen, en Chine.',
      disclaimerContactTitle: 'Contactez-nous',
      disclaimerContactDesc:
        'Pour toute question sur cet avertissement, contactez-nous à barcode@chdaoai.com. Nous nous engageons à fournir des informations transparentes sur notre service et à répondre à toute préoccupation que vous pourriez avoir.',

      copyrightTitle: 'Avis de droits d\'auteur',
      copyrightIntroTitle: 'Introduction',
      copyrightIntroDesc:
        'Cet avis de droits d\'auteur décrit la propriété et les droits d\'utilisation du contenu, de la conception et de la fonctionnalité de notre service de génération de codes-barres. En utilisant notre service, vous reconnaissez et acceptez de respecter ces protections de droits d\'auteur.',
      copyrightOwnershipTitle: 'Propriété des droits d\'auteur',
      copyrightOwnershipDesc:
        'Tout le contenu, la conception et la fonctionnalité de ce site Web et de ce service, y compris mais sans s\'y limiter, sont la propriété exclusive de Barcode Generator et sont protégés par les lois sur les droits d\'auteur:',
      copyrightOwnershipItems: [
        'Conception du site Web, mise en page, graphiques, logos et éléments visuels.',
        'Code logiciel, algorithmes et implémentations techniques.',
        'Documentation, texte d\'aide et guides utilisateur.',
        'Noms de marque, marques de service et apparence commerciale.',
        'Compilations, bases de données et contenu agrégé.',
      ],
      copyrightUserContentTitle: 'Contenu généré par l\'utilisateur',
      copyrightUserContentDesc:
        'Les codes-barres générés à l\'aide de notre service sont créés par les utilisateurs et appartiennent exclusivement aux utilisateurs qui les ont générés. Nous ne revendiquons pas la propriété, les droits d\'auteur ou tout droit de propriété intellectuelle sur les codes-barres générés par les utilisateurs. Les utilisateurs sont libres d\'utiliser, distribuer et commercialiser leurs codes-barres générés comme bon leur semble.',
      copyrightPermittedUseTitle: 'Utilisation autorisée',
      copyrightPermittedUseDesc:
        'Vous recevez une licence limitée, non exclusive et non transférable pour utiliser notre service afin de générer des codes-barres à des fins personnelles ou commerciales, sous réserve des conditions suivantes:',
      copyrightPermittedUseItems: [
        'Vous pouvez utiliser les codes-barres générés à toute fin légale.',
        'Vous pouvez télécharger et enregistrer les codes-barres générés pour votre usage.',
        'Vous pouvez partager les codes-barres générés avec d\'autres.',
        'Vous pouvez utiliser les codes-barres générés dans des produits ou services commerciaux.',
      ],
      copyrightProhibitedUseTitle: 'Utilisation interdite',
      copyrightProhibitedUseDesc:
        'Les activités suivantes sont strictement interdites sans notre autorisation écrite expresse:',
      copyrightProhibitedUseItems: [
        'Reproduire, copier ou dupliquer notre site Web ou service.',
        'Créer des œuvres dérivées basées sur notre service ou la conception du site Web.',
        'Rétro-ingénierie, décompiler ou désassembler notre logiciel.',
        'Supprimer, modifier ou masquer les avis de droits d\'auteur ou les marques propriétaires.',
        'Utiliser notre service pour créer des services ou produits concurrents.',
        'Grattage, exploration ou extraction automatisée de données de notre service.',
      ],
      copyrightThirdPartyTitle: 'Contenu tiers',
      copyrightThirdPartyDesc:
        'Notre service peut incorporer ou référencer du contenu, des bibliothèques ou des logiciels tiers. Un tel contenu reste la propriété de ses propriétaires respectifs et est soumis à leurs propres conditions de droits d\'auteur et de licence. Nous respectons tous les droits de propriété intellectuelle de tiers.',
      copyrightInfringementTitle: 'Violation des droits d\'auteur',
      copyrightInfringementDesc:
        'Si vous pensez que tout contenu sur notre site Web ou service viole vos droits d\'auteur, contactez-nous immédiatement à barcode@chdaoai.com avec les informations suivantes:',
      copyrightInfringementItems: [
        'Une description de l\'œuvre protégée par droits d\'auteur que vous prétendez avoir été violée.',
        'L\'emplacement du matériel prétendument violant sur notre service.',
        'Vos informations de contact, y compris le nom, l\'adresse et l\'e-mail.',
        'Une déclaration selon laquelle vous avez une croyance de bonne foi que l\'utilisation n\'est pas autorisée.',
        'Une déclaration selon laquelle les informations sont exactes et que vous êtes autorisé à agir au nom du propriétaire des droits d\'auteur.',
      ],
      copyrightDMCATitle: 'Conformité DMCA',
      copyrightDMCADesc:
        'Nous respectons les lois sur les droits d\'auteur applicables et répondrons rapidement aux avis valides de retrait DMCA. Lors de la réception d\'un avis valide, nous supprimerons ou désactiverons l\'accès au contenu prétendument violant et notifierons l\'utilisateur qui l\'a publié.',
      copyrightContactTitle: 'Contactez-nous',
      copyrightContactDesc:
        'Pour les questions sur les droits d\'auteur, les demandes de licence ou pour signaler une violation des droits d\'auteur, contactez-nous à barcode@chdaoai.com. Nous nous engageons à protéger les droits de propriété intellectuelle et traiterons toutes les préoccupations légitimes rapidement.',

      legalNoticeTitle: 'Avis légal',
      legalNoticeIntroTitle: 'Introduction',
      legalNoticeIntroDesc:
        'Cet avis légal fournit des informations importantes sur notre entreprise, notre service et nos obligations légales. Il sert de déclaration formelle de notre identité commerciale, de nos informations de contact et de nos responsabilités légales en vertu des lois applicables.',
      legalNoticeCompanyTitle: 'Informations sur l\'entreprise',
      legalNoticeCompanyDesc:
        'Les informations suivantes sont fournies conformément aux exigences légales applicables:',
      legalNoticeCompanyName: 'Barcode Generator',
      legalNoticeCompanyAddress: '130 Longhua Avenue, District Longhua, Shenzhen, Chine',
      legalNoticeContactInfoTitle: 'Informations de contact',
      legalNoticeContactInfoDesc:
        'Pour les demandes de renseignements, le support ou les questions juridiques, vous pouvez nous contacter via les canaux suivants:',
      legalNoticeContactEmail: 'E-mail: barcode@chdaoai.com',
      legalNoticeContactAddress: 'Adresse: 130 Longhua Avenue, District Longhua, Shenzhen, Chine',
      legalNoticeResponsibleTitle: 'Responsable du contenu',
      legalNoticeResponsibleDesc:
        'Le contenu de notre site Web a été créé avec le plus grand soin et diligence. Cependant, nous ne pouvons garantir l\'exactitude absolue, l\'exhaustivité ou la rapidité de toutes les informations. Nous nous réservons le droit de modifier, mettre à jour ou supprimer le contenu à tout moment sans préavis.',
      legalNoticeLiabilityLinksTitle: 'Responsabilité pour les liens',
      legalNoticeLiabilityLinksDesc:
        'Notre site Web peut contenir des liens vers des sites Web externes exploités par des tiers. Nous n\'avons aucun contrôle sur le contenu, les pratiques de confidentialité ou les conditions de service de ces sites externes. Nous n\'assumons aucune responsabilité pour:',
      legalNoticeLiabilityLinksItems: [
        'Le contenu, l\'exactitude ou la légalité des sites Web externes.',
        'Tout dommage ou perte résultant de la visite de liens externes.',
        'Pratiques de confidentialité ou collecte de données par des sites tiers.',
        'Produits, services ou informations offerts sur des sites externes.',
      ],
      legalNoticeCopyrightTitle: 'Droits d\'auteur',
      legalNoticeCopyrightDesc:
        'Le contenu et les œuvres sur ce site Web sont soumis à la loi sur les droits d\'auteur. La reproduction, le traitement, la distribution et toute forme de commercialisation nécessitent le consentement écrit de l\'auteur ou du créateur respectif. L\'utilisation non autorisée peut entraîner une action en justice.',
      legalNoticeTrademarksTitle: 'Marques de commerce',
      legalNoticeTrademarksDesc:
        'Toutes les marques de commerce, marques de service et noms commerciaux utilisés sur ce site Web sont la propriété de leurs propriétaires respectifs. L\'utilisation de nos marques de commerce, y compris "Barcode Generator" et les marques associées, nécessite notre consentement écrit préalable. L\'utilisation non autorisée de nos marques de commerce est interdite.',
      legalNoticeGoverningLawTitle: 'Loi applicable',
      legalNoticeGoverningLawDesc:
        'Cet avis légal et toutes les questions relatives à notre service sont régis par les lois de la République populaire de Chine. Tout litige juridique sera soumis à la juridiction exclusive des tribunaux de Shenzhen, en Chine.',
      legalNoticeUpdatesTitle: 'Mises à jour de l\'avis légal',
      legalNoticeUpdatesDesc:
        'Nous nous réservons le droit de mettre à jour cet avis légal à tout moment pour refléter les changements dans notre service, les exigences légales ou les pratiques commerciales. Les utilisateurs sont encouragés à consulter cet avis périodiquement. L\'utilisation continue de notre service après les modifications constitue l\'acceptation de l\'avis mis à jour.',
      legalNoticeContactTitle: 'Contactez-nous',
      legalNoticeContactDesc:
        'Pour les questions sur cet avis légal ou toute question juridique, contactez-nous à barcode@chdaoai.com. Nous nous engageons à la transparence et répondrons à toutes les demandes légitimes rapidement.',

      intellectualPropertyTitle: 'Déclaration de propriété intellectuelle',
      intellectualPropertyIntroTitle: 'Introduction',
      intellectualPropertyIntroDesc:
        'Cette déclaration de propriété intellectuelle décrit nos droits de propriété, politiques et protections concernant les marques de commerce, les droits d\'auteur, les brevets, les secrets commerciaux et autres actifs de propriété intellectuelle liés à notre service de génération de codes-barres.',
      intellectualPropertyOwnershipTitle: 'Propriété de la propriété intellectuelle',
      intellectualPropertyOwnershipDesc:
        'Tous les droits de propriété intellectuelle dans notre service de génération de codes-barres, y compris mais sans s\'y limiter, sont la propriété de Barcode Generator ou de nos concédants de licence:',
      intellectualPropertyOwnershipItems: [
        'Marques de commerce, marques de service et noms commerciaux associés à notre marque.',
        'Droits d\'auteur sur le code logiciel, les algorithmes et la documentation technique.',
        'Brevets ou demandes de brevet liés à notre technologie (le cas échéant).',
        'Secrets commerciaux, algorithmes propriétaires et informations confidentielles.',
        'Conception du site Web, interface utilisateur et éléments d\'expérience utilisateur.',
        'Méthodes commerciales, processus et procédures opérationnelles.',
      ],
      intellectualPropertyTrademarksTitle: 'Marques de commerce',
      intellectualPropertyTrademarksDesc:
        'Toutes les marques de commerce, marques de service et noms commerciaux utilisés sur ce site Web et en relation avec notre service sont la propriété de leurs propriétaires respectifs. Nos marques de commerce comprennent, sans s\'y limiter:',
      intellectualPropertyTrademarksItems: [
        '"Barcode Generator" et ses variations.',
        'Notre logo et éléments d\'identité de marque.',
        'Noms de service et identifiants de produits.',
        'Slogans et accroches associés à notre service.',
      ],
      intellectualPropertyTrademarkUseTitle: 'Politique d\'utilisation des marques de commerce',
      intellectualPropertyTrademarkUseDesc:
        'L\'utilisation de nos marques de commerce nécessite notre consentement écrit préalable. L\'utilisation non autorisée de nos marques de commerce est strictement interdite et peut entraîner une action en justice. Si vous souhaitez utiliser nos marques de commerce, contactez-nous à barcode@chdaoai.com pour demander une autorisation.',
      intellectualPropertyCopyrightTitle: 'Protection des droits d\'auteur',
      intellectualPropertyCopyrightDesc:
        'Tout le contenu original, le code logiciel, la documentation et les œuvres créatives sur notre site Web et service sont protégés par la loi sur les droits d\'auteur. Cela comprend:',
      intellectualPropertyCopyrightItems: [
        'Code source et implémentations logicielles.',
        'Conception et mise en page du site Web.',
        'Documentation et guides utilisateur.',
        'Graphiques, images et éléments visuels.',
        'Contenu écrit et copie.',
      ],
      intellectualPropertyThirdPartyTitle: 'Propriété intellectuelle de tiers',
      intellectualPropertyThirdPartyDesc:
        'Notre service utilise des bibliothèques, logiciels et technologies tiers qui sont soumis à leurs licences et droits de propriété intellectuelle respectifs. Nous respectons toute la propriété intellectuelle de tiers et respectons les licences applicables, y compris:',
      intellectualPropertyThirdPartyItems: [
        'Licences de logiciels open source (MIT, Apache, etc.).',
        'Licences et accords de logiciels commerciaux.',
        'Conditions et termes des API tierces.',
        'Licences de polices et ressources de conception.',
      ],
      intellectualPropertyUserContentTitle: 'Contenu généré par l\'utilisateur',
      intellectualPropertyUserContentDesc:
        'Les utilisateurs conservent tous les droits de propriété intellectuelle sur les codes-barres qu\'ils génèrent à l\'aide de notre service. Nous ne revendiquons pas la propriété, les droits d\'auteur ou tout droit de propriété intellectuelle sur le contenu généré par les utilisateurs. Les utilisateurs sont libres de:',
      intellectualPropertyUserContentItems: [
        'Utiliser les codes-barres générés à toute fin légale.',
        'Enregistrer des marques de commerce ou des droits d\'auteur pour leurs codes-barres.',
        'Licencier ou vendre leurs codes-barres générés à des tiers.',
        'Modifier ou créer des œuvres dérivées de leurs codes-barres.',
      ],
      intellectualPropertyEnforcementTitle: 'Application des droits',
      intellectualPropertyEnforcementDesc:
        'Nous prenons les droits de propriété intellectuelle au sérieux et prendrons les mesures légales appropriées contre toute violation de notre propriété intellectuelle. Cela peut inclure:',
      intellectualPropertyEnforcementItems: [
        'Émettre des avis de cesser et de s\'abstenir.',
        'Déposer des poursuites pour dommages et mesures d\'injonction.',
        'Signaler les violations aux autorités compétentes.',
        'Poursuivre des accusations criminelles pour violations graves.',
      ],
      intellectualPropertyReportingTitle: 'Signaler une violation',
      intellectualPropertyReportingDesc:
        'Si vous pensez que vos droits de propriété intellectuelle ont été violés par du contenu sur notre service, contactez-nous immédiatement à barcode@chdaoai.com avec:',
      intellectualPropertyReportingItems: [
        'Une description détaillée du contenu prétendument violant.',
        'Preuve de votre propriété de la propriété intellectuelle.',
        'Vos informations de contact et autorisation d\'agir.',
        'Une déclaration de croyance de bonne foi de violation.',
      ],
      intellectualPropertyContactTitle: 'Contactez-nous',
      intellectualPropertyContactDesc:
        'Pour les questions sur la propriété intellectuelle, les demandes de licence ou pour signaler une violation, contactez-nous à barcode@chdaoai.com. Nous nous engageons à protéger les droits de propriété intellectuelle et traiterons toutes les préoccupations légitimes rapidement et professionnellement.',
    },
    barcode: {
      generator: 'Générateur de codes',
      bulkGenerator: 'Générateur en lot',
      barcodeType: 'Type de code',
      size: 'Taille',
      textColor: 'Couleur du texte',
      background: 'Couleur de fond',
      format: 'Format',
      barcodeData: 'Données du code',
      onePerLine: '(une par ligne, max 50)',
      itemLabel: 'code',
      itemsLabel: 'codes',
      placeholder: 'Saisissez vos valeurs, une par ligne',
      placeholderExample: 'Exemple :\n1234567890128\nBONJOUR123\nhttps://example.com',
      generate: 'Générer',
      download: 'Télécharger',
      downloadZIP: 'Télécharger ZIP',
      downloadPDF: 'Télécharger PDF',
      downloadReady: 'Le fichier ZIP est prêt. Téléchargez-le quand vous voulez.',
      downloadGeneratedZip: 'Télécharger le ZIP généré',
      downloadCsvTemplate: 'Modèle CSV',
      downloadExcelTemplate: 'Modèle Excel',
      templateDescription: 'Utilisez ces modèles pour préparer votre liste rapidement.',
      preview: 'Aperçu',
      clearAll: 'Tout effacer',
      uploadFile: 'Téléverser un fichier CSV ou Excel',
      clickUpload: 'Cliquez pour choisir ou déposez votre fichier',
      fileTypes: 'CSV, XLSX, XLS (max. 10 Mo)',
      tip: 'Astuce :',
      tipDesc: 'Chaque cellule devient un code. Les fichiers portent le nom du contenu.',
      generating: 'Génération...',
      processing: 'Traitement en cours...',
      generated: 'générés',
      alerts: {
        noDataInput: 'Saisissez au moins une valeur.',
        errorPrefix: 'Erreur lors de la génération :',
        generateFirst: 'Veuillez générer les codes d’abord.',
        fileRequired: 'Veuillez importer un fichier CSV ou Excel.',
        noDataFound: 'Aucune donnée valide trouvée.',
        success: 'Génération réussie',
        processingError: 'Erreur lors du traitement :',
        downloadStarted: 'Téléchargement démarré.',
      },
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      contact: 'اتصل بنا',
    },
    home: {
      title: 'مولد الباركود عبر الإنترنت',
      subtitle: 'أنشئ الباركود مجانًا مع دعم لأنواع متعددة وتوليد دفعات.',
      singleBarcode: 'باركود فردي',
      bulkBarcode: 'باركود دفعي',
      recognizer: {
        uploadPrompt: 'انقر لرفع صورة أو اسحبها هنا',
        uploadHint: 'يدعم PNG و JPEG',
        previewPlaceholder: 'سيظهر المعاينة هنا بعد الرفع',
        resultsTitle: 'نتائج التعرف',
        noResults: 'لا توجد نتائج',
        browserNotSupport: 'المتصفح لا يدعم BarcodeDetector؛ سيتم استخدام مكتبة احتياطية',
        browserSuggest: 'لأفضل نتيجة استخدم أحدث إصدار من Chrome أو Edge',
        fallbackError: 'فشل التعرف باستخدام المكتبة الاحتياطية',
        detectError: 'خطأ في التعرف: ',
        typeLabel: 'النوع',
        valueLabel: 'المحتوى',
      },
    },
    footer: {
      description: 'منصة مجانية لتوليد الباركود تدعم عدة أنواع وخيارات توليد دفعات.',
      legal: 'روابط قانونية',
      contact: 'التواصل',
      email: 'البريد',
      address: 'العنوان',
      copyright: 'جميع الحقوق محفوظة.',
      title: 'مولد الباركود',
      legalNext: 'السياسات',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      refund: 'سياسة الاسترجاع',
      disclaimer: 'إخلاء المسؤولية',
      copyrightNotice: 'حقوق النشر',
      legalNotice: 'بيان قانوني',
      intellectualProperty: 'الملكية الفكرية',
      contactTitle: 'تواصل معنا',
      addressDetail: '130 شارع لونغ هوا، حي لونغ هوا، شنجن، الصين',
    },
    features: {
      heading: 'المزايا الرئيسية',
      cards: [
        { icon: '📊', title: 'أنواع متعددة', description: 'دعم Code128 و Code39 و EAN-13 و UPC-A و QR Code وغيرها.' },
        { icon: '📏', title: 'تحكم في الحجم', description: 'يمكن التعديل من 100 بكسل إلى 1000 بكسل بسهولة.' },
        { icon: '🎨', title: 'تحكم بالألوان', description: 'اختر ألوان النص والخلفية بما يناسب هويتك.' },
        { icon: '💾', title: 'تنسيقات متعددة', description: 'تصدير كصور PNG أو JPEG أو ملفات PDF.' },
        { icon: '📦', title: 'توليد دفعات', description: 'حتى 50 باركود، أو رفع ملف CSV/Excel.' },
        { icon: '🆓', title: 'مجاني تمامًا', description: 'لا تسجيل ولا قيود استخدام.' },
      ],
    },
    help: {
      heading: 'طريقة الاستخدام',
      singleTitle: 'توليد باركود فردي',
      singleSteps: [
        'اختر نوع الباركود.',
        'اضبط الحجم بين 100 و1000 بكسل.',
        'حدد ألوان النص والخلفية.',
        'اختر التنسيق المطلوب (PNG أو JPEG أو PDF).',
        'أدخل البيانات (سطر لكل باركود، حتى 50).',
        'اضغط توليد لعرض المعاينة.',
        'حمّل الباركود منفردًا أو كملف ZIP/PDF.',
      ],
      bulkTitle: 'توليد دفعات',
      bulkSteps: [
        'حدد الإعدادات العامة.',
        'ارفع ملف CSV أو Excel يحوي القيم.',
        'كل خلية تتحول إلى باركود.',
        'اضغط توليد لبدء المعالجة.',
        'حمّل ملف ZIP المتضمن جميع الصور.',
        'تتم تسمية الصور وفق محتوى الباركود.',
      ],
      tipsTitle: 'نصائح',
      tips: [
        'يمكن للـ QR تخزين نصوص وروابط.',
        'EAN-13 و UPC-A يحتاجان أرقام بطول محدد.',
        'Code128 و Code39 يدعمان الرموز والأحرف.',
        'الملفات الكبيرة تستغرق وقتًا أطول.',
        'اسم كل صورة يطابق قيمة الباركود.',
      ],
    },
    examples: {
      heading: 'أمثلة',
      items: [
        { type: 'Code128', data: 'HELLO123', description: 'باركود أبجدي رقمي للمنتجات.' },
        { type: 'EAN-13', data: '1234567890128', description: 'باركود 13 رقمًا للتجزئة.' },
        { type: 'QR Code', data: 'https://barcode.chdaoai.com', description: 'رمز QR للروابط والمواقع.' },
        { type: 'UPC-A', data: '012345678905', description: 'باركود 12 رقمًا للمنتجات الأمريكية.' },
      ],
    },
    feedback: {
      heading: 'ملاحظات المستخدمين',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      submit: 'إرسال',
      success: 'شكرًا لرسالتك!',
      description: 'نقدّر كل اقتراح لتحسين الخدمة.',
    },
    about: {
      title: 'من نحن',
      subtitle: 'حلول احترافية لتوليد الباركود للأفراد والشركات',
      whoWeAre: 'من نكون',
      whoWeAreDesc1: 'فريق متخصص يوفر أداة مجانية وموثوقة لتوليد الباركود حول العالم.',
      whoWeAreDesc2: 'نجعل إنشاء باركود واحد أو آلاف عملية سهلة وسريعة.',
      mission: 'رسالتنا',
      missionDesc: 'تقديم أدوات احترافية مجانية وسهلة للجميع.',
      innovation: 'الابتكار',
      innovationDesc: 'نطوّر التقنيات والميزات باستمرار.',
      quality: 'الجودة',
      qualityDesc: 'نتائج عالية الدقة والاعتمادية.',
      accessibility: 'سهولة الوصول',
      accessibilityDesc: 'أدوات احترافية متاحة للجميع.',
      whatWeOffer: 'ما نقدمه',
      multipleTypes: 'أنواع متعددة',
      multipleTypesDesc: 'Code128 و Code39 و EAN-13 و UPC-A و QR وغيرها',
      customizable: 'خيارات مرنة',
      customizableDesc: 'تحكم بالحجم والألوان والتنسيق',
      bulkGen: 'توليد دفعات',
      bulkGenDesc: 'حتى 50 باركود أو رفع ملفات CSV/Excel',
      multipleFormats: 'تنسيقات متعددة',
      multipleFormatsDesc: 'تصدير PNG أو JPEG أو PDF',
      freeUnlimited: 'مجاني ودائم',
      freeUnlimitedDesc: 'لا تكاليف ولا حدود',
      fastReliable: 'سريع وموثوق',
      fastReliableDesc: 'أداء مستقر وزمن استجابة منخفض',
      ourTeam: 'فريقنا',
      ourTeamDesc: 'خبراء بتخصصات مختلفة يعملون لتقديم أفضل تجربة.',
      contactInfo: 'معلومات التواصل',
      email: 'البريد',
      address: 'العنوان',
      teamMembers: [
        { role: 'قائد التطوير', department: 'التقنية', description: 'خبرة واسعة في أنظمة الباركود والويب.' },
        { role: 'مدير المنتج', department: 'المنتج', description: 'يركز على تجربة استخدام واضحة وسلسة.' },
        { role: 'مصمم UI/UX', department: 'التصميم', description: 'يبتكر واجهات حديثة وسهلة.' },
        { role: 'ضمان الجودة', department: 'الجودة', description: 'يتابع الأداء والموثوقية باستمرار.' },
        { role: 'مهندس خلفية', department: 'البنية التحتية', description: 'يبني أنظمة قابلة للتوسع.' },
        { role: 'متخصص تسويق', department: 'النمو', description: 'يعزز الوصول للمستخدمين الجدد.' },
      ],
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'لديك سؤال أو فكرة؟ يسعدنا الاستماع إليك!',
      emailUs: 'راسلنا',
      emailDesc: 'نرد عادة خلال 24 ساعة.',
      visitUs: 'زرنا',
      visitDesc: 'مكتبنا في قلب المنطقة التقنية في شنجن.',
      businessHours: 'ساعات العمل',
      businessHoursContent: 'الاثنين - الجمعة: 9 صباحًا - 6 مساءً (CST)',
      businessHoursDesc: 'خارج الدوام؟ أرسل بريدًا وسنرد قريبًا.',
      sendMessage: 'أرسل رسالة',
      sendMessageDesc: 'املأ النموذج وسنعاود الاتصال بك.',
      yourName: 'الاسم',
      emailAddress: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      sendButton: 'إرسال',
      sentButton: 'تم الإرسال ✓',
      thankYou: 'شكرًا لرسالتك! سنرد خلال 24 ساعة.',
      whyContact: 'لماذا تتواصل معنا؟',
      techSupport: 'دعم فني',
      techSupportDesc: 'نساعدك على استخدام المولد.',
      businessInquiries: 'شراكات وأعمال',
      businessInquiriesDesc: 'تحدث معنا حول الحلول المخصصة.',
      feedback: 'اقتراحات',
      feedbackDesc: 'نقدّر أي فكرة لتحسين الخدمة.',
      reportIssues: 'الإبلاغ عن مشكلة',
      reportIssuesDesc: 'أخبرنا في حال واجهت خطأ.',
      faq: 'الأسئلة الشائعة',
      faq1Q: 'متى يصلني الرد؟',
      faq1A: 'نستهدف الرد خلال 24 ساعة في أيام العمل.',
      faq2Q: 'هل يوجد دعم فني؟',
      faq2A: 'نعم، الدعم مجاني لكل المستخدمين.',
      faq3Q: 'هل يمكن طلب ميزة؟',
      faq3A: 'بالتأكيد! أرسل طلبك عبر النموذج.',
      responseTime: 'زمن الرد',
      responseTimeDesc: 'عادة خلال 24 ساعة.',
      urgentNote: 'للطلبات العاجلة أضف كلمة "عاجل" في العنوان.',
    },
    legal: {
      privacyTitle: 'سياسة الخصوصية',
      privacyIntroTitle: 'مقدمة',
      privacyIntroDesc:
        'نحترم خصوصيتك ونتعهد بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها عند استخدام خدمة مولد الرموز الشريطية.',
      privacyCollectTitle: 'المعلومات التي نجمعها',
      privacyCollectDesc: 'قد نجمع الأنواع التالية من المعلومات:',
      privacyCollectItems: [
        'المعلومات التي تقدمها عند الاتصال بنا (الاسم، البريد الإلكتروني، الرسالة).',
        'بيانات الاستخدام والتحليلات لتحسين خدمتنا.',
        'بيانات الرموز الشريطية التي تقوم بإنشائها (يتم معالجتها محليًا في متصفحك).',
        'معلومات الجهاز مثل نوع المتصفح ونظام التشغيل ودقة الشاشة.',
        'عنوان IP وبيانات الموقع العامة لأغراض الأمان والتحليلات.',
      ],
      privacyUseTitle: 'كيف نستخدم معلوماتك',
      privacyUseDesc: 'نستخدم المعلومات التي نجمعها من أجل:',
      privacyUseItems: [
        'توفير وتحسين خدمة توليد الرموز الشريطية.',
        'الرد على استفساراتك وملاحظاتك.',
        'تحليل أنماط الاستخدام لتحسين تجربة المستخدم.',
        'ضمان أمان وسلامة خدمتنا.',
        'الامتثال للالتزامات القانونية وحماية حقوقنا.',
      ],
      privacySecurityTitle: 'أمان البيانات',
      privacySecurityDesc:
        'نطبق تدابير أمنية مناسبة لحماية معلوماتك الشخصية. تتم معالجة جميع عمليات توليد الرموز الشريطية محليًا في متصفحك، ولا نخزن بيانات الرموز الشريطية على خوادمنا. نستخدم التشفير وبروتوكولات الأمان القياسية في الصناعة لحماية أي بيانات نجمعها.',
      privacyCookiesTitle: 'ملفات تعريف الارتباط وتقنيات التتبع',
      privacyCookiesDesc:
        'قد نستخدم ملفات تعريف الارتباط وتقنيات تتبع مماثلة لتحسين تجربتك وتحليل أنماط الاستخدام وتقديم محتوى مخصص. يمكنك التحكم في تفضيلات ملفات تعريف الارتباط من خلال إعدادات متصفحك. قد لا تعمل بعض الميزات بشكل صحيح إذا تم تعطيل ملفات تعريف الارتباط.',
      privacyThirdPartyTitle: 'خدمات الطرف الثالث',
      privacyThirdPartyDesc:
        'قد تدمج خدمتنا خدمات تحليلات وإعلانات من أطراف ثالثة (مثل Google Analytics وGoogle AdSense) التي قد تجمع معلومات حول استخدامك لموقعنا. هذه الخدمات لها سياسات خصوصية خاصة بها، ونشجعك على مراجعتها.',
      privacyUserRightsTitle: 'حقوقك',
      privacyUserRightsDesc:
        'لديك الحق في الوصول إلى معلوماتك الشخصية أو تحديثها أو حذفها. يمكنك أيضًا إلغاء الاشتراك في ممارسات جمع البيانات معينة. لممارسة هذه الحقوق، يرجى الاتصال بنا على barcode@chdaoai.com.',
      privacyDataRetentionTitle: 'الاحتفاظ بالبيانات',
      privacyDataRetentionDesc:
        'نحتفظ بالمعلومات الشخصية فقط طالما كان ذلك ضروريًا لتحقيق الأغراض الموضحة في هذه السياسة، ما لم تتطلب القوانين فترة احتفاظ أطول. يتم معالجة بيانات الرموز الشريطية المولدة من خلال خدمتنا محليًا ولا يتم تخزينها على خوادمنا.',
      privacyChildrenTitle: 'خصوصية الأطفال',
      privacyChildrenDesc:
        'خدمتنا غير مخصصة للأطفال دون سن 13 عامًا. لا نجمع معلومات شخصية من الأطفال عن قصد. إذا كنت تعتقد أننا جمعنا مثل هذه المعلومات عن غير قصد، يرجى الاتصال بنا على الفور.',
      privacyChangesTitle: 'التغييرات على هذه السياسة',
      privacyChangesDesc:
        'قد نحدث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية من خلال نشر السياسة الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث". استمرارك في استخدام خدمتنا بعد هذه التغييرات يعني قبولك للسياسة المحدثة.',
      privacyContactTitle: 'تواصل معنا',
      privacyContactDesc:
        'إذا كان لديك أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على barcode@chdaoai.com.',

      termsTitle: 'شروط الخدمة',
      termsUpdated: 'آخر تحديث',
      termsAcceptanceTitle: 'قبول الشروط',
      termsAcceptanceDesc:
        'من خلال الوصول إلى خدمة مولد الرموز الشريطية واستخدامها، فإنك تقبل وتوافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدمتنا.',
      termsUseTitle: 'استخدام الخدمة',
      termsUseDesc:
        'يمكنك استخدام خدمتنا لتوليد رموز شريطية للأغراض الشخصية أو التجارية. توافق على عدم استخدام الخدمة لأي غرض غير قانوني أو غير مصرح به، بما في ذلك على سبيل المثال لا الحصر:',
      termsUseItems: [
        'توليد رموز شريطية للمنتجات المقلدة أو الأنشطة الاحتيالية.',
        'انتهاك أي قوانين أو لوائح معمول بها.',
        'انتهاك حقوق الملكية الفكرية.',
        'نقل كود ضار أو محتوى ضار.',
        'محاولة تعطيل أو المساس بأمان الخدمة.',
      ],
      termsUserAccountTitle: 'حسابات المستخدمين',
      termsUserAccountDesc:
        'حاليًا، لا تتطلب خدمتنا تسجيل المستخدم. ومع ذلك، إذا قدمنا ميزات حساب في المستقبل، فأنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وجميع الأنشطة التي تحدث تحت حسابك.',
      termsIntellectualPropertyTitle: 'الملكية الفكرية',
      termsIntellectualPropertyDesc:
        'جميع محتويات وميزات ووظائف خدمتنا، بما في ذلك على سبيل المثال لا الحصر النص والرسومات والشعارات والبرمجيات، مملوكة لنا أو لمرخصينا ومحمية بموجب قوانين حقوق النشر والعلامات التجارية والملكية الفكرية الأخرى. لا يجوز لك إعادة إنتاج أو توزيع أو إنشاء أعمال مشتقة دون إذننا الكتابي الصريح.',
      termsUserContentTitle: 'المحتوى الذي ينشئه المستخدم',
      termsUserContentDesc:
        'تحتفظ بملكية أي رموز شريطية تقوم بإنشائها باستخدام خدمتنا. ومع ذلك، باستخدام خدمتنا، تمنحنا ترخيصًا غير حصري وخاليًا من الرسوم لاستخدام وعرض وتحليل بيانات الاستخدام المجمعة لأغراض تحسين الخدمة.',
      termsAvailabilityTitle: 'توفر الخدمة',
      termsAvailabilityDesc:
        'نسعى جاهدين لتوفير خدمة موثوقة ولكننا لا نضمن التشغيل دون انقطاع أو خالٍ من الأخطاء. نحتفظ بالحق في تعديل أو تعليق أو إيقاف الخدمة في أي وقت دون إشعار مسبق. لسنا مسؤولين عن أي خسارة أو ضرر ناتج عن انقطاعات الخدمة.',
      termsModificationsTitle: 'تعديلات الخدمة',
      termsModificationsDesc:
        'نحتفظ بالحق في تعديل أو تحديث أو إيقاف أي جانب من جوانب خدمتنا في أي وقت. قد نفرض أيضًا حدودًا على ميزات معينة أو نقيد الوصول إلى أجزاء من الخدمة دون إشعار أو مسؤولية.',
      termsLiabilityTitle: 'تحديد المسؤولية',
      termsLiabilityDesc:
        'لسنا مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام خدمتنا. يتم توفير الخدمة "كما هي" دون ضمانات من أي نوع، صريحة أو ضمنية، بما في ذلك على سبيل المثال لا الحصر ضمانات القابلية للتسويق أو الملاءمة لغرض معين أو عدم الانتهاك.',
      termsIndemnificationTitle: 'التعويض',
      termsIndemnificationDesc:
        'توافق على تعويضنا وإبراء ذمتنا من أي مطالبات وأضرار وخسائر ومسؤوليات ومصروفات (بما في ذلك الرسوم القانونية) الناتجة عن استخدامك للخدمة أو انتهاكك لهذه الشروط أو انتهاكك لأي حقوق لأطراف أخرى.',
      termsTerminationTitle: 'إنهاء الخدمة',
      termsTerminationDesc:
        'نحتفظ بالحق في إنهاء أو تعليق وصولك إلى خدمتنا على الفور، دون إشعار مسبق، لأي سبب، بما في ذلك انتهاك هذه الشروط. عند الإنهاء، سينتهي حقك في استخدام الخدمة على الفور.',
      termsGoverningLawTitle: 'القانون الحاكم',
      termsGoverningLawDesc:
        'يخضع شروط الخدمة هذه ويتم تفسيرها وفقًا لقوانين جمهورية الصين الشعبية، دون اعتبار لأحكام تعارض القوانين. أي نزاعات تنشأ من هذه الشروط تخضع للولاية القضائية الحصرية لمحاكم شنتشن، الصين.',
      termsDisputeResolutionTitle: 'حل النزاعات',
      termsDisputeResolutionDesc:
        'في حالة نشوء أي نزاع من أو يتعلق بهذه الشروط، نشجعك على الاتصال بنا أولاً للبحث عن حل ودود. إذا لم يمكن حل النزاع من خلال التواصل المباشر، فسيتم حله من خلال التحكيم الملزم وفقًا لقواعد التحكيم المعمول بها.',
      termsSeverabilityTitle: 'القابلية للفصل',
      termsSeverabilityDesc:
        'إذا تم تحديد أن أي حكم من هذه الشروط غير قابل للتنفيذ أو غير صالح، فسيتم تقييد هذا الحكم أو إزالته إلى الحد الأدنى الضروري، وستبقى الأحكام المتبقية سارية ومفعولة بالكامل.',
      termsContactTitle: 'تواصل معنا',
      termsContactDesc:
        'للأسئلة حول هذه الشروط، يرجى الاتصال بنا على barcode@chdaoai.com.',

      refundTitle: 'سياسة الاسترجاع',
      refundIntroTitle: 'مقدمة',
      refundIntroDesc:
        'توضح سياسة الاسترجاع هذه الشروط والأحكام المتعلقة بالاسترجاعات لأي خدمات مدفوعة قد نقدمها في المستقبل. حاليًا، يتم توفير خدمة مولد الرموز الشريطية مجانًا.',
      refundFreeServiceTitle: 'الخدمة المجانية',
      refundFreeServiceDesc:
        'يتم توفير خدمة مولد الرموز الشريطية حاليًا مجانًا لجميع المستخدمين. على هذا النحو، لا توجد مدفوعات لاسترجاعها. جميع الميزات، بما في ذلك توليد رمز شريطي واحد والتوليد المجمع وتنسيقات التصدير المتعددة، متاحة بدون تكلفة.',
      refundFuturePaidTitle: 'الخدمات المدفوعة المستقبلية',
      refundFuturePaidDesc:
        'إذا قدمنا خدمات مدفوعة أو اشتراكات أو ميزات مميزة في المستقبل، فستطبق سياسة الاسترجاع التالية:',
      refundFuturePaidItems: [
        'يجب تقديم طلبات الاسترجاع خلال 30 يومًا من الشراء.',
        'سيتم معالجة الاسترجاعات إلى طريقة الدفع الأصلية خلال 7-14 يوم عمل.',
        'قد يتم حساب الاسترجاعات بشكل متناسب لخدمات الاشتراك بناءً على الوقت غير المستخدم.',
        'نحتفظ بالحق في رفض الاسترجاعات للخدمات التي تم استخدامها بشكل كبير أو إساءة استخدامها.',
      ],
      refundEligibilityTitle: 'أهلية الاسترجاع',
      refundEligibilityDesc:
        'قد يتم منح الاسترجاعات في الحالات التالية:',
      refundEligibilityItems: [
        'عطل في الخدمة أو فشل في تقديم الميزات الموعودة.',
        'رسوم مكررة أو عرضية.',
        'إلغاء الاشتراك خلال فترة الاسترجاع.',
        'مشاكل تقنية تمنع الوصول إلى الخدمة ولا يمكن حلها.',
      ],
      refundNonEligibleTitle: 'العناصر غير القابلة للاسترجاع',
      refundNonEligibleDesc:
        'العناصر التالية بشكل عام غير مؤهلة للاسترجاع:',
      refundNonEligibleItems: [
        'الخدمات المستخدمة بعد فترة الاسترجاع.',
        'طلبات الاسترجاع بسبب خطأ المستخدم أو سوء فهم ميزات الخدمة.',
        'الخدمات المنتهية بسبب انتهاك شروط الخدمة.',
        'الخدمات المخصصة أو الشخصية التي تم تسليمها.',
      ],
      refundProcessTitle: 'عملية الاسترجاع',
      refundProcessDesc:
        'لطلب استرجاع، يرجى الاتصال بنا على barcode@chdaoai.com مع المعلومات التالية:',
      refundProcessItems: [
        'بريدك الإلكتروني للحساب أو معرف المعاملة.',
        'تاريخ الشراء وطريقة الدفع.',
        'سبب طلب الاسترجاع.',
        'أي وثائق أو لقطات شاشة ذات صلة.',
      ],
      refundProcessingTimeTitle: 'وقت المعالجة',
      refundProcessingTimeDesc:
        'سيتم مراجعة طلبات الاسترجاع خلال 5-7 أيام عمل. بمجرد الموافقة، سيتم معالجة الاسترجاعات إلى طريقة الدفع الأصلية خلال 7-14 يوم عمل. قد تختلف أوقات المعالجة حسب مزود الدفع الخاص بك.',
      refundContactTitle: 'تواصل معنا',
      refundContactDesc:
        'للأسئلة حول الاسترجاعات أو لتقديم طلب استرجاع، يرجى الاتصال بنا على barcode@chdaoai.com. نحن ملتزمون بحل مشاكل الاسترجاع بشكل عادل وسريع.',

      disclaimerTitle: 'إخلاء المسؤولية',
      disclaimerIntroTitle: 'مقدمة',
      disclaimerIntroDesc:
        'يحدد إخلاء المسؤولية هذا الإرشادات العامة وإخلاءات المسؤولية وشروط الاستخدام لخدمة مولد الرموز الشريطية. باستخدام خدمتنا، فإنك تقر بأنك قد قرأت وفهمت وتوافق على الالتزام بهذا إخلاء المسؤولية.',
      disclaimerNoWarrantyTitle: 'بدون ضمان',
      disclaimerNoWarrantyDesc:
        'يتم توفير خدمة مولد الرموز الشريطية "كما هي" و"حسب التوفر" دون أي ضمانات، صريحة أو ضمنية. لا نضمن أن الخدمة ستكون دون انقطاع أو خالية من الأخطاء أو آمنة أو تلبي متطلباتك المحددة. نتنصل من جميع الضمانات، بما في ذلك على سبيل المثال لا الحصر:',
      disclaimerNoWarrantyItems: [
        'ضمانات القابلية للتسويق أو الملاءمة لغرض معين.',
        'ضمانات تتعلق بدقة أو موثوقية أو اكتمال الرموز الشريطية المولدة.',
        'ضمانات أن الخدمة ستكون متاحة في جميع الأوقات أو خالية من العيوب.',
        'ضمانات تتعلق بخدمات أو تكاملات الطرف الثالث.',
      ],
      disclaimerAccuracyTitle: 'دقة الرموز الشريطية',
      disclaimerAccuracyDesc:
        'بينما نسعى جاهدين لتوليد رموز شريطية دقيقة وقابلة للمسح باستخدام خوارزميات قياسية في الصناعة، لا يمكننا ضمان أن جميع الرموز الشريطية المولدة ستكون قابلة للمسح بواسطة جميع الأجهزة أو ستلبي معايير صناعية محددة. المستخدمون مسؤولون وحدهم عن:',
      disclaimerAccuracyItems: [
        'التحقق من دقة ووظائف الرموز الشريطية المولدة قبل الاستخدام.',
        'ضمان امتثال الرموز الشريطية للمعايير واللوائح الصناعية المعمول بها.',
        'اختبار الرموز الشريطية بأجهزة المسح المقصودة.',
        'التحقق من صحة بيانات الرموز الشريطية للصحة والاكتمال.',
      ],
      disclaimerLiabilityTitle: 'تحديد المسؤولية',
      disclaimerLiabilityDesc:
        'في أقصى حد يسمح به القانون، لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناتجة عن:',
      disclaimerLiabilityItems: [
        'استخدام أو عدم القدرة على استخدام خدمتنا.',
        'أخطاء أو إغفالات أو عدم دقة في الرموز الشريطية المولدة.',
        'فقدان البيانات أو الأرباح أو الفرص التجارية.',
        'الوصول غير المصرح به أو تعديل بياناتك.',
        'خدمات الطرف الثالث أو المحتوى الذي يتم الوصول إليه من خلال خدمتنا.',
      ],
      disclaimerThirdPartyTitle: 'خدمات الطرف الثالث',
      disclaimerThirdPartyDesc:
        'قد تدمج خدمتنا أو ترتبط بخدمات أو مواقع ويب أو تطبيقات من أطراف ثالثة. لسنا مسؤولين عن محتوى أو ممارسات الخصوصية أو شروط الخدمة لهذه الأطراف الثالثة. تفاعلاتك مع خدمات الطرف الثالث هي فقط بينك وبين الطرف الثالث.',
      disclaimerUseAtOwnRiskTitle: 'الاستخدام على مسؤوليتك الخاصة',
      disclaimerUseAtOwnRiskDesc:
        'استخدامك لخدمتنا على مسؤوليتك الخاصة. لسنا مسؤولين عن أي عواقب ناتجة عن استخدام الرموز الشريطية المولدة، بما في ذلك على سبيل المثال لا الحصر:',
      disclaimerUseAtOwnRiskItems: [
        'أخطاء تحديد المنتج أو وضع العلامات الخاطئة.',
        'مشاكل إدارة المخزون.',
        'انتهاكات الامتثال أو المشاكل التنظيمية.',
        'الخسائر المالية أو تعطيل الأعمال.',
      ],
      disclaimerModificationsTitle: 'تعديلات الخدمة',
      disclaimerModificationsDesc:
        'نحتفظ بالحق في تعديل أو تعليق أو إيقاف أي جانب من جوانب خدمتنا في أي وقت دون إشعار مسبق. لسنا مسؤولين عن أي إزعاج أو خسارة ناتجة عن هذه التعديلات أو الإيقافات.',
      disclaimerJurisdictionTitle: 'الولاية القضائية',
      disclaimerJurisdictionDesc:
        'يخضع إخلاء المسؤولية هذا لقوانين جمهورية الصين الشعبية. أي نزاعات تنشأ من إخلاء المسؤولية هذا تخضع للولاية القضائية الحصرية لمحاكم شنتشن، الصين.',
      disclaimerContactTitle: 'تواصل معنا',
      disclaimerContactDesc:
        'للأسئلة حول إخلاء المسؤولية هذا، يرجى الاتصال بنا على barcode@chdaoai.com. نحن ملتزمون بتوفير معلومات شفافة حول خدمتنا ومعالجة أي مخاوف قد تكون لديك.',

      copyrightTitle: 'إشعار حقوق النشر',
      copyrightIntroTitle: 'مقدمة',
      copyrightIntroDesc:
        'يحدد إشعار حقوق النشر هذا ملكية وحقوق استخدام المحتوى والتصميم والوظائف لخدمة مولد الرموز الشريطية. باستخدام خدمتنا، تقر وتوافق على احترام هذه الحماية لحقوق النشر.',
      copyrightOwnershipTitle: 'ملكية حقوق النشر',
      copyrightOwnershipDesc:
        'جميع محتويات وتصميم ووظائف هذا الموقع والخدمة، بما في ذلك على سبيل المثال لا الحصر ما يلي، هي ملكية حصرية لـ Barcode Generator ومحمية بموجب قوانين حقوق النشر:',
      copyrightOwnershipItems: [
        'تصميم الموقع والتخطيط والرسومات والشعارات والعناصر المرئية.',
        'كود البرنامج والخوارزميات والتنفيذات التقنية.',
        'التوثيق ونص المساعدة وأدلة المستخدم.',
        'أسماء العلامات التجارية وعلامات الخدمة والمظهر التجاري.',
        'التجميعات وقواعد البيانات والمحتوى المجمع.',
      ],
      copyrightUserContentTitle: 'المحتوى الذي ينشئه المستخدم',
      copyrightUserContentDesc:
        'الرموز الشريطية التي يتم إنشاؤها باستخدام خدمتنا يتم إنشاؤها من قبل المستخدمين وتنتمي حصريًا للمستخدمين الذين أنشأوها. لا ندعي ملكية أو حقوق نشر أو أي حقوق ملكية فكرية على الرموز الشريطية التي ينشئها المستخدمون. المستخدمون أحرار في استخدام وتوزيع وتجارة الرموز الشريطية التي ينشئونها كما يرون مناسبًا.',
      copyrightPermittedUseTitle: 'الاستخدام المسموح',
      copyrightPermittedUseDesc:
        'يتم منحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل لاستخدام خدمتنا لإنشاء رموز شريطية للأغراض الشخصية أو التجارية، وفقًا للشروط التالية:',
      copyrightPermittedUseItems: [
        'يمكنك استخدام الرموز الشريطية المولدة لأي غرض قانوني.',
        'يمكنك تنزيل وحفظ الرموز الشريطية المولدة لاستخدامك.',
        'يمكنك مشاركة الرموز الشريطية المولدة مع الآخرين.',
        'يمكنك استخدام الرموز الشريطية المولدة في المنتجات أو الخدمات التجارية.',
      ],
      copyrightProhibitedUseTitle: 'الاستخدام المحظور',
      copyrightProhibitedUseDesc:
        'الأنشطة التالية محظورة تمامًا دون إذننا الكتابي الصريح:',
      copyrightProhibitedUseItems: [
        'إعادة إنتاج أو نسخ أو تكرار موقعنا أو خدمتنا.',
        'إنشاء أعمال مشتقة بناءً على خدمتنا أو تصميم الموقع.',
        'الهندسة العكسية أو فك التجميع أو تفكيك برنامجنا.',
        'إزالة أو تعديل أو إخفاء إشعارات حقوق النشر أو العلامات المملوكة.',
        'استخدام خدمتنا لإنشاء خدمات أو منتجات منافسة.',
        'الخدش أو الزحف أو استخراج البيانات الآلي من خدمتنا.',
      ],
      copyrightThirdPartyTitle: 'محتوى الطرف الثالث',
      copyrightThirdPartyDesc:
        'قد تتضمن خدمتنا أو تشير إلى محتوى أو مكتبات أو برامج من أطراف ثالثة. يبقى هذا المحتوى ملكًا لأصحابه المعنيين ويخضع لشروط حقوق النشر والترخيص الخاصة بهم. نحن نحترم جميع حقوق الملكية الفكرية للأطراف الثالثة.',
      copyrightInfringementTitle: 'انتهاك حقوق النشر',
      copyrightInfringementDesc:
        'إذا كنت تعتقد أن أي محتوى على موقعنا أو خدمتنا ينتهك حقوق النشر الخاصة بك، يرجى الاتصال بنا فورًا على barcode@chdaoai.com مع المعلومات التالية:',
      copyrightInfringementItems: [
        'وصف العمل المحمي بحقوق النشر الذي تدعي أنه تم انتهاكه.',
        'موقع المواد التي يُزعم أنها تنتهك على خدمتنا.',
        'معلومات الاتصال الخاصة بك، بما في ذلك الاسم والعنوان والبريد الإلكتروني.',
        'بيان بأن لديك اعتقاد حسن النية بأن الاستخدام غير مصرح به.',
        'بيان بأن المعلومات دقيقة وأنك مخول للعمل نيابة عن مالك حقوق النشر.',
      ],
      copyrightDMCATitle: 'الامتثال لـ DMCA',
      copyrightDMCADesc:
        'نحن نلتزم بقوانين حقوق النشر المعمول بها وسنرد بسرعة على إشعارات الإزالة الصالحة بموجب DMCA. عند استلام إشعار صالح، سنقوم بإزالة أو تعطيل الوصول إلى المحتوى الذي يُزعم أنه ينتهك وإخطار المستخدم الذي نشره.',
      copyrightContactTitle: 'اتصل بنا',
      copyrightContactDesc:
        'للاستفسارات حول حقوق النشر أو طلبات الترخيص أو للإبلاغ عن انتهاك حقوق النشر، يرجى الاتصال بنا على barcode@chdaoai.com. نحن ملتزمون بحماية حقوق الملكية الفكرية وسنتعامل مع جميع المخاوف المشروعة بسرعة.',

      legalNoticeTitle: 'إشعار قانوني',
      legalNoticeIntroTitle: 'مقدمة',
      legalNoticeIntroDesc:
        'يوفر هذا الإشعار القانوني معلومات مهمة حول شركتنا وخدمتنا والتزاماتنا القانونية. إنه بمثابة إعلان رسمي لهويتنا التجارية ومعلومات الاتصال ومسؤولياتنا القانونية بموجب القوانين المعمول بها.',
      legalNoticeCompanyTitle: 'معلومات الشركة',
      legalNoticeCompanyDesc:
        'يتم توفير المعلومات التالية وفقًا للمتطلبات القانونية المعمول بها:',
      legalNoticeCompanyName: 'Barcode Generator',
      legalNoticeCompanyAddress: '130 Longhua Avenue، منطقة Longhua، شنتشن، الصين',
      legalNoticeContactInfoTitle: 'معلومات الاتصال',
      legalNoticeContactInfoDesc:
        'للاستفسارات أو الدعم أو الأمور القانونية، يمكنك الاتصال بنا من خلال القنوات التالية:',
      legalNoticeContactEmail: 'البريد الإلكتروني: barcode@chdaoai.com',
      legalNoticeContactAddress: 'العنوان: 130 Longhua Avenue، منطقة Longhua، شنتشن، الصين',
      legalNoticeResponsibleTitle: 'المسؤول عن المحتوى',
      legalNoticeResponsibleDesc:
        'تم إنشاء محتوى موقعنا بعناية فائقة واجتهاد. ومع ذلك، لا يمكننا ضمان الدقة المطلقة أو الاكتمال أو التوقيت لجميع المعلومات. نحتفظ بالحق في تعديل أو تحديث أو حذف المحتوى في أي وقت دون إشعار مسبق.',
      legalNoticeLiabilityLinksTitle: 'المسؤولية عن الروابط',
      legalNoticeLiabilityLinksDesc:
        'قد يحتوي موقعنا على روابط لمواقع ويب خارجية تديرها أطراف ثالثة. ليس لدينا سيطرة على محتوى أو ممارسات الخصوصية أو شروط الخدمة لهذه المواقع الخارجية. لا نتحمل أي مسؤولية عن:',
      legalNoticeLiabilityLinksItems: [
        'محتوى أو دقة أو شرعية المواقع الخارجية.',
        'أي أضرار أو خسائر ناتجة عن زيارة الروابط الخارجية.',
        'ممارسات الخصوصية أو جمع البيانات من قبل مواقع الطرف الثالث.',
        'المنتجات أو الخدمات أو المعلومات المقدمة على المواقع الخارجية.',
      ],
      legalNoticeCopyrightTitle: 'حقوق النشر',
      legalNoticeCopyrightDesc:
        'المحتوى والأعمال على هذا الموقع تخضع لقانون حقوق النشر. يتطلب إعادة الإنتاج والمعالجة والتوزيع وأي شكل من أشكال التجارية موافقة كتابية من المؤلف أو المنشئ المعني. قد يؤدي الاستخدام غير المصرح به إلى اتخاذ إجراءات قانونية.',
      legalNoticeTrademarksTitle: 'العلامات التجارية',
      legalNoticeTrademarksDesc:
        'جميع العلامات التجارية وعلامات الخدمة والأسماء التجارية المستخدمة على هذا الموقع هي ملك لأصحابها المعنيين. يتطلب استخدام علاماتنا التجارية، بما في ذلك "Barcode Generator" والعلامات ذات الصلة، موافقتنا الكتابية المسبقة. الاستخدام غير المصرح به لعلاماتنا التجارية محظور.',
      legalNoticeGoverningLawTitle: 'القانون الحاكم',
      legalNoticeGoverningLawDesc:
        'يخضع هذا الإشعار القانوني وجميع الأمور المتعلقة بخدمتنا لقوانين جمهورية الصين الشعبية. أي نزاعات قانونية ستخضع للولاية القضائية الحصرية لمحاكم شنتشن، الصين.',
      legalNoticeUpdatesTitle: 'تحديثات الإشعار القانوني',
      legalNoticeUpdatesDesc:
        'نحتفظ بالحق في تحديث هذا الإشعار القانوني في أي وقت ليعكس التغييرات في خدمتنا أو المتطلبات القانونية أو الممارسات التجارية. يُنصح المستخدمون بمراجعة هذا الإشعار بشكل دوري. الاستمرار في استخدام خدمتنا بعد التغييرات يشكل قبول الإشعار المحدث.',
      legalNoticeContactTitle: 'اتصل بنا',
      legalNoticeContactDesc:
        'للاستفسارات حول هذا الإشعار القانوني أو أي أمور قانونية، يرجى الاتصال بنا على barcode@chdaoai.com. نحن ملتزمون بالشفافية وسنرد على جميع الاستفسارات المشروعة بسرعة.',

      intellectualPropertyTitle: 'بيان الملكية الفكرية',
      intellectualPropertyIntroTitle: 'مقدمة',
      intellectualPropertyIntroDesc:
        'يحدد بيان الملكية الفكرية هذا حقوق الملكية والسياسات والحماية المتعلقة بالعلامات التجارية وحقوق النشر والبراءات والأسرار التجارية والأصول الأخرى للملكية الفكرية المتعلقة بخدمة مولد الرموز الشريطية.',
      intellectualPropertyOwnershipTitle: 'ملكية الملكية الفكرية',
      intellectualPropertyOwnershipDesc:
        'جميع حقوق الملكية الفكرية في خدمة مولد الرموز الشريطية، بما في ذلك على سبيل المثال لا الحصر ما يلي، هي ملك لـ Barcode Generator أو المرخصين لدينا:',
      intellectualPropertyOwnershipItems: [
        'العلامات التجارية وعلامات الخدمة والأسماء التجارية المرتبطة بعلامتنا التجارية.',
        'حقوق النشر في كود البرنامج والخوارزميات والتوثيق التقني.',
        'البراءات أو طلبات البراءات المتعلقة بتقنيتنا (إن وجدت).',
        'الأسرار التجارية والخوارزميات المملوكة والمعلومات السرية.',
        'تصميم الموقع وواجهة المستخدم وعناصر تجربة المستخدم.',
        'الطرق التجارية والعمليات والإجراءات التشغيلية.',
      ],
      intellectualPropertyTrademarksTitle: 'العلامات التجارية',
      intellectualPropertyTrademarksDesc:
        'جميع العلامات التجارية وعلامات الخدمة والأسماء التجارية المستخدمة على هذا الموقع والمتعلقة بخدمتنا هي ملك لأصحابها المعنيين. تشمل علاماتنا التجارية، على سبيل المثال لا الحصر:',
      intellectualPropertyTrademarksItems: [
        '"Barcode Generator" والاختلافات الخاصة به.',
        'شعارنا وعناصر هوية العلامة التجارية.',
        'أسماء الخدمات ومعرفات المنتجات.',
        'الشعارات والعبارات المرتبطة بخدمتنا.',
      ],
      intellectualPropertyTrademarkUseTitle: 'سياسة استخدام العلامات التجارية',
      intellectualPropertyTrademarkUseDesc:
        'يتطلب استخدام علاماتنا التجارية موافقتنا الكتابية المسبقة. الاستخدام غير المصرح به لعلاماتنا التجارية محظور تمامًا وقد يؤدي إلى اتخاذ إجراءات قانونية. إذا كنت ترغب في استخدام علاماتنا التجارية، يرجى الاتصال بنا على barcode@chdaoai.com لطلب الإذن.',
      intellectualPropertyCopyrightTitle: 'حماية حقوق النشر',
      intellectualPropertyCopyrightDesc:
        'جميع المحتويات الأصلية وكود البرامج والتوثيق والأعمال الإبداعية على موقعنا وخدمتنا محمية بموجب قانون حقوق النشر. يشمل ذلك:',
      intellectualPropertyCopyrightItems: [
        'كود المصدر وتنفيذات البرامج.',
        'تصميم وتخطيط الموقع.',
        'التوثيق وأدلة المستخدم.',
        'الرسومات والصور والعناصر المرئية.',
        'المحتوى المكتوب والنسخ.',
      ],
      intellectualPropertyThirdPartyTitle: 'الملكية الفكرية للطرف الثالث',
      intellectualPropertyThirdPartyDesc:
        'تستخدم خدمتنا مكتبات وبرامج وتقنيات من أطراف ثالثة تخضع لتراخيصها وحقوق الملكية الفكرية المعنية. نحن نحترم جميع الملكية الفكرية للأطراف الثالثة ونلتزم بالتراخيص المعمول بها، بما في ذلك:',
      intellectualPropertyThirdPartyItems: [
        'تراخيص البرامج مفتوحة المصدر (MIT، Apache، إلخ).',
        'تراخيص واتفاقيات البرامج التجارية.',
        'شروط وأحكام واجهات برمجة التطبيقات للطرف الثالث.',
        'تراخيص الخطوط وموارد التصميم.',
      ],
      intellectualPropertyUserContentTitle: 'المحتوى الذي ينشئه المستخدم',
      intellectualPropertyUserContentDesc:
        'يحتفظ المستخدمون بجميع حقوق الملكية الفكرية على الرموز الشريطية التي ينشئونها باستخدام خدمتنا. لا ندعي ملكية أو حقوق نشر أو أي حقوق ملكية فكرية على المحتوى الذي ينشئه المستخدمون. المستخدمون أحرار في:',
      intellectualPropertyUserContentItems: [
        'استخدام الرموز الشريطية المولدة لأي غرض قانوني.',
        'تسجيل العلامات التجارية أو حقوق النشر لرموزهم الشريطية.',
        'ترخيص أو بيع رموزهم الشريطية المولدة لأطراف ثالثة.',
        'تعديل أو إنشاء أعمال مشتقة من رموزهم الشريطية.',
      ],
      intellectualPropertyEnforcementTitle: 'إنفاذ الحقوق',
      intellectualPropertyEnforcementDesc:
        'نأخذ حقوق الملكية الفكرية على محمل الجد وسنتخذ الإجراءات القانونية المناسبة ضد أي انتهاك لملكيتنا الفكرية. قد يشمل ذلك:',
      intellectualPropertyEnforcementItems: [
        'إصدار إشعارات التوقف والكف.',
        'رفع دعاوى للتعويضات وإغاثة الحظر.',
        'الإبلاغ عن الانتهاكات للسلطات المعنية.',
        'متابعة التهم الجنائية للانتهاكات الخطيرة.',
      ],
      intellectualPropertyReportingTitle: 'الإبلاغ عن الانتهاك',
      intellectualPropertyReportingDesc:
        'إذا كنت تعتقد أن حقوق الملكية الفكرية الخاصة بك قد انتهكت من خلال محتوى على خدمتنا، يرجى الاتصال بنا فورًا على barcode@chdaoai.com مع:',
      intellectualPropertyReportingItems: [
        'وصف تفصيلي للمحتوى الذي يُزعم أنه ينتهك.',
        'إثبات ملكيتك للملكية الفكرية.',
        'معلومات الاتصال الخاصة بك والتفويض للعمل.',
        'بيان اعتقاد حسن النية بالانتهاك.',
      ],
      intellectualPropertyContactTitle: 'اتصل بنا',
      intellectualPropertyContactDesc:
        'للاستفسارات حول الملكية الفكرية أو طلبات الترخيص أو للإبلاغ عن الانتهاك، يرجى الاتصال بنا على barcode@chdaoai.com. نحن ملتزمون بحماية حقوق الملكية الفكرية وسنتعامل مع جميع المخاوف المشروعة بسرعة ومهنية.',
    },
    barcode: {
      generator: 'مولد الباركود',
      bulkGenerator: 'توليد دفعات',
      barcodeType: 'نوع الباركود',
      size: 'الحجم',
      textColor: 'لون النص',
      background: 'لون الخلفية',
      format: 'التنسيق',
      barcodeData: 'بيانات الباركود',
      onePerLine: '(واحد في كل سطر، حد أقصى 50)',
      itemLabel: 'باركود',
      itemsLabel: 'باركود',
      placeholder: 'أدخل القيم، سطر لكل باركود',
      placeholderExample: 'مثال:\n1234567890128\nHELLO123\nhttps://example.com',
      generate: 'توليد الباركود',
      download: 'تنزيل',
      downloadZIP: 'تنزيل ZIP',
      downloadPDF: 'تنزيل PDF',
      downloadReady: 'ملف ZIP جاهز ويمكن تنزيله في أي وقت.',
      downloadGeneratedZip: 'تحميل الملف المضغوط',
      downloadCsvTemplate: 'تحميل قالب CSV',
      downloadExcelTemplate: 'تحميل قالب Excel',
      templateDescription: 'استخدم هذه القوالب لإعداد قائمتك بسرعة.',
      preview: 'معاينة',
      clearAll: 'مسح الكل',
      uploadFile: 'ارفع ملف CSV أو Excel',
      clickUpload: 'انقر أو اسحب الملف للرفع',
      fileTypes: 'CSV, XLSX, XLS (حتى 10MB)',
      tip: 'ملاحظة:',
      tipDesc: 'كل خلية تتحول إلى باركود؛ اسم الملف هو نفس القيمة.',
      generating: 'جاري التوليد...',
      processing: 'جاري المعالجة...',
      generated: 'تم التوليد',
      alerts: {
        noDataInput: 'يرجى إدخال قيمة واحدة على الأقل.',
        errorPrefix: 'خطأ في التوليد:',
        generateFirst: 'يرجى توليد الباركود أولًا.',
        fileRequired: 'الرجاء رفع ملف CSV أو Excel.',
        noDataFound: 'لم يتم العثور على بيانات صالحة.',
        success: 'تم التوليد بنجاح',
        processingError: 'حدث خطأ أثناء المعالجة:',
        downloadStarted: 'بدأ التنزيل.',
      },
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      contact: 'Контакты',
    },
    home: {
      title: 'Онлайн-генератор штрих-кодов',
      subtitle: 'Создавайте штрих-коды бесплатно. Поддержка множества типов и пакетного режима.',
      singleBarcode: 'Один штрих-код',
      bulkBarcode: 'Пакет штрих-кодов',
      recognizer: {
        uploadPrompt: 'Нажмите, чтобы загрузить изображение, или перетащите',
        uploadHint: 'Поддерживает PNG, JPEG',
        previewPlaceholder: 'Предпросмотр появится здесь после загрузки',
        resultsTitle: 'Результаты распознавания',
        noResults: 'Нет результатов',
        browserNotSupport: 'Браузер не поддерживает BarcodeDetector; используется резервная библиотека',
        browserSuggest: 'Для лучшего результата используйте последние версии Chrome или Edge',
        fallbackError: 'Ошибка распознавания с резервной библиотекой',
        detectError: 'Ошибка распознавания: ',
        typeLabel: 'Тип',
        valueLabel: 'Значение',
      },
    },
    footer: {
      description: 'Бесплатный генератор штрих-кодов с поддержкой различных форматов и пакетной генерации.',
      legal: 'Правовая информация',
      contact: 'Контакты',
      email: 'Email',
      address: 'Адрес',
      copyright: 'Все права защищены.',
      title: 'Генератор штрих-кодов',
      legalNext: 'Политики',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      refund: 'Политика возврата',
      disclaimer: 'Отказ от ответственности',
      copyrightNotice: 'Авторские права',
      legalNotice: 'Юридическое уведомление',
      intellectualProperty: 'Интеллектуальная собственность',
      contactTitle: 'Свяжитесь с нами',
      addressDetail: '130 Longhua Avenue, район Лунхуа, Шэньчжэнь, Китай',
    },
    features: {
      heading: 'Возможности',
      cards: [
        { icon: '📊', title: 'Много типов', description: 'Code128, Code39, EAN-13, UPC-A, QR и другие.' },
        { icon: '📏', title: 'Гибкий размер', description: 'От 100 до 1000 пикселей под любую задачу.' },
        { icon: '🎨', title: 'Настройка цветов', description: 'Цвет текста и фона под стиль бренда.' },
        { icon: '💾', title: 'Разные форматы', description: 'Экспорт PNG, JPEG или PDF.' },
        { icon: '📦', title: 'Пакетная генерация', description: 'До 50 кодов сразу или загрузка CSV/Excel.' },
        { icon: '🆓', title: 'Полностью бесплатно', description: 'Без ограничений и регистрации.' },
      ],
    },
    help: {
      heading: 'Как использовать',
      singleTitle: 'Одиночная генерация',
      singleSteps: [
        'Выберите тип штрих-кода.',
        'Настройте размер (100–1000 px).',
        'Задайте цвета текста и фона.',
        'Выберите формат (PNG, JPEG или PDF).',
        'Введите данные (по строке на код, максимум 50).',
        'Нажмите «Сгенерировать», чтобы увидеть превью.',
        'Скачайте один код или все сразу (ZIP/PDF).',
      ],
      bulkTitle: 'Пакетная генерация',
      bulkSteps: [
        'Настройте параметры кодов.',
        'Загрузите файл CSV/Excel со значениями.',
        'Каждая ячейка станет отдельным штрих-кодом.',
        'Нажмите «Сгенерировать», чтобы начать.',
        'Скачайте ZIP с изображениями.',
        'Имена файлов совпадают со значениями кодов.',
      ],
      tipsTitle: 'Подсказки',
      tips: [
        'QR-коды подходят для текста и ссылок.',
        'EAN-13 и UPC-A требуют строгой длины.',
        'Code128/Code39 поддерживают буквы и цифры.',
        'Большие файлы обрабатываются дольше.',
        'Имя файла = значение штрих-кода.',
      ],
    },
    examples: {
      heading: 'Примеры',
      items: [
        { type: 'Code128', data: 'PRIMER123', description: 'Алфавитно-цифровой код для товаров.' },
        { type: 'EAN-13', data: '1234567890128', description: '13-значный код для розницы.' },
        { type: 'QR Code', data: 'https://barcode.chdaoai.com', description: 'QR-код для ссылок.' },
        { type: 'UPC-A', data: '012345678905', description: '12-значный код для рынка США.' },
      ],
    },
    feedback: {
      heading: 'Обратная связь',
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение',
      submit: 'Отправить',
      success: 'Спасибо за отзыв!',
      description: 'Мы внимательно относимся к каждому предложению.',
    },
    about: {
      title: 'О сервисе',
      subtitle: 'Профессиональные решения для генерации штрих-кодов',
      whoWeAre: 'Кто мы',
      whoWeAreDesc1: 'Мы создаём бесплатный, удобный и надёжный генератор для пользователей по всему миру.',
      whoWeAreDesc2: 'Помогаем создавать как единичные коды, так и тысячи штрих-кодов быстро и точно.',
      mission: 'Наша миссия',
      missionDesc: 'Сделать профессиональные инструменты доступными бесплатно и без сложностей.',
      innovation: 'Инновации',
      innovationDesc: 'Постоянно улучшаем функциональность.',
      quality: 'Качество',
      qualityDesc: 'Высокая точность и стабильность.',
      accessibility: 'Доступность',
      accessibilityDesc: 'Инструменты для всех пользователей.',
      whatWeOffer: 'Что мы предлагаем',
      multipleTypes: 'Разные типы',
      multipleTypesDesc: 'Code128, Code39, EAN-13, UPC-A, QR и др.',
      customizable: 'Гибкие настройки',
      customizableDesc: 'Размер, цвета и формат под ваш сценарий.',
      bulkGen: 'Пакетный режим',
      bulkGenDesc: 'До 50 кодов или импорт CSV/Excel.',
      multipleFormats: 'Несколько форматов',
      multipleFormatsDesc: 'PNG, JPEG, PDF.',
      freeUnlimited: 'Бесплатно и без лимитов',
      freeUnlimitedDesc: 'Без подписок и ограничений.',
      fastReliable: 'Быстро и надёжно',
      fastReliableDesc: 'Высокая скорость и доступность.',
      ourTeam: 'Наша команда',
      ourTeamDesc: 'Специалисты из разных областей, объединённых общей целью.',
      contactInfo: 'Контакты',
      email: 'Email',
      address: 'Адрес',
      teamMembers: [
        { role: 'Ведущий разработчик', department: 'Технологии', description: '8+ лет опыта в вебе и штрих-кодах.' },
        { role: 'Продуктовый менеджер', department: 'Продукт', description: 'Отвечает за удобство и эффективность.' },
        { role: 'Дизайнер UI/UX', department: 'Дизайн', description: 'Создаёт современные и понятные интерфейсы.' },
        { role: 'QA-специалист', department: 'Качество', description: 'Следит за стабильностью сервиса.' },
        { role: 'Backend-инженер', department: 'Инфраструктура', description: 'Строит масштабируемые системы.' },
        { role: 'Маркетолог', department: 'Рост', description: 'Привлекает и удерживает пользователей.' },
      ],
    },
    contact: {
      title: 'Связаться с нами',
      subtitle: 'Есть вопрос или идея? Пишите!',
      emailUs: 'Написать нам',
      emailDesc: 'Обычно отвечаем в течение 24 часов.',
      visitUs: 'Наш адрес',
      visitDesc: 'Офис в техно-кластере Шэньчжэня.',
      businessHours: 'Время работы',
      businessHoursContent: 'Пн–Пт: 9:00–18:00 (CST)',
      businessHoursDesc: 'Вне графика отправьте письмо — ответим при первой возможности.',
      sendMessage: 'Отправить сообщение',
      sendMessageDesc: 'Заполните форму — мы свяжемся с вами.',
      yourName: 'Имя',
      emailAddress: 'Email',
      subject: 'Тема',
      message: 'Сообщение',
      sendButton: 'Отправить',
      sentButton: 'Сообщение отправлено! ✓',
      thankYou: 'Спасибо! Ответим в течение 24 часов.',
      whyContact: 'Почему обращаться к нам?',
      techSupport: 'Техподдержка',
      techSupportDesc: 'Поможем разобраться с генератором.',
      businessInquiries: 'Сотрудничество',
      businessInquiriesDesc: 'Готовы обсудить партнёрства и решения.',
      feedback: 'Предложения',
      feedbackDesc: 'Расскажите, что можно улучшить.',
      reportIssues: 'Сообщить о проблеме',
      reportIssuesDesc: 'Дайте знать, если заметили баг.',
      faq: 'FAQ',
      faq1Q: 'Когда ждать ответ?',
      faq1A: 'В течение 24 часов в рабочие дни.',
      faq2Q: 'Есть ли техподдержка?',
      faq2A: 'Да, помощь бесплатна для всех.',
      faq3Q: 'Могу ли я запросить функцию?',
      faq3A: 'Конечно! Напишите через форму.',
      responseTime: 'Скорость ответа',
      responseTimeDesc: 'Ответ обычно в течение суток.',
      urgentNote: 'Срочно? Добавьте «СРОЧНО» в теме.',
    },
    legal: {
      privacyTitle: 'Политика конфиденциальности',
      privacyIntroTitle: 'Введение',
      privacyIntroDesc:
        'Мы уважаем вашу конфиденциальность и обязуемся защищать ваши персональные данные. Эта политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при использовании нашего сервиса генерации штрих-кодов.',
      privacyCollectTitle: 'Информация, которую мы собираем',
      privacyCollectDesc: 'Мы можем собирать следующие типы информации:',
      privacyCollectItems: [
        'Информация, которую вы предоставляете при обращении к нам (имя, электронная почта, сообщение).',
        'Данные об использовании и аналитика для улучшения нашего сервиса.',
        'Данные штрих-кодов, которые вы генерируете (обрабатываются локально в вашем браузере).',
        'Информация об устройстве, такая как тип браузера, операционная система и разрешение экрана.',
        'IP-адрес и общие данные о местоположении для целей безопасности и аналитики.',
      ],
      privacyUseTitle: 'Как мы используем вашу информацию',
      privacyUseDesc: 'Мы используем собранную информацию для:',
      privacyUseItems: [
        'Предоставления и улучшения нашего сервиса генерации штрих-кодов.',
        'Ответа на ваши запросы и отзывы.',
        'Анализа моделей использования для улучшения пользовательского опыта.',
        'Обеспечения безопасности и целостности нашего сервиса.',
        'Соблюдения правовых обязательств и защиты наших прав.',
      ],
      privacySecurityTitle: 'Безопасность данных',
      privacySecurityDesc:
        'Мы применяем соответствующие меры безопасности для защиты вашей личной информации. Вся генерация штрих-кодов обрабатывается локально в вашем браузере, и мы не храним данные ваших штрих-кодов на наших серверах. Мы используем шифрование и протоколы безопасности, соответствующие отраслевым стандартам, для защиты любых данных, которые мы собираем.',
      privacyCookiesTitle: 'Файлы cookie и технологии отслеживания',
      privacyCookiesDesc:
        'Мы можем использовать файлы cookie и аналогичные технологии отслеживания для улучшения вашего опыта, анализа моделей использования и предоставления персонализированного контента. Вы можете управлять настройками файлов cookie через настройки вашего браузера. Некоторые функции могут работать некорректно, если файлы cookie отключены.',
      privacyThirdPartyTitle: 'Сервисы третьих сторон',
      privacyThirdPartyDesc:
        'Наш сервис может интегрироваться с аналитическими и рекламными сервисами третьих сторон (такими как Google Analytics и Google AdSense), которые могут собирать информацию о вашем использовании нашего веб-сайта. Эти сервисы имеют свои собственные политики конфиденциальности, и мы рекомендуем вам ознакомиться с ними.',
      privacyUserRightsTitle: 'Ваши права',
      privacyUserRightsDesc:
        'Вы имеете право на доступ, обновление или удаление вашей личной информации. Вы также можете отказаться от определенных практик сбора данных. Для осуществления этих прав, пожалуйста, свяжитесь с нами по адресу barcode@chdaoai.com.',
      privacyDataRetentionTitle: 'Хранение данных',
      privacyDataRetentionDesc:
        'Мы храним личную информацию только в течение времени, необходимого для выполнения целей, изложенных в этой политике, если более длительный срок хранения не требуется по закону. Данные штрих-кодов, сгенерированные через наш сервис, обрабатываются локально и не хранятся на наших серверах.',
      privacyChildrenTitle: 'Конфиденциальность детей',
      privacyChildrenDesc:
        'Наш сервис не предназначен для детей младше 13 лет. Мы не собираем намеренно личную информацию от детей. Если вы считаете, что мы случайно собрали такую информацию, пожалуйста, немедленно свяжитесь с нами.',
      privacyChangesTitle: 'Изменения в этой политике',
      privacyChangesDesc:
        'Мы можем время от времени обновлять эту политику конфиденциальности. Мы уведомим вас о любых существенных изменениях, разместив новую политику на этой странице и обновив дату "Последнее обновление". Ваше continued использование нашего сервиса после таких изменений означает принятие обновленной политики.',
      privacyContactTitle: 'Свяжитесь с нами',
      privacyContactDesc:
        'Если у вас есть вопросы об этой политике конфиденциальности, пожалуйста, свяжитесь с нами по адресу barcode@chdaoai.com.',

      termsTitle: 'Условия использования',
      termsUpdated: 'Последнее обновление',
      termsAcceptanceTitle: 'Принятие условий',
      termsAcceptanceDesc:
        'Получая доступ и используя наш сервис генерации штрих-кодов, вы принимаете и соглашаетесь быть связанными этими Условиями использования. Если вы не согласны с этими условиями, пожалуйста, не используйте наш сервис.',
      termsUseTitle: 'Использование сервиса',
      termsUseDesc:
        'Вы можете использовать наш сервис для генерации штрих-кодов в личных или коммерческих целях. Вы соглашаетесь не использовать сервис для любых незаконных или несанкционированных целей, включая, но не ограничиваясь:',
      termsUseItems: [
        'Генерация штрих-кодов для поддельных продуктов или мошеннической деятельности.',
        'Нарушение любых применимых законов или правил.',
        'Нарушение прав интеллектуальной собственности.',
        'Передача вредоносного кода или вредоносного контента.',
        'Попытка нарушить или скомпрометировать безопасность сервиса.',
      ],
      termsUserAccountTitle: 'Учетные записи пользователей',
      termsUserAccountDesc:
        'В настоящее время наш сервис не требует регистрации пользователя. Однако, если мы введем функции учетной записи в будущем, вы несете ответственность за сохранение конфиденциальности учетных данных вашей учетной записи и за все действия, происходящие под вашей учетной записью.',
      termsIntellectualPropertyTitle: 'Интеллектуальная собственность',
      termsIntellectualPropertyDesc:
        'Весь контент, функции и функциональность нашего сервиса, включая, но не ограничиваясь текстом, графикой, логотипами и программным обеспечением, принадлежат нам или нашим лицензиарам и защищены законами об авторском праве, товарных знаках и других законах об интеллектуальной собственности. Вы не можете воспроизводить, распространять или создавать производные работы без нашего явного письменного разрешения.',
      termsUserContentTitle: 'Контент, созданный пользователем',
      termsUserContentDesc:
        'Вы сохраняете право собственности на любые штрих-коды, которые вы генерируете с помощью нашего сервиса. Однако, используя наш сервис, вы предоставляете нам неисключительную, безвозмездную лицензию на использование, отображение и анализ агрегированных данных об использовании для целей улучшения сервиса.',
      termsAvailabilityTitle: 'Доступность сервиса',
      termsAvailabilityDesc:
        'Мы стремимся предоставить надежный сервис, но не гарантируем бесперебойную или безошибочную работу. Мы оставляем за собой право изменять, приостанавливать или прекращать сервис в любое время без предварительного уведомления. Мы не несем ответственности за любые потери или ущерб, возникшие в результате перерывов в работе сервиса.',
      termsModificationsTitle: 'Изменения сервиса',
      termsModificationsDesc:
        'Мы оставляем за собой право изменять, обновлять или прекращать любой аспект нашего сервиса в любое время. Мы также можем налагать ограничения на определенные функции или ограничивать доступ к частям сервиса без уведомления или ответственности.',
      termsLiabilityTitle: 'Ограничение ответственности',
      termsLiabilityDesc:
        'Мы не несем ответственности за любые прямые, косвенные, случайные, особые или косвенные убытки, возникающие в результате использования или невозможности использования нашего сервиса. Сервис предоставляется "как есть" без гарантий любого рода, явных или подразумеваемых, включая, но не ограничиваясь гарантиями товарности, пригодности для определенной цели или отсутствия нарушений.',
      termsIndemnificationTitle: 'Возмещение ущерба',
      termsIndemnificationDesc:
        'Вы соглашаетесь возместить и оградить нас от любых претензий, ущерба, потерь, обязательств и расходов (включая судебные издержки), возникающих в результате вашего использования сервиса, нарушения этих условий или нарушения любых прав другой стороны.',
      termsTerminationTitle: 'Прекращение',
      termsTerminationDesc:
        'Мы оставляем за собой право немедленно прекратить или приостановить ваш доступ к нашему сервису без предварительного уведомления по любой причине, включая нарушение этих условий. При прекращении ваше право на использование сервиса немедленно прекращается.',
      termsGoverningLawTitle: 'Применимое право',
      termsGoverningLawDesc:
        'Эти Условия использования регулируются и толкуются в соответствии с законами Китайской Народной Республики, без учета положений о коллизии законов. Любые споры, возникающие из этих условий, подлежат исключительной юрисдикции судов в Шэньчжэне, Китай.',
      termsDisputeResolutionTitle: 'Разрешение споров',
      termsDisputeResolutionDesc:
        'В случае возникновения любого спора, возникающего из или связанного с этими условиями, мы рекомендуем вам сначала связаться с нами, чтобы найти дружественное решение. Если спор не может быть разрешен путем прямого общения, он будет разрешен путем обязательного арбитража в соответствии с применимыми правилами арбитража.',
      termsSeverabilityTitle: 'Разделимость',
      termsSeverabilityDesc:
        'Если какое-либо положение этих условий признано неисполнимым или недействительным, это положение будет ограничено или устранено в минимальной степени, необходимой, а оставшиеся положения останутся в полной силе и действии.',
      termsContactTitle: 'Свяжитесь с нами',
      termsContactDesc:
        'По вопросам об этих условиях, пожалуйста, свяжитесь с нами по адресу barcode@chdaoai.com.',

      refundTitle: 'Политика возврата',
      refundIntroTitle: 'Введение',
      refundIntroDesc:
        'Эта политика возврата описывает условия и положения относительно возвратов для любых платных услуг, которые мы можем предложить в будущем. В настоящее время наш сервис генерации штрих-кодов предоставляется бесплатно.',
      refundFreeServiceTitle: 'Бесплатный сервис',
      refundFreeServiceDesc:
        'Наш сервис генерации штрих-кодов в настоящее время предоставляется бесплатно всем пользователям. Таким образом, нет платежей для возврата. Все функции, включая генерацию одного штрих-кода, массовую генерацию и множественные форматы экспорта, доступны бесплатно.',
      refundFuturePaidTitle: 'Будущие платные услуги',
      refundFuturePaidDesc:
        'Если мы введем платные услуги, подписки или премиум-функции в будущем, будет применяться следующая политика возврата:',
      refundFuturePaidItems: [
        'Запросы на возврат должны быть поданы в течение 30 дней с момента покупки.',
        'Возвраты будут обработаны на исходный способ оплаты в течение 7-14 рабочих дней.',
        'Возвраты могут быть пропорциональными для услуг подписки на основе неиспользованного времени.',
        'Мы оставляем за собой право отказать в возврате для услуг, которые были значительно использованы или злоупотреблены.',
      ],
      refundEligibilityTitle: 'Право на возврат',
      refundEligibilityDesc:
        'Возвраты могут быть предоставлены в следующих обстоятельствах:',
      refundEligibilityItems: [
        'Неисправность сервиса или невыполнение обещанных функций.',
        'Дублирующие или случайные платежи.',
        'Отмена подписки в течение периода возврата.',
        'Технические проблемы, препятствующие доступу к сервису, которые не могут быть решены.',
      ],
      refundNonEligibleTitle: 'Невозвратные элементы',
      refundNonEligibleDesc:
        'Следующие элементы, как правило, не подлежат возврату:',
      refundNonEligibleItems: [
        'Услуги, использованные после периода возврата.',
        'Запросы на возврат из-за ошибки пользователя или непонимания функций сервиса.',
        'Услуги, прекращенные из-за нарушения Условий использования.',
        'Индивидуальные или персонализированные услуги, которые были доставлены.',
      ],
      refundProcessTitle: 'Процесс возврата',
      refundProcessDesc:
        'Чтобы запросить возврат, пожалуйста, свяжитесь с нами по адресу barcode@chdaoai.com со следующей информацией:',
      refundProcessItems: [
        'Ваш email учетной записи или ID транзакции.',
        'Дата покупки и способ оплаты.',
        'Причина запроса на возврат.',
        'Любая соответствующая документация или скриншоты.',
      ],
      refundProcessingTimeTitle: 'Время обработки',
      refundProcessingTimeDesc:
        'Запросы на возврат будут рассмотрены в течение 5-7 рабочих дней. После одобрения возвраты будут обработаны на ваш исходный способ оплаты в течение 7-14 рабочих дней. Время обработки может варьироваться в зависимости от вашего платежного провайдера.',
      refundContactTitle: 'Свяжитесь с нами',
      refundContactDesc:
        'По вопросам о возвратах или для подачи запроса на возврат, пожалуйста, свяжитесь с нами по адресу barcode@chdaoai.com. Мы обязуемся справедливо и быстро решать вопросы возврата.',

      disclaimerTitle: 'Отказ от ответственности',
      disclaimerIntroTitle: 'Введение',
      disclaimerIntroDesc:
        'Этот отказ от ответственности устанавливает общие руководящие принципы, отказы и условия использования для нашего сервиса генерации штрих-кодов. Используя наш сервис, вы признаете, что прочитали, поняли и соглашаетесь быть связанными этим отказом от ответственности.',
      disclaimerNoWarrantyTitle: 'Без гарантий',
      disclaimerNoWarrantyDesc:
        'Наш сервис генерации штрих-кодов предоставляется "как есть" и "как доступно" без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем, что сервис будет бесперебойным, безошибочным, безопасным или будет соответствовать вашим конкретным требованиям. Мы отказываемся от всех гарантий, включая, но не ограничиваясь:',
      disclaimerNoWarrantyItems: [
        'Гарантии товарности или пригодности для определенной цели.',
        'Гарантии относительно точности, надежности или полноты сгенерированных штрих-кодов.',
        'Гарантии того, что сервис будет доступен в любое время или без дефектов.',
        'Гарантии относительно сервисов третьих сторон или интеграций.',
      ],
      disclaimerAccuracyTitle: 'Точность штрих-кодов',
      disclaimerAccuracyDesc:
        'Хотя мы стремимся генерировать точные и сканируемые штрих-коды, используя стандартные алгоритмы отрасли, мы не можем гарантировать, что все сгенерированные штрих-коды будут сканируемы всеми устройствами или будут соответствовать конкретным отраслевым стандартам. Пользователи несут единоличную ответственность за:',
      disclaimerAccuracyItems: [
        'Проверку точности и функциональности сгенерированных штрих-кодов перед использованием.',
        'Обеспечение соответствия штрих-кодов применимым отраслевым стандартам и правилам.',
        'Тестирование штрих-кодов с их предполагаемыми сканирующими устройствами.',
        'Проверку данных штрих-кодов на правильность и полноту.',
      ],
      disclaimerLiabilityTitle: 'Ограничение ответственности',
      disclaimerLiabilityDesc:
        'В максимальной степени, разрешенной законом, мы не несем ответственности за любые прямые, косвенные, случайные, особые, косвенные или штрафные убытки, возникающие в результате:',
      disclaimerLiabilityItems: [
        'Использования или невозможности использования нашего сервиса.',
        'Ошибок, упущений или неточностей в сгенерированных штрих-кодах.',
        'Потери данных, прибыли или деловых возможностей.',
        'Несанкционированного доступа к вашим данным или их изменения.',
        'Сервисов третьих сторон или контента, доступ к которому осуществляется через наш сервис.',
      ],
      disclaimerThirdPartyTitle: 'Сервисы третьих сторон',
      disclaimerThirdPartyDesc:
        'Наш сервис может интегрироваться с или ссылаться на сервисы, веб-сайты или приложения третьих сторон. Мы не несем ответственности за контент, практики конфиденциальности или условия обслуживания этих третьих сторон. Ваши взаимодействия с сервисами третьих сторон происходят исключительно между вами и третьей стороной.',
      disclaimerUseAtOwnRiskTitle: 'Использование на свой риск',
      disclaimerUseAtOwnRiskDesc:
        'Вы используете наш сервис на свой риск. Мы не несем ответственности за любые последствия, возникающие в результате использования сгенерированных штрих-кодов, включая, но не ограничиваясь:',
      disclaimerUseAtOwnRiskItems: [
        'Ошибки идентификации продуктов или неправильная маркировка.',
        'Проблемы управления запасами.',
        'Нарушения соответствия или нормативные проблемы.',
        'Финансовые потери или сбои в бизнесе.',
      ],
      disclaimerModificationsTitle: 'Изменения сервиса',
      disclaimerModificationsDesc:
        'Мы оставляем за собой право изменять, приостанавливать или прекращать любой аспект нашего сервиса в любое время без предварительного уведомления. Мы не несем ответственности за любые неудобства или потери, возникающие в результате таких изменений или прекращений.',
      disclaimerJurisdictionTitle: 'Юрисдикция',
      disclaimerJurisdictionDesc:
        'Этот отказ от ответственности регулируется законами Китайской Народной Республики. Любые споры, возникающие из этого отказа от ответственности, подлежат исключительной юрисдикции судов в Шэньчжэне, Китай.',
      disclaimerContactTitle: 'Свяжитесь с нами',
      disclaimerContactDesc:
        'По вопросам об этом отказе от ответственности, пожалуйста, свяжитесь с нами по адресу barcode@chdaoai.com. Мы обязуемся предоставлять прозрачную информацию о нашем сервисе и решать любые проблемы, которые могут у вас возникнуть.',

      copyrightTitle: 'Уведомление об авторских правах',
      copyrightIntroTitle: 'Введение',
      copyrightIntroDesc:
        'Это уведомление об авторских правах описывает права собственности и использования контента, дизайна и функциональности нашего сервиса генерации штрих-кодов. Используя наш сервис, вы признаете и соглашаетесь соблюдать эти защиты авторских прав.',
      copyrightOwnershipTitle: 'Права собственности на авторские права',
      copyrightOwnershipDesc:
        'Весь контент, дизайн и функциональность этого веб-сайта и сервиса, включая, но не ограничиваясь следующим, являются исключительной собственностью Barcode Generator и защищены законами об авторских правах:',
      copyrightOwnershipItems: [
        'Дизайн веб-сайта, макет, графика, логотипы и визуальные элементы.',
        'Код программного обеспечения, алгоритмы и технические реализации.',
        'Документация, справочный текст и руководства пользователя.',
        'Названия брендов, знаки обслуживания и коммерческий вид.',
        'Компиляции, базы данных и агрегированный контент.',
      ],
      copyrightUserContentTitle: 'Контент, созданный пользователем',
      copyrightUserContentDesc:
        'Штрих-коды, созданные с помощью нашего сервиса, создаются пользователями и принадлежат исключительно пользователям, которые их создали. Мы не претендуем на право собственности, авторские права или любые права интеллектуальной собственности на штрих-коды, созданные пользователями. Пользователи свободны использовать, распространять и коммерциализировать свои созданные штрих-коды по своему усмотрению.',
      copyrightPermittedUseTitle: 'Разрешенное использование',
      copyrightPermittedUseDesc:
        'Вам предоставляется ограниченная, неисключительная, непередаваемая лицензия на использование нашего сервиса для создания штрих-кодов в личных или коммерческих целях, при соблюдении следующих условий:',
      copyrightPermittedUseItems: [
        'Вы можете использовать созданные штрих-коды для любых законных целей.',
        'Вы можете загружать и сохранять созданные штрих-коды для своего использования.',
        'Вы можете делиться созданными штрих-кодами с другими.',
        'Вы можете использовать созданные штрих-коды в коммерческих продуктах или услугах.',
      ],
      copyrightProhibitedUseTitle: 'Запрещенное использование',
      copyrightProhibitedUseDesc:
        'Следующие действия строго запрещены без нашего явного письменного разрешения:',
      copyrightProhibitedUseItems: [
        'Воспроизведение, копирование или дублирование нашего веб-сайта или сервиса.',
        'Создание производных работ на основе нашего сервиса или дизайна веб-сайта.',
        'Обратная инженерия, декомпиляция или дизассемблирование нашего программного обеспечения.',
        'Удаление, изменение или сокрытие уведомлений об авторских правах или проприетарных маркировок.',
        'Использование нашего сервиса для создания конкурирующих сервисов или продуктов.',
        'Скрапинг, краулинг или автоматизированное извлечение данных из нашего сервиса.',
      ],
      copyrightThirdPartyTitle: 'Контент третьих сторон',
      copyrightThirdPartyDesc:
        'Наш сервис может включать или ссылаться на контент, библиотеки или программное обеспечение третьих сторон. Такой контент остается собственностью соответствующих владельцев и подчиняется их собственным условиям авторских прав и лицензирования. Мы уважаем все права интеллектуальной собственности третьих сторон.',
      copyrightInfringementTitle: 'Нарушение авторских прав',
      copyrightInfringementDesc:
        'Если вы считаете, что какой-либо контент на нашем веб-сайте или сервисе нарушает ваши авторские права, немедленно свяжитесь с нами по адресу barcode@chdaoai.com со следующей информацией:',
      copyrightInfringementItems: [
        'Описание произведения, защищенного авторским правом, которое, по вашему утверждению, было нарушено.',
        'Местоположение предположительно нарушающего материала в нашем сервисе.',
        'Ваша контактная информация, включая имя, адрес и электронную почту.',
        'Заявление о том, что вы добросовестно полагаете, что использование не разрешено.',
        'Заявление о том, что информация точна и вы уполномочены действовать от имени владельца авторских прав.',
      ],
      copyrightDMCATitle: 'Соответствие DMCA',
      copyrightDMCADesc:
        'Мы соблюдаем применимые законы об авторских правах и быстро отреагируем на действительные уведомления об удалении DMCA. После получения действительного уведомления мы удалим или отключим доступ к предположительно нарушающему контенту и уведомим пользователя, который его опубликовал.',
      copyrightContactTitle: 'Свяжитесь с нами',
      copyrightContactDesc:
        'По вопросам авторских прав, запросам на лицензирование или для сообщения о нарушении авторских прав, свяжитесь с нами по адресу barcode@chdaoai.com. Мы стремимся защищать права интеллектуальной собственности и быстро рассмотрим все законные проблемы.',

      legalNoticeTitle: 'Юридическое уведомление',
      legalNoticeIntroTitle: 'Введение',
      legalNoticeIntroDesc:
        'Это юридическое уведомление предоставляет важную информацию о нашей компании, сервисе и юридических обязательствах. Оно служит официальным заявлением о нашей коммерческой идентичности, контактной информации и юридических обязанностях в соответствии с применимыми законами.',
      legalNoticeCompanyTitle: 'Информация о компании',
      legalNoticeCompanyDesc:
        'Следующая информация предоставляется в соответствии с применимыми юридическими требованиями:',
      legalNoticeCompanyName: 'Barcode Generator',
      legalNoticeCompanyAddress: '130 Longhua Avenue, район Longhua, Шэньчжэнь, Китай',
      legalNoticeContactInfoTitle: 'Контактная информация',
      legalNoticeContactInfoDesc:
        'Для запросов, поддержки или юридических вопросов вы можете связаться с нами через следующие каналы:',
      legalNoticeContactEmail: 'Электронная почта: barcode@chdaoai.com',
      legalNoticeContactAddress: 'Адрес: 130 Longhua Avenue, район Longhua, Шэньчжэнь, Китай',
      legalNoticeResponsibleTitle: 'Ответственный за контент',
      legalNoticeResponsibleDesc:
        'Контент нашего веб-сайта был создан с максимальной осторожностью и усердием. Однако мы не можем гарантировать абсолютную точность, полноту или своевременность всей информации. Мы оставляем за собой право изменять, обновлять или удалять контент в любое время без предварительного уведомления.',
      legalNoticeLiabilityLinksTitle: 'Ответственность за ссылки',
      legalNoticeLiabilityLinksDesc:
        'Наш веб-сайт может содержать ссылки на внешние веб-сайты, управляемые третьими сторонами. Мы не контролируем контент, практики конфиденциальности или условия обслуживания этих внешних сайтов. Мы не несем ответственности за:',
      legalNoticeLiabilityLinksItems: [
        'Контент, точность или законность внешних веб-сайтов.',
        'Любой ущерб или убытки, возникшие в результате посещения внешних ссылок.',
        'Практики конфиденциальности или сбор данных сторонними сайтами.',
        'Продукты, услуги или информация, предлагаемые на внешних сайтах.',
      ],
      legalNoticeCopyrightTitle: 'Авторские права',
      legalNoticeCopyrightDesc:
        'Контент и работы на этом веб-сайте подлежат закону об авторских правах. Воспроизведение, обработка, распространение и любая форма коммерциализации требуют письменного согласия соответствующего автора или создателя. Несанкционированное использование может привести к судебному разбирательству.',
      legalNoticeTrademarksTitle: 'Товарные знаки',
      legalNoticeTrademarksDesc:
        'Все товарные знаки, знаки обслуживания и торговые наименования, используемые на этом веб-сайте, являются собственностью их соответствующих владельцев. Использование наших товарных знаков, включая "Barcode Generator" и связанные знаки, требует нашего предварительного письменного согласия. Несанкционированное использование наших товарных знаков запрещено.',
      legalNoticeGoverningLawTitle: 'Применимое право',
      legalNoticeGoverningLawDesc:
        'Это юридическое уведомление и все вопросы, связанные с нашим сервисом, регулируются законами Китайской Народной Республики. Любые юридические споры подлежат исключительной юрисдикции судов в Шэньчжэне, Китай.',
      legalNoticeUpdatesTitle: 'Обновления юридического уведомления',
      legalNoticeUpdatesDesc:
        'Мы оставляем за собой право обновлять это юридическое уведомление в любое время, чтобы отражать изменения в нашем сервисе, юридических требованиях или деловой практике. Пользователям рекомендуется периодически просматривать это уведомление. Продолжение использования нашего сервиса после изменений означает принятие обновленного уведомления.',
      legalNoticeContactTitle: 'Свяжитесь с нами',
      legalNoticeContactDesc:
        'По вопросам этого юридического уведомления или любым юридическим вопросам, свяжитесь с нами по адресу barcode@chdaoai.com. Мы стремимся к прозрачности и быстро ответим на все законные запросы.',

      intellectualPropertyTitle: 'Заявление об интеллектуальной собственности',
      intellectualPropertyIntroTitle: 'Введение',
      intellectualPropertyIntroDesc:
        'Это заявление об интеллектуальной собственности описывает наши права собственности, политики и защиты в отношении товарных знаков, авторских прав, патентов, коммерческих секретов и других активов интеллектуальной собственности, связанных с нашим сервисом генерации штрих-кодов.',
      intellectualPropertyOwnershipTitle: 'Права собственности на интеллектуальную собственность',
      intellectualPropertyOwnershipDesc:
        'Все права интеллектуальной собственности в нашем сервисе генерации штрих-кодов, включая, но не ограничиваясь следующим, принадлежат Barcode Generator или нашим лицензиарам:',
      intellectualPropertyOwnershipItems: [
        'Товарные знаки, знаки обслуживания и торговые наименования, связанные с нашим брендом.',
        'Авторские права на код программного обеспечения, алгоритмы и техническую документацию.',
        'Патенты или заявки на патенты, связанные с нашей технологией (если таковые имеются).',
        'Коммерческие секреты, проприетарные алгоритмы и конфиденциальная информация.',
        'Дизайн веб-сайта, пользовательский интерфейс и элементы пользовательского опыта.',
        'Бизнес-методы, процессы и операционные процедуры.',
      ],
      intellectualPropertyTrademarksTitle: 'Товарные знаки',
      intellectualPropertyTrademarksDesc:
        'Все товарные знаки, знаки обслуживания и торговые наименования, используемые на этом веб-сайте и в связи с нашим сервисом, являются собственностью их соответствующих владельцев. Наши товарные знаки включают, но не ограничиваются:',
      intellectualPropertyTrademarksItems: [
        '"Barcode Generator" и его варианты.',
        'Наш логотип и элементы идентичности бренда.',
        'Названия сервисов и идентификаторы продуктов.',
        'Слоганы и слоганы, связанные с нашим сервисом.',
      ],
      intellectualPropertyTrademarkUseTitle: 'Политика использования товарных знаков',
      intellectualPropertyTrademarkUseDesc:
        'Использование наших товарных знаков требует нашего предварительного письменного согласия. Несанкционированное использование наших товарных знаков строго запрещено и может привести к судебному разбирательству. Если вы хотите использовать наши товарные знаки, свяжитесь с нами по адресу barcode@chdaoai.com, чтобы запросить разрешение.',
      intellectualPropertyCopyrightTitle: 'Защита авторских прав',
      intellectualPropertyCopyrightDesc:
        'Весь оригинальный контент, код программного обеспечения, документация и творческие работы на нашем веб-сайте и сервисе защищены законом об авторских правах. Это включает:',
      intellectualPropertyCopyrightItems: [
        'Исходный код и реализации программного обеспечения.',
        'Дизайн и макет веб-сайта.',
        'Документация и руководства пользователя.',
        'Графика, изображения и визуальные элементы.',
        'Письменный контент и копия.',
      ],
      intellectualPropertyThirdPartyTitle: 'Интеллектуальная собственность третьих сторон',
      intellectualPropertyThirdPartyDesc:
        'Наш сервис использует библиотеки, программное обеспечение и технологии третьих сторон, которые подлежат их соответствующим лицензиям и правам интеллектуальной собственности. Мы уважаем всю интеллектуальную собственность третьих сторон и соблюдаем применимые лицензии, включая:',
      intellectualPropertyThirdPartyItems: [
        'Лицензии на программное обеспечение с открытым исходным кодом (MIT, Apache и т.д.).',
        'Лицензии и соглашения на коммерческое программное обеспечение.',
        'Условия и положения API третьих сторон.',
        'Лицензии на шрифты и ресурсы дизайна.',
      ],
      intellectualPropertyUserContentTitle: 'Контент, созданный пользователем',
      intellectualPropertyUserContentDesc:
        'Пользователи сохраняют все права интеллектуальной собственности на штрих-коды, которые они создают с помощью нашего сервиса. Мы не претендуем на право собственности, авторские права или любые права интеллектуальной собственности на контент, созданный пользователями. Пользователи свободны:',
      intellectualPropertyUserContentItems: [
        'Использовать созданные штрих-коды для любых законных целей.',
        'Регистрировать товарные знаки или авторские права на свои штрих-коды.',
        'Лицензировать или продавать свои созданные штрих-коды третьим сторонам.',
        'Изменять или создавать производные работы из своих штрих-кодов.',
      ],
      intellectualPropertyEnforcementTitle: 'Обеспечение прав',
      intellectualPropertyEnforcementDesc:
        'Мы серьезно относимся к правам интеллектуальной собственности и примем соответствующие юридические меры против любого нарушения нашей интеллектуальной собственности. Это может включать:',
      intellectualPropertyEnforcementItems: [
        'Выдачу уведомлений о прекращении и воздержании.',
        'Подачу исков о возмещении ущерба и судебных запретах.',
        'Сообщение о нарушениях соответствующим органам.',
        'Преследование уголовных обвинений за серьезные нарушения.',
      ],
      intellectualPropertyReportingTitle: 'Сообщение о нарушении',
      intellectualPropertyReportingDesc:
        'Если вы считаете, что ваши права интеллектуальной собственности были нарушены контентом в нашем сервисе, немедленно свяжитесь с нами по адресу barcode@chdaoai.com с:',
      intellectualPropertyReportingItems: [
        'Подробным описанием предположительно нарушающего контента.',
        'Доказательством вашего права собственности на интеллектуальную собственность.',
        'Вашей контактной информацией и полномочиями на действия.',
        'Заявлением о добросовестной вере в нарушение.',
      ],
      intellectualPropertyContactTitle: 'Свяжитесь с нами',
      intellectualPropertyContactDesc:
        'По вопросам интеллектуальной собственности, запросам на лицензирование или для сообщения о нарушении, свяжитесь с нами по адресу barcode@chdaoai.com. Мы стремимся защищать права интеллектуальной собственности и быстро и профессионально рассмотрим все законные проблемы.',
    },
    barcode: {
      generator: 'Генератор штрих-кодов',
      bulkGenerator: 'Пакетная генерация',
      barcodeType: 'Тип штрих-кода',
      size: 'Размер',
      textColor: 'Цвет текста',
      background: 'Фон',
      format: 'Формат',
      barcodeData: 'Данные',
      onePerLine: '(по одному на строку, максимум 50)',
      itemLabel: 'код',
      itemsLabel: 'кодов',
      placeholder: 'Введите значения (каждое с новой строки)',
      placeholderExample: 'Пример:\n1234567890128\nPRIMER123\nhttps://example.com',
      generate: 'Сгенерировать',
      download: 'Скачать',
      downloadZIP: 'Скачать ZIP',
      downloadPDF: 'Скачать PDF',
      downloadReady: 'ZIP готов. Скачайте в удобное время.',
      downloadGeneratedZip: 'Скачать созданный ZIP',
      downloadCsvTemplate: 'Шаблон CSV',
      downloadExcelTemplate: 'Шаблон Excel',
      templateDescription: 'Используйте шаблоны для быстрой подготовки списка.',
      preview: 'Предпросмотр',
      clearAll: 'Очистить всё',
      uploadFile: 'Загрузите файл CSV или Excel',
      clickUpload: 'Нажмите или перетащите файл',
      fileTypes: 'CSV, XLSX, XLS (до 10 МБ)',
      tip: 'Совет:',
      tipDesc: 'Каждая ячейка = отдельный код; имя файла совпадает со значением.',
      generating: 'Генерация...',
      processing: 'Обработка...',
      generated: 'создано',
      alerts: {
        noDataInput: 'Введите хотя бы одно значение.',
        errorPrefix: 'Ошибка генерации:',
        generateFirst: 'Сначала сгенерируйте коды.',
        fileRequired: 'Загрузите файл CSV или Excel.',
        noDataFound: 'Данные не найдены.',
        success: 'Успешно создано',
        processingError: 'Ошибка обработки:',
        downloadStarted: 'Загрузка началась.',
      },
    },
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre nós',
      contact: 'Contato',
    },
    home: {
      title: 'Gerador de códigos de barras online',
      subtitle: 'Crie códigos gratuitamente. Suporte para múltiplos tipos e geração em lote.',
      singleBarcode: 'Código individual',
      bulkBarcode: 'Códigos em lote',
      recognizer: {
        uploadPrompt: 'Clique para enviar imagem ou arraste e solte',
        uploadHint: 'Suporta PNG, JPEG',
        previewPlaceholder: 'A pré-visualização aparecerá aqui após o envio',
        resultsTitle: 'Resultados do reconhecimento',
        noResults: 'Sem resultados',
        browserNotSupport: 'Navegador não suporta BarcodeDetector; usando biblioteca alternativa',
        browserSuggest: 'Para melhores resultados use as versões mais recentes do Chrome ou Edge',
        fallbackError: 'Falha no reconhecimento com a biblioteca alternativa',
        detectError: 'Erro de detecção: ',
        typeLabel: 'Tipo',
        valueLabel: 'Valor',
      },
    },
    footer: {
      description: 'Gerador gratuito com suporte a diversos formatos e download em lote.',
      legal: 'Legal',
      contact: 'Contato',
      email: 'Email',
      address: 'Endereço',
      copyright: 'Todos os direitos reservados.',
      title: 'Gerador de códigos de barras',
      legalNext: 'Políticas',
      privacy: 'Política de privacidade',
      terms: 'Termos de uso',
      refund: 'Política de reembolso',
      disclaimer: 'Aviso legal',
      copyrightNotice: 'Direitos autorais',
      legalNotice: 'Aviso jurídico',
      intellectualProperty: 'Propriedade intelectual',
      contactTitle: 'Fale conosco',
      addressDetail: '130 Longhua Avenue, Distrito Longhua, Shenzhen, China',
    },
    features: {
      heading: 'Recursos principais',
      cards: [
        { icon: '📊', title: 'Vários tipos', description: 'Code128, Code39, EAN-13, UPC-A, QR Code e mais.' },
        { icon: '📏', title: 'Tamanho flexível', description: 'Ajuste entre 100px e 1000px.' },
        { icon: '🎨', title: 'Cores personalizadas', description: 'Defina as cores do texto e do fundo.' },
        { icon: '💾', title: 'Múltiplos formatos', description: 'Exporte PNG, JPEG ou PDF.' },
        { icon: '📦', title: 'Geração em lote', description: 'Até 50 códigos ou upload CSV/Excel.' },
        { icon: '🆓', title: 'Gratis sempre', description: 'Sem registro ou limites.' },
      ],
    },
    help: {
      heading: 'Como usar',
      singleTitle: 'Geração individual',
      singleSteps: [
        'Escolha o tipo de código.',
        'Ajuste o tamanho (100–1000 px).',
        'Selecione as cores de texto e fundo.',
        'Defina o formato (PNG, JPEG ou PDF).',
        'Digite os dados (um por linha, máx. 50).',
        'Clique em “Gerar códigos” para visualizar.',
        'Baixe individualmente ou tudo em ZIP/PDF.',
      ],
      bulkTitle: 'Geração em lote',
      bulkSteps: [
        'Configure tipo, tamanho, cores e formato.',
        'Envie um arquivo CSV ou Excel com os valores.',
        'Cada célula vira um código.',
        'Clique em “Gerar” para iniciar.',
        'Baixe o ZIP com todas as imagens.',
        'Os arquivos usam o valor do código como nome.',
      ],
      tipsTitle: 'Dicas',
      tips: [
        'QR Codes aceitam texto ou URLs.',
        'EAN-13 e UPC-A exigem comprimentos específicos.',
        'Code128/Code39 aceitam caracteres alfanuméricos.',
        'Arquivos grandes demoram mais.',
        'Os nomes dos arquivos seguem o conteúdo do código.',
      ],
    },
    examples: {
      heading: 'Exemplos',
      items: [
        { type: 'Code128', data: 'OLA123', description: 'Código alfanumérico para produtos.' },
        { type: 'EAN-13', data: '1234567890128', description: 'Código de 13 dígitos para varejo.' },
        { type: 'QR Code', data: 'https://barcode.chdaoai.com', description: 'Perfeito para links.' },
        { type: 'UPC-A', data: '012345678905', description: 'Código de 12 dígitos para o mercado dos EUA.' },
      ],
    },
    feedback: {
      heading: 'Feedback',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      submit: 'Enviar',
      success: 'Obrigado pelo feedback!',
      description: 'Conte suas ideias; valorizamos cada sugestão.',
    },
    about: {
      title: 'Sobre nós',
      subtitle: 'Empoderamos empresas e criadores com ferramentas profissionais',
      whoWeAre: 'Quem somos',
      whoWeAreDesc1: 'Uma equipe dedicada a oferecer um gerador gratuito, moderno e confiável.',
      whoWeAreDesc2: 'Tornar simples gerar um ou milhares de códigos com precisão e velocidade.',
      mission: 'Nossa missão',
      missionDesc: 'Democratizar ferramentas profissionais com uma experiência gratuita e intuitiva.',
      innovation: 'Inovação',
      innovationDesc: 'Melhorias constantes em tecnologia e recursos.',
      quality: 'Qualidade',
      qualityDesc: 'Resultados consistentes e confiáveis.',
      accessibility: 'Acessibilidade',
      accessibilityDesc: 'Ferramentas profissionais para todos.',
      whatWeOffer: 'O que oferecemos',
      multipleTypes: 'Diversos tipos',
      multipleTypesDesc: 'Code128, Code39, EAN-13, UPC-A, QR etc.',
      customizable: 'Customização completa',
      customizableDesc: 'Controle tamanho, cores e formato.',
      bulkGen: 'Produção em lote',
      bulkGenDesc: 'Até 50 códigos ou importação CSV/Excel.',
      multipleFormats: 'Vários formatos',
      multipleFormatsDesc: 'Exportação em PNG, JPEG ou PDF.',
      freeUnlimited: 'Gratuito e ilimitado',
      freeUnlimitedDesc: 'Sem custos ou cadastros.',
      fastReliable: 'Rápido e confiável',
      fastReliableDesc: 'Processamento veloz com alta disponibilidade.',
      ourTeam: 'Nosso time',
      ourTeamDesc: 'Profissionais multidisciplinares focados na melhor experiência.',
      contactInfo: 'Contato',
      email: 'Email',
      address: 'Endereço',
      teamMembers: [
        { role: 'Líder de desenvolvimento', department: 'Tecnologia', description: 'Especialista em web e códigos de barras.' },
        { role: 'Product Manager', department: 'Produto', description: 'Cuida de experiências simples e eficazes.' },
        { role: 'Designer UI/UX', department: 'Design', description: 'Cria interfaces modernas e intuitivas.' },
        { role: 'Qualidade', department: 'QA', description: 'Garante estabilidade e desempenho.' },
        { role: 'Engenheiro Backend', department: 'Infraestrutura', description: 'Projeta sistemas escaláveis.' },
        { role: 'Marketing', department: 'Crescimento', description: 'Expande a base de usuários.' },
      ],
    },
    contact: {
      title: 'Entre em contato',
      subtitle: 'Tem dúvidas ou ideias? Fale conosco!',
      emailUs: 'Envie um email',
      emailDesc: 'Respondemos normalmente em até 24h.',
      visitUs: 'Visite-nos',
      visitDesc: 'Estamos no polo tecnológico de Shenzhen.',
      businessHours: 'Horário comercial',
      businessHoursContent: 'Segunda a sexta: 9h às 18h (CST)',
      businessHoursDesc: 'Fora desse horário? Mande um email e retornaremos.',
      sendMessage: 'Envie uma mensagem',
      sendMessageDesc: 'Preencha o formulário e retornaremos logo.',
      yourName: 'Seu nome',
      emailAddress: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      sendButton: 'Enviar',
      sentButton: 'Mensagem enviada! ✓',
      thankYou: 'Obrigado pela mensagem! Responderemos em 24h.',
      whyContact: 'Por que falar conosco?',
      techSupport: 'Suporte técnico',
      techSupportDesc: 'Ajudamos você a usar o gerador.',
      businessInquiries: 'Negócios',
      businessInquiriesDesc: 'Parcerias e soluções customizadas.',
      feedback: 'Sugestões',
      feedbackDesc: 'Compartilhe ideias para evoluir o produto.',
      reportIssues: 'Reportar problema',
      reportIssuesDesc: 'Avise se encontrar algum erro.',
      faq: 'FAQ',
      faq1Q: 'Quando receberei resposta?',
      faq1A: 'Dentro de 24 horas úteis.',
      faq2Q: 'Há suporte técnico?',
      faq2A: 'Sim, gratuito para todos os usuários.',
      faq3Q: 'Posso pedir novos recursos?',
      faq3A: 'Claro! Use o formulário.',
      responseTime: 'Tempo de resposta',
      responseTimeDesc: 'Geralmente respondemos em 24h.',
      urgentNote: 'Para urgências, escreva “URGENTE” no assunto.',
    },
    legal: {
      privacyTitle: 'Política de privacidade',
      privacyIntroTitle: 'Introdução',
      privacyIntroDesc:
        'Respeitamos sua privacidade e nos comprometemos a proteger seus dados pessoais. Esta política de privacidade explica como coletamos, usamos e protegemos suas informações ao usar nosso serviço de geração de códigos de barras.',
      privacyCollectTitle: 'Informações que coletamos',
      privacyCollectDesc: 'Podemos coletar os seguintes tipos de informações:',
      privacyCollectItems: [
        'Informações que você fornece ao entrar em contato conosco (nome, e-mail, mensagem).',
        'Dados de uso e análises para melhorar nosso serviço.',
        'Dados de códigos de barras que você gera (processados localmente no seu navegador).',
        'Informações do dispositivo, como tipo de navegador, sistema operacional e resolução da tela.',
        'Endereço IP e dados de localização geral para fins de segurança e análises.',
      ],
      privacyUseTitle: 'Como usamos suas informações',
      privacyUseDesc: 'Usamos as informações que coletamos para:',
      privacyUseItems: [
        'Fornecer e melhorar nosso serviço de geração de códigos de barras.',
        'Responder às suas consultas e comentários.',
        'Analisar padrões de uso para melhorar a experiência do usuário.',
        'Garantir a segurança e integridade do nosso serviço.',
        'Cumprir obrigações legais e proteger nossos direitos.',
      ],
      privacySecurityTitle: 'Segurança de dados',
      privacySecurityDesc:
        'Implementamos medidas de segurança apropriadas para proteger suas informações pessoais. Toda a geração de códigos de barras é processada localmente no seu navegador, e não armazenamos os dados dos seus códigos de barras em nossos servidores. Usamos criptografia e protocolos de segurança padrão da indústria para proteger quaisquer dados que coletamos.',
      privacyCookiesTitle: 'Cookies e tecnologias de rastreamento',
      privacyCookiesDesc:
        'Podemos usar cookies e tecnologias de rastreamento semelhantes para melhorar sua experiência, analisar padrões de uso e fornecer conteúdo personalizado. Você pode controlar as preferências de cookies através das configurações do seu navegador. Alguns recursos podem não funcionar corretamente se os cookies estiverem desabilitados.',
      privacyThirdPartyTitle: 'Serviços de terceiros',
      privacyThirdPartyDesc:
        'Nosso serviço pode se integrar com serviços de análise e publicidade de terceiros (como Google Analytics e Google AdSense) que podem coletar informações sobre seu uso do nosso site. Esses serviços têm suas próprias políticas de privacidade, e incentivamos você a revisá-las.',
      privacyUserRightsTitle: 'Seus direitos',
      privacyUserRightsDesc:
        'Você tem o direito de acessar, atualizar ou excluir suas informações pessoais. Você também pode optar por não participar de certas práticas de coleta de dados. Para exercer esses direitos, entre em contato conosco em barcode@chdaoai.com.',
      privacyDataRetentionTitle: 'Retenção de dados',
      privacyDataRetentionDesc:
        'Retemos informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido por lei. Os dados de códigos de barras gerados através do nosso serviço são processados localmente e não são armazenados em nossos servidores.',
      privacyChildrenTitle: 'Privacidade de crianças',
      privacyChildrenDesc:
        'Nosso serviço não é destinado a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças. Se você acredita que coletamos inadvertidamente essas informações, entre em contato conosco imediatamente.',
      privacyChangesTitle: 'Alterações nesta política',
      privacyChangesDesc:
        'Podemos atualizar esta política de privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações materiais publicando a nova política nesta página e atualizando a data de "Última atualização". Seu uso contínuo do nosso serviço após essas alterações constitui aceitação da política atualizada.',
      privacyContactTitle: 'Entre em contato',
      privacyContactDesc:
        'Se você tiver perguntas sobre esta política de privacidade, entre em contato conosco em barcode@chdaoai.com.',

      termsTitle: 'Termos de uso',
      termsUpdated: 'Última atualização',
      termsAcceptanceTitle: 'Aceitação dos termos',
      termsAcceptanceDesc:
        'Ao acessar e usar nosso serviço de geração de códigos de barras, você aceita e concorda em estar vinculado a estes Termos de Uso. Se você não concordar com estes termos, por favor, não use nosso serviço.',
      termsUseTitle: 'Uso do serviço',
      termsUseDesc:
        'Você pode usar nosso serviço para gerar códigos de barras para fins pessoais ou comerciais. Você concorda em não usar o serviço para qualquer finalidade ilegal ou não autorizada, incluindo, mas não limitado a:',
      termsUseItems: [
        'Gerar códigos de barras para produtos falsificados ou atividades fraudulentas.',
        'Violar quaisquer leis ou regulamentos aplicáveis.',
        'Infringir direitos de propriedade intelectual.',
        'Transmitir código malicioso ou conteúdo prejudicial.',
        'Tentar interromper ou comprometer a segurança do serviço.',
      ],
      termsUserAccountTitle: 'Contas de usuário',
      termsUserAccountDesc:
        'Atualmente, nosso serviço não requer registro de usuário. No entanto, se introduzirmos recursos de conta no futuro, você é responsável por manter a confidencialidade das credenciais da sua conta e por todas as atividades que ocorrem sob sua conta.',
      termsIntellectualPropertyTitle: 'Propriedade intelectual',
      termsIntellectualPropertyDesc:
        'Todo o conteúdo, recursos e funcionalidade do nosso serviço, incluindo, mas não limitado a texto, gráficos, logotipos e software, são de nossa propriedade ou de nossos licenciadores e são protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual. Você não pode reproduzir, distribuir ou criar obras derivadas sem nossa permissão escrita expressa.',
      termsUserContentTitle: 'Conteúdo gerado pelo usuário',
      termsUserContentDesc:
        'Você mantém a propriedade de quaisquer códigos de barras que gerar usando nosso serviço. No entanto, ao usar nosso serviço, você nos concede uma licença não exclusiva e livre de royalties para usar, exibir e analisar dados de uso agregados para fins de melhoria do serviço.',
      termsAvailabilityTitle: 'Disponibilidade do serviço',
      termsAvailabilityDesc:
        'Nos esforçamos para fornecer um serviço confiável, mas não garantimos operação ininterrupta ou livre de erros. Reservamo-nos o direito de modificar, suspender ou descontinuar o serviço a qualquer momento sem aviso prévio. Não somos responsáveis por quaisquer perdas ou danos resultantes de interrupções do serviço.',
      termsModificationsTitle: 'Modificações do serviço',
      termsModificationsDesc:
        'Reservamo-nos o direito de modificar, atualizar ou descontinuar qualquer aspecto do nosso serviço a qualquer momento. Também podemos impor limites em certos recursos ou restringir o acesso a partes do serviço sem aviso ou responsabilidade.',
      termsLiabilityTitle: 'Limitação de responsabilidade',
      termsLiabilityDesc:
        'Não somos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da incapacidade de usar nosso serviço. O serviço é fornecido "como está" sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não limitado a garantias de comercialização, adequação a uma finalidade específica ou não violação.',
      termsIndemnificationTitle: 'Indenização',
      termsIndemnificationDesc:
        'Você concorda em indenizar e nos isentar de quaisquer reivindicações, danos, perdas, responsabilidades e despesas (incluindo honorários advocatícios) decorrentes do seu uso do serviço, violação destes termos ou violação de quaisquer direitos de outra parte.',
      termsTerminationTitle: 'Rescisão',
      termsTerminationDesc:
        'Reservamo-nos o direito de rescindir ou suspender seu acesso ao nosso serviço imediatamente, sem aviso prévio, por qualquer motivo, incluindo violação destes termos. Após a rescisão, seu direito de usar o serviço cessará imediatamente.',
      termsGoverningLawTitle: 'Lei aplicável',
      termsGoverningLawDesc:
        'Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Popular da China, sem consideração às suas disposições de conflito de leis. Quaisquer disputas decorrentes destes termos estarão sujeitas à jurisdição exclusiva dos tribunais em Shenzhen, China.',
      termsDisputeResolutionTitle: 'Resolução de disputas',
      termsDisputeResolutionDesc:
        'No caso de qualquer disputa decorrente ou relacionada a estes termos, encorajamos você a entrar em contato conosco primeiro para buscar uma resolução amigável. Se uma disputa não puder ser resolvida através de comunicação direta, será resolvida através de arbitragem vinculativa de acordo com as regras de arbitragem aplicáveis.',
      termsSeverabilityTitle: 'Separabilidade',
      termsSeverabilityDesc:
        'Se qualquer disposição destes termos for considerada inexequível ou inválida, essa disposição será limitada ou eliminada na extensão mínima necessária, e as disposições restantes permanecerão em pleno vigor e efeito.',
      termsContactTitle: 'Entre em contato',
      termsContactDesc:
        'Para perguntas sobre estes termos, entre em contato conosco em barcode@chdaoai.com.',

      refundTitle: 'Política de reembolso',
      refundIntroTitle: 'Introdução',
      refundIntroDesc:
        'Esta política de reembolso descreve os termos e condições relativos a reembolsos para quaisquer serviços pagos que possamos oferecer no futuro. Atualmente, nosso serviço de geração de códigos de barras é fornecido gratuitamente.',
      refundFreeServiceTitle: 'Serviço gratuito',
      refundFreeServiceDesc:
        'Nosso serviço de geração de códigos de barras é atualmente fornecido gratuitamente a todos os usuários. Como tal, não há pagamentos para reembolsar. Todos os recursos, incluindo geração de código único, geração em massa e múltiplos formatos de exportação, estão disponíveis sem custo.',
      refundFuturePaidTitle: 'Serviços pagos futuros',
      refundFuturePaidDesc:
        'Se introduzirmos serviços pagos, assinaturas ou recursos premium no futuro, a seguinte política de reembolso se aplicará:',
      refundFuturePaidItems: [
        'Solicitações de reembolso devem ser enviadas dentro de 30 dias da compra.',
        'Reembolsos serão processados para o método de pagamento original dentro de 7-14 dias úteis.',
        'Reembolsos podem ser calculados proporcionalmente para serviços de assinatura com base no tempo não utilizado.',
        'Reservamo-nos o direito de recusar reembolsos para serviços que foram significativamente usados ou abusados.',
      ],
      refundEligibilityTitle: 'Elegibilidade para reembolso',
      refundEligibilityDesc:
        'Reembolsos podem ser concedidos nas seguintes circunstâncias:',
      refundEligibilityItems: [
        'Mau funcionamento do serviço ou falha na entrega de recursos prometidos.',
        'Cobranças duplicadas ou acidentais.',
        'Cancelamento de assinatura dentro do período de reembolso.',
        'Problemas técnicos que impedem o acesso ao serviço que não podem ser resolvidos.',
      ],
      refundNonEligibleTitle: 'Itens não reembolsáveis',
      refundNonEligibleDesc:
        'Os seguintes geralmente não são elegíveis para reembolsos:',
      refundNonEligibleItems: [
        'Serviços usados além do período de reembolso.',
        'Solicitações de reembolso devido a erro do usuário ou mal-entendido dos recursos do serviço.',
        'Serviços encerrados devido a violação dos Termos de Uso.',
        'Serviços personalizados ou sob medida que foram entregues.',
      ],
      refundProcessTitle: 'Processo de reembolso',
      refundProcessDesc:
        'Para solicitar um reembolso, entre em contato conosco em barcode@chdaoai.com com as seguintes informações:',
      refundProcessItems: [
        'Seu e-mail de conta ou ID de transação.',
        'Data da compra e método de pagamento.',
        'Motivo da solicitação de reembolso.',
        'Qualquer documentação ou capturas de tela relevantes.',
      ],
      refundProcessingTimeTitle: 'Tempo de processamento',
      refundProcessingTimeDesc:
        'Solicitações de reembolso serão revisadas dentro de 5-7 dias úteis. Uma vez aprovadas, os reembolsos serão processados para seu método de pagamento original dentro de 7-14 dias úteis. Os tempos de processamento podem variar dependendo do seu provedor de pagamento.',
      refundContactTitle: 'Entre em contato',
      refundContactDesc:
        'Para perguntas sobre reembolsos ou para enviar uma solicitação de reembolso, entre em contato conosco em barcode@chdaoai.com. Estamos comprometidos em resolver questões de reembolso de forma justa e rápida.',

      disclaimerTitle: 'Aviso legal',
      disclaimerIntroTitle: 'Introdução',
      disclaimerIntroDesc:
        'Este aviso legal estabelece as diretrizes gerais, isenções e termos de uso para nosso serviço de geração de códigos de barras. Ao usar nosso serviço, você reconhece que leu, entendeu e concorda em estar vinculado a este aviso legal.',
      disclaimerNoWarrantyTitle: 'Sem garantias',
      disclaimerNoWarrantyDesc:
        'Nosso serviço de geração de códigos de barras é fornecido "como está" e "conforme disponível" sem quaisquer garantias, expressas ou implícitas. Não garantimos que o serviço será ininterrupto, livre de erros, seguro ou atenderá aos seus requisitos específicos. Renunciamos a todas as garantias, incluindo, mas não limitado a:',
      disclaimerNoWarrantyItems: [
        'Garantias de comercialização ou adequação para uma finalidade específica.',
        'Garantias relativas à precisão, confiabilidade ou integridade dos códigos de barras gerados.',
        'Garantias de que o serviço estará disponível em todos os momentos ou livre de defeitos.',
        'Garantias relativas a serviços de terceiros ou integrações.',
      ],
      disclaimerAccuracyTitle: 'Precisão dos códigos de barras',
      disclaimerAccuracyDesc:
        'Embora nos esforcemos para gerar códigos de barras precisos e escaneáveis usando algoritmos padrão da indústria, não podemos garantir que todos os códigos de barras gerados serão escaneáveis por todos os dispositivos ou atenderão a padrões específicos da indústria. Os usuários são os únicos responsáveis por:',
      disclaimerAccuracyItems: [
        'Verificar a precisão e funcionalidade dos códigos de barras gerados antes do uso.',
        'Garantir que os códigos de barras estejam em conformidade com os padrões e regulamentos aplicáveis da indústria.',
        'Testar os códigos de barras com seus dispositivos de escaneamento pretendidos.',
        'Validar os dados dos códigos de barras quanto à correção e integridade.',
      ],
      disclaimerLiabilityTitle: 'Limitação de responsabilidade',
      disclaimerLiabilityDesc:
        'Na máxima extensão permitida por lei, não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes de:',
      disclaimerLiabilityItems: [
        'O uso ou a incapacidade de usar nosso serviço.',
        'Erros, omissões ou imprecisões nos códigos de barras gerados.',
        'Perda de dados, lucros ou oportunidades de negócios.',
        'Acesso não autorizado ou alteração dos seus dados.',
        'Serviços de terceiros ou conteúdo acessado através do nosso serviço.',
      ],
      disclaimerThirdPartyTitle: 'Serviços de terceiros',
      disclaimerThirdPartyDesc:
        'Nosso serviço pode se integrar com ou vincular a serviços, sites ou aplicativos de terceiros. Não somos responsáveis pelo conteúdo, práticas de privacidade ou termos de serviço desses terceiros. Suas interações com serviços de terceiros são exclusivamente entre você e o terceiro.',
      disclaimerUseAtOwnRiskTitle: 'Uso por sua conta e risco',
      disclaimerUseAtOwnRiskDesc:
        'Seu uso do nosso serviço é por sua conta e risco. Não somos responsáveis por quaisquer consequências decorrentes do uso de códigos de barras gerados, incluindo, mas não limitado a:',
      disclaimerUseAtOwnRiskItems: [
        'Erros de identificação de produtos ou rotulagem incorreta.',
        'Problemas de gestão de estoque.',
        'Violações de conformidade ou questões regulatórias.',
        'Perdas financeiras ou interrupções de negócios.',
      ],
      disclaimerModificationsTitle: 'Modificações do serviço',
      disclaimerModificationsDesc:
        'Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto do nosso serviço a qualquer momento sem aviso prévio. Não somos responsáveis por quaisquer inconvenientes ou perdas resultantes de tais modificações ou descontinuações.',
      disclaimerJurisdictionTitle: 'Jurisdição',
      disclaimerJurisdictionDesc:
        'Este aviso legal é regido pelas leis da República Popular da China. Quaisquer disputas decorrentes deste aviso legal estarão sujeitas à jurisdição exclusiva dos tribunais em Shenzhen, China.',
      disclaimerContactTitle: 'Entre em contato',
      disclaimerContactDesc:
        'Para perguntas sobre este aviso legal, entre em contato conosco em barcode@chdaoai.com. Estamos comprometidos em fornecer informações transparentes sobre nosso serviço e abordar quaisquer preocupações que você possa ter.',

      copyrightTitle: 'Aviso de direitos autorais',
      copyrightIntroTitle: 'Introdução',
      copyrightIntroDesc:
        'Este aviso de direitos autorais descreve a propriedade e os direitos de uso do conteúdo, design e funcionalidade do nosso serviço de geração de códigos de barras. Ao usar nosso serviço, você reconhece e concorda em respeitar essas proteções de direitos autorais.',
      copyrightOwnershipTitle: 'Propriedade dos direitos autorais',
      copyrightOwnershipDesc:
        'Todo o conteúdo, design e funcionalidade deste site e serviço, incluindo mas não limitado ao seguinte, são propriedade exclusiva do Barcode Generator e são protegidos pelas leis de direitos autorais:',
      copyrightOwnershipItems: [
        'Design do site, layout, gráficos, logotipos e elementos visuais.',
        'Código de software, algoritmos e implementações técnicas.',
        'Documentação, texto de ajuda e guias do usuário.',
        'Nomes de marca, marcas de serviço e aparência comercial.',
        'Compilações, bancos de dados e conteúdo agregado.',
      ],
      copyrightUserContentTitle: 'Conteúdo gerado pelo usuário',
      copyrightUserContentDesc:
        'Os códigos de barras gerados usando nosso serviço são criados por usuários e pertencem exclusivamente aos usuários que os geraram. Não reivindicamos propriedade, direitos autorais ou quaisquer direitos de propriedade intelectual sobre códigos de barras gerados por usuários. Os usuários são livres para usar, distribuir e comercializar seus códigos de barras gerados como considerarem apropriado.',
      copyrightPermittedUseTitle: 'Uso permitido',
      copyrightPermittedUseDesc:
        'Você recebe uma licença limitada, não exclusiva e não transferível para usar nosso serviço para gerar códigos de barras para fins pessoais ou comerciais, sujeito às seguintes condições:',
      copyrightPermittedUseItems: [
        'Você pode usar os códigos de barras gerados para qualquer finalidade legal.',
        'Você pode baixar e salvar os códigos de barras gerados para seu uso.',
        'Você pode compartilhar os códigos de barras gerados com outros.',
        'Você pode usar os códigos de barras gerados em produtos ou serviços comerciais.',
      ],
      copyrightProhibitedUseTitle: 'Uso proibido',
      copyrightProhibitedUseDesc:
        'As seguintes atividades são estritamente proibidas sem nossa permissão escrita expressa:',
      copyrightProhibitedUseItems: [
        'Reproduzir, copiar ou duplicar nosso site ou serviço.',
        'Criar obras derivadas baseadas em nosso serviço ou design do site.',
        'Engenharia reversa, descompilação ou desmontagem de nosso software.',
        'Remover, alterar ou ocultar avisos de direitos autorais ou marcas proprietárias.',
        'Usar nosso serviço para criar serviços ou produtos concorrentes.',
        'Raspagem, rastreamento ou extração automatizada de dados de nosso serviço.',
      ],
      copyrightThirdPartyTitle: 'Conteúdo de terceiros',
      copyrightThirdPartyDesc:
        'Nosso serviço pode incorporar ou referenciar conteúdo, bibliotecas ou software de terceiros. Esse conteúdo permanece propriedade de seus respectivos proprietários e está sujeito aos seus próprios termos de direitos autorais e licenciamento. Respeitamos todos os direitos de propriedade intelectual de terceiros.',
      copyrightInfringementTitle: 'Violação de direitos autorais',
      copyrightInfringementDesc:
        'Se você acredita que qualquer conteúdo em nosso site ou serviço viola seus direitos autorais, entre em contato conosco imediatamente em barcode@chdaoai.com com as seguintes informações:',
      copyrightInfringementItems: [
        'Uma descrição da obra protegida por direitos autorais que você alega ter sido violada.',
        'A localização do material supostamente violador em nosso serviço.',
        'Suas informações de contato, incluindo nome, endereço e e-mail.',
        'Uma declaração de que você tem uma crença de boa fé de que o uso não está autorizado.',
        'Uma declaração de que as informações são precisas e você está autorizado a agir em nome do proprietário dos direitos autorais.',
      ],
      copyrightDMCATitle: 'Conformidade com DMCA',
      copyrightDMCADesc:
        'Cumprimos as leis de direitos autorais aplicáveis e responderemos prontamente a avisos válidos de remoção DMCA. Ao receber um aviso válido, removeremos ou desabilitaremos o acesso ao conteúdo supostamente violador e notificaremos o usuário que o publicou.',
      copyrightContactTitle: 'Entre em contato',
      copyrightContactDesc:
        'Para consultas sobre direitos autorais, solicitações de licenciamento ou para relatar violação de direitos autorais, entre em contato conosco em barcode@chdaoai.com. Estamos comprometidos em proteger os direitos de propriedade intelectual e abordaremos todas as preocupações legítimas rapidamente.',

      legalNoticeTitle: 'Aviso legal',
      legalNoticeIntroTitle: 'Introdução',
      legalNoticeIntroDesc:
        'Este aviso legal fornece informações importantes sobre nossa empresa, serviço e obrigações legais. Serve como uma declaração formal de nossa identidade comercial, informações de contato e responsabilidades legais sob as leis aplicáveis.',
      legalNoticeCompanyTitle: 'Informações da empresa',
      legalNoticeCompanyDesc:
        'As seguintes informações são fornecidas de acordo com os requisitos legais aplicáveis:',
      legalNoticeCompanyName: 'Barcode Generator',
      legalNoticeCompanyAddress: '130 Longhua Avenue, Distrito Longhua, Shenzhen, China',
      legalNoticeContactInfoTitle: 'Informações de contato',
      legalNoticeContactInfoDesc:
        'Para consultas, suporte ou questões legais, você pode entrar em contato conosco através dos seguintes canais:',
      legalNoticeContactEmail: 'E-mail: barcode@chdaoai.com',
      legalNoticeContactAddress: 'Endereço: 130 Longhua Avenue, Distrito Longhua, Shenzhen, China',
      legalNoticeResponsibleTitle: 'Responsável pelo conteúdo',
      legalNoticeResponsibleDesc:
        'O conteúdo do nosso site foi criado com o máximo cuidado e diligência. No entanto, não podemos garantir a precisão absoluta, integridade ou pontualidade de todas as informações. Reservamo-nos o direito de modificar, atualizar ou remover conteúdo a qualquer momento sem aviso prévio.',
      legalNoticeLiabilityLinksTitle: 'Responsabilidade por links',
      legalNoticeLiabilityLinksDesc:
        'Nosso site pode conter links para sites externos operados por terceiros. Não temos controle sobre o conteúdo, práticas de privacidade ou termos de serviço desses sites externos. Não assumimos responsabilidade por:',
      legalNoticeLiabilityLinksItems: [
        'O conteúdo, precisão ou legalidade dos sites externos.',
        'Quaisquer danos ou perdas resultantes da visita a links externos.',
        'Práticas de privacidade ou coleta de dados por sites de terceiros.',
        'Produtos, serviços ou informações oferecidos em sites externos.',
      ],
      legalNoticeCopyrightTitle: 'Direitos autorais',
      legalNoticeCopyrightDesc:
        'O conteúdo e as obras neste site estão sujeitos à lei de direitos autorais. Reprodução, processamento, distribuição e qualquer forma de comercialização requerem o consentimento escrito do respectivo autor ou criador. O uso não autorizado pode resultar em ação legal.',
      legalNoticeTrademarksTitle: 'Marcas registradas',
      legalNoticeTrademarksDesc:
        'Todas as marcas registradas, marcas de serviço e nomes comerciais usados neste site são propriedade de seus respectivos proprietários. O uso de nossas marcas registradas, incluindo "Barcode Generator" e marcas relacionadas, requer nosso consentimento escrito prévio. O uso não autorizado de nossas marcas registradas é proibido.',
      legalNoticeGoverningLawTitle: 'Lei aplicável',
      legalNoticeGoverningLawDesc:
        'Este aviso legal e todos os assuntos relacionados ao nosso serviço são regidos pelas leis da República Popular da China. Quaisquer disputas legais estarão sujeitas à jurisdição exclusiva dos tribunais em Shenzhen, China.',
      legalNoticeUpdatesTitle: 'Atualizações do aviso legal',
      legalNoticeUpdatesDesc:
        'Reservamo-nos o direito de atualizar este aviso legal a qualquer momento para refletir mudanças em nosso serviço, requisitos legais ou práticas comerciais. Os usuários são incentivados a revisar este aviso periodicamente. O uso contínuo de nosso serviço após as alterações constitui aceitação do aviso atualizado.',
      legalNoticeContactTitle: 'Entre em contato',
      legalNoticeContactDesc:
        'Para perguntas sobre este aviso legal ou quaisquer questões legais, entre em contato conosco em barcode@chdaoai.com. Estamos comprometidos com a transparência e responderemos a todas as consultas legítimas rapidamente.',

      intellectualPropertyTitle: 'Declaração de propriedade intelectual',
      intellectualPropertyIntroTitle: 'Introdução',
      intellectualPropertyIntroDesc:
        'Esta declaração de propriedade intelectual descreve nossos direitos de propriedade, políticas e proteções relativas a marcas registradas, direitos autorais, patentes, segredos comerciais e outros ativos de propriedade intelectual relacionados ao nosso serviço de geração de códigos de barras.',
      intellectualPropertyOwnershipTitle: 'Propriedade da propriedade intelectual',
      intellectualPropertyOwnershipDesc:
        'Todos os direitos de propriedade intelectual em nosso serviço de geração de códigos de barras, incluindo mas não limitado ao seguinte, são propriedade do Barcode Generator ou nossos licenciadores:',
      intellectualPropertyOwnershipItems: [
        'Marcas registradas, marcas de serviço e nomes comerciais associados à nossa marca.',
        'Direitos autorais em código de software, algoritmos e documentação técnica.',
        'Patentes ou solicitações de patente relacionadas à nossa tecnologia (se houver).',
        'Segredos comerciais, algoritmos proprietários e informações confidenciais.',
        'Design do site, interface do usuário e elementos de experiência do usuário.',
        'Métodos de negócios, processos e procedimentos operacionais.',
      ],
      intellectualPropertyTrademarksTitle: 'Marcas registradas',
      intellectualPropertyTrademarksDesc:
        'Todas as marcas registradas, marcas de serviço e nomes comerciais usados neste site e em conexão com nosso serviço são propriedade de seus respectivos proprietários. Nossas marcas registradas incluem, mas não se limitam a:',
      intellectualPropertyTrademarksItems: [
        '"Barcode Generator" e suas variações.',
        'Nosso logotipo e elementos de identidade da marca.',
        'Nomes de serviço e identificadores de produtos.',
        'Slogans e frases associadas ao nosso serviço.',
      ],
      intellectualPropertyTrademarkUseTitle: 'Política de uso de marcas registradas',
      intellectualPropertyTrademarkUseDesc:
        'O uso de nossas marcas registradas requer nosso consentimento escrito prévio. O uso não autorizado de nossas marcas registradas é estritamente proibido e pode resultar em ação legal. Se você deseja usar nossas marcas registradas, entre em contato conosco em barcode@chdaoai.com para solicitar permissão.',
      intellectualPropertyCopyrightTitle: 'Proteção de direitos autorais',
      intellectualPropertyCopyrightDesc:
        'Todo o conteúdo original, código de software, documentação e obras criativas em nosso site e serviço são protegidos pela lei de direitos autorais. Isso inclui:',
      intellectualPropertyCopyrightItems: [
        'Código-fonte e implementações de software.',
        'Design e layout do site.',
        'Documentação e guias do usuário.',
        'Gráficos, imagens e elementos visuais.',
        'Conteúdo escrito e cópia.',
      ],
      intellectualPropertyThirdPartyTitle: 'Propriedade intelectual de terceiros',
      intellectualPropertyThirdPartyDesc:
        'Nosso serviço usa bibliotecas, software e tecnologias de terceiros que estão sujeitas a suas respectivas licenças e direitos de propriedade intelectual. Respeitamos toda a propriedade intelectual de terceiros e cumprimos as licenças aplicáveis, incluindo:',
      intellectualPropertyThirdPartyItems: [
        'Licenças de software de código aberto (MIT, Apache, etc.).',
        'Licenças e acordos de software comercial.',
        'Termos e condições de API de terceiros.',
        'Licenças de fontes e recursos de design.',
      ],
      intellectualPropertyUserContentTitle: 'Conteúdo gerado pelo usuário',
      intellectualPropertyUserContentDesc:
        'Os usuários mantêm todos os direitos de propriedade intelectual sobre os códigos de barras que geram usando nosso serviço. Não reivindicamos propriedade, direitos autorais ou quaisquer direitos de propriedade intelectual sobre o conteúdo gerado pelo usuário. Os usuários são livres para:',
      intellectualPropertyUserContentItems: [
        'Usar os códigos de barras gerados para qualquer finalidade legal.',
        'Registrar marcas registradas ou direitos autorais para seus códigos de barras.',
        'Licenciar ou vender seus códigos de barras gerados para terceiros.',
        'Modificar ou criar obras derivadas de seus códigos de barras.',
      ],
      intellectualPropertyEnforcementTitle: 'Aplicação de direitos',
      intellectualPropertyEnforcementDesc:
        'Levamos os direitos de propriedade intelectual a sério e tomaremos as medidas legais apropriadas contra qualquer violação de nossa propriedade intelectual. Isso pode incluir:',
      intellectualPropertyEnforcementItems: [
        'Emitir avisos de cessação e desistência.',
        'Entrar com ações por danos e medidas cautelares.',
        'Relatar violações às autoridades relevantes.',
        'Pursuir acusações criminais por violações graves.',
      ],
      intellectualPropertyReportingTitle: 'Relatar violação',
      intellectualPropertyReportingDesc:
        'Se você acredita que seus direitos de propriedade intelectual foram violados por conteúdo em nosso serviço, entre em contato conosco imediatamente em barcode@chdaoai.com com:',
      intellectualPropertyReportingItems: [
        'Uma descrição detalhada do conteúdo supostamente violador.',
        'Prova de sua propriedade da propriedade intelectual.',
        'Suas informações de contato e autorização para agir.',
        'Uma declaração de crença de boa fé de violação.',
      ],
      intellectualPropertyContactTitle: 'Entre em contato',
      intellectualPropertyContactDesc:
        'Para consultas sobre propriedade intelectual, solicitações de licenciamento ou para relatar violação, entre em contato conosco em barcode@chdaoai.com. Estamos comprometidos em proteger os direitos de propriedade intelectual e abordaremos todas as preocupações legítimas rápida e profissionalmente.',
    },
    barcode: {
      generator: 'Gerador de códigos',
      bulkGenerator: 'Gerador em lote',
      barcodeType: 'Tipo de código',
      size: 'Tamanho',
      textColor: 'Cor do texto',
      background: 'Cor de fundo',
      format: 'Formato',
      barcodeData: 'Dados do código',
      onePerLine: '(um por linha, máx. 50)',
      itemLabel: 'código',
      itemsLabel: 'códigos',
      placeholder: 'Digite os valores, um por linha',
      placeholderExample: 'Exemplo:\n1234567890128\nOLA123\nhttps://example.com',
      generate: 'Gerar códigos',
      download: 'Download',
      downloadZIP: 'Baixar ZIP',
      downloadPDF: 'Baixar PDF',
      downloadReady: 'O arquivo ZIP está pronto. Baixe quando quiser.',
      downloadGeneratedZip: 'Baixar ZIP gerado',
      downloadCsvTemplate: 'Modelo CSV',
      downloadExcelTemplate: 'Modelo Excel',
      templateDescription: 'Use estes modelos para montar sua lista rapidamente.',
      preview: 'Pré-visualização',
      clearAll: 'Limpar tudo',
      uploadFile: 'Envie um arquivo CSV ou Excel',
      clickUpload: 'Clique ou arraste o arquivo',
      fileTypes: 'CSV, XLSX, XLS (até 10 MB)',
      tip: 'Dica:',
      tipDesc: 'Cada célula vira um código e o arquivo leva o mesmo nome.',
      generating: 'Gerando...',
      processing: 'Processando...',
      generated: 'gerados',
      alerts: {
        noDataInput: 'Digite ao menos um valor.',
        errorPrefix: 'Erro ao gerar:',
        generateFirst: 'Gere os códigos primeiro.',
        fileRequired: 'Envie um arquivo CSV ou Excel.',
        noDataFound: 'Nenhum dado válido encontrado.',
        success: 'Gerado com sucesso',
        processingError: 'Erro ao processar:',
        downloadStarted: 'Download iniciado.',
      },
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    home: {
      title: 'Online-Barcode-Generator',
      subtitle: 'Kostenlos Barcodes erstellen. Unterstützt mehrere Typen und Stapelverarbeitung.',
      singleBarcode: 'Einzelner Barcode',
      bulkBarcode: 'Barcode-Stapel',
      recognizer: {
        uploadPrompt: 'Klicken, um Bild hochzuladen oder ziehen',
        uploadHint: 'Unterstützt PNG, JPEG',
        previewPlaceholder: 'Vorschau erscheint hier nach dem Hochladen',
        resultsTitle: 'Erkennungsergebnisse',
        noResults: 'Keine Ergebnisse',
        browserNotSupport: 'Browser unterstützt BarcodeDetector nicht; Verwendung einer Fallback-Bibliothek',
        browserSuggest: 'Für beste Ergebnisse neueste Chrome- oder Edge-Version verwenden',
        fallbackError: 'Erkennung mit Fallback-Bibliothek fehlgeschlagen',
        detectError: 'Erkennungsfehler: ',
        typeLabel: 'Typ',
        valueLabel: 'Wert',
      },
    },
    footer: {
      description: 'Kostenloser Generator mit Unterstützung für viele Formate und Batch-Downloads.',
      legal: 'Rechtliches',
      contact: 'Kontakt',
      email: 'E-Mail',
      address: 'Adresse',
      copyright: 'Alle Rechte vorbehalten.',
      title: 'Barcode-Generator',
      legalNext: 'Richtlinien',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      refund: 'Rückerstattungsrichtlinie',
      disclaimer: 'Haftungsausschluss',
      copyrightNotice: 'Urheberrecht',
      legalNotice: 'Impressum',
      intellectualProperty: 'Geistiges Eigentum',
      contactTitle: 'Kontakt',
      addressDetail: 'Longhua Avenue 130, Bezirk Longhua, Shenzhen, China',
    },
    features: {
      heading: 'Leistungsstarke Funktionen',
      cards: [
        { icon: '📊', title: 'Viele Barcode-Typen', description: 'Unterstützt Code128, Code39, EAN-13, UPC-A, QR Code u. v. m.' },
        { icon: '📏', title: 'Flexible Größe', description: 'Skalierung von 100px bis 1000px für jede Anwendung.' },
        { icon: '🎨', title: 'Farbanpassung', description: 'Text- und Hintergrundfarbe nach Markenrichtlinien.' },
        { icon: '💾', title: 'Mehrere Formate', description: 'Export als PNG, JPEG oder PDF.' },
        { icon: '📦', title: 'Batch-Generierung', description: 'Bis zu 50 Barcodes oder CSV/Excel-Upload.' },
        { icon: '🆓', title: 'Kostenlos', description: 'Keine Registrierung oder Limits.' },
      ],
    },
    help: {
      heading: 'So funktioniert’s',
      singleTitle: 'Einzel-Generator',
      singleSteps: [
        'Barcode-Typ auswählen.',
        'Größe zwischen 100 und 1000 px einstellen.',
        'Text- und Hintergrundfarbe wählen.',
        'Ausgabeformat (PNG, JPEG, PDF) bestimmen.',
        'Daten eingeben (eine Zeile pro Code, max. 50).',
        'Auf „Barcodes generieren“ klicken, um eine Vorschau zu sehen.',
        'Einzeln herunterladen oder alles als ZIP/PDF.',
      ],
      bulkTitle: 'Batch-Generator',
      bulkSteps: [
        'Typ, Größe, Farben und Format konfigurieren.',
        'CSV- oder Excel-Datei mit Werten hochladen.',
        'Jede Zelle wird in einen Barcode umgewandelt.',
        'Auf „Generieren“ klicken, um zu starten.',
        'ZIP-Datei mit allen Bildern herunterladen.',
        'Dateinamen entsprechen dem Barcode-Inhalt.',
      ],
      tipsTitle: 'Tipps',
      tips: [
        'QR-Codes speichern Texte oder URLs.',
        'EAN-13 und UPC-A benötigen feste Nummernlängen.',
        'Code128/Code39 erlauben alphanumerische Zeichen.',
        'Große Dateien dauern länger.',
        'Der Dateiname ist gleich dem Barcode-Inhalt.',
      ],
    },
    examples: {
      heading: 'Beispiele',
      items: [
        { type: 'Code128', data: 'HALLO123', description: 'Alphanumerischer Code für Produkte.' },
        { type: 'EAN-13', data: '1234567890128', description: '13-stelliger Code für den Handel.' },
        { type: 'QR Code', data: 'https://barcode.chdaoai.com', description: 'Ideal für Links und URLs.' },
        { type: 'UPC-A', data: '012345678905', description: '12-stelliger Code für den US-Markt.' },
      ],
    },
    feedback: {
      heading: 'Feedback',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      submit: 'Absenden',
      success: 'Vielen Dank für dein Feedback!',
      description: 'Teile deine Ideen – wir freuen uns über jeden Hinweis.',
    },
    about: {
      title: 'Über uns',
      subtitle: 'Professionelle Lösungen für Unternehmen und Kreative',
      whoWeAre: 'Wer wir sind',
      whoWeAreDesc1: 'Ein Team, das einen kostenlosen, zuverlässigen Barcode-Generator für alle anbietet.',
      whoWeAreDesc2: 'Wir machen es leicht, einen oder tausende Codes schnell zu erstellen.',
      mission: 'Unsere Mission',
      missionDesc: 'Professionelle Tools ohne Kosten oder Hürden bereitstellen.',
      innovation: 'Innovation',
      innovationDesc: 'Kontinuierliche Verbesserungen und neue Features.',
      quality: 'Qualität',
      qualityDesc: 'Hohe Genauigkeit und Stabilität.',
      accessibility: 'Zugänglichkeit',
      accessibilityDesc: 'Werkzeuge für alle Nutzergruppen.',
      whatWeOffer: 'Was wir bieten',
      multipleTypes: 'Viele Typen',
      multipleTypesDesc: 'Code128, Code39, EAN-13, UPC-A, QR etc.',
      customizable: 'Anpassbar',
      customizableDesc: 'Größe, Farben und Format frei wählbar.',
      bulkGen: 'Batch-Funktion',
      bulkGenDesc: 'Bis zu 50 Codes oder CSV/Excel-Import.',
      multipleFormats: 'Mehrere Formate',
      multipleFormatsDesc: 'Export als PNG, JPEG oder PDF.',
      freeUnlimited: 'Kostenfrei',
      freeUnlimitedDesc: 'Kein Account, keine Limits.',
      fastReliable: 'Schnell & zuverlässig',
      fastReliableDesc: 'Hohe Performance und Verfügbarkeit.',
      ourTeam: 'Unser Team',
      ourTeamDesc: 'Ein interdisziplinäres Team mit Fokus auf bestmögliche User Experience.',
      contactInfo: 'Kontaktinfo',
      email: 'E-Mail',
      address: 'Adresse',
      teamMembers: [
        { role: 'Lead Developer', department: 'Technik', description: '8+ Jahre Erfahrung in Web & Barcodes.' },
        { role: 'Produktmanager', department: 'Produkt', description: 'Sorgt für verständliche, effiziente Abläufe.' },
        { role: 'UI/UX Designer', department: 'Design', description: 'Gestaltet moderne, intuitive Oberflächen.' },
        { role: 'Qualitätssicherung', department: 'QA', description: 'Überwacht Zuverlässigkeit und Performance.' },
        { role: 'Backend Engineer', department: 'Infrastruktur', description: 'Entwickelt skalierbare Systeme.' },
        { role: 'Marketing', department: 'Growth', description: 'Erreicht neue Nutzer mit kreativen Kampagnen.' },
      ],
    },
    contact: {
      title: 'Kontaktiere uns',
      subtitle: 'Fragen oder Ideen? Wir freuen uns auf deine Nachricht!',
      emailUs: 'E-Mail senden',
      emailDesc: 'Antwort in der Regel innerhalb von 24 Stunden.',
      visitUs: 'Besuche uns',
      visitDesc: 'Unser Büro liegt im Technologiezentrum von Shenzhen.',
      businessHours: 'Geschäftszeiten',
      businessHoursContent: 'Montag–Freitag: 9:00–18:00 (CST)',
      businessHoursDesc: 'Außerhalb der Zeiten? Schreib uns eine Mail.',
      sendMessage: 'Nachricht senden',
      sendMessageDesc: 'Formular ausfüllen, wir melden uns zurück.',
      yourName: 'Name',
      emailAddress: 'E-Mail-Adresse',
      subject: 'Betreff',
      message: 'Nachricht',
      sendButton: 'Absenden',
      sentButton: 'Gesendet! ✓',
      thankYou: 'Danke für deine Nachricht! Wir antworten binnen 24 Stunden.',
      whyContact: 'Warum kontaktieren?',
      techSupport: 'Technischer Support',
      techSupportDesc: 'Wir helfen beim Umgang mit dem Generator.',
      businessInquiries: 'Business-Anfragen',
      businessInquiriesDesc: 'Partnerschaften oder Enterprise-Lösungen besprechen.',
      feedback: 'Feedback',
      feedbackDesc: 'Teile Ideen zur Verbesserung.',
      reportIssues: 'Probleme melden',
      reportIssuesDesc: 'Sag uns Bescheid, wenn etwas nicht funktioniert.',
      faq: 'FAQ',
      faq1Q: 'Wann erhalte ich eine Antwort?',
      faq1A: 'In der Regel innerhalb eines Werktags.',
      faq2Q: 'Gibt es Support?',
      faq2A: 'Ja, kostenlos für alle Nutzer.',
      faq3Q: 'Kann ich Features anfragen?',
      faq3A: 'Gerne! Einfach das Formular nutzen.',
      responseTime: 'Antwortzeit',
      responseTimeDesc: 'Wir antworten meist innerhalb von 24 h.',
      urgentNote: 'Für dringende Anliegen „DRINGEND“ in den Betreff schreiben.',
    },
    legal: {
      privacyTitle: 'Datenschutz',
      privacyIntroTitle: 'Einleitung',
      privacyIntroDesc:
        'Wir respektieren Ihre Privatsphäre und verpflichten uns, Ihre persönlichen Daten zu schützen. Diese Datenschutzerklärung erläutert, wie wir Ihre Informationen sammeln, verwenden und schützen, wenn Sie unseren Barcode-Generator-Dienst nutzen.',
      privacyCollectTitle: 'Informationen, die wir sammeln',
      privacyCollectDesc: 'Wir können die folgenden Arten von Informationen sammeln:',
      privacyCollectItems: [
        'Informationen, die Sie bei der Kontaktaufnahme mit uns angeben (Name, E-Mail, Nachricht).',
        'Nutzungsdaten und Analysen zur Verbesserung unseres Dienstes.',
        'Barcode-Daten, die Sie generieren (lokal in Ihrem Browser verarbeitet).',
        'Geräteinformationen wie Browsertyp, Betriebssystem und Bildschirmauflösung.',
        'IP-Adresse und allgemeine Standortdaten für Sicherheits- und Analysezwecke.',
      ],
      privacyUseTitle: 'Wie wir Ihre Informationen verwenden',
      privacyUseDesc: 'Wir verwenden die gesammelten Informationen für:',
      privacyUseItems: [
        'Bereitstellung und Verbesserung unseres Barcode-Generierungsdienstes.',
        'Beantwortung Ihrer Anfragen und Feedback.',
        'Analyse von Nutzungsmustern zur Verbesserung der Benutzererfahrung.',
        'Gewährleistung der Sicherheit und Integrität unseres Dienstes.',
        'Einhaltung rechtlicher Verpflichtungen und Schutz unserer Rechte.',
      ],
      privacySecurityTitle: 'Datensicherheit',
      privacySecurityDesc:
        'Wir setzen angemessene Sicherheitsmaßnahmen zum Schutz Ihrer persönlichen Informationen um. Die gesamte Barcode-Generierung wird lokal in Ihrem Browser verarbeitet, und wir speichern Ihre Barcode-Daten nicht auf unseren Servern. Wir verwenden branchenübliche Verschlüsselung und Sicherheitsprotokolle zum Schutz aller von uns gesammelten Daten.',
      privacyCookiesTitle: 'Cookies und Tracking-Technologien',
      privacyCookiesDesc:
        'Wir können Cookies und ähnliche Tracking-Technologien verwenden, um Ihre Erfahrung zu verbessern, Nutzungsmuster zu analysieren und personalisierte Inhalte bereitzustellen. Sie können Cookie-Einstellungen über Ihre Browsereinstellungen steuern. Einige Funktionen funktionieren möglicherweise nicht ordnungsgemäß, wenn Cookies deaktiviert sind.',
      privacyThirdPartyTitle: 'Drittanbieter-Dienste',
      privacyThirdPartyDesc:
        'Unser Dienst kann sich mit Drittanbieter-Analyse- und Werbediensten (wie Google Analytics und Google AdSense) integrieren, die Informationen über Ihre Nutzung unserer Website sammeln können. Diese Dienste haben ihre eigenen Datenschutzrichtlinien, und wir empfehlen Ihnen, diese zu überprüfen.',
      privacyUserRightsTitle: 'Ihre Rechte',
      privacyUserRightsDesc:
        'Sie haben das Recht, auf Ihre persönlichen Informationen zuzugreifen, sie zu aktualisieren oder zu löschen. Sie können sich auch von bestimmten Datenerfassungspraktiken abmelden. Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter barcode@chdaoai.com.',
      privacyDataRetentionTitle: 'Datenspeicherung',
      privacyDataRetentionDesc:
        'Wir speichern persönliche Informationen nur so lange, wie es zur Erfüllung der in dieser Richtlinie beschriebenen Zwecke erforderlich ist, es sei denn, eine längere Aufbewahrungsfrist ist gesetzlich vorgeschrieben. Barcode-Daten, die über unseren Dienst generiert werden, werden lokal verarbeitet und nicht auf unseren Servern gespeichert.',
      privacyChildrenTitle: 'Datenschutz für Kinder',
      privacyChildrenDesc:
        'Unser Dienst ist nicht für Kinder unter 13 Jahren bestimmt. Wir sammeln nicht wissentlich persönliche Informationen von Kindern. Wenn Sie glauben, dass wir versehentlich solche Informationen gesammelt haben, kontaktieren Sie uns bitte sofort.',
      privacyChangesTitle: 'Änderungen an dieser Richtlinie',
      privacyChangesDesc:
        'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen und das Datum "Letzte Aktualisierung" aktualisieren. Ihre fortgesetzte Nutzung unseres Dienstes nach solchen Änderungen stellt die Annahme der aktualisierten Richtlinie dar.',
      privacyContactTitle: 'Kontaktieren Sie uns',
      privacyContactDesc:
        'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter barcode@chdaoai.com.',

      termsTitle: 'Nutzungsbedingungen',
      termsUpdated: 'Letzte Aktualisierung',
      termsAcceptanceTitle: 'Annahme der Bedingungen',
      termsAcceptanceDesc:
        'Durch den Zugriff auf und die Nutzung unseres Barcode-Generator-Dienstes akzeptieren und stimmen Sie zu, an diese Nutzungsbedingungen gebunden zu sein. Wenn Sie diesen Bedingungen nicht zustimmen, verwenden Sie bitte unseren Dienst nicht.',
      termsUseTitle: 'Nutzung des Dienstes',
      termsUseDesc:
        'Sie können unseren Dienst zur Generierung von Barcodes für private oder kommerzielle Zwecke verwenden. Sie stimmen zu, den Dienst nicht für illegale oder nicht autorisierte Zwecke zu verwenden, einschließlich, aber nicht beschränkt auf:',
      termsUseItems: [
        'Generierung von Barcodes für gefälschte Produkte oder betrügerische Aktivitäten.',
        'Verletzung geltender Gesetze oder Vorschriften.',
        'Verletzung von Rechten des geistigen Eigentums.',
        'Übertragung von bösartigem Code oder schädlichem Inhalt.',
        'Versuch, die Sicherheit des Dienstes zu stören oder zu gefährden.',
      ],
      termsUserAccountTitle: 'Benutzerkonten',
      termsUserAccountDesc:
        'Derzeit erfordert unser Dienst keine Benutzerregistrierung. Wenn wir jedoch in Zukunft Kontofunktionen einführen, sind Sie für die Vertraulichkeit Ihrer Kontodaten und für alle Aktivitäten verantwortlich, die unter Ihrem Konto stattfinden.',
      termsIntellectualPropertyTitle: 'Geistiges Eigentum',
      termsIntellectualPropertyDesc:
        'Alle Inhalte, Funktionen und Funktionalitäten unseres Dienstes, einschließlich, aber nicht beschränkt auf Text, Grafiken, Logos und Software, gehören uns oder unseren Lizenzgebern und sind durch Urheberrechts-, Marken- und andere Gesetze zum geistigen Eigentum geschützt. Sie dürfen keine abgeleiteten Werke ohne unsere ausdrückliche schriftliche Genehmigung reproduzieren, verteilen oder erstellen.',
      termsUserContentTitle: 'Benutzergenerierte Inhalte',
      termsUserContentDesc:
        'Sie behalten das Eigentum an allen Barcodes, die Sie mit unserem Dienst generieren. Durch die Nutzung unseres Dienstes gewähren Sie uns jedoch eine nicht-exklusive, lizenzgebührenfreie Lizenz zur Nutzung, Anzeige und Analyse aggregierter Nutzungsdaten zur Verbesserung des Dienstes.',
      termsAvailabilityTitle: 'Verfügbarkeit des Dienstes',
      termsAvailabilityDesc:
        'Wir bemühen uns, einen zuverlässigen Dienst bereitzustellen, garantieren jedoch keinen unterbrechungsfreien oder fehlerfreien Betrieb. Wir behalten uns das Recht vor, den Dienst jederzeit ohne vorherige Ankündigung zu ändern, auszusetzen oder einzustellen. Wir sind nicht für Verluste oder Schäden verantwortlich, die durch Dienstunterbrechungen entstehen.',
      termsModificationsTitle: 'Änderungen am Dienst',
      termsModificationsDesc:
        'Wir behalten uns das Recht vor, jeden Aspekt unseres Dienstes jederzeit zu ändern, zu aktualisieren oder einzustellen. Wir können auch Grenzen für bestimmte Funktionen festlegen oder den Zugang zu Teilen des Dienstes ohne Ankündigung oder Haftung einschränken.',
      termsLiabilityTitle: 'Haftungsbeschränkung',
      termsLiabilityDesc:
        'Wir haften nicht für direkte, indirekte, zufällige, besondere oder Folgeschäden, die aus der Nutzung oder der Unfähigkeit zur Nutzung unseres Dienstes entstehen. Der Dienst wird "wie besehen" ohne Gewährleistungen jeglicher Art, ausdrücklich oder stillschweigend, bereitgestellt, einschließlich, aber nicht beschränkt auf Gewährleistungen der Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung.',
      termsIndemnificationTitle: 'Freistellung',
      termsIndemnificationDesc:
        'Sie stimmen zu, uns von allen Ansprüchen, Schäden, Verlusten, Haftungen und Ausgaben (einschließlich Anwaltskosten) freizustellen, die aus Ihrer Nutzung des Dienstes, Verletzung dieser Bedingungen oder Verletzung von Rechten Dritter entstehen.',
      termsTerminationTitle: 'Kündigung',
      termsTerminationDesc:
        'Wir behalten uns das Recht vor, Ihren Zugang zu unserem Dienst sofort ohne vorherige Ankündigung aus beliebigem Grund, einschließlich Verletzung dieser Bedingungen, zu beenden oder auszusetzen. Bei Kündigung endet Ihr Recht zur Nutzung des Dienstes sofort.',
      termsGoverningLawTitle: 'Geltendes Recht',
      termsGoverningLawDesc:
        'Diese Nutzungsbedingungen unterliegen den Gesetzen der Volksrepublik China und werden in Übereinstimmung damit ausgelegt, ohne Rücksicht auf ihre kollisionsrechtlichen Bestimmungen. Alle Streitigkeiten, die aus diesen Bedingungen entstehen, unterliegen der ausschließlichen Gerichtsbarkeit der Gerichte in Shenzhen, China.',
      termsDisputeResolutionTitle: 'Streitbeilegung',
      termsDisputeResolutionDesc:
        'Im Falle eines Streits, der aus diesen Bedingungen entsteht oder damit zusammenhängt, empfehlen wir Ihnen, sich zunächst an uns zu wenden, um eine einvernehmliche Lösung zu suchen. Wenn ein Streit nicht durch direkte Kommunikation gelöst werden kann, wird er durch bindende Schiedsverfahren gemäß den geltenden Schiedsregeln beigelegt.',
      termsSeverabilityTitle: 'Trennbarkeit',
      termsSeverabilityDesc:
        'Wenn eine Bestimmung dieser Bedingungen als nicht durchsetzbar oder ungültig befunden wird, wird diese Bestimmung auf das erforderliche Mindestmaß beschränkt oder entfernt, und die verbleibenden Bestimmungen bleiben in vollem Umfang in Kraft.',
      termsContactTitle: 'Kontaktieren Sie uns',
      termsContactDesc:
        'Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte unter barcode@chdaoai.com.',

      refundTitle: 'Rückerstattungsrichtlinie',
      refundIntroTitle: 'Einleitung',
      refundIntroDesc:
        'Diese Rückerstattungsrichtlinie beschreibt die Bedingungen und Bestimmungen bezüglich Rückerstattungen für alle kostenpflichtigen Dienste, die wir in Zukunft anbieten könnten. Derzeit wird unser Barcode-Generator-Dienst kostenlos bereitgestellt.',
      refundFreeServiceTitle: 'Kostenloser Dienst',
      refundFreeServiceDesc:
        'Unser Barcode-Generator-Dienst wird derzeit allen Benutzern kostenlos bereitgestellt. Daher gibt es keine Zahlungen, die zurückerstattet werden müssen. Alle Funktionen, einschließlich Einzel-Barcode-Generierung, Massengenerierung und mehrere Exportformate, sind kostenlos verfügbar.',
      refundFuturePaidTitle: 'Zukünftige kostenpflichtige Dienste',
      refundFuturePaidDesc:
        'Wenn wir in Zukunft kostenpflichtige Dienste, Abonnements oder Premium-Funktionen einführen, gilt die folgende Rückerstattungsrichtlinie:',
      refundFuturePaidItems: [
        'Rückerstattungsanträge müssen innerhalb von 30 Tagen nach dem Kauf eingereicht werden.',
        'Rückerstattungen werden innerhalb von 7-14 Werktagen auf die ursprüngliche Zahlungsmethode verarbeitet.',
        'Rückerstattungen können für Abonnementdienste anteilig basierend auf ungenutzter Zeit berechnet werden.',
        'Wir behalten uns das Recht vor, Rückerstattungen für Dienste abzulehnen, die erheblich genutzt oder missbraucht wurden.',
      ],
      refundEligibilityTitle: 'Rückerstattungsberechtigung',
      refundEligibilityDesc:
        'Rückerstattungen können unter folgenden Umständen gewährt werden:',
      refundEligibilityItems: [
        'Dienstausfall oder Nichterfüllung versprochener Funktionen.',
        'Doppelte oder versehentliche Gebühren.',
        'Kündigung des Abonnements innerhalb der Rückerstattungsfrist.',
        'Technische Probleme, die den Zugang zum Dienst verhindern und nicht behoben werden können.',
      ],
      refundNonEligibleTitle: 'Nicht erstattungsfähige Artikel',
      refundNonEligibleDesc:
        'Folgendes ist in der Regel nicht erstattungsfähig:',
      refundNonEligibleItems: [
        'Dienste, die nach der Rückerstattungsfrist genutzt wurden.',
        'Rückerstattungsanträge aufgrund von Benutzerfehlern oder Missverständnissen der Dienstfunktionen.',
        'Dienste, die aufgrund von Verstößen gegen die Nutzungsbedingungen beendet wurden.',
        'Maßgeschneiderte oder personalisierte Dienste, die bereits geliefert wurden.',
      ],
      refundProcessTitle: 'Rückerstattungsprozess',
      refundProcessDesc:
        'Um eine Rückerstattung zu beantragen, kontaktieren Sie uns bitte unter barcode@chdaoai.com mit den folgenden Informationen:',
      refundProcessItems: [
        'Ihre Kontakt-E-Mail oder Transaktions-ID.',
        'Kaufdatum und Zahlungsmethode.',
        'Grund für den Rückerstattungsantrag.',
        'Relevante Dokumentation oder Screenshots.',
      ],
      refundProcessingTimeTitle: 'Bearbeitungszeit',
      refundProcessingTimeDesc:
        'Rückerstattungsanträge werden innerhalb von 5-7 Werktagen geprüft. Nach Genehmigung werden Rückerstattungen innerhalb von 7-14 Werktagen auf Ihre ursprüngliche Zahlungsmethode verarbeitet. Die Bearbeitungszeiten können je nach Ihrem Zahlungsanbieter variieren.',
      refundContactTitle: 'Kontaktieren Sie uns',
      refundContactDesc:
        'Bei Fragen zu Rückerstattungen oder zur Einreichung eines Rückerstattungsantrags kontaktieren Sie uns bitte unter barcode@chdaoai.com. Wir verpflichten uns, Rückerstattungsprobleme fair und schnell zu lösen.',

      disclaimerTitle: 'Haftungsausschluss',
      disclaimerIntroTitle: 'Einleitung',
      disclaimerIntroDesc:
        'Dieser Haftungsausschluss legt die allgemeinen Richtlinien, Haftungsausschlüsse und Nutzungsbedingungen für unseren Barcode-Generator-Dienst fest. Durch die Nutzung unseres Dienstes erkennen Sie an, dass Sie diesen Haftungsausschluss gelesen, verstanden haben und damit einverstanden sind, daran gebunden zu sein.',
      disclaimerNoWarrantyTitle: 'Keine Gewährleistung',
      disclaimerNoWarrantyDesc:
        'Unser Barcode-Generator-Dienst wird "wie besehen" und "wie verfügbar" ohne jegliche Gewährleistungen, ausdrücklich oder stillschweigend, bereitgestellt. Wir garantieren nicht, dass der Dienst unterbrechungsfrei, fehlerfrei, sicher ist oder Ihren spezifischen Anforderungen entspricht. Wir lehnen alle Gewährleistungen ab, einschließlich, aber nicht beschränkt auf:',
      disclaimerNoWarrantyItems: [
        'Gewährleistungen der Marktgängigkeit oder Eignung für einen bestimmten Zweck.',
        'Gewährleistungen bezüglich der Genauigkeit, Zuverlässigkeit oder Vollständigkeit generierter Barcodes.',
        'Gewährleistungen, dass der Dienst jederzeit verfügbar oder fehlerfrei ist.',
        'Gewährleistungen bezüglich Drittanbieter-Diensten oder Integrationen.',
      ],
      disclaimerAccuracyTitle: 'Genauigkeit der Barcodes',
      disclaimerAccuracyDesc:
        'Obwohl wir uns bemühen, genaue und scannbare Barcodes mit branchenüblichen Algorithmen zu generieren, können wir nicht garantieren, dass alle generierten Barcodes von allen Geräten gescannt werden können oder bestimmten Industriestandards entsprechen. Benutzer sind allein verantwortlich für:',
      disclaimerAccuracyItems: [
        'Überprüfung der Genauigkeit und Funktionalität generierter Barcodes vor der Verwendung.',
        'Sicherstellung, dass Barcodes den geltenden Industriestandards und Vorschriften entsprechen.',
        'Testen der Barcodes mit ihren vorgesehenen Scan-Geräten.',
        'Validierung der Barcode-Daten auf Richtigkeit und Vollständigkeit.',
      ],
      disclaimerLiabilityTitle: 'Haftungsbeschränkung',
      disclaimerLiabilityDesc:
        'Im größtmöglichen gesetzlich zulässigen Umfang haften wir nicht für direkte, indirekte, zufällige, besondere, Folgeschäden oder Strafschäden, die entstehen aus:',
      disclaimerLiabilityItems: [
        'Der Nutzung oder Unfähigkeit zur Nutzung unseres Dienstes.',
        'Fehlern, Auslassungen oder Ungenauigkeiten in generierten Barcodes.',
        'Verlust von Daten, Gewinnen oder Geschäftsmöglichkeiten.',
        'Unbefugtem Zugriff auf oder Änderung Ihrer Daten.',
        'Drittanbieter-Diensten oder Inhalten, auf die über unseren Dienst zugegriffen wird.',
      ],
      disclaimerThirdPartyTitle: 'Drittanbieter-Dienste',
      disclaimerThirdPartyDesc:
        'Unser Dienst kann sich mit Drittanbieter-Diensten, Websites oder Anwendungen integrieren oder darauf verlinken. Wir sind nicht verantwortlich für den Inhalt, die Datenschutzpraktiken oder die Nutzungsbedingungen dieser Drittanbieter. Ihre Interaktionen mit Drittanbieter-Diensten erfolgen ausschließlich zwischen Ihnen und dem Drittanbieter.',
      disclaimerUseAtOwnRiskTitle: 'Nutzung auf eigenes Risiko',
      disclaimerUseAtOwnRiskDesc:
        'Die Nutzung unseres Dienstes erfolgt auf eigenes Risiko. Wir sind nicht verantwortlich für Folgen, die aus der Nutzung generierter Barcodes entstehen, einschließlich, aber nicht beschränkt auf:',
      disclaimerUseAtOwnRiskItems: [
        'Produktidentifikationsfehler oder falsche Kennzeichnung.',
        'Lagerverwaltungsprobleme.',
        'Compliance-Verstöße oder regulatorische Probleme.',
        'Finanzielle Verluste oder Geschäftsunterbrechungen.',
      ],
      disclaimerModificationsTitle: 'Dienständerungen',
      disclaimerModificationsDesc:
        'Wir behalten uns das Recht vor, jeden Aspekt unseres Dienstes jederzeit ohne vorherige Ankündigung zu ändern, auszusetzen oder einzustellen. Wir sind nicht für Unannehmlichkeiten oder Verluste verantwortlich, die aus solchen Änderungen oder Einstellungen entstehen.',
      disclaimerJurisdictionTitle: 'Gerichtsbarkeit',
      disclaimerJurisdictionDesc:
        'Dieser Haftungsausschluss unterliegt den Gesetzen der Volksrepublik China. Alle Streitigkeiten, die aus diesem Haftungsausschluss entstehen, unterliegen der ausschließlichen Gerichtsbarkeit der Gerichte in Shenzhen, China.',
      disclaimerContactTitle: 'Kontaktieren Sie uns',
      disclaimerContactDesc:
        'Bei Fragen zu diesem Haftungsausschluss kontaktieren Sie uns bitte unter barcode@chdaoai.com. Wir verpflichten uns, transparente Informationen über unseren Dienst bereitzustellen und alle Bedenken, die Sie haben könnten, zu adressieren.',

      copyrightTitle: 'Urheberrechtshinweis',
      copyrightIntroTitle: 'Einführung',
      copyrightIntroDesc:
        'Dieser Urheberrechtshinweis beschreibt das Eigentum und die Nutzungsrechte an Inhalt, Design und Funktionalität unseres Barcode-Generators. Durch die Nutzung unseres Dienstes erkennen Sie an und stimmen zu, diese Urheberrechtsschutzmaßnahmen zu respektieren.',
      copyrightOwnershipTitle: 'Urheberrechtseigentum',
      copyrightOwnershipDesc:
        'Alle Inhalte, Designs und Funktionalitäten dieser Website und dieses Dienstes, einschließlich, aber nicht beschränkt auf Folgendes, sind ausschließliches Eigentum von Barcode Generator und durch Urheberrechtsgesetze geschützt:',
      copyrightOwnershipItems: [
        'Website-Design, Layout, Grafiken, Logos und visuelle Elemente.',
        'Softwarecode, Algorithmen und technische Implementierungen.',
        'Dokumentation, Hilfetext und Benutzerhandbücher.',
        'Markennamen, Dienstleistungsmarken und Handelskleidung.',
        'Kompilierungen, Datenbanken und aggregierte Inhalte.',
      ],
      copyrightUserContentTitle: 'Benutzergenerierte Inhalte',
      copyrightUserContentDesc:
        'Mit unserem Dienst generierte Barcodes werden von Benutzern erstellt und gehören ausschließlich den Benutzern, die sie generiert haben. Wir erheben keinen Anspruch auf Eigentum, Urheberrechte oder geistige Eigentumsrechte an benutzergenerierten Barcodes. Benutzer sind frei, ihre generierten Barcodes nach eigenem Ermessen zu verwenden, zu verteilen und zu kommerzialisieren.',
      copyrightPermittedUseTitle: 'Erlaubte Nutzung',
      copyrightPermittedUseDesc:
        'Sie erhalten eine eingeschränkte, nicht ausschließliche, nicht übertragbare Lizenz zur Nutzung unseres Dienstes zur Generierung von Barcodes für persönliche oder kommerzielle Zwecke, vorbehaltlich der folgenden Bedingungen:',
      copyrightPermittedUseItems: [
        'Sie können generierte Barcodes für jeden rechtmäßigen Zweck verwenden.',
        'Sie können generierte Barcodes für Ihre Verwendung herunterladen und speichern.',
        'Sie können generierte Barcodes mit anderen teilen.',
        'Sie können generierte Barcodes in kommerziellen Produkten oder Dienstleistungen verwenden.',
      ],
      copyrightProhibitedUseTitle: 'Verbotene Nutzung',
      copyrightProhibitedUseDesc:
        'Die folgenden Aktivitäten sind ohne unsere ausdrückliche schriftliche Genehmigung strengstens untersagt:',
      copyrightProhibitedUseItems: [
        'Reproduzieren, Kopieren oder Duplizieren unserer Website oder unseres Dienstes.',
        'Erstellen abgeleiteter Werke basierend auf unserem Dienst oder Website-Design.',
        'Reverse Engineering, Dekompilierung oder Disassemblierung unserer Software.',
        'Entfernen, Ändern oder Verbergen von Urheberrechtshinweisen oder proprietären Markierungen.',
        'Verwenden unseres Dienstes zur Erstellung konkurrierender Dienste oder Produkte.',
        'Scraping, Crawling oder automatisierte Datenextraktion aus unserem Dienst.',
      ],
      copyrightThirdPartyTitle: 'Drittanbieter-Inhalte',
      copyrightThirdPartyDesc:
        'Unser Dienst kann Inhalte, Bibliotheken oder Software von Drittanbietern enthalten oder darauf verweisen. Solche Inhalte bleiben Eigentum ihrer jeweiligen Eigentümer und unterliegen ihren eigenen Urheberrechts- und Lizenzbedingungen. Wir respektieren alle geistigen Eigentumsrechte von Drittanbietern.',
      copyrightInfringementTitle: 'Urheberrechtsverletzung',
      copyrightInfringementDesc:
        'Wenn Sie glauben, dass Inhalte auf unserer Website oder unserem Dienst Ihre Urheberrechte verletzen, kontaktieren Sie uns bitte sofort unter barcode@chdaoai.com mit den folgenden Informationen:',
      copyrightInfringementItems: [
        'Eine Beschreibung des urheberrechtlich geschützten Werks, von dem Sie behaupten, dass es verletzt wurde.',
        'Der Standort des angeblich verletzenden Materials in unserem Dienst.',
        'Ihre Kontaktinformationen, einschließlich Name, Adresse und E-Mail.',
        'Eine Erklärung, dass Sie in gutem Glauben davon ausgehen, dass die Nutzung nicht autorisiert ist.',
        'Eine Erklärung, dass die Informationen korrekt sind und Sie berechtigt sind, im Namen des Urheberrechtsinhabers zu handeln.',
      ],
      copyrightDMCATitle: 'DMCA-Konformität',
      copyrightDMCADesc:
        'Wir halten uns an geltende Urheberrechtsgesetze und werden umgehend auf gültige DMCA-Entfernungsbenachrichtigungen reagieren. Nach Erhalt einer gültigen Benachrichtigung entfernen oder deaktivieren wir den Zugang zu dem angeblich verletzenden Inhalt und benachrichtigen den Benutzer, der ihn veröffentlicht hat.',
      copyrightContactTitle: 'Kontaktieren Sie uns',
      copyrightContactDesc:
        'Bei Fragen zu Urheberrechten, Lizenzanfragen oder zur Meldung von Urheberrechtsverletzungen kontaktieren Sie uns bitte unter barcode@chdaoai.com. Wir sind verpflichtet, geistige Eigentumsrechte zu schützen und werden alle berechtigten Anliegen schnell behandeln.',

      legalNoticeTitle: 'Rechtlicher Hinweis',
      legalNoticeIntroTitle: 'Einführung',
      legalNoticeIntroDesc:
        'Dieser rechtliche Hinweis enthält wichtige Informationen über unser Unternehmen, unseren Dienst und unsere rechtlichen Verpflichtungen. Er dient als formelle Erklärung unserer Geschäftsidentität, Kontaktinformationen und rechtlichen Verantwortlichkeiten nach geltendem Recht.',
      legalNoticeCompanyTitle: 'Firmeninformationen',
      legalNoticeCompanyDesc:
        'Die folgenden Informationen werden gemäß den geltenden rechtlichen Anforderungen bereitgestellt:',
      legalNoticeCompanyName: 'Barcode Generator',
      legalNoticeCompanyAddress: '130 Longhua Avenue, Longhua District, Shenzhen, China',
      legalNoticeContactInfoTitle: 'Kontaktinformationen',
      legalNoticeContactInfoDesc:
        'Für Anfragen, Support oder rechtliche Angelegenheiten können Sie uns über die folgenden Kanäle kontaktieren:',
      legalNoticeContactEmail: 'E-Mail: barcode@chdaoai.com',
      legalNoticeContactAddress: 'Adresse: 130 Longhua Avenue, Longhua District, Shenzhen, China',
      legalNoticeResponsibleTitle: 'Verantwortlich für Inhalte',
      legalNoticeResponsibleDesc:
        'Die Inhalte unserer Website wurden mit größter Sorgfalt und Gewissenhaftigkeit erstellt. Wir können jedoch nicht die absolute Genauigkeit, Vollständigkeit oder Aktualität aller Informationen garantieren. Wir behalten uns das Recht vor, Inhalte jederzeit ohne vorherige Ankündigung zu ändern, zu aktualisieren oder zu entfernen.',
      legalNoticeLiabilityLinksTitle: 'Haftung für Links',
      legalNoticeLiabilityLinksDesc:
        'Unsere Website kann Links zu externen Websites enthalten, die von Dritten betrieben werden. Wir haben keine Kontrolle über den Inhalt, die Datenschutzpraktiken oder die Nutzungsbedingungen dieser externen Websites. Wir übernehmen keine Haftung für:',
      legalNoticeLiabilityLinksItems: [
        'Den Inhalt, die Genauigkeit oder die Rechtmäßigkeit externer Websites.',
        'Schäden oder Verluste, die durch den Besuch externer Links entstehen.',
        'Datenschutzpraktiken oder Datenerfassung durch Websites Dritter.',
        'Produkte, Dienstleistungen oder Informationen, die auf externen Websites angeboten werden.',
      ],
      legalNoticeCopyrightTitle: 'Urheberrecht',
      legalNoticeCopyrightDesc:
        'Die Inhalte und Werke auf dieser Website unterliegen dem Urheberrechtsgesetz. Vervielfältigung, Bearbeitung, Verbreitung und jede Form der Kommerzialisierung erfordern die schriftliche Zustimmung des jeweiligen Autors oder Schöpfers. Unbefugte Nutzung kann zu rechtlichen Schritten führen.',
      legalNoticeTrademarksTitle: 'Marken',
      legalNoticeTrademarksDesc:
        'Alle auf dieser Website verwendeten Marken, Dienstleistungsmarken und Handelsnamen sind Eigentum ihrer jeweiligen Eigentümer. Die Verwendung unserer Marken, einschließlich "Barcode Generator" und verwandter Marken, erfordert unsere vorherige schriftliche Zustimmung. Die unbefugte Verwendung unserer Marken ist untersagt.',
      legalNoticeGoverningLawTitle: 'Geltendes Recht',
      legalNoticeGoverningLawDesc:
        'Dieser rechtliche Hinweis und alle Angelegenheiten im Zusammenhang mit unserem Dienst unterliegen den Gesetzen der Volksrepublik China. Alle Rechtsstreitigkeiten unterliegen der ausschließlichen Gerichtsbarkeit der Gerichte in Shenzhen, China.',
      legalNoticeUpdatesTitle: 'Aktualisierungen des rechtlichen Hinweises',
      legalNoticeUpdatesDesc:
        'Wir behalten uns das Recht vor, diesen rechtlichen Hinweis jederzeit zu aktualisieren, um Änderungen in unserem Dienst, rechtlichen Anforderungen oder Geschäftspraktiken widerzuspiegeln. Benutzer werden ermutigt, diesen Hinweis regelmäßig zu überprüfen. Die fortgesetzte Nutzung unseres Dienstes nach Änderungen stellt die Annahme des aktualisierten Hinweises dar.',
      legalNoticeContactTitle: 'Kontaktieren Sie uns',
      legalNoticeContactDesc:
        'Bei Fragen zu diesem rechtlichen Hinweis oder rechtlichen Angelegenheiten kontaktieren Sie uns bitte unter barcode@chdaoai.com. Wir sind verpflichtet zur Transparenz und werden alle berechtigten Anfragen schnell beantworten.',

      intellectualPropertyTitle: 'Erklärung zum geistigen Eigentum',
      intellectualPropertyIntroTitle: 'Einführung',
      intellectualPropertyIntroDesc:
        'Diese Erklärung zum geistigen Eigentum beschreibt unsere Eigentumsrechte, Richtlinien und Schutzmaßnahmen in Bezug auf Marken, Urheberrechte, Patente, Geschäftsgeheimnisse und andere geistige Eigentumsrechte im Zusammenhang mit unserem Barcode-Generator-Dienst.',
      intellectualPropertyOwnershipTitle: 'Eigentum an geistigem Eigentum',
      intellectualPropertyOwnershipDesc:
        'Alle geistigen Eigentumsrechte an unserem Barcode-Generator-Dienst, einschließlich, aber nicht beschränkt auf Folgendes, sind Eigentum von Barcode Generator oder unseren Lizenzgebern:',
      intellectualPropertyOwnershipItems: [
        'Marken, Dienstleistungsmarken und Handelsnamen im Zusammenhang mit unserer Marke.',
        'Urheberrechte an Softwarecode, Algorithmen und technischer Dokumentation.',
        'Patente oder Patentanmeldungen im Zusammenhang mit unserer Technologie (falls vorhanden).',
        'Geschäftsgeheimnisse, proprietäre Algorithmen und vertrauliche Informationen.',
        'Website-Design, Benutzeroberfläche und Benutzererfahrungselemente.',
        'Geschäftsmethoden, Prozesse und Betriebsverfahren.',
      ],
      intellectualPropertyTrademarksTitle: 'Marken',
      intellectualPropertyTrademarksDesc:
        'Alle auf dieser Website und in Verbindung mit unserem Dienst verwendeten Marken, Dienstleistungsmarken und Handelsnamen sind Eigentum ihrer jeweiligen Eigentümer. Unsere Marken umfassen, sind aber nicht beschränkt auf:',
      intellectualPropertyTrademarksItems: [
        '"Barcode Generator" und Variationen davon.',
        'Unser Logo und Markenidentitätselemente.',
        'Dienstnamen und Produktkennungen.',
        'Slogans und Taglines im Zusammenhang mit unserem Dienst.',
      ],
      intellectualPropertyTrademarkUseTitle: 'Richtlinie zur Markennutzung',
      intellectualPropertyTrademarkUseDesc:
        'Die Verwendung unserer Marken erfordert unsere vorherige schriftliche Zustimmung. Die unbefugte Verwendung unserer Marken ist strengstens untersagt und kann zu rechtlichen Schritten führen. Wenn Sie unsere Marken verwenden möchten, kontaktieren Sie uns bitte unter barcode@chdaoai.com, um eine Genehmigung anzufordern.',
      intellectualPropertyCopyrightTitle: 'Urheberrechtsschutz',
      intellectualPropertyCopyrightDesc:
        'Alle ursprünglichen Inhalte, Softwarecode, Dokumentation und kreative Werke auf unserer Website und unserem Dienst sind durch das Urheberrechtsgesetz geschützt. Dies umfasst:',
      intellectualPropertyCopyrightItems: [
        'Quellcode und Softwareimplementierungen.',
        'Website-Design und Layout.',
        'Dokumentation und Benutzerhandbücher.',
        'Grafiken, Bilder und visuelle Elemente.',
        'Geschriebene Inhalte und Kopien.',
      ],
      intellectualPropertyThirdPartyTitle: 'Geistiges Eigentum Dritter',
      intellectualPropertyThirdPartyDesc:
        'Unser Dienst verwendet Bibliotheken, Software und Technologien von Drittanbietern, die ihren jeweiligen Lizenzen und geistigen Eigentumsrechten unterliegen. Wir respektieren alle geistigen Eigentumsrechte Dritter und halten uns an geltende Lizenzen, einschließlich:',
      intellectualPropertyThirdPartyItems: [
        'Open-Source-Softwarelizenzen (MIT, Apache usw.).',
        'Kommerzielle Softwarelizenzen und Vereinbarungen.',
        'Bedingungen und Bestimmungen von Drittanbieter-APIs.',
        'Schriftlizenzen und Designressourcen.',
      ],
      intellectualPropertyUserContentTitle: 'Benutzergenerierte Inhalte',
      intellectualPropertyUserContentDesc:
        'Benutzer behalten alle geistigen Eigentumsrechte an Barcodes, die sie mit unserem Dienst generieren. Wir erheben keinen Anspruch auf Eigentum, Urheberrechte oder geistige Eigentumsrechte an benutzergenerierten Inhalten. Benutzer sind frei zu:',
      intellectualPropertyUserContentItems: [
        'Generierte Barcodes für jeden rechtmäßigen Zweck verwenden.',
        'Marken oder Urheberrechte für ihre Barcodes registrieren.',
        'Ihre generierten Barcodes an Dritte lizenzieren oder verkaufen.',
        'Ihre Barcodes modifizieren oder abgeleitete Werke daraus erstellen.',
      ],
      intellectualPropertyEnforcementTitle: 'Durchsetzung von Rechten',
      intellectualPropertyEnforcementDesc:
        'Wir nehmen geistige Eigentumsrechte ernst und werden angemessene rechtliche Schritte gegen jede Verletzung unseres geistigen Eigentums einleiten. Dies kann umfassen:',
      intellectualPropertyEnforcementItems: [
        'Ausstellen von Unterlassungs- und Abmahnungsschreiben.',
        'Einreichen von Klagen auf Schadensersatz und einstweilige Verfügungen.',
        'Melden von Verstößen an die zuständigen Behörden.',
        'Verfolgen von Strafanzeigen bei schwerwiegenden Verstößen.',
      ],
      intellectualPropertyReportingTitle: 'Verletzung melden',
      intellectualPropertyReportingDesc:
        'Wenn Sie glauben, dass Ihre geistigen Eigentumsrechte durch Inhalte in unserem Dienst verletzt wurden, kontaktieren Sie uns bitte sofort unter barcode@chdaoai.com mit:',
      intellectualPropertyReportingItems: [
        'Einer detaillierten Beschreibung des angeblich verletzenden Inhalts.',
        'Nachweis Ihres Eigentums an der geistigen Eigenschaft.',
        'Ihren Kontaktinformationen und Autorisierung zum Handeln.',
        'Einer Erklärung des guten Glaubens an eine Verletzung.',
      ],
      intellectualPropertyContactTitle: 'Kontaktieren Sie uns',
      intellectualPropertyContactDesc:
        'Bei Fragen zu geistigem Eigentum, Lizenzanfragen oder zur Meldung von Verletzungen kontaktieren Sie uns bitte unter barcode@chdaoai.com. Wir sind verpflichtet, geistige Eigentumsrechte zu schützen und werden alle berechtigten Anliegen schnell und professionell behandeln.',
    },
    barcode: {
      generator: 'Barcode-Generator',
      bulkGenerator: 'Batch-Generator',
      barcodeType: 'Barcode-Typ',
      size: 'Größe',
      textColor: 'Textfarbe',
      background: 'Hintergrund',
      format: 'Format',
      barcodeData: 'Barcode-Daten',
      onePerLine: '(eine pro Zeile, max. 50)',
      itemLabel: 'Code',
      itemsLabel: 'Codes',
      placeholder: 'Werte eingeben, eine Zeile pro Code',
      placeholderExample: 'Beispiel:\n1234567890128\nHALLO123\nhttps://example.com',
      generate: 'Barcodes generieren',
      download: 'Download',
      downloadZIP: 'ZIP herunterladen',
      downloadPDF: 'PDF herunterladen',
      downloadReady: 'ZIP bereit – jederzeit herunterladen.',
      downloadGeneratedZip: 'Erstelltes ZIP laden',
      downloadCsvTemplate: 'CSV-Vorlage',
      downloadExcelTemplate: 'Excel-Vorlage',
      templateDescription: 'Mit Vorlagen Liste schneller vorbereiten.',
      preview: 'Vorschau',
      clearAll: 'Alle löschen',
      uploadFile: 'CSV- oder Excel-Datei hochladen',
      clickUpload: 'Klicken oder Datei ziehen',
      fileTypes: 'CSV, XLSX, XLS (bis 10 MB)',
      tip: 'Tipp:',
      tipDesc: 'Jede Zelle = ein Barcode. Dateiname = Wert.',
      generating: 'Wird generiert...',
      processing: 'Verarbeitung läuft...',
      generated: 'erstellt',
      alerts: {
        noDataInput: 'Bitte mindestens einen Wert eingeben.',
        errorPrefix: 'Fehler beim Generieren:',
        generateFirst: 'Bitte zuerst generieren.',
        fileRequired: 'Bitte CSV- oder Excel-Datei hochladen.',
        noDataFound: 'Keine gültigen Daten gefunden.',
        success: 'Erfolgreich erstellt',
        processingError: 'Fehler bei der Verarbeitung:',
        downloadStarted: 'Download gestartet.',
      },
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: '私たちについて',
      contact: 'お問い合わせ',
    },
    home: {
      title: 'オンラインバーコードジェネレーター',
      subtitle: '無料でバーコードを作成。複数タイプと一括生成に対応。',
      singleBarcode: '単体バーコード',
      bulkBarcode: '一括バーコード',
      recognizer: {
        uploadPrompt: '画像をアップロードするか、ここにドラッグしてください',
        uploadHint: 'PNG/JPEGに対応',
        previewPlaceholder: 'アップロード後にプレビューがここに表示されます',
        resultsTitle: '認識結果',
        noResults: '結果なし',
        browserNotSupport: 'ブラウザは BarcodeDetector をサポートしていません。フォールバックライブラリを使用します',
        browserSuggest: '最適な結果には最新版の Chrome または Edge を使用してください',
        fallbackError: 'フォールバックでの認識に失敗しました',
        detectError: '認識エラー：',
        typeLabel: '種類',
        valueLabel: '内容',
      },
    },
    footer: {
      description: '多彩なバーコードタイプと一括生成に対応した無料ツール。',
      legal: '法務',
      contact: 'コンタクト',
      email: 'メール',
      address: '住所',
      copyright: 'All rights reserved.',
      title: 'バーコードジェネレーター',
      legalNext: 'ポリシー',
      privacy: 'プライバシー',
      terms: '利用規約',
      refund: '返金ポリシー',
      disclaimer: '免責事項',
      copyrightNotice: '著作権',
      legalNotice: '法的通知',
      intellectualProperty: '知的財産',
      contactTitle: 'お問い合わせ',
      addressDetail: '中国深圳市龍華区龍華大道130号',
    },
    features: {
      heading: '主な機能',
      cards: [
        { icon: '📊', title: '多様なバーコード', description: 'Code128・Code39・EAN-13・UPC-A・QRコード等をサポート。' },
        { icon: '📏', title: 'サイズ調整', description: '100px〜1000pxまで自由に設定。' },
        { icon: '🎨', title: 'カラー設定', description: '文字色と背景色をブランドに合わせて変更。' },
        { icon: '💾', title: '複数形式', description: 'PNG・JPEG・PDFで高品質エクスポート。' },
        { icon: '📦', title: '一括生成', description: '最大50件、またはCSV/Excelのアップロードに対応。' },
        { icon: '🆓', title: '完全無料', description: '登録不要、利用制限なし。' },
      ],
    },
    help: {
      heading: '使い方',
      singleTitle: '単体生成の手順',
      singleSteps: [
        'バーコードタイプを選択。',
        'サイズを100〜1000pxで調整。',
        '文字色と背景色を設定。',
        '出力形式（PNG/JPEG/PDF）を選択。',
        'テキストエリアにデータを入力（1行1件・最大50件）。',
        '「バーコードを生成」をクリックしてプレビュー。',
        '個別またはZIP/PDFでダウンロード。',
      ],
      bulkTitle: '一括生成の手順',
      bulkSteps: [
        'タイプ・サイズ・色・形式を設定。',
        'バーコード内容を記載したCSV/Excelをアップロード。',
        '各セルが1件のバーコードとして処理されます。',
        '「生成」ボタンで処理を開始。',
        '生成された画像をZIPでダウンロード。',
        'ファイル名はバーコード内容になります。',
      ],
      tipsTitle: 'ヒント',
      tips: [
        'QRコードはテキストやURLなど自由にエンコード可。',
        'EAN-13/UPC-Aは固定桁数の数字のみ対応。',
        'Code128/Code39は英数字をサポート。',
        '大きなファイルは処理に時間がかかります。',
        '生成ファイル名はバーコード内の文字列です。',
      ],
    },
    examples: {
      heading: 'サンプル',
      items: [
        { type: 'Code128', data: 'HELLO123', description: '商品コード向けの英数字バーコード。' },
        { type: 'EAN-13', data: '1234567890128', description: '13桁の小売向けバーコード。' },
        { type: 'QR Code', data: 'https://barcode.chdaoai.com', description: 'URLやリンクを格納。' },
        { type: 'UPC-A', data: '012345678905', description: '米国市場向け12桁バーコード。' },
      ],
    },
    feedback: {
      heading: 'フィードバック',
      name: 'お名前',
      email: 'メールアドレス',
      message: 'メッセージ',
      submit: '送信',
      success: 'ご意見ありがとうございます！',
      description: 'サービス改善のため、ぜひご意見をお寄せください。',
    },
    about: {
      title: '私たちについて',
      subtitle: '企業・個人を支えるプロフェッショナルなバーコード生成',
      whoWeAre: 'チーム紹介',
      whoWeAreDesc1: '私たちは世界中のユーザーへ高品質なバーコード生成ツールを提供しています。',
      whoWeAreDesc2: '単体から大量生成まで、素早く簡単に作成できる環境を整えています。',
      mission: 'ミッション',
      missionDesc: '信頼できる無料ツールで専門的な機能を誰でも利用可能に。',
      innovation: 'イノベーション',
      innovationDesc: '継続的な機能改善と技術アップデート。',
      quality: '品質',
      qualityDesc: '安定性と正確性を重視。',
      accessibility: 'アクセシビリティ',
      accessibilityDesc: '誰でも使いやすいUIと体験を追求。',
      whatWeOffer: '提供内容',
      multipleTypes: '多彩なバーコード',
      multipleTypesDesc: 'Code128/Code39/EAN-13/UPC-A/QRなど',
      customizable: '細かな設定',
      customizableDesc: 'サイズ・カラー・形式を自由に調整',
      bulkGen: '大量生成',
      bulkGenDesc: '最大50件、CSV/Excel対応',
      multipleFormats: '複数形式',
      multipleFormatsDesc: 'PNG/JPEG/PDF出力',
      freeUnlimited: '無料・無制限',
      freeUnlimitedDesc: '費用・登録不要',
      fastReliable: '高速・安定',
      fastReliableDesc: '高速処理と高稼働率',
      ourTeam: 'チーム',
      ourTeamDesc: '多様な専門家が最適な体験を設計・運用。',
      contactInfo: '連絡先情報',
      email: 'メール',
      address: '住所',
      teamMembers: [
        { role: 'リードエンジニア', department: 'テクノロジー', description: 'Webとバーコード技術に精通。' },
        { role: 'プロダクトマネージャー', department: 'プロダクト', description: 'ユーザー視点の体験設計を担当。' },
        { role: 'UI/UXデザイナー', department: 'デザイン', description: '直感的で美しいUIを制作。' },
        { role: '品質管理', department: 'QA', description: '信頼性とパフォーマンスを監視。' },
        { role: 'バックエンドエンジニア', department: 'インフラ', description: 'スケーラブルな基盤を構築。' },
        { role: 'マーケティング', department: 'グロース', description: '幅広いユーザーへのリーチを拡大。' },
      ],
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'ご質問・ご要望があればお気軽にご連絡ください！',
      emailUs: 'メールで連絡',
      emailDesc: '通常24時間以内にご返信します。',
      visitUs: '所在地',
      visitDesc: '深圳テックエリアの中心にオフィスがあります。',
      businessHours: '営業時間',
      businessHoursContent: '平日 9:00〜18:00（CST）',
      businessHoursDesc: '営業時間外はメールでご連絡ください。',
      sendMessage: 'メッセージ送信',
      sendMessageDesc: 'フォームに入力して送信してください。追ってご連絡します。',
      yourName: 'お名前',
      emailAddress: 'メールアドレス',
      subject: '件名',
      message: 'メッセージ',
      sendButton: '送信',
      sentButton: '送信完了 ✓',
      thankYou: 'メッセージありがとうございます。24時間以内に返信いたします。',
      whyContact: 'お問い合わせ例',
      techSupport: '技術サポート',
      techSupportDesc: '使い方や不具合でお困りの際はご連絡ください。',
      businessInquiries: 'ビジネス相談',
      businessInquiriesDesc: '提携や企業向けソリューションのご相談を承ります。',
      feedback: 'ご意見・ご要望',
      feedbackDesc: 'サービス改善のアイデアを歓迎します。',
      reportIssues: '不具合報告',
      reportIssuesDesc: '問題を発見された場合は詳細をお知らせください。',
      faq: 'よくある質問',
      faq1Q: '返信までの時間は？',
      faq1A: '営業日24時間以内を目安にしています。',
      faq2Q: '技術サポートはありますか？',
      faq2A: 'はい、すべてのユーザーが無料で利用できます。',
      faq3Q: '機能追加の要望は可能？',
      faq3A: 'もちろんです。フォームからお気軽にご提案ください。',
      responseTime: '対応時間',
      responseTimeDesc: '通常24時間以内にご回答します。',
      urgentNote: '緊急の場合は件名に「URGENT」とご記載ください。',
    },
    legal: {
      privacyTitle: 'プライバシーポリシー',
      privacyIntroTitle: '概要',
      privacyIntroDesc:
        '私たちはあなたのプライバシーを尊重し、個人データの保護に取り組んでいます。このプライバシーポリシーは、バーコード生成サービスを使用する際に、情報の収集、使用、保護の方法を説明します。',
      privacyCollectTitle: '収集する情報',
      privacyCollectDesc: '以下の種類の情報を収集する場合があります：',
      privacyCollectItems: [
        'お問い合わせ時に提供される情報（氏名、メールアドレス、メッセージ）。',
        'サービス改善のための利用データと分析情報。',
        '生成されたバーコードデータ（ブラウザ内でローカル処理）。',
        'デバイス情報（ブラウザの種類、オペレーティングシステム、画面解像度など）。',
        'セキュリティと分析のためのIPアドレスおよび一般的な位置情報。',
      ],
      privacyUseTitle: '情報の利用方法',
      privacyUseDesc: '収集した情報は以下の目的で使用します：',
      privacyUseItems: [
        'バーコード生成サービスの提供と改善。',
        'お問い合わせやフィードバックへの対応。',
        '利用パターンの分析によるユーザー体験の向上。',
        'サービスのセキュリティと整合性の確保。',
        '法的義務の遵守および権利の保護。',
      ],
      privacySecurityTitle: 'データセキュリティ',
      privacySecurityDesc:
        '個人情報を保護するため、適切なセキュリティ対策を実施しています。すべてのバーコード生成はブラウザ内でローカル処理され、バーコードデータをサーバーに保存することはありません。収集したデータの保護には、業界標準の暗号化とセキュリティプロトコルを使用しています。',
      privacyCookiesTitle: 'Cookieおよび追跡技術',
      privacyCookiesDesc:
        '体験の向上、利用パターンの分析、パーソナライズされたコンテンツの提供のために、Cookieおよび類似の追跡技術を使用する場合があります。ブラウザの設定でCookieの設定を制御できます。Cookieが無効になっている場合、一部の機能が正常に動作しない可能性があります。',
      privacyThirdPartyTitle: '第三者サービス',
      privacyThirdPartyDesc:
        '当サービスは、Google AnalyticsやGoogle AdSenseなどの第三者分析・広告サービスと統合される場合があり、当サイトの利用に関する情報を収集する可能性があります。これらのサービスには独自のプライバシーポリシーがあり、確認することをお勧めします。',
      privacyUserRightsTitle: 'あなたの権利',
      privacyUserRightsDesc:
        '個人情報へのアクセス、更新、削除の権利があります。特定のデータ収集慣行からオプトアウトすることもできます。これらの権利を行使するには、barcode@chdaoai.comまでご連絡ください。',
      privacyDataRetentionTitle: 'データの保持',
      privacyDataRetentionDesc:
        'このポリシーに記載された目的を達成するために必要な期間のみ個人情報を保持します。法律でより長い保持期間が要求される場合を除きます。当サービスを通じて生成されたバーコードデータはローカルで処理され、サーバーに保存されません。',
      privacyChildrenTitle: '児童のプライバシー',
      privacyChildrenDesc:
        '当サービスは13歳未満の児童を対象としていません。児童から意図的に個人情報を収集することはありません。誤ってそのような情報を収集したと思われる場合は、すぐにご連絡ください。',
      privacyChangesTitle: 'このポリシーの変更',
      privacyChangesDesc:
        'このプライバシーポリシーを随時更新する場合があります。重要な変更については、このページに新しいポリシーを掲載し、「最終更新日」を更新してお知らせします。変更後のサービス継続利用は、更新されたポリシーの受諾を意味します。',
      privacyContactTitle: 'お問い合わせ',
      privacyContactDesc:
        'このプライバシーポリシーに関するご質問は、barcode@chdaoai.comまでご連絡ください。',

      termsTitle: '利用規約',
      termsUpdated: '最終更新日',
      termsAcceptanceTitle: '規約の受諾',
      termsAcceptanceDesc:
        'バーコード生成サービスにアクセスし、使用することで、これらの利用規約に同意し、これに拘束されることに同意したものとみなされます。これらの規約に同意しない場合は、サービスを使用しないでください。',
      termsUseTitle: 'サービスの利用',
      termsUseDesc:
        '個人または商用目的でバーコードを生成するためにサービスを使用できます。以下の目的を含む、違法または不正な目的でサービスを使用することに同意しません：',
      termsUseItems: [
        '偽造品や詐欺活動のためのバーコード生成。',
        '適用される法律や規制の違反。',
        '知的財産権の侵害。',
        '悪意のあるコードや有害なコンテンツの送信。',
        'サービスのセキュリティを妨害または侵害する試み。',
      ],
      termsUserAccountTitle: 'ユーザーアカウント',
      termsUserAccountDesc:
        '現在、当サービスはユーザー登録を必要としません。ただし、将来アカウント機能を導入する場合、アカウント認証情報の機密性を維持し、アカウントで発生するすべての活動に責任を負います。',
      termsIntellectualPropertyTitle: '知的財産',
      termsIntellectualPropertyDesc:
        'テキスト、グラフィック、ロゴ、ソフトウェアを含むがこれらに限定されない、当サービスのすべてのコンテンツ、機能、機能性は、当社またはライセンサーが所有し、著作権、商標、その他の知的財産法によって保護されています。明示的な書面による許可なく、複製、配布、または派生作品を作成することはできません。',
      termsUserContentTitle: 'ユーザー生成コンテンツ',
      termsUserContentDesc:
        '当サービスを使用して生成したバーコードの所有権を保持します。ただし、当サービスを使用することで、サービス改善の目的で、集約された利用データの使用、表示、分析について、非独占的でロイヤルティフリーのライセンスを当社に付与することに同意します。',
      termsAvailabilityTitle: 'サービスの可用性',
      termsAvailabilityDesc:
        '信頼性の高いサービスを提供するよう努めていますが、中断のない、またはエラーのない動作を保証するものではありません。事前の通知なく、いつでもサービスを変更、中断、または中止する権利を留保します。サービス中断による損失や損害について責任を負いません。',
      termsModificationsTitle: 'サービスの変更',
      termsModificationsDesc:
        '事前の通知なく、いつでもサービスのあらゆる側面を変更、更新、または中止する権利を留保します。特定の機能に制限を設けたり、通知や責任なくサービスの一部へのアクセスを制限する場合もあります。',
      termsLiabilityTitle: '責任の制限',
      termsLiabilityDesc:
        '当サービスの使用または使用不能に起因する直接的、間接的、偶発的、特別、結果的損害について責任を負いません。サービスは「現状のまま」提供され、商品性、特定目的への適合性、または非侵害の保証を含むがこれらに限定されない、いかなる種類の明示的または黙示的保証もありません。',
      termsIndemnificationTitle: '補償',
      termsIndemnificationDesc:
        'サービスの使用、これらの規約の違反、または第三者の権利の侵害に起因する、あらゆる請求、損害、損失、責任、費用（弁護士費用を含む）から当社を補償し、無害に保つことに同意します。',
      termsTerminationTitle: '終了',
      termsTerminationDesc:
        'これらの規約の違反を含む、いかなる理由でも、事前の通知なく、サービスのアクセスを即座に終了または停止する権利を留保します。終了時、サービスの使用権は即座に停止します。',
      termsGoverningLawTitle: '準拠法',
      termsGoverningLawDesc:
        'これらの利用規約は、中華人民共和国の法律に準拠し、解釈されます。法の抵触条項を考慮しません。これらの規約から生じる紛争は、中国深センの裁判所の専属管轄に服します。',
      termsDisputeResolutionTitle: '紛争解決',
      termsDisputeResolutionDesc:
        'これらの規約から生じる、または関連する紛争が発生した場合、まず当社に連絡して友好的な解決を求めることをお勧めします。直接のコミュニケーションで解決できない場合、適用される仲裁規則に従って、拘束力のある仲裁によって解決されます。',
      termsSeverabilityTitle: '分離可能性',
      termsSeverabilityDesc:
        'これらの規約のいずれかの条項が執行不能または無効と判断された場合、その条項は必要最小限に制限または削除され、残りの条項は完全に有効であり続けます。',
      termsContactTitle: 'お問い合わせ',
      termsContactDesc:
        'これらの規約に関するご質問は、barcode@chdaoai.comまでご連絡ください。',

      refundTitle: '返金ポリシー',
      refundIntroTitle: '概要',
      refundIntroDesc:
        'この返金ポリシーは、将来提供する可能性のある有料サービスに関する返金の条件と規定を説明しています。現在、バーコード生成サービスは無料で提供されています。',
      refundFreeServiceTitle: '無料サービス',
      refundFreeServiceDesc:
        'バーコード生成サービスは現在、すべてのユーザーに無料で提供されています。そのため、返金する支払いはありません。単一バーコード生成、一括生成、複数のエクスポート形式を含むすべての機能が無料で利用できます。',
      refundFuturePaidTitle: '将来の有料サービス',
      refundFuturePaidDesc:
        '将来有料サービス、サブスクリプション、またはプレミアム機能を導入する場合、以下の返金ポリシーが適用されます：',
      refundFuturePaidItems: [
        '返金リクエストは購入後30日以内に提出する必要があります。',
        '返金は7-14営業日以内に元の支払い方法に処理されます。',
        'サブスクリプションサービスの返金は、未使用時間に基づいて比例計算される場合があります。',
        '大幅に使用または悪用されたサービスへの返金を拒否する権利を留保します。',
      ],
      refundEligibilityTitle: '返金の適格性',
      refundEligibilityDesc:
        '以下の状況で返金が認められる場合があります：',
      refundEligibilityItems: [
        'サービスの故障または約束された機能の提供失敗。',
        '重複または偶発的な請求。',
        '返金期間内のサブスクリプションのキャンセル。',
        '解決できない技術的問題によるサービスアクセスの妨害。',
      ],
      refundNonEligibleTitle: '返金不可の項目',
      refundNonEligibleDesc:
        '以下は一般的に返金の対象外です：',
      refundNonEligibleItems: [
        '返金期間を過ぎて使用されたサービス。',
        'ユーザーエラーまたはサービス機能の誤解による返金リクエスト。',
        '利用規約違反によるサービスの終了。',
        '既に提供されたカスタムまたはパーソナライズされたサービス。',
      ],
      refundProcessTitle: '返金プロセス',
      refundProcessDesc:
        '返金をリクエストするには、以下の情報とともにbarcode@chdaoai.comまでご連絡ください：',
      refundProcessItems: [
        'アカウントのメールアドレスまたは取引ID。',
        '購入日と支払い方法。',
        '返金リクエストの理由。',
        '関連する文書やスクリーンショット。',
      ],
      refundProcessingTimeTitle: '処理時間',
      refundProcessingTimeDesc:
        '返金リクエストは5-7営業日以内に審査されます。承認後、返金は7-14営業日以内に元の支払い方法に処理されます。処理時間は支払いプロバイダーによって異なる場合があります。',
      refundContactTitle: 'お問い合わせ',
      refundContactDesc:
        '返金に関するご質問や返金リクエストの提出については、barcode@chdaoai.comまでご連絡ください。返金問題を公正かつ迅速に解決するよう努めています。',

      disclaimerTitle: '免責事項',
      disclaimerIntroTitle: '概要',
      disclaimerIntroDesc:
        'この免責事項は、バーコード生成サービスの一般的なガイドライン、免責事項、利用条件を定めています。当サービスを使用することで、この免責事項を読み、理解し、これに拘束されることに同意したものとみなされます。',
      disclaimerNoWarrantyTitle: '保証なし',
      disclaimerNoWarrantyDesc:
        'バーコード生成サービスは「現状のまま」および「利用可能な限り」で提供され、明示的または黙示的ないかなる保証もありません。サービスが中断なく、エラーなく、安全であること、または特定の要件を満たすことを保証するものではありません。以下の保証を含むがこれらに限定されない、すべての保証を否認します：',
      disclaimerNoWarrantyItems: [
        '商品性または特定目的への適合性の保証。',
        '生成されたバーコードの正確性、信頼性、または完全性に関する保証。',
        'サービスが常に利用可能である、または欠陥がないという保証。',
        '第三者サービスまたは統合に関する保証。',
      ],
      disclaimerAccuracyTitle: 'バーコードの正確性',
      disclaimerAccuracyDesc:
        '業界標準のアルゴリズムを使用して正確でスキャン可能なバーコードを生成するよう努めていますが、すべての生成されたバーコードがすべてのデバイスでスキャン可能である、または特定の業界標準を満たすことを保証することはできません。ユーザーは以下について単独で責任を負います：',
      disclaimerAccuracyItems: [
        '使用前に生成されたバーコードの正確性と機能性を確認すること。',
        'バーコードが適用される業界標準および規制に準拠していることを確保すること。',
        '意図したスキャンデバイスでバーコードをテストすること。',
        'バーコードデータの正確性と完全性を検証すること。',
      ],
      disclaimerLiabilityTitle: '責任の制限',
      disclaimerLiabilityDesc:
        '法律で許可される最大限の範囲で、以下に起因する直接的、間接的、偶発的、特別、結果的、または懲罰的損害について責任を負いません：',
      disclaimerLiabilityItems: [
        '当サービスの使用または使用不能。',
        '生成されたバーコードのエラー、省略、または不正確さ。',
        'データ、利益、またはビジネス機会の損失。',
        'データへの不正アクセスまたは変更。',
        '当サービスを通じてアクセスされる第三者サービスまたはコンテンツ。',
      ],
      disclaimerThirdPartyTitle: '第三者サービス',
      disclaimerThirdPartyDesc:
        '当サービスは、第三者サービス、ウェブサイト、またはアプリケーションと統合またはリンクする場合があります。これらの第三者のコンテンツ、プライバシー慣行、または利用規約について責任を負いません。第三者サービスとのやり取りは、あなたと第三者の間でのみ行われます。',
      disclaimerUseAtOwnRiskTitle: '自己責任での利用',
      disclaimerUseAtOwnRiskDesc:
        '当サービスの利用は自己責任です。生成されたバーコードの使用に起因する結果について責任を負いません。これには以下が含まれますが、これらに限定されません：',
      disclaimerUseAtOwnRiskItems: [
        '製品識別エラーまたは誤ったラベリング。',
        '在庫管理の問題。',
        'コンプライアンス違反または規制上の問題。',
        '財務損失またはビジネスの中断。',
      ],
      disclaimerModificationsTitle: 'サービスの変更',
      disclaimerModificationsDesc:
        '事前の通知なく、いつでもサービスのあらゆる側面を変更、中断、または中止する権利を留保します。そのような変更または中止に起因する不都合や損失について責任を負いません。',
      disclaimerJurisdictionTitle: '管轄権',
      disclaimerJurisdictionDesc:
        'この免責事項は中華人民共和国の法律に準拠します。この免責事項から生じる紛争は、中国深センの裁判所の専属管轄に服します。',
      disclaimerContactTitle: 'お問い合わせ',
      disclaimerContactDesc:
        'この免責事項に関するご質問は、barcode@chdaoai.comまでご連絡ください。当サービスに関する透明な情報を提供し、お客様の懸念に対応するよう努めています。',

      copyrightTitle: '著作権表示',
      copyrightIntroTitle: 'はじめに',
      copyrightIntroDesc:
        'この著作権表示は、バーコード生成サービスのコンテンツ、デザイン、機能の所有権と使用権について説明しています。当サービスのご利用により、これらの著作権保護を尊重することに同意したものとみなされます。',
      copyrightOwnershipTitle: '著作権の所有',
      copyrightOwnershipDesc:
        '本ウェブサイトおよびサービスのすべてのコンテンツ、デザイン、機能（以下を含むがこれらに限定されない）は、Barcode Generatorの独占的所有物であり、著作権法により保護されています：',
      copyrightOwnershipItems: [
        'ウェブサイトのデザイン、レイアウト、グラフィック、ロゴ、視覚的要素。',
        'ソフトウェアコード、アルゴリズム、技術的実装。',
        'ドキュメント、ヘルプテキスト、ユーザーガイド。',
        'ブランド名、サービスマーク、トレードドレス。',
        'コンパイル、データベース、集約されたコンテンツ。',
      ],
      copyrightUserContentTitle: 'ユーザー生成コンテンツ',
      copyrightUserContentDesc:
        '当サービスを使用して生成されたバーコードは、ユーザーによって作成され、生成したユーザーに独占的に帰属します。当社は、ユーザー生成バーコードの所有権、著作権、または知的財産権を主張しません。ユーザーは、生成したバーコードを自由に使用、配布、商業化できます。',
      copyrightPermittedUseTitle: '許可された使用',
      copyrightPermittedUseDesc:
        '個人または商業目的でバーコードを生成するために当サービスを使用するための、限定された、非独占的、非譲渡可能なライセンスが付与されます。以下の条件に従います：',
      copyrightPermittedUseItems: [
        '生成されたバーコードをあらゆる合法的な目的で使用できます。',
        '生成されたバーコードをダウンロードして保存できます。',
        '生成されたバーコードを他の人と共有できます。',
        '生成されたバーコードを商業製品やサービスで使用できます。',
      ],
      copyrightProhibitedUseTitle: '禁止された使用',
      copyrightProhibitedUseDesc:
        '以下の活動は、当社の明示的な書面による許可なく、厳格に禁止されています：',
      copyrightProhibitedUseItems: [
        '当社のウェブサイトやサービスの複製、コピー、複写。',
        '当社のサービスやウェブサイトデザインに基づく派生作品の作成。',
        '当社のソフトウェアのリバースエンジニアリング、逆コンパイル、逆アセンブル。',
        '著作権表示や所有権マーキングの削除、変更、または隠蔽。',
        '競合するサービスや製品を作成するための当サービスの使用。',
        '当サービスからのスクレイピング、クローリング、または自動データ抽出。',
      ],
      copyrightThirdPartyTitle: '第三者コンテンツ',
      copyrightThirdPartyDesc:
        '当サービスは、第三者のコンテンツ、ライブラリ、またはソフトウェアを組み込んだり、参照したりする場合があります。そのようなコンテンツは、それぞれの所有者の財産であり、独自の著作権およびライセンス条件の対象となります。当社は、すべての第三者の知的財産権を尊重します。',
      copyrightInfringementTitle: '著作権侵害',
      copyrightInfringementDesc:
        '当社のウェブサイトまたはサービス上のコンテンツがあなたの著作権を侵害しているとお考えの場合は、以下の情報とともに barcode@chdaoai.com まですぐにご連絡ください：',
      copyrightInfringementItems: [
        '侵害されたと主張する著作権で保護された作品の説明。',
        '当サービス上の侵害されているとされる資料の場所。',
        '名前、住所、メールアドレスを含む連絡先情報。',
        '使用が許可されていないという善意の信念の声明。',
        '情報が正確であり、著作権所有者の代理として行動する権限があるという声明。',
      ],
      copyrightDMCATitle: 'DMCA準拠',
      copyrightDMCADesc:
        '当社は、適用される著作権法を遵守し、有効なDMCA削除通知に迅速に対応します。有効な通知を受領した後、侵害されているとされるコンテンツへのアクセスを削除または無効化し、投稿したユーザーに通知します。',
      copyrightContactTitle: 'お問い合わせ',
      copyrightContactDesc:
        '著作権に関するお問い合わせ、ライセンスリクエスト、または著作権侵害の報告については、barcode@chdaoai.com までご連絡ください。当社は知的財産権の保護に取り組んでおり、すべての正当な懸念事項に迅速に対応します。',

      legalNoticeTitle: '法的通知',
      legalNoticeIntroTitle: 'はじめに',
      legalNoticeIntroDesc:
        'この法的通知は、当社の会社、サービス、法的義務に関する重要な情報を提供します。これは、当社の事業アイデンティティ、連絡先情報、適用される法律に基づく法的責任の正式な声明として機能します。',
      legalNoticeCompanyTitle: '会社情報',
      legalNoticeCompanyDesc:
        '以下の情報は、適用される法的要件に従って提供されます：',
      legalNoticeCompanyName: 'Barcode Generator',
      legalNoticeCompanyAddress: '130 Longhua Avenue、龍華区、深セン、中国',
      legalNoticeContactInfoTitle: '連絡先情報',
      legalNoticeContactInfoDesc:
        'お問い合わせ、サポート、または法的問題については、以下のチャネルを通じて当社に連絡できます：',
      legalNoticeContactEmail: 'メール: barcode@chdaoai.com',
      legalNoticeContactAddress: '住所: 130 Longhua Avenue、龍華区、深セン、中国',
      legalNoticeResponsibleTitle: 'コンテンツの責任',
      legalNoticeResponsibleDesc:
        '当社のウェブサイトのコンテンツは、最大限の注意と勤勉さをもって作成されています。ただし、すべての情報の絶対的な正確性、完全性、または適時性を保証することはできません。当社は、事前通知なく、いつでもコンテンツを変更、更新、または削除する権利を留保します。',
      legalNoticeLiabilityLinksTitle: 'リンクの責任',
      legalNoticeLiabilityLinksDesc:
        '当社のウェブサイトには、第三者によって運営されている外部ウェブサイトへのリンクが含まれる場合があります。当社は、これらの外部サイトのコンテンツ、プライバシー慣行、または利用規約を制御することはできません。当社は、以下について責任を負いません：',
      legalNoticeLiabilityLinksItems: [
        '外部ウェブサイトのコンテンツ、正確性、または合法性。',
        '外部リンクの訪問から生じる損害または損失。',
        '第三者サイトによるプライバシー慣行またはデータ収集。',
        '外部サイトで提供される製品、サービス、または情報。',
      ],
      legalNoticeCopyrightTitle: '著作権',
      legalNoticeCopyrightDesc:
        'このウェブサイト上のコンテンツおよび作品は、著作権法の対象となります。複製、処理、配布、およびあらゆる形式の商業化には、それぞれの著作者または作成者の書面による同意が必要です。無許可の使用は法的措置につながる可能性があります。',
      legalNoticeTrademarksTitle: '商標',
      legalNoticeTrademarksDesc:
        'このウェブサイトで使用されているすべての商標、サービスマーク、および商号は、それぞれの所有者の財産です。「Barcode Generator」および関連する商標を含む当社の商標の使用には、事前の書面による同意が必要です。当社の商標の無許可使用は禁止されています。',
      legalNoticeGoverningLawTitle: '準拠法',
      legalNoticeGoverningLawDesc:
        'この法的通知および当社のサービスに関連するすべての事項は、中華人民共和国の法律に準拠します。法的紛争は、中国深センの裁判所の専属管轄に服します。',
      legalNoticeUpdatesTitle: '法的通知の更新',
      legalNoticeUpdatesDesc:
        '当社は、当社のサービス、法的要件、または事業慣行の変更を反映するために、いつでもこの法的通知を更新する権利を留保します。ユーザーは、この通知を定期的に確認することをお勧めします。変更後の当サービスの継続的な使用は、更新された通知の受諾を構成します。',
      legalNoticeContactTitle: 'お問い合わせ',
      legalNoticeContactDesc:
        'この法的通知または法的問題に関するご質問については、barcode@chdaoai.com までご連絡ください。当社は透明性に取り組んでおり、すべての正当なお問い合わせに迅速に対応します。',

      intellectualPropertyTitle: '知的財産権声明',
      intellectualPropertyIntroTitle: 'はじめに',
      intellectualPropertyIntroDesc:
        'この知的財産権声明は、当社のバーコード生成サービスに関連する商標、著作権、特許、営業秘密、その他の知的財産資産に関する当社の所有権、ポリシー、保護について説明しています。',
      intellectualPropertyOwnershipTitle: '知的財産権の所有',
      intellectualPropertyOwnershipDesc:
        '当社のバーコード生成サービスのすべての知的財産権（以下を含むがこれらに限定されない）は、Barcode Generatorまたは当社のライセンサーが所有しています：',
      intellectualPropertyOwnershipItems: [
        '当社のブランドに関連する商標、サービスマーク、商号。',
        'ソフトウェアコード、アルゴリズム、技術文書の著作権。',
        '当社の技術に関連する特許または特許出願（該当する場合）。',
        '営業秘密、独自のアルゴリズム、機密情報。',
        'ウェブサイトのデザイン、ユーザーインターフェース、ユーザーエクスペリエンス要素。',
        'ビジネス方法、プロセス、運用手順。',
      ],
      intellectualPropertyTrademarksTitle: '商標',
      intellectualPropertyTrademarksDesc:
        'このウェブサイトで使用され、当社のサービスに関連するすべての商標、サービスマーク、商号は、それぞれの所有者の財産です。当社の商標には、以下が含まれますが、これらに限定されません：',
      intellectualPropertyTrademarksItems: [
        '「Barcode Generator」およびそのバリエーション。',
        '当社のロゴおよびブランドアイデンティティ要素。',
        'サービス名および製品識別子。',
        '当社のサービスに関連するスローガンおよびタグライン。',
      ],
      intellectualPropertyTrademarkUseTitle: '商標使用ポリシー',
      intellectualPropertyTrademarkUseDesc:
        '当社の商標の使用には、事前の書面による同意が必要です。当社の商標の無許可使用は厳格に禁止されており、法的措置につながる可能性があります。当社の商標を使用したい場合は、barcode@chdaoai.com までご連絡の上、許可を申請してください。',
      intellectualPropertyCopyrightTitle: '著作権保護',
      intellectualPropertyCopyrightDesc:
        '当社のウェブサイトおよびサービス上のすべてのオリジナルコンテンツ、ソフトウェアコード、文書、および創作物は、著作権法により保護されています。これには以下が含まれます：',
      intellectualPropertyCopyrightItems: [
        'ソースコードおよびソフトウェア実装。',
        'ウェブサイトのデザインおよびレイアウト。',
        'ドキュメントおよびユーザーガイド。',
        'グラフィック、画像、視覚的要素。',
        '書かれたコンテンツおよびコピー。',
      ],
      intellectualPropertyThirdPartyTitle: '第三者の知的財産',
      intellectualPropertyThirdPartyDesc:
        '当社のサービスは、それぞれのライセンスおよび知的財産権の対象となる第三者のライブラリ、ソフトウェア、技術を使用しています。当社は、すべての第三者の知的財産を尊重し、適用されるライセンスを遵守します。これには以下が含まれます：',
      intellectualPropertyThirdPartyItems: [
        'オープンソースソフトウェアライセンス（MIT、Apacheなど）。',
        '商用ソフトウェアライセンスおよび契約。',
        '第三者APIの条件および条項。',
        'フォントライセンスおよびデザインリソース。',
      ],
      intellectualPropertyUserContentTitle: 'ユーザー生成コンテンツ',
      intellectualPropertyUserContentDesc:
        'ユーザーは、当サービスを使用して生成したバーコードのすべての知的財産権を保持します。当社は、ユーザー生成コンテンツの所有権、著作権、または知的財産権を主張しません。ユーザーは、以下を自由に行えます：',
      intellectualPropertyUserContentItems: [
        '生成されたバーコードをあらゆる合法的な目的で使用する。',
        'バーコードの商標または著作権を登録する。',
        '生成されたバーコードを第三者にライセンスまたは販売する。',
        'バーコードを変更または派生作品を作成する。',
      ],
      intellectualPropertyEnforcementTitle: '権利の執行',
      intellectualPropertyEnforcementDesc:
        '当社は知的財産権を真剣に受け止め、当社の知的財産の侵害に対して適切な法的措置を講じます。これには以下が含まれる場合があります：',
      intellectualPropertyEnforcementItems: [
        '停止および差し止め通知の発行。',
        '損害賠償および差し止め救済の訴訟の提起。',
        '関連当局への違反の報告。',
        '重大な違反に対する刑事告発の追求。',
      ],
      intellectualPropertyReportingTitle: '侵害の報告',
      intellectualPropertyReportingDesc:
        '当社のサービス上のコンテンツによってあなたの知的財産権が侵害されているとお考えの場合は、以下とともに barcode@chdaoai.com まですぐにご連絡ください：',
      intellectualPropertyReportingItems: [
        '侵害されているとされるコンテンツの詳細な説明。',
        '知的財産の所有権の証明。',
        '連絡先情報および行動の承認。',
        '侵害の善意の信念の声明。',
      ],
      intellectualPropertyContactTitle: 'お問い合わせ',
      intellectualPropertyContactDesc:
        '知的財産に関するお問い合わせ、ライセンスリクエスト、または侵害の報告については、barcode@chdaoai.com までご連絡ください。当社は知的財産権の保護に取り組んでおり、すべての正当な懸念事項に迅速かつ専門的に対応します。',
    },
    barcode: {
      generator: 'バーコード生成',
      bulkGenerator: '一括バーコード',
      barcodeType: 'バーコードタイプ',
      size: 'サイズ',
      textColor: '文字色',
      background: '背景色',
      format: '形式',
      barcodeData: 'データ',
      onePerLine: '（1行1件・最大50件）',
      itemLabel: '件',
      itemsLabel: '件',
      placeholder: '1行ごとにバーコード内容を入力',
      placeholderExample: '例：\n1234567890128\nHELLO123\nhttps://example.com',
      generate: 'バーコードを生成',
      download: 'ダウンロード',
      downloadZIP: 'ZIPをダウンロード',
      downloadPDF: 'PDFをダウンロード',
      downloadReady: 'ZIPファイルが準備できました。いつでもダウンロード可能です。',
      downloadGeneratedZip: '生成ZIPをダウンロード',
      downloadCsvTemplate: 'CSVテンプレート',
      downloadExcelTemplate: 'Excelテンプレート',
      templateDescription: 'テンプレートを利用してリストを素早く作成できます。',
      preview: 'プレビュー',
      clearAll: 'すべてクリア',
      uploadFile: 'CSVまたはExcelファイルをアップロード',
      clickUpload: 'クリックまたはドラッグでアップロード',
      fileTypes: 'CSV / XLSX / XLS（最大10MB）',
      tip: 'ヒント：',
      tipDesc: '各セルが1つのバーコードになります。ファイル名は内容と同じです。',
      generating: '生成中...',
      processing: '処理中...',
      generated: '生成済み',
      alerts: {
        noDataInput: '少なくとも1件のデータを入力してください。',
        errorPrefix: '生成エラー：',
        generateFirst: 'まずバーコードを生成してください。',
        fileRequired: 'CSVまたはExcelファイルをアップロードしてください。',
        noDataFound: '有効なデータが見つかりません。',
        success: '正常に生成しました',
        processingError: '処理中にエラーが発生しました：',
        downloadStarted: 'ダウンロードを開始しました。',
      },
    },
  },
}

export function getTranslations(locale: Locale) {
  // 强类型返回：确保 callers 可以安全访问 t.home 的 recognizer 字段（如果存在）
  return (translations[locale] || translations[defaultLocale]) as unknown as { home: HomeTranslations } & Record<string, any>
}

