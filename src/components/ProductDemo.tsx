import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Monitor, Smartphone, Tablet } from 'lucide-react';

interface ProductDemoProps {
  darkMode: boolean;
}

const ProductDemo: React.FC<ProductDemoProps> = ({ darkMode }) => {
  const [activeDemo, setActiveDemo] = useState('dashboard');
  const [isPlaying, setIsPlaying] = useState(false);
  const [device, setDevice] = useState('desktop');

  const demoScreens = [
    {
      id: 'platform-overview',
      title: 'Platform Overview',
      description: 'Secure escrow platform connecting freelancers and clients',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'project-workflow',
      title: 'Project Workflow',
      description: 'End-to-end project management from creation to completion',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'secure-payments',
      title: 'Secure Payment System',
      description: 'Escrow-based payments with automated release',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'quality-assurance',
      title: 'Quality Assurance',
      description: 'Automated quality checks and verification system',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const deviceSizes = {
    desktop: 'w-full max-w-4xl',
    tablet: 'w-full max-w-2xl',
    mobile: 'w-full max-w-sm'
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            See SecureServe in Action
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Interactive demos showing real platform workflows
          </p>
        </div>

        {/* Demo Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
          {/* Demo Selection */}
          <div className="flex flex-wrap gap-2">
            {demoScreens.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeDemo === demo.id
                    ? 'bg-purple-600 text-white'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>

          {/* Device Selection */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-2 rounded-lg ${
                device === 'desktop'
                  ? 'bg-purple-600 text-white'
                  : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Monitor className="h-5 w-5" />
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`p-2 rounded-lg ${
                device === 'tablet'
                  ? 'bg-purple-600 text-white'
                  : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Tablet className="h-5 w-5" />
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`p-2 rounded-lg ${
                device === 'mobile'
                  ? 'bg-purple-600 text-white'
                  : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Smartphone className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Demo Screen */}
        <div className="flex justify-center mb-8">
          <div className={`${deviceSizes[device as keyof typeof deviceSizes]} transition-all duration-300`}>
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
              darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              {/* Browser Chrome */}
              <div className={`flex items-center space-x-2 px-4 py-3 border-b ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'
              }`}>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className={`flex-1 mx-4 px-3 py-1 rounded-md text-sm ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-600'
                }`}>
                  secureserve.ai/{activeDemo}
                </div>
              </div>

              {/* Demo Content */}
              <div className="relative aspect-video">
                <img
                  src={demoScreens.find(d => d.id === activeDemo)?.image}
                  alt={demoScreens.find(d => d.id === activeDemo)?.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button
                    onClick={togglePlayback}
                    className="w-16 h-16 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-white" />
                    ) : (
                      <Play className="h-8 w-8 text-white ml-1" />
                    )}
                  </button>
                </div>

                {/* Progress Bar */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 animate-pulse"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Demo Description */}
        <div className="text-center">
          <h3 className={`text-xl font-semibold mb-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {demoScreens.find(d => d.id === activeDemo)?.title}
          </h3>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {demoScreens.find(d => d.id === activeDemo)?.description}
          </p>
        </div>

        {/* Interactive Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          } shadow-lg`}>
            <h4 className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Try Live Demo
            </h4>
            <p className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Experience the full platform with sample data
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          } shadow-lg`}>
            <h4 className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Video Walkthrough
            </h4>
            <p className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Watch guided tours of key features
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          } shadow-lg`}>
            <h4 className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Documentation
            </h4>
            <p className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Detailed guides and API references
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;