import { TreePine } from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SidebarProps {
  navItems: NavItem[];
  activeNav: string;
  onSelect: (label: string) => void;
}

export function Sidebar({ navItems, activeNav, onSelect }: SidebarProps) {
  return (
    <aside className="w-60 bg-slate-900 flex flex-col flex-shrink-0 h-screen sticky top-0 hidden md:flex">
      {/* Logo */}
      <div className="px-5 h-16 flex items-center gap-2.5 border-b border-slate-800">
        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <TreePine className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-base tracking-tight">
            RootTrace
          </span>
          <span className="text-slate-500 text-[10px] font-medium mt-0.5">
            PROJECT MANAGEMENT
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        <p className="px-3 text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-2">
          Menu
        </p>
        {navItems.map(({ label, icon: Icon }) => {
          const isActive = activeNav === label;
          return (
            <button
              key={label}
              onClick={() => onSelect(label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group ${
                isActive
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Icon
                className={`w-[18px] h-[18px] flex-shrink-0 transition-colors ${
                  isActive
                    ? 'text-emerald-400'
                    : 'text-slate-500 group-hover:text-slate-300'
                }`}
              />
              <span>{label}</span>
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom user card */}
      <div className="p-3 border-t border-slate-800">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-800/50 transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
            JD
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-white text-sm font-medium truncate">
              James Dean
            </span>
            <span className="text-slate-500 text-xs truncate">
              james@roottrace.io
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
