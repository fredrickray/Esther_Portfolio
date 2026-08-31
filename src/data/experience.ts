export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  focus: 'support' | 'ops' | 'dev';
  tools: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: 'nextar',
    role: 'Customer Service',
    company: 'Nextar Quantum Systems',
    period: '07/2026 – Present',
    location: 'Abuja, Nigeria',
    focus: 'support',
    tools: ['Customer Support', 'Issue Resolution', 'Communication'],
    bullets: [
      'Respond to customer inquiries and provide support across communication channels.',
      'Assist customers with questions about programs and services, directing them to the appropriate resources.',
      'Maintain accurate records of customer interactions and follow up as needed.',
    ],
  },
  {
    id: 'aspilos',
    role: 'Virtual Assistant',
    company: 'Aspilos Charity and Foundation',
    period: '07/2024 – 09/2025',
    location: 'Abuja, Nigeria',
    focus: 'ops',
    tools: ['Scheduling', 'Correspondence', 'Data Entry', 'Records'],
    bullets: [
      'Provided administrative support, including scheduling, correspondence, and calendar management.',
      'Handled email and inquiry management, responding to and organizing incoming communications.',
      'Maintained records and assisted with data entry and document organization.',
      'Supported day-to-day coordination tasks for the organization\'s programs and activities.',
    ],
  },
];
