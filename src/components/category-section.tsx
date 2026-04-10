"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type ShopItem, type ShopCategory } from "@/lib/products";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** 섹션 전체: 스크롤 시 stagger로 자식을 순차 등장 */
const sectionEnter = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease },
  },
};

const imageItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease },
  },
};

interface CategorySectionProps {
  category: ShopCategory;
  items: ShopItem[];
}

export function CategorySection({ category, items }: CategorySectionProps) {
  if (items.length === 0) return null;

  const displayItems = items.slice(0, 3);

  return (
    <motion.section
      variants={sectionEnter}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -5% 0px" }}
    >
      {/* 왼쪽 선 + 오른쪽 콘텐츠 grid */}
      <div className="grid grid-cols-[80px_1fr] items-start gap-x-5 sm:grid-cols-[130px_1fr] sm:gap-x-8 lg:grid-cols-[160px_1fr]">
        {/* 왼쪽: 장식 선 */}
        <motion.div variants={fadeUp} className="flex items-center pt-[1.35rem]">
          <div className="h-px w-full bg-[color:var(--border)]" />
        </motion.div>

        {/* 오른쪽 콘텐츠 */}
        <div className="space-y-4">
          {/* 타이틀 */}
          <motion.div variants={fadeUp} className="space-y-1">
            <h2 className="lowercase text-[1.3rem] font-semibold tracking-[0.18em] text-foreground sm:text-[1.7rem] lg:text-[2rem]">
              {category}
            </h2>
            <p className="text-[0.7rem] lowercase tracking-[0.08em] text-[color:var(--muted)]">
              {category.toLowerCase()}
            </p>
          </motion.div>

          {/* 이미지 — 모바일 2열, sm 이상 3열 */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {displayItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.storeUrl}
                target="_blank"
                rel="noreferrer"
                variants={imageItem}
                className="group relative block aspect-square overflow-hidden bg-neutral-50"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 48vw, (max-width: 1024px) 22vw, 18vw"
                />
              </motion.a>
            ))}
          </div>

          {/* view more */}
          <motion.div variants={fadeUp} className="flex justify-end pt-1">
            <Link
              href={`/work?category=${category}`}
              className="link-underline text-[0.75rem] lowercase text-foreground"
            >
              view more
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
