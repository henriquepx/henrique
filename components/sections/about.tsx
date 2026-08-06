'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { useMounted } from '@/hooks/use-mounted';

type Word = { text: string; emphasis?: boolean };

const WORDS: Word[] = [
  { text: 'I build modern digital experiences focused on ' },
  { text: 'quality', emphasis: true },
  { text: ', ' },
  { text: 'performance', emphasis: true },
  { text: ' and ' },
  { text: 'simplicity', emphasis: true },
  { text: '.' },
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
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-8"
        >
          About
        </motion.p>

        <p className="flex flex-wrap text-2xl font-medium leading-[1.4] tracking-tightest sm:text-4xl sm:leading-[1.3]">
          {WORDS.map((word, i) => (
            <WordSpan
              key={i}
              word={word}
              progress={scrollYProgress}
              range={[i / WORDS.length, (i + 1) / WORDS.length]}
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
