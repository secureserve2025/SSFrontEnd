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
    'hero.startTrial': 'Start Free Trial',
    'hero.watchDemo': 'Watch Demo',
    'hero.happyCustomers': 'Happy Customers',
    'hero.successfulClosures': 'Successful Closures',
    
    // Onboarding
    'onboarding.welcome': 'Welcome to SecureServe!',
    'onboarding.getStarted': 'Get Started',
    'onboarding.skipTour': 'Skip Tour',
    'onboarding.next': 'Next',
    'onboarding.previous': 'Previous',
    'onboarding.finish': 'Finish',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.confirm': 'Confirm',
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
    'hero.title': 'भारत का पहला AI-संचालित एस्क्रो प्लेटफॉर्म फ्रीलांसरों और क्लाइंट्स के लिए',
    'hero.subtitle': 'अपने काम की सुरक्षा करें। अपनी कीमत पाएं।',
    'hero.startTrial': 'मुफ्त ट्रायल शुरू करें',
    'hero.watchDemo': 'डेमो देखें',
    'hero.happyCustomers': 'खुश ग्राहक',
    'hero.successfulClosures': 'सफल समापन',
    
    // Onboarding
    'onboarding.welcome': 'SecureServe में आपका स्वागत है!',
    'onboarding.getStarted': 'शुरू करें',
    'onboarding.skipTour': 'टूर छोड़ें',
    'onboarding.next': 'अगला',
    'onboarding.previous': 'पिछला',
    'onboarding.finish': 'समाप्त',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफलता',
    'common.cancel': 'रद्द करें',
    'common.save': 'सेव करें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.confirm': 'पुष्टि करें',
  },
  // Add more languages as needed
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

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