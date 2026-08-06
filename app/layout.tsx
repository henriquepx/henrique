import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://henriquepinheiro.dev'),
  title: {
    default: 'Henrique Pinheiro — Front-end Developer',
    template: '%s — Henrique Pinheiro',
  },
  description:
    'Front-end developer building premium websites, SaaS and AI-powered products with React, Next.js and TypeScript.',
  keywords: [
    'Front-end Developer',
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
    locale: 'en_US',
    url: 'https://henriquepinheiro.dev',
    siteName: 'Henrique Pinheiro',
    title: 'Henrique Pinheiro — Front-end Developer',
    description:
      'Building premium websites, SaaS and AI-powered products with React, Next.js and TypeScript.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henrique Pinheiro — Front-end Developer',
    description:
      'Building premium websites, SaaS and AI-powered products with React, Next.js and TypeScript.',
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
    jobTitle: 'Front-end Developer',
    description:
      'Building premium websites, SaaS and AI-powered products with React, Next.js and TypeScript.',
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SaaS', 'AI'],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
