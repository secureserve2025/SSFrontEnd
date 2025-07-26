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
              </h1>
              
              <p className={`text-lg sm:text-xl leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="/signup/client" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-colors text-center">
                  {t('hero.startTrial')}
                </a>
                <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg font-semibold text-lg transition-colors">
                  {t('hero.watchDemo')}
                </button>
              </div>

              {/* Value Propositions */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <span>🛡️</span>
                  <span>{t('hero.secureEscrow')}</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  <span>🤖</span>
                  <span>{t('hero.aiVerification')}</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  <span>⚡</span>
                  <span>{t('hero.instantPayments')}</span>
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
            {/* Simple Dashboard Preview */}
            <div className={`rounded-2xl p-8 shadow-2xl ${
              darkMode ? 'bg-gray-800 border border-purple-500/30' : 'bg-white border border-gray-200'
            }`}>
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t('hero.getStartedToday')}
                </div>
                <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('hero.subtitle')}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <div className="text-2xl font-bold text-purple-600">15,247+</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('hero.activeUsers')}</div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <div className="text-2xl font-bold text-cyan-600">₹50L+</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('hero.secured')}</div>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                  {t('hero.getStartedToday')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;