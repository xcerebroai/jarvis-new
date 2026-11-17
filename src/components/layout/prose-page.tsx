import type { ReactNode } from "react";

import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type ProsePageProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

/** Shared shell for text-led pages (legal, resources, status). */
export function ProsePage({
  eyebrow,
  title,
  description,
  children,
}: ProsePageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <Section tone="alt">
        <Container className="flex max-w-[70ch] flex-col gap-5 text-base leading-relaxed text-muted">
          {children}
        </Container>
      </Section>
    </>
  );
}

/** Unfinished editorial content stays outside published pages. */
export function PendingNotice({ children: _children }: { children: ReactNode }) {
  return null;
}
