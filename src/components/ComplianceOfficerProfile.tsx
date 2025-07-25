import React from 'react';
import { Shield, Award, ExternalLink, Mail, Phone, Linkedin } from 'lucide-react';

interface ComplianceOfficerProfileProps {
  darkMode: boolean;
}

const ComplianceOfficerProfile: React.FC<ComplianceOfficerProfileProps> = ({ darkMode }) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Meet Our Compliance Officer
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ensuring regulatory compliance and building trust through transparency
          </p>
        </div>

        {/* Profile Card */}
        <div className={`rounded-2xl p-8 ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        } shadow-xl`}>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Profile Image and Basic Info */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">RS</span>
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Rajesh Sharma
              </h3>
              <p className={`text-lg font-medium mb-4 ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>
                Chief Compliance Officer
              </p>
              
              {/* Contact Information */}
              <div className="space-y-2">
                <a 
                  href="mailto:compliance@secureserve.ai"
                  className={`flex items-center justify-center space-x-2 text-sm ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors`}
                >
                  <Mail className="h-4 w-4" />
                  <span>compliance@secureserve.ai</span>
                </a>
                <a 
                  href="tel:+918045678900"
                  className={`flex items-center justify-center space-x-2 text-sm ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors`}
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 80 4567 8900</span>
                </a>
                <a 
                  href="https://linkedin.com/in/rajesh-sharma-compliance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 text-sm ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors`}
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Professional Background */}
            <div className="md:col-span-2">
              <h4 className={`text-xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Professional Background
              </h4>
              <div className={`text-sm leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p className="mb-4">
                  Rajesh brings over 15 years of experience in financial services compliance, 
                  regulatory affairs, and risk management. He has previously served as Senior 
                  Compliance Manager at HDFC Bank and Compliance Director at Paytm.
                </p>
                <p className="mb-4">
                  He holds a Master's degree in Law (LL.M.) from National Law School of India 
                  University, Bangalore, and is a certified Chartered Accountant (CA) and 
                  Company Secretary (CS).
                </p>
                <p>
                  At SecureServe, Rajesh ensures our platform meets all RBI regulations, 
                  data protection laws, and international compliance standards while 
                  maintaining the highest levels of security and transparency.
                </p>
              </div>

              {/* Certifications */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-purple-600" />
                    <span className={`font-medium ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Education
                    </span>
                  </div>
                  <ul className={`text-sm space-y-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>• LL.M., NLSIU Bangalore</li>
                    <li>• Chartered Accountant (CA)</li>
                    <li>• Company Secretary (CS)</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className={`font-medium ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Certifications
                    </span>
                  </div>
                  <ul className={`text-sm space-y-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>• RBI Compliance Certified</li>
                    <li>• ISO 27001 Lead Auditor</li>
                    <li>• PCI DSS Qualified Assessor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Responsibilities */}
          <div className="mt-8 pt-8 border-t border-gray-600">
            <h4 className={`text-xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Key Responsibilities
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className={`font-medium mb-2 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  Regulatory Compliance
                </h5>
                <ul className={`text-sm space-y-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>• RBI Payment Aggregator compliance</li>
                  <li>• KYC/AML policy implementation</li>
                  <li>• FEMA and foreign exchange regulations</li>
                  <li>• Data protection and privacy laws</li>
                </ul>
              </div>
              <div>
                <h5 className={`font-medium mb-2 ${
                  darkMode ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  Risk Management
                </h5>
                <ul className={`text-sm space-y-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>• Security audit oversight</li>
                  <li>• Fraud prevention strategies</li>
                  <li>• Incident response coordination</li>
                  <li>• Compliance training programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 pt-8 border-t border-gray-600 text-center">
            <p className={`mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Have questions about our compliance practices or need to report a concern?
            </p>
            <a
              href="mailto:compliance@secureserve.ai"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Compliance Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceOfficerProfile;