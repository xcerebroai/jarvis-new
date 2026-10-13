import {
  ArrowDownIcon,
  ArrowRightIcon,
  BotIcon,
  CheckIcon,
  DatabaseIcon,
  LayersIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ServicePurchase } from "@/components/marketing/service-purchase";
import { ConsultationCta } from "@/components/marketing/consultation-cta";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { privateOnboarding } from "@/content/onboarding";
import {
  elitePaymentLink,
  premiumPaymentLink,
  standardPaymentLink,
} from "@/content/payments";
import {
  personalServices,
  quentinContactUrl,
  serviceCheckouts,
} from "@/content/personal-services";
import { eliteAgentRoles, pricingPlans } from "@/content/pricing";
import { coachingServices, xcerebroWebsite } from "@/content/products";
import { communityMembershipPolicy } from "@/content/community-membership";
import { site } from "@/content/site";
import { getPrivateOnboardingCheckout } from "@/lib/billing-config";
import { cn } from "@/lib/cn";

const title = "Products & Services";
const description =
  "Explore Jarvis CRM plans, custom builds, AI agents, DealMachine integration, Lead Scraper, private onboarding, and coaching with Quentin Flores.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products/" },
  openGraph: { title: `${title} | Jarvis`, description, url: "/products/" },
  twitter: { title: `${title} | Jarvis`, description },
};

const catalogLinks = [
  { label: "CRM plans", href: "#crm", detail: "Your everyday workspace" },
  {
    label: "Setup & custom services",
    href: "#onboarding",
    detail: "Built around your process",
  },
  {
    label: "Lead sourcing & AI",
    href: "#lead-scraper",
    detail: "Connect the next piece",
  },
  {
    label: "Coaching & communities",
    href: "#one-on-one-coaching",
    detail: "Learn with Quentin",
  },
  {
    label: "Bundles & broader builds",
    href: "#bundles",
    detail: "Bring the system together",
  },
] as const;

const crmDetails = {
  standard: {
    href: standardPaymentLink,
    intro:
      "The essentials for organizing your leads and running your follow-up in one place.",
    includes: [
      "CRM and pipeline management",
      "Unlimited sales funnels and a website builder",
      "Surveys, forms, bookings, and appointments",
      "Document signing",
      "AI automation and workflow automations",
      "Email marketing and two-way SMS marketing",
      "Tracking and analytics",
    ],
  },
  elite: {
    href: elitePaymentLink,
    intro:
      "Your CRM foundation, with focused AI support for realtor outreach and the buyer side of your deals.",
    includes: [
      "Every Standard plan feature",
      "Realtor Outreach AI",
      "Disposition AI",
      "Buyers list with 2M+ contacts",
      "Exclusive Skool community access",
    ],
  },
  premium: {
    href: premiumPaymentLink,
    intro:
      "Everything in Elite, plus a four-agent team and full mentorship access.",
    includes: [
      "Every Elite plan feature",
      "Four AI agents included",
      "Full mentorship access",
      "CRM, outreach, disposition, and community in one plan",
    ],
  },
} as const;

const communityDetails = {
  "ai-cheat-codes": [
    "Beginner-friendly AI education for business owners",
    "AI employee and lead-generation bot training",
    "Courses, prompts, templates, and recordings",
    "Live training on AI tools and practical workflows",
  ],
  "real-estate-cheat-codes": [
    "Distressed-property investing and county-data education",
    "County-data automations, chatbots, and county bots",
    "Title and deed strategies explained",
    "Q&As and deal-review breakdowns",
    "Contracts, scripts, templates, and community support",
  ],
} as const;

const bundles = [
  {
    name: "CRM + Lead Scraper",
    description:
      "Bring lead sourcing and preparation into the workspace where your team follows up.",
    includes: [
      "Jarvis CRM with sourcing scoped to your market",
      "Cleanup, deduplication, and available enrichment",
      "Lead scoring and routing into your process",
    ],
  },
  {
    name: "CRM + Xcerebro",
    description:
      "Connect your CRM to AI roles built around the conversations and tasks you need help with.",
    includes: [
      "Jarvis CRM with scoped AI agent roles",
      "Conversation handling and workflow connections",
      "Approval rules and agent activity logging",
    ],
  },
  {
    name: "Custom CRM bundle",
    description:
      "Bring CRM, AI, lead sourcing, and custom implementation together in one agreed plan.",
    includes: [
      "CRM, AI agents, and lead sourcing scoped together",
      "Workflows and integrations for your operation",
      "A defined implementation plan and quote",
    ],
  },
] as const;

