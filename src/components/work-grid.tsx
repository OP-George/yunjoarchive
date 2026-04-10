"use client";

import { motion } from "framer-motion";
import { WorkProductCard } from "@/components/work-product-card";
import { type ShopItem } from "@/lib/products";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface WorkGridProps {
  items: ShopItem[];
}

export function WorkGrid({ items }: WorkGridProps) {
  if (items.length === 0) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease } }}
        className="py-24 text-center text-[0.8rem] text-[color:var(--faint)]"
      >
        상품이 없습니다.
      </motion.p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-14 sm:gap-x-8 sm:gap-y-20 lg:grid-cols-3">
      {items.map((item) => (
        <WorkProductCard key={`${item.category}-${item.id}`} item={item} />
      ))}
    </div>
  );
}
