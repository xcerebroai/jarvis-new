"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import Link from "next/link";

import { navPanels, primaryNav, type NavGroup } from "@/content/nav";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Desktop navigation. Two panels rather than one: Products holds the things
 * you can buy, Services holds the work we do. A single "Platform" menu was
 * what made every offer read as a module of the same product.
 *
 * `onOpenChange` exists so the header can go solid while a panel is open. At
 * the top of the page the header is deliberately transparent, which leaves the
 * nav strip see-through above an opaque panel.
 */
export function MegaMenu({
  onOpenChange,
  primaryCta = site.cta.primary,
}: {
  onOpenChange?: (open: boolean) => void;
  primaryCta?: { label: string; href: string };
}) {
  return (
    <NavigationMenu.Root
      delayDuration={80}
      onValueChange={(value) => onOpenChange?.(value !== "")}
      className="relative hidden xl:flex"
    >
      <NavigationMenu.List className="flex items-center">
        {navPanels.map((panel) => (
          <NavigationMenu.Item key={panel.label}>
            <NavigationMenu.Trigger className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-paper data-[state=open]:text-paper">
              {panel.label}
              <ChevronDownIcon
                aria-hidden
                className="size-3.5 transition-transform duration-200 ease-standard group-data-[state=open]:rotate-180"
              />
            </NavigationMenu.Trigger>

            {/* The surface lives here, not only on the Viewport. The Viewport
                is the element Radix animates from zero height, so anything
                relying on it for a background renders over the page unbacked
                until that transition resolves. */}
            <NavigationMenu.Content className="absolute top-0 left-0 w-full rounded-lg bg-ink-850 data-[motion=from-end]:animate-none data-[motion=from-start]:animate-none">
              <PanelGroups groups={panel.groups} />

              <div className="hairline-t flex items-center justify-between bg-ink-900 px-8 py-4">
                <p className="text-sm text-muted">
                  Premium includes four AI agents. Other offers are available
                  separately. <span className="text-paper">{site.line}</span>
                </p>
                <NavigationMenu.Link asChild>
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-cobalt-400 transition-colors hover:text-paper"
                  >
                    {primaryCta.label}
                    <ArrowRightIcon aria-hidden className="size-3.5" />
                  </Link>
                </NavigationMenu.Link>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}

        {primaryNav.map((item) => (
          <NavigationMenu.Item key={item.href}>
            <NavigationMenu.Link asChild>
              <Link
                href={item.href}
                className="inline-flex items-center whitespace-nowrap rounded-sm px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>

      <div className="absolute top-full left-1/2 flex w-screen max-w-6xl -translate-x-1/2 justify-center">
        <NavigationMenu.Viewport className="mt-3 w-full origin-top overflow-hidden rounded-lg border border-line-strong bg-ink-850 shadow-raised transition-[height] duration-200 ease-standard data-[state=closed]:hidden" />
      </div>
    </NavigationMenu.Root>
  );
}

/**
 * Services is a single column today while Products is three, so the grid is
 * sized from the data rather than fixed at four — one item stretched across
 * four columns reads as a mistake.
 */
function PanelGroups({ groups }: { groups: NavGroup[] }) {
  return (
    <div
      className={cn(
        "grid gap-8 p-8",
        groups.length >= 3 && "grid-cols-3",
        groups.length === 2 && "grid-cols-2",
        groups.length === 1 && "max-w-md grid-cols-1",
      )}
    >
      {groups.map((group) => (
        <div key={group.href} className="flex flex-col gap-4">
          <NavigationMenu.Link asChild>
            <Link
              href={group.href}
              className="group flex flex-col gap-2 rounded-sm"
            >
              <span className="flex items-center gap-2">
                <group.icon
                  aria-hidden
                  className="size-4 text-cobalt-400"
                  strokeWidth={1.5}
                />
                <span className="font-display text-sm font-medium text-paper group-hover:text-cobalt-400">
                  {group.label}
                </span>
              </span>
              <span className="text-xs leading-relaxed text-faint">
                {group.summary}
              </span>
            </Link>
          </NavigationMenu.Link>

          {group.links.length > 0 ? (
            <ul className="flex flex-col gap-0.5 border-t border-line pt-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <NavigationMenu.Link asChild>
                    <Link
                      href={link.href}
                      className="block rounded-xs py-1.5 text-sm text-muted transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
