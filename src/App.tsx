import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import AIProvider from './components/AIIntegrationHooks';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import SecureServeBenefits from './components/SecureServeBenefits';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import SupportCenter from './components/SupportCenter';
import ComplianceSection from './components/ComplianceSection';
import ComplianceOfficerProfile from './components/ComplianceOfficerProfile';
import RoadmapSection from './components/RoadmapSection';
import BlogSection from './components/BlogSection';
import EnhancedOnboarding from './components/EnhancedOnboarding';
import TrustIndicators from './components/TrustIndicators';
import StripeIntegrationWizard from './components/StripeIntegrationWizard';
import LegalPages from './components/LegalPages';
import LiveStats from './components/LiveStats';
import VideoUploadWorkspace from './components/VideoUploadWorkspace';
import FAQsSection from './components/FAQsSection';
import CTASection from './components/CTASection';
import FreelancerLogin from './pages/FreelancerLogin';
import ClientLogin from './pages/ClientLogin';
import FreelancerSignup from './pages/FreelancerSignup';
import ClientSignup from './pages/ClientSignup';
import FreelancerDashboard from './pages/FreelancerDashboard';
import ClientDashboard from './pages/ClientDashboard';
import ContactUs from './components/ContactUs';

function AppContent() {
  const { t } = useLanguage();
  const [darkMode, setDarkMode] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingType, setOnboardingType] = useState('');
  const [showStripeWizard, setShowStripeWizard] = useState(false);

  return (
    <Router>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login/freelancer" element={<FreelancerLogin />} />
            <Route path="/login/client" element={<ClientLogin />} />
            <Route path="/signup/freelancer" element={<FreelancerSignup />} />
            <Route path="/signup/client" element={<ClientSignup />} />
            <Route path="/freelancer/dashboard" element={<FreelancerDashboard />} />
            <Route path="/client/dashboard" element={<ClientDashboard />} />
            <Route path="/contact" element={
              <div className="min-h-screen transition-colors duration-300 bg-gray-900">
                <Header darkMode={darkMode} />
                <div className="pt-16">
                  <ContactUs darkMode={darkMode} />
                </div>
              </div>
            } />
            <Route path="/compliance" element={
              <div className="min-h-screen transition-colors duration-300 bg-gray-900">
                <Header darkMode={darkMode} />
                <div className="pt-16">
                  <ComplianceSection darkMode={darkMode} />
                  <ComplianceOfficerProfile darkMode={darkMode} />
                </div>
              </div>
            } />
            <Route path="/legal" element={
              <div className="min-h-screen transition-colors duration-300 bg-gray-900">
                <Header darkMode={darkMode} />
                <div className="pt-16">
                  <LegalPages darkMode={darkMode} />
                </div>
              </div>
            } />
            <Route path="/video-workspace" element={
              <div className="min-h-screen transition-colors duration-300 bg-gray-900">
                <Header darkMode={darkMode} />
                <div className="pt-16 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-6xl mx-auto py-8">
                    <VideoUploadWorkspace 
                      userType="client" 
                      projectId="P12345"
                      onUploadComplete={(data) => console.log('Upload complete:', data)}
                    />
                  </div>
                </div>
              </div>
            } />
            <Route path="/" element={
              <div className="min-h-screen transition-colors duration-300 bg-gray-900">
                {/* Header Component */}
                <Header darkMode={darkMode} />
                
                {/* Hero Section */}
                <HeroSection darkMode={darkMode} />
                
                {/* Live Stats */}
                <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800">
                  <div className="max-w-7xl mx-auto">
                    <LiveStats darkMode={darkMode} variant="hero" />
                  </div>
                </div>
                
                {/* Benefits Section */}
                <BenefitsSection darkMode={darkMode} />
                
                {/* SecureServe Benefits Section */}
                <SecureServeBenefits darkMode={darkMode} />
                
                {/* How It Works Section */}
                <HowItWorksSection darkMode={darkMode} />
                
                {/* Testimonials Section */}
                <TestimonialsSection darkMode={darkMode} />
                
                {/* Support Center */}
                <SupportCenter darkMode={darkMode} />
                
                {/* Roadmap Section */}
                <RoadmapSection darkMode={darkMode} />
                
                {/* FAQs Section */}
                <FAQsSection darkMode={darkMode} />
                
                {/* Footer */}
                <footer className={`py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-800'
                }`}>
                  <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      {/* Company Info */}
                      <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {t('footer.description')}
                        </p>
                      </div>
                      
                      {/* Contact Details */}
                      <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.contactUs')}</h3>
                        <div className="space-y-2 text-gray-400 text-sm">
                          <p>📍 #42, 3rd Floor, Koramangala</p>
                          <p>Bengaluru, Karnataka 560034</p>
                          <p>📞 +91 80 4567 8900</p>
                          <p>✉️ hello@secureserve.ai</p>
                        </div>
                      </div>
                      
                      {/* Business Hours */}
                      <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.businessHours')}</h3>
                        <div className="space-y-2 text-gray-400 text-sm">
                          <p>Monday - Friday</p>
                          <p>9:00 AM - 6:00 PM IST</p>
                          <p className="mt-3">Saturday</p>
                          <p>10:00 AM - 2:00 PM IST</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 pt-6 text-center">
                      <p className="text-gray-400 text-sm">
                        {t('footer.copyright')}
                      </p>
                    </div>
                  </div>
                </footer>
                
                {/* Enhanced Onboarding Modal */}
                <EnhancedOnboarding
                  isOpen={showOnboarding}
                  onClose={() => setShowOnboarding(false)}
                  userType={onboardingType}
                />
                
                {/* Stripe Integration Wizard */}
                <StripeIntegrationWizard
                  isOpen={showStripeWizard}
                  onClose={() => setShowStripeWizard(false)}
                />
              </div>
            } />
            <Route path="/compliance" element={
              <div className="min-h-screen transition-colors duration-300 bg-gray-900">
                <Header darkMode={darkMode} />
                <div className="pt-16">
                  <ComplianceSection darkMode={darkMode} />
                  <ComplianceOfficerProfile darkMode={darkMode} />
                </div>
              </div>
            } />
          </Routes>
        </Router>
      </div>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AIProvider>
        <AppContent />
      </AIProvider>
    </LanguageProvider>
  );
}

export default App;