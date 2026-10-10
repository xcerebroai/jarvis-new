import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { pricingGroups, pricingPlans } from "@/content/pricing";
import { brand } from "@/content/products";
import { cn } from "@/lib/cn";

/**
 * CRM pricing, on the homepage. Someone deciding on the CRM should not have to
 * navigate away to find out what it costs.
 *
 * Plan names and prices come from `content/pricing.ts`, which is read from the
 * live site — so this cannot drift from the pricing page. Feature counts are
 * derived, never hand-typed.
 */
function includedCount(planIndex: number) {
  return pricingGroups.reduce(
    (total, group) =>
      total +
      group.features.filter((feature) => feature.values[planIndex] !== false)
        .length,
    0,
  );
}

const totalFeatures = pricingGroups.reduce(
  (total, group) => total + group.features.length,
  0,
);

export function CrmPricing() {
  return (
    <Section id="crm-pricing">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow={`${brand.crm} / pricing`}
          title="One subscription, published"
          description="The CRM has a price you can read without a call. Plans differ in how much of the deal-flow tooling comes with them."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col gap-6 rounded-lg border p-6",
                plan.featured
                  ? "border-cobalt-500/50 bg-cobalt-glow"
                  : "border-line bg-ink-900",
              )}
            >
              <div className="flex flex-col gap-2">
                {plan.featured ? (
                  <span className="inline-flex w-fit items-center rounded-full border border-cobalt-500/30 bg-cobalt-500/10 px-2.5 py-0.5 type-label text-cobalt-400">
                    Most popular
                  </span>
                ) : null}
                <h3 className="font-display text-h3 text-paper">{plan.name}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {plan.summary}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="type-metric text-display-md text-paper">
                  {plan.price}
                </span>
                <span className="type-label text-faint">{plan.cadence}</span>
              </div>

              <p className="flex items-center gap-2 text-sm text-muted">
                <CheckIcon
                  aria-hidden
                  className="size-3.5 shrink-0 text-cobalt-400"
                  strokeWidth={2}
                />
                {includedCount(index)} of {totalFeatures} capabilities included
              </p>

              <Link
                href={`/checkout/${plan.id}`}
                className={cn(
                  buttonVariants({
                    variant: plan.featured ? "primary" : "secondary",
                    size: "md",
                  }),
                  "mt-auto",
                )}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[62ch] text-xs leading-relaxed text-faint">
            Premium includes four AI agents. Standalone or additional{" "}
            {brand.agents} deployments, {brand.scraper}, and {brand.builds} are
            available separately.
          </p>
          <Link
            href="/pricing"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-cobalt-400 transition-colors hover:text-paper"
          >
            Compare every plan
            <ArrowRightIcon aria-hidden className="size-3.5" />
          </Link>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border border-line bg-ink-900 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[66ch] text-sm leading-relaxed text-muted">
            Want help getting set up? Private onboarding includes A2P setup,
            website creation, and two coaching sessions for a one-time $300
            payment.
          </p>
          <Link
            href="/onboarding"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-cobalt-400 hover:text-paper"
          >
            View private onboarding
            <ArrowRightIcon aria-hidden className="size-3.5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
