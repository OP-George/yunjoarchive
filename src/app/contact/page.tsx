import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { TypedTitle } from "@/components/typed-title";

export const metadata: Metadata = {
  title: "contact",
};

export default function ContactPage() {
  return (
    <div className="min-h-full">
      <SiteHeader />

      <main>
        <Container>
          {/* ─── 페이지 헤더 ─── */}
          <div className="flex flex-col gap-1 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-14">
            <div className="space-y-1">
              <p className="text-[0.68rem] lowercase tracking-[0.22em] text-[color:var(--faint)]">
                yunjoarchive
              </p>
              <h1 className="text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2.6rem]">
                <TypedTitle text="contact" />
              </h1>
            </div>
          </div>

          {/* ─── 폼 영역 ─── */}
          <div className="pb-20 sm:pb-28">
            <div className="max-w-xl">
              {/* 안내 문구 */}
              <div className="mb-10 space-y-2">
                <p className="text-[0.75rem] leading-[1.9] text-[color:var(--muted)]">
                  제품 구매 문의, 제작 의뢰, 협업 제안 등 어떤 내용이든 편하게 연락해 주세요.
                </p>
                <p className="text-[0.75rem] leading-[1.9] text-[color:var(--muted)]">
                  문의 내용을 확인 후 입력하신 이메일로 회신드립니다.
                </p>
              </div>

              <p className="mb-3 text-[0.72rem] leading-[1.9] text-[color:var(--muted)]">
                아래 양식에 필요한 사항을 입력하고{" "}
                <Link
                  href="/privacy"
                  className="link-underline text-foreground"
                >
                  개인정보취급방침
                </Link>
                을 확인한 후 제출 버튼을 눌러주세요.
              </p>
              <p className="mb-8 text-[0.68rem] text-[color:var(--faint)]">
                * 표시는 필수 항목입니다.
              </p>

              <ContactForm />
            </div>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
