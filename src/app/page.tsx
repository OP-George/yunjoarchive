import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal, Stagger } from "@/components/motion";
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AboutSection } from "@/components/about-section";
import { CategorySection } from "@/components/category-section";
import { getProducts } from "@/lib/products";
import { getNews } from "@/lib/news";
import { site } from "@/lib/site";

export default function Home() {
  const allProducts = getProducts();
  const latestNews = getNews().slice(0, 2);

  const featured      = allProducts.filter((p) => p.featured);
  const objectItems   = featured.filter((p) => p.category === "Object");
  const tablewareItems = featured.filter((p) => p.category === "Tableware");
  const potItems      = featured.filter((p) => p.category === "Pot");

  return (
    <div className="min-h-full">
      <SiteHeader />

      <main id="top">
        <HeroSection news={latestNews} />

        <div className="pb-3 pt-16 sm:pb-4 sm:pt-24">
          <Container>
            <Stagger className="space-y-28 sm:space-y-36">

              {/* ── about (최상단) ── */}
              <AboutSection />

              {/* ── 카테고리 섹션들 ── */}
              {objectItems.length > 0 && (
                <CategorySection category="Object" items={objectItems} />
              )}
              {tablewareItems.length > 0 && (
                <CategorySection category="Tableware" items={tablewareItems} />
              )}
              {potItems.length > 0 && (
                <CategorySection category="Pot" items={potItems} />
              )}


              <div className="pt-0">
                <Reveal>
                  <div className="pt-0">
                    {/* 로고 + 네비게이션 */}
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
                      <Link href="/" aria-label="yunjoarchive home">
                        <Image
                          src="/logo.jpg"
                          alt="yunjoarchive logo"
                          width={52}
                          height={52}
                          className="rounded-full object-cover"
                          unoptimized
                        />
                      </Link>
                      <nav className="hidden flex-wrap gap-x-6 gap-y-2 sm:flex">
                        {site.nav.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={`text-[0.75rem] lowercase tracking-wide transition-opacity hover:opacity-60 ${item.accent ? "text-[color:var(--accent)]" : "text-foreground"}`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                </Reveal>
              </div>

            </Stagger>
          </Container>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
