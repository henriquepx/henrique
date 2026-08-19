'use client';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useState, type MouseEvent } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { useLanguage } from '@/lib/i18n';

const EASE = [0.22, 1, 0.36, 1] as const;

export function SelectedWork() {
  const { t } = useLanguage();
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
    mass: 0.25,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
    mass: 0.25,
  });

  const imageX = useTransform(springX, (value) => value - 180);
  const imageY = useTransform(springY, (value) => value - 130);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  function openProject(project: Project) {
    setActiveProject(project);
    setHoveredProject(null);
    document.body.style.overflow = 'hidden';
  }

  function closeProject() {
    setActiveProject(null);
    document.body.style.overflow = '';
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeProject();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <section
        id="work"
        className="relative px-6 py-24 sm:py-32 lg:py-40"
        onMouseMove={handleMouseMove}
      >
        <div className="mx-auto max-w-6xl">

          <ScrollReveal className="mb-16 sm:mb-24">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow mb-4">{t.work.eyebrow}</p>

                <h2 className="text-4xl font-bold tracking-tightest sm:text-6xl">
                  {t.work.title}
                </h2>
              </div>

              <p className="max-w-xs text-sm leading-6 text-secondary-custom sm:text-right">
                {t.work.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="relative border-t border-custom">
            {projects.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
                isActive={hoveredProject?.id === project.id}
                onEnter={() => setHoveredProject(project)}
                onLeave={() => setHoveredProject(null)}
                onClick={() => openProject(project)}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {hoveredProject && !activeProject && (
            <motion.div
              key={hoveredProject.id}
              className="pointer-events-none fixed left-0 top-0 z-50 hidden overflow-hidden rounded-xl shadow-2xl md:block"
              style={{
                x: imageX,
                y: imageY,
                width: 360,
                height: 260,
              }}
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
              }}
              transition={{
                duration: 0.25,
                ease: EASE,
              }}
            >
              <motion.img
                key={hoveredProject.id}
                src={hoveredProject.image}
                alt={`${hoveredProject.name} ${t.work.previewAlt}`}
                initial={{
                  opacity: 0,
                  scale: 1.05,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.35,
                  ease: EASE,
                }}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/5" />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectRow({
  project,
  index,
  isActive,
  onEnter,
  onLeave,
  onClick,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const { t } = useLanguage();
  const copy = t.projects[project.id];

  return (
    <motion.button
      type="button"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-60px',
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: EASE,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="group relative block w-full border-b border-custom text-left"
    >
      <div className="relative py-8 sm:py-10 lg:py-12">

        <div className="grid grid-cols-[50px_1fr_auto] items-center gap-6 sm:grid-cols-[70px_1fr_180px_auto] lg:grid-cols-[80px_1fr_200px_80px]">

          <span
            className={`text-xs font-medium transition-colors duration-300 ${
              isActive
                ? 'text-[var(--text)]'
                : 'text-secondary-custom'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="min-w-0">
            <motion.h3
              animate={{
                x: isActive ? 8 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: EASE,
              }}
              className="text-2xl font-semibold tracking-tightest sm:text-3xl lg:text-4xl"
            >
              {project.name}
            </motion.h3>

            <p className="mt-2 max-w-lg text-sm leading-6 text-secondary-custom sm:hidden">
              {copy.description}
            </p>
          </div>

          <div className="hidden sm:block">
            <p className="text-sm text-secondary-custom">
              {copy.category}
            </p>

            <p className="mt-1 text-xs text-secondary-custom/60">
              {project.year}
            </p>
          </div>

          <motion.div
            animate={{
              x: isActive ? 4 : 0,
              y: isActive ? -4 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: EASE,
            }}
            className="flex justify-end"
          >
            <ArrowUpRight
              className={`h-5 w-5 transition-colors duration-300 ${
                isActive
                  ? 'text-[var(--text)]'
                  : 'text-secondary-custom'
              }`}
              strokeWidth={1.5}
            />
          </motion.div>
        </div>

        <div className="mt-5 flex items-center gap-3 sm:hidden">
          <span className="text-xs text-secondary-custom">
            {copy.category}
          </span>

          <span className="h-1 w-1 rounded-full bg-[var(--border)]" />

          <span className="text-xs text-secondary-custom">
            {project.year}
          </span>
        </div>

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: isActive ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: EASE,
          }}
          style={{
            originX: 0,
          }}
          className="absolute bottom-0 left-0 h-px w-full bg-[var(--text)]"
        />
      </div>
    </motion.button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const copy = t.projects[project.id];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="fixed inset-0 z-[100] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} — ${t.work.dialogLabel}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
      />

      <div className="relative flex min-h-full items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          transition={{
            duration: 0.45,
            ease: EASE,
          }}
          className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-custom bg-card-custom shadow-2xl"
          onMouseDown={(e) => e.stopPropagation()}
        >

       <button
            type="button"
            onClick={onClose}
            aria-label={t.work.close}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-transform duration-200 hover:scale-105"
          >
            <X
              className="h-4 w-4"
              strokeWidth={1.5}
            />
          </button>

          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
            <motion.img
              src={project.image}
              alt={`${project.name} ${t.work.previewAlt}`}
              initial={{
                scale: 1.05,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: EASE,
              }}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_260px] lg:p-12">

            <div>
              <div className="mb-5 flex items-center gap-3 text-xs text-secondary-custom">
                <span>{copy.category}</span>

                <span className="h-1 w-1 rounded-full bg-[var(--border)]" />

                <span>{project.year}</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tightest sm:text-5xl">
                {project.name}
              </h2>

              {copy.accent && (
                <p className="mt-6 max-w-2xl border-l border-custom pl-5 text-lg font-medium leading-relaxed text-secondary-custom">
                  {copy.accent}
                </p>
              )}

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-secondary-custom">
                {copy.description}
              </p>
            </div>

            <div className="flex flex-col gap-8">

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-secondary-custom">
                  {t.work.technologies}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-custom px-3 py-1.5 text-xs font-medium text-secondary-custom"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium"
                >
                  {t.work.visit}
<ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
