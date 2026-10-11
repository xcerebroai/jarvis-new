import { eliteAgentRoles } from "@/content/pricing";
import { cn } from "@/lib/cn";

export function EliteAiRoles({ className }: { className?: string }) {
  return (
    <dl className={cn("grid gap-6", className)}>
      {eliteAgentRoles.map((role) => (
        <div key={role.title} className="border-l-2 border-cobalt-400/40 pl-4">
          <dt className="font-display text-base font-medium text-paper">
            {role.title}
          </dt>
          <dd className="mt-2 max-w-[54ch] text-sm leading-relaxed text-muted">
            {role.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
