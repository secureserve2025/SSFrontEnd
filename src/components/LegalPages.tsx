import React, { useState } from 'react';
import { FileText, Shield, Scale, Eye, Download, ExternalLink } from 'lucide-react';

interface LegalPagesProps {
  darkMode: boolean;
}

const LegalPages: React.FC<LegalPagesProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('terms');

  const legalTabs = [
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'compliance', label: 'Compliance', icon: Scale },
    { id: 'transparency', label: 'Transparency Report', icon: Eye }
  ];

  const renderTermsOfService = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Quick Summary</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• SecureServe provides AI-powered escrow services for freelancers and clients</li>
          <li>• Funds are held securely until work is verified and approved</li>
          <li>• Disputes are resolved through AI analysis and human mediation</li>
          <li>• Platform fee is 7% split between both parties (3.5% each)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Service Description</h3>
          <p className="text-gray-700 leading-relaxed">
            SecureServe operates as an AI-powered escrow platform connecting freelancers and clients 
            in India. We provide secure payment processing, automated work verification, and dispute 
            resolution services in compliance with RBI regulations.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">2. User Responsibilities</h3>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">For Freelancers:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Deliver work according to agreed specifications and timeline</li>
              <li>Provide accurate identity verification documents</li>
              <li>Maintain professional communication with clients</li>
              <li>Report any issues or disputes promptly</li>
            </ul>
            
            <h4 className="font-medium text-gray-900 mt-4">For Clients:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Provide clear project requirements and deliverable specifications</li>
              <li>Fund projects through secure escrow before work begins</li>
              <li>Review and approve work within specified timeframes</li>
              <li>Communicate feedback constructively and professionally</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Payment Terms</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>All payments are processed through RBI-compliant escrow accounts</li>
            <li>Funds are released upon successful work verification or client approval</li>
            <li>Platform fee of 7% is split equally between freelancer and client</li>
            <li>Refunds are processed within 3-5 business days for eligible cases</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Dispute Resolution</h3>
          <p className="text-gray-700 leading-relaxed">
            Disputes are resolved through our three-tier system: AI analysis, human mediation, 
            and formal arbitration. Resolution typically takes 24-72 hours depending on complexity.
          </p>
        </section>
      </div>
    </div>
  );

  const renderPrivacyPolicy = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="font-semibold text-green-900 mb-2">Privacy Commitment</h3>
        <p className="text-sm text-green-800">
          We collect only essential information needed for secure transactions and never sell 
          your personal data to third parties. Your privacy is protected by Indian data protection laws.
        </p>
      </div>

      <div className="space-y-4">
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Personal Information</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Name and contact details</li>
                <li>• Aadhar and PAN for KYC</li>
                <li>• Bank account information</li>
                <li>• Professional credentials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Usage Information</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Platform interaction data</li>
                <li>• Project and payment history</li>
                <li>• Communication logs</li>
                <li>• Device and browser information</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Verify identity and prevent fraud</li>
            <li>Process payments and maintain escrow accounts</li>
            <li>Provide customer support and resolve disputes</li>
            <li>Improve platform features and security</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h3>
          <p className="text-gray-700 leading-relaxed">
            All personal data is encrypted using AES-256 encryption and stored in secure, 
            ISO 27001 certified data centers. We implement multi-factor authentication, 
            regular security audits, and comply with Indian data protection regulations.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Access and download your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your account</li>
            <li>Opt-out of marketing communications</li>
            <li>File complaints with data protection authorities</li>
          </ul>
        </section>
      </div>
    </div>
  );

  const renderCompliance = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">RBI Compliance</h3>
          <p className="text-sm text-blue-800 mb-3">
            Fully compliant with Reserve Bank of India regulations for payment aggregators and escrow services.
          </p>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• Payment Aggregator License: PA-2024-001</li>
            <li>• Escrow Account Authorization: ESC-2024-002</li>
            <li>• KYC/AML Compliance Certified</li>
          </ul>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="font-semibold text-purple-900 mb-2">International Standards</h3>
          <p className="text-sm text-purple-800 mb-3">
            Certified under international security and compliance frameworks.
          </p>
          <ul className="text-xs text-purple-700 space-y-1">
            <li>• ISO 27001:2013 Information Security</li>
            <li>• SOC 2 Type II Compliance</li>
            <li>• PCI DSS Level 1 Certification</li>
          </ul>
        </div>
      </div>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Regulatory Framework</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900">Indian Regulations</h4>
            <ul className="text-sm text-gray-700 space-y-1 mt-2">
              <li>• Information Technology Act, 2000</li>
              <li>• Digital Personal Data Protection Act, 2023</li>
              <li>• Foreign Exchange Management Act (FEMA)</li>
              <li>• Goods and Services Tax (GST) Act</li>
              <li>• Prevention of Money Laundering Act (PMLA)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900">International Compliance</h4>
            <ul className="text-sm text-gray-700 space-y-1 mt-2">
              <li>• General Data Protection Regulation (GDPR)</li>
              <li>• Payment Card Industry Data Security Standard (PCI DSS)</li>
              <li>• International Organization for Standardization (ISO)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Audit & Certification</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-medium">Security Audit</h4>
            <p className="text-sm text-gray-600">Quarterly penetration testing</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-medium">Compliance Review</h4>
            <p className="text-sm text-gray-600">Annual regulatory assessment</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <Scale className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h4 className="font-medium">Legal Review</h4>
            <p className="text-sm text-gray-600">Continuous legal monitoring</p>
          </div>
        </div>
      </section>
    </div>
  );

  const renderTransparencyReport = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Transparency Commitment</h3>
        <p className="text-sm text-gray-700">
          We believe in transparency and regularly publish reports on our platform performance, 
          security incidents, and compliance activities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Statistics (2024)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium">Successful Transactions</span>
              <span className="text-lg font-bold text-green-600">8,932</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium">Dispute Resolution Rate</span>
              <span className="text-lg font-bold text-blue-600">99.2%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium">Average Resolution Time</span>
              <span className="text-lg font-bold text-purple-600">18 hours</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium">Platform Uptime</span>
              <span className="text-lg font-bold text-yellow-600">99.97%</span>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Incidents</h3>
          <div className="space-y-3">
            <div className="p-3 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Data Breaches</span>
                <span className="text-lg font-bold text-green-600">0</span>
              </div>
              <p className="text-xs text-gray-600">No security incidents reported in 2024</p>
            </div>
            <div className="p-3 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Fraud Attempts Blocked</span>
                <span className="text-lg font-bold text-red-600">247</span>
              </div>
              <p className="text-xs text-gray-600">AI-powered fraud detection system</p>
            </div>
            <div className="p-3 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">System Vulnerabilities</span>
                <span className="text-lg font-bold text-orange-600">3</span>
              </div>
              <p className="text-xs text-gray-600">All patched within 24 hours</p>
            </div>
          </div>
        </section>
      </div>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Activities</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium">RBI Compliance Audit</h4>
              <p className="text-sm text-gray-600">Annual regulatory review completed</p>
            </div>
            <span className="text-green-600 font-medium">Passed</span>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium">ISO 27001 Recertification</h4>
              <p className="text-sm text-gray-600">Information security management review</p>
            </div>
            <span className="text-green-600 font-medium">Certified</span>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium">PCI DSS Assessment</h4>
              <p className="text-sm text-gray-600">Payment security standards validation</p>
            </div>
            <span className="text-green-600 font-medium">Level 1</span>
          </div>
        </div>
      </section>

      <div className="flex space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          <Download className="h-4 w-4" />
          <span>Download Full Report</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg">
          <ExternalLink className="h-4 w-4" />
          <span>View Previous Reports</span>
        </button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'terms':
        return renderTermsOfService();
      case 'privacy':
        return renderPrivacyPolicy();
      case 'compliance':
        return renderCompliance();
      case 'transparency':
        return renderTransparencyReport();
      default:
        return renderTermsOfService();
    }
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Legal & Compliance
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Transparent policies and regulatory compliance for your peace of mind
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {legalTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`p-8 rounded-2xl ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        } shadow-lg`}>
          {renderTabContent()}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Last updated: January 15, 2025 • Questions? Contact our legal team at{' '}
            <a href="mailto:legal@secureserve.ai" className="text-purple-600 hover:text-purple-700">
              legal@secureserve.ai
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalPages;