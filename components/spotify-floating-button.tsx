"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiSpotify } from "@icons-pack/react-simple-icons";
import { useLanguage } from "@/lib/i18n";

export function SpotifyFloatingButton() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="https://open.spotify.com/playlist/0Oorw1jme6Uos8DWNYpj08?si=9c136f50d5f540d4"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20, y: 20 }}
          transition={{ duration: 0.35 }}
          className="group fixed bottom-16 left-8 z-50"
        >
          {/* Botão */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#1DB954]/50">
            <SiSpotify
              className="h-6 w-6 text-[#1DB954]"
              title="Spotify"
            />
          </div>

          {/* Tooltip */}
          <div className="pointer-events-none absolute bottom-0 left-16 w-72 rounded-2xl border border-white/10 bg-zinc-900/95 p-5 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-x-1 group-hover:opacity-100">

            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              {t.spotify.eyebrow}
            </p>

            <h3 className="mt-2 text-base font-semibold text-white">
              {t.spotify.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {t.spotify.description}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#1DB954]">
              {t.spotify.action}
              <ExternalLink size={15} />
            </div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}