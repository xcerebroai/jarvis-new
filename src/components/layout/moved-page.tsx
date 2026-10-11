"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/**
 * Stub left behind at a retired URL.
 *
 * Redirects client-side rather than through next.config, because the site
 * deploys as a static export and a static host has no server to issue a 301.
 * The visible link is what makes that acceptable: anyone without JavaScript,
 * and every crawler, still gets a followable path to the new page instead of
 * a blank screen.
 */
export function MovedPage({ to, name }: { to: string; name: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <div className="flex flex-1 items-center py-32">
      <Container className="flex flex-col items-start gap-6">
        <span className="type-label-wide text-cobalt-400">Jarvis</span>
        <h1 className="text-h1 md:text-display-md max-w-[20ch] text-balance text-paper">
          {name}
        </h1>
        <p className="max-w-[52ch] text-lg leading-relaxed text-muted">
          Continue to {name}.
        </p>
        <Link
          href={to}
          className={buttonVariants({ variant: "primary", size: "lg" })}
        >
          Go to {name}
        </Link>
      </Container>
    </div>
  );
}
