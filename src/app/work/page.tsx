import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WorkGrid } from "@/components/work-grid";
import { TypedTitle } from "@/components/typed-title";
import { getProducts } from "@/lib/products";
import { type FilterValue } from "@/components/work-category-filter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "work",
};

const VALID_CATEGORIES: FilterValue[] = ["All", "Object", "Tableware", "Pot"];

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const raw = params.category ?? "";
  const initialCategory: FilterValue = (VALID_CATEGORIES as string[]).includes(raw)
    ? (raw as FilterValue)
    : "All";

  const items = getProducts();

  return (
    <div className="min-h-full">
      <SiteHeader />

      <main>
        {/* ─── 페이지 헤더 ─── */}
        <div>
          <Container>
            <div className="flex flex-col gap-1 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-14">
              <div className="space-y-1">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--faint)]">
                  yunjoarchive
                </p>
                <h1 className="text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2.6rem]">
                  <TypedTitle text="work" />
                </h1>
              </div>
              <p className="text-[0.78rem] text-[color:var(--muted)]">
                {items.length} items
              </p>
            </div>
          </Container>
        </div>

        {/* ─── 제품 그리드 ─── */}
        <Container>
          <div className="py-12 sm:py-16">
            <WorkGrid items={items} initialCategory={initialCategory} />
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
