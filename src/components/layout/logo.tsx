import Link from "next/link";

import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Off inside dense chrome where a breathing mark would be noise. */
  animated?: boolean;
};

/** A compact energy core and self-hosted silver display wordmark. */
export function Logo({ className, animated = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Jarvis home"
      className={cn(
        "group inline-flex items-center rounded-xs outline-none",
        className,
      )}
    >
      <span
        className={cn("jarvis-lockup", animated && "jarvis-lockup--animated")}
        aria-hidden="true"
      >
        <span className="jarvis-lockup-core">
          <span />
        </span>
        <span className="jarvis-wordmark">JARVIS</span>
      </span>
    </Link>
  );
}
