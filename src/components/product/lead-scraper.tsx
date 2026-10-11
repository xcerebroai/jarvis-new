import { DatabaseIcon } from "lucide-react";

const stages = [
  {
    label: "Source",
    note: "Review available public records for the selected county.",
  },
  { label: "Clean", note: "Normalize the available names and addresses." },
  {
    label: "Enrich",
    note: "Append available contact and ownership information.",
  },
  {
    label: "Deduplicate",
    note: "Identify matching records using the agreed criteria.",
  },
  { label: "Score", note: "Apply the criteria defined for your business." },
  {
    label: "Route",
    note: "Send prepared records into the configured CRM workflow.",
  },
];

export function LeadScraper() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line-strong bg-line lg:grid-cols-[16rem_1fr]">
      <div className="flex flex-col gap-5 bg-ink-900 p-5">
        <span className="flex items-center gap-2 type-label-wide text-cobalt-400">
          <DatabaseIcon aria-hidden className="size-4" strokeWidth={1.5} />
          County scope
        </span>
        <p className="font-display text-2xl text-paper">$500 per county</p>
        <p className="text-sm leading-relaxed text-muted">
          Select your market and review the available sources, fields, and
          routing needs before setup.
        </p>
        <p className="hairline-t pt-4 text-xs leading-relaxed text-faint">
          Lead Scraper is purchased separately from Jarvis CRM. Source coverage
          and data availability vary by market.
        </p>
      </div>
      <ol className="flex flex-col gap-5 bg-ink-850 p-5">
        {stages.map((stage) => (
          <li key={stage.label} className="flex gap-3">
            <span
              aria-hidden
              className="mt-1.5 size-2 shrink-0 rounded-full bg-cobalt-500"
            />
            <div>
              <h3 className="text-sm font-medium text-paper">{stage.label}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {stage.note}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
