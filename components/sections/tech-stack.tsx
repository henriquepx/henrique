'use client';

import { motion } from 'framer-motion';
import { skillCategories, type Skill } from '@/lib/data';
import { ScrollReveal } from '@/components/motion/scroll-reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

const FLOAT_BASES = [
  'lg:col-span-3 lg:row-span-2',
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-3',
  'lg:col-span-2',
];

export function TechStack() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 max-w-3xl">
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-secondary-custom">
              Stacks
            </span>

            <h2 className="text-4xl font-semibold leading-[0.95] tracking-tightest sm:text-5xl lg:text-6xl">
              Linguagens de programação &{' '}
              <span className="text-secondary-custom">
                ferramentas.
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: ci * 0.12,
                ease: EASE,
              }}
              className={`group relative flex flex-col gap-5 rounded-2xl border border-custom bg-card-custom p-7 transition-colors duration-500 hover:border-[var(--text)]/20 ${
                FLOAT_BASES[ci]
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium tracking-tightest">
                  {cat.title}
                </h3>

                <span className="text-xs font-medium text-secondary-custom">
                  {cat.index}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <SkillPill
                    key={skill.name}
                    skill={skill}
                    delay={ci * 0.12 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Editorial closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: EASE,
            }}
            className="flex items-end lg:col-span-5"
          >
            <p className="text-sm leading-relaxed text-secondary-custom">
              Cada tecnologia foi escolhida com propósito. Utilizo uma stack
              moderna e eficiente para desenvolver produtos rápidos,
              escaláveis e focados na melhor experiência do usuário.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillPill({
  skill,
  delay,
}: {
  skill: Skill;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: EASE,
      }}
      whileHover={{ y: -2 }}
      className="cursor-default rounded-full border border-custom px-4 py-1.5 text-sm font-medium tracking-tightest transition-colors duration-200 hover:border-[var(--text)]/30 hover:text-[var(--text)]"
    >
      {skill.name}

      {skill.note && (
        <span className="ml-1 text-xs text-secondary-custom">
          {skill.note}
        </span>
      )}
    </motion.span>
  );
}