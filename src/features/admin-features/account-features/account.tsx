function Accounts() {
  return (
    <div className="p-6">

      <div className="mt-8">
        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-4 text-left">
                  <input type="checkbox" className="rounded bg-gray-700" />
                </th>
                <th className="p-4 text-left text-gray-400">Full name</th>
                <th className="p-4 text-left text-gray-400">ID</th>
                <th className="p-4 text-left text-gray-400">Email</th>
                <th className="p-4 text-left text-gray-400">Membership Type</th>
                <th className="p-4 text-left text-gray-400">Membership Status</th>
                <th className="p-4 text-left text-gray-400">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-4">
                  <input type="checkbox" className="rounded bg-gray-700" />
                </td>
                <td className="p-4 text-white">John Neo Lopez</td>
                <td className="p-4 text-white">21</td>
                <td className="p-4 text-white">johnneolopez.com</td>
                <td className="p-4 text-white">Annual</td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                    Active
                  </span>
                </td>
                <td className="p-4 text-white">Credit Card</td>
              </tr>
            </tbody>
          </table>
          <div className="p-4 border-t border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Rows per page:</span>
              <select className="bg-gray-700 rounded px-2 py-1 text-white">
                <option>11</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-gray-400">1-11 of 125 rows</span>
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
    </div>
  );
}

export default Accounts;