import {
  BotIcon,
  GraduationCapIcon,
  PlugZapIcon,
  SlidersHorizontalIcon,
} from "lucide-react";

export type ServiceCheckout = {
  price: string;
  /** Verified public checkout destination from the site's payment content. */
  href: string;
  billing: string;
};

// Owner-selected active Stripe links. All amounts are USD base prices;
// automatic tax is calculated by the hosted checkout.
const oneTimeBilling =
  "One-time payment in USD. Final amount shown at checkout.";

/** Public Instagram profile linked from Quentin's Xcerebro website. */
export const quentinContactUrl = "https://instagram.com/qf_xcerebro";

export const serviceCheckouts: Record<string, ServiceCheckout> = {
  "dealmachine-integration": {
    price: "$1,127.17",
    href: "https://buy.stripe.com/eVq00kaYw7ePbk96bC9bO1y",
    billing: oneTimeBilling,
  },
  "one-on-one-coaching": {
    price: "$5,237.23",
    href: "https://buy.stripe.com/dRmeVe9UseHh3RH1Vm9bO1w",
    billing: oneTimeBilling,
  },
  "custom-jarvis-build": {
    price: "$1,127.23",
    href: "https://buy.stripe.com/fZueVeeaI9mX3RHeI89bO0M",
    billing: oneTimeBilling,
  },
  "custom-ai-agent": {
    price: "$3,223.17",
    href: "https://buy.stripe.com/14AdRa2s0gPpcodeI89bO1A",
    billing:
      "$3,223.17 upfront, plus $97/month for oversight and customization support, starting 30 days after purchase. Amounts are in USD. Final amount shown at checkout.",
  },
};

export const personalServices = [
  {
    id: "dealmachine-integration",
    number: "01",
    category: "Connect your tools",
    name: "Custom DealMachine API Integration",
    shortName: "DealMachine integration",
    icon: PlugZapIcon,
    summary: "Bring your DealMachine leads into the way you work in Jarvis.",
    description:
      "Connect your DealMachine API access to your Jarvis account, with lead routing and marketing workflows tailored to your business.",
    includes: [
      "Connect your existing DealMachine API access to your Jarvis account",
      "Route incoming leads into the Jarvis process your business uses",
      "Tailor marketing workflows to the way you follow up with leads",
      "Configure the connections and workflow requirements in your agreed integration scope",
    ],
    note: "Requires your DealMachine API access and a Jarvis account. Review the integration scope and any separate provider charges before purchasing.",
  },
  {
    id: "one-on-one-coaching",
    number: "02",
    category: "Work with Quentin",
    name: "One-on-One Coaching",
    shortName: "Personal coaching",
    icon: GraduationCapIcon,
    summary:
      "A year of direct access. Twelve sessions focused on your business.",
    description:
      "Work one-on-one with Quentin Flores on your real estate business, wholesale real estate, and related investing topics, with recorded sessions you can revisit.",
    includes: [
      "12 recorded, one-on-one Zoom sessions with Quentin Flores",
      "One year of direct access to Quentin about your real estate business",
      "Guidance focused on your wholesale real estate business and related investing topics",
      "Lifetime VIP access to REI Cheat Codes and AI Cheat Codes on Skool",
      "Exclusive early news and updates",
    ],
    note: "This personal coaching package is separate from Premium plan mentorship and the two sessions included with private onboarding.",
  },
  {
    id: "custom-jarvis-build",
    number: "03",
    category: "Shape your CRM",
    name: "Custom Jarvis Build",
    shortName: "Custom CRM build",
    icon: SlidersHorizontalIcon,
    summary:
      "A CRM implementation built around your goals and how you operate.",
    description:
      "Customize Jarvis around your business, goals, and needs. Your implementation brings the CRM setup and workflows into line with the way your team works.",
    includes: [
      "CRM implementation tailored to your business",
      "Configuration around your goals and operational needs",
      "Pipelines and workflows shaped around your process",
      "Automations configured within your agreed implementation scope",
    ],
    note: "Your agreed scope defines the build. Larger implementations can be quoted separately. CRM subscriptions, usage, and third-party services are separate unless expressly included in your order.",
  },
  {
    id: "custom-ai-agent",
    number: "04",
    category: "Build your AI support",
    name: "Custom Jarvis AI Agent",
    shortName: "Custom AI agent",
    icon: BotIcon,
    summary: "An AI agent trained for your real estate investing business.",
    description:
      "A custom trained agent tailored to your wholesaling or real estate investing business, with its role and knowledge shaped around your needs.",
    includes: [
      "Custom agent training for your business",
      "A role tailored to wholesaling and real estate investing",
      "Configuration around your processes and needs",
      "A defined implementation scope for the agent you are building",
    ],
    note: "The $97/month oversight and customization support subscription starts 30 days after purchase. Review the agreed agent scope and any separate platform or usage charges before purchasing.",
  },
] as const;
