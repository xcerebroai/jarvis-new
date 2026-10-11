"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import type { ServiceCheckout } from "@/content/personal-services";
import { site } from "@/content/site";

export function ServicePurchase({
  id,
  name,
  checkout,
}: {
  id: string;
  name: string;
  checkout: ServiceCheckout;
}) {
  const [accepted, setAccepted] = useState(false);

  function continueToCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (accepted) window.location.assign(checkout.href);
  }

  return (
    <form onSubmit={continueToCheckout} className="flex flex-col gap-4">
      <div>
        <p className="type-metric text-h2 text-paper">{checkout.price}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {checkout.billing}
        </p>
      </div>
      <p
        id={`${id}-purchase-notice`}
        className="text-sm leading-relaxed text-muted"
      >
        This purchase is non-refundable, except where required by applicable
        law. Review and agree to the{" "}
        <Link
          href={site.termsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cobalt-400 underline underline-offset-4 hover:text-paper"
        >
          Terms and Conditions (opens in a new tab)
        </Link>{" "}
        before continuing.
      </p>
      <label className="flex cursor-pointer items-start gap-3 rounded-md border border-line-strong bg-ink-950 p-4 text-sm leading-relaxed text-muted">
        <input
          type="checkbox"
          required
          checked={accepted}
          onChange={(event) => setAccepted(event.target.checked)}
          aria-describedby={`${id}-purchase-notice`}
          className="mt-0.5 size-5 shrink-0 accent-cobalt-500"
        />
        <span>
          I agree to the Terms and Conditions and acknowledge the non-refundable
          policy for {name}.
        </span>
      </label>
      <Button type="submit" size="lg" disabled={!accepted} className="w-full">
        Continue to checkout
        <ArrowRightIcon aria-hidden className="size-4 shrink-0" />
      </Button>
      <noscript>
        <p className="text-sm text-muted">
          Enable JavaScript to review the purchase agreement and continue to
          checkout.
        </p>
      </noscript>
    </form>
  );
}
