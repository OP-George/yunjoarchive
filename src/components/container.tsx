import { type ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 lg:px-10">{children}</div>
  );
}
