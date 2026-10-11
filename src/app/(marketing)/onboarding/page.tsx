import { CheckIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { ServicePurchase } from "@/components/marketing/service-purchase";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { privateOnboarding } from "@/content/onboarding";
import { getPrivateOnboardingCheckout } from "@/lib/billing-config";

export const metadata: Metadata = {
  title: "Private onboarding",
  description:
    "Private Jarvis onboarding for a one-time $300 payment: A2P setup, website creation, and two one-on-one coaching sessions.",
};

export default function PrivateOnboardingPage() {
  const checkout = getPrivateOnboardingCheckout();

  return (
    <>
      <PageHero
        eyebrow="Jarvis CRM / private onboarding"
        title="Set up your system with us"
        description={privateOnboarding.summary}
      />
      <Section tone="alt" className="pt-10 md:pt-12">
        <Container
          width="wide"
          className="grid items-start gap-10 lg:grid-cols-[1fr_24rem] lg:gap-16"
        >
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-h2 text-paper">
              What your onboarding includes
            </h2>
            <ul className="flex flex-col gap-6">
              {privateOnboarding.includes.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 border-b border-line pb-6 last:border-0"
                >
                  <CheckIcon
                    aria-hidden
                    className="mt-1 size-5 shrink-0 text-cobalt-400"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-lg text-paper">
                      {item.title}
                    </h3>
                    <p className="max-w-[52ch] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-h3 text-paper">
                Pay once, then book your time
              </h2>
              <p className="max-w-[58ch] leading-relaxed text-muted">
                After successful payment, checkout will take you to the
                onboarding calendar. Choose a time for your first session. Your
                package includes two private coaching sessions in total.
              </p>
            </div>
          </div>

          <aside
            aria-label="Private onboarding summary"
            className="flex min-w-0 flex-col gap-6 rounded-lg border border-line-strong bg-ink-950 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2">
              <span className="type-label-wide text-cobalt-400">
                Private onboarding
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              A2P setup, website creation, and two one-on-one coaching sessions.
              Your CRM subscription is billed separately.
            </p>
            <ServicePurchase
              id="onboarding-checkout"
              name="Private onboarding"
              checkout={{
                href: checkout.href,
                price: privateOnboarding.price,
                billing:
                  "One-time payment in USD. Final amount shown at checkout.",
              }}
            />
            <Link
              href="/pricing"
              className="text-sm font-medium text-cobalt-400 hover:text-paper"
            >
              Compare CRM plans
            </Link>
          </aside>
        </Container>
      </Section>
    </>
  );
}
