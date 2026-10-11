import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ProductFrameProps = {
  /** Breadcrumb shown in the frame chrome, e.g. `Pipelines / Acquisitions`. */
  label: string;
  status?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

/**
 * Shared frame for product capabilities and process diagrams.
 */
export function ProductFrame({
  label,
  status,
  children,
  className,
  bodyClassName,
}: ProductFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-line-strong bg-ink-900 shadow-raised",
        className,
      )}
    >
      <div className="hairline-b flex items-center justify-between gap-4 bg-ink-850 px-4 py-2.5">
        <span className="truncate type-label text-faint">{label}</span>
        {status ? (
          <span className="shrink-0 type-label text-muted">{status}</span>
        ) : null}
      </div>
      <div className={cn("p-4 md:p-5", bodyClassName)}>{children}</div>
    </div>
  );
}
