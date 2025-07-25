import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import SecureServeBenefits from './components/SecureServeBenefits';
import HowItWorksSection from './components/HowItWorksSection';
import ProductDemo from './components/ProductDemo';
import TestimonialsSection from './components/TestimonialsSection';
import SupportCenter from './components/SupportCenter';
import ComplianceSection from './components/ComplianceSection';
import RoadmapSection from './components/RoadmapSection';
import BlogSection from './components/BlogSection';
import OnboardingModal from './components/OnboardingModal';
import FAQsSection from './components/FAQsSection';
import CTASection from './components/CTASection';
import FreelancerLogin from './pages/FreelancerLogin';
import ClientLogin from './pages/ClientLogin';
import FreelancerSignup from './pages/FreelancerSignup';
import ClientSignup from './pages/ClientSignup';
import FreelancerDashboard from './pages/FreelancerDashboard';
import ClientDashboard from './pages/ClientDashboard';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingType, setOnboardingType] = useState<'freelancer' | 'client'>('freelancer');
  
  // Always use dark mode
  const darkMode = true;

  // Set dark mode class on document
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    // Check if user is new (you can implement this logic based on your needs)
    const isNewUser = !localStorage.getItem('hasVisited');
    if (isNewUser) {
      localStorage.setItem('hasVisited', 'true');
      // Optionally show onboarding for new users
      // setShowOnboarding(true);
    }
  }, []);

  const handleStartOnboarding = (type: 'freelancer' | 'client') => {
    setOnboardingType(type);
    setShowOnboarding(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login/freelancer" element={<FreelancerLogin />} />
        <Route path="/login/client" element={<ClientLogin />} />
        <Route path="/signup/freelancer" element={<FreelancerSignup />} />
        <Route path="/signup/client" element={<ClientSignup />} />
        <Route path="/freelancer/dashboard" element={<FreelancerDashboard />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/" element={
          <div className="min-h-screen transition-colors duration-300 bg-gray-900">
            {/* Header Component */}
            <Header darkMode={darkMode} />
            
            {/* Hero Section */}
            <HeroSection darkMode={darkMode} />
            
            {/* Product Demo Section */}
            <ProductDemo darkMode={darkMode} />
            
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
            
            {/* Compliance Section */}
            <ComplianceSection darkMode={darkMode} />
            
            {/* Roadmap Section */}
            <RoadmapSection darkMode={darkMode} />
            
            {/* Blog Section */}
            <BlogSection darkMode={darkMode} />
            
            {/* FAQs Section */}
            <FAQsSection darkMode={darkMode} />
            
            {/* CTA and Footer Section */}
            <CTASection darkMode={darkMode} />
            
            {/* Onboarding Modal */}
            <OnboardingModal
              isOpen={showOnboarding}
              onClose={() => setShowOnboarding(false)}
              userType={onboardingType}
            />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;