import {
  ClipboardListIcon,
  FileTextIcon,
  SearchIcon,
  SplitIcon,
  UserCheckIcon,
  ZapIcon,
} from "lucide-react";

const nodes = [
  { label: "New lead", kind: "Trigger", icon: ZapIcon },
  { label: "Review details", kind: "Action", icon: SearchIcon },
  { label: "Assign owner", kind: "Routing", icon: SplitIcon },
  { label: "Human review", kind: "Approval", icon: UserCheckIcon },
  { label: "Prepare next step", kind: "Action", icon: FileTextIcon },
  { label: "Log activity", kind: "Record", icon: ClipboardListIcon },
];

export function WorkflowCanvas() {
  return (
    <div className="grid-field relative rounded-md border border-line bg-ink-900/60 p-4 md:p-6">
      <ol className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-5">
        {nodes.map((node) => (
          <li
            key={node.label}
            className="flex items-center gap-3 rounded-md border border-line bg-ink-850 p-3"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-sm border border-line text-cobalt-400">
              <node.icon aria-hidden className="size-4" strokeWidth={1.5} />
            </span>
            <span>
              <span className="block text-sm font-medium text-paper">
                {node.label}
              </span>
              <span className="block type-label text-faint">{node.kind}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-xs leading-relaxed text-faint">
        Define triggers, actions, and human approval steps during setup. Offers
        and agreements stay subject to your team’s review.
      </p>
    </div>
  );
}
