import { Link } from 'react-router-dom';
import {
  IconDashboard,
  IconChartLine,
  IconUsers,
  IconCalendarCheck,
  IconWallet,
  IconSettings,
  IconLogout
} from '@tabler/icons-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-black text-white p-4 flex flex-col ">
      <div className="mb-8 flex items-center justify-center">
        <img src="/logo.png" alt="Apexx Fitness" className="w-32" />
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg">
              <IconDashboard className="text-xl" stroke={1.5} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg">
              <IconChartLine className="text-xl" stroke={1.5} />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg">
              <IconUsers className="text-xl" stroke={1.5} />
              <span>Accounts</span>
            </Link>
          </li>
          <li>
            <Link to="/attendance" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg">
              <IconCalendarCheck className="text-xl" stroke={1.5} />
              <span>Attendance</span>
            </Link>
          </li>
          <li>
            <Link to="/payments" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg">
              <IconWallet className="text-xl" stroke={1.5} />
              <span>Payments</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="border-t border-gray-800 pt-4">
        <ul className="space-y-2">
          <li>
            <Link to="/settings" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg">
              <IconSettings className="text-xl" stroke={1.5} />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg">
              <IconLogout className="text-xl" stroke={1.5} />
              <span>Sign Out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;