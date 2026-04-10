"use client";

import { motion } from "framer-motion";
import { type ShopCategory } from "@/lib/products";

export type FilterValue = "All" | ShopCategory;

const CATEGORIES: FilterValue[] = ["All", "Object", "Tableware", "Pot"];

interface WorkCategoryFilterProps {
  active: FilterValue;
  onChange: (v: FilterValue) => void;
}

export function WorkCategoryFilter({
  active,
  onChange,
}: WorkCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        return (
          <motion.button
            key={cat}
            onClick={() => onChange(cat)}
            whileTap={{ scale: 0.96 }}
            className={[
              "h-8 rounded-full border px-5 text-[0.72rem] tracking-wide transition-colors duration-300",
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-foreground/40 hover:text-foreground",
            ].join(" ")}
          >
            {cat}
          </motion.button>
        );
      })}
    </div>
  );
}