function Inclusions({
  items,
  explainEliteRoles = false,
}: {
  items: readonly string[];
  explainEliteRoles?: boolean;
}) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-relaxed text-paper"
        >
          <CheckIcon
            aria-hidden
            className="mt-0.5 size-4 shrink-0 text-cobalt-400"
          />
          <span>
            <span className="block">{item}</span>
            {explainEliteRoles &&
            eliteAgentRoles.some((role) => role.title === item) ? (
              <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                {
                  eliteAgentRoles.find((role) => role.title === item)
                    ?.description
                }
              </span>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CatalogHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 grid gap-5 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20">
      <div>
        <p className="mb-4 text-xs font-medium tracking-[0.13em] text-cobalt-400 uppercase">
          <span className="mr-4 text-muted">{number}</span>
          {eyebrow}
        </p>
        <h2 className="max-w-[22ch] text-h2 text-balance text-paper md:text-display-md">
          {title}
        </h2>
      </div>
      <p className="max-w-[55ch] text-base leading-relaxed text-muted">
        {description}
      </p>
    </div>
  );
}

function ContactLink({ label = "Discuss your scope" }: { label?: string }) {
  return (
    <a
      href={quentinContactUrl}
      className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-cobalt-400 underline-offset-4 hover:text-paper hover:underline"
    >
      {label}
      <ArrowRightIcon aria-hidden className="size-4 shrink-0" />
    </a>
  );
}

