const stages = [
  { name: "New", items: ["Contact details", "Lead source"] },
  { name: "Qualified", items: ["Your criteria", "Assigned owner"] },
  { name: "Appointment", items: ["Meeting details", "Follow-up task"] },
  { name: "Offer review", items: ["Proposed terms", "Team approval"] },
];

export function PipelineBoard() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stages.map((stage) => (
        <div key={stage.name} className="flex flex-col gap-2.5">
          <h3 className="type-label text-cobalt-400">{stage.name}</h3>
          <ul className="flex min-h-32 flex-col gap-2 rounded-md border border-line bg-ink-900/60 p-2">
            {stage.items.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-line bg-ink-850 p-2.5 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="col-span-2 text-xs leading-relaxed text-faint lg:col-span-4">
        Configure stage names, fields, ownership, and follow-up rules around
        your business.
      </p>
    </div>
  );
}
