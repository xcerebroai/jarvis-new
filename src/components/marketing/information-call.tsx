import { CalendarDaysIcon, MessagesSquareIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { consultation } from "@/content/consultation";

export function InformationCall() {
  return (
    <Section id="book-call" tone="alt" className="scroll-mt-20" aria-labelledby="book-call-title">
      <Container width="wide" className="grid items-start gap-10 xl:grid-cols-[0.72fr_1.6fr] xl:gap-14">
        <div>
          <p className="font-mono text-xs tracking-widest text-cobalt-400 uppercase">
            A conversation about your business
          </p>
          <h2 id="book-call-title" className="mt-4 font-display text-h2 text-paper">
            Talk Jarvis with Quentin.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Tell us where you are, what you want to build, and what you would
            like help with. Choose a time for a 30-minute information call with
            Quentin Flores.
          </p>
          <ul className="mt-7 grid gap-5 text-sm text-muted">
            <li className="flex gap-3">
              <VideoIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-cobalt-400" />
              <span>Meet on Zoom. Your booking confirmation includes the call details.</span>
            </li>
            <li className="flex gap-3">
              <CalendarDaysIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-cobalt-400" />
              <span>Review the time zone before booking. Use your confirmation to reschedule or cancel.</span>
            </li>
            <li className="flex gap-3">
              <MessagesSquareIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-cobalt-400" />
              <span>Appointment texts are optional. You can book without agreeing to texts or making a purchase.</span>
            </li>
          </ul>
          <p className="mt-8 border-t border-line pt-6 text-xs leading-relaxed text-muted">
            We use your details to handle your inquiry and appointment. Read our{" "}
            <Link href="/privacy/" className="text-cobalt-400 underline underline-offset-4">Privacy Policy</Link>{" "}
            and <Link href="/terms/" className="text-cobalt-400 underline underline-offset-4">Terms and Conditions</Link>.
          </p>
        </div>
        <div className="min-w-0">
          <div className="overflow-hidden rounded-xl border border-line-strong bg-white">
            <iframe
              id={consultation.embedId}
              data-booking-frame
              src={consultation.embedUrl}
              title="Book a Jarvis information call with Quentin Flores"
              loading="lazy"
              scrolling="no"
              className="block min-h-[720px] w-full border-0"
              style={{ height: "1050px", colorScheme: "light" }}
            />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Prefer a separate window?{" "}
            <a href={consultation.publicUrl} target="_blank" rel="noopener noreferrer" className="text-cobalt-400 underline underline-offset-4">
              Open the booking calendar
            </a>.
          </p>
        </div>
        <Script src={consultation.embedScript} strategy="afterInteractive" />
      </Container>
    </Section>
  );
}
