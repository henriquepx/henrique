'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { useLanguage } from '@/lib/i18n';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-6"
    >
      <div
        className={`mt-4 flex w-full max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ${
          scrolled
            ? 'border-custom bg-[var(--bg)]/70 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Link
          href="#"
          className="pl-3 text-sm font-semibold tracking-tightest"
        >
          Henrique Pinheiro
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {[
            { label: t.nav.work, href: '#work' },
            { label: t.nav.skills, href: '#skills' },
            { label: t.nav.contact, href: '#contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm text-secondary-custom transition-colors hover:text-[var(--text)]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--text)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === 'pt-BR' ? 'en' : 'pt-BR')}
            aria-label={locale === 'pt-BR' ? 'Switch to English' : 'Mudar para português'}
            className="flex h-8 min-w-8 items-center justify-center rounded-full border border-custom px-2 text-[10px] font-medium uppercase tracking-[0.12em] text-secondary-custom transition-colors duration-200 hover:border-[var(--text)]/30 hover:text-[var(--text)]"
          >
            {locale === 'pt-BR' ? 'EN' : 'PT'}
          </button>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
