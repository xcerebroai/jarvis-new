import type { Metadata } from "next";
import Link from "next/link";

import { ProsePage } from "@/components/layout/prose-page";
import { buttonVariants } from "@/components/ui/button";
import { quentinContactUrl } from "@/content/personal-services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Account and service support",
  description:
    "Get help with your Jarvis workspace, account access, or a service question.",
};

export default function StatusPage() {
  return (
    <ProsePage
      eyebrow="Support"
      title="Need help with your Jarvis system?"
      description="Start with your workspace or contact Quentin about the issue you are experiencing."
    >
      <a
        href={site.appUrl}
        className={buttonVariants({ size: "lg", className: "self-start" })}
      >
        Open your Jarvis workspace
      </a>
      <h2 className="mt-4 text-h3 text-paper">Help us understand the issue.</h2>
      <p>
        When you contact Quentin, describe the feature you are using, what you
        expected to happen, and what happened instead. Include any error message
        and when you noticed it.
      </p>
      <a
        href={quentinContactUrl}
        className="self-start font-medium text-cobalt-400 underline underline-offset-4"
      >
        Contact Quentin on Instagram
      </a>
      <p>
        For plan and service details, visit the{" "}
        <Link
          href="/products"
          className="text-cobalt-400 underline underline-offset-4"
        >
          Jarvis catalog
        </Link>
        .
      </p>
    </ProsePage>
  );
}
