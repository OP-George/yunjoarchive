"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { fadeUp, fadeUpFromBottom, heroFromTopLeft } from "@/components/motion";
import { site } from "@/lib/site";
import { type NewsItem } from "@/lib/news";

const heroEnter = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.08 },
  },
};

const rowEnter = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.48 },
  },
};

interface HeroSectionProps {
  news?: NewsItem[];
}

export function HeroSection({ news }: HeroSectionProps) {
  const newsItems = news ?? site.news;
  return (
    <section className="pt-6 sm:pt-8">
      <Container>
        <motion.div
          variants={heroEnter}
          initial="hidden"
          animate="show"
        >
          {/* 히어로: 왼쪽 상단에서 이동하며 등장 — z-0 */}
          <motion.div
            variants={heroFromTopLeft}
            className="relative z-0 aspect-[21/9] w-full overflow-hidden rounded-sm bg-neutral-100 sm:aspect-[2.4/1] md:aspect-[2.6/1]"
          >
            <Image
              src={site.heroImageSrc}
              alt={site.heroImageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
              unoptimized
            />
          </motion.div>

          <motion.div
            variants={rowEnter}
            initial="hidden"
            animate="show"
            className="relative z-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-8"
          >
            {/* 태그라인 — 히어로 이미지에 최대한 붙이고, 데스크톱에서 줄바꿈 방지 */}
            <motion.p
              variants={fadeUp}
              className="max-w-none pt-1 text-[0.75rem] font-normal leading-relaxed text-[color:var(--muted)] sm:pt-1 lg:col-span-6 lg:pt-2 lg:whitespace-nowrap"
            >
              {site.heroTagline}
            </motion.p>

            {/* what's new — 모바일: 구분선 포함 클린 레이아웃, 데스크톱: 흰색 박스 오버랩 */}
            <motion.div
              id="news"
              variants={fadeUpFromBottom}
              className="relative z-20 mt-8 sm:mt-10 lg:col-span-4 lg:col-start-9 lg:-mt-8 lg:bg-background lg:p-4"
            >
              {/* 헤더: what's new (왼쪽) | all view (오른쪽) */}
              <div className="mb-2.5 flex items-baseline justify-between">
                <h2 className="text-[0.62rem] font-semibold lowercase tracking-tight text-foreground">
                  what&apos;s new
                </h2>
                <a
                  href="/news"
                  className="link-underline text-[0.62rem] lowercase text-[color:var(--muted)]"
                >
                  all view
                </a>
              </div>

              {/* 뉴스 목록 */}
              <ul className="space-y-2">
                {newsItems.map((n, i) => (
                  <li
                    key={`${n.date}-${i}`}
                    className="text-[0.6rem] leading-relaxed text-foreground"
                  >
                    <a
                      href={n.href ?? "/news"}
                      className="inline-block transition-opacity hover:opacity-70"
                    >
                      <span className="tabular-nums">{n.date}</span>
                      <span className="mx-1.5 text-neutral-400">|</span>
                      <span>{n.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
