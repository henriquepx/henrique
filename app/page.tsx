'use client';

import { Nav } from '@/components/sections/nav';
import { Hero } from '@/components/sections/hero';
import { SelectedWork } from '@/components/sections/selected-work';
import { About } from '@/components/sections/about';
import { TechStack } from '@/components/sections/tech-stack';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { Loader } from '@/components/motion/loader';
import { MouseGlow } from '@/components/motion/mouse-glow';
import { SectionDivider } from '@/components/motion/section-divider';
import { SpotifyFloatingButton } from "@/components/spotify-floating-button";
import { useLanguage } from '@/lib/i18n';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Loader />
      <div className="ambient-gradient" aria-hidden />
      <div className="noise-overlay" aria-hidden />
      <MouseGlow />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <SectionDivider label={t.divider.work} />
          <SelectedWork />
          <SectionDivider label={t.divider.about} />
          <About />
          <SectionDivider label={t.divider.skills} />
          <TechStack />
          <SectionDivider label={t.divider.contact} />
          <Contact />

          <SpotifyFloatingButton />
        </main>
        <Footer />
      </div>
    </>
  );
}
