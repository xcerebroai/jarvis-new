import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { footerColumns, legalNav } from "@/content/nav";
import { quentinContactUrl } from "@/content/personal-services";

import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="jarvis-footer hairline-t bg-ink-950">
      <Container width="wide" className="py-14 md:py-18">
        <div className="jarvis-footer-brand border-b border-line pb-10">
          <div className="jarvis-footer-identity">
            <Logo animated={false} className="self-start" />
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Your leads. Your follow-up. Your next move.
            </p>
            <a
              href={quentinContactUrl}
              className="inline-flex max-w-full items-center gap-2 text-xs leading-relaxed text-cobalt-400 hover:text-paper"
            >
              DM Q for custom pricing to save money.
              <ArrowUpRightIcon aria-hidden className="size-4 shrink-0" />
            </a>
          </div>
          <Link href="/pricing/" className="jarvis-footer-plans">
            Explore all plans{" "}
            <ArrowUpRightIcon aria-hidden className="size-5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-10 md:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-sans text-[10px] font-medium tracking-[.14em] text-faint uppercase">
                {column.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs leading-relaxed text-muted transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="hairline-t mt-12 flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-faint">
            © {new Date().getFullYear()} Jarvis. Built around your business.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <button
              type="button"
              data-motion-toggle=""
              aria-pressed="false"
              className="jarvis-motion-toggle text-[11px] text-faint"
            >
              Pause motion
            </button>
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] text-faint transition-colors hover:text-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
