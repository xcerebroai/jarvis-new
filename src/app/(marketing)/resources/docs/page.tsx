import type { Metadata } from "next";
import Link from "next/link";

import { ProsePage } from "@/components/layout/prose-page";
import { site } from "@/content/site";

const topics = [
  {
    title: "Contacts, pipelines, and follow-up",
    description:
      "Explore how Jarvis brings contact records, conversations, tasks, and pipeline stages together.",
    href: "/products/jarvis-crm",
    cta: "Explore the CRM",
  },
  {
    title: "Your plan and included features",
    description:
      "Compare Standard, Elite, and Premium, including the AI and mentorship features available with each plan.",
    href: "/pricing",
    cta: "Compare plans",
  },
  {
    title: "Help getting set up",
    description:
      "Private onboarding includes A2P setup, website creation, and two private coaching sessions.",
    href: "/private-onboarding",
    cta: "Explore private onboarding",
  },
  {
    title: "A workflow built around your business",
    description:
      "Review the implementation process and discuss the tools, connections, and work in your project scope.",
    href: "/resources/implementation",
    cta: "Read the implementation guide",
  },
] as const;

export const metadata: Metadata = {
  title: "Jarvis guides",
  description:
    "Find Jarvis product guidance, plan details, onboarding, and implementation information.",
};

export default function DocsPage() {
  return (
    <ProsePage
      eyebrow="Resources"
      title="Find your way around Jarvis."
      description="Start with your workspace, your plan, or the support you need."
    >
      <p>
        Already have an account?{" "}
        <a
          href={site.appUrl}
          className="text-cobalt-400 underline underline-offset-4"
        >
          Sign in to your Jarvis workspace
        </a>{" "}
        to use your contacts, pipelines, and connected tools.
      </p>
      <div className="divide-y divide-line">
        {topics.map((topic) => (
          <section key={topic.href} className="py-6">
            <h2 className="text-h3 text-paper">{topic.title}</h2>
            <p className="mt-3 text-sm leading-relaxed">{topic.description}</p>
            <Link
              href={topic.href}
              className="mt-4 inline-flex text-sm font-medium text-cobalt-400 underline underline-offset-4 hover:text-paper"
            >
              {topic.cta}
            </Link>
          </section>
        ))}
      </div>
      <p>
        Need help with your existing setup?{" "}
        <Link
          href="/status"
          className="text-cobalt-400 underline underline-offset-4"
        >
          Find account and service support
        </Link>
        .
      </p>
    </ProsePage>
  );
}