export default function ProductsPage() {
  const onboardingCheckout = getPrivateOnboardingCheckout();
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-ink-950 pt-16 pb-14 md:pt-24 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(40,98,236,0.12),transparent_55%)]"
        />
        <Container
          width="wide"
          className="relative grid items-start gap-12 lg:grid-cols-[1.25fr_0.85fr] lg:gap-20"
        >
          <div>
            <p className="mb-6 text-xs font-medium tracking-[0.14em] text-cobalt-400 uppercase">
              Jarvis / Products & Services
            </p>
            <h1 className="max-w-[12ch] font-display text-[clamp(2.8rem,5.8vw,5.3rem)] leading-[1.05] tracking-[-0.05em] text-paper">
              Your business.
              <br />
              <span className="text-cobalt-400">Your next step.</span>
            </h1>
            <p className="mt-7 max-w-[48ch] text-lg leading-relaxed text-muted">
              Run your day in Jarvis. Connect your lead sources, build the
              workflows you need, and learn directly from Quentin Flores. Choose
              a starting point that fits your business.
            </p>
            <a
              href="#crm"
              className={cn(buttonVariants({ size: "lg" }), "mt-8")}
            >
              Explore the catalog
              <ArrowDownIcon aria-hidden className="size-4" />
            </a>
          </div>
          <nav
            aria-label="Product categories"
            className="overflow-hidden rounded-xl border border-line-strong bg-ink-850/70"
          >
            <p className="border-b border-line px-6 py-5 text-xs font-medium tracking-[0.12em] text-muted uppercase">
              Find your starting point
            </p>
            {catalogLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-5 border-b border-line px-6 py-5 transition-colors last:border-0 hover:bg-ink-800"
              >
                <span
                  aria-hidden
                  className="font-display text-sm text-cobalt-400"
                >
                  0{index + 1}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-medium text-paper">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-xs text-muted">
                    {link.detail}
                  </span>
                </span>
                <ArrowDownIcon
                  aria-hidden
                  className="size-4 shrink-0 text-muted transition-transform group-hover:translate-y-1"
                />
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <Section id="crm" className="scroll-mt-20">
        <Container width="wide">
          <CatalogHeading
            number="01"
            eyebrow="Jarvis CRM"
            title="A home for your daily work."
            description="Keep contacts, conversations, pipelines, appointments, and follow-up together. Choose the monthly plan with the tools and support your business needs."
          />
          <div className="grid items-stretch gap-5 xl:grid-cols-3">
            {pricingPlans.map((plan) => {
              const detail = crmDetails[plan.id];
              return (
                <article
                  key={plan.id}
                  aria-labelledby={`catalog-${plan.id}-title`}
                  className={cn(
                    "relative flex min-w-0 flex-col rounded-xl border bg-ink-850 p-6 sm:p-7",
                    plan.featured
                      ? "border-cobalt-400/60"
                      : "border-line-strong",
                  )}
                >
                  <div className="mb-5 flex min-h-6 items-center justify-between gap-3">
                    <LayersIcon
                      aria-hidden
                      className="size-5 text-cobalt-400"
                      strokeWidth={1.5}
                    />
                    {plan.featured ? (
                      <span className="rounded-full border border-cobalt-400/30 bg-cobalt-glow px-3 py-1 text-xs text-cobalt-400">
                        Featured plan
                      </span>
                    ) : null}
                  </div>
                  <h3
                    id={`catalog-${plan.id}-title`}
                    className="text-h2 text-paper"
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-3 mb-6 min-h-[4.5rem] text-sm leading-relaxed text-muted">
                    {detail.intro}
                  </p>
                  <Inclusions
                    items={detail.includes}
                    explainEliteRoles={plan.id === "elite"}
                  />
                  <div className="mt-auto pt-8">
                    <div className="border-t border-line pt-6">
                      <ServicePurchase
                        id={`catalog-${plan.id}`}
                        name={`Jarvis ${plan.name}`}
                        checkout={{
                          price: `${plan.price}/month`,
                          href: detail.href,
                          billing:
                            "Monthly subscription in USD. Renews until canceled. Final amount shown at checkout.",
                        }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-7 flex flex-col gap-4 rounded-lg border border-line bg-ink-900 p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <p className="max-w-[84ch] text-sm leading-relaxed text-muted">
              Premium includes four AI agents. Communications usage, additional
              agent deployments, Lead Scraper, and separately scoped services
              can carry additional charges. Review your checkout and agreed
              scope before purchasing.
            </p>
            <Link
              href="/pricing"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-cobalt-400 hover:text-paper"
            >
              Compare every feature
              <ArrowRightIcon aria-hidden className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="onboarding" tone="alt" className="scroll-mt-20">
        <Container
          width="wide"
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20"
        >
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.13em] text-cobalt-400 uppercase">
              02 / Get set up
            </p>
            <h2 className="max-w-[20ch] text-h2 text-balance text-paper md:text-display-md">
              Start with a little guidance.
            </h2>
            <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-muted">
              Private onboarding helps you set up Jarvis and understand the
              tools you will use day to day.
            </p>
            <dl className="mt-8 divide-y divide-line">
              {privateOnboarding.includes.map((item) => (
                <div key={item.title} className="py-5 first:pt-0">
                  <dt className="font-display text-lg text-paper">
                    {item.title}
                  </dt>
                  <dd className="mt-2 max-w-[58ch] text-sm leading-relaxed text-muted">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <aside
            aria-label="Private onboarding purchase"
            className="self-start rounded-xl border border-line-strong bg-ink-950 p-6 sm:p-8"
          >
            <h3 className="mb-3 text-h3 text-paper">Private onboarding</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Pay once, then choose your first session after successful
              checkout. Two private coaching sessions are included. Your CRM
              subscription is billed separately.
            </p>
            <ServicePurchase
              id="catalog-onboarding"
              name="Private onboarding"
              checkout={{
                price: privateOnboarding.price,
                href: onboardingCheckout.href,
                billing:
                  "One-time payment in USD. Final amount shown at checkout.",
              }}
            />
          </aside>
        </Container>
      </Section>

      <Section id="custom-services" className="scroll-mt-20">
        <Container width="wide">
          <CatalogHeading
            number="03"
            eyebrow="Custom services & personal coaching"
            title="Support built around you."
            description="Connect the tools you already use, shape your CRM, build a custom agent, or work one-on-one with Quentin. Each offer has its own scope and purchase."
          />
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {personalServices.map((service) => (
              <article
                key={service.id}
                id={service.id}
                aria-labelledby={`${service.id}-title`}
                className="relative flex min-w-0 scroll-mt-24 flex-col overflow-hidden rounded-xl border border-line-strong bg-ink-850 p-6 sm:p-8"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-400/70 to-transparent"
                />
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-lg border border-cobalt-400/25 bg-cobalt-glow text-cobalt-400">
                    <service.icon
                      aria-hidden
                      className="size-6"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className="text-xs font-medium tracking-widest text-muted uppercase">
                    {service.category}
                  </span>
                </div>
                <h3 id={`${service.id}-title`} className="text-h2 text-paper">
                  {service.name}
                </h3>
                <p className="mt-4 font-display text-lg leading-relaxed text-paper">
                  {service.summary}
                </p>
                <p className="mt-3 mb-7 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <Inclusions items={service.includes} />
                {service.id === "one-on-one-coaching" ? (
                  <div
                    className="mt-6 flex flex-wrap gap-x-5 gap-y-3"
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
                ) : null}
                {service.id === "custom-ai-agent" ? (
                  <a
                    href={xcerebroWebsite}
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm text-cobalt-400 underline underline-offset-4 hover:text-paper"
                  >
                    Explore Xcerebro
                    <ArrowRightIcon aria-hidden className="size-3.5" />
                  </a>
                ) : null}
                <div className="mt-auto pt-7">
                  <p className="mb-6 text-sm leading-relaxed text-muted">
                    {service.note}
                  </p>
                  <div className="border-t border-line pt-6">
                    <ServicePurchase
                      id={service.id}
                      name={service.name}
                      checkout={serviceCheckouts[service.id]}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="alt" aria-label="Lead sourcing and additional AI agents">
        <Container width="wide">
          <CatalogHeading
            number="04"
            eyebrow="Lead sourcing & AI"
            title="Connect the next piece."
            description="Add lead preparation for your market or explore a broader AI deployment. These offers are available separately from your CRM subscription."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <article
              id="lead-scraper"
              className="flex scroll-mt-24 flex-col rounded-xl border border-line-strong bg-ink-950 p-6 sm:p-8"
            >
              <DatabaseIcon
                aria-hidden
                className="mb-6 size-7 text-cobalt-400"
                strokeWidth={1.5}
              />
              <h3 className="text-h2 text-paper">Lead Scraper</h3>
              <p className="mt-3 font-display text-2xl text-cobalt-400">
                $500 <span className="text-base text-muted">per county</span>
              </p>
              <p className="mt-4 mb-6 text-sm leading-relaxed text-muted">
                Turn county and public-record data into organized leads your
                team can work.
              </p>
              <Inclusions
                items={[
                  "County and public-record sourcing for your market",
                  "Cleanup of names, addresses, and contact records",
                  "Available enrichment and duplicate removal",
                  "Lead scoring and routing into your workflow",
                ]}
              />
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Available sources and fields vary by county and market. Confirm
                your counties, sources, delivery scope, and billing terms with
                us.
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-7 gap-y-2 pt-6">
                <ContactLink label="Discuss your counties" />
                <Link
                  href="/products/lead-scraper"
                  className="text-sm text-muted underline underline-offset-4 hover:text-paper"
                >
                  Explore Lead Scraper
                </Link>
              </div>
            </article>
            <article
              id="xcerebro"
              className="flex scroll-mt-24 flex-col rounded-xl border border-line-strong bg-ink-950 p-6 sm:p-8"
            >
              <BotIcon
                aria-hidden
                className="mb-6 size-7 text-cobalt-400"
                strokeWidth={1.5}
              />
              <h3 className="text-h2 text-paper">Xcerebro AI Agents</h3>
              <p className="mt-3 font-display text-2xl text-cobalt-400">
                Scoped to your business
              </p>
              <p className="mt-4 mb-6 text-sm leading-relaxed text-muted">
                Explore additional agents for sales, marketing, and operations,
                with their roles and connections defined around your work.
              </p>
              <Inclusions
                items={[
                  "Roles for follow-up, appointment setting, and assigned tasks",
                  "Support for sales, marketing, operations, and research",
                  "Workflow connections and approval rules agreed for your setup",
                  "Standalone or additional deployments scoped individually",
                ]}
              />
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Premium includes four AI agents. Additional deployments and
                ongoing services are scoped separately. The custom real estate
                agent offer above has its own one-time build fee.
              </p>
              <a
                href={xcerebroWebsite}
                className="mt-auto inline-flex min-h-11 items-center gap-3 self-start pt-6 text-sm font-medium text-cobalt-400 hover:text-paper"
              >
                Explore Xcerebro
                <ArrowRightIcon aria-hidden className="size-4" />
              </a>
            </article>
          </div>
        </Container>
      </Section>

      <Section id="communities" className="scroll-mt-20">
        <Container width="wide">
          <CatalogHeading
            number="05"
            eyebrow="Education & community"
            title="Keep learning. Keep building."
            description="Learn with Quentin Flores in two focused Skool communities. Explore the current membership options, or get lifetime VIP access to both through the personal coaching package."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {coachingServices.map((program) => (
              <article
                key={program.id}
                className="flex flex-col rounded-xl border border-line-strong bg-ink-850 p-6 sm:p-8"
              >
                <program.icon
                  aria-hidden
                  className="mb-6 size-7 text-cobalt-400"
                  strokeWidth={1.5}
                />
                <p className="mb-3 text-xs font-medium tracking-widest text-muted uppercase">
                  Coaching community / Skool
                </p>
                <h3 className="text-h2 text-paper">{program.name}</h3>
                <p className="mt-4 mb-6 text-sm leading-relaxed text-muted">
                  {program.summary}
                </p>
                <Inclusions
                  items={
                    communityDetails[
                      program.id as keyof typeof communityDetails
                    ]
                  }
                />
                <p className="mt-6 text-sm text-muted">
                  See Skool for current membership pricing and included
                  resources.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {communityMembershipPolicy}
                </p>
                <a
                  href={program.href}
                  className="mt-auto inline-flex min-h-11 items-center gap-3 self-start pt-6 text-sm font-medium text-cobalt-400 hover:text-paper"
                >
                  {program.cta}
                  <ArrowRightIcon aria-hidden className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="bundles" tone="alt" className="scroll-mt-20">
        <Container width="wide">
          <CatalogHeading
            number="06"
            eyebrow="Optional bundles"
            title="Build a connected system."
            description="Combine the pieces your business needs. We define the scope and quote the bundle together, including the implementation and any ongoing services."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {bundles.map((bundle) => (
              <article
                key={bundle.name}
                className="flex flex-col rounded-xl border border-line-strong bg-ink-950 p-6 sm:p-7"
              >
                <p className="mb-4 text-xs font-medium tracking-widest text-cobalt-400 uppercase">
                  Scoped & quoted
                </p>
                <h3 className="text-h3 text-paper">{bundle.name}</h3>
                <p className="mt-4 mb-6 text-sm leading-relaxed text-muted">
                  {bundle.description}
                </p>
                <Inclusions items={bundle.includes} />
                <div className="mt-auto pt-6">
                  <ContactLink label="Discuss this bundle" />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-[95ch] text-sm leading-relaxed text-muted">
            Premium already includes four AI agents. Additional deployments are
            scoped separately. Lead Scraper is $500 per county; the counties and
            services included in your bundle are defined in your quote.
          </p>
          <article
            id="custom-builds"
            className="mt-12 grid scroll-mt-24 gap-8 border-t border-line-strong pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
          >
            <div>
              <SlidersHorizontalIcon
                aria-hidden
                className="mb-5 size-7 text-cobalt-400"
                strokeWidth={1.5}
              />
              <p className="mb-3 text-xs font-medium tracking-widest text-cobalt-400 uppercase">
                Broader custom work
              </p>
              <h3 className="text-h2 text-paper">
                A build for the way you operate.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                For work beyond the individual services above, we map your
                process and agree on the configuration and connections your
                business needs.
              </p>
              <ContactLink label="Talk through your custom build" />
            </div>
            <div className="rounded-xl border border-line-strong bg-ink-850 p-6 sm:p-8">
              <Inclusions
                items={[
                  "Custom and multi-pipeline systems",
                  "Multi-step workflows across records, people, and tools",
                  "Integrations with the systems your team uses",
                  "Specialized AI agents with defined roles",
                  "Connections between sales, operations, and delivery",
                  "Human approval steps where your process needs them",
                ]}
              />
              <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-muted">
                Map the work. Agree on scope. Configure and connect. Each
                broader build is quoted for its implementation and ongoing
                requirements.
              </p>
            </div>
          </article>
        </Container>
      </Section>

      <ConsultationCta />

      <Section
        aria-labelledby="purchase-details-title"
        className="py-14 md:py-20"
      >
        <Container
          width="wide"
          className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-20"
        >
          <div>
            <h2 id="purchase-details-title" className="text-h3 text-paper">
              Before you purchase
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Jarvis purchases are non-refundable, except where a refund is
              required by applicable law. Review the price, billing frequency,
              included services, and agreed scope before purchasing. Our{" "}
              <Link
                href={site.termsUrl}
                className="text-cobalt-400 underline underline-offset-4 hover:text-paper"
              >
                Terms and Conditions
              </Link>{" "}
              apply.
            </p>
          </div>
          <div className="self-start rounded-xl border border-cobalt-400/30 bg-cobalt-glow p-6 sm:p-7">
            <a
              href={quentinContactUrl}
              className="inline-flex items-start gap-4 font-display text-xl leading-relaxed text-paper hover:text-cobalt-400"
            >
              DM Q for custom pricing to save money.
              <ArrowRightIcon aria-hidden className="mt-1 size-5 shrink-0" />
            </a>
            <p className="mt-3 text-sm text-muted">
              Message @qf_xcerebro on Instagram.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
