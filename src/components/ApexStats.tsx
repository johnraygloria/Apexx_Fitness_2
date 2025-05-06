import { IconUsers, IconUserCheck, IconCalendarMonth, IconCalendarHeart } from '@tabler/icons-react';

const StatCard = ({ icon: Icon, title, value, change }: { 
  icon: any, 
  title: string, 
  value: number, 
  change: number 
}) => {
  const isPositive = change > 0;
  
  return (
    <div className="bg-[#1a1a1a] p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <Icon className="text-2xl text-gray-400" stroke={1.5} />
          <h3 className="text-gray-400">{title}</h3>
        </div>
        <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change}%
        </span>
      </div>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
};

const DashboardStats = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-white">Hey, Admin</h1>
        <p className="text-gray-400">Tuesday, April 4 2025</p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon={IconUsers}
        title="Total Members"
        value={125}
        change={2}
      />
      <StatCard
        icon={IconUserCheck}
        title="Active Members"
        value={70}
        change={-3}
      />
      <StatCard
        icon={IconCalendarMonth}
        title="Monthly Members"
        value={70}
        change={-2}
      />
      <StatCard
        icon={IconCalendarHeart}
        title="Annual Members"
        value={30}
        change={5}
      />
    </div>
    </>
  );
};

export default DashboardStats;