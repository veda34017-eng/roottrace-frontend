import { Clock, MoreHorizontal } from 'lucide-react';
import type { Project, ProjectStatus } from '@/data/projects';

const statusStyles: Record<ProjectStatus, string> = {
  'On Track': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'At Risk': 'bg-amber-50 text-amber-700 border-amber-200',
  Delayed: 'bg-red-50 text-red-700 border-red-200',
  Completed: 'bg-slate-100 text-slate-600 border-slate-200',
};

const statusDot: Record<ProjectStatus, string> = {
  'On Track': 'bg-emerald-500',
  'At Risk': 'bg-amber-500',
  Delayed: 'bg-red-500',
  Completed: 'bg-slate-400',
};

const avatarColors = [
  'bg-blue-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-violet-500',
  'bg-cyan-500',
  'bg-orange-500',
  'bg-teal-500',
];

function TeamAvatars({ members }: { members: string[] }) {
  return (
    <div className="flex -space-x-2">
      {members.slice(0, 3).map((m, i) => (
        <div
          key={i}
          className={`w-7 h-7 rounded-full ring-2 ring-white flex items-center justify-center text-white text-[10px] font-semibold ${avatarColors[i % avatarColors.length]}`}
        >
          {m}
        </div>
      ))}
      {members.length > 3 && (
        <div className="w-7 h-7 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-slate-600 text-[10px] font-semibold">
          +{members.length - 3}
        </div>
      )}
    </div>
  );
}

export function ProjectTable({ projects }: { projects: Project[] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/50">
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                Project
              </th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                Client
              </th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                Progress
              </th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                Status
              </th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                Due Date
              </th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-3">
                Team
              </th>
              <th className="w-10 px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {projects.map((project, idx) => (
              <tr
                key={project.id}
                className="hover:bg-slate-50 transition-colors cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'both' }}
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-slate-500">
                        {project.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-slate-900 truncate">
                        {project.name}
                      </div>
                      <div className="text-xs text-slate-400">{project.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-slate-600">{project.client}</span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2.5 min-w-[120px]">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full animate-progress-grow ${
                          project.status === 'Delayed'
                            ? 'bg-red-500'
                            : project.status === 'Completed'
                              ? 'bg-slate-400'
                              : project.status === 'At Risk'
                                ? 'bg-amber-500'
                                : 'bg-emerald-500'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 tabular-nums w-8 text-right">
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md border ${statusStyles[project.status]}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${statusDot[project.status]}`}
                    />
                    {project.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {project.dueDate}
                  </div>
                </td>
                <td className="px-5 py-4">
                  <TeamAvatars members={project.team} />
                </td>
                <td className="px-5 py-4">
                  <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
