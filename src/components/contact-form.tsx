"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const labelClass =
  "block text-[0.72rem] tracking-[0.08em] text-foreground mb-1.5";
const inputClass =
  "w-full border border-[color:var(--border)] bg-transparent px-3 py-2.5 text-[0.78rem] text-foreground placeholder:text-[color:var(--faint)] focus:border-foreground/50 focus:outline-none transition-colors";
const requiredMark = (
  <span className="ml-0.5 text-[color:var(--accent)]">*</span>
);

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [agreed, setAgreed] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");

    const data = new FormData(e.currentTarget);
    data.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""
    );
    data.append("subject", "yunjoarchive 웹사이트 문의");
    data.append("from_name", "yunjoarchive Contact");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      setFormState(json.success ? "success" : "error");
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="py-20 text-center space-y-3">
        <p className="text-[0.95rem] font-semibold tracking-wide text-foreground">
          문의가 접수되었습니다.
        </p>
        <p className="text-[0.75rem] text-[color:var(--muted)]">
          빠른 시일 내에 입력하신 이메일로 회신드리겠습니다.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-4 inline-block text-[0.72rem] lowercase tracking-wide text-[color:var(--muted)] underline hover:text-foreground transition-colors"
        >
          새 문의 작성하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      {/* 회사명 */}
      <div>
        <label className={labelClass}>회사명</label>
        <input
          type="text"
          name="company"
          className={inputClass}
          placeholder=""
        />
      </div>

      {/* 이름 */}
      <div>
        <label className={labelClass}>
          이름{requiredMark}
        </label>
        <input
          type="text"
          name="name"
          required
          className={inputClass}
        />
      </div>

      {/* 이메일 */}
      <div>
        <label className={labelClass}>
          이메일{requiredMark}
        </label>
        <input
          type="email"
          name="email"
          required
          className={inputClass}
        />
      </div>

      {/* 전화번호 */}
      <div>
        <label className={labelClass}>
          전화번호
          <span className="ml-2 text-[0.68rem] text-[color:var(--faint)]">
            하이픈 없이 입력해 주세요
          </span>
        </label>
        <input
          type="tel"
          name="phone"
          className={inputClass}
          placeholder=""
        />
      </div>

      {/* SNS 계정 */}
      <div>
        <label className={labelClass}>SNS 계정</label>
        <input
          type="text"
          name="sns"
          className={inputClass}
          placeholder="@"
        />
      </div>

      {/* 문의 내용 */}
      <div>
        <label className={labelClass}>
          문의 내용{requiredMark}
          <span className="ml-2 text-[0.68rem] text-[color:var(--faint)]">
            구매 문의, 제작 의뢰, 협업 제안 등 자유롭게 작성해 주세요
          </span>
        </label>
        <textarea
          name="message"
          required
          rows={7}
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* 개인정보 동의 */}
      <div className="flex items-start gap-3 pt-1">
        <input
          id="agree"
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-foreground"
        />
        <label
          htmlFor="agree"
          className="cursor-pointer text-[0.72rem] leading-relaxed text-[color:var(--muted)]"
        >
          수집된 정보는 문의 답변 목적으로만 사용되며, 답변 완료 후 파기됩니다. 이에 동의합니다.
        </label>
      </div>

      {/* 에러 메시지 */}
      {formState === "error" && (
        <p className="text-[0.72rem] text-red-500">
          전송에 실패했습니다. 잠시 후 다시 시도해 주세요.
        </p>
      )}

      {/* 제출 버튼 */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={formState === "loading" || !agreed}
          className="w-full border border-[color:var(--border)] py-4 text-[0.75rem] lowercase tracking-widest text-foreground transition-colors hover:border-foreground/50 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {formState === "loading" ? "전송 중..." : "문의 보내기"}
        </button>
      </div>
    </form>
  );
}
