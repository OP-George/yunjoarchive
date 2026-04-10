import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "개인정보취급방침",
};

const sectionClass = "space-y-3";
const headingClass =
  "text-[0.78rem] font-semibold tracking-wide text-foreground";
const bodyClass =
  "text-[0.72rem] leading-[1.95] text-[color:var(--muted)]";
const listClass =
  "space-y-1 text-[0.72rem] leading-[1.95] text-[color:var(--muted)]";

export default function PrivacyPage() {
  return (
    <div className="min-h-full">
      <SiteHeader />

      <main>
        <Container>
          {/* 페이지 헤더 */}
          <div className="py-10 sm:py-14">
            <div className="space-y-1">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--faint)]">
                yunjoarchive
              </p>
              <h1 className="text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2.6rem]">
                개인정보취급방침
              </h1>
            </div>
          </div>

          {/* 본문 */}
          <div className="max-w-2xl pb-20 sm:pb-28">
            <div className="mb-10 space-y-2">
              <p className={bodyClass}>
                yunjoarchive(이하 &ldquo;운영자&rdquo;)는 이용자의 개인정보를 중요하게 생각하며,
                「개인정보 보호법」 및 관련 법령을 준수합니다. 본 방침은 2026년 4월 1일부터 시행됩니다.
              </p>
            </div>

            <div className="space-y-10">

              {/* 1 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>1. 개인정보의 처리 목적</h2>
                <p className={bodyClass}>
                  운영자는 다음의 목적을 위하여 개인정보를 처리합니다. 처리한 개인정보는 다음의
                  목적 이외의 용도로는 이용되지 않으며, 목적이 변경될 시에는 사전 동의를 구할
                  예정입니다.
                </p>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>문의 접수 및 답변 회신</li>
                  <li>제품 구매 상담 및 제작 의뢰 처리</li>
                  <li>협업·파트너십 제안 검토 및 회신</li>
                </ul>
              </div>

              {/* 2 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>2. 수집하는 개인정보의 항목</h2>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>필수 항목: 이름, 이메일 주소, 문의 내용</li>
                  <li>선택 항목: 회사명, 전화번호, SNS 계정</li>
                </ul>
                <p className={bodyClass}>
                  문의 양식 제출 시 위 항목이 수집되며, 선택 항목 미입력 시에도 서비스 이용에
                  불이익은 없습니다.
                </p>
              </div>

              {/* 3 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>3. 개인정보의 처리 및 보유 기간</h2>
                <p className={bodyClass}>
                  수집된 개인정보는 문의 접수·처리·회신 완료 후 <strong className="font-medium text-foreground">3개월 이내</strong>에 파기합니다.
                  단, 관련 법령에 의해 보존이 필요한 경우에는 해당 법령에서 정한 기간 동안
                  보관합니다.
                </p>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>전자상거래 계약 또는 청약 철회 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                  <li>소비자 불만 또는 분쟁 처리 기록: 3년</li>
                </ul>
              </div>

              {/* 4 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>4. 개인정보의 제3자 제공</h2>
                <p className={bodyClass}>
                  운영자는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 단, 이용자의
                  동의가 있거나 법령의 규정에 의한 경우에는 예외로 합니다.
                </p>
              </div>

              {/* 5 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>5. 개인정보처리의 위탁</h2>
                <p className={bodyClass}>
                  운영자는 문의 전송 처리를 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.
                </p>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>수탁 업체: Web3Forms (web3forms.com) — 이메일 전송 처리</li>
                </ul>
                <p className={bodyClass}>
                  위탁 업체가 개인정보를 안전하게 처리하도록 필요한 사항을 규정하고 있으며,
                  위탁 업무 종료 시 즉시 파기하도록 하고 있습니다.
                </p>
              </div>

              {/* 6 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>6. 이용자의 권리와 행사 방법</h2>
                <p className={bodyClass}>
                  이용자는 언제든지 아래 권리를 행사할 수 있습니다.
                </p>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>개인정보 열람 요청</li>
                  <li>개인정보 정정·삭제 요청</li>
                  <li>개인정보 처리 정지 요청</li>
                </ul>
                <p className={bodyClass}>
                  권리 행사는 아래 개인정보 보호책임자에게 이메일로 요청하실 수 있으며,
                  요청일로부터 10일 이내에 조치 결과를 안내드립니다.
                </p>
              </div>

              {/* 7 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>7. 개인정보의 파기</h2>
                <p className={bodyClass}>
                  보유 기간이 경과하거나 처리 목적이 달성된 경우 지체 없이 파기합니다.
                </p>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>전자적 파일 형태: 복원이 불가능한 방법으로 영구 삭제</li>
                  <li>종이 문서: 분쇄 또는 소각</li>
                </ul>
              </div>

              {/* 8 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>8. 개인정보 보호책임자</h2>
                <ul className={`${listClass}`}>
                  <li>이름: 장윤정</li>
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
                <p className={bodyClass}>
                  개인정보 관련 문의, 불만 처리, 피해 구제 등에 관한 사항은 위 담당자에게
                  문의해 주시기 바랍니다.
                </p>
              </div>

              {/* 9 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>9. 개인정보의 안전성 확보 조치</h2>
                <p className={bodyClass}>
                  운영자는 개인정보 보호를 위해 해킹 방지 및 백신 프로그램을 이용하고 있으며,
                  비밀번호 등을 통해 접근 권한을 제한적으로 관리하고 있습니다.
                </p>
              </div>

              {/* 10 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>10. 쿠키(Cookie) 운용에 관한 사항</h2>
                <p className={bodyClass}>
                  운영자는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를 저장하고
                  수시로 불러오는 &lsquo;쿠키(cookie)&rsquo;를 사용하지 않습니다.
                </p>
              </div>

              {/* 11 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>11. 개인정보 처리방침의 변경</h2>
                <p className={bodyClass}>
                  본 방침은 법령·정책의 변경이나 내부 방침에 따라 개정될 수 있습니다.
                  변경 시 웹사이트를 통해 공지하며, 변경 효력은 공지일로부터 발생합니다.
                </p>
              </div>

              {/* 12 */}
              <div className={sectionClass}>
                <h2 className={headingClass}>12. 권익 침해 구제 방법</h2>
                <p className={bodyClass}>
                  개인정보 침해로 인한 구제를 받기 위하여 아래 기관에 분쟁 해결이나 상담 등을
                  신청할 수 있습니다.
                </p>
                <ul className={`${listClass} list-disc pl-5`}>
                  <li>개인정보 침해신고센터: privacy.kisa.or.kr / 국번 없이 118</li>
                  <li>개인정보 분쟁조정위원회: kopico.go.kr / 1833-6972</li>
                  <li>대검찰청 사이버범죄수사단: 02-3480-3573</li>
                  <li>경찰청 사이버안전국: cyberbureau.police.go.kr / 국번 없이 182</li>
                </ul>
              </div>

              <div className="border-t border-[color:var(--border)] pt-6">
                <p className={bodyClass}>
                  시행일: 2026년 4월 1일
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block text-[0.72rem] lowercase tracking-wide text-[color:var(--muted)] link-underline hover:text-foreground transition-colors"
                >
                  ← contact 로 돌아가기
                </Link>
              </div>

            </div>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
