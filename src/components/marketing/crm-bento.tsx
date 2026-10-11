import { LockKeyholeIcon, UsersRoundIcon } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { StatusDot } from "@/components/ui/status-dot";
import { brand } from "@/content/products";

/**
 * Bento feature grid for the CRM.
 *
 * Adapted rather than copied. The source read shadcn semantic tokens this
 * project does not define — foreground, card, card-foreground, primary-600 —
 * so every colour would have been a no-op, and it imported `CardContent`,
 * which this project's card exports as `CardBody`.
 *
 * The source's last cell showed three avatars with invented customer names.
 * That is fabricated social proof, so it is a roles panel instead: the same
 * layout idea without inventing people who use the product.
 *
 * All illustration is inline SVG on the existing palette — no hotlinked CDN
 * assets, and nothing that needs a network round trip to render.
 */

const roles = [
  { label: "Owner", tone: "border-cobalt-500/40 bg-cobalt-glow text-cobalt-400" },
  { label: "Setter", tone: "border-hud bg-neon-glow text-neon-400" },
  { label: "Manager", tone: "border-line-strong bg-ink-800 text-paper" },
];

/** Stage widths for the pipeline sketch — a funnel, not real figures. */
const funnel = [100, 84, 63, 41, 22];

export function CrmBento() {
  return (
    <Section id="crm-bento" tone="alt">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow={`${brand.crm} / how it holds together`}
          title="One record, and everything attached to it"
          description="Bring contact information, communication, ownership, and reporting together in your day-to-day work."
        />

        <div className="grid grid-cols-6 gap-4">
          {/* One record of truth. */}
          <Card className="col-span-full flex overflow-hidden lg:col-span-2">
            <div className="m-auto size-fit p-6 text-center">
              <div className="relative flex h-24 w-56 items-center">
                <svg
                  aria-hidden
                  viewBox="0 0 254 104"
                  fill="none"
                  className="absolute inset-0 size-full text-ink-800"
                >
                  <path
                    d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="type-metric mx-auto block w-fit text-5xl text-paper">
                  One
                </span>
              </div>
              <CardTitle className="mt-6 text-h3">Record of truth</CardTitle>
              <CardDescription className="mt-2">
                Every call, message, note, and file on the same contact.
              </CardDescription>
            </div>
          </Card>

          {/* Permissions. */}
          <Card className="col-span-full overflow-hidden p-6 sm:col-span-3 lg:col-span-2">
            <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-line before:absolute before:-inset-2 before:rounded-full before:border before:border-line/60">
              <span className="m-auto flex size-14 items-center justify-center rounded-full border border-cobalt-500/40 bg-cobalt-glow text-cobalt-400">
                <LockKeyholeIcon aria-hidden className="size-6" strokeWidth={1.25} />
              </span>
            </div>
            <div className="mt-6 space-y-2 text-center">
              <CardTitle>Scoped by role</CardTitle>
              <CardDescription>
                Configure available user permissions around the access your team needs.
              </CardDescription>
            </div>
          </Card>

          {/* Reporting sparkline. */}
          <Card className="col-span-full overflow-hidden p-6 sm:col-span-3 lg:col-span-2">
            <div className="pt-2">
              <svg
                aria-hidden
                viewBox="0 0 386 123"
                fill="none"
                className="w-full"
              >
                <defs>
                  <linearGradient id="crm-spark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2B5BFF" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#2B5BFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M3 104C3 104 38 92 63 84C88 76 104 64 130 62C156 60 172 74 197 68C222 62 238 40 264 34C290 28 306 44 331 38C356 32 383 18 383 18V120H3Z"
                  fill="url(#crm-spark)"
                />
                <path
                  d="M3 104C3 104 38 92 63 84C88 76 104 64 130 62C156 60 172 74 197 68C222 62 238 40 264 34C290 28 306 44 331 38C356 32 383 18 383 18"
                  stroke="#5B84FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="mt-8 space-y-2 text-center">
              <CardTitle>Reported from the work</CardTitle>
              <CardDescription>
                Pipeline value and stage movement read from the same records the
                team is already updating.
              </CardDescription>
            </div>
          </Card>

          {/* Pipeline sketch. */}
          <Card className="col-span-full grid overflow-hidden p-6 sm:grid-cols-2 lg:col-span-3">
            <div className="relative z-10 flex flex-col justify-between gap-8">
              <span className="flex size-12 items-center justify-center rounded-full border border-line">
                <UsersRoundIcon
                  aria-hidden
                  className="size-5 text-cobalt-400"
                  strokeWidth={1.25}
                />
              </span>
              <div className="space-y-2">
                <CardTitle>Stages that match your process</CardTitle>
                <CardDescription>
                  As many pipelines as the business needs. Acquisitions and
                  service jobs do not have to share one board.
                </CardDescription>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-center gap-2.5 sm:mt-0 sm:ml-6">
              {funnel.map((width, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span
                    className="h-2.5 rounded-r-xs bg-cobalt-500"
                    style={{ width: `${width}%`, opacity: 1 - i * 0.14 }}
                  />
                </span>
              ))}
              <span className="type-label mt-1 text-faint">
                Configure your stages
              </span>
            </div>
          </Card>

          {/* Ownership — roles rather than invented customers. */}
          <Card className="col-span-full grid overflow-hidden p-6 sm:grid-cols-2 lg:col-span-3">
            <div className="relative z-10 flex flex-col justify-between gap-8">
              <span className="flex size-12 items-center justify-center rounded-full border border-line">
                <UsersRoundIcon
                  aria-hidden
                  className="size-5 text-neon-400"
                  strokeWidth={1.25}
                />
              </span>
              <div className="space-y-2">
                <CardTitle>Everything has an owner</CardTitle>
                <CardDescription>
                  Assign records to the people responsible for their next steps.
                </CardDescription>
              </div>
            </div>

            <div className="relative mt-6 flex flex-col justify-center gap-3 sm:mt-0 sm:ml-6">
              {roles.map((role, i) => (
                <span
                  key={role.label}
                  className={`flex items-center justify-between gap-3 rounded-md border px-3 py-2 ${role.tone}`}
                  style={{ marginLeft: `${i * 12}px` }}
                >
                  <span className="text-sm font-medium">{role.label}</span>
                  <StatusDot tone={i === 1 ? "live" : "idle"} />
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
