import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.explore': 'Explore',
    'nav.howItWorks': 'How it works',
    'nav.faqs': 'FAQs',
    'nav.contact': 'Contact us',
    'nav.asFreelancer': 'As a Freelancer',
    'nav.asClient': 'As a Client',
    'nav.productDemo': 'Product Demo',
    'nav.testimonials': 'Testimonials',
    'nav.support': 'Support',
    'nav.roadmap': 'Roadmap',
    'nav.blog': 'Blog',
    'nav.login': 'Login',
    'nav.changeLanguage': 'Change Language',
    
    // Hero Section
    'hero.title': "India's First AI-Powered Escrow Platform for Freelancers & Clients",
    'hero.subtitle': 'Protect your work. Pursue your worth.',
    'hero.startTrial': 'Start Your Project',
    'hero.watchDemo': 'Watch Demo',
    'hero.happyCustomers': 'Happy Customers',
    'hero.successfulClosures': 'Successful Closures',
    'hero.secureEscrow': 'Secure Escrow',
    'hero.aiVerification': 'AI Verification',
    'hero.instantPayments': 'Instant Payments',
    'hero.activeUsers': 'Active Users',
    'hero.secured': 'Secured',
    'hero.getStartedToday': 'Get Started Today',
    
    // Benefits Section
    'benefits.title': 'Say goodbye to...',
    'benefits.subjectiveDisputes': 'Subjective quality disputes',
    'benefits.endlessRevisions': 'Endless revision delaying your payment',
    'benefits.unpredictablePayments': 'Unpredictable payment schedules',
    
    // SecureServe Benefits
    'secureServe.title': 'Switch to SecureServe',
    'secureServe.subtitle': 'Your AI-Powered Payment Guardian',
    'secureServe.smartContracts': 'Smart Contracts',
    'secureServe.smartContractsDesc': 'AI helps create clear, detailed project specifications that protect both parties and set clear expectations from the start.',
    'secureServe.secureEscrow': 'Secure Escrow System',
    'secureServe.secureEscrowDesc': 'Money is held safely in escrow until work is approved. Complete protection for both freelancers and clients throughout the project.',
    'secureServe.aiVerified': 'AI-Verified Deliverables',
    'secureServe.aiVerifiedDesc': 'Advanced AI instantly verifies if your work matches client requirements, eliminating subjective disputes and ensuring fair evaluation.',
    'secureServe.instantPayments': 'Instant Payments',
    'secureServe.instantPaymentsDesc': 'Once AI confirms work quality meets specifications, payments are transferred instantly to your account without delays.',
    
    // How It Works
    'howItWorks.title': 'How SecureServe Works',
    'howItWorks.subtitle': 'Simple, secure, and powered by AI to protect both freelancers and clients',
    
    // Testimonials
    'testimonials.title': 'What Our Users Say',
    'testimonials.subtitle': 'Real stories from freelancers and clients who trust SecureServe',
    'testimonials.watchVideo': 'Watch Video Testimonials',
    
    // Support
    'support.title': 'Support & Help Center',
    'support.subtitle': 'Get help when you need it with multiple support channels and clear escalation paths',
    
    // Roadmap
    'roadmap.title': 'Product Roadmap',
    'roadmap.subtitle': 'See what\'s coming next and request features for your workflow',
    
    // FAQs
    'faqs.title': 'Everything you need to know',
    'faqs.subtitle': 'Got questions? We\'ve got answers. Learn more about how SecureServe works and how it can benefit you.',
    
    // Contact Us Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team for support, partnerships, or general inquiries',
    'contact.backToHome': 'Back to Home',
    'contact.sendMessage': 'Send us a Message',
    'contact.userType': 'I am a',
    'contact.client': 'Client',
    'contact.freelancer': 'Freelancer',
    'contact.fullName': 'Full Name',
    'contact.email': 'Email Address',
    'contact.company': 'Company/Organization',
    'contact.phone': 'Phone Number',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.getInTouch': 'Get in Touch',
    'contact.ourOffices': 'Our Offices',
    'contact.businessHours': 'Business Hours',
    'contact.phoneSupport': 'Phone Support',
    'contact.emailSupport': 'Email Support',
    'contact.liveChat': 'Live Chat',
    'contact.successMessage': 'Thank you! Your message has been sent successfully. We\'ll get back to you within 4-6 hours.',
    
    // Footer
    'footer.company': 'SecureServe',
    'footer.description': 'India\'s first AI-powered escrow platform for freelancers and clients. Secure payments, verified deliverables.',
    'footer.contactUs': 'Contact Us',
    'footer.businessHours': 'Business Hours',
    'footer.copyright': '© 2025 SecureServe. Built for Indian freelancers, by Indian freelancers.',
    
    // Blog Section
    'blog.title': 'Latest Updates',
    'blog.subtitle': 'Stay informed about platform updates and industry insights',
    
    // Trust Indicators
    'trust.securityCompliance': 'Security & Compliance',
    'trust.platformPerformance': 'Platform Performance',
    'trust.trustedCertified': 'Trusted & Certified',
    'trust.uptime': 'Uptime',
    'trust.totalInsurance': 'Total insurance coverage',
    'trust.militaryGrade': 'Military-grade encryption',
    'trust.certifiedSecure': 'Certified secure',
    'trust.topTalent': 'Top Talent',
    'trust.qualityAssured': 'Quality Assured',
    'trust.fastDelivery': 'Fast Delivery',
    
    // Live Stats
    'stats.activeUsers': 'Active Users',
    'stats.projectsCompleted': 'Projects Completed',
    'stats.fundsSecured': 'Funds Secured',
    'stats.successRate': 'Success Rate',
    'stats.disputeResolution': 'Dispute resolution',
    'stats.inEscrow': 'In escrow',
    'stats.zeroDisputes': 'Zero disputes',
    'stats.thisMonth': 'this month',
    'stats.platformActivity': 'Platform Activity',
    'stats.live': 'Live',
    'stats.fundsInEscrow': 'Funds in Escrow',
    'stats.performanceMetrics': 'Performance Metrics',
    'stats.avgResolutionTime': 'Avg. Resolution Time',
    'stats.recentActivity': 'Recent Activity',
    'stats.projectCompleted': 'Project completed',
    'stats.released': 'released',
    'stats.newUserRegistered': 'New user registered',
    'stats.aiVerificationCompleted': 'AI verification completed',
    'stats.totalSpent': 'Total Spent',
    'stats.projectsFunded': 'Projects Funded',
    'stats.averageProjectCost': 'Average Project Cost',
    'stats.totalEarned': 'Total Earned',
    'stats.completedProjects': 'Completed Projects',
    'stats.averageProjectValue': 'Average Project Value',
    
    // Compliance Section
    'compliance.title': 'Security & Compliance',
    'compliance.subtitle': 'Bank-grade security with full regulatory compliance and comprehensive insurance coverage',
    'compliance.securityEncryption': 'Security & Encryption',
    'compliance.legalRegulatory': 'Legal & Regulatory',
    'compliance.certifications': 'Certifications',
    'compliance.insuranceProtection': 'Insurance & Protection',
    'compliance.securityInfrastructure': 'Security Infrastructure',
    'compliance.legalRegulatoryCompliance': 'Legal & Regulatory Compliance',
    'compliance.securityCertifications': 'Security Certifications',
    'compliance.insuranceCoverage': 'Insurance Coverage',
    'compliance.endToEndEncryption': 'End-to-End Encryption',
    'compliance.multiFactorAuth': 'Multi-Factor Authentication',
    'compliance.regularSecurityAudits': 'Regular Security Audits',
    'compliance.dataBackupRecovery': 'Data Backup & Recovery',
    'compliance.implemented': 'Implemented',
    'compliance.quarterly': 'Quarterly',
    'compliance.active': 'Active',
    'compliance.certified': 'Certified',
    'compliance.compliant': 'Compliant',
    'compliance.view': 'View',
    'compliance.download': 'Download',
    'compliance.issuedBy': 'Issued by',
    'compliance.validUntil': 'Valid until',
    'compliance.certificateId': 'Certificate ID',
    'compliance.professionalIndemnity': 'Professional Indemnity',
    'compliance.cyberLiability': 'Cyber Liability',
    'compliance.directorsOfficers': 'Directors & Officers',
    'compliance.escrowProtection': 'Escrow Protection',
    'compliance.provider': 'Provider',
    
    // Legal Pages
    'legal.title': 'Legal & Compliance',
    'legal.subtitle': 'Transparent policies and regulatory compliance for your peace of mind',
    'legal.termsOfService': 'Terms of Service',
    'legal.privacyPolicy': 'Privacy Policy',
    'legal.compliance': 'Compliance',
    'legal.transparencyReport': 'Transparency Report',
    'legal.lastUpdated': 'Last updated',
    'legal.questionsContact': 'Questions? Contact our legal team at',
    'legal.quickSummary': 'Quick Summary',
    'legal.serviceDescription': 'Service Description',
    'legal.userResponsibilities': 'User Responsibilities',
    'legal.forFreelancers': 'For Freelancers',
    'legal.forClients': 'For Clients',
    'legal.paymentTerms': 'Payment Terms',
    'legal.disputeResolution': 'Dispute Resolution',
    'legal.privacyCommitment': 'Privacy Commitment',
    'legal.informationWeCollect': 'Information We Collect',
    'legal.personalInformation': 'Personal Information',
    'legal.usageInformation': 'Usage Information',
    'legal.howWeUseInfo': 'How We Use Your Information',
    'legal.dataSecurity': 'Data Security',
    'legal.yourRights': 'Your Rights',
    'legal.rbiCompliance': 'RBI Compliance',
    'legal.internationalStandards': 'International Standards',
    'legal.regulatoryFramework': 'Regulatory Framework',
    'legal.indianRegulations': 'Indian Regulations',
    'legal.internationalCompliance': 'International Compliance',
    'legal.auditCertification': 'Audit & Certification',
    'legal.securityAudit': 'Security Audit',
    'legal.complianceReview': 'Compliance Review',
    'legal.legalReview': 'Legal Review',
    'legal.transparencyCommitment': 'Transparency Commitment',
    'legal.platformStatistics': 'Platform Statistics',
    'legal.securityIncidents': 'Security Incidents',
    'legal.complianceActivities': 'Compliance Activities',
    'legal.downloadFullReport': 'Download Full Report',
    'legal.viewPreviousReports': 'View Previous Reports',
    
    // Dashboard Common
    'dashboard.profile': 'Profile',
    'dashboard.projects': 'My Projects',
    'dashboard.transactions': 'Transactions',
    'dashboard.messages': 'Messages',
    'dashboard.logout': 'Logout',
    'dashboard.welcome': 'Welcome',
    'dashboard.profileInformation': 'Profile Information',
    'dashboard.editProfile': 'Edit Profile',
    'dashboard.saveChanges': 'Save Changes',
    'dashboard.cancel': 'Cancel',
    'dashboard.lastUpdated': 'Last updated',
    'dashboard.profileComplete': 'Profile Complete',
    'dashboard.noProjectsYet': 'No Projects Yet',
    'dashboard.noTransactionsYet': 'No Transactions Yet',
    'dashboard.noMessagesYet': 'No messages yet',
    'dashboard.sendMessage': 'Send Message',
    'dashboard.selectFreelancer': 'Select Freelancer',
    'dashboard.selectClient': 'Select Client',
    'dashboard.selectProject': 'Select Project',
    'dashboard.subjectCategory': 'Subject Category',
    'dashboard.messageContent': 'Message Content',
    'dashboard.fileAttachments': 'File Attachments',
    'dashboard.dragDropFiles': 'Drag and drop files here',
    'dashboard.browseFiles': 'Browse Files',
    'dashboard.supportedFormats': 'Supported: PDF, DOC, DOCX, JPG, PNG, MP4, ZIP, etc. Max 10MB per file',
    'dashboard.maxCharacters': 'Maximum 1000 characters',
    
    // Freelancer Dashboard
    'freelancer.welcomeMessage': 'Welcome to SecureServe! 🎉',
    'freelancer.completeProfile': 'Please complete your profile information to get started with projects and receive secure payments.',
    'freelancer.profileCompletion': 'Complete',
    'freelancer.freelancerId': 'Freelancer ID',
    'freelancer.willBeAssigned': 'Will be assigned after profile completion',
    'freelancer.uniqueId': 'Your unique freelancer identification number',
    'freelancer.autoGenerated': 'ID will be automatically generated when you complete your profile',
    'freelancer.fullName': 'Full Name',
    'freelancer.enterFullName': 'Enter your full legal name',
    'freelancer.emailAddress': 'Email Address',
    'freelancer.emailCannotChange': 'Email cannot be changed',
    'freelancer.mobileNumber': 'Mobile Number',
    'freelancer.enterMobile': 'Enter 10-digit mobile number',
    'freelancer.upiId': 'UPI ID',
    'freelancer.upiExample': 'Example: yourname@paytm, 9876543210@ybl',
    'freelancer.aadharNumber': 'Aadhar Card Number',
    'freelancer.aadharSecure': 'Your Aadhar details are encrypted and secure',
    'freelancer.projectsWillAppear': 'Your projects will appear here once clients start hiring you. Make sure your profile is complete to attract more clients.',
    'freelancer.completeProfileButton': 'Complete Profile',
    'freelancer.paymentHistory': 'View your payment history and completed transactions',
    'freelancer.viewProjects': 'View Projects',
    'freelancer.communicateClients': 'Communicate with clients about your projects',
    'freelancer.chooseClient': 'Choose a client...',
    'freelancer.startConversation': 'Start a conversation with a client to discuss project details, deliverables, and approvals.',
    
    // Client Dashboard
    'client.addProject': 'Add Project',
    'client.newProject': 'New Project',
    'client.createFirstProject': 'Create First Project',
    'client.createNewProject': 'Create New Project',
    'client.manageProjects': 'Manage and track your active and completed projects',
    'client.totalProjects': 'Total Projects',
    'client.projectsWillAppear': 'Start your first project by clicking the "New Project" button above. Connect with talented freelancers and bring your ideas to life.',
    'client.createProject': 'Create Project',
    'client.paymentHistory': 'View your payment history and project transactions',
    'client.totalSpent': 'Total Spent',
    'client.transactionHistory': 'Your payment history will appear here once you complete projects and make payments. All transactions are secure and processed through our escrow system.',
    'client.communicateFreelancers': 'Communicate with freelancers about your projects',
    'client.chooseFreelancer': 'Choose a freelancer...',
    'client.startConversationFreelancer': 'Start a conversation with a freelancer to discuss project details, deliverables, and approvals.',
    
    // Project Status
    'status.complete': 'Complete',
    'status.active': 'Active',
    'status.manualRevision': 'Manual Revision',
    'status.approvalPending': 'Approval Pending',
    'status.projectStatusLegend': 'Project Status Legend:',
    
    // Form Fields
    'form.required': 'required',
    'form.optional': 'Optional',
    'form.selectCategory': 'Select category...',
    'form.deliverableChecklist': 'Deliverable Checklist',
    'form.workVerification': 'Work Verification',
    'form.manualRevision': 'Invoking Manual Revision',
    'form.workApproval': 'Work Approval',
    'form.typeMessage': 'Type your message here...',
    
    // Common Actions
    'action.save': 'Save',
    'action.cancel': 'Cancel',
    'action.edit': 'Edit',
    'action.delete': 'Delete',
    'action.view': 'View',
    'action.download': 'Download',
    'action.upload': 'Upload',
    'action.submit': 'Submit',
    'action.close': 'Close',
    'action.back': 'Back',
    'action.next': 'Next',
    'action.previous': 'Previous',
    'action.continue': 'Continue',
    'action.complete': 'Complete',
    'action.approve': 'Approve',
    'action.reject': 'Reject',
    'action.send': 'Send',
    'action.create': 'Create',
    'action.update': 'Update',
    'action.remove': 'Remove',
    'action.add': 'Add',
    
    // Error Messages
    'error.required': 'This field is required',
    'error.invalidEmail': 'Please enter a valid email address',
    'error.passwordTooShort': 'Password must be at least 8 characters',
    'error.passwordsNotMatch': 'Passwords do not match',
    'error.invalidPhone': 'Please enter a valid phone number',
    'error.invalidUPI': 'Please enter a valid UPI ID',
    'error.invalidAadhar': 'Please enter a valid 12-digit Aadhar number',
    'error.unexpectedError': 'An unexpected error occurred',
    'error.networkError': 'Network error. Please try again.',
    
    // Success Messages
    'success.profileUpdated': 'Profile updated successfully',
    'success.messageSent': 'Message sent successfully',
    'success.projectCreated': 'Project created successfully',
    'success.paymentReleased': 'Payment released successfully',
    'success.accountCreated': 'Account created successfully',
    
    // Loading States
    'loading.saving': 'Saving...',
    'loading.loading': 'Loading...',
    'loading.processing': 'Processing...',
    'loading.uploading': 'Uploading...',
    'loading.verifying': 'Verifying...',
    'loading.generating': 'Generating...',
    'loading.sending': 'Sending...',
    'loading.creating': 'Creating...',
    
    // Time and Date
    'time.hours': 'hours',
    'time.minutes': 'minutes',
    'time.seconds': 'seconds',
    'time.days': 'days',
    'time.weeks': 'weeks',
    'time.months': 'months',
    'time.years': 'years',
    'time.ago': 'ago',
    'time.remaining': 'remaining',
    
    // Currency and Numbers
    'currency.rupees': 'Rupees',
    'currency.inr': 'INR',
    'currency.total': 'Total',
    'currency.amount': 'Amount',
    'currency.balance': 'Balance',
    'currency.payment': 'Payment',
    'currency.fee': 'Fee',
    'currency.tax': 'Tax',
    'currency.discount': 'Discount',
    
    // Testimonials Case Studies
    'testimonials.caseStudy1.title': '95% Reduction in Payment Disputes',
    'testimonials.caseStudy1.description': 'TechCorp reduced project disputes from 23% to 1.2% after implementing SecureServe',
    'testimonials.caseStudy1.category': 'Dispute Resolution',
    'testimonials.caseStudy2.title': '40% Faster Project Completion',
    'testimonials.caseStudy2.description': 'Freelancers complete projects 40% faster with clear AI-generated requirements',
    'testimonials.caseStudy2.category': 'Efficiency',
    'testimonials.caseStudy3.title': '₹50L+ Secured in Escrow',
    'testimonials.caseStudy3.description': 'Over ₹50 lakhs in project funds secured and successfully released',
    'testimonials.caseStudy3.category': 'Trust & Security',
    
    // Trust Badges
    'trust.badge1': 'ISO 27001 Certified',
    'trust.badge2': 'RBI Compliant',
    'trust.badge3': '99.9% Uptime',
    'trust.badge4': '₹185Cr Insurance',
    
    // Dashboard Table Headers
    'dashboard.projectId': 'Project ID',
    'dashboard.projectName': 'Project Name',
    'dashboard.clientId': 'Client ID',
    'dashboard.freelancerId': 'Freelancer ID',
    'dashboard.status': 'Status',
    'dashboard.deliverableList': 'Deliverable List',
    'dashboard.workProduct': 'Work Product',
    'dashboard.verificationReport': 'Verification Report',
    'dashboard.value': 'Value',
    'dashboard.valueStatus': 'Value Status',
    'dashboard.manageProfile': 'Manage your profile settings and information',
    'dashboard.transactionHistory': 'Transaction History',
    'dashboard.chooseProject': 'Choose a project...',
    'common.or': 'or',
    'freelancer.transactionHistoryDesc': 'Your payment history will appear here once you complete projects and receive payments. All transactions are secure and processed instantly.',
    'freelancer.manageProjects': 'Manage and track your active and completed projects',
  },
  hi: {
    // Navigation
    'nav.explore': 'एक्सप्लोर करें',
    'nav.howItWorks': 'यह कैसे काम करता है',
    'nav.faqs': 'सामान्य प्रश्न',
    'nav.contact': 'संपर्क करें',
    'nav.asFreelancer': 'फ्रीलांसर के रूप में',
    'nav.asClient': 'क्लाइंट के रूप में',
    'nav.productDemo': 'प्रोडक्ट डेमो',
    'nav.testimonials': 'प्रशंसापत्र',
    'nav.support': 'सहायता',
    'nav.roadmap': 'रोडमैप',
    'nav.blog': 'ब्लॉग',
    'nav.login': 'लॉगिन',
    'nav.changeLanguage': 'भाषा बदलें',
    
    // Hero Section
    'hero.title': 'भारत का पहला एआई-संचालित एस्क्रो प्लेटफॉर्म फ्रीलांसरों और क्लाइंट्स के लिए',
    'hero.subtitle': 'अपने काम की सुरक्षा करें। अपनी कीमत पाएं।',
    'hero.startTrial': 'अपना प्रोजेक्ट शुरू करें',
    'hero.watchDemo': 'डेमो देखें',
    'hero.happyCustomers': 'खुश ग्राहक',
    'hero.successfulClosures': 'सफल समापन',
    'hero.secureEscrow': 'सुरक्षित एस्क्रो',
    'hero.aiVerification': 'एआई सत्यापन',
    'hero.instantPayments': 'तत्काल भुगतान',
    'hero.activeUsers': 'सक्रिय उपयोगकर्ता',
    'hero.secured': 'सुरक्षित',
    'hero.getStartedToday': 'आज ही शुरू करें',
    
    // Benefits Section
    'benefits.title': 'अलविदा कहें...',
    'benefits.subjectiveDisputes': 'व्यक्तिगत गुणवत्ता विवाद',
    'benefits.endlessRevisions': 'अंतहीन संशोधन जो आपके भुगतान में देरी करते हैं',
    'benefits.unpredictablePayments': 'अप्रत्याशित भुगतान कार्यक्रम',
    
    // SecureServe Benefits
    'secureServe.title': 'सिक्योरसर्व पर स्विच करें',
    'secureServe.subtitle': 'आपका एआई-संचालित भुगतान संरक्षक',
    'secureServe.smartContracts': 'स्मार्ट कॉन्ट्रैक्ट्स',
    'secureServe.smartContractsDesc': 'एआई स्पष्ट, विस्तृत परियोजना विनिर्देश बनाने में मदद करता है जो दोनों पक्षों की सुरक्षा करता है और शुरुआत से ही स्पष्ट अपेक्षाएं निर्धारित करता है।',
    'secureServe.secureEscrow': 'सुरक्षित एस्क्रो सिस्टम',
    'secureServe.secureEscrowDesc': 'काम स्वीकृत होने तक पैसा एस्क्रो में सुरक्षित रूप से रखा जाता है। पूरी परियोजना के दौरान फ्रीलांसरों और क्लाइंट्स दोनों के लिए पूर्ण सुरक्षा।',
    'secureServe.aiVerified': 'एआई-सत्यापित डिलिवरेबल्स',
    'secureServe.aiVerifiedDesc': 'उन्नत एआई तुरंत सत्यापित करता है कि आपका काम क्लाइंट की आवश्यकताओं से मेल खाता है, व्यक्तिगत विवादों को समाप्त करता है और निष्पक्ष मूल्यांकन सुनिश्चित करता है।',
    'secureServe.instantPayments': 'तत्काल भुगतान',
    'secureServe.instantPaymentsDesc': 'एक बार एआई काम की गुणवत्ता की पुष्टि करता है कि यह विनिर्देशों को पूरा करता है, भुगतान तुरंत आपके खाते में स्थानांतरित हो जाता है।',
    
    // How It Works
    'howItWorks.title': 'सिक्योरसर्व कैसे काम करता है',
    'howItWorks.subtitle': 'सरल, सुरक्षित, और एआई द्वारा संचालित फ्रीलांसरों और क्लाइंट्स दोनों की सुरक्षा के लिए',
    
    // Testimonials
    'testimonials.title': 'हमारे उपयोगकर्ता क्या कहते हैं',
    'testimonials.subtitle': 'फ्रीलांसरों और क्लाइंट्स की वास्तविक कहानियां जो सिक्योरसर्व पर भरोसा करते हैं',
    'testimonials.watchVideo': 'वीडियो प्रशंसापत्र देखें',
    
    // Support
    'support.title': 'सहायता और मदद केंद्र',
    'support.subtitle': 'जब आपको जरूरत हो तो कई सहायता चैनलों और स्पष्ट एस्केलेशन पथों के साथ मदद पाएं',
    
    // Roadmap
    'roadmap.title': 'उत्पाद रोडमैप',
    'roadmap.subtitle': 'देखें कि आगे क्या आ रहा है और अपने वर्कफ़्लो के लिए सुविधाओं का अनुरोध करें',
    
    // FAQs
    'faqs.title': 'आपको जो कुछ जानना चाहिए',
    'faqs.subtitle': 'प्रश्न हैं? हमारे पास उत्तर हैं। सिक्योरसर्व कैसे काम करता है और यह आपको कैसे लाभ पहुंचा सकता है, इसके बारे में और जानें।',
    
    // Contact Us Page
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'सहायता, साझेदारी या सामान्य पूछताछ के लिए हमारी टीम से संपर्क करें',
    'contact.backToHome': 'होम पर वापस जाएं',
    'contact.sendMessage': 'हमें संदेश भेजें',
    'contact.userType': 'मैं हूं',
    'contact.client': 'क्लाइंट',
    'contact.freelancer': 'फ्रीलांसर',
    'contact.fullName': 'पूरा नाम',
    'contact.email': 'ईमेल पता',
    'contact.company': 'कंपनी/संगठन',
    'contact.phone': 'फोन नंबर',
    'contact.subject': 'विषय',
    'contact.message': 'संदेश',
    'contact.submit': 'संदेश भेजें',
    'contact.getInTouch': 'संपर्क में रहें',
    'contact.ourOffices': 'हमारे कार्यालय',
    'contact.businessHours': 'व्यावसायिक समय',
    'contact.phoneSupport': 'फोन सहायता',
    'contact.emailSupport': 'ईमेल सहायता',
    'contact.liveChat': 'लाइव चैट',
    'contact.successMessage': 'धन्यवाद! आपका संदेश सफलतापूर्वक भेजा गया है। हम ४-६ घंटों के भीतर आपसे संपर्क करेंगे।',
    
    // Footer
    'footer.company': 'सिक्योरसर्व',
    'footer.description': 'भारत का पहला एआई-संचालित एस्क्रो प्लेटफॉर्म फ्रीलांसरों और क्लाइंट्स के लिए। सुरक्षित भुगतान, सत्यापित डिलिवरेबल्स।',
    'footer.contactUs': 'संपर्क करें',
    'footer.businessHours': 'व्यावसायिक समय',
    'footer.copyright': '© २०२५ सिक्योरसर्व। भारतीय फ्रीलांसरों के लिए, भारतीय फ्रीलांसरों द्वारा निर्मित।',
    
    // Blog Section
    'blog.title': 'नवीनतम अपडेट',
    'blog.subtitle': 'प्लेटफॉर्म अपडेट और उद्योग अंतर्दृष्टि के बारे में जानकारी रखें',
    
    // Trust Indicators
    'trust.securityCompliance': 'सुरक्षा और अनुपालन',
    'trust.platformPerformance': 'प्लेटफॉर्म प्रदर्शन',
    'trust.trustedCertified': 'विश्वसनीय और प्रमाणित',
    'trust.uptime': 'अपटाइम',
    'trust.totalInsurance': 'कुल बीमा कवरेज',
    'trust.militaryGrade': 'मिलिट्री-ग्रेड एन्क्रिप्शन',
    'trust.certifiedSecure': 'प्रमाणित सुरक्षित',
    'trust.topTalent': 'शीर्ष प्रतिभा',
    'trust.qualityAssured': 'गुणवत्ता आश्वासित',
    'trust.fastDelivery': 'तेज़ डिलीवरी',
    
    // Live Stats
    'stats.activeUsers': 'सक्रिय उपयोगकर्ता',
    'stats.projectsCompleted': 'पूर्ण परियोजनाएं',
    'stats.fundsSecured': 'सुरक्षित फंड',
    'stats.successRate': 'सफलता दर',
    'stats.disputeResolution': 'विवाद समाधान',
    'stats.inEscrow': 'एस्क्रो में',
    'stats.zeroDisputes': 'शून्य विवाद',
    'stats.thisMonth': 'इस महीने',
    'stats.platformActivity': 'प्लेटफॉर्म गतिविधि',
    'stats.live': 'लाइव',
    'stats.fundsInEscrow': 'एस्क्रो में फंड',
    'stats.performanceMetrics': 'प्रदर्शन मेट्रिक्स',
    'stats.avgResolutionTime': 'औसत समाधान समय',
    'stats.recentActivity': 'हाल की गतिविधि',
    'stats.projectCompleted': 'परियोजना पूर्ण',
    'stats.released': 'जारी',
    'stats.newUserRegistered': 'नया उपयोगकर्ता पंजीकृत',
    'stats.aiVerificationCompleted': 'एआई सत्यापन पूर्ण',
    'stats.totalSpent': 'कुल खर्च',
    'stats.projectsFunded': 'फंडेड परियोजनाएं',
    'stats.averageProjectCost': 'औसत परियोजना लागत',
    'stats.totalEarned': 'कुल कमाई',
    'stats.completedProjects': 'पूर्ण परियोजनाएं',
    'stats.averageProjectValue': 'औसत परियोजना मूल्य',
    
    // Compliance Section
    'compliance.title': 'सुरक्षा और अनुपालन',
    'compliance.subtitle': 'पूर्ण नियामक अनुपालन और व्यापक बीमा कवरेज के साथ बैंक-ग्रेड सुरक्षा',
    'compliance.securityEncryption': 'सुरक्षा और एन्क्रिप्शन',
    'compliance.legalRegulatory': 'कानूनी और नियामक',
    'compliance.certifications': 'प्रमाणपत्र',
    'compliance.insuranceProtection': 'बीमा और सुरक्षा',
    'compliance.securityInfrastructure': 'सुरक्षा अवसंरचना',
    'compliance.legalRegulatoryCompliance': 'कानूनी और नियामक अनुपालन',
    'compliance.securityCertifications': 'सुरक्षा प्रमाणपत्र',
    'compliance.insuranceCoverage': 'बीमा कवरेज',
    'compliance.endToEndEncryption': 'एंड-टू-एंड एन्क्रिप्शन',
    'compliance.multiFactorAuth': 'मल्टी-फैक्टर प्रमाणीकरण',
    'compliance.regularSecurityAudits': 'नियमित सुरक्षा ऑडिट',
    'compliance.dataBackupRecovery': 'डेटा बैकअप और रिकवरी',
    'compliance.implemented': 'लागू',
    'compliance.quarterly': 'त्रैमासिक',
    'compliance.active': 'सक्रिय',
    'compliance.certified': 'प्रमाणित',
    'compliance.compliant': 'अनुपालित',
    'compliance.view': 'देखें',
    'compliance.download': 'डाउनलोड',
    'compliance.issuedBy': 'द्वारा जारी',
    'compliance.validUntil': 'तक वैध',
    'compliance.certificateId': 'प्रमाणपत्र आईडी',
    'compliance.professionalIndemnity': 'व्यावसायिक क्षतिपूर्ति',
    'compliance.cyberLiability': 'साइबर दायित्व',
    'compliance.directorsOfficers': 'निदेशक और अधिकारी',
    'compliance.escrowProtection': 'एस्क्रो सुरक्षा',
    'compliance.provider': 'प्रदाता',
    
    // Legal Pages
    'legal.title': 'कानूनी और अनुपालन',
    'legal.subtitle': 'आपकी मानसिक शांति के लिए पारदर्शी नीतियां और नियामक अनुपालन',
    'legal.termsOfService': 'सेवा की शर्तें',
    'legal.privacyPolicy': 'गोपनीयता नीति',
    'legal.compliance': 'अनुपालन',
    'legal.transparencyReport': 'पारदर्शिता रिपोर्ट',
    'legal.lastUpdated': 'अंतिम अपडेट',
    'legal.questionsContact': 'प्रश्न? हमारी कानूनी टीम से संपर्क करें',
    'legal.quickSummary': 'त्वरित सारांश',
    'legal.serviceDescription': 'सेवा विवरण',
    'legal.userResponsibilities': 'उपयोगकर्ता जिम्मेदारियां',
    'legal.forFreelancers': 'फ्रीलांसरों के लिए',
    'legal.forClients': 'क्लाइंट्स के लिए',
    'legal.paymentTerms': 'भुगतान शर्तें',
    'legal.disputeResolution': 'विवाद समाधान',
    'legal.privacyCommitment': 'गोपनीयता प्रतिबद्धता',
    'legal.informationWeCollect': 'हम जो जानकारी एकत्र करते हैं',
    'legal.personalInformation': 'व्यक्तिगत जानकारी',
    'legal.usageInformation': 'उपयोग जानकारी',
    'legal.howWeUseInfo': 'हम आपकी जानकारी का उपयोग कैसे करते हैं',
    'legal.dataSecurity': 'डेटा सुरक्षा',
    'legal.yourRights': 'आपके अधिकार',
    'legal.rbiCompliance': 'आरबीआई अनुपालन',
    'legal.internationalStandards': 'अंतर्राष्ट्रीय मानक',
    'legal.regulatoryFramework': 'नियामक ढांचा',
    'legal.indianRegulations': 'भारतीय नियम',
    'legal.internationalCompliance': 'अंतर्राष्ट्रीय अनुपालन',
    'legal.auditCertification': 'ऑडिट और प्रमाणन',
    'legal.securityAudit': 'सुरक्षा ऑडिट',
    'legal.complianceReview': 'अनुपालन समीक्षा',
    'legal.legalReview': 'कानूनी समीक्षा',
    'legal.transparencyCommitment': 'पारदर्शिता प्रतिबद्धता',
    'legal.platformStatistics': 'प्लेटफॉर्म आंकड़े',
    'legal.securityIncidents': 'सुरक्षा घटनाएं',
    'legal.complianceActivities': 'अनुपालन गतिविधियां',
    'legal.downloadFullReport': 'पूरी रिपोर्ट डाउनलोड करें',
    'legal.viewPreviousReports': 'पिछली रिपोर्ट देखें',
    
    // Dashboard Common
    'dashboard.profile': 'प्रोफाइल',
    'dashboard.projects': 'मेरी परियोजनाएं',
    'dashboard.transactions': 'लेनदेन',
    'dashboard.messages': 'संदेश',
    'dashboard.logout': 'लॉगआउट',
    'dashboard.welcome': 'स्वागत',
    'dashboard.profileInformation': 'प्रोफाइल जानकारी',
    'dashboard.editProfile': 'प्रोफाइल संपादित करें',
    'dashboard.saveChanges': 'परिवर्तन सहेजें',
    'dashboard.cancel': 'रद्द करें',
    'dashboard.lastUpdated': 'अंतिम अपडेट',
    'dashboard.profileComplete': 'प्रोफाइल पूर्ण',
    'dashboard.noProjectsYet': 'अभी तक कोई परियोजना नहीं',
    'dashboard.noTransactionsYet': 'अभी तक कोई लेनदेन नहीं',
    'dashboard.noMessagesYet': 'अभी तक कोई संदेश नहीं',
    'dashboard.sendMessage': 'संदेश भेजें',
    'dashboard.selectFreelancer': 'फ्रीलांसर चुनें',
    'dashboard.selectClient': 'क्लाइंट चुनें',
    'dashboard.selectProject': 'परियोजना चुनें',
    'dashboard.subjectCategory': 'विषय श्रेणी',
    'dashboard.messageContent': 'संदेश सामग्री',
    'dashboard.fileAttachments': 'फ़ाइल अनुलग्नक',
    'dashboard.dragDropFiles': 'फ़ाइलें यहाँ खींचें और छोड़ें',
    'dashboard.browseFiles': 'फ़ाइलें ब्राउज़ करें',
    'dashboard.supportedFormats': 'समर्थित: PDF, DOC, DOCX, JPG, PNG, MP4, ZIP, आदि। अधिकतम 10MB प्रति फ़ाइल',
    'dashboard.maxCharacters': 'अधिकतम 1000 वर्ण',
    
    // Freelancer Dashboard
    'freelancer.welcomeMessage': 'सिक्योरसर्व में आपका स्वागत है! 🎉',
    'freelancer.completeProfile': 'परियोजनाओं के साथ शुरुआत करने और सुरक्षित भुगतान प्राप्त करने के लिए कृपया अपनी प्रोफाइल जानकारी पूरी करें।',
    'freelancer.profileCompletion': 'पूर्ण',
    'freelancer.freelancerId': 'फ्रीलांसर आईडी',
    'freelancer.willBeAssigned': 'प्रोफाइल पूर्ण होने के बाद असाइन किया जाएगा',
    'freelancer.uniqueId': 'आपका अनूठा फ्रीलांसर पहचान संख्या',
    'freelancer.autoGenerated': 'आईडी आपकी प्रोफाइल पूर्ण होने पर स्वचालित रूप से जेनरेट होगी',
    'freelancer.fullName': 'पूरा नाम',
    'freelancer.enterFullName': 'अपना पूरा कानूनी नाम दर्ज करें',
    'freelancer.emailAddress': 'ईमेल पता',
    'freelancer.emailCannotChange': 'ईमेल बदला नहीं जा सकता',
    'freelancer.mobileNumber': 'मोबाइल नंबर',
    'freelancer.enterMobile': '10-अंकीय मोबाइल नंबर दर्ज करें',
    'freelancer.upiId': 'यूपीआई आईडी',
    'freelancer.upiExample': 'उदाहरण: yourname@paytm, 9876543210@ybl',
    'freelancer.aadharNumber': 'आधार कार्ड नंबर',
    'freelancer.aadharSecure': 'आपके आधार विवरण एन्क्रिप्टेड और सुरक्षित हैं',
    'freelancer.projectsWillAppear': 'एक बार क्लाइंट्स आपको हायर करना शुरू करें तो आपकी परियोजनाएं यहाँ दिखाई देंगी। अधिक क्लाइंट्स को आकर्षित करने के लिए सुनिश्चित करें कि आपकी प्रोफाइल पूरी है।',
    'freelancer.completeProfileButton': 'प्रोफाइल पूरी करें',
    'freelancer.paymentHistory': 'अपना भुगतान इतिहास और पूर्ण लेनदेन देखें',
    'freelancer.viewProjects': 'परियोजनाएं देखें',
    'freelancer.communicateClients': 'अपनी परियोजनाओं के बारे में क्लाइंट्स के साथ संवाद करें',
    'freelancer.chooseClient': 'एक क्लाइंट चुनें...',
    'freelancer.startConversation': 'परियोजना विवरण, डिलिवरेबल्स और अप्रूवल पर चर्चा करने के लिए क्लाइंट के साथ बातचीत शुरू करें।',
    
    // Client Dashboard
    'client.addProject': 'परियोजना जोड़ें',
    'client.newProject': 'नई परियोजना',
    'client.createFirstProject': 'पहली परियोजना बनाएं',
    'client.createNewProject': 'नई परियोजना बनाएं',
    'client.manageProjects': 'अपनी सक्रिय और पूर्ण परियोजनाओं को प्रबंधित और ट्रैक करें',
    'client.totalProjects': 'कुल परियोजनाएं',
    'client.projectsWillAppear': 'ऊपर "नई परियोजना" बटन पर क्लिक करके अपनी पहली परियोजना शुरू करें। प्रतिभाशाली फ्रीलांसरों से जुड़ें और अपने विचारों को जीवंत बनाएं।',
    'client.createProject': 'परियोजना बनाएं',
    'client.paymentHistory': 'अपना भुगतान इतिहास और परियोजना लेनदेन देखें',
    'client.totalSpent': 'कुल खर्च',
    'client.transactionHistory': 'एक बार आप परियोजनाएं पूरी करें और भुगतान करें तो आपका भुगतान इतिहास यहाँ दिखाई देगा। सभी लेनदेन सुरक्षित हैं और हमारे एस्क्रो सिस्टम के माध्यम से प्रोसेस किए जाते हैं।',
    'client.communicateFreelancers': 'अपनी परियोजनाओं के बारे में फ्रीलांसरों के साथ संवाद करें',
    'client.chooseFreelancer': 'एक फ्रीलांसर चुनें...',
    'client.startConversationFreelancer': 'परियोजना विवरण, डिलिवरेबल्स और अप्रूवल पर चर्चा करने के लिए फ्रीलांसर के साथ बातचीत शुरू करें।',
    
    // Project Status
    'status.complete': 'पूर्ण',
    'status.active': 'सक्रिय',
    'status.manualRevision': 'मैन्युअल संशोधन',
    'status.approvalPending': 'अप्रूवल लंबित',
    'status.projectStatusLegend': 'परियोजना स्थिति लेजेंड:',
    
    // Form Fields
    'form.required': 'आवश्यक',
    'form.optional': 'वैकल्पिक',
    'form.selectCategory': 'श्रेणी चुनें...',
    'form.deliverableChecklist': 'डिलिवरेबल चेकलिस्ट',
    'form.workVerification': 'कार्य सत्यापन',
    'form.manualRevision': 'मैन्युअल संशोधन का आह्वान',
    'form.workApproval': 'कार्य अप्रूवल',
    'form.typeMessage': 'यहाँ अपना संदेश टाइप करें...',
    
    // Common Actions
    'action.save': 'सहेजें',
    'action.cancel': 'रद्द करें',
    'action.edit': 'संपादित करें',
    'action.delete': 'हटाएं',
    'action.view': 'देखें',
    'action.download': 'डाउनलोड',
    'action.upload': 'अपलोड',
    'action.submit': 'जमा करें',
    'action.close': 'बंद करें',
    'action.back': 'वापस',
    'action.next': 'अगला',
    'action.previous': 'पिछला',
    'action.continue': 'जारी रखें',
    'action.complete': 'पूर्ण',
    'action.approve': 'अप्रूव करें',
    'action.reject': 'अस्वीकार करें',
    'action.send': 'भेजें',
    'action.create': 'बनाएं',
    'action.update': 'अपडेट करें',
    'action.remove': 'हटाएं',
    'action.add': 'जोड़ें',
    
    // Error Messages
    'error.required': 'यह फ़ील्ड आवश्यक है',
    'error.invalidEmail': 'कृपया एक वैध ईमेल पता दर्ज करें',
    'error.passwordTooShort': 'पासवर्ड कम से कम 8 वर्ण का होना चाहिए',
    'error.passwordsNotMatch': 'पासवर्ड मेल नहीं खाते',
    'error.invalidPhone': 'कृपया एक वैध फोन नंबर दर्ज करें',
    'error.invalidUPI': 'कृपया एक वैध यूपीआई आईडी दर्ज करें',
    'error.invalidAadhar': 'कृपया एक वैध 12-अंकीय आधार नंबर दर्ज करें',
    'error.unexpectedError': 'एक अप्रत्याशित त्रुटि हुई',
    'error.networkError': 'नेटवर्क त्रुटि। कृपया पुनः प्रयास करें।',
    
    // Success Messages
    'success.profileUpdated': 'प्रोफाइल सफलतापूर्वक अपडेट की गई',
    'success.messageSent': 'संदेश सफलतापूर्वक भेजा गया',
    'success.projectCreated': 'परियोजना सफलतापूर्वक बनाई गई',
    'success.paymentReleased': 'भुगतान सफलतापूर्वक जारी किया गया',
    'success.accountCreated': 'खाता सफलतापूर्वक बनाया गया',
    
    // Loading States
    'loading.saving': 'सहेज रहे हैं...',
    'loading.loading': 'लोड हो रहा है...',
    'loading.processing': 'प्रोसेसिंग...',
    'loading.uploading': 'अपलोड हो रहा है...',
    'loading.verifying': 'सत्यापन हो रहा है...',
    'loading.generating': 'जेनरेट हो रहा है...',
    'loading.sending': 'भेज रहे हैं...',
    'loading.creating': 'बना रहे हैं...',
    
    // Time and Date
    'time.hours': 'घंटे',
    'time.minutes': 'मिनट',
    'time.seconds': 'सेकंड',
    'time.days': 'दिन',
    'time.weeks': 'सप्ताह',
    'time.months': 'महीने',
    'time.years': 'साल',
    'time.ago': 'पहले',
    'time.remaining': 'शेष',
    
    // Currency and Numbers
    'currency.rupees': 'रुपये',
    'currency.inr': 'आईएनआर',
    'currency.total': 'कुल',
    'currency.amount': 'राशि',
    'currency.balance': 'शेष',
    'currency.payment': 'भुगतान',
    'currency.fee': 'शुल्क',
    'currency.tax': 'कर',
    'currency.discount': 'छूट',
    
    // Testimonials Case Studies
    'testimonials.caseStudy1.title': 'भुगतान विवादों में 95% कमी',
    'testimonials.caseStudy1.description': 'सिक्योरसर्व लागू करने के बाद टेककॉर्प ने परियोजना विवादों को 23% से घटाकर 1.2% कर दिया',
    'testimonials.caseStudy1.category': 'विवाद समाधान',
    'testimonials.caseStudy2.title': '40% तेज़ परियोजना पूर्णता',
    'testimonials.caseStudy2.description': 'स्पष्ट एआई-जेनरेटेड आवश्यकताओं के साथ फ्रीलांसर परियोजनाएं 40% तेज़ पूरी करते हैं',
    'testimonials.caseStudy2.category': 'दक्षता',
    'testimonials.caseStudy3.title': '₹50L+ एस्क्रो में सुरक्षित',
    'testimonials.caseStudy3.description': '₹50 लाख से अधिक की परियोजना फंड सुरक्षित और सफलतापूर्वक जारी',
    'testimonials.caseStudy3.category': 'विश्वास और सुरक्षा',
    
    // Trust Badges
    'trust.badge1': 'आईएसओ 27001 प्रमाणित',
    'trust.badge2': 'आरबीआई अनुपालित',
    'trust.badge3': '99.9% अपटाइम',
    'trust.badge4': '₹185करोड़ बीमा',
    
    // Dashboard Table Headers
    'dashboard.projectId': 'परियोजना आईडी',
    'dashboard.projectName': 'परियोजना नाम',
    'dashboard.clientId': 'क्लाइंट आईडी',
    'dashboard.freelancerId': 'फ्रीलांसर आईडी',
    'dashboard.status': 'स्थिति',
    'dashboard.deliverableList': 'डिलिवरेबल सूची',
    'dashboard.workProduct': 'कार्य उत्पाद',
    'dashboard.verificationReport': 'सत्यापन रिपोर्ट',
    'dashboard.value': 'मूल्य',
    'dashboard.valueStatus': 'मूल्य स्थिति',
    'dashboard.manageProfile': 'अपनी प्रोफाइल सेटिंग्स और जानकारी प्रबंधित करें',
    'dashboard.transactionHistory': 'लेनदेन इतिहास',
    'dashboard.chooseProject': 'एक परियोजना चुनें...',
    'common.or': 'या',
    'freelancer.transactionHistoryDesc': 'एक बार आप परियोजनाएं पूरी करें और भुगतान प्राप्त करें तो आपका भुगतान इतिहास यहाँ दिखाई देगा। सभी लेनदेन सुरक्षित हैं और तुरंत प्रोसेस किए जाते हैं।',
    'freelancer.manageProjects': 'अपनी सक्रिय और पूर्ण परियोजनाओं को प्रबंधित और ट्रैक करें',
  }
};

// Only English and Hindi languages with proper flags
const supportedLanguages = [
  { label: 'English', code: 'en', flag: '🇬🇧' },
  { label: 'हिंदी', code: 'hi', flag: '🇮🇳' }
];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Load saved language from localStorage or default to 'en'
    return localStorage.getItem('selectedLanguage') || 'en';
  });

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language);
  };

  const t = (key: string): string => {
    const languageTranslations = translations[currentLanguage as keyof typeof translations] || translations.en;
    return languageTranslations[key as keyof typeof languageTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Export supported languages for use in Header component
export { supportedLanguages };