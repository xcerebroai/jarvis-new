import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { AgentConversation } from "@/components/product/agent-conversation";
import { ProductFrame } from "@/components/product/product-frame";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * The conversation is the argument here, so it leads on desktop and the copy
 * sits beside it. Order is reversed on mobile — a wall of transcript before
 * anyone knows what they are looking at reads as noise.
 */
export function AgentConversion() {
  return (
    <Section id="conversion">
      <Container
        width="wide"
        className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
      >
        <Reveal className="order-2 lg:order-1">
          <ProductFrame label="AI agents / Scope and setup">
            <AgentConversation />
          </ProductFrame>
        </Reveal>

        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
            Sales agent
          </span>
          <h2 className="text-h2 md:text-display-md max-w-[16ch] text-balance text-paper">
            Follow-up shaped around your business.
          </h2>
          <p className="max-w-[52ch] text-lg leading-relaxed text-muted">
            Define how your agent supports conversations, collects information,
            and helps your team follow up. We scope the supported channels,
            connected tools, permitted actions, and handoffs for your business.
          </p>
          <Link
            href={site.cta.primary.href}
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "self-start",
            )}
          >
            {site.cta.primary.label}
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
