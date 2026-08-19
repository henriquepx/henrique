import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/lib/i18n';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://henriquepinheiro.dev'),
  title: {
    default: 'Henrique Pinheiro — Desenvolvedor Front-end',
    template: 'Henrique Pinheiro',
  },
  description:
    'Desenvolvedor Front-end que cria interfaces modernas, rápidas e intuitivas para empresas, startups e negócios digitais.',
  keywords: [
    'Front-end Developer',
    'Desenvolvedor Front-end',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'SaaS',
    'AI',
    'Henrique Pinheiro',
  ],
  authors: [{ name: 'Henrique Pinheiro' }],
  creator: 'Henrique Pinheiro',
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    url: 'https://henriquepinheiro.dev',
    siteName: 'Henrique Pinheiro',
    title: 'Henrique Pinheiro — Desenvolvedor Front-end',
    description:
      'Desenvolvedor Front-end que cria interfaces modernas, rápidas e intuitivas para empresas, startups e negócios digitais.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henrique Pinheiro — Desenvolvedor Front-end',
    description:
      'Desenvolvedor Front-end que cria interfaces modernas, rápidas e intuitivas para empresas, startups e negócios digitais.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Henrique Pinheiro',
    jobTitle: 'Desenvolvedor Front-end',
    description:
      'Desenvolvedor Front-end que cria interfaces modernas, rápidas e intuitivas para empresas, startups e negócios digitais.',
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SaaS', 'AI'],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
