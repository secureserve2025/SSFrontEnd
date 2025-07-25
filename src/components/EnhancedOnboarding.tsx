import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle, Shield, FileText, CreditCard, Users, Upload, Phone, Mail, MapPin, Building, Award, Star, Zap, Clock, AlertCircle, Play, MessageCircle } from 'lucide-react';

interface EnhancedOnboardingProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'freelancer' | 'client';
}

const EnhancedOnboarding: React.FC<EnhancedOnboardingProps> = ({ isOpen, onClose, userType }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showChecklist, setShowChecklist] = useState(true);
  const [achievements, setAchievements] = useState<string[]>([]);

  const freelancerSteps = [
    {
      title: "Welcome to SecureServe! 🎉",
      subtitle: "Your journey to secure freelancing starts here",
      content: "Join 15,000+ freelancers who never worry about payment delays. Our AI-powered platform ensures you get paid for quality work.",
      icon: Shield,
      demo: "See how freelancers earn 40% more with guaranteed payments",
      video: "https://example.com/freelancer-intro.mp4",
      checklist: [
        "Aadhar Card (for KYC verification)",
        "PAN Card (for tax compliance)",
        "Bank Account Details",
        "UPI ID for instant payments",
        "Portfolio samples (optional)"
      ],
      tips: [
        "Keep documents ready for faster verification",
        "High-quality portfolio increases project opportunities",
        "Complete profile gets 3x more client views"
      ]
    },
    {
      title: "Identity Verification 🔐",
      subtitle: "Secure your account with KYC compliance",
      content: "We follow RBI guidelines to ensure platform security. Your documents are encrypted and never shared.",
      icon: FileText,
      demo: "Upload Aadhar and PAN for instant verification",
      interactive: true,
      steps: [
        "Upload clear photo of Aadhar Card",
        "Upload PAN Card image",
        "Take a selfie for face verification",
        "Wait for AI verification (2-3 minutes)"
      ],
      security: "Bank-grade encryption • RBI compliant • ISO 27001 certified"
    },
    {
      title: "Payment Setup 💳",
      subtitle: "Configure secure payment methods",
      content: "Link your bank account and UPI for instant payments. Funds are released immediately after work approval.",
      icon: CreditCard,
      demo: "Set up UPI and bank details for payments",
      paymentMethods: [
        { name: "UPI", time: "Instant", fee: "Free", popular: true },
        { name: "Bank Transfer", time: "2-4 hours", fee: "Free", popular: false },
        { name: "Digital Wallet", time: "Instant", fee: "₹5", popular: false }
      ]
    },
    {
      title: "Profile Creation 👤",
      subtitle: "Showcase your skills and experience",
      content: "Create a compelling profile that attracts clients. Add skills, portfolio, and set your rates.",
      icon: Users,
      demo: "Build a profile that gets 5x more projects",
      profileTips: [
        "Professional photo increases trust by 60%",
        "Detailed skills list improves search ranking",
        "Portfolio samples showcase your expertise",
        "Competitive rates attract more clients"
      ]
    },
    {
      title: "First Project Setup 🚀",
      subtitle: "Ready to receive your first project",
      content: "You're all set! Clients can now send you projects with clear deliverables and secure payments.",
      icon: Zap,
      demo: "See how projects work from start to payment",
      nextSteps: [
        "Browse available projects",
        "Submit proposals to clients",
        "Deliver quality work",
        "Get paid instantly"
      ]
    }
  ];

  const clientSteps = [
    {
      title: "Welcome to SecureServe! 🎯",
      subtitle: "Hire with confidence using AI-powered escrow",
      content: "Join 5,000+ businesses that use our platform for secure freelancer hiring with guaranteed quality.",
      icon: Shield,
      demo: "See how clients reduce project disputes by 95%",
      video: "https://example.com/client-intro.mp4",
      checklist: [
        "Business registration documents",
        "GST certificate (if applicable)",
        "Bank account for payments",
        "Project requirements document",
        "Budget allocation"
      ],
      benefits: [
        "95% reduction in payment disputes",
        "40% faster project completion",
        "AI-verified deliverable quality",
        "Secure escrow protection"
      ]
    },
    {
      title: "Business Verification 🏢",
      subtitle: "Verify your business for enhanced trust",
      content: "Business verification helps freelancers trust your projects and improves response rates.",
      icon: Building,
      demo: "Complete business KYC for better project success",
      interactive: true,
      steps: [
        "Upload business registration certificate",
        "Provide GST details (if applicable)",
        "Verify business address",
        "Add authorized signatory details"
      ],
      trustBadges: ["Verified Business", "GST Registered", "Secure Payments", "AI Protected"]
    },
    {
      title: "Payment & Escrow Setup 💰",
      subtitle: "Configure secure project funding",
      content: "Set up escrow payments that protect both you and freelancers. Funds are released only after work approval.",
      icon: CreditCard,
      demo: "See how escrow protects your payments",
      escrowBenefits: [
        "Funds held securely until work completion",
        "AI verification ensures quality delivery",
        "Instant refund if requirements not met",
        "Transparent payment timeline"
      ]
    },
    {
      title: "Project Creation Wizard 📋",
      subtitle: "Create projects with AI-assisted requirements",
      content: "Our AI helps you create detailed project briefs that reduce revisions and ensure quality delivery.",
      icon: FileText,
      demo: "Create your first project with AI assistance",
      projectTypes: [
        { name: "Video Production", available: true, eta: "Available now" },
        { name: "Content Writing", available: false, eta: "Q1 2025" },
        { name: "UI/UX Design", available: false, eta: "Q2 2025" },
        { name: "Gen AI Services", available: false, eta: "Q2 2025" }
      ]
    },
    {
      title: "Ready to Hire! 🎉",
      subtitle: "Start hiring top freelancers with confidence",
      content: "Your account is ready! Post projects and connect with verified freelancers for quality work delivery.",
      icon: Users,
      demo: "Post your first project and get proposals",
      nextSteps: [
        "Create detailed project briefs",
        "Review freelancer proposals",
        "Fund projects via secure escrow",
        "Receive AI-verified deliverables"
      ]
    }
  ];

  const steps = userType === 'freelancer' ? freelancerSteps : clientSteps;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(currentStep + 1);
      
      // Add achievement
      if (currentStep === 0) {
        setAchievements(prev => [...prev, "🎯 Onboarding Started"]);
      } else if (currentStep === Math.floor(steps.length / 2)) {
        setAchievements(prev => [...prev, "⭐ Halfway There"]);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeOnboarding = () => {
    setCompletedSteps(prev => [...prev, currentStep]);
    setAchievements(prev => [...prev, "🏆 Onboarding Complete"]);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-purple-500/30">
        {/* Header with Progress */}
        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">
              {userType === 'freelancer' ? 'Freelancer' : 'Client'} Onboarding
            </h2>
            <div className="flex items-center space-x-4">
              {/* Achievements */}
              {achievements.length > 0 && (
                <div className="flex items-center space-x-1">
                  {achievements.slice(-2).map((achievement, index) => (
                    <span key={index} className="text-sm bg-white/20 px-2 py-1 rounded-full">
                      {achievement}
                    </span>
                  ))}
                </div>
              )}
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-2 mb-4">
            {steps.map((_, index) => (
              <div key={index} className="flex-1">
                <div className={`h-2 rounded-full transition-all duration-500 ${
                  completedSteps.includes(index) 
                    ? 'bg-green-400' 
                    : index === currentStep 
                      ? 'bg-white' 
                      : 'bg-white/30'
                }`} />
              </div>
            ))}
          </div>
          
          <div className="text-sm opacity-90">
            Step {currentStep + 1} of {steps.length} • {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Main Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  {React.createElement(steps[currentStep].icon, { className: "h-6 w-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {steps[currentStep].title}
                  </h3>
                  <p className="text-purple-400 font-medium">
                    {steps[currentStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {steps[currentStep].content}
              </p>

              {/* Interactive Demo */}
              <div className="bg-gray-700 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold flex items-center space-x-2">
                    <Play className="h-4 w-4" />
                    <span>Interactive Demo</span>
                  </h4>
                  <span className="text-xs text-purple-400 bg-purple-900/30 px-2 py-1 rounded-full">
                    {userType === 'freelancer' ? 'Freelancer View' : 'Client View'}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  {steps[currentStep].demo}
                </p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Start Interactive Demo
                </button>
              </div>

              {/* Live Chat Support */}
              <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageCircle className="h-4 w-4 text-cyan-400" />
                  <span className="text-cyan-400 font-medium">Need Help?</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Online</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Our onboarding specialists are here to help you get started
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  Start Live Chat →
                </button>
              </div>
            </div>

            {/* Right Column - Contextual Information */}
            <div className="space-y-6">
              {/* Checklist */}
              {steps[currentStep].checklist && showChecklist && (
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold">Required Documents</h4>
                    <button 
                      onClick={() => setShowChecklist(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {steps[currentStep].checklist.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tips */}
              {steps[currentStep].tips && (
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <h4 className="text-yellow-400 font-semibold mb-3 flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Pro Tips</span>
                  </h4>
                  <ul className="space-y-2">
                    {steps[currentStep].tips.map((tip, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start space-x-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {steps[currentStep].benefits && (
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-3">Platform Benefits</h4>
                  <ul className="space-y-2">
                    {steps[currentStep].benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Security Info */}
              {steps[currentStep].security && (
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2 flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Security & Compliance</span>
                  </h4>
                  <p className="text-gray-300 text-sm">{steps[currentStep].security}</p>
                </div>
              )}

              {/* Progress Milestone */}
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  {Math.round(((currentStep + 1) / steps.length) * 100)}%
                </div>
                <div className="text-gray-300 text-sm">Setup Complete</div>
                <div className="mt-2 text-xs text-gray-400">
                  {steps.length - currentStep - 1} steps remaining
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="bg-gray-700 px-8 py-6 border-t border-gray-600">
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                {currentStep + 1} of {steps.length}
              </span>
              
              {currentStep === steps.length - 1 ? (
                <button
                  onClick={completeOnboarding}
                  className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Complete Setup</span>
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
                >
                  <span>Continue</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedOnboarding;