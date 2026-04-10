import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WorkLayoutHeader } from "@/components/work-layout-header";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full">
      <SiteHeader />
      <main>
        <Suspense>
          <WorkLayoutHeader />
        </Suspense>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
