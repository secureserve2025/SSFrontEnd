import React, { useState } from 'react';
import { Shield, FileText, Lock, Award, ExternalLink, CheckCircle, Download, Eye } from 'lucide-react';

interface ComplianceSectionProps {
  darkMode: boolean;
}

const ComplianceSection: React.FC<ComplianceSectionProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('security');

  const complianceAreas = [
    { id: 'security', label: 'Security & Encryption', icon: Lock },
    { id: 'legal', label: 'Legal & Regulatory', icon: FileText },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'insurance', label: 'Insurance & Protection', icon: Shield }
  ];

  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data transmitted using AES-256 encryption',
      status: 'Implemented',
      details: 'Bank-grade encryption for all communications and data storage'
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Additional security layer for account access',
      status: 'Implemented',
      details: 'SMS, email, and authenticator app support'
    },
    {
      title: 'Regular Security Audits',
      description: 'Third-party penetration testing and vulnerability assessments',
      status: 'Quarterly',
      details: 'Conducted by certified cybersecurity firms'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Automated backups with 99.9% uptime guarantee',
      status: 'Active',
      details: 'Multiple geographic locations with instant failover'
    }
  ];

  const legalCompliance = [
    {
      title: 'RBI Compliance',
      description: 'Fully compliant with Reserve Bank of India regulations',
      authority: 'Reserve Bank of India',
      status: 'Certified',
      link: '#'
    },
    {
      title: 'IT Act 2000 Compliance',
      description: 'Adherence to Indian Information Technology Act',
      authority: 'Ministry of Electronics & IT',
      status: 'Compliant',
      link: '#'
    },
    {
      title: 'GDPR Compliance',
      description: 'European data protection regulation compliance',
      authority: 'European Union',
      status: 'Certified',
      link: '#'
    },
    {
      title: 'PCI DSS Level 1',
      description: 'Payment Card Industry Data Security Standard',
      authority: 'PCI Security Standards Council',
      status: 'Certified',
      link: '#'
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001:2013',
      description: 'Information Security Management System',
      issuer: 'International Organization for Standardization',
      validUntil: 'December 2025',
      certificateId: 'ISO27001-SS-2024-001'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 Audit',
      issuer: 'American Institute of CPAs',
      validUntil: 'March 2025',
      certificateId: 'SOC2-SS-2024-002'
    },
    {
      name: 'PCI DSS Level 1',
      description: 'Payment Card Industry Data Security Standard',
      issuer: 'PCI Security Standards Council',
      validUntil: 'June 2025',
      certificateId: 'PCI-SS-2024-003'
    }
  ];

  const insuranceCoverage = [
    {
      type: 'Professional Indemnity',
      coverage: '₹50 Crores',
      provider: 'HDFC ERGO General Insurance',
      description: 'Covers professional negligence and errors in service delivery'
    },
    {
      type: 'Cyber Liability',
      coverage: '₹25 Crores',
      provider: 'ICICI Lombard',
      description: 'Protection against cyber attacks and data breaches'
    },
    {
      type: 'Directors & Officers',
      coverage: '₹10 Crores',
      provider: 'Bajaj Allianz',
      description: 'Coverage for management decisions and corporate governance'
    },
    {
      type: 'Escrow Protection',
      coverage: '₹100 Crores',
      provider: 'SBI General Insurance',
      description: 'Dedicated coverage for funds held in escrow accounts'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'security':
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Security Infrastructure
            </h3>
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h4>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {feature.status}
                  </span>
                </div>
                <p className={`text-sm mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
                <p className={`text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        );

      case 'legal':
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Legal & Regulatory Compliance
            </h3>
            {legalCompliance.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {item.status}
                    </span>
                    <a
                      href={item.link}
                      className="text-purple-600 hover:text-purple-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className={`text-sm mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
                <p className={`text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Regulatory Authority: {item.authority}
                </p>
              </div>
            ))}
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Security Certifications
            </h3>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {cert.name}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 text-sm">
                      <Eye className="h-4 w-4" />
                      <span>View</span>
                    </button>
                    <button className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 text-sm">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
                <p className={`text-sm mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {cert.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                    Issued by: {cert.issuer}
                  </span>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                    Valid until: {cert.validUntil}
                  </span>
                </div>
                <p className={`text-xs mt-1 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Certificate ID: {cert.certificateId}
                </p>
              </div>
            ))}
          </div>
        );

      case 'insurance':
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Insurance Coverage
            </h3>
            {insuranceCoverage.map((insurance, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {insurance.type}
                  </h4>
                  <span className="text-2xl font-bold text-green-600">
                    {insurance.coverage}
                  </span>
                </div>
                <p className={`text-sm mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {insurance.description}
                </p>
                <p className={`text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Provider: {insurance.provider}
                </p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Security & Compliance
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Bank-grade security with full regulatory compliance and comprehensive insurance coverage
          </p>
          
          {/* Compliance Summary */}
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg max-w-4xl mx-auto">
            <p className="text-blue-900 font-medium text-lg">
              SecureServe provides secure escrow services with comprehensive compliance and security measures.
            </p>
            <a href="/legal" className="text-blue-600 hover:text-blue-700 font-medium underline">
              Learn more about our compliance →
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {complianceAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === area.id
                  ? 'bg-purple-600 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <area.icon className="h-4 w-4" />
              <span>{area.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`p-8 rounded-2xl ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {renderTabContent()}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              99.9% Uptime
            </h3>
            <p className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Guaranteed availability
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              ₹185 Crores
            </h3>
            <p className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Total insurance coverage
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              AES-256
            </h3>
            <p className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Military-grade encryption
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              ISO 27001
            </h3>
            <p className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Certified secure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;