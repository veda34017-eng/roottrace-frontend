import { useState } from 'react';
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  BarChart3,
  Settings,
  Search,
  Bell,
  Plus,
  ArrowUpRight,
  FolderOpen,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react';

import { Sidebar } from '@/components/Sidebar';
import { KpiCard } from '@/components/KpiCard';
import { ProjectTable } from '@/components/ProjectTable';
import { projects, type Project } from '@/data/projects';

function App() {
  const [activeNav, setActiveNav] = useState('Home');

  const totalProjects = 24;
  const openTasks = 68;
  const overdueTasks = 7;

  const navItems = [
    { label: 'Home', icon: LayoutDashboard },
    { label: 'Projects', icon: FolderKanban },
    { label: 'Tasks', icon: CheckSquare },
    { label: 'Reports', icon: BarChart3 },
    { label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar
        navItems={navItems}
        activeNav={activeNav}
        onSelect={setActiveNav}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sticky top-0 z-10">
          <div className="flex items-center gap-3 min-w-0">
            <h1 className="text-lg font-semibold text-slate-900 truncate">
              Dashboard
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-slate-400">
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              Overview
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3" />
              <input
                type="text"
                placeholder="Search projects, tasks..."
                className="pl-9 pr-4 py-2 text-sm bg-slate-100 border border-transparent rounded-lg w-56 lg:w-64 focus:outline-none focus:border-slate-300 focus:bg-white transition-colors placeholder:text-slate-400"
              />
            </div>

            <button className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </button>

            <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-3 sm:px-4 py-2 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Project</span>
            </button>

            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
              JD
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto scrollbar-thin">
          <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            {/* Page intro */}
            <div className="mb-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-900">
                Welcome back, James
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Here's what's happening across your projects today.
              </p>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
              <KpiCard
                label="Total Projects"
                value={totalProjects}
                icon={<FolderOpen className="w-5 h-5" />}
                iconBg="bg-blue-50"
                iconColor="text-blue-600"
                trend={{ value: '+3', isPositive: true, label: 'this month' }}
                delay={0}
              />
              <KpiCard
                label="Open Tasks"
                value={openTasks}
                icon={<CheckSquare className="w-5 h-5" />}
                iconBg="bg-amber-50"
                iconColor="text-amber-600"
                trend={{ value: '+12', isPositive: false, label: 'this week' }}
                delay={60}
              />
              <KpiCard
                label="Overdue Tasks"
                value={overdueTasks}
                icon={<AlertTriangle className="w-5 h-5" />}
                iconBg="bg-red-50"
                iconColor="text-red-600"
                trend={{ value: '-2', isPositive: true, label: 'since yesterday' }}
                delay={120}
              />
            </div>

            {/* Recent projects */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: '180ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-slate-400" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    Recent Projects
                  </h3>
                </div>
                <button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1">
                  View all
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
              <ProjectTable projects={projects} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
