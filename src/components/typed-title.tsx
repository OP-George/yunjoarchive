"use client";

import { useEffect, useState } from "react";

interface TypedTitleProps {
  text: string;
  className?: string;
  speed?: number; // ms per character
  delay?: number; // initial delay in ms
}

export function TypedTitle({
  text,
  className,
  speed = 90,
  delay = 120,
}: TypedTitleProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayed}
      {/* 타이핑 커서 — 완료되면 사라짐 */}
      {!done && (
        <span
          aria-hidden
          className="ml-0.5 inline-block w-[2px] animate-[blink_0.7s_step-end_infinite] bg-current align-middle"
          style={{ height: "0.85em" }}
        />
      )}
    </span>
  );
}
