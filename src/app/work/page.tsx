import type { Metadata } from "next";
import { Container } from "@/components/container";
import { WorkGrid } from "@/components/work-grid";
import { getProducts } from "@/lib/products";
import { type FilterValue } from "@/components/work-category-filter";

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
  const activeCategory: FilterValue = (VALID_CATEGORIES as string[]).includes(raw)
    ? (raw as FilterValue)
    : "All";

  const allItems = getProducts();
  const items =
    activeCategory === "All"
      ? allItems
      : allItems.filter((i) => i.category === activeCategory);

  return (
    <Container>
      <div className="pb-20 sm:pb-28">
        <WorkGrid items={items} />
      </div>
    </Container>
  );
}
