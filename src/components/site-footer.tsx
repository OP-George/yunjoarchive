import Link from "next/link";
import { Container } from "@/components/container";
import { InstagramIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center gap-3 border-t border-[color:var(--border)] py-7 text-[0.7rem] text-[color:var(--faint)] sm:flex-row sm:items-center sm:justify-between">
          <p className="lowercase">
            © {new Date().getFullYear()} {site.name}, All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link
              href="/terms"
              className="lowercase transition-colors hover:text-foreground"
            >
              terms
            </Link>
            <Link
              href="/privacy"
              className="lowercase transition-colors hover:text-foreground"
            >
              privacy
            </Link>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 lowercase transition-colors hover:text-foreground"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              @yunjoarchive
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
