"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type ShopItem } from "@/lib/products";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.45, ease },
  },
};

export function WorkProductCard({ item }: { item: ShopItem }) {
  return (
    <motion.a
      href={`/work/${encodeURIComponent(item.detailSlug)}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      // 양수 margin → 카드 상단이 화면 하단에 살짝 걸치면 바로 트리거
      viewport={{ once: true, margin: "0px 0px 60px 0px" }}
      className="group block cursor-pointer"
    >
      {/* image */}
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-50">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* meta */}
      <div className="mt-3 space-y-1">
        <span className="text-[0.68rem] uppercase tracking-widest text-[color:var(--faint)]">
          {item.category}
        </span>
        <h3 className="text-[0.88rem] font-medium tracking-tight text-foreground transition-opacity duration-500 group-hover:opacity-55">
          {item.title}
        </h3>
      </div>
    </motion.a>
  );
}
