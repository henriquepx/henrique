'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl border-t border-custom pt-8"
      >
        <p className="text-sm text-secondary-custom">
          Henrique Pinheiro - {new Date().getFullYear()}. © {t.footer.rights}
        </p>
      </motion.div>
    </footer>
  );
}
