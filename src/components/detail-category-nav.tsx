"use client";

import { useRouter } from "next/navigation";
import { WorkCategoryFilter, type FilterValue } from "@/components/work-category-filter";

export function DetailCategoryNav() {
  const router = useRouter();

  const handleChange = (cat: FilterValue) => {
    router.push(cat === "All" ? "/work" : `/work?category=${cat}`);
  };

  return <WorkCategoryFilter active="All" onChange={handleChange} />;
}
