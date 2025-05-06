import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { IconTrendingUp, IconUsers, IconClock, IconCurrencyDollar } from '@tabler/icons-react';
const AnalyticsFeature = () => {
  const membershipData = [
    { name: 'Jan', members: 65 },
    { name: 'Feb', members: 59 },
    { name: 'Mar', members: 80 },
    { name: 'Apr', members: 81 },
    { name: 'May', members: 56 },
    { name: 'Jun', members: 55 },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 4500 },
    { name: 'Feb', revenue: 5200 },
    { name: 'Mar', revenue: 4800 },
    { name: 'Apr', revenue: 5900 },
    { name: 'May', revenue: 6000 },
    { name: 'Jun', revenue: 7000 },
  ];
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Analytics Overview</h1>
        <select className="bg-[#1a1a1a] text-white px-4 py-2 rounded-lg border border-gray-700">
          <option>Last 6 months</option>
          <option>Last 12 months</option>
          <option>This year</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: IconTrendingUp, title: 'Growth Rate', value: '+12.5%', color: 'text-green-500' },
          { icon: IconUsers, title: 'Total Members', value: '1,234', color: 'text-blue-500' },
          { icon: IconClock, title: 'Avg. Session', value: '45 mins', color: 'text-purple-500' },
          { icon: IconCurrencyDollar, title: 'Revenue', value: 'PH45,678', color: 'text-yellow-500' },
        ].map((stat, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full bg-opacity-10 ${stat.color} bg-current`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-gray-400">{stat.title}</p>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Membership Growth</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={membershipData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="name" 
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  labelStyle={{ color: '#9CA3AF' }}
                />
                <Legend wrapperStyle={{ color: '#9CA3AF' }} />
                <Line
                  type="monotone"
                  dataKey="members"
                  name="New Members"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ fill: '#10B981' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Revenue Analysis</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="name" 
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  labelStyle={{ color: '#9CA3AF' }}
                />
                <Legend wrapperStyle={{ color: '#9CA3AF' }} />
                <Bar
                  dataKey="revenue"
                  name="Monthly Revenue"
                  fill="#6366F1"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Member Activity</h2>
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="text-left py-3">Member</th>
                <th className="text-left py-3">Activity</th>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-3 text-white">John Neo Lopez</td>
                  <td className="py-3 text-white">Beach Press</td>
                  <td className="py-3 text-gray-400">Today, 2:00 PM</td>
                  <td className="py-3">
                    <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFeature;