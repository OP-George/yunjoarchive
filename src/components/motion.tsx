"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const heroEase: [number, number, number, number] = [0.25, 0.92, 0.2, 1];

/** 스크롤·섹션: 아래 → 위 + 페이드인 (느린 템포) */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease },
  },
};

/** 첫 화면 하단 블록(what's new 등): 아래에서 + 페이드인 */
export const fadeUpFromBottom: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.95, ease },
  },
};

/** 히어로 이미지: 왼쪽 상단 방향에서 제자리로 이동 + 살짝 스케일 + 페이드 (클립 아님) */
export const heroFromTopLeft: Variants = {
  hidden: {
    opacity: 0,
    x: "-6%",
    y: "-5%",
    scale: 1.06,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 1.65, ease: heroEase },
  },
};

/** 히어로 이미지: 살짝 확대 → 정상 + 페이드 (레거시·미사용 시 유지) */
export const imageReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 1.02 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.115, delayChildren: 0.07 },
  },
};

export const staggerSlow: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.14 },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-6% 0px -10% 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-6% 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}

/** 첫 화면 진입 시 (히어로·헤더 스태거) */
export function StaggerMount({
  children,
  className,
  slow,
}: {
  children: ReactNode;
  className?: string;
  slow?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={slow ? staggerSlow : stagger}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
