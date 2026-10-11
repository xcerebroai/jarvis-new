import { ArrowUpRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { AgentConversion } from "@/components/marketing/agent-conversion";
import { CtaBand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { HumanAiSection } from "@/components/marketing/human-ai-section";
import { AgentStaff } from "@/components/product/agent-staff";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { xcerebroWebsite } from "@/content/products";

export const metadata: Metadata = {
  title: "xCerebro AI Agents",
  description:
    "Role-based AI agents with defined triggers, scoped actions, and human approval gates. Roles include Lead Concierge, Follow-Up Agent, Appointment Setter, and more.",
};

const principles = [
  {
    title: "A role, not a chatbot",
    body: "Brief each agent like a new hire, with a defined job and a scope of allowed actions.",
  },
  {
    title: "Explicit triggers",
    body: "Define the events that can trigger an agent as part of the agreed implementation scope.",
  },
  {
    title: "Approval gates",
    body: "Define which actions require approval. Keep offers and contracts subject to human review before sending.",
  },
  {
    title: "Activity history",
    body: "Configure activity logging for the actions and connected systems included in your build.",
  },
];

export default function AiStaffPage() {
  return (
    <>
      <PageHero
        animateTitle
        eyebrow="xCerebro AI Agents"
        title="Role-based agents that carry real work"
        description="AI staff handle time-sensitive work inside the same system your team uses, including first response, follow-up, booking, and coordination."
      >
        <div>
          <Link
            href={xcerebroWebsite}
            className={buttonVariants({ size: "lg" })}
          >
            Visit xcerebro.ai
            <ArrowUpRightIcon aria-hidden className="size-4" />
          </Link>
        </div>
      </PageHero>

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="The roster"
            title="Seven roles, scoped to your process"
            description="Potential roles for a scoped custom deployment. Included actions depend on the agreed build and connected systems."
          />
          <AgentStaff />
        </Container>
      </Section>

      <AgentConversion />

      <FeatureGrid
        eyebrow="How they work"
        title="Autonomy with boundaries"
        description="Define the agent’s role, triggers, approval steps, and activity history as part of your agreed implementation scope."
        features={principles}
        columns={4}
      />

      <HumanAiSection />

      <CtaBand
        title="Put an AI staff on your pipeline"
        description="We scope each agent's triggers, actions, and approval gates during the build."
      />
    </>
  );
}
