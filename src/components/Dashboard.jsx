import { useState } from 'react';
import { FiSettings, FiDownload, FiBell, FiUsers, FiActivity, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const DarkModeDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Chart data
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Users',
        data: [12, 110, 518, 20, 53, 28, 71],
        backgroundColor: '#3B82F6',
        borderRadius: 6
      }
    ]
  };

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Performance',
        data: [3.4, 2.8, 1.4, 10, 0, 5],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  const userDistributionData = {
    labels: ['Samt Lead', 'Dannibarks', 'Dannibbarne'],
    datasets: [
      {
        data: [65, 44, 23],
        backgroundColor: ['#3B82F6', '#10B981', '#6366F1'],
        hoverOffset: 4
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 p-4 bg-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <FiTrendingUp className="mr-2" />
          InsightFlow
        </h2>
        
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            <FiActivity className="mr-3" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'users' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            <FiUsers className="mr-3" />
            Users
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'settings' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            <FiSettings className="mr-3" />
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
              <FiBell />
            </button>
            <button className="flex items-center px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600">
              <FiDownload className="mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl shadow bg-gray-800"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Test Lence</p>
                <p className="text-3xl font-bold mt-2">1,230</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-900">
                <FiActivity className="text-xl text-blue-300" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-400">
              ↑ 12.5% from last week
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl shadow bg-gray-800"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Motor Messenger</p>
                <p className="text-3xl font-bold mt-2">44,300</p>
              </div>
              <div className="p-3 rounded-lg bg-green-900">
                <FiTrendingUp className="text-xl text-green-300" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-400">
              ↑ 24.8% from last week
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl shadow bg-gray-800"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Cxper Tosnce</p>
                <p className="text-3xl font-bold mt-2">65</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-900">
                <FiUsers className="text-xl text-purple-300" />
              </div>
            </div>
            <div className="mt-4 text-sm text-red-400">
              ↓ 3.2% from last week
            </div>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl shadow bg-gray-800">
            <h3 className="text-lg font-semibold mb-4">Monday Reserve</h3>
            <Bar 
              data={weeklyData} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      color: '#E5E7EB'
                    }
                  }
                },
                scales: {
                  x: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                      color: '#E5E7EB'
                    }
                  },
                  y: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                      color: '#E5E7EB'
                    }
                  }
                }
              }}
            />
          </div>

          <div className="p-6 rounded-xl shadow bg-gray-800">
            <h3 className="text-lg font-semibold mb-4">Performance Trend</h3>
            <Line 
              data={performanceData} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    labels: {
                      color: '#E5E7EB'
                    }
                  }
                },
                scales: {
                  x: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                      color: '#E5E7EB'
                    }
                  },
                  y: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                      color: '#E5E7EB'
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl shadow bg-gray-800 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">User Activity</h3>
            <div className="space-y-4">
              {[
                { name: 'Samt Lead Asiding', time: '2:14 min', app: 'Dannibarks Benites' },
                { name: 'App 1tl', time: '2:24 min', app: 'Dannibbarne profile' },
                { name: 'App 1tl', time: '3:24 min', app: 'Dannibbarne use!' },
              ].map((user, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 rounded-lg hover:bg-gray-700"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index === 0 ? 'bg-purple-500' : 'bg-blue-500'} text-white`}>
                    {user.name.charAt(0)}
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.app}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full text-sm bg-gray-700">
                    {user.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl shadow bg-gray-800">
            <h3 className="text-lg font-semibold mb-4">User Distribution</h3>
            <div className="h-64">
              <Pie 
                data={userDistributionData} 
                options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: '#E5E7EB'
                      }
                    }
                  }
                }}
              />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Samt Lead</span>
                </div>
                <span>65%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Dannibarks</span>
                </div>
                <span>44%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <span>Dannibbarne</span>
                </div>
                <span>23%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeDashboard;