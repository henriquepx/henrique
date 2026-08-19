'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Locale = 'pt-BR' | 'en';

type Translation = {
  nav: {
    work: string;
    skills: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    description: string;
    projects: string;
    contact: string;
    scroll: string;
    technologies: string[];
  };
  about: {
    eyebrow: string;
    role: string;
    bio: string;
    statement: string;
    statementEmphasis: string;
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    technologies: string;
    visit: string;
    close: string;
    previewAlt: string;
    dialogLabel: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    closing: string;
    categories: Record<string, string>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
  };
  footer: {
    rights: string;
  };
  spotify: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
  };
  divider: {
    work: string;
    about: string;
    skills: string;
    contact: string;
  };
  projects: Record<
    string,
    {
      category: string;
      description: string;
      accent: string;
    }
  >;
};

const translations: Record<Locale, Translation> = {
  'pt-BR': {
    nav: {
      work: 'Projetos',
      skills: 'Habilidades',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'Desenvolvedor Front-end',
      description:
        'Crio interfaces modernas, rápidas e intuitivas para empresas, startups e negócios digitais.',
      projects: 'Projetos',
      contact: 'Contato',
      scroll: 'Scroll',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    },
    about: {
      eyebrow: 'Sobre',
      role: 'Desenvolvedor de produtos digitais',
      bio:
        'Graduado em Análise e Desenvolvimento de Sistemas, desenvolvo produtos digitais com foco em clareza, performance e experiência. Transformo ideias em soluções funcionais, modernas e pensadas para pessoas.',
      statement:
        'Acredito que um bom produto digital vai além de um visual bonito. Busco desenvolver experiências ',
      statementEmphasis: 'intuitivas, rápidas e bem construídas.',
    },
    work: {
      eyebrow: 'Trabalhos',
      title: 'Projetos',
      description:
        'Uma seleção de projetos desenvolvidos com foco em experiência, funcionalidade e detalhes.',
      technologies: 'Tecnologias',
      visit: 'Visitar projeto',
      close: 'Fechar projeto',
      previewAlt: 'preview',
      dialogLabel: 'detalhes do projeto',
    },
    skills: {
      eyebrow: 'Stacks',
      title: 'Linguagens de programação & ',
      titleEmphasis: 'ferramentas.',
      closing:
        'Cada tecnologia foi escolhida com propósito. Utilizo uma stack moderna e eficiente para desenvolver produtos rápidos, escaláveis e focados na melhor experiência do usuário.',
      categories: {
        Frontend: 'Frontend',
        Estilização: 'Estilização',
        'Backend & Banco de Dados': 'Backend & Banco de Dados',
        'Bibliotecas e Frameworks': 'Bibliotecas e Frameworks',
        Ferramentas: 'Ferramentas',
      },
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos trabalhar juntos?',
      description:
        'Disponível para projetos freelance e colaborações. Envie uma mensagem!',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
    spotify: {
      eyebrow: 'Ouvindo agora',
      title: 'Focus Flow',
      description:
        'Músicas que me ajudam a manter o foco enquanto crio interfaces, escrevo código e desenvolvo produtos.',
      action: 'Abrir no Spotify',
    },
    divider: {
      work: 'Trabalhos',
      about: 'Sobre',
      skills: 'Habilidades',
      contact: 'Contato',
    },
    projects: {
      'derek-lp': {
        category: 'Landing page | Harmonização Facial',
        description:
          'Uma landing page moderna e responsiva para o profissional Derek Gonçalves, destacando seus serviços de harmonização facial e facilitando o contato com potenciais clientes.',
        accent:
          'Site moderno com animações suaves, destacando serviços de harmonização facial e facilitando o contato com clientes.',
      },
      nutricionista: {
        category: 'Landing page | Nutricionista',
        description:
          'Uma landing page para nutricionista, com design moderno e responsivo, destacando os serviços oferecidos e facilitando o contato com potenciais clientes.',
        accent:
          'Site moderno e responsivo para nutricionista, destacando serviços e facilitando contato com clientes.',
      },
      'bernardo-links': {
        category: 'Links-in-bio',
        description:
          'Estrutura de links-in-bio moderna e responsiva para Bernardo Bonfim, destacando sua identidade visual e seus links e facilitando o contato com potenciais clientes.',
        accent:
          'Landing page moderna e responsiva para Bernardo Bonfim, destacando seus links e facilitando o contato com potenciais clientes.',
      },
      financialtools: {
        category: 'Future SaaS',
        description:
          'Uma plataforma com ferramentas financeiras, incluindo calculadoras de investimento, simuladores de empréstimos e recursos educacionais para ajudar os usuários a tomar decisões financeiras informadas.',
        accent: 'Plataforma de ferramentas financeiras.',
      },
      eva: {
        category: 'Advocacia',
        description:
          'Landing page com uma identidade sofisticada e moderna para Eva Xavier, destacando seus serviços jurídicos e facilitando o contato com potenciais clientes.',
        accent:
          'Landing page moderna e minimalista para Eva Xavier, destacando seus serviços jurídicos e facilitando o contato com potenciais clientes.',
      },
      'future-saas': {
        category: 'Ferramenta',
        description:
          'Uma plataforma desenvolvida para centralizar os principais comandos do Git, dúvidas frequentes e situações comuns do dia a dia. Encontre rapidamente o comando certo com uma interface simples, organizada e intuitiva.',
        accent:
          'Uma ferramenta leve, organizada e responsiva que ajuda desenvolvedores a encontrar rapidamente o comando certo, entender sua função e continuar programando sem perder tempo.',
      },
    },
  },

  en: {
    nav: {
      work: 'Work',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Front-end Developer',
      description:
        'I create modern, fast and intuitive interfaces for companies, startups and digital businesses.',
      projects: 'Projects',
      contact: 'Contact',
      scroll: 'Scroll',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    },
    about: {
      eyebrow: 'About',
      role: 'Digital product developer',
      bio:
        'Graduated in Systems Analysis and Development, I build digital products focused on clarity, performance and experience. I turn ideas into functional, modern solutions designed for people.',
      statement:
        'I believe a good digital product goes beyond a beautiful visual. I aim to create experiences that are ',
      statementEmphasis: 'intuitive, fast and thoughtfully built.',
    },
    work: {
      eyebrow: 'Selected work',
      title: 'Projects',
      description:
        'A selection of projects developed with a focus on experience, functionality and detail.',
      technologies: 'Technologies',
      visit: 'Visit project',
      close: 'Close project',
      previewAlt: 'preview',
      dialogLabel: 'project details',
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Programming languages & ',
      titleEmphasis: 'tools.',
      closing:
        'Every technology is chosen with purpose. I use a modern and efficient stack to build fast, scalable products focused on the best possible user experience.',
      categories: {
        Frontend: 'Frontend',
        Estilização: 'Styling',
        'Backend & Banco de Dados': 'Backend & Database',
        'Bibliotecas e Frameworks': 'Libraries & Frameworks',
        Ferramentas: 'Tools',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s work together?',
      description:
        'Available for freelance projects and collaborations. Send me a message!',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    spotify: {
      eyebrow: 'Currently listening',
      title: 'Focus Flow',
      description:
        'Music that keeps me focused while designing interfaces, writing code and shipping products.',
      action: 'Open on Spotify',
    },
    divider: {
      work: 'Work',
      about: 'About',
      skills: 'Skills',
      contact: 'Contact',
    },
    projects: {
      'derek-lp': {
        category: 'Landing page | Facial Harmonization',
        description:
          'A modern and responsive landing page for professional Derek Gonçalves, showcasing his facial harmonization services and making it easier for potential clients to get in touch.',
        accent:
          'A modern website with smooth animations, highlighting facial harmonization services and making it easier for clients to connect.',
      },
      nutricionista: {
        category: 'Landing page | Nutritionist',
        description:
          'A modern and responsive landing page for a nutritionist, highlighting offered services and making it easier for potential clients to get in touch.',
        accent:
          'A modern, responsive website for a nutritionist, highlighting services and making client contact easier.',
      },
      'eduardo-links': {
        category: 'Links-in-bio',
        description:
          'A modern and responsive links-in-bio page for Eduardo Bonfim, highlighting his visual identity and links while making it easier for potential clients to get in touch.',
        accent:
          'A modern and responsive landing page for Eduardo Bonfim, highlighting his links and making it easier for potential clients to connect.',
      },
      financialtools: {
        category: 'Future SaaS',
        description:
          'A platform with financial tools, including investment calculators, loan simulators and educational resources to help users make informed financial decisions.',
        accent: 'A platform for financial tools.',
      },
      eva: {
        category: 'Law Firm',
        description:
          'A sophisticated and modern landing page for Eva Xavier, highlighting her legal services and making it easier for potential clients to get in touch.',
        accent:
          'A modern and minimalist landing page for Eva Xavier, highlighting her legal services and making it easier for potential clients to connect.',
      },
      'future-saas': {
        category: 'Tool',
        description:
          'A platform designed to centralize essential Git commands, frequently asked questions and common day-to-day situations. Find the right command quickly through a simple, organized and intuitive interface.',
        accent:
          'A lightweight, organized and responsive tool that helps developers quickly find the right command, understand what it does and keep coding without losing time.',
      },
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('pt-BR');

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-locale');

    if (saved === 'pt-BR' || saved === 'en') {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-locale', locale);
    document.documentElement.lang = locale === 'pt-BR' ? 'pt-BR' : 'en';
    document.title =
      locale === 'pt-BR'
        ? 'Henrique Pinheiro — Desenvolvedor Front-end'
        : 'Henrique Pinheiro — Front-end Developer';

    const description =
      locale === 'pt-BR'
        ? 'Desenvolvedor Front-end que cria interfaces modernas, rápidas e intuitivas para empresas, startups e negócios digitais.'
        : 'Front-end Developer creating modern, fast and intuitive interfaces for companies, startups and digital businesses.';

    let meta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => setLocaleState(nextLocale),
      t: translations[locale],
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}
