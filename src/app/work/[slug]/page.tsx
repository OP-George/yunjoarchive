import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
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
    <Container>
      {/* 상품명 */}
      <div className="mb-8 border-b border-[color:var(--border)] pb-6">
        <p className="text-[0.68rem] lowercase tracking-[0.22em] text-[color:var(--faint)]">
          {product.category.toLowerCase()}
        </p>
        <h2 className="mt-1 text-[1.1rem] font-medium tracking-tight text-foreground sm:text-[1.4rem]">
          {product.title}
        </h2>
      </div>

      {/* 상세 이미지 */}
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
                  width={896}
                  height={1120}
                  className="h-auto w-full"
                  sizes="(max-width: 896px) 100vw, 896px"
                  quality={82}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
