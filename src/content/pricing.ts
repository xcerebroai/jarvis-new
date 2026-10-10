/**
 * Plan comparison.
 *
 * SOURCE: read from the live site at justjarvis.com on 2026-08-29 — plan
 * names, prices, and inclusions are what that page published, not invented
 * figures. The owner renamed Basic to Standard and supplied its $97/month
 * checkout on 2026-09-10. Unlike `stack.ts` and `ai-agent.ts`, this is real. It is also a
 * copy, so it drifts the moment the live page changes: re-check before launch
 * and whenever pricing moves. The owner added four AI agents to Premium on
 * 2026-10-09.
 */

export type PlanCell = boolean | string;

export type CrmPlanId = "standard" | "elite" | "premium";

export type PricingPlan = {
  id: CrmPlanId;
  name: string;
  price: string;
  cadence: string;
  summary: string;
  featured: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "standard",
    name: "Standard",
    price: "$97",
    cadence: "per month",
    summary: "The operating layer for CRM, funnels, site, and automation.",
    featured: false,
  },
  {
    id: "elite",
    name: "Elite",
    price: "$197",
    cadence: "per month",
    summary: "Standard, plus the AI that works outreach and disposition.",
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$297",
    cadence: "per month",
    summary: "Elite features, four AI agents, and full mentorship.",
    featured: false,
  },
];

export type PricingFeature = {
  label: string;
  /** One cell per plan, in `pricingPlans` order. */
  values: [PlanCell, PlanCell, PlanCell];
};

export type PricingGroup = {
  section: string;
  features: PricingFeature[];
};

export const pricingGroups: PricingGroup[] = [
  {
    section: "Platform",
    features: [
      { label: "CRM & pipeline management", values: [true, true, true] },
      { label: "Unlimited sales funnels", values: [true, true, true] },
      { label: "Website builder", values: [true, true, true] },
      { label: "Surveys & forms", values: [true, true, true] },
      { label: "Booking & appointments", values: [true, true, true] },
      { label: "Document signing", values: [true, true, true] },
    ],
  },
  {
    section: "Automation & marketing",
    features: [
      { label: "AI automation", values: [true, true, true] },
      { label: "Email marketing", values: [true, true, true] },
      { label: "Two-way SMS marketing", values: [true, true, true] },
      { label: "Workflow automations", values: [true, true, true] },
      { label: "Tracking & analytics", values: [true, true, true] },
    ],
  },
  {
    section: "Deal flow",
    features: [
      { label: "Realtor Outreach AI", values: [false, true, true] },
      { label: "Disposition AI", values: [false, true, true] },
      { label: "AI agent team", values: [false, false, "4 agents included"] },
      { label: "Buyers list", values: [false, "2M+ contacts", "2M+ contacts"] },
    ],
  },
  {
    section: "Community & coaching",
    features: [
      { label: "Exclusive Skool community", values: [false, true, true] },
      { label: "Mentorship", values: [false, false, "Full access"] },
    ],
  },
];

/** A real estate example drawn from a four-agent client workflow. */
export const premiumAgentRoles = [
  {
    title: "Seller conversations",
    description: "Qualification, missing details, and follow-up.",
  },
  {
    title: "CRM coordination",
    description: "Records, tasks, owners, and next actions.",
  },
  {
    title: "Property analysis",
    description: "Comparable sales, repair context, and deal options.",
  },
  {
    title: "Agreement preparation",
    description: "Drafts based on terms approved by your team.",
  },
] as const;
