import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { pricingPlans } from "@/content/pricing";
import { getBillingConfiguration } from "@/lib/billing-config";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Choose your CRM plan",
  description:
    "Choose Jarvis CRM Standard at $97/month, Elite at $197/month, or Premium at $297/month and continue to payment.",
  robots: { index: false, follow: false },
};

export default function ChoosePlanPage() {
  const { destinations } = getBillingConfiguration();

  return (
    <>
      <PageHero
        eyebrow="Build My System"
        title="Choose your Jarvis CRM plan"
        description="Select a monthly plan to continue to payment."
      />
      <Section tone="alt" className="pt-10 md:pt-12">
        <Container width="wide" className="flex flex-col gap-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {pricingPlans.map((plan) => {
              const checkout = destinations[plan.id];

              return (
                <article
                  key={plan.id}
                  aria-labelledby={`plan-${plan.id}`}
                  className={cn(
                    "flex min-w-0 flex-col gap-6 rounded-lg border p-6 sm:p-8",
                    plan.featured
                      ? "border-cobalt-500/50 bg-cobalt-glow"
                      : "border-line bg-ink-950",
                  )}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2
                      id={`plan-${plan.id}`}
                      className="font-display text-h3 text-paper"
                    >
                      {plan.name}
                    </h2>
                    {plan.featured ? (
                      <span className="type-label rounded-full border border-cobalt-500/30 bg-cobalt-500/10 px-2.5 py-0.5 text-cobalt-400">
                        Most popular
                      </span>
                    ) : null}
                  </div>
                  <p className="flex flex-wrap items-baseline gap-2">
                    <span className="type-metric text-display-md text-paper">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted">{plan.cadence}</span>
                  </p>
                  <p className="flex-1 text-sm leading-relaxed text-muted">
                    {plan.summary}
                  </p>
                  <div className="flex flex-col gap-3">
                    {checkout ? (
                      <>
                        {checkout.mode === "test" ? (
                          <p className="text-sm text-cobalt-400">
                            Test checkout. No real payment will be taken.
                          </p>
                        ) : null}
                        <a
                          href={checkout.href}
                          className={cn(
                            buttonVariants({
                              variant: plan.featured ? "primary" : "secondary",
                              size: "lg",
                            }),
                            "h-auto min-h-12 whitespace-normal px-4 py-3 text-sm sm:text-base",
                          )}
                        >
                          <span>
                            {checkout.mode === "test" ? "Test" : "Choose"}{" "}
                            {plan.name}
                          </span>
                          <ArrowRightIcon
                            aria-hidden
                            className="size-4 shrink-0"
                          />
                        </a>
                      </>
                    ) : (
                      <>
                        <Button disabled className="w-full">
                          Checkout unavailable
                        </Button>
                        <p className="text-sm text-muted">
                          Online checkout for this plan is not open yet.
                        </p>
                      </>
                    )}
                    <Link
                      href={`/checkout/${plan.id}`}
                      className="text-center text-sm text-cobalt-400 hover:text-paper"
                    >
                      View {plan.name} details
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-[65ch] text-sm leading-relaxed text-muted">
              Plans are billed monthly. Premium includes four AI agents. Private
              onboarding, standalone or additional xCerebro deployments, Lead
              Scraper, and Custom Builds are available separately.
            </p>
            <Link
              href="/pricing#compare"
              className="shrink-0 text-sm font-medium text-cobalt-400 hover:text-paper"
            >
              Compare all features
            </Link>
          </div>
          <Link
            href="/onboarding"
            className="w-fit text-sm text-cobalt-400 hover:text-paper"
          >
            Need help getting set up? View $300 private onboarding.
          </Link>
        </Container>
      </Section>
    </>
  );
}
