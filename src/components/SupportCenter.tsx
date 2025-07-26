import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, FileText, Clock, AlertTriangle, CheckCircle, Search, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SupportCenterProps {
  darkMode: boolean;
}

const SupportCenter: React.FC<SupportCenterProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    { id: 'general', label: 'General Help', icon: MessageCircle },
    { id: 'payments', label: 'Payments & Escrow', icon: FileText },
    { id: 'disputes', label: 'Disputes & Resolution', icon: AlertTriangle },
    { id: 'technical', label: 'Technical Issues', icon: Clock }
  ];

  const supportOptions = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      availability: 'Available 9 AM - 6 PM IST',
      responseTime: 'Typically responds in 2-3 minutes',
      icon: MessageCircle,
      action: 'Start Chat',
      priority: 'high'
    },
    {
      title: 'Email Support',
      description: 'Send detailed queries to our support team',
      availability: 'support@secureserve.ai',
      responseTime: 'Response within 4-6 hours',
      icon: Mail,
      action: 'Send Email',
      priority: 'medium'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: '+91 80 4567 8900',
      responseTime: 'Mon-Fri, 9 AM - 6 PM IST',
      icon: Phone,
      action: 'Call Now',
      priority: 'high'
    }
  ];

  const disputeProcess = [
    {
      step: 1,
      title: 'Report Issue',
      description: 'Submit dispute through your dashboard with evidence',
      timeframe: 'Immediate'
    },
    {
      step: 2,
      title: 'AI Analysis',
      description: 'Our AI reviews project requirements and deliverables',
      timeframe: '2-4 hours'
    },
    {
      step: 3,
      title: 'Human Review',
      description: 'Expert team manually reviews complex cases',
      timeframe: '24-48 hours'
    },
    {
      step: 4,
      title: 'Resolution',
      description: 'Final decision with payment release or refund',
      timeframe: '48-72 hours'
    }
  ];

  const escalationPaths = [
    {
      level: 'Level 1',
      authority: 'SecureServe Support Team',
      timeframe: '24-48 hours',
      scope: 'Platform issues, payment delays, technical problems'
    },
    {
      level: 'Level 2',
      authority: 'Senior Management Review',
      timeframe: '3-5 business days',
      scope: 'Complex disputes, policy violations, account issues'
    },
    {
      level: 'Level 3',
      authority: 'RBI Banking Ombudsman',
      timeframe: '30-45 days',
      scope: 'Financial irregularities, regulatory compliance issues'
    },
    {
      level: 'Level 4',
      authority: 'Consumer Court',
      timeframe: '3-6 months',
      scope: 'Legal disputes, consumer protection violations'
    }
  ];

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t('support.title')}
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('support.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                darkMode
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
              }`}
            />
          </div>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800 border-gray-700 hover:border-purple-500'
                  : 'bg-white border-gray-200 hover:border-purple-300'
              } shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-full ${
                  option.priority === 'high'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  <option.icon className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {option.title}
                </h3>
              </div>
              
              <p className={`text-sm mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {option.description}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <strong>Availability:</strong> {option.availability}
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <strong>Response Time:</strong> {option.responseTime}
                </div>
              </div>
              
              <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                option.priority === 'high'
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}>
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* Dispute Resolution Process */}
        <div className={`p-8 rounded-2xl mb-16 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Dispute Resolution Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {disputeProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.step}
                </div>
                <h4 className={`font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {step.title}
                </h4>
                <p className={`text-sm mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
                <span className="text-xs text-purple-600 font-medium">
                  {step.timeframe}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Escalation Paths */}
        <div className={`p-8 rounded-2xl ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Escalation Paths & Regulatory Compliance
          </h3>
          
          <div className="space-y-4">
            {escalationPaths.map((path, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                        {path.level}
                      </span>
                      <h4 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {path.authority}
                      </h4>
                    </div>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {path.scope}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Resolution: {path.timeframe}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-100 border border-blue-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <ExternalLink className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">
                  External Regulatory Bodies
                </h4>
                <p className="text-sm text-blue-800">
                  For unresolved issues, you can directly contact:
                </p>
                <ul className="text-sm text-blue-800 mt-2 space-y-1">
                  <li>• RBI Banking Ombudsman: <a href="#" className="underline">rbi.org.in/ombudsman</a></li>
                  <li>• Consumer Helpline: 1915 or consumerhelpline.gov.in</li>
                  <li>• Cyber Crime Portal: cybercrime.gov.in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportCenter;