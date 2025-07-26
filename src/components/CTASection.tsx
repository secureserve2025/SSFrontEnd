import React from 'react';
import { useState, useEffect } from 'react';

interface CTASectionProps {
  darkMode: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ darkMode }) => {

  return (
    <>
      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          {/* Simple CTA content can be added here if needed */}
        </div>
      </section>


      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">SecureServe</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                India's first AI-powered escrow platform for freelancers and clients. 
                Secure payments, verified deliverables.
              </p>
            </div>
            
            {/* Contact Details */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>📍 #42, 3rd Floor, Koramangala</p>
                <p>Bengaluru, Karnataka 560034</p>
                <p>📞 +91 80 4567 8900</p>
                <p>✉️ hello@secureserve.ai</p>
              </div>
            </div>
            
            {/* Business Hours */}
            <div>
              <h3 className="text-white font-semibold mb-4">Business Hours</h3>
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
              © 2025 SecureServe. Built for Indian freelancers, by Indian freelancers.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTASection;