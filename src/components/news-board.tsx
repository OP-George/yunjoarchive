"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type NewsItem } from "@/lib/news";

const PAGE_SIZE = 10;

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: i * 0.05 },
  }),
};

interface NewsBoardProps {
  items: NewsItem[];
}

export function NewsBoard({ items }: NewsBoardProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const pagedItems = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      {/* 게시 목록 */}
      <AnimatePresence mode="wait">
        <motion.ul
          key={page}
          initial="hidden"
          animate="show"
          className="divide-y divide-[color:var(--border)]"
        >
          {pagedItems.map((item, i) => (
            <motion.li
              key={`${item.date}-${i}`}
              custom={i}
              variants={itemVariant}
              className="flex items-baseline gap-5 py-5 sm:gap-8 sm:py-6"
            >
              <span className="w-[6.5rem] shrink-0 tabular-nums text-[0.75rem] font-semibold text-foreground">
                {item.date}
              </span>
              <span className="text-[0.75rem] text-[color:var(--faint)]">|</span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.75rem] text-[color:var(--accent)] transition-opacity hover:opacity-70"
                >
                  {item.title}
                </a>
              ) : (
                <span className="text-[0.75rem] text-foreground">{item.title}</span>
              )}
            </motion.li>
          ))}

          {pagedItems.length === 0 && (
            <li className="py-16 text-center text-[0.75rem] text-[color:var(--faint)]">
              게시된 소식이 없습니다.
            </li>
          )}
        </motion.ul>
      </AnimatePresence>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="mt-14 flex flex-col items-center gap-6">
          {page < totalPages && (
            <button
              onClick={() => setPage((p) => p + 1)}
              className="w-56 border border-[color:var(--border)] py-3 text-[0.75rem] lowercase tracking-wide text-foreground transition-colors hover:border-foreground/40 hover:bg-neutral-50"
            >
              다음 {PAGE_SIZE}개 보기
            </button>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)] text-[0.72rem] text-[color:var(--muted)] transition-colors hover:border-foreground/40 disabled:opacity-30"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-[0.72rem] transition-colors ${
                  p === page
                    ? "border-foreground/40 bg-foreground text-background"
                    : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-foreground/40"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)] text-[0.72rem] text-[color:var(--muted)] transition-colors hover:border-foreground/40 disabled:opacity-30"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
