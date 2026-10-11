import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

const links = [
  { label: "Features", href: "/#crm-features" },
  { label: "Plans", href: "/pricing" },
  { label: "Products & Services", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Book a call", href: "/contact/#book-call" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink-950/95 backdrop-blur-xl">
      <Container
        width="wide"
        className="flex h-18 items-center justify-between gap-6 md:h-20"
      >
        <Logo animated={false} className="shrink-0" />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 xl:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-muted transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-3 xl:flex">
          <Link
            href={site.appUrl}
            className={buttonVariants({ variant: "ghost", size: "md" })}
          >
            Sign in
          </Link>
          <Link
            href="/pricing"
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            Explore plans
          </Link>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
