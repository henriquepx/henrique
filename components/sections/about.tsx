'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useMounted } from '@/hooks/use-mounted';

type Word = {
  text: string;
  emphasis?: boolean;
};

const WORDS: Word[] = [
  {
    text: 'Acredito que um bom produto digital vai além de um visual bonito. Busco desenvolver experiências ',
  },
  {
    text: 'intuitivas, rápidas e bem construídas.',
    emphasis: true,
  },
];

export function About() {
  const mounted = useMounted();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: mounted ? ref : undefined,
    offset: ['start 0.9', 'start 0.4'],
  });

  return (
    <section ref={ref} className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-10"
        >
          Sobre
        </motion.p>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-5"
        >
          {/* Foto */}
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border/50">
            <Image
              src="/images/henrique.png"
              alt="Henrique Pinheiro"
              fill
              sizes="64px"
              className="object-cover"
              priority
            />
          </div>

          {/* Informações */}
          <div>
            <h2 className="text-lg font-medium tracking-tight">
              Henrique Pinheiro
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Desenvolvedor de produtos digitais
            </p>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Graduado em Análise e Desenvolvimento de Sistemas, desenvolvo
            produtos digitais com foco em clareza, performance e experiência.
            Transformo ideias em soluções funcionais, modernas e pensadas para
            pessoas.
          </p>
        </motion.div>

        {/* Main statement */}
        <p className="flex flex-wrap text-2xl font-medium leading-[1.4] tracking-tightest sm:text-4xl sm:leading-[1.3]">
          {WORDS.map((word, i) => (
            <WordSpan
              key={i}
              word={word}
              progress={scrollYProgress}
              range={[
                i / WORDS.length,
                (i + 1) / WORDS.length,
              ]}
            />
          ))}
        </p>
      </div>
    </section>
  );
}

function WordSpan({
  word,
  progress,
  range,
}: {
  word: Word;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={word.emphasis ? 'text-secondary-custom' : ''}
    >
      {word.text}
    </motion.span>
  );
}