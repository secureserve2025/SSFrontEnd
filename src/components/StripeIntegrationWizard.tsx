import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Copy, Eye, EyeOff, ExternalLink, Shield, CreditCard, Zap } from 'lucide-react';

interface StripeIntegrationWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const StripeIntegrationWizard: React.FC<StripeIntegrationWizardProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stripeData, setStripeData] = useState({
    publishableKey: '',
    secretKey: '',
    webhookSecret: '',
    testMode: true
  });
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [testResults, setTestResults] = useState<any>(null);

  const steps = [
    {
      title: 'Create Stripe Account',
      description: 'Set up your Stripe account for payment processing',
      content: 'stripe-account'
    },
    {
      title: 'Get API Keys',
      description: 'Retrieve your Stripe API keys from the dashboard',
      content: 'api-keys'
    },
    {
      title: 'Configure Webhooks',
      description: 'Set up webhooks for real-time payment updates',
      content: 'webhooks'
    },
    {
      title: 'Test Integration',
      description: 'Verify your Stripe integration is working correctly',
      content: 'test-integration'
    },
    {
      title: 'Go Live',
      description: 'Switch to live mode and start processing real payments',
      content: 'go-live'
    }
  ];

  const testStripeConnection = async () => {
    setConnectionStatus('testing');
    
    // Simulate API test
    setTimeout(() => {
      if (stripeData.publishableKey && stripeData.secretKey) {
        setConnectionStatus('success');
        setTestResults({
          account: 'acct_test123',
          country: 'IN',
          currency: 'inr',
          paymentMethods: ['card', 'upi', 'netbanking'],
          webhookStatus: 'active'
        });
      } else {
        setConnectionStatus('error');
      }
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!isOpen) return null;

  const renderStepContent = () => {
    switch (steps[currentStep].content) {
      case 'stripe-account':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Before You Start</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Business registration documents</li>
                <li>• Bank account details</li>
                <li>• PAN card for tax compliance</li>
                <li>• GST certificate (if applicable)</li>
              </ul>
            </div>
            
            <div className="text-center">
              <a
                href="https://dashboard.stripe.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Create Stripe Account</span>
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Indian Market Requirements</h4>
              <p className="text-sm text-gray-600">
                Stripe supports Indian businesses with local payment methods including UPI, 
                Net Banking, and popular wallets. Setup typically takes 2-3 business days for verification.
              </p>
            </div>
          </div>
        );

      case 'api-keys':
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <h4 className="font-semibold text-yellow-900">Security Notice</h4>
              </div>
              <p className="text-sm text-yellow-800">
                Never share your secret key publicly. Store it securely in environment variables.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Publishable Key
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={stripeData.publishableKey}
                    onChange={(e) => setStripeData(prev => ({ ...prev, publishableKey: e.target.value }))}
                    placeholder="pk_test_..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={() => copyToClipboard(stripeData.publishableKey)}
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secret Key
                </label>
                <div className="flex space-x-2">
                  <input
                    type={showSecretKey ? 'text' : 'password'}
                    value={stripeData.secretKey}
                    onChange={(e) => setStripeData(prev => ({ ...prev, secretKey: e.target.value }))}
                    placeholder="sk_test_..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={() => setShowSecretKey(!showSecretKey)}
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    {showSecretKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Where to Find Your Keys</h4>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>Log in to your Stripe Dashboard</li>
                <li>Navigate to Developers → API keys</li>
                <li>Copy the Publishable key and Secret key</li>
                <li>Use test keys for development, live keys for production</li>
              </ol>
            </div>
          </div>
        );

      case 'webhooks':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Webhook Endpoint</h4>
              <div className="flex items-center space-x-2">
                <code className="flex-1 px-3 py-2 bg-white border rounded text-sm">
                  https://your-domain.com/api/stripe/webhook
                </code>
                <button
                  onClick={() => copyToClipboard('https://your-domain.com/api/stripe/webhook')}
                  className="px-3 py-2 border border-blue-300 rounded hover:bg-blue-100"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Webhook Signing Secret
              </label>
              <input
                type="text"
                value={stripeData.webhookSecret}
                onChange={(e) => setStripeData(prev => ({ ...prev, webhookSecret: e.target.value }))}
                placeholder="whsec_..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Required Events</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>payment_intent.succeeded</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>payment_intent.payment_failed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>invoice.payment_succeeded</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>customer.subscription.updated</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'test-integration':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <button
                onClick={testStripeConnection}
                disabled={connectionStatus === 'testing' || !stripeData.publishableKey || !stripeData.secretKey}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
              >
                {connectionStatus === 'testing' ? 'Testing Connection...' : 'Test Stripe Integration'}
              </button>
            </div>

            {connectionStatus === 'testing' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-2"></div>
                <p className="text-blue-800">Testing your Stripe configuration...</p>
              </div>
            )}

            {connectionStatus === 'success' && testResults && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-900">Integration Successful!</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Account:</span> {testResults.account}
                  </div>
                  <div>
                    <span className="font-medium">Country:</span> {testResults.country.toUpperCase()}
                  </div>
                  <div>
                    <span className="font-medium">Currency:</span> {testResults.currency.toUpperCase()}
                  </div>
                  <div>
                    <span className="font-medium">Webhook:</span> {testResults.webhookStatus}
                  </div>
                </div>
                <div className="mt-3">
                  <span className="font-medium">Payment Methods:</span>
                  <div className="flex space-x-2 mt-1">
                    {testResults.paymentMethods.map((method: string) => (
                      <span key={method} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {connectionStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <h4 className="font-semibold text-red-900">Connection Failed</h4>
                </div>
                <p className="text-red-800 text-sm">
                  Please check your API keys and try again. Make sure you're using the correct keys for your environment.
                </p>
              </div>
            )}
          </div>
        );

      case 'go-live':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Ready for Production</h4>
              </div>
              <p className="text-green-800 text-sm">
                Your Stripe integration is configured and tested. You can now process real payments.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium">Test Mode</h4>
                  <p className="text-sm text-gray-600">Use test cards and simulate payments</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={stripeData.testMode}
                    onChange={(e) => setStripeData(prev => ({ ...prev, testMode: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Before Going Live</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Complete Stripe account verification</li>
                <li>• Test all payment flows thoroughly</li>
                <li>• Set up proper error handling</li>
                <li>• Configure production webhook endpoints</li>
                <li>• Review and accept Stripe's terms of service</li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 border border-gray-200 rounded-lg">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium">Secure</h4>
                <p className="text-sm text-gray-600">PCI DSS compliant</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <CreditCard className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium">Flexible</h4>
                <p className="text-sm text-gray-600">Multiple payment methods</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium">Fast</h4>
                <p className="text-sm text-gray-600">Instant settlements</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Stripe Integration Wizard</h2>
          <div className="flex items-center space-x-2">
            {steps.map((_, index) => (
              <div key={index} className="flex-1">
                <div className={`h-2 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-white' : 'bg-white/30'
                }`} />
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm opacity-90">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {steps[currentStep].title}
            </h3>
            <p className="text-gray-600">
              {steps[currentStep].description}
            </p>
          </div>

          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <div className="flex items-center space-x-4">
              {currentStep === steps.length - 1 ? (
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
                >
                  Complete Setup
                </button>
              ) : (
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripeIntegrationWizard;