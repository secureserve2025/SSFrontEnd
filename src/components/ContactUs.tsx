import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, AlertCircle, User, Building, ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactUsProps {
  darkMode: boolean;
}

const ContactUs: React.FC<ContactUsProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    userType: 'client'
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      contact: '+91 80 4567 8900',
      availability: 'Mon-Fri, 9:00 AM - 6:00 PM IST',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      darkBgColor: 'bg-green-900/20'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed queries',
      contact: 'support@secureserve.ai',
      availability: 'Response within 4-6 hours',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      darkBgColor: 'bg-blue-900/20'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our team',
      contact: 'Available on platform',
      availability: 'Mon-Fri, 9:00 AM - 6:00 PM IST',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
      darkBgColor: 'bg-purple-900/20'
    }
  ];

  const officeLocations = [
    {
      city: 'Bangalore (Headquarters)',
      address: '#42, 3rd Floor, Koramangala',
      details: 'Bengaluru, Karnataka 560034',
      phone: '+91 80 4567 8900',
      email: 'bangalore@secureserve.ai'
    },
    {
      city: 'Mumbai (Regional Office)',
      address: 'WeWork, Oberoi Commerz II',
      details: 'Goregaon East, Mumbai 400063',
      phone: '+91 22 6789 0123',
      email: 'mumbai@secureserve.ai'
    },
    {
      city: 'Delhi NCR (Regional Office)',
      address: 'DLF Cyber City, Building 10',
      details: 'Sector 24, Gurugram 122002',
      phone: '+91 124 456 7890',
      email: 'delhi@secureserve.ai'
    }
  ];

  const subjectOptions = [
    'General Inquiry',
    'Technical Support',
    'Payment Issues',
    'Account Verification',
    'Project Disputes',
    'Partnership Opportunities',
    'Media & Press',
    'Compliance Questions',
    'Feature Requests',
    'Other'
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (formData.phone && !/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        userType: 'client'
      });
      setIsSubmitting(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Back to Home Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <Home className="h-4 w-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Contact Us
          </h1>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get in touch with our team for support, partnerships, or general inquiries
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 p-4 bg-green-900/20 border border-green-500/30 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <p className="text-green-400 font-medium">
                Thank you! Your message has been sent successfully. We'll get back to you within 4-6 hours.
              </p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I am a *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.userType === 'client'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <input
                      type="radio"
                      name="userType"
                      value="client"
                      checked={formData.userType === 'client'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <Building className="h-5 w-5 text-purple-600 mr-2" />
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>Client</span>
                  </label>
                  <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.userType === 'freelancer'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <input
                      type="radio"
                      name="userType"
                      value="freelancer"
                      checked={formData.userType === 'freelancer'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <User className="h-5 w-5 text-purple-600 mr-2" />
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>Freelancer</span>
                  </label>
                </div>
              </div>

              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                      errors.name
                        ? 'border-red-500'
                        : darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                      errors.email
                        ? 'border-red-500'
                        : darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                      errors.phone
                        ? 'border-red-500'
                        : darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.subject
                      ? 'border-red-500'
                      : darkMode
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Select a subject</option>
                  {subjectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Please describe your inquiry in detail..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500'
                      : darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  disabled={isSubmitting}
                />
                <div className="flex justify-between items-center mt-1">
                  <span className={`text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Minimum 10 characters
                  </span>
                  <span className={`text-xs ${
                    formData.message.length >= 10 ? 'text-green-500' : 'text-gray-400'
                  }`}>
                    {formData.message.length}/10
                  </span>
                </div>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border transition-colors ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        darkMode ? method.darkBgColor : method.bgColor
                      }`}>
                        <method.icon className={`h-5 w-5 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {method.title}
                        </h4>
                        <p className={`text-sm mb-1 ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {method.description}
                        </p>
                        <p className={`font-medium ${method.color}`}>
                          {method.contact}
                        </p>
                        <p className={`text-xs ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {method.availability}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Offices
              </h3>
              <div className="space-y-4">
                {officeLocations.map((office, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <h4 className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {office.city}
                        </h4>
                        <p className={`text-sm ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {office.address}
                        </p>
                        <p className={`text-sm ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {office.details}
                        </p>
                        <div className="mt-2 space-y-1">
                          <p className={`text-xs ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            📞 {office.phone}
                          </p>
                          <p className={`text-xs ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            ✉️ {office.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-purple-600" />
                <h3 className={`text-lg font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Monday - Friday
                  </span>
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                    9:00 AM - 6:00 PM IST
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Saturday
                  </span>
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                    10:00 AM - 2:00 PM IST
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Sunday
                  </span>
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;