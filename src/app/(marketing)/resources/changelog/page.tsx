import type { Metadata } from "next";
import Link from "next/link";

import { ProsePage } from "@/components/layout/prose-page";
import { quentinContactUrl } from "@/content/personal-services";

export const metadata: Metadata = {
  title: "Product information",
  description:
    "Explore Jarvis products and ask about the features available for your business.",
};

export default function ChangelogPage() {
  return (
    <ProsePage
      eyebrow="Resources"
      title="Explore what Jarvis offers."
      description="Find current plan details, additional services, and a starting point for questions about your system."
    >
      <h2 className="text-h3 text-paper">Start with the catalog.</h2>
      <p>
        Jarvis offers monthly CRM plans, private onboarding, custom
        implementations, AI agents, lead sourcing, integrations, and coaching.
        Each offer has its own scope and included services.
      </p>
      <Link
        href="/products"
        className="self-start font-medium text-cobalt-400 underline underline-offset-4"
      >
        Browse products and services
      </Link>
      <h2 className="mt-4 text-h3 text-paper">Ask about your setup.</h2>
      <p>
        If you want to understand a feature or discuss a change to your system,
        share your plan and what you are trying to do with Quentin.
      </p>
      <a
        href={quentinContactUrl}
        className="self-start font-medium text-cobalt-400 underline underline-offset-4"
      >
        Message Quentin on Instagram
      </a>
    </ProsePage>
  );
}
