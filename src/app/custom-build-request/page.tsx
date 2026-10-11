import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { quentinContactUrl } from "@/content/personal-services";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Discuss your custom Jarvis build",
  description:
    "Connect with Quentin to discuss a Jarvis implementation around your business, goals, workflows, and existing tools.",
};

const details = [
  {
    title: "Your business and goals",
    body: "Tell Quentin what you do, how your team works, and what you want to improve.",
  },
  {
    title: "Your process and tools",
    body: "Share the systems you use and the workflows or handoffs you want to connect.",
  },
  {
    title: "Your project scope",
    body: "Discuss the services, integrations, and implementation work you need before purchasing.",
  },
];

export default function CustomBuildRequestPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="home-eyebrow">CUSTOM JARVIS IMPLEMENTATION</p>
              <h1 className="mt-5 text-display-md leading-tight tracking-tight md:text-display-lg">
                Let’s build around
                <br />
                <span className="text-cobalt-400">your business.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                Connect with Quentin to discuss your goals, the tools you use,
                and the work you want your system to support.
              </p>
              <a
                href={quentinContactUrl}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-8 h-auto max-w-full whitespace-normal py-4 text-sm",
                )}
              >
                <span>DM Q for custom pricing to save money.</span>
                <ArrowUpRightIcon aria-hidden className="size-4 shrink-0" />
              </a>
              <p className="mt-4 text-xs text-faint">
                Message @qf_xcerebro on Instagram.
              </p>
              <Link
                href="/products#custom-jarvis-build"
                className="mt-8 inline-flex text-sm text-cobalt-400 underline-offset-4 hover:underline"
              >
                Explore the Custom Jarvis Build
              </Link>
            </div>
            <div className="rounded-xl border border-line bg-ink-850 p-7 sm:p-9">
              <h2 className="text-h3">Start with what matters.</h2>
              <div className="mt-8 flex flex-col gap-8">
                {details.map((detail) => (
                  <div key={detail.title} className="flex gap-4">
                    <CheckIcon
                      aria-hidden
                      className="mt-1 size-4 shrink-0 text-cobalt-400"
                    />
                    <div>
                      <h3 className="text-base font-medium">{detail.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {detail.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-9 border-t border-line pt-6 text-xs leading-relaxed text-faint">
                Custom projects are priced according to the agreed scope. Review
                the included work, fees, and{" "}
                <Link
                  href="/terms"
                  className="text-cobalt-400 underline underline-offset-4"
                >
                  Terms and Conditions
                </Link>{" "}
                before purchasing.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
