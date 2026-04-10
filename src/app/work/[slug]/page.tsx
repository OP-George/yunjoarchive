import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DetailCategoryNav } from "@/components/detail-category-nav";
import { getProducts, getDetailImages } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const product = getProducts().find((p) => p.detailSlug === decoded);
  return {
    title: product?.title ?? decoded,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);

  const products = getProducts();
  const product = products.find((p) => p.detailSlug === decoded);
  if (!product) notFound();

  const images = getDetailImages(decoded);

  return (
    <div className="min-h-full">
      <SiteHeader />

      <main>
        {/* ─── 페이지 헤더 (work 페이지와 동일 구조) ─── */}
        <div>
          <Container>
            <div className="flex flex-col gap-1 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-14">
              <div className="space-y-1">
                <p className="text-[0.68rem] lowercase tracking-[0.22em] text-[color:var(--faint)]">
                  yunjoarchive
                </p>
                <h1 className="text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2.6rem]">
                  work
                </h1>
              </div>
              <Link
                href="/work"
                className="text-[0.75rem] text-[color:var(--muted)] transition-opacity hover:opacity-60"
              >
                ← back
              </Link>
            </div>
          </Container>
        </div>

        {/* ─── 카테고리 필터 (클릭 시 /work?category=X 이동) ─── */}
        <Container>
          <div className="pb-10 sm:pb-12">
            <DetailCategoryNav />
          </div>
        </Container>

        {/* ─── 상품명 ─── */}
        <Container>
          <div className="mb-8 border-b border-[color:var(--border)] pb-6">
            <p className="text-[0.68rem] lowercase tracking-[0.22em] text-[color:var(--faint)]">
              {product.category.toLowerCase()}
            </p>
            <h2 className="mt-1 text-[1.1rem] font-medium tracking-tight text-foreground sm:text-[1.4rem]">
              {product.title}
            </h2>
          </div>
        </Container>

        {/* ─── 상세 이미지 ─── */}
        <Container>
          <div className="pb-20 sm:pb-28">
            {images.length === 0 ? (
              <p className="py-24 text-center text-[0.8rem] text-[color:var(--faint)]">
                이미지를 불러올 수 없습니다.
              </p>
            ) : (
              <div className="flex flex-col gap-2 sm:gap-3">
                {images.map((src, i) => (
                  <div key={i} className="relative w-full">
                    <Image
                      src={src}
                      alt={`${product.title} ${i + 1}`}
                      width={0}
                      height={0}
                      sizes="(max-width: 896px) 100vw, 896px"
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
