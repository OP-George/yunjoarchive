import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WorkLayoutHeader } from "@/components/work-layout-header";
import { getProducts } from "@/lib/products";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  const products = getProducts();

  return (
    <div className="min-h-full">
      <SiteHeader />
      <main>
        <Suspense>
          <WorkLayoutHeader products={products} />
        </Suspense>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
