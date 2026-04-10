"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WorkCategoryFilter, type FilterValue } from "@/components/work-category-filter";
import { WorkProductCard } from "@/components/work-product-card";
import { type ShopItem } from "@/lib/products";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface WorkGridProps {
  items: ShopItem[];
  /** /work?category=Object 등으로 진입 시 초기 선택 카테고리 */
  initialCategory?: FilterValue;
}

export function WorkGrid({ items, initialCategory = "All" }: WorkGridProps) {
  const [active, setActive] = useState<FilterValue>(initialCategory);

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div className="space-y-10">
      {/* category */}
      <div className="space-y-4">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--faint)]">
          category
        </p>
        <WorkCategoryFilter active={active} onChange={setActive} />
      </div>

      {/* grid — key={active} 로 필터 변경 시 재마운트 → 애니메이션 재실행 */}
      {filtered.length > 0 ? (
        <div
          key={active}
          className="grid grid-cols-2 gap-x-5 gap-y-14 sm:gap-x-8 sm:gap-y-20 lg:grid-cols-3"
        >
          {filtered.map((item) => (
            <WorkProductCard key={`${item.category}-${item.id}`} item={item} />
          ))}
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease } }}
          className="py-24 text-center text-[0.8rem] text-[color:var(--faint)]"
        >
          상품이 없습니다.
        </motion.p>
      )}
    </div>
  );
}
