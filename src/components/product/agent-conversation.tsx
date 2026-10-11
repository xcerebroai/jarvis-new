const steps = [
  {
    title: "Define the role",
    detail:
      "Choose the questions, information, and follow-up tasks the agent should handle.",
  },
  {
    title: "Connect the context",
    detail:
      "Use the business information and supported systems included in your setup.",
  },
  {
    title: "Set the boundaries",
    detail:
      "Agree on permitted actions and when the agent should hand work to your team.",
  },
  {
    title: "Review the next step",
    detail:
      "Keep pricing, offers, agreements, and other commitments under human review.",
  },
];

export function AgentConversation() {
  return (
    <ol className="flex flex-col gap-4">
      {steps.map((step) => (
        <li
          key={step.title}
          className="rounded-md border border-line bg-ink-850 p-4"
        >
          <h3 className="text-sm font-medium text-cobalt-400">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {step.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}
