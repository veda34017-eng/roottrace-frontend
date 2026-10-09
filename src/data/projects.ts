export type ProjectStatus = 'On Track' | 'At Risk' | 'Delayed' | 'Completed';

export interface Project {
  id: string;
  name: string;
  client: string;
  progress: number;
  status: ProjectStatus;
  dueDate: string;
  team: string[];
}

export const projects: Project[] = [
  {
    id: 'PRJ-001',
    name: 'Website Redesign',
    client: 'Acme Corp',
    progress: 78,
    status: 'On Track',
    dueDate: 'Oct 24, 2026',
    team: ['AB', 'CD', 'EF'],
  },
  {
    id: 'PRJ-002',
    name: 'Mobile App Launch',
    client: 'TechFlow Inc.',
    progress: 45,
    status: 'At Risk',
    dueDate: 'Nov 02, 2026',
    team: ['GH', 'IJ'],
  },
  {
    id: 'PRJ-003',
    name: 'Data Migration',
    client: 'Globex Ltd.',
    progress: 92,
    status: 'On Track',
    dueDate: 'Oct 18, 2026',
    team: ['KL', 'MN', 'OP'],
  },
  {
    id: 'PRJ-004',
    name: 'Brand Guidelines',
    client: 'Initech',
    progress: 30,
    status: 'Delayed',
    dueDate: 'Oct 12, 2026',
    team: ['QR', 'ST'],
  },
  {
    id: 'PRJ-005',
    name: 'API Integration',
    client: 'Umbrella Co.',
    progress: 100,
    status: 'Completed',
    dueDate: 'Oct 05, 2026',
    team: ['UV', 'WX', 'YZ'],
  },
  {
    id: 'PRJ-006',
    name: 'Marketing Campaign Q4',
    client: 'Soylent Corp',
    progress: 62,
    status: 'On Track',
    dueDate: 'Nov 15, 2026',
    team: ['AB', 'CD'],
  },
];
