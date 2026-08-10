'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { useMounted } from '@/hooks/use-mounted';

const EASE = [0.22, 1, 0.36, 1] as const;

export function SelectedWork() {
  return (
    <section id="work" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-20 flex items-end justify-between gap-6 sm:mb-28">
          <div>
            <p className="eyebrow mb-4">Trabalhos</p>
            <h2 className="text-3xl font-bold tracking-tightest sm:text-5xl sm:leading-[1.05]">
              Projetos
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-secondary-custom sm:block">
            Cada projeto com a sua própria história, desafios e soluções. Clique em cada um para saber mais.
          </p>
        </ScrollReveal>

        <div className="space-y-28 sm:space-y-40">
          {projects.map((project, index) => (
            <ProjectLayout
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectLayout({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  if (project.layout === 'portrait') {
    return (
      <CursorRing>
        <PortraitLayout project={project} index={index} total={total} />
      </CursorRing>
    );
  }
  if (project.layout === 'fullwidth') {
    return (
      <CursorRing>
        <FullWidthLayout project={project} index={index} total={total} />
      </CursorRing>
    );
  }
  return (
    <CursorRing>
      <LandscapeLayout project={project} index={index} total={total} />
    </CursorRing>
  );
}

/* ── Shared pieces ────────────────────────────────────────── */

function ParallaxMedia({
  src,
  alt,
  className,
  imgClassName,
  range = 12,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  range?: number;
}) {
  const mounted = useMounted();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mounted ? ref : undefined,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${range / 2}%`, `${range / 2}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, height: `${100 + range}%` }}
        loading="lazy"
        className={`absolute inset-0 w-full object-cover ${imgClassName ?? ''}`}
      />
    </div>
  );
}

function ProjectNumber({ index }: { index: number }) {
  return (
    <span className="relative inline-flex items-baseline">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
        className="text-[13px] font-medium text-secondary-custom"
      >
        {String(index + 1).padStart(2, '0')}
      </motion.span>
      <span className="ml-1.5 text-[13px] font-medium text-secondary-custom/40">
        / {String(3).padStart(2, '0')}
      </span>
    </span>
  );
}

function MetaRow({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-secondary-custom">
      <span className="font-medium">{project.category}</span>
      <span className="h-1 w-1 rounded-full bg-[var(--border)]" />
      <span>{project.year}</span>
    </div>
  );
}

function TechTags({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-wrap gap-2"
    >
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-custom px-3 py-1 text-xs font-medium text-secondary-custom"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  );
}

function ActionLinks({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="flex items-center gap-5"
    >
      <Link
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-secondary-custom"
      >
        Live Demo
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </Link>
    </motion.div>
  );
}

/* ── Layout 1 — Landscape: image bleeds left, text floats right ── */

function LandscapeLayout({
  project,
  index,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="group relative"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-0">
        {/* Oversized number behind */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="pointer-events-none absolute -top-16 -left-2 select-none text-[120px] font-bold leading-none tracking-tightest text-[var(--text)]/[0.04] sm:text-[180px]"
          aria-hidden
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>

        {/* Image — bleeds to the left edge of the grid */}
        <div className="relative lg:col-span-8 lg:col-start-1">
          <ParallaxMedia
            src={project.image}
            alt={`${project.name} preview`}
            className="aspect-[16/11] w-full rounded-xl"
            imgClassName="transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            range={10}
          />
        </div>

        {/* Floating text panel on the right, overlapping upward */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="relative z-10 -mt-4 flex flex-col gap-5 rounded-xl border border-custom bg-card-custom p-6 sm:p-7 lg:col-span-5 lg:col-start-8 lg:-mt-16 lg:ml-4"
        >
          <div className="flex items-center justify-between">
            <ProjectNumber index={index} />
            <MetaRow project={project} />
          </div>

          <h3 className="text-2xl font-bold tracking-tightest sm:text-3xl">
            {project.name}
          </h3>

          <p className="text-[15px] text-secondary-custom" style={{ lineHeight: 1.65 }}>
            {project.description}
          </p>

          <TechTags project={project} delay={0.35} />
          <ActionLinks project={project} delay={0.42} />
        </motion.div>
      </div>
    </motion.article>
  );
}

/* ── Layout 2 — Portrait: tall image right, editorial text left with pull quote ── */

function PortraitLayout({
  project,
  index,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="group relative"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Left — large typography column */}
        <div className="flex flex-col justify-between lg:col-span-6 lg:pr-8">
          <div className="flex items-center justify-between">
            <ProjectNumber index={index} />
            <MetaRow project={project} />
          </div>

          <div className="mt-10 lg:mt-0">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="text-4xl font-bold leading-[0.98] tracking-tightest sm:text-6xl"
            >
              {project.name}
            </motion.h3>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 border-l border-custom pl-5 text-lg font-medium leading-relaxed text-secondary-custom"
            >
              {project.accent}
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
              className="mt-6 max-w-md text-[15px] text-secondary-custom"
              style={{ lineHeight: 1.7 }}
            >
              {project.description}
            </motion.p>
          </div>

          <div className="mt-10 flex flex-col gap-6 lg:mt-0">
            <TechTags project={project} delay={0.4} />
            <ActionLinks project={project} delay={0.47} />
          </div>
        </div>

        {/* Right — portrait image, floating with slight offset */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="relative lg:col-span-6 lg:col-start-7"
        >
          <div className="relative mx-auto max-w-sm lg:mx-0 lg:ml-auto">
            <ParallaxMedia
              src={project.image}
              alt={`${project.name} preview`}
              className="aspect-[3/4] w-full rounded-xl"
              imgClassName="transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
              range={14}
            />
            {/* Floating index badge overlapping the image corner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full border border-custom bg-card-custom text-sm font-bold tracking-tightest"
            >
              0{index + 1}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

/* ── Layout 3 — Full-width: cinematic image, content overlaid below ── */

function FullWidthLayout({
  project,
  index,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="group relative"
    >
      {/* Full-bleed cinematic image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="relative overflow-hidden rounded-2xl"
      >
        <ParallaxMedia
          src={project.image}
          alt={`${project.name} preview`}
          className="aspect-[21/9] w-full sm:aspect-[24/9]"
          imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
          range={8}
        />
        {/* Gradient veil for the overlaid number */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="absolute bottom-5 left-5 text-5xl font-bold leading-none tracking-tightest text-white/90 sm:text-7xl"
        >
          0{index + 1}
        </motion.span>
      </motion.div>

      {/* Content row below the image — split into title/description and meta */}
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-12 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="sm:col-span-7"
        >
          <div className="flex items-center gap-4">
            <h3 className="text-3xl font-bold tracking-tightest sm:text-4xl">
              {project.name}
            </h3>
          </div>
          <p className="mt-4 max-w-lg text-[15px] text-secondary-custom" style={{ lineHeight: 1.7 }}>
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="flex flex-col gap-6 sm:col-span-5 sm:col-start-8"
        >
          <div className="flex items-center justify-between">
            <ProjectNumber index={index} />
            <MetaRow project={project} />
          </div>
          <TechTags project={project} delay={0.35} />
          <ActionLinks project={project} delay={0.42} />
        </motion.div>
      </div>
    </motion.article>
  );
}

/* ── Cursor feedback ring that trails the pointer over a project ── */

export function CursorRing({ children }: { children: ReactNode }) {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 28, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 300, damping: 28, mass: 0.3 });
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute z-20 hidden h-8 w-8 rounded-full border border-[var(--text)]/20 md:block"
        style={{ x: sx, y: sy, left: -16, top: -16 }}
        animate={{ opacity: hovering ? 1 : 0, scale: hovering ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
      />
      {children}
    </div>
  );
}
