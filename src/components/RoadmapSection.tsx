import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Zap, Users, Code, Palette, Brain, Globe, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RoadmapSectionProps {
  darkMode: boolean;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const [selectedQuarter, setSelectedQuarter] = useState('Q1-2025');

  const roadmapData = {
    'Q1-2025': {
      title: 'Q1 2025 - Foundation Expansion',
      status: 'In Progress',
      features: [
        {
          name: 'Content Writing Projects',
          description: 'AI verification for blog posts, articles, and copywriting',
          status: 'In Development',
          icon: Palette,
          progress: 75
        },
        {
          name: 'UI/UX Design Projects',
          description: 'Automated design review and brand guideline compliance',
          status: 'In Development',
          icon: Palette,
          progress: 60
        },
        {
          name: 'Mobile App Enhancement',
          description: 'Native iOS and Android applications',
          status: 'Planning',
          icon: Code,
          progress: 25
        },
        {
          name: 'Advanced Analytics Dashboard',
          description: 'Detailed project insights and performance metrics',
          status: 'In Development',
          icon: Brain,
          progress: 80
        }
      ]
    },
    'Q2-2025': {
      title: 'Q2 2025 - AI Intelligence Boost',
      status: 'Planned',
      features: [
        {
          name: 'Gen AI Services',
          description: 'AI-generated content verification and quality assessment',
          status: 'Planning',
          icon: Brain,
          progress: 0
        },
        {
          name: 'Multi-language Support',
          description: 'Platform available in 12 Indian languages',
          status: 'Planning',
          icon: Globe,
          progress: 0
        },
        {
          name: 'Smart Contract Templates',
          description: 'Industry-specific contract templates with AI customization',
          status: 'Planning',
          icon: Code,
          progress: 0
        },
        {
          name: 'Real-time Collaboration',
          description: 'Live project collaboration tools and communication',
          status: 'Planning',
          icon: MessageSquare,
          progress: 0
        }
      ]
    },
    'Q3-2025': {
      title: 'Q3 2025 - Scale & Integration',
      status: 'Planned',
      features: [
        {
          name: 'Enterprise Solutions',
          description: 'White-label platform for large organizations',
          status: 'Planning',
          icon: Users,
          progress: 0
        },
        {
          name: 'API Marketplace',
          description: 'Third-party integrations and developer ecosystem',
          status: 'Planning',
          icon: Code,
          progress: 0
        },
        {
          name: 'Blockchain Integration',
          description: 'Immutable project records and smart contracts',
          status: 'Research',
          icon: Zap,
          progress: 0
        },
        {
          name: 'International Expansion',
          description: 'Support for global freelancers and clients',
          status: 'Planning',
          icon: Globe,
          progress: 0
        }
      ]
    },
    'Q4-2025': {
      title: 'Q4 2025 - Innovation & Growth',
      status: 'Planned',
      features: [
        {
          name: 'AI Freelancer Matching',
          description: 'Intelligent project-freelancer matching algorithm',
          status: 'Research',
          icon: Brain,
          progress: 0
        },
        {
          name: 'Predictive Analytics',
          description: 'Project success prediction and risk assessment',
          status: 'Research',
          icon: Brain,
          progress: 0
        },
        {
          name: 'Virtual Reality Integration',
          description: 'VR project reviews and immersive collaboration',
          status: 'Research',
          icon: Zap,
          progress: 0
        },
        {
          name: 'Sustainability Metrics',
          description: 'Carbon footprint tracking and green project incentives',
          status: 'Research',
          icon: Globe,
          progress: 0
        }
      ]
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Development':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Planning':
        return 'bg-purple-100 text-purple-800';
      case 'Research':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-gray-300';
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
            {t('roadmap.title')}
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('roadmap.subtitle')}
          </p>
        </div>

        {/* Quarter Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(roadmapData).map((quarter) => (
            <button
              key={quarter}
              onClick={() => setSelectedQuarter(quarter)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedQuarter === quarter
                  ? 'bg-purple-600 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {quarter}
            </button>
          ))}
        </div>

        {/* Current Quarter Overview */}
        <div className={`p-6 rounded-2xl mb-8 ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {roadmapData[selectedQuarter as keyof typeof roadmapData].title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              getStatusColor(roadmapData[selectedQuarter as keyof typeof roadmapData].status)
            }`}>
              {roadmapData[selectedQuarter as keyof typeof roadmapData].status}
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {roadmapData[selectedQuarter as keyof typeof roadmapData].features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800 border-gray-700 hover:border-purple-500'
                  : 'bg-white border-gray-200 hover:border-purple-300'
              } shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-purple-900/20' : 'bg-purple-100'
                }`}>
                  <feature.icon className={`h-6 w-6 ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.name}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      getStatusColor(feature.status)
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                  
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Progress
                      </span>
                      <span className={`text-xs font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {feature.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          getProgressColor(feature.progress)
                        }`}
                        style={{ width: `${feature.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Request Section */}
        <div className={`p-8 rounded-2xl ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Request a Feature
            </h3>
            <p className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Don't see what you need? Let us know what features would help your workflow
            </p>
          </div>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Feature Category
                </label>
                <select className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  darkMode
                    ? 'bg-gray-800 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}>
                  <option>Select category...</option>
                  <option>New Project Type</option>
                  <option>AI Enhancement</option>
                  <option>Payment Feature</option>
                  <option>Dashboard Improvement</option>
                  <option>Integration</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Priority Level
                </label>
                <select className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  darkMode
                    ? 'bg-gray-800 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}>
                  <option>Select priority...</option>
                  <option>Low - Nice to have</option>
                  <option>Medium - Would improve workflow</option>
                  <option>High - Critical for my business</option>
                </select>
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Feature Description
              </label>
              <textarea
                rows={4}
                placeholder="Describe the feature you'd like to see, how it would help your workflow, and any specific requirements..."
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none ${
                  darkMode
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Submit Feature Request
              </button>
            </div>
          </form>
        </div>

        {/* Timeline Overview */}
        <div className="mt-12 text-center">
          <h3 className={`text-xl font-semibold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            2025 Development Timeline
          </h3>
          <div className="flex justify-center items-center space-x-4 overflow-x-auto pb-4">
            {Object.entries(roadmapData).map(([quarter, data], index) => (
              <div key={quarter} className="flex items-center space-x-4">
                <div className="text-center min-w-0">
                  <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${
                    quarter === selectedQuarter
                      ? 'bg-purple-600'
                      : data.status === 'Completed'
                        ? 'bg-green-500'
                        : data.status === 'In Progress'
                          ? 'bg-blue-500'
                          : 'bg-gray-300'
                  }`} />
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {quarter}
                  </span>
                </div>
                {index < Object.keys(roadmapData).length - 1 && (
                  <div className={`w-8 h-0.5 ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;