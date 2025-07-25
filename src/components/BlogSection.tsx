import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, Clock, TrendingUp } from 'lucide-react';

interface BlogSectionProps {
  darkMode: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'updates', label: 'Platform Updates' },
    { id: 'guides', label: 'How-to Guides' },
    { id: 'industry', label: 'Industry Insights' },
    { id: 'compliance', label: 'Compliance & Legal' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'SecureServe 2.0: Enhanced AI Verification Now Live',
      excerpt: 'Our latest AI update brings 40% more accurate deliverable verification and faster processing times for all video projects.',
      category: 'updates',
      author: 'SecureServe Team',
      date: '2025-01-15',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      tags: ['AI', 'Updates', 'Verification']
    },
    {
      id: 2,
      title: 'Complete Guide: Setting Up Your First Video Project',
      excerpt: 'Step-by-step walkthrough for clients on creating projects with clear deliverables and maximizing AI verification success.',
      category: 'guides',
      author: 'Priya Sharma',
      date: '2025-01-12',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      tags: ['Tutorial', 'Video Production', 'Client Guide']
    },
    {
      id: 3,
      title: 'RBI Compliance Update: New Escrow Regulations',
      excerpt: 'Important changes to Indian banking regulations affecting escrow services and what it means for SecureServe users.',
      category: 'compliance',
      author: 'Legal Team',
      date: '2025-01-10',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      tags: ['RBI', 'Compliance', 'Legal']
    },
    {
      id: 4,
      title: 'Freelancing in 2025: AI Tools Reshaping Creative Work',
      excerpt: 'How artificial intelligence is transforming the freelance industry and what it means for creative professionals.',
      category: 'industry',
      author: 'Rajesh Kumar',
      date: '2025-01-08',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      tags: ['AI', 'Freelancing', 'Industry Trends']
    },
    {
      id: 5,
      title: 'Maximizing Earnings: Best Practices for Freelancers',
      excerpt: 'Proven strategies to increase your project success rate and earnings on SecureServe platform.',
      category: 'guides',
      author: 'Anita Desai',
      date: '2025-01-05',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      tags: ['Freelancer Tips', 'Earnings', 'Success']
    },
    {
      id: 6,
      title: 'Security First: How We Protect Your Payments',
      excerpt: 'Deep dive into SecureServe\'s multi-layered security infrastructure and compliance measures.',
      category: 'compliance',
      author: 'Security Team',
      date: '2025-01-03',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      tags: ['Security', 'Payments', 'Trust']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
            Latest Updates & Insights
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Stay informed about platform updates, industry trends, and best practices
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && (
          <div className={`p-8 rounded-2xl mb-12 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {categories.find(c => c.id === featuredPost.category)?.label}
                  </span>
                </div>
                
                <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {featuredPost.title}
                </h3>
                
                <p className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {featuredPost.author}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {formatDate(featuredPost.date)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
                
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              
              <div className="lg:order-first">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className={`rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800 border border-gray-700 hover:border-purple-500'
                  : 'bg-white border border-gray-200 hover:border-purple-300'
              } shadow-lg hover:shadow-xl`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                    {categories.find(c => c.id === post.category)?.label}
                  </span>
                  <span className={`text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className={`text-lg font-semibold mb-3 line-clamp-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {post.title}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-3 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {post.author}
                    </span>
                  </div>
                  <span className={`text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {formatDate(post.date)}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs rounded-full ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className={`mt-16 p-8 rounded-2xl text-center ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Stay Updated
          </h3>
          <p className={`text-lg mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get the latest platform updates, industry insights, and tips delivered to your inbox
          </p>
          
          <form className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;