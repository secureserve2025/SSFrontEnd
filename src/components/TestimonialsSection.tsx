import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialsSectionProps {
  darkMode: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Video Editor",
      company: "Freelancer",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "SecureServe completely changed how I work with clients. No more chasing payments or dealing with subjective feedback. The AI verification is incredibly accurate and clients trust the process. I've increased my income by 40% since joining.",
      project: "Corporate Training Videos",
      earnings: "₹2,85,000",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Creative Director",
      company: "TechStart Solutions",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "As a client, I was skeptical about AI verification, but it's been a game-changer. The quality reports are detailed and objective. We've reduced project disputes by 95% and our freelancers deliver better work knowing there's a clear standard.",
      project: "Product Demo Videos",
      savings: "₹1,50,000",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      id: 3,
      name: "Anita Desai",
      role: "Motion Graphics Artist",
      company: "Freelancer",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The escrow system gives me peace of mind. I know I'll get paid once I deliver quality work. The AI feedback helps me improve my skills too. SecureServe has made freelancing stress-free and profitable.",
      project: "Social Media Campaigns",
      earnings: "₹1,95,000",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Marketing Manager",
      company: "Digital Growth Agency",
      location: "Delhi, NCR",
      rating: 5,
      text: "We manage 50+ video projects monthly. SecureServe's automation has saved us countless hours in project management and quality control. The dispute resolution is fair and fast. Highly recommended for agencies.",
      project: "Marketing Videos",
      savings: "₹3,20,000",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    }
  ];

  const caseStudies = [
    {
      title: "95% Reduction in Payment Disputes",
      description: "TechCorp reduced project disputes from 23% to 1.2% after implementing SecureServe",
      metric: "95%",
      category: "Dispute Resolution"
    },
    {
      title: "40% Faster Project Completion",
      description: "Freelancers complete projects 40% faster with clear AI-generated requirements",
      metric: "40%",
      category: "Efficiency"
    },
    {
      title: "₹50L+ Secured in Escrow",
      description: "Over ₹50 lakhs in project funds secured and successfully released",
      metric: "₹50L+",
      category: "Trust & Security"
    }
  ];

  const trustBadges = [
    { name: "ISO 27001 Certified", icon: Award },
    { name: "RBI Compliant", icon: Award },
    { name: "99.9% Uptime", icon: Award },
    { name: "₹185Cr Insurance", icon: Award }
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t('testimonials.title')}
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Main Testimonial */}
        <div className={`relative p-8 rounded-2xl mb-12 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <Quote className={`h-8 w-8 ${
              darkMode ? 'text-purple-400' : 'text-purple-600'
            }`} />
            <div className="flex items-center space-x-2">
              <button
                onClick={prevTestimonial}
                className={`p-2 rounded-full ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
                } transition-colors`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className={`p-2 rounded-full ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
                } transition-colors`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className={`text-lg lg:text-xl leading-relaxed mb-6 ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonials[currentTestimonial].name}
                    </h4>
                    {testimonials[currentTestimonial].verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                  <p className={`text-xs ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <h5 className={`font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Project Impact
              </h5>
              <p className={`text-sm mb-3 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {testimonials[currentTestimonial].project}
              </p>
              {testimonials[currentTestimonial].earnings && (
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Total Earnings:
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    {testimonials[currentTestimonial].earnings}
                  </span>
                </div>
              )}
              {testimonials[currentTestimonial].savings && (
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Cost Savings:
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    {testimonials[currentTestimonial].savings}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? 'bg-purple-600'
                    : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } text-center`}
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {study.metric}
              </div>
              <h4 className={`font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t(`testimonials.caseStudy${index + 1}.title`) || study.title}
              </h4>
              <p className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t(`testimonials.caseStudy${index + 1}.description`) || study.description}
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                {t(`testimonials.caseStudy${index + 1}.category`) || study.category}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className={`p-6 rounded-lg ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-center font-semibold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t('trust.trustedCertified')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <badge.icon className="h-5 w-5 text-purple-600" />
                <span className={`text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t(`trust.badge${index + 1}`) || badge.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
            <Play className="h-4 w-4" />
            <span>{t('testimonials.watchVideo')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;