import type { Metadata } from "next";
import { ProsePage } from "@/components/layout/prose-page";
import { buttonVariants } from "@/components/ui/button";
import { quentinContactUrl } from "@/content/personal-services";

export const metadata: Metadata = {
  title: "Careers",
  description: "Introduce yourself to Jarvis and ask about working together.",
};

export default function CareersPage() {
  return (
    <ProsePage
      eyebrow="Company"
      title="Careers"
      description="Interested in working with Jarvis? Start a conversation."
    >
      <h2 className="text-h3 text-paper">Tell us what you bring.</h2>
      <p>
        Share your experience, the work you enjoy, and how you would like to
        contribute. You can ask Quentin about opportunities to work together
        through Instagram.
      </p>
      <a
        href={quentinContactUrl}
        className={buttonVariants({ size: "lg", className: "self-start" })}
      >
        Introduce yourself to Quentin
      </a>
    </ProsePage>
  );
}
