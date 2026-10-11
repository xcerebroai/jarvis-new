import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Find Jarvis product guides, implementation information, and account support.",
};

const resources = [
  {
    title: "Jarvis guides",
    body: "Find your workspace, compare plans, and explore onboarding and product information.",
    href: "/resources/docs",
  },
  {
    title: "Implementation guide",
    body: "Prepare your goals, workflows, and tools for a conversation about your project scope.",
    href: "/resources/implementation",
  },
  {
    title: "Product information",
    body: "Explore available services and ask about the features or changes your business needs.",
    href: "/resources/changelog",
  },
  {
    title: "Account and service support",
    body: "Open your workspace or contact Quentin about a question or issue with your Jarvis setup.",
    href: "/status",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Everything behind the build"
        description="Reference material for teams running on Jarvis and those deciding whether to."
      />

      <Section tone="alt">
        <Container width="wide">
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group flex flex-col gap-2 bg-ink-950 p-6 transition-colors hover:bg-ink-900"
              >
                <span className="flex items-center gap-2 font-display text-base font-medium text-paper">
                  {resource.title}
                  <ArrowRightIcon
                    aria-hidden
                    className="size-3.5 text-faint transition-colors group-hover:text-cobalt-400"
                  />
                </span>
                <span className="text-sm leading-relaxed text-muted">
                  {resource.body}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
