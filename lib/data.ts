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
    layout: 'fullwidth',
    year: '2026',
  },
  {
    id: 'future-saas',
    name: 'GitBoard',
    category: 'Ferramenta',
    description:
      'Uma plataforma desenvolvida para centralizar os principais comandos do Git, dúvidas frequentes e situações comuns do dia a dia. Encontre rapidamente o comando certo com uma interface simples, organizada e intuitiva.',
    technologies: ['Next.js', 'shadcn/ui:', 'Tailwind CSS'],
    liveUrl: 'https://gittutorialboard.vercel.app/',
    image:
      '/gittutorial.png',
    accent: 'Uma ferramenta leve, organizada e responsiva que ajuda desenvolvedores a encontrar rapidamente o comando certo, entender sua função e continuar programando sem perder tempo.',
    layout: 'portrait',
    year: '2024',
  },
  {
    id: 'financialtools',
    name: 'Quantia',
    category: 'Future SaaS',
    description:
      'Uma plataforma com ferramentas financeiras, incluindo calculadoras de investimento, simuladores de empréstimos e recursos educacionais para ajudar os usuários a tomar decisões financeiras informadas.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://quantia-ten.vercel.app/',
    image:
      '/quantia.png',
    accent: 'Plataforma de ferramentas financeiras.',
    layout: 'fullwidth',
    year: '2026',
  }
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
    title: 'Backend & Banco de Dados',
    index: '03',
    skills: [
      { name: 'Node.js' },
      { name: 'MongoDB' }
    ],
  },
  {
    title: 'Bibliotecas e Frameworks',
    index: '05',
    skills: [
      { name: 'Zod' },
      { name: 'Redux' },
      { name: 'Zustand' },
      { name: 'Jest' },
      { name: 'Prisma' },
      { name: 'Framer Motion' },
      { name: 'shadcn/ui' },
      { name: 'React Hook Form' },
    ],
  },
  {
    title: 'Ferramentas',
    index: '04',
    skills: [
      { name: 'Git' },
      { name: 'IA' },
    ],
  },
];

export type Social = {
  label: string;
  href: string;
  external: boolean;
};

export const socials: Social[] = [
  { label: 'WhatsApp', href: 'https://wa.me/5521964823939', external: true },
  { label: 'Email', href: 'mailto:henriquepinheiroxavier@gmail.com', external: false },
  { label: 'Instagram', href: 'https://www.instagram.com/henriquepxx/', external: true },
  { label: 'GitHub', href: 'https://github.com/henriquepx', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/henriquepinheiroxavier', external: true }
];
