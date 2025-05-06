

export const StatCard = ({ icon: Icon, title, value, change }: {
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

const DashboardFeature = () => {
  return (
<div>
  
</div>
  );
};

export default DashboardFeature;