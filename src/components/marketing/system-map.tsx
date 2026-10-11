import { ArrowDownIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { systemNodes, type SystemNode } from "@/content/products";
import { cn } from "@/lib/cn";

/**
 * How the four offers connect when you buy more than one.
 *
 * Deliberately CSS and one SVG rather than a diagramming library: the shape is
 * fixed, so the connectors are four lines. On narrow screens the branch
 * collapses to a single column with arrows, because a 2-wide branch at 375px
 * is unreadable — the reading order is the same either way.
 */
const tones: Record<SystemNode["accent"], string> = {
  cobalt: "border-cobalt-500/40 bg-cobalt-glow text-cobalt-400",
  neon: "border-hud bg-neon-glow text-neon-400",
  data: "border-hud bg-neon-glow text-neon-300",
  outline: "border-line-strong bg-ink-900 text-muted",
  human: "border-line-strong bg-ink-850 text-paper",
};

function Node({ node, className }: { node: SystemNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col items-center gap-1 rounded-lg border px-5 py-4 text-center",
        tones[node.accent],
        className,
      )}
    >
      <span className="font-display text-sm font-medium text-paper">
        {node.label}
      </span>
      {node.sublabel ? (
        <span className="type-label text-faint">{node.sublabel}</span>
      ) : null}
    </div>
  );
}

function Connector({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("jarvis-flow-line h-8 w-px justify-self-center", className)}
    />
  );
}

const byId = Object.fromEntries(systemNodes.map((n) => [n.id, n]));

export function SystemMap() {
  return (
    <Section id="system-map">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Connected when you need it"
          title={
            <>
              Use one.
              <br />
              Or connect the entire system.
            </>
          }
          description="Each product can stand on its own. Together, they create a connected revenue operation from lead generation to follow-up and execution."
        />

        {/* Narrow: one column, top to bottom. */}
        <ol className="flex flex-col items-center gap-3 lg:hidden">
          {["scraper", "crm", "agents", "human", "automation"].map((id, i) => (
            <li key={id} className="flex w-full max-w-xs flex-col items-center gap-3">
              <Node node={byId[id]} className="w-full" />
              {i < 4 ? (
                <ArrowDownIcon aria-hidden className="size-4 text-faint" />
              ) : null}
            </li>
          ))}
        </ol>

        {/* Wide: the branch and rejoin. */}
        <div
          aria-hidden
          className="mx-auto hidden w-full max-w-3xl grid-cols-2 gap-x-6 lg:grid"
        >
          <Node node={byId.scraper} className="col-span-2 mx-auto w-64" />
          <Connector className="col-span-2" />

          <Node node={byId.crm} className="col-span-2 mx-auto w-64" />

          {/* Split: the CRM hands work to agents and to people at once. */}
          <span
            aria-hidden
            className="col-span-2 h-8 w-full [background:linear-gradient(var(--color-line-strong),var(--color-line-strong))_no-repeat_center_top/1px_50%,linear-gradient(var(--color-line-strong),var(--color-line-strong))_no-repeat_25%_50%/50%_1px,linear-gradient(var(--color-line-strong),var(--color-line-strong))_no-repeat_25%_bottom/1px_50%,linear-gradient(var(--color-line-strong),var(--color-line-strong))_no-repeat_75%_bottom/1px_50%]"
          />

          <Node node={byId.agents} />
          <Node node={byId.human} />

          {/* Rejoin, mirrored. */}
          <span
            aria-hidden
            className="col-span-2 h-8 w-full [background:linear-gradient(var(--color-line-strong),var(--color-line-strong))_no-repeat_25%_top/1px_50%,linear-gradient(var(--color-line-strong),var(--color-line-strong))_no-repeat_75%_top/1px_50%,linear-gradient(var(--color-line-strong),var(--color-line-strong))_no-repeat_25%_50%/50%_1px,linear-gradient(var(--color-line-strong),var(--color-line-strong))_no-repeat_center_50%/1px_50%]"
          />

          <Node node={byId.automation} className="col-span-2 mx-auto w-64" />
        </div>

        <p className="mx-auto max-w-[58ch] text-center text-sm leading-relaxed text-muted">
          Start with one product and add connections as your needs grow.
        </p>
      </Container>
    </Section>
  );
}
