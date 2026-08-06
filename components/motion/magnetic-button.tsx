'use client';

import { useRef, type ReactNode } from 'react';
import { motion, type MotionValue, useSpring, useTransform } from 'framer-motion';

const SPRING = { stiffness: 200, damping: 18, mass: 0.4 };

export function MagneticButton({
  children,
  className,
  href,
  strength = 0.35,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
  onClick?: () => void;
}) {
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const style = { x, y };

  if (href) {
    return (
      <motion.a
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={style}
        className={className}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export function useParallax(
  value: MotionValue<number>,
  distance: number,
): MotionValue<number> {
  return useTransform(value, [0, 1], [-distance, distance]);
}
