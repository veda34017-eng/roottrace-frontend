import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface KpiCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  trend: { value: string; isPositive: boolean; label: string };
  delay: number;
}

export function KpiCard({
  label,
  value,
  icon,
  iconBg,
  iconColor,
  trend,
  delay,
}: KpiCardProps) {
  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-slate-300 transition-all duration-200 animate-scale-in group"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-10 h-10 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center transition-transform group-hover:scale-110`}
        >
          {icon}
        </div>
        <div
          className={`flex items-center gap-0.5 text-xs font-semibold px-2 py-1 rounded-md ${
            trend.isPositive
              ? 'text-emerald-700 bg-emerald-50'
              : 'text-red-700 bg-red-50'
          }`}
        >
          {trend.isPositive ? (
            <ArrowUpRight className="w-3.5 h-3.5" />
          ) : (
            <ArrowDownRight className="w-3.5 h-3.5" />
          )}
          {trend.value}
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-3xl font-bold text-slate-900 tabular-nums">
          {value}
        </span>
        <span className="text-sm text-slate-500 mt-1">{label}</span>
        <span className="text-xs text-slate-400 mt-2">{trend.label}</span>
      </div>
    </div>
  );
}
