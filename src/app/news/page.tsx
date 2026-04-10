import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsBoard } from "@/components/news-board";
import { getNews } from "@/lib/news";
import { TypedTitle } from "@/components/typed-title";

export const metadata: Metadata = {
  title: "news",
};

export default function NewsPage() {
  const items = getNews();

  return (
    <div className="min-h-full">
      <SiteHeader />

      <main>
        {/* ─── 페이지 헤더 ─── */}
        <Container>
          <div className="flex flex-col gap-1 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-14">
            <div className="space-y-1">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--faint)]">
                yunjoarchive
              </p>
              <h1 className="text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2.6rem]">
                <TypedTitle text="news" />
              </h1>
            </div>
            <p className="text-[0.75rem] text-[color:var(--muted)]">
              {items.length} posts
            </p>
          </div>
        </Container>

        {/* ─── 게시판 ─── */}
        <Container>
          <div className="pb-16 sm:pb-24">
            <NewsBoard items={items} />
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
