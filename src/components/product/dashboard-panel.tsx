const views = [
  {
    label: "Pipeline value",
    detail: "Review the value entered on your opportunities.",
  },
  {
    label: "Appointments",
    detail: "Keep scheduled calls and meetings in view.",
  },
  {
    label: "Conversations",
    detail: "Review contact history and follow-up activity.",
  },
  { label: "Open tasks", detail: "See assigned work and upcoming due dates." },
];

export function DashboardPanel() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line">
        {views.map((view) => (
          <div key={view.label} className="flex flex-col gap-3 bg-ink-850 p-4">
            <h3 className="text-sm font-medium text-paper">{view.label}</h3>
            <p className="text-xs leading-relaxed text-muted">{view.detail}</p>
          </div>
        ))}
      </div>
      <div className="rounded-md border border-line bg-ink-850 p-4">
        <h3 className="type-label text-cobalt-400">Your reporting setup</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Choose the views that support your process. Reports reflect the
          records, fields, and connected activity available in your account.
        </p>
      </div>
    </div>
  );
}
