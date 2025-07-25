import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Shield, DollarSign, CheckCircle, Clock } from 'lucide-react';

interface LiveStatsProps {
  darkMode: boolean;
  variant?: 'hero' | 'footer' | 'dashboard';
}

const LiveStats: React.FC<LiveStatsProps> = ({ darkMode, variant = 'hero' }) => {
  const [stats, setStats] = useState({
    totalUsers: 15247,
    projectsCompleted: 8932,
    fundsSecured: 5000000, // ₹50 lakhs
    disputesResolved: 99.2,
    averageResolutionTime: 18,
    platformUptime: 99.97
  });

  const [isAnimating, setIsAnimating] = useState(false);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setStats(prev => ({
        ...prev,
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 3),
        projectsCompleted: prev.projectsCompleted + Math.floor(Math.random() * 2),
        fundsSecured: prev.fundsSecured + Math.floor(Math.random() * 10000)
      }));
      
      setTimeout(() => setIsAnimating(false), 500);
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const statsData = [
    {
      icon: Users,
      label: 'Active Users',
      value: stats.totalUsers.toLocaleString() + '+',
      color: 'text-purple-500',
      bgColor: darkMode ? 'bg-purple-900/20' : 'bg-purple-100',
      growth: '+40% this month'
    },
    {
      icon: CheckCircle,
      label: 'Projects Completed',
      value: stats.projectsCompleted.toLocaleString() + '+',
      color: 'text-green-500',
      bgColor: darkMode ? 'bg-green-900/20' : 'bg-green-100',
      growth: 'Zero disputes'
    },
    {
      icon: Shield,
      label: 'Funds Secured',
      value: formatCurrency(stats.fundsSecured),
      color: 'text-cyan-500',
      bgColor: darkMode ? 'bg-cyan-900/20' : 'bg-cyan-100',
      growth: 'In escrow'
    },
    {
      icon: TrendingUp,
      label: 'Success Rate',
      value: stats.disputesResolved + '%',
      color: 'text-blue-500',
      bgColor: darkMode ? 'bg-blue-900/20' : 'bg-blue-100',
      growth: 'Dispute resolution'
    }
  ];

  if (variant === 'hero') {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`text-center p-4 rounded-lg transition-all duration-500 ${
              isAnimating ? 'scale-105' : ''
            } ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}
          >
            <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className={`text-2xl font-bold mb-1 ${
              darkMode ? 'text-white' : 'text-gray-900'
            } ${isAnimating ? 'animate-pulse' : ''}`}>
              {stat.value}
            </div>
            <div className={`text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {stat.label}
            </div>
            <div className="text-xs text-green-600 font-medium mt-1">
              {stat.growth}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsData.slice(0, 4).map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`text-2xl font-bold mb-1 ${stat.color} ${
              isAnimating ? 'animate-pulse' : ''
            }`}>
              {stat.value}
            </div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Dashboard variant
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Real-time Stats */}
      <div className={`p-6 rounded-lg ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Platform Activity
          </h3>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-500">Live</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Active Users
            </span>
            <span className={`font-bold ${isAnimating ? 'animate-pulse' : ''} ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {stats.totalUsers.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Funds in Escrow
            </span>
            <span className={`font-bold text-green-500 ${isAnimating ? 'animate-pulse' : ''}`}>
              {formatCurrency(stats.fundsSecured)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Uptime
            </span>
            <span className="font-bold text-blue-500">
              {stats.platformUptime}%
            </span>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className={`p-6 rounded-lg ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Performance Metrics
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Dispute Resolution
              </span>
              <span className="text-sm font-medium text-green-500">
                {stats.disputesResolved}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${stats.disputesResolved}%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Avg. Resolution Time
            </span>
            <span className="font-bold text-purple-500">
              {stats.averageResolutionTime}h
            </span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={`p-6 rounded-lg ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Recent Activity
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Project completed - ₹25,000 released
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              New user registered
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              AI verification completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;