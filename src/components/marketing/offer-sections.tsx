import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { AgentStaff } from "@/components/product/agent-staff";
import { PipelineBoard } from "@/components/product/pipeline-board";
import { ProductFrame } from "@/components/product/product-frame";
import { ScraperConsole } from "@/components/product/scraper-console";
import { WorkflowCanvas } from "@/components/product/workflow-canvas";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { offers } from "@/content/products";
import { scraperDisclaimer } from "@/content/scraper";
import { cn } from "@/lib/cn";

const byId = Object.fromEntries(offers.map((offer) => [offer.id, offer]));

type OfferSectionProps = {
  id: string;
  offerId: string;
  title: string;
  description: string;
  cta: string;
  tone?: "base" | "alt";
  note?: string;
  children: ReactNode;
};

/**
 * One dedicated section per offer. The eyebrow is the product name straight
 * from `products.ts`, so a section can never drift out of sync with the card
 * that introduced it.
 */
function OfferSection({
  id,
  offerId,
  title,
  description,
  cta,
  tone = "base",
  note,
  children,
}: OfferSectionProps) {
  const offer = byId[offerId];

  return (
    <Section id={id} tone={tone}>
      <Container width="wide" className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={offer.name}
            title={title}
            description={description}
          />
          <Link
            href={offer.href}
            className={cn(
              buttonVariants({ variant: "secondary", size: "md" }),
              "shrink-0",
            )}
          >
            {cta}
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
          {offer.capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <CheckIcon
                aria-hidden
                className="size-3.5 shrink-0 text-cobalt-400"
                strokeWidth={2}
              />
              {capability}
            </li>
          ))}
        </ul>

        <Reveal>{children}</Reveal>

        <p className="type-label text-faint">{note ?? offer.pricing}</p>
      </Container>
    </Section>
  );
}

export function CrmSection() {
  return (
    <OfferSection
      id="crm"
      offerId="crm"
      title="The operating hub for your revenue workflow."
      description="Jarvis CRM gives your team one place to manage leads, conversations, pipelines, tasks, appointments, automations, and reporting."
      cta="Explore Jarvis CRM"
      note="Starting from $97/month. Premium includes four AI agents. Additional agent deployments, lead scraping, and custom implementation are separate."
    >
      <ProductFrame label="Jarvis CRM / Example pipeline" status="Demo">
        <PipelineBoard />
      </ProductFrame>
    </OfferSection>
  );
}

export function AgentsSection() {
  return (
    <OfferSection
      id="agents"
      offerId="agents"
      tone="alt"
      title="AI agents with a job, a scope, and a set of rules."
      description="xCerebro agents are assigned defined responsibilities, connected to approved tools, and governed by permissions, approvals, logs, and escalation rules."
      cta="Explore xCerebro"
    >
      <AgentStaff />
    </OfferSection>
  );
}

export function ScraperSection() {
  return (
    <OfferSection
      id="scraper"
      offerId="scraper"
      title="From public data to a sales-ready lead."
      description="Lead Scraper collects targeted records, cleans the data, removes duplicates, enriches what can be enriched, scores the opportunity, and routes it into the workflow you choose."
      cta="Explore Lead Scraper"
      note={scraperDisclaimer}
    >
      <ScraperConsole />
    </OfferSection>
  );
}

export function BuildsSection() {
  return (
    <OfferSection
      id="builds"
      offerId="builds"
      tone="alt"
      title="Your process does not need to fit our template."
      description="We map how your business works, then build the system around it."
      cta="Map My Workflow"
    >
      <div className="flex flex-col gap-6">
        <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Real estate acquisition",
            "Home services",
            "Agency sales",
            "Professional services",
            "Custom sales process",
          ].map((example) => (
            <li
              key={example}
              className="bg-ink-950 px-4 py-3.5 text-sm text-muted"
            >
              {example}
            </li>
          ))}
        </ul>

        <ProductFrame label="Workflows / Offer approval" status="Draft">
          <WorkflowCanvas />
        </ProductFrame>
      </div>
    </OfferSection>
  );
}
