import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { SystemMap } from "@/components/marketing/system-map";
import { ProductFrame } from "@/components/product/product-frame";
import { WorkflowCanvas } from "@/components/product/workflow-canvas";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { steps } from "@/content/homepage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Custom Builds",
  description:
    "Custom pipelines, workflows, integrations, and bespoke AI agents, assembled into an operating system built around your business.",
};

const offerings = [
  {
    title: "Custom pipelines",
    body: "Stages, fields, and rules modeled on your process, including the parts that do not look like a standard sales funnel.",
  },
  {
    title: "Custom workflows",
    body: "Multi-step automation across records, people, and outside systems, with human checkpoints where judgment is required.",
  },
  {
    title: "Integrations",
    body: "Review connections to the systems you already depend on and scope supported integrations around your needs.",
  },
  {
    title: "Bespoke AI agents",
    body: "Agents built for a role that does not exist in the standard roster, scoped to your triggers and your approvals.",
  },
  {
    title: "Business operating systems",
    body: "When the whole operation needs modeling from intake through fulfillment, not just the sales end of it.",
  },
];

export default function CustomPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom Builds"
        title="Built around your business"
        description="Most software asks you to change how you work. Custom is the part of Jarvis that changes the system instead for the operations that do not fit a standard shape."
      />

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="Workflows"
            title="Automation that knows when to stop"
            description="Define which steps can run automatically and where your team needs to review the next action."
          />
          <ProductFrame label="Workflows / Human approval">
            <WorkflowCanvas />
          </ProductFrame>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="What we build"
        title="Where custom work makes the difference"
        features={offerings}
      />

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="The process"
            title="How a custom build runs"
            description="Scoped work with a person accountable for it, not an open-ended engagement."
          />
          <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.number}
                className="flex flex-col gap-3 bg-ink-900 p-6"
              >
                <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
                  {step.number}
                </span>
                <h3 className="font-display text-h3 text-paper">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <SystemMap />

      <CtaBand
        primaryCta={site.cta.customBuild}
        description="Start with a few details about your business, current tools, and what you want to build so we can prepare for a discovery call."
      />
    </>
  );
}
