export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  accent: string;
  layout: 'landscape' | 'portrait' | 'fullwidth';
  year: string;
};

export const projects: Project[] = [
  {
    id: 'nutritionist',
    name: 'Nutritionist Website',
    category: 'Website',
    description:
      'A polished marketing site for a clinical nutritionist, featuring booking flows, program overviews and editorial content management.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image:
      'https://images.pexels.com/photos/15319038/pexels-photo-15319038.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: 'A wellness platform for clinical nutrition.',
    layout: 'landscape',
    year: '2024',
  },
  {
    id: 'law-firm',
    name: 'Law Firm Website',
    category: 'Website',
    description:
      'An authoritative digital presence for a boutique law firm, balancing trust, clarity and refined typography across practice areas.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image:
      'https://images.pexels.com/photos/34133564/pexels-photo-34133564.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'A refined digital presence for a boutique firm.',
    layout: 'portrait',
    year: '2024',
  },
  {
    id: 'future-saas',
    name: 'Future SaaS',
    category: 'Product',
    description:
      'A SaaS platform in development combining AI workflows with a clean, opinionated interface for teams that value speed and focus.',
    technologies: ['Next.js', 'TypeScript', 'AI', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image:
      'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: 'An AI-powered workspace for focused teams.',
    layout: 'fullwidth',
    year: '2025',
  },
];

export type Skill = { name: string; note?: string };

export type SkillCategory = {
  title: string;
  index: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    index: '01',
    skills: [{ name: 'React' }, { name: 'Next.js' }, { name: 'TypeScript' }],
  },
  {
    title: 'Styling',
    index: '02',
    skills: [{ name: 'Tailwind CSS' }],
  },
  {
    title: 'Tools',
    index: '03',
    skills: [{ name: 'Git' }, { name: 'Vercel' }],
  },
  {
    title: 'Learning',
    index: '04',
    skills: [{ name: 'Go', note: 'Currently exploring' }],
  },
];

export type Social = {
  label: string;
  href: string;
  external: boolean;
};

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
  { label: 'Instagram', href: 'https://instagram.com', external: true },
  { label: 'Email', href: 'mailto:hello@henriquepinheiro.dev', external: false },
  { label: 'WhatsApp', href: 'https://wa.me/000000000', external: true },
];
