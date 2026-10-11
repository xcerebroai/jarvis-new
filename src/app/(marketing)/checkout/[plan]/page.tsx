import { CheckIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { ServicePurchase } from "@/components/marketing/service-purchase";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  premiumAgentRoles,
  pricingGroups,
  pricingPlans,
} from "@/content/pricing";
import { getBillingConfiguration } from "@/lib/billing-config";

type CheckoutPageProps = { params: Promise<{ plan: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...pricingPlans.map((plan) => ({ plan: plan.id })),
    { plan: "basic" },
  ];
}

// Keep the previously shared Basic checkout URL working after the rename.
function findPlanIndex(planId: string) {
  const id = planId === "basic" ? "standard" : planId;
  return pricingPlans.findIndex((item) => item.id === id);
}

export async function generateMetadata({
  params,
}: CheckoutPageProps): Promise<Metadata> {
  const { plan: planId } = await params;
  const plan = pricingPlans[findPlanIndex(planId)];
  if (!plan) notFound();
  return {
    title: `Jarvis CRM ${plan.name} checkout`,
    description: `Review the Jarvis CRM ${plan.name} monthly subscription.`,
    robots: { index: false, follow: false },
  };
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { plan: planId } = await params;
  const planIndex = findPlanIndex(planId);
  if (planIndex === -1) notFound();
  const plan = pricingPlans[planIndex];
  const billing = getBillingConfiguration();
  const checkout = billing.destinations[plan.id];

  return (
    <>
      <PageHero
        eyebrow="Jarvis CRM / subscription"
        title={`Your ${plan.name} plan`}
        description="Review your plan, then continue to checkout to enter your payment details."
      />
      <Section tone="alt" className="pt-10 md:pt-12">
        <Container
          width="wide"
          className="grid items-start gap-10 lg:grid-cols-[1fr_24rem] lg:gap-16"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-h2 text-paper">
                What comes with {plan.name}
              </h2>
              <p className="max-w-[58ch] leading-relaxed text-muted">
                {plan.summary}
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {pricingGroups.map((group) => {
                const features = group.features.filter(
                  (feature) => feature.values[planIndex] !== false,
                );
                if (!features.length) return null;
                return (
                  <div key={group.section} className="flex flex-col gap-4">
                    <h3 className="type-label-wide text-faint">
                      {group.section}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {features.map((feature) => (
                        <li
                          key={feature.label}
                          className="flex items-start gap-2.5 text-sm text-muted"
                        >
                          <CheckIcon
                            aria-hidden
                            className="mt-0.5 size-4 shrink-0 text-cobalt-400"
                          />
                          <span>
                            {feature.label}
                            {typeof feature.values[planIndex] === "string"
                              ? ` (${feature.values[planIndex]})`
                              : ""}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            {plan.id === "premium" ? (
              <div className="rounded-lg border border-cobalt-500/30 bg-cobalt-glow p-6">
                <span className="type-label-wide text-cobalt-400">
                  Four AI agents included
                </span>
                <h3 className="mt-2 font-display text-h3 text-paper">
                  Four agents, each with a defined role
                </h3>
                <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted">
                  In a real estate setup, the four roles can cover seller
                  conversations, CRM coordination, property analysis, and
                  agreement preparation. Your team approves offers and final
                  terms.
                </p>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {premiumAgentRoles.map((role) => (
                    <li key={role.title} className="flex flex-col gap-1">
                      <span className="font-display text-sm font-medium text-paper">
                        {role.title}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">
                        {role.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <aside
            aria-label="Subscription summary"
            className="flex flex-col gap-6 rounded-lg border border-line-strong bg-ink-950 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2">
              <span className="type-label-wide text-cobalt-400">
                Jarvis CRM
              </span>
              <h2 className="font-display text-h3 text-paper">{plan.name}</h2>
            </div>

            {checkout ? (
              <div className="flex flex-col gap-3">
                <ServicePurchase
                  id={`checkout-${plan.id}`}
                  name={`Jarvis CRM ${plan.name}`}
                  checkout={{
                    href: checkout.href,
                    price: `${plan.price}/month`,
                    billing:
                      "Monthly subscription in USD. Renews until canceled. Final amount shown at checkout. Communications usage and separately scoped services may cost extra.",
                  }}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Button
                  disabled
                  size="lg"
                  aria-describedby="checkout-availability"
                >
                  Checkout coming soon
                </Button>
                <p
                  id="checkout-availability"
                  className="text-sm leading-relaxed text-muted"
                >
                  Online checkout for this plan is not open yet. Please check
                  back soon.
                </p>
              </div>
            )}

            <p className="border-t border-line pt-5 text-xs leading-relaxed text-faint">
              {plan.id === "premium"
                ? "Four AI agents are included in Premium. Additional xCerebro deployments, Lead Scraper, communications usage, and custom implementation are priced separately."
                : "Premium includes four AI agents. Standalone xCerebro deployments, Lead Scraper, communications usage, and custom implementation are priced separately."}
            </p>
            <Link
              href="/pricing"
              className="text-sm font-medium text-cobalt-400 hover:text-paper"
            >
              Compare all plans
            </Link>
            <Link
              href="/private-onboarding"
              className="border-t border-line pt-5 text-sm leading-relaxed text-muted hover:text-paper"
            >
              Need setup help? View private onboarding for a one-time $300
              payment.
            </Link>
          </aside>
        </Container>
      </Section>
    </>
  );
}
