'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useScroll, useTransform } from 'framer-motion';
import { socials } from '@/lib/data';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { useMounted } from '@/hooks/use-mounted';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const mounted = useMounted();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: mounted ? ref : undefined,
    offset: ['start end', 'start center'],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal className="mb-14">
          <p className="eyebrow mb-4">Contato</p>
          <h2 className="text-4xl font-bold tracking-tightest sm:text-6xl sm:leading-[1.02]">
            Vamos trabalhar juntos?
          </h2>
          <p className="mt-5 max-w-md text-lg text-secondary-custom">
            Disponível para projetos freelance e colaborações. Envie uma mensagem!
          </p>
        </ScrollReveal>

        <motion.div
          style={{ width: lineWidth }}
          className="mb-2 h-px bg-[var(--border)]"
        />

        <ul className="border-b border-custom">
          {socials.map((social, i) => (
            <motion.li
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="overflow-hidden"
            >
              <Link
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between border-t border-custom py-5 transition-all duration-300 hover:pl-3"
              >
                <span className="text-lg font-medium tracking-tightest transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                  {social.label}
                </span>
                <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-custom transition-colors duration-300 group-hover:border-[var(--text)]/30">
                  <ArrowUpRight
                    className="h-4 w-4 text-secondary-custom transition-all duration-300 group-hover:h-5 group-hover:w-5 group-hover:text-[var(--text)]"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
