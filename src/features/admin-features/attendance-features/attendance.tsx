import React from 'react';

const Attendance = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Attendance Management</h1>
        <p className="text-gray-400 mt-2">Track and manage members attendance</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search members..."
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none placeholder-gray-400"
          />
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 rounded-lg bg-gray-700 text-white border-none">
            <option>All Time</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
            Mark Attendance
          </button>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Member Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Check In Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Check Out Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-700"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">John Neo Lopez</div>
                    <div className="text-sm text-gray-400">#12345</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                09:00 AM
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                05:00 PM
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                  Present
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button className="text-gray-400 hover:text-white">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="p-4 border-t border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Rows per page:</span>
            <select className="bg-gray-700 rounded px-2 py-1 text-white">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span className="text-gray-400">1-10 of 97 rows</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded hover:bg-gray-700">
              <span className="text-gray-400">←</span>
            </button>
            {[1, 2, 3, '...', 7].map((page, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded ${
                  page === 1 ? 'bg-gray-700 text-white' : 'text-gray-400'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="p-1 rounded hover:bg-gray-700">
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;