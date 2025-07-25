import React from 'react';
import { Shield, Award, CheckCircle, Lock, Globe, Users, TrendingUp, Star } from 'lucide-react';

interface TrustIndicatorsProps {
  darkMode: boolean;
  variant?: 'header' | 'footer' | 'inline';
}

const TrustIndicators: React.FC<TrustIndicatorsProps> = ({ darkMode, variant = 'inline' }) => {
  const trustBadges = [
    {
      icon: Shield,
      label: 'RBI Compliant',
      description: 'Reserve Bank of India approved escrow services',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      darkBgColor: 'bg-green-900/20'
    },
    {
      icon: Award,
      label: 'ISO 27001',
      description: 'International security management certification',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      darkBgColor: 'bg-blue-900/20'
    },
    {
      icon: Lock,
      label: 'PCI DSS Level 1',
      description: 'Highest level payment security standard',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
      darkBgColor: 'bg-purple-900/20'
    },
    {
      icon: CheckCircle,
      label: '₹185Cr Insured',
      description: 'Comprehensive insurance coverage',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-100',
      darkBgColor: 'bg-cyan-900/20'
    }
  ];

  const platformStats = [
    {
      icon: Users,
      value: '15,000+',
      label: 'Active Users',
      growth: '+40% this month'
    },
    {
      icon: TrendingUp,
      value: '₹50L+',
      label: 'Secured in Escrow',
      growth: 'Zero disputes'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'User Rating',
      growth: '2,000+ reviews'
    },
    {
      icon: Globe,
      value: '99.9%',
      label: 'Uptime',
      growth: 'Last 12 months'
    }
  ];

  if (variant === 'header') {
    return (
      <div className="flex items-center space-x-6 overflow-x-auto">
        {trustBadges.slice(0, 3).map((badge, index) => (
          <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
            <div className={`p-1 rounded-full ${darkMode ? badge.darkBgColor : badge.bgColor}`}>
              <badge.icon className={`h-4 w-4 ${badge.color}`} />
            </div>
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trustBadges.map((badge, index) => (
          <div key={index} className="text-center">
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
              darkMode ? badge.darkBgColor : badge.bgColor
            }`}>
              <badge.icon className={`h-6 w-6 ${badge.color}`} />
            </div>
            <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {badge.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Trust Badges */}
      <div>
        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Security & Compliance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800 border-gray-700 hover:border-purple-500'
                  : 'bg-white border-gray-200 hover:border-purple-300'
              } shadow-lg hover:shadow-xl`}
            >
              <div className={`w-12 h-12 mb-3 rounded-full flex items-center justify-center ${
                darkMode ? badge.darkBgColor : badge.bgColor
              }`}>
                <badge.icon className={`h-6 w-6 ${badge.color}`} />
              </div>
              <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {badge.label}
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Statistics */}
      <div>
        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Platform Performance
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {platformStats.map((stat, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg text-center ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className={`w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center ${
                darkMode ? 'bg-purple-900/20' : 'bg-purple-100'
              }`}>
                <stat.icon className="h-5 w-5 text-purple-600" />
              </div>
              <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {stat.label}
              </div>
              <div className="text-xs text-green-600 font-medium">
                {stat.growth}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;