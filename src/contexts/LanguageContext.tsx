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
  }
};

// Only English and Hindi languages
const supportedLanguages = [
  { label: 'English', code: 'en', flag: '🇺🇸' },
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