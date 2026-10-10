"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { legalNav, navPanels, primaryNav } from "@/content/nav";
import { site } from "@/content/site";

import { Logo } from "./logo";

/**
 * Dismisses the sheet as it navigates. Closing here rather than reacting to a
 * pathname change keeps the sheet uncontrolled and avoids a cascading render.
 */
function CloseLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <SheetClose asChild>
      <Link href={href} className={className}>
        {children}
      </Link>
    </SheetClose>
  );
}

export function MobileNav({
  primaryCta = site.cta.primary,
}: {
  primaryCta?: { label: string; href: string };
}) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open navigation"
        className="inline-flex size-10 items-center justify-center rounded-sm text-muted transition-colors hover:text-paper xl:hidden"
      >
        <MenuIcon aria-hidden className="size-5" strokeWidth={1.5} />
      </SheetTrigger>

      <SheetContent aria-describedby={undefined}>
        <SheetTitle className="sr-only">Navigation</SheetTitle>

        <div className="hairline-b flex h-16 shrink-0 items-center justify-between px-6">
          <Logo />
          <SheetClose
            aria-label="Close navigation"
            className="inline-flex size-10 items-center justify-center rounded-sm text-muted transition-colors hover:text-paper"
          >
            <XIcon aria-hidden className="size-5" strokeWidth={1.5} />
          </SheetClose>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-8">
          {navPanels.map((panel) => (
            <div key={panel.label} className="flex flex-col">
              {/* The heading is what carries the architecture on mobile —
                  without it the two groups read as one flat list again. */}
              <span className="pt-6 pb-2 type-label-wide text-faint">
                {panel.label}
              </span>
              <p className="pb-2 text-xs leading-relaxed text-faint">
                Premium includes four AI agents. Other offers are available
                separately.
              </p>
              <Accordion type="single" collapsible className="flex flex-col">
                {panel.groups.map((pillar) =>
                  pillar.links.length === 0 ? (
                    <CloseLink
                      key={pillar.href}
                      href={pillar.href}
                      className="hairline-b flex items-center gap-2.5 py-4 text-base font-medium text-paper"
                    >
                      <pillar.icon
                        aria-hidden
                        className="size-4 text-cobalt-400"
                        strokeWidth={1.5}
                      />
                      {pillar.label}
                    </CloseLink>
                  ) : (
                    <AccordionItem key={pillar.href} value={pillar.href}>
                      <AccordionTrigger>
                        <span className="flex items-center gap-2.5">
                          <pillar.icon
                            aria-hidden
                            className="size-4 text-cobalt-400"
                            strokeWidth={1.5}
                          />
                          {pillar.label}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col gap-1 pl-6.5">
                          <li>
                            <CloseLink
                              href={pillar.href}
                              className="block py-1.5 text-sm text-cobalt-400"
                            >
                              Overview
                            </CloseLink>
                          </li>
                          {pillar.links.map((link) => (
                            <li key={link.href}>
                              <CloseLink
                                href={link.href}
                                className="block py-1.5 text-sm text-muted"
                              >
                                {link.label}
                              </CloseLink>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ),
                )}
              </Accordion>
            </div>
          ))}

          <div className="flex flex-col">
            {primaryNav.map((item) => (
              <CloseLink
                key={item.href}
                href={item.href}
                className="hairline-b py-4 text-base font-medium text-paper"
              >
                {item.label}
              </CloseLink>
            ))}
          </div>

          <nav
            aria-label="Legal"
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
          >
            {legalNav.map((item) => (
              <CloseLink
                key={item.href}
                href={item.href}
                className="text-xs text-faint"
              >
                {item.label}
              </CloseLink>
            ))}
          </nav>
        </div>

        <div className="hairline-t flex shrink-0 flex-col gap-3 px-6 py-5">
          <CloseLink
            href={site.appUrl}
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Sign in
          </CloseLink>
          <CloseLink
            href={primaryCta.href}
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            {primaryCta.label}
          </CloseLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}
