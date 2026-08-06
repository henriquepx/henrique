'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { useMounted } from '@/hooks/use-mounted';

export function SectionDivider({ label }: { label?: string }) {
  const mounted = useMounted();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mounted ? ref : undefined,
    offset: ['start end', 'end start'],
  });

  return (
    <div
      ref={ref}
      className="mx-auto flex max-w-6xl items-center gap-6 px-6"
      aria-hidden
    >
      <motion.div
        className="h-px flex-1 bg-[var(--border)]"
        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
      />
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] font-medium uppercase tracking-[0.2em] text-secondary-custom"
        >
          {label}
        </motion.span>
      )}
      <motion.div
        className="h-px flex-1 bg-[var(--border)]"
        style={{ scaleX: scrollYProgress, transformOrigin: 'right' }}
      />
    </div>
  );
}
