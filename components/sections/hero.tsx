'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '@/components/motion/magnetic-button';
import { useMounted } from '@/hooks/use-mounted';

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: EASE },
  }),
};

export function Hero() {
  const mounted = useMounted();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: mounted ? ref : undefined,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="relative px-6 pt-36 pb-24 sm:pt-48 sm:pb-32"
    >
       <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
      <div className="mx-auto max-w-4xl">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="eyebrow mb-8"
        >
          Desenvolvedor Front-end
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center text-5xl font-bold leading-[1.05] tracking-tightest sm:text-7xl sm:leading-[1.02]"
          >
            Henrique Pinheiro
          </motion.h1>
        </div>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-center text-lg text-secondary-custom sm:text-xl"
          style={{ lineHeight: 1.6 }}
        >
          Crio interfaces modernas, rápidas e intuitivas para empresas, startups e negócios digitais.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#work"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-[var(--text)] px-6 text-sm font-medium text-[var(--bg)]"
          >
            Projetos
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </MagneticButton>
          <MagneticButton
            href="#contact"
            strength={0.25}
            className="group inline-flex h-11 items-center gap-2 rounded-full border border-custom px-6 text-sm font-medium transition-colors duration-200 hover:bg-[var(--card)]"
          >
              Contato
            <ArrowUpRight
              className="h-4 w-4 text-secondary-custom transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </MagneticButton>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {['React', 'Next.js', 'Typescript', 'Node.js'].map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              {i > 0 && <span className="text-secondary-custom">•</span>}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                className="text-sm text-secondary-custom"
              >
                {t}
              </motion.span>
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mt-20 flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-secondary-custom">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-[var(--border)] to-transparent" />
        </motion.div>
        </motion.div>
        </div>
    </motion.section>
  );
}
