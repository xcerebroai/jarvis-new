import type { Metadata } from "next";
import Link from "next/link";

import { ProsePage } from "@/components/layout/prose-page";

const steps = [
  {
    number: "01",
    title: "Map your process",
    body: "Start with your goals, the stages your team works through, and the tools you already use. Identify the workflows and connections you want the build to support.",
  },
  {
    number: "02",
    title: "Agree on the scope",
    body: "Review the included services, implementation work, and fees. Identify any separate subscriptions, provider charges, or ongoing services before purchasing.",
  },
  {
    number: "03",
    title: "Configure and connect",
    body: "The agreed plan guides the pipelines, workflows, integrations, and agent roles included in your implementation.",
  },
  {
    number: "04",
    title: "Define the review steps",
    body: "Discuss where your team needs to review work and approve actions, and how those checkpoints fit into your process.",
  },
] as const;

export const metadata: Metadata = {
  title: "Implementation guide",
  description:
    "Prepare for your Jarvis implementation: map your process, agree on scope, and define the setup your business needs.",
};

export default function ImplementationPage() {
  return (
    <ProsePage
      eyebrow="Resources"
      title="Implementation guide"
      description="A clear starting point for a build shaped around your business."
    >
      <ol className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line">
        {steps.map((step) => (
          <li key={step.number} className="flex flex-col gap-2 bg-ink-950 p-6">
            <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
              {step.number}
            </span>
            <h2 className="font-display text-h3 text-paper">{step.title}</h2>
            <p className="text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
      <p>
        Your agreed scope defines the work included in your build. Discuss
        requirements, timing, and any separate service costs with Quentin before
        purchasing.
      </p>
      <Link
        href="/custom-build-request"
        className="self-start font-medium text-cobalt-400 underline underline-offset-4"
      >
        Discuss your implementation
      </Link>
    </ProsePage>
  );
}
