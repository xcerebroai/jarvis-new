import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { coachingServices, offers } from "@/content/products";

const summaries: Record<string, string> = {
  agents: "AI agents for follow-up, appointment setting, and assigned tasks.",
  scraper: "Find and prepare leads from public records and selected sources.",
  builds: "Pipelines, automations, and integrations built around your process.",
};

const catalogItems = [
  ...offers
    .filter((offer) => offer.id !== "crm")
    .map((offer) => ({
      id: offer.id,
      name: offer.name,
      href: offer.href,
      icon: offer.icon,
      summary: summaries[offer.id],
      category:
        offer.id === "agents"
          ? "Also available separately"
          : offer.kind === "product"
            ? "Separate product"
            : "Separate service",
      pricing: offer.pricing,
    })),
];

/** Brief introductions only; product details and demos live on their own pages. */
export function ProductsServices() {
  return (
    <Section
      id="products"
      aria-labelledby="other-products-heading"
      tone="alt"
      className="py-12 md:py-16"
    >
      <Container width="wide" className="flex flex-col gap-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="type-label-wide text-cobalt-400">
              Products &amp; Services
            </span>
            <h2
              id="other-products-heading"
              className="font-display text-h3 text-paper"
            >
              More ways to build your system.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              Premium includes four AI agents. Standalone or additional xCerebro
              deployments, Lead Scraper, Custom Builds, and our coaching
              programs are separate offers. Choose them on their own or ask
              about an optional bundle.
            </p>
          </div>
          <Link
            href="/pricing#bundles"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm text-cobalt-400 hover:text-paper"
          >
            View CRM bundle options
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {catalogItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex min-w-0 items-start gap-4 rounded-lg border border-line bg-ink-950 p-5 hover:border-cobalt-500/50 hover:bg-ink-850"
            >
              <item.icon
                aria-hidden
                className="mt-0.5 size-5 shrink-0 text-cobalt-400"
                strokeWidth={1.5}
              />
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                  {item.category}
                </span>
                <h3 className="font-display text-base font-medium text-paper">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
                {item.id === "scraper" ? (
                  <p className="mt-3 font-display text-sm font-medium text-cobalt-400">
                    {item.pricing}
                  </p>
                ) : null}
              </div>
              <ArrowRightIcon
                aria-hidden
                className="mt-1 size-4 shrink-0 text-faint group-hover:text-cobalt-400"
              />
            </Link>
          ))}
        </div>

        <div className="hairline-t mt-3 pt-10 md:pt-12">
          <div className="max-w-3xl">
            <span className="type-label-wide text-cobalt-400">
              Education &amp; Coaching
            </span>
            <h3 className="mt-3 font-display text-h3 text-paper">
              Want to learn how to build and use these systems?
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              Learn with Quentin Flores inside two hands-on coaching
              communities. Choose practical AI training for your business or
              real estate education focused on finding opportunities, working
              complex deals, and using automation in the process.
            </p>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {coachingServices.map((program) => (
              <Link
                key={program.id}
                href={program.href}
                className="group flex flex-col rounded-lg border border-line bg-ink-950 p-6 transition-colors hover:border-cobalt-500/50 hover:bg-ink-850 md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-md border border-cobalt-400/25 bg-cobalt-glow text-cobalt-400">
                      <program.icon
                        aria-hidden
                        className="size-5"
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                      Coaching program
                    </span>
                  </div>
                  <ArrowRightIcon
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-faint transition-colors group-hover:text-cobalt-400"
                  />
                </div>

                <h4 className="mt-5 font-display text-xl font-medium text-paper">
                  {program.name}
                </h4>
                <p className="mt-1 font-display text-sm text-cobalt-400">
                  {program.promise}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {program.summary}
                </p>

                <ul className="mt-5 grid gap-2 text-sm text-muted sm:grid-cols-2">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckIcon
                        aria-hidden
                        className="mt-0.5 size-3.5 shrink-0 text-cobalt-400"
                        strokeWidth={1.75}
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-cobalt-400 group-hover:text-paper">
                  {program.cta}
                  <ArrowRightIcon aria-hidden className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
