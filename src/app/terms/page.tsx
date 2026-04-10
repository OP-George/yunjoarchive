import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "이용약관",
};

const sectionClass = "space-y-3";
const headingClass = "text-[0.78rem] font-semibold tracking-wide text-foreground";
const bodyClass = "text-[0.72rem] leading-[1.95] text-[color:var(--muted)]";
const listClass = "space-y-1 text-[0.72rem] leading-[1.95] text-[color:var(--muted)]";

export default function TermsPage() {
  return (
    <div className="min-h-full">
      <SiteHeader />

      <main>
        <Container>
          {/* 페이지 헤더 */}
          <div className="py-10 sm:py-14">
            <div className="space-y-1">
              <p className="text-[0.68rem] lowercase tracking-[0.22em] text-[color:var(--faint)]">
                yunjoarchive
              </p>
              <h1 className="text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2.6rem]">
                이용약관
              </h1>
            </div>
          </div>

          {/* 본문 */}
          <div className="max-w-2xl pb-20 sm:pb-28">
            <div className="mb-10">
              <p className={bodyClass}>
                본 약관은 yunjoarchive(이하 &ldquo;운영자&rdquo;)가 제공하는 웹사이트
                (yunjoarchive.com, 이하 &ldquo;사이트&rdquo;) 및 관련 서비스 이용에 관한
                조건과 절차를 규정합니다. 본 약관은 2026년 4월 1일부터 적용됩니다.
              </p>
            </div>

            <div className="space-y-10">

              {/* 1 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>제1조 (목적)</h2>
                <p className={bodyClass}>
                  본 약관은 운영자가 제공하는 사이트 및 서비스(이하 &ldquo;서비스&rdquo;)를
                  이용함에 있어 운영자와 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로
                  합니다.
                </p>
              </div>

              {/* 2 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>제2조 (정의)</h2>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>&ldquo;서비스&rdquo;란 운영자가 사이트를 통해 제공하는 정보, 상품 소개, 문의 접수 등 일체의 서비스를 의미합니다.</li>
                  <li>&ldquo;이용자&rdquo;란 본 약관에 따라 운영자가 제공하는 서비스를 이용하는 자를 의미합니다.</li>
                </ul>
              </div>

              {/* 3 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>제3조 (약관의 게시 및 변경)</h2>
                <p className={bodyClass}>
                  운영자는 본 약관을 사이트 내 하단에 게시합니다. 운영자는 관련 법령을 위배하지
                  않는 범위에서 본 약관을 변경할 수 있으며, 변경 시 적용 일자 및 변경 사유를
                  명시하여 사이트에 공지합니다. 변경된 약관은 공지 후 7일이 경과한 날부터 효력이
                  발생합니다.
                </p>
              </div>

              {/* 4 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>제4조 (서비스의 제공 및 변경)</h2>
                <p className={bodyClass}>
                  운영자는 다음의 서비스를 제공합니다.
                </p>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>수공예 제품 정보 제공 및 구매 상담</li>
                  <li>제작 의뢰 및 협업 제안 접수</li>
                  <li>사이트 내 콘텐츠(사진, 텍스트 등) 열람</li>
                </ul>
                <p className={bodyClass}>
                  운영자는 서비스의 내용을 변경하거나 중단할 수 있으며, 이 경우 사이트를 통해
                  사전에 공지합니다.
                </p>
              </div>

              {/* 5 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>제5조 (서비스 이용 제한)</h2>
                <p className={bodyClass}>
                  이용자는 다음 각 호에 해당하는 행위를 하여서는 안 됩니다.
                </p>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>타인의 정보를 도용하거나 허위 정보를 입력하는 행위</li>
                  <li>운영자의 지식재산권을 침해하는 행위(사진, 디자인, 텍스트 무단 도용 등)</li>
                  <li>사이트의 운영을 방해하거나 서버에 과부하를 주는 행위</li>
                  <li>스팸 문의 또는 광고성 내용을 문의 양식을 통해 전송하는 행위</li>
                  <li>기타 관련 법령에 위반되는 행위</li>
                </ul>
              </div>

              {/* 6 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>제6조 (지식재산권)</h2>
                <p className={bodyClass}>
                  사이트 내 게시된 모든 콘텐츠(텍스트, 사진, 영상, 디자인 등)의 저작권은
                  운영자에게 있으며, 사전 서면 동의 없이 복제, 배포, 전송, 전시, 편집하거나
                  2차적 저작물을 작성하는 행위는 금지됩니다.
                </p>
              </div>

              {/* 7 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>제7조 (면책 조항)</h2>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>운영자는 천재지변, 서비스 장애 등 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.</li>
                  <li>이용자가 제공한 정보의 부정확성으로 인해 발생한 손해에 대해 운영자는 책임을 지지 않습니다.</li>
                  <li>사이트에서 링크된 외부 사이트의 내용에 대해 운영자는 책임을 지지 않습니다.</li>
                </ul>
              </div>

              {/* 8 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>제8조 (분쟁 해결 및 준거법)</h2>
                <p className={bodyClass}>
                  본 약관은 대한민국 법률에 따라 해석되며, 서비스 이용과 관련하여 분쟁이 발생한
                  경우 운영자와 이용자는 원만한 해결을 위해 성실히 협의합니다. 협의가 이루어지지
                  않을 경우 관할 법원은 민사소송법에 따른 법원으로 합니다.
                </p>
              </div>

              {/* 9 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>제9조 (연락처)</h2>
                <ul className={listClass}>
                  <li>운영자: 장윤정 (yunjoarchive)</li>
                  <li>
                    이메일:{" "}
                    <a
                      href="mailto:yunjoarchive@naver.com"
                      className="link-underline text-foreground"
                    >
                      yunjoarchive@naver.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-t border-[color:var(--border)] pt-6">
                <p className={bodyClass}>시행일: 2026년 4월 1일</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Link
                    href="/privacy"
                    className="text-[0.72rem] lowercase tracking-wide text-[color:var(--muted)] link-underline hover:text-foreground transition-colors"
                  >
                    개인정보취급방침
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[0.72rem] lowercase tracking-wide text-[color:var(--muted)] link-underline hover:text-foreground transition-colors"
                  >
                    ← contact 로 돌아가기
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
