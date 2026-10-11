import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Jarvis for owner-led sales teams, acquisitions, services and trades, brokerages, and agencies. One operating system, configured per industry.",
};

const solutions = [
  {
    id: "owner-led",
    name: "Owner-led sales teams",
    problem:
      "The owner is still the best closer, and the system depends on them remembering everything.",
    approach:
      "Scope AI support for first response and follow-up, with the owner involved at the decision points the business defines.",
    pillars: ["Jarvis CRM", "xCerebro"],
  },
  {
    id: "acquisitions",
    name: "Acquisitions",
    problem:
      "Lists arrive raw, overlap with what you already own, and go stale before anyone works them.",
    approach:
      "Scope available lead sources, cleanup, deduplication, scoring, and routing around the selected market and agreed workflow.",
    pillars: ["Lead Scraper", "Custom Builds"],
  },
  {
    id: "services",
    name: "Services & trades",
    problem:
      "Missed calls are lost jobs, and quoting depends on whoever is free to call back.",
    approach:
      "Configure supported missed-call follow-up and scheduling workflows around your team’s availability and approval rules.",
    pillars: ["xCerebro", "Jarvis CRM"],
  },
  {
    id: "brokerages",
    name: "Brokerages",
    problem:
      "Agents work in their own tools, so the brokerage has no reliable view of the pipeline.",
    approach:
      "Shared pipelines with per-agent permissions give visibility without taking away how each agent works.",
    pillars: ["Jarvis CRM", "Custom Builds"],
  },
  {
    id: "agencies",
    name: "Agencies",
    problem:
      "Client reporting can require gathering information across multiple tools.",
    approach:
      "Organize supported communication and reporting data in dashboards configured around the client’s available records.",
    pillars: ["Jarvis CRM", "Custom Builds"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="One system, configured to your industry"
        description="Explore how Jarvis can be configured for real estate and other owner-led teams that need to organize contacts, conversations, and follow-up."
      />

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Where it fits"
            title="Same operating system, different configuration"
            description="The pillars do not change. What changes is which stages, sources, and agents get built."
          />

          <div className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line">
            {solutions.map((solution) => (
              <article
                key={solution.id}
                id={solution.id}
                className="grid gap-6 bg-ink-900 p-6 md:grid-cols-[1fr_1fr_auto] md:gap-10 md:p-8"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="font-display text-h3 text-paper">
                    {solution.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    {solution.problem}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-paper">
                  {solution.approach}
                </p>
                <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                  {solution.pillars.map((pillar) => (
                    <Badge key={pillar}>{pillar}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Not sure which shape you are?"
        description="Describe how your business sells and we will tell you what we would build first."
      />
    </>
  );
}
