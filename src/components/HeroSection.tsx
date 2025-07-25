import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, Clock, AlertCircle, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const [animationStep, setAnimationStep] = useState(0);

  // Animation sequence: 0 = start, 1 = video format, 2 = duration, 3 = resolution, 4 = watermark processing, 5 = watermark complete, 6 = verification passed
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 7);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const getFieldState = (fieldIndex: number) => {
    if (animationStep === 0) return 'hidden';
    if (animationStep > fieldIndex) return 'completed';
    if (animationStep === fieldIndex) return 'processing';
    return 'hidden';
  };

  const getWatermarkState = () => {
    if (animationStep < 4) return 'hidden';
    if (animationStep === 4) return 'processing';
    return 'completed';
  };

  return (
    <section className={`pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('hero.title')}
                <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
                <span className={darkMode ? 'text-cyan-400' : 'text-purple-600'}>
                </span>{' '}
                </span>
              </h1>
              
              <p className={`text-lg sm:text-xl leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="/signup/client" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-colors text-center">
                  Start Your Project
                </a>
                <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg font-semibold text-lg transition-colors">
                  {t('hero.watchDemo')}
                </button>
              </div>

              {/* Value Propositions */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <span>🛡️</span>
                  <span>Secure Escrow</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  <span>🤖</span>
                  <span>AI Verification</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  <span>⚡</span>
                  <span>Instant Payments</span>
                </div>
              </div>

              {/* Performance Analytics */}
              <div className="grid grid-cols-2 gap-8 pt-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className={`text-2xl sm:text-3xl font-bold ${
                    darkMode ? 'text-cyan-400' : 'text-purple-600'
                  }`}>
                    15,247+
                  </div>
                  <div className={`text-sm font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {t('hero.happyCustomers')}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`text-2xl sm:text-3xl font-bold ${
                    darkMode ? 'text-pink-400' : 'text-pink-600'
                  }`}>
                    8,932+
                  </div>
                  <div className={`text-sm font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {t('hero.successfulClosures')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            {/* Project Status Card */}
            <div className={`rounded-2xl p-6 shadow-2xl ${
              darkMode ? 'bg-gray-800 border border-purple-500/30' : 'bg-white border border-gray-200'
            }`}>
              {/* Upload Status */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Project Upload Status
                </h3>
                
                {/* Upload Success State */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800">Upload Successful</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    corporate_video_final.mp4 • 45.2 MB • Uploaded 2 minutes ago
                  </p>
                </div>
                
                {/* Video Preview */}
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <Play className="h-12 w-12 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 text-center">Video Preview Available</p>
                </div>
                
                {/* Processing Status */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="font-medium text-blue-800">AI Verification in Progress</span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Analyzing video quality and requirements compliance...
                  </p>
                </div>
              </div>

              {/* Payment Section */}
              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white">
                  <span>Release Funds</span>
                </button>
                <button className={`px-4 py-3 rounded-lg font-medium transition-colors border ${
                  darkMode 
                    ? 'border-purple-500/30 text-gray-300' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  Request Revision
                </button>
              </div>

              {/* Amount Display */}
              <div className="mt-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">₹25,000</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  In Escrow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;