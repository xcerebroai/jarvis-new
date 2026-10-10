/**
 * What each offer replaces, and roughly what that alternative costs today.
 *
 * IMPORTANT — two different kinds of number are deliberately kept apart:
 *
 *   `alternative.cost` is what the conventional approach costs, and its
 *   provenance differs per entry. The lead-list figure is typical annual spend
 *   supplied by the business. The assistant and contractor ranges are still
 *   ILLUSTRATIVE ESTIMATES — plausible, but not sourced research and not
 *   claims about any named vendor. Same rule as `stack.ts`; check those two
 *   before they carry weight in a pitch.
 *
 *   `offer.cost` is NEVER invented. The owner supplied the Lead Scraper price
 *   per county; other separate offers still show how they are quoted.
 *
 * No saving is stated as a total, because the honest comparison depends on
 * scope and neither side is a fixed number.
 */

import { leadScraperPrice } from "./products";

export type CostRow = {
  /** What is being compared, e.g. "Coverage". */
  measure: string;
  alternative: string;
  offer: string;
};

export type CostComparison = {
  id: string;
  /** Offer id from `products.ts`. */
  offerId: string;
  title: string;
  intro: string;
  alternative: { label: string; cost: string; costNote: string };
  offer: { label: string; cost: string; costNote: string };
  rows: CostRow[];
};

export const costComparisons: CostComparison[] = [
  {
    id: "agents",
    offerId: "agents",
    title: "Hiring assistants vs deploying agents",
    intro:
      "The usual answer to more inbound than the team can answer is another person on the phones. That works, and it costs a salary per shift.",
    alternative: {
      label: "Virtual assistants",
      cost: "$900–$2,400",
      costNote: "per assistant, per month (illustrative range)",
    },
    offer: {
      label: "xCerebro AI Agents",
      cost: "Quoted",
      costNote: "for standalone or additional deployments",
    },
    rows: [
      {
        measure: "Coverage",
        alternative: "One shift, in one timezone",
        offer: "Every hour, including nights and weekends",
      },
      {
        measure: "Ramp time",
        alternative: "Weeks of training before they are useful",
        offer: "Configured once, then consistent from the first message",
      },
      {
        measure: "Consistency",
        alternative: "Varies by person, mood, and day",
        offer: "The same script and the same rules every time",
      },
      {
        measure: "Adding capacity",
        alternative: "Hire, train, and manage another person",
        offer: "Add another role to the roster",
      },
      {
        measure: "Turnover",
        alternative: "Rehire and retrain when someone leaves",
        offer: "The configuration stays when people change",
      },
      {
        measure: "Judgement calls",
        alternative: "A person decides in the moment",
        offer: "Escalates to your team. Agents do not decide these.",
      },
    ],
  },
  {
    id: "scraper",
    offerId: "scraper",
    title: "Buying lists vs running your own source",
    intro:
      "The spend is not the worst part. A bought list has usually been sold to everyone else in the market first, so the owners on it have already heard from every buyer holding the same file.",
    alternative: {
      label: "Purchased lead lists",
      cost: "$10,000+",
      costNote: "a year, for records other buyers already worked",
    },
    offer: {
      label: "Lead Scraper",
      cost: leadScraperPrice,
      costNote: "separate from Jarvis CRM",
    },
    rows: [
      {
        measure: "Who else has it",
        alternative:
          "Sold to everyone in the market, then worked by all of them",
        offer: "Pulled for you from the public source",
      },
      {
        measure: "What the owner has heard",
        alternative: "The same pitch from every buyer holding the file",
        offer: "Your approach, before the record is on anyone else's list",
      },
      {
        measure: "Freshness",
        alternative: "Aged by the time it is packaged and sold",
        offer: "Pulled on the schedule you set",
      },
      {
        measure: "Criteria",
        alternative: "Whatever filters the vendor offers",
        offer: "Your criteria, your county, your record types",
      },
      {
        measure: "Data hygiene",
        alternative: "Cleaned as far as the seller chose to",
        offer: "Cleaned, deduplicated, and enriched every run",
      },
      {
        measure: "Cost shape",
        alternative: "Pay again for every new batch",
        offer: "A repeatable run rather than a repeat purchase",
      },
      {
        measure: "Routing",
        alternative: "A file someone has to import and assign",
        offer: "Scored and routed into the CRM automatically",
      },
    ],
  },
  {
    id: "builds",
    offerId: "builds",
    title: "Contracting the work vs a scoped build",
    intro:
      "Custom automation usually means a developer or an agency on retainer, and a system only they understand.",
    alternative: {
      label: "Agency or contract developer",
      cost: "$85–$175",
      costNote: "per hour or per project (illustrative range)",
    },
    offer: {
      label: "Custom Builds",
      cost: "Quoted",
      costNote: "scoped after mapping the process",
    },
    rows: [
      {
        measure: "Starting point",
        alternative: "Built from nothing each time",
        offer: "Built on the CRM you already run",
      },
      {
        measure: "Who understands it",
        alternative: "Often only the contractor who wrote it",
        offer: "Documented and handed over running",
      },
      {
        measure: "Ongoing changes",
        alternative: "Back on the schedule, at hourly rates",
        offer: "Changed inside the system you already have",
      },
      {
        measure: "Scope",
        alternative: "Priced before anyone maps the process",
        offer: "Mapped first, quoted second",
      },
    ],
  },
];

export const costDisclaimer =
  "Costs shown for the conventional approach are illustrative, not quotes or claims about any named vendor. Jarvis CRM plans have published prices, with four AI agents in Premium. Lead Scraper is $500 per county. Standalone or additional agent deployments and custom work are quoted by scope. Your own numbers will differ.";
