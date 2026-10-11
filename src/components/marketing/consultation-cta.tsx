import { ArrowUpRightIcon, CalendarDaysIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ConsultationCta() {
  return (
    <Section aria-labelledby="consultation-heading" className="py-14 md:py-20">
      <Container width="wide">
        <div className="flex flex-col gap-8 rounded-xl border border-cobalt-400/25 bg-cobalt-glow p-7 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 font-mono text-xs tracking-widest text-cobalt-400 uppercase">
              <CalendarDaysIcon aria-hidden className="size-4" /> Talk it through
            </p>
            <h2 id="consultation-heading" className="font-display text-h2 text-paper">
              Find the right fit for your business.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Have questions about Jarvis? Tell us what you need and book a
              30-minute Zoom information call with Quentin Flores.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-3">
            <Link href="/contact/#book-call" className={buttonVariants({ size: "lg" })}>
              Book a call with Quentin
              <ArrowUpRightIcon aria-hidden className="size-4" />
            </Link>
            <p className="text-xs text-muted">No purchase required. Text reminders are optional.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
