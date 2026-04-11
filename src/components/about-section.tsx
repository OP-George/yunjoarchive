"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
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

const imageVariant = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease },
  },
};

const DESCRIPTION =
  "yunjoarchive는 여유와 빈틈 있는 일상을 지향하며, 당신의 일상에 가장 가까이 닿을 정직하고 질 좋은 물건만을 만듭니다. 이 제품이 당신의 하루에 스며들어 소중한 경험의 일부가 되기를 바랍니다.";

export function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      className="scroll-mt-32"
    >
      {/* Category 섹션과 동일한 그리드: 왼쪽 선 컬럼은 빈 spacer */}
      <div className="grid grid-cols-[80px_1fr] items-start gap-x-5 sm:grid-cols-[130px_1fr] sm:gap-x-8 lg:grid-cols-[160px_1fr]">
        {/* 왼쪽: spacer (카테고리 섹션 선 컬럼과 동일 너비) */}
        <div />

        {/* 오른쪽: 세로 단일 배치 */}
        <div className="space-y-6">

          <motion.span
            variants={fadeUp}
            className="block text-[1.3rem] leading-none text-foreground sm:text-[1.7rem] lg:text-[2rem]"
          >
            ·
          </motion.span>

          <motion.div variants={fadeUp} className="space-y-0">
            <h2 className="text-[1.3rem] font-semibold tracking-[0.18em] text-foreground sm:text-[1.7rem] lg:text-[2rem]">
              yunjo
            </h2>
            <h2 className="text-[1.3rem] font-semibold tracking-[0.18em] text-foreground sm:text-[1.7rem] lg:text-[2rem]">
              archive
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="text-[0.72rem] lowercase tracking-[0.1em] text-foreground">
              about
            </span>
            <div className="h-px w-8 bg-foreground/40" />
          </motion.div>

          {/* namecard 이미지 — about 라인 아래, 설명 텍스트 위 */}
          <motion.div variants={imageVariant} className="w-full">
            <Image
              src="/namecard.jpg"
              alt="Yunjoarchive namecard"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-sm text-[0.75rem] leading-[1.85] text-[color:var(--muted)]"
          >
            {DESCRIPTION}
          </motion.p>

          {/* 시그니처 라인 */}
          <motion.div variants={fadeUp} className="max-w-sm space-y-2">
            <h3 className="text-[0.75rem] font-semibold leading-snug text-foreground">
              시그니처 라인
            </h3>
            <p className="text-[0.75rem] leading-[1.85] text-[color:var(--muted)]">
              yunjoarchive의 대표 라인으로 파스텔 톤의 부드럽고 여린 느낌의 제품들이 주를 이룹니다. 특별한 유약 레시피를 사용하며, 심플하면서도 어디든 잘 어울리는 세련된 미감을 선사합니다.
            </p>
          </motion.div>

          {/* 리미티드 라인 */}
          <motion.div variants={fadeUp} className="max-w-sm space-y-2">
            <h3 className="text-[0.75rem] font-semibold leading-snug text-foreground">
              리미티드 라인
            </h3>
            <p className="text-[0.75rem] leading-[1.85] text-[color:var(--muted)]">
              단 하나씩만 제작되는 원 앤 온리 제품으로 유니크한 희소가치를 지니고 있으며, 작고 귀여운 제품들이 주를 이룹니다. 시그니처 라인과는 다른 소지를 사용하거나 여러 질감의 유약을 이용하여 시각적, 촉각적 즐거움을 선사합니다.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
