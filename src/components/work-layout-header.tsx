"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Container } from "@/components/container";
import { WorkCategoryFilter, type FilterValue } from "@/components/work-category-filter";
import { TypedTitle } from "@/components/typed-title";

const VALID: FilterValue[] = ["All", "Object", "Tableware", "Pot"];

export function WorkLayoutHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const isDetail = pathname !== "/work";
  const catParam = searchParams.get("category") ?? "All";
  const active: FilterValue = VALID.includes(catParam as FilterValue)
    ? (catParam as FilterValue)
    : "All";

  const handleChange = (v: FilterValue) => {
    router.push(v === "All" ? "/work" : `/work?category=${v}`);
  };

  return (
    <Container>
      <div className="space-y-6 pb-10 pt-10 sm:space-y-8 sm:pb-12 sm:pt-14">
        {/* 페이지 타이틀 행 */}
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <p className="text-[0.68rem] lowercase tracking-[0.22em] text-[color:var(--faint)]">
              yunjoarchive
            </p>
            <h1 className="text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2.6rem]">
              {isDetail ? "work" : <TypedTitle text="work" />}
            </h1>
          </div>
          {isDetail && (
            <Link
              href="/work"
              className="text-[0.75rem] text-[color:var(--muted)] transition-opacity hover:opacity-60"
            >
              ← back
            </Link>
          )}
        </div>

        {/* 카테고리 필터 */}
        <div className="space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--faint)]">
            category
          </p>
          <WorkCategoryFilter active={active} onChange={handleChange} />
        </div>
      </div>
    </Container>
  );
}
