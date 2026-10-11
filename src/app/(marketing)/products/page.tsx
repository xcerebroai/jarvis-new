import { ArrowDownIcon, ArrowRightIcon, CheckIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { ServicePurchase } from "@/components/marketing/service-purchase";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  personalServices,
  quentinContactUrl,
  serviceCheckouts,
} from "@/content/personal-services";
import { coachingServices, xcerebroWebsite } from "@/content/products";
import { site } from "@/content/site";

const title = "Products & Services";
const description =
  "Custom DealMachine integration, one-on-one coaching with Quentin Flores, a tailored Jarvis CRM build, and custom AI agents for real estate investing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products/" },
  openGraph: { title: `${title} | Jarvis`, description, url: "/products/" },
  twitter: { title: `${title} | Jarvis`, description },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Jarvis / Products & Services"
        title="Expert help. Built around your business."
        description="Connect your tools, build a system that fits, or work directly with Quentin Flores. Choose the support that moves your real estate business forward."
      >
        <nav
          aria-label="Explore services"
          className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {personalServices.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="group flex items-center gap-3 rounded-lg border border-line-strong bg-ink-850/70 p-4 text-sm text-paper transition-colors hover:border-cobalt-400/60 hover:bg-ink-850"
            >
              <service.icon
                aria-hidden
                className="size-5 shrink-0 text-cobalt-400"
                strokeWidth={1.5}
              />
              <span className="flex-1">{service.shortName}</span>
              <ArrowDownIcon
                aria-hidden
                className="size-4 shrink-0 text-muted transition-transform group-hover:translate-y-0.5"
              />
            </a>
          ))}
        </nav>
        <p className="text-sm leading-relaxed text-muted">
          Looking for the CRM subscription?{" "}
          <Link
            href="/pricing"
            className="text-cobalt-400 underline underline-offset-4 hover:text-paper"
          >
            Compare Jarvis plans
          </Link>
          .
        </p>
      </PageHero>

      <Section
        tone="alt"
        className="py-12 md:py-16"
        aria-label="Specialist services"
      >
        <Container
          width="wide"
          className="grid items-start gap-6 lg:grid-cols-2"
        >
          {personalServices.map((service) => {
            const checkout = serviceCheckouts[service.id];
            return (
              <article
                key={service.id}
                id={service.id}
                aria-labelledby={`${service.id}-title`}
                className="relative flex h-full scroll-mt-24 flex-col overflow-hidden rounded-xl border border-line-strong bg-ink-950 p-6 sm:p-8"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-400/60 to-transparent"
                />
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-lg border border-cobalt-400/25 bg-cobalt-glow text-cobalt-400">
                    <service.icon
                      aria-hidden
                      className="size-6"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className="font-mono text-sm text-muted" aria-hidden>
                    {service.number} / 04
                  </span>
                </div>
                <p className="font-mono text-xs tracking-widest text-cobalt-400 uppercase">
                  {service.category}
                </p>
                <h2
                  id={`${service.id}-title`}
                  className="mt-3 text-h2 text-paper"
                >
                  {service.name}
                </h2>
                <p className="mt-4 font-display text-lg leading-relaxed text-paper">
                  {service.summary}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="my-7 flex flex-col gap-4">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-paper"
                    >
                      <CheckIcon
                        aria-hidden
                        className="mt-0.5 size-4 shrink-0 text-cobalt-400"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                {service.id === "one-on-one-coaching" && (
                  <div
                    className="mb-6 flex flex-wrap gap-x-5 gap-y-3"
                    aria-label="Included Skool programs"
                  >
                    {coachingServices.map((program) => (
                      <a
                        key={program.id}
                        href={program.href}
                        className="inline-flex items-center gap-2 text-sm text-cobalt-400 underline underline-offset-4 hover:text-paper"
                      >
                        {program.id === "real-estate-cheat-codes"
                          ? "REI Cheat Codes"
                          : program.name}
                        <ArrowRightIcon aria-hidden className="size-3.5" />
                      </a>
                    ))}
                  </div>
                )}
                {service.id === "custom-ai-agent" && (
                  <a
                    href={xcerebroWebsite}
                    className="mb-6 inline-flex items-center gap-2 self-start text-sm text-cobalt-400 underline underline-offset-4 hover:text-paper"
                  >
                    Explore Xcerebro
                    <ArrowRightIcon aria-hidden className="size-3.5" />
                  </a>
                )}
                <div className="mt-auto border-t border-line pt-6">
                  <p className="text-sm leading-relaxed text-muted">
                    {service.note}
                  </p>
                  {checkout && (
                    <div className="mt-6">
                      <ServicePurchase
                        id={service.id}
                        name={service.name}
                        checkout={checkout}
                      />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </Container>
      </Section>

      <Section
        aria-labelledby="purchase-details-title"
        className="py-14 md:py-20"
      >
        <Container
          width="wide"
          className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20"
        >
          <div>
            <p className="font-mono text-eyebrow text-cobalt-400 uppercase">
              Before you purchase
            </p>
            <h2 id="purchase-details-title" className="mt-4 text-h2 text-paper">
              Know what you’re choosing.
            </h2>
            <p className="mt-4 max-w-[45ch] text-sm leading-relaxed text-muted">
              These are separate purchases for tailored implementation and
              personal coaching. Review the included service, final checkout
              amount, and any ongoing charges before you pay.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="border-b border-line pb-6">
              <h3 className="text-lg text-paper">
                Your existing plan stays distinct
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The 12-session personal coaching package is separate from
                Premium plan mentorship and the two coaching sessions included
                with private onboarding. Explore{" "}
                <Link
                  href="/pricing"
                  className="text-cobalt-400 underline underline-offset-4 hover:text-paper"
                >
                  CRM plans
                </Link>{" "}
                or{" "}
                <Link
                  href="/onboarding"
                  className="text-cobalt-400 underline underline-offset-4 hover:text-paper"
                >
                  private onboarding
                </Link>{" "}
                for those offers.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-paper">
                Purchase terms and refund policy
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                All four products and services on this page are non-refundable,
                except where a refund is required by applicable law. You must
                review and agree to the{" "}
                <Link
                  href={site.termsUrl}
                  className="text-cobalt-400 underline underline-offset-4 hover:text-paper"
                >
                  Terms and Conditions
                </Link>{" "}
                before continuing to checkout.
              </p>
            </div>
            <div className="rounded-lg border border-cobalt-400/25 bg-cobalt-glow p-6">
              <a
                href={quentinContactUrl}
                className="inline-flex items-center gap-3 font-display text-lg text-paper hover:text-cobalt-400"
              >
                DM Q for custom pricing to save money.
                <ArrowRightIcon aria-hidden className="size-5 shrink-0" />
              </a>
              <p className="mt-2 text-sm text-muted">
                Message @qf_xcerebro on Instagram.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
