import React from 'react';
import { useState } from 'react';

interface CTASectionProps {
  darkMode: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ darkMode }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Validate individual fields
  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters long' : '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters long' : '';
      default:
        return '';
    }
  };

  // Check if form is valid
  const isFormValid = () => {
    const nameValid = formData.name.trim().length >= 2;
    const emailValid = formData.email.trim() && emailRegex.test(formData.email);
    const messageValid = formData.message.trim().length >= 10;
    return nameValid && emailValid && messageValid;
  };
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    
    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }
    
    // If validation passes, show confirmation
    setShowConfirmation(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Secure Your Freelance Future?
          </h2>
          
          {/* CTA Subtitle */}
          <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
          </p>
          <p className="text-lg sm:text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto">
            Join thousands of Indian freelancers who never worry about payment delays anymore
          </p>
          
          {/* Message Form */}
          <div className="max-w-lg mx-auto bg-gray-800 rounded-2xl p-8 border border-purple-500/30">
            <div className="flex items-center space-x-2 mb-6">
              <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 6-8 4-2 8-8-18z" />
              </svg>
              <h3 className="text-xl font-semibold text-purple-400">Send us a message</h3>
            </div>
            <div className="w-12 h-0.5 bg-purple-400 mb-6"></div>
            
            <form className="space-y-6" onSubmit={handleSendMessage}>
              {/* Name Field */}
              <div>
                <label className="block text-purple-400 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={(e) => setErrors(prev => ({ ...prev, name: validateField('name', e.target.value) }))}
                  className={`w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-purple-500/50 focus:border-purple-400'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              {/* Email Field */}
              <div>
                <label className="block text-purple-400 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={(e) => setErrors(prev => ({ ...prev, email: validateField('email', e.target.value) }))}
                  className={`w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-purple-500/50 focus:border-purple-400'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              {/* Message Field */}
              <div>
                <label className="block text-purple-400 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  onBlur={(e) => setErrors(prev => ({ ...prev, message: validateField('message', e.target.value) }))}
                  className={`w-full px-4 py-3 bg-transparent border-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-purple-500 focus:border-purple-400'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              {/* Send Button */}
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`w-full font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  isFormValid()
                    ? 'bg-purple-600 hover:bg-purple-700 text-white cursor-pointer'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 6-8 4-2 8-8-18z" />
                </svg>
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-purple-500/30 text-center">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              Thank you!
            </h3>
            <p className="text-white text-lg mb-2">
              Your message has been sent successfully.
            </p>
            <p className="text-gray-300 text-base mb-6">
              We'll get back to you soon.
            </p>
            <button
              onClick={closeConfirmation}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
                  className="w-full px-4 py-3 bg-transparent border border-purple-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label className="block text-purple-400 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-transparent border border-purple-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label className="block text-purple-400 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-transparent border-2 border-purple-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                ></textarea>
              </div>
              
              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 6-8 4-2 8-8-18z" />
                </svg>
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-purple-500/30 text-center">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              Thank you!
            </h3>
            <p className="text-white text-lg mb-2">
              Your message has been sent successfully.
            </p>
            <p className="text-gray-300 text-base mb-6">
              We'll get back to you soon.
            </p>
            <button
              onClick={closeConfirmation}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

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