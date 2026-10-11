import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { LeadScraper } from "@/components/product/lead-scraper";
import { ProductFrame } from "@/components/product/product-frame";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Lead Scraper",
  description:
    "Lead Scraper is a separate product priced at $500 per county. Explore public record sourcing, data cleanup, enrichment, deduplication, and routing.",
};

const stages = [
  {
    title: "Public record sourcing",
    body: "Source available county and public records in the jurisdictions included in your setup.",
  },
  {
    title: "Data cleanup",
    body: "Addresses, names, and phone numbers normalized into a consistent shape before anything downstream sees them.",
  },
  {
    title: "Enrichment",
    body: "Contact details and ownership context appended so a record arrives workable rather than raw.",
  },
  {
    title: "Deduplication",
    body: "Identify matching records using the agreed data fields and deduplication criteria.",
  },
  {
    title: "Lead scoring",
    body: "Ranked against your own criteria for fit and intent, not a generic vendor score.",
  },
  {
    title: "Routing",
    body: "Assigned by territory, capacity, or round-robin, then handed to the agent or person who works it.",
  },
  {
    title: "Custom scrapers",
    body: "Review additional source requests for availability and feasibility before agreeing on a custom collector.",
  },
];

export default function LeadEnginesPage() {
  return (
    <>
      <PageHero
        eyebrow="Lead Scraper"
        title="A clearer path from public records to your CRM"
        description="Lead Scraper is a separate product at $500 per county. It is not included in Jarvis CRM plans. Turn raw sources into records your team can work."
      />

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="The pipeline"
            title="From raw source to assigned owner"
            description="Review the stages from source selection to CRM routing. Available sources, data fields, and integrations vary by market and agreed scope."
          />
          <ProductFrame
            label="Lead Scraper / Process"
            bodyClassName="p-0"
          >
            <LeadScraper />
          </ProductFrame>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="What runs"
        title="Every stage, configured to your market"
        features={stages}
      />

      <CtaBand
        title="Turn your sources into a working pipeline"
        description="Lead Scraper is $500 per county and is purchased separately from Jarvis CRM. Tell us which counties matter in your market."
        primaryCta={{ label: "View product pricing", href: "/products" }}
      />
    </>
  );
}
