import type { Metadata } from "next";
import Link from "next/link";

import { ProsePage } from "@/components/layout/prose-page";
import { quentinContactUrl } from "@/content/personal-services";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Explore Jarvis products and share your experience with Quentin.",
  robots: { index: false, follow: true },
};

export default function TestimonialsPage() {
  return (
    <ProsePage
      eyebrow="Jarvis CRM"
      title="Let’s talk about your experience."
      description="Already using Jarvis? Share how your team works with the system and what you would like to tell us."
    >
      <a
        href={quentinContactUrl}
        className="self-start font-medium text-cobalt-400 underline underline-offset-4"
      >
        Share your experience with Quentin
      </a>
      <h2 className="mt-4 text-h3 text-paper">
        Considering Jarvis for your business?
      </h2>
      <p>
        Explore the CRM plans, implementation services, and coaching options.
        Review what is included, then discuss the tools and workflows that
        matter to your business.
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        <Link
          href="/products"
          className="text-cobalt-400 underline underline-offset-4"
        >
          Explore the catalog
        </Link>
        <Link
          href="/custom-build-request"
          className="text-cobalt-400 underline underline-offset-4"
        >
          Discuss your business
        </Link>
      </div>
    </ProsePage>
  );
}
