export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  image: string;
  accent: string;
  layout: 'landscape' | 'portrait' | 'fullwidth';
  year: string;
};

export const projects: Project[] = [
  {
    id: 'Nutricionista',
    name: 'Landing page para Nutricionista',
    category: 'Landing page',
    description:
      'Uma landing page para nutricionista, com design moderno e responsivo, destacando os serviços oferecidos e facilitando o contato com potenciais clientes.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://barbaranutri.vercel.app',
    image:
      '/barbaraproject.png',
    accent: 'A wellness platform for clinical nutrition.',
    layout: 'landscape',
    year: '2026',
  },
  {
    id: 'law-firm',
    name: 'Law Firm Website',
    category: 'Website',
    description:
      'An authoritative digital presence for a boutique law firm, balancing trust, clarity and refined typography across practice areas.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://example.com',
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

export const skillCategories = [
  {
    title: 'Frontend',
    index: '01',
    skills: [
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Node.js' },
    ],
  },
  {
    title: 'Estilização',
    index: '02',
    skills: [
      { name: 'Tailwind CSS' },
      { name: 'CSS' },
      { name: 'Sass' },
      { name: 'Bootstrap' },
      { name: 'Styled Components' },
    ],
  },
  {
    title: 'Ferramentas',
    index: '03',
    skills: [
      { name: 'Git' },
      { name: 'IA' },
    ],
  },
  {
    title: 'Aprendendo',
    index: '04',
    skills: [
      { name: 'Go', note: 'Estudando atualmente' },
    ],
  },
];

export type Social = {
  label: string;
  href: string;
  external: boolean;
};

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/henriquepx', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/henriquepinheiroxavier', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/henriquepxx/', external: true },
  { label: 'Email', href: 'mailto:henriquepinheiroxavier@gmail.com', external: false },
  { label: 'WhatsApp', href: 'https://wa.me/5521964823939', external: true },
];
