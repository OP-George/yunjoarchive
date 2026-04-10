"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion";
import { site } from "@/lib/site";
import { Container } from "@/components/container";

const enter = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md">
      <Container>
        <motion.div
          className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]"
          variants={enter}
          initial="hidden"
          animate="show"
        >
          <motion.a
            href="/"
            variants={fadeUp}
            className="shrink-0 text-[0.95rem] font-semibold lowercase tracking-tight text-foreground"
          >
            {site.name}
          </motion.a>
          <motion.div
            className="flex max-w-[calc(100%-6rem)] flex-wrap items-center justify-end gap-x-3 gap-y-2 sm:max-w-none sm:gap-x-5 md:gap-x-6"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {site.nav.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                variants={fadeUp}
                className={
                  item.accent
                    ? "text-[0.8rem] text-[color:var(--accent)] transition-opacity hover:opacity-80"
                    : "text-[0.8rem] lowercase text-foreground transition-opacity hover:opacity-65"
                }
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </header>
  );
}
