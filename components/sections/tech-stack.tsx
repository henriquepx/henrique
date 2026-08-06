'use client';

import { motion } from 'framer-motion';
import { skillCategories, type Skill } from '@/lib/data';
import { ScrollReveal } from '@/components/motion/scroll-reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

const FLOAT_BASES = [
  'lg:col-span-3 lg:row-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'lg:col-span-4',
];

export function TechStack() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Stacks</p>
          <h2 className="text-3xl font-bold tracking-tightest sm:text-5xl sm:leading-[1.05]">
            Linguagens de programação &
            <span className="text-secondary-custom"> ferramentas.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:grid-rows-[auto]">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: ci * 0.12, ease: EASE }}
              className={`group relative flex flex-col gap-5 rounded-2xl border border-custom bg-card-custom p-7 transition-colors duration-500 hover:border-[var(--text)]/20 ${FLOAT_BASES[ci % FLOAT_BASES.length]}`}
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
                  <SkillPill key={skill.name} skill={skill} delay={ci * 0.12 + si * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Editorial closing statement — fills remaining rhythm */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="flex items-end lg:col-span-5"
          >
            <p className="text-sm leading-relaxed text-secondary-custom">
               Cada tecnologia foi escolhida com propósito. Utilizo uma stack moderna e eficiente para desenvolver produtos rápidos, escaláveis e focados na melhor experiência do usuário.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillPill({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      whileHover={{ y: -2 }}
      className="cursor-default rounded-full border border-custom px-4 py-1.5 text-sm font-medium tracking-tightest transition-colors duration-200 hover:border-[var(--text)]/30 hover:text-[var(--text)]"
    >
      {skill.name}
      {skill.note && (
        <span className="ml-2 text-[10px] uppercase tracking-[0.15em] text-secondary-custom">
          {skill.note}
        </span>
      )}
    </motion.span>
  );
}
