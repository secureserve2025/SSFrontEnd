import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, CheckCircle, Shield, FileText, CreditCard, Users } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'freelancer' | 'client';
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose, userType }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const freelancerSteps = [
    {
      title: "Welcome to SecureServe!",
      content: "Let's get you started with secure payments and AI-verified deliverables.",
      icon: Shield,
      demo: "Create your freelancer profile with identity verification for secure payments."
    },
    {
      title: "Complete Your Profile",
      content: "Add your details, skills, and payment information to start receiving projects.",
      icon: Users,
      demo: "Upload Aadhar, set UPI ID, and get your unique Freelancer ID generated."
    },
    {
      title: "Receive Projects",
      content: "Clients will send you projects with clear deliverable checklists created by AI.",
      icon: FileText,
      demo: "Review project requirements, deliverables, and timeline before accepting."
    },
    {
      title: "Submit & Get Paid",
      content: "Upload your work for AI verification and receive instant payments upon approval.",
      icon: CreditCard,
      demo: "AI checks your deliverables against requirements and releases payment automatically."
    }
  ];

  const clientSteps = [
    {
      title: "Welcome to SecureServe!",
      content: "Hire freelancers with confidence using our AI-powered escrow system.",
      icon: Shield,
      demo: "Create projects with secure payment protection and quality assurance."
    },
    {
      title: "Create Your Project",
      content: "Define requirements and let AI generate detailed deliverable checklists.",
      icon: FileText,
      demo: "Upload project briefs and get AI-generated specifications for clear expectations."
    },
    {
      title: "Secure Payment",
      content: "Deposit funds safely in escrow - money is only released when work is approved.",
      icon: CreditCard,
      demo: "Funds are held securely until deliverables meet your specified requirements."
    },
    {
      title: "AI Verification",
      content: "Our AI verifies deliverables automatically, ensuring quality and compliance.",
      icon: CheckCircle,
      demo: "Get detailed verification reports and approve payments with confidence."
    }
  ];

  const steps = userType === 'freelancer' ? freelancerSteps : clientSteps;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const playDemo = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-purple-500/30">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {userType === 'freelancer' ? 'Freelancer' : 'Client'} Onboarding
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  index <= currentStep ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
              {React.createElement(steps[currentStep].icon, { className: "h-8 w-8 text-white" })}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {steps[currentStep].title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {steps[currentStep].content}
            </p>
          </div>

          {/* Demo Section */}
          <div className="bg-gray-700 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">Interactive Demo</h4>
              <button
                onClick={playDemo}
                disabled={isPlaying}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                <Play className="h-4 w-4" />
                <span>{isPlaying ? 'Playing...' : 'Play Demo'}</span>
              </button>
            </div>
            <div className={`bg-gray-800 rounded-lg p-4 border-2 transition-colors ${
              isPlaying ? 'border-purple-400 animate-pulse' : 'border-gray-600'
            }`}>
              <p className="text-gray-300 text-sm">
                {steps[currentStep].demo}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <span className="text-gray-400">
              {currentStep + 1} of {steps.length}
            </span>

            {currentStep === steps.length - 1 ? (
              <button
                onClick={onClose}
                className="flex items-center space-x-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Get Started</span>
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;