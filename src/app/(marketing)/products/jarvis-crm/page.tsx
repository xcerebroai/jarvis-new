import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { CrmBento } from "@/components/marketing/crm-bento";
import { CrmShowcase } from "@/components/marketing/crm-showcase";
import { EliteAiRoles } from "@/components/marketing/elite-ai-roles";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { ConversationInbox } from "@/components/product/conversation-inbox";
import { PipelineBoard } from "@/components/product/pipeline-board";
import { ProductFrame } from "@/components/product/product-frame";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { pricingPlans } from "@/content/pricing";

const elitePlan = pricingPlans.find((plan) => plan.id === "elite");

export const metadata: Metadata = {
  title: "Jarvis CRM",
  description:
    "CRM, custom pipelines, unified conversations, workflows, calendars, dashboards, reporting, integrations, and permissions in one operating layer.",
};

const features = [
  {
    title: "CRM",
    body: "Keep contact details, communication history, tasks, and opportunity information together.",
  },
  {
    title: "Custom pipelines",
    body: "Stages that match how you actually sell, with entry and exit rules that move records without manual dragging.",
  },
  {
    title: "Unified conversations",
    body: "Bring supported calls, texts, and email into your contact communication history.",
  },
  {
    title: "Workflows",
    body: "Trigger-based automation across records, people, and outside systems, with approval gates where you want them.",
  },
  {
    title: "Tasks",
    body: "Work assigned to the right person with due dates, escalation, and visibility when something slips.",
  },
  {
    title: "Calendars",
    body: "Set up appointment availability and booking rules for your team.",
  },
  {
    title: "Dashboards",
    body: "Live views by owner, pipeline, and source, built to answer the questions you actually ask on Monday.",
  },
  {
    title: "Reporting",
    body: "Review reporting using the source, activity, and opportunity data captured in your account.",
  },
  {
    title: "Permissions",
    body: "Configure available user permissions around the access your team needs.",
  },
];

export default function CorePage() {
  return (
    <>
      <PageHero
        eyebrow="Jarvis CRM"
        title="The operating layer for your revenue"
        description="Bring your contacts, pipelines, conversations, and tasks together in Jarvis so your team can organize its next steps."
      />

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="Pipelines"
            title="Stages that match how you sell"
            description="Organize opportunities with stages, ownership, and workflow rules configured around your process."
          />
          <ProductFrame label="Pipelines / Acquisitions">
            <PipelineBoard />
          </ProductFrame>
        </Container>
      </Section>

      <Section>
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="Conversations"
            title="Conversations with context"
            description="Keep supported calls, texts, and email connected to contact records so your team can review the history."
          />
          <ProductFrame label="Conversations / Inbox">
            <ConversationInbox />
          </ProductFrame>
        </Container>
      </Section>

      <CrmBento />

      <CrmShowcase />

      <Section>
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow={`Elite / ${elitePlan?.price} per month`}
            title="AI support for your deal flow"
            description="Elite includes every Standard feature, Realtor Outreach AI, Disposition AI, a buyers list with 2M+ contacts, and exclusive Skool community access."
          />
          <EliteAiRoles className="sm:grid-cols-2" />
        </Container>
      </Section>

      <FeatureGrid
        tone="alt"
        eyebrow="What is included"
        title="Everything the operating layer covers"
        features={features}
      />

      <CtaBand />
    </>
  );
}
