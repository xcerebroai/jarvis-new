import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  BarChart3Icon,
  BotIcon,
  CalendarDaysIcon,
  CheckIcon,
  FileCheck2Icon,
  Layers3Icon,
  ListChecksIcon,
  MessageCircleIcon,
  MessagesSquareIcon,
  NetworkIcon,
  ScanSearchIcon,
  UsersRoundIcon,
  WorkflowIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import {
  personalServices,
  quentinContactUrl,
  serviceCheckouts,
} from "@/content/personal-services";
import { coachingServices } from "@/content/products";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Jarvis CRM | Your leads. Your follow-up. Your next move.",
  description:
    "Bring contacts, conversations, pipelines, and automations together in Jarvis. Explore CRM plans, AI agents, coaching, custom builds, and lead sourcing.",
};

const planFeatures = [
  {
    id: "standard",
    name: "Standard",
    price: "$97",
    intro: "Build your daily sales process in one workspace.",
    features: [
      "CRM and pipeline management",
      "Unlimited sales funnels",
      "Website builder",
      "Surveys and forms",
      "Booking and appointments",
      "Document signing",
      "AI automation",
      "Email marketing",
      "Two-way SMS marketing",
      "Workflow automations",
      "Tracking and analytics",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: "$197",
    intro: "Add tools for outreach, disposition, and your buyer network.",
    features: [
      "Everything in Standard",
      "Realtor Outreach AI",
      "Disposition AI",
      "Buyers list with 2M+ contacts",
      "Exclusive Skool community access",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$297",
    intro: "Bring your CRM, AI team, and mentorship together.",
    features: [
      "Everything in Elite",
      "Four AI agents",
      "Full mentorship access",
    ],
  },
];

const capabilities = [
  {
    icon: MessagesSquareIcon,
    title: "Keep the full conversation",
    body: "Contacts, messages, notes, calls, and tasks together. Give your team the context to pick up where the conversation left off.",
    label: "CONVERSATIONS",
    span: true,
  },
  {
    icon: Layers3Icon,
    title: "Give every opportunity a next step",
    body: "Build pipelines around your process. Assign ownership, follow progress, and see what needs attention.",
    label: "PIPELINES",
  },
  {
    icon: WorkflowIcon,
    title: "Make follow-up part of the process",
    body: "Trigger messages, reminders, tasks, and handoffs when activity changes. Add approval steps where your team needs to decide.",
    label: "AUTOMATION",
  },
  {
    icon: CalendarDaysIcon,
    title: "Keep appointments connected",
    body: "Manage availability and bookings alongside the people and opportunities they belong to.",
    label: "BOOKINGS",
  },
  {
    icon: BarChart3Icon,
    title: "Understand what is moving",
    body: "Review pipeline activity, stage changes, and owner-level reporting to decide where to focus next.",
    label: "REPORTING",
  },
];

const agents = [
  {
    name: "Jessica",
    role: "Seller conversations",
    icon: MessageCircleIcon,
    description:
      "Seller calls, texts, and follow-up to keep the conversation moving.",
  },
  {
    name: "Alex",
    role: "CRM operations",
    icon: ListChecksIcon,
    description:
      "Tasks, pipeline hygiene, and reporting to help keep your workspace organized.",
  },
  {
    name: "Atlas",
    role: "Deal analysis",
    icon: ScanSearchIcon,
    description:
      "Comparable sales and deal analysis to support your next decision.",
  },
  {
    name: "Mason",
    role: "Agreement preparation",
    icon: FileCheck2Icon,
    description:
      "Purchase agreement preparation using the terms your team approves.",
  },
];

function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="home-text-link">
      {children}
      <ArrowUpRightIcon aria-hidden className="size-4 shrink-0" />
    </Link>
  );
}

function HomeHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="home-section-heading">
      <p className="home-eyebrow">{label}</p>
      <h2>{title}</h2>
      {children ? <p className="home-section-copy">{children}</p> : null}
    </div>
  );
}

function WorkspaceArtwork() {
  return (
    <div
      className="workspace-art"
      aria-label="Jarvis connects your contacts, conversations, workflows, and reporting"
      role="img"
    >
      <div className="workspace-orbit workspace-orbit-outer" />
      <div className="workspace-orbit workspace-orbit-inner" />
      <div className="workspace-axis workspace-axis-one" />
      <div className="workspace-axis workspace-axis-two" />
      <div className="workspace-core">
        <span>J</span>
        <span className="workspace-core-label">JARVIS</span>
      </div>
      <div className="workspace-node workspace-node-one">
        <UsersRoundIcon aria-hidden />
        <span>Contacts</span>
      </div>
      <div className="workspace-node workspace-node-two">
        <MessagesSquareIcon aria-hidden />
        <span>Conversations</span>
      </div>
      <div className="workspace-node workspace-node-three">
        <WorkflowIcon aria-hidden />
        <span>Workflows</span>
      </div>
      <div className="workspace-node workspace-node-four">
        <BarChart3Icon aria-hidden />
        <span>Reporting</span>
      </div>
      <span className="workspace-art-caption">YOUR BUSINESS, CONNECTED.</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="jarvis-home">
      <section className="home-hero">
        <Container width="wide" className="home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-eyebrow">
              <span className="home-eyebrow-dot" /> Built around your business
            </p>
            <h1>
              Your leads.
              <br />
              Your follow-up.
              <br />
              <span>Your next move.</span>
            </h1>
            <p className="home-hero-description">
              Bring your contacts, conversations, pipelines, and automations
              together in Jarvis. Choose the CRM plan that fits your business,
              then add the coaching, AI, data connections, or custom setup you
              need.
            </p>
            <div className="home-hero-actions">
              <Link
                href="/pricing"
                className={cn(buttonVariants({ size: "lg" }), "home-primary")}
              >
                Explore Jarvis plans
                <ArrowRightIcon aria-hidden className="size-4" />
              </Link>
              <a href={quentinContactUrl} className="home-dm-link">
                DM Q for custom pricing to save money.
                <ArrowUpRightIcon aria-hidden className="size-4 shrink-0" />
              </a>
            </div>
            <p className="home-hero-caption">
              CRM plans from <strong>$97/month.</strong> Add services as your
              business needs them.
            </p>
          </div>
          <WorkspaceArtwork />
        </Container>
        <Container width="wide">
          <div className="home-capability-strip">
            <span>ONE WORKSPACE. MORE CONNECTED.</span>
            <p>Contacts &amp; conversations</p>
            <p>Pipelines &amp; follow-up</p>
            <p>AI &amp; automation</p>
            <a href="#crm-features" aria-label="Explore CRM features">
              <ArrowDownIcon aria-hidden className="size-4" />
            </a>
          </div>
        </Container>
      </section>

      <section id="crm-features" className="home-section">
        <Container width="wide">
          <div className="home-heading-row">
            <HomeHeading
              label="THE JARVIS WORKSPACE"
              title="Keep your business moving."
            >
              Bring the daily work into focus, from the first conversation to
              the next decision.
            </HomeHeading>
            <TextLink href="/products/jarvis-crm">Explore the CRM</TextLink>
          </div>
          <div className="home-feature-grid">
            {capabilities.map((item) => (
              <article
                key={item.label}
                className={cn("home-feature", item.span && "home-feature-wide")}
              >
                <div className="home-feature-top">
                  <item.icon aria-hidden className="size-6" strokeWidth={1.4} />
                  <span>{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.span ? (
                  <div className="conversation-channels" aria-hidden>
                    <span>Contact</span>
                    <span>Messages</span>
                    <span>Notes</span>
                    <span>Next steps</span>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="crm-pricing" className="home-section home-section-tinted">
        <Container width="wide">
          <HomeHeading
            label="JARVIS CRM PLANS"
            title="Start with the plan that fits."
          >
            Your workspace is the foundation. Choose the tools and support that
            match where your business is going.
          </HomeHeading>
          <div className="home-plans">
            {planFeatures.map((plan) => (
              <article
                key={plan.id}
                className={cn(
                  "home-plan",
                  plan.id === "premium" && "home-plan-premium",
                )}
              >
                <div className="home-plan-top">
                  <h3>{plan.name}</h3>
                  {plan.id === "premium" ? (
                    <span className="home-plan-tag">CRM + AI + MENTORSHIP</span>
                  ) : null}
                </div>
                <p className="home-plan-price">
                  {plan.price}
                  <span>/month</span>
                </p>
                <p className="home-plan-intro">{plan.intro}</p>
                <Link
                  href={`/checkout/${plan.id}`}
                  className={cn(
                    buttonVariants({
                      variant: plan.id === "premium" ? "primary" : "secondary",
                      size: "lg",
                    }),
                    "w-full",
                  )}
                >
                  Choose {plan.name}
                  <ArrowRightIcon aria-hidden className="size-4" />
                </Link>
                <div className="home-plan-divider" />
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon aria-hidden className="size-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.id === "premium" ? (
                  <p className="home-plan-footnote">
                    Four defined roles, working alongside your team.
                  </p>
                ) : null}
              </article>
            ))}
          </div>
          <div className="home-pricing-note">
            <p>
              Monthly subscriptions renew until canceled. Communications usage
              and separately scoped services may cost extra. Review your
              checkout and service scope before purchasing.
            </p>
            <TextLink href="/pricing">Compare all features</TextLink>
          </div>
          <p className="home-purchase-note">
            Jarvis purchases are non-refundable except where a refund is
            required by law. The <Link href="/terms">Terms and Conditions</Link>{" "}
            apply. Review the price, billing frequency, included services, and
            agreed scope before purchasing.
          </p>
        </Container>
      </section>

      <section className="home-section">
        <Container width="wide">
          <div className="home-heading-row">
            <HomeHeading
              label="INCLUDED WITH PREMIUM"
              title="Meet your four-agent team."
            >
              Support for the conversations, operations, analysis, and
              preparation that sit behind your real estate business.
            </HomeHeading>
            <span className="home-outline-tag">
              <BotIcon aria-hidden className="size-4" /> 4 AI agents included
            </span>
          </div>
          <div className="home-agent-grid">
            {agents.map((agent, index) => (
              <article className="home-agent" key={agent.name}>
                <div className="home-agent-top">
                  <span className="home-agent-number">0{index + 1}</span>
                  <agent.icon
                    aria-hidden
                    className="size-5"
                    strokeWidth={1.4}
                  />
                </div>
                <h3>{agent.name}</h3>
                <p className="home-agent-role">{agent.role}</p>
                <p>{agent.description}</p>
              </article>
            ))}
          </div>
          <div className="home-inline-note">
            <p>
              Need a different role or a more tailored setup? Explore a custom
              agent built around your business.
            </p>
            <TextLink href="/products#custom-ai-agent">
              Explore Custom AI Agents
            </TextLink>
          </div>
        </Container>
      </section>

      <section id="services" className="home-section home-section-tinted">
        <Container width="wide">
          <div className="home-heading-row">
            <HomeHeading
              label="GO FURTHER WITH JARVIS"
              title="More support. Your way."
            >
              Connect your tools, shape your CRM, or work directly with Quentin.
              Each service has its own scope and purchase.
            </HomeHeading>
            <TextLink href="/products">All products &amp; services</TextLink>
          </div>
          <div className="home-service-grid">
            {personalServices.map((service) => (
              <article key={service.id} className="home-service">
                <div className="home-feature-top">
                  <service.icon
                    aria-hidden
                    className="size-6"
                    strokeWidth={1.4}
                  />
                  <span>{service.category}</span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.includes.slice(0, 3).map((item) => (
                    <li key={item}>
                      <CheckIcon aria-hidden className="size-3.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="home-service-bottom">
                  <div>
                    <strong>{serviceCheckouts[service.id].price}</strong>
                    <span>
                      {service.id === "custom-ai-agent"
                        ? "one-time build fee"
                        : "one time"}
                    </span>
                  </div>
                  <TextLink href={`/products#${service.id}`}>
                    View service
                  </TextLink>
                </div>
                {service.id === "custom-ai-agent" ? (
                  <p className="home-small-note">
                    Ongoing services and usage may be quoted separately.
                  </p>
                ) : null}
              </article>
            ))}
          </div>
          <div className="home-inline-note">
            <p>Questions about the right fit or a broader project?</p>
            <a href={quentinContactUrl} className="home-text-link">
              DM Q for custom pricing to save money.
              <ArrowUpRightIcon aria-hidden className="size-4 shrink-0" />
            </a>
          </div>
        </Container>
      </section>

      <section className="home-section">
        <Container width="wide">
          <HomeHeading
            label="SET UP. FIND OPPORTUNITIES. KEEP LEARNING."
            title="Build on your foundation."
          >
            Bring in hands-on help, lead sourcing, and practical education as
            your needs grow.
          </HomeHeading>
          <div className="home-extra-grid">
            <article className="home-extra">
              <span className="home-eyebrow">HANDS-ON SETUP</span>
              <h3>Private onboarding</h3>
              <p className="home-extra-price">
                $300 <span>one time</span>
              </p>
              <p>Get help setting up Jarvis and learning how to use it.</p>
              <ul>
                <li>
                  <CheckIcon aria-hidden /> A2P setup
                </li>
                <li>
                  <CheckIcon aria-hidden /> Website creation
                </li>
                <li>
                  <CheckIcon aria-hidden /> Two private coaching sessions
                </li>
              </ul>
              <p className="home-small-note">
                A separate purchase from your CRM subscription.
              </p>
              <TextLink href="/onboarding">Get private onboarding</TextLink>
            </article>
            <article className="home-extra">
              <span className="home-eyebrow">LEAD SOURCING</span>
              <h3>Lead Scraper</h3>
              <p className="home-extra-price">
                $500 <span>per county</span>
              </p>
              <p>
                Turn selected public records and agreed sources into organized
                leads your team can work.
              </p>
              <ul>
                <li>
                  <CheckIcon aria-hidden /> Sourcing and data cleanup
                </li>
                <li>
                  <CheckIcon aria-hidden /> Available enrichment and
                  deduplication
                </li>
                <li>
                  <CheckIcon aria-hidden /> Scoring and routing
                </li>
              </ul>
              <p className="home-small-note">
                Coverage and available fields vary by market.
              </p>
              <TextLink href="/products/lead-scraper">
                Explore Lead Scraper
              </TextLink>
            </article>
            <article className="home-extra home-education">
              <span className="home-eyebrow">TRAINING &amp; COMMUNITY</span>
              <h3>Learn with Quentin.</h3>
              {coachingServices.map((program) => (
                <div key={program.id} className="home-community">
                  <h4>{program.name}</h4>
                  <p>
                    {program.id === "ai-cheat-codes"
                      ? "Practical AI training, prompts, templates, courses, and live workflow discussions."
                      : "Distressed-property education, county-data workflows, deal reviews, and community support."}
                  </p>
                  <TextLink href={program.href}>Explore on Skool</TextLink>
                </div>
              ))}
              <p className="home-small-note">
                Visit Skool for current membership options and resources.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section id="how-it-works" className="home-section home-bundle-section">
        <Container width="wide">
          <div className="home-bundle-intro">
            <div>
              <p className="home-eyebrow">CONNECTED AROUND YOUR BUSINESS</p>
              <h2>
                Your tools.
                <br />
                <span>Your process.</span>
                <br />
                One clear plan.
              </h2>
            </div>
            <div>
              <p>
                Start with Jarvis and connect the services your business needs.
                We map the work, agree on scope, and configure the tools
                included in your implementation.
              </p>
              <p>
                Custom projects can include pipelines, multi-step workflows,
                integrations, specialized AI roles, and human approval steps
                where your team makes the decision.
              </p>
              <a href={quentinContactUrl} className="home-text-link">
                DM Q for custom pricing to save money.
                <ArrowUpRightIcon aria-hidden className="size-4 shrink-0" />
              </a>
            </div>
          </div>
          <div className="home-bundles">
            <article>
              <NetworkIcon aria-hidden />
              <h3>CRM + Lead Scraper</h3>
              <p>
                Combine your CRM with scoped sourcing, cleanup, enrichment,
                scoring, and routing.
              </p>
            </article>
            <article>
              <BotIcon aria-hidden />
              <h3>CRM + Xcerebro</h3>
              <p>
                Connect scoped AI roles, conversation handling, approval rules,
                and activity logging.
              </p>
            </article>
            <article>
              <WorkflowIcon aria-hidden />
              <h3>Custom CRM bundle</h3>
              <p>
                Bring CRM, AI, lead sourcing, custom workflows, and integrations
                into an agreed plan.
              </p>
            </article>
          </div>
          <p className="home-small-note">
            Bundle scope and pricing are quoted together. Premium already
            includes four AI agents; additional deployments are separate.
          </p>
        </Container>
      </section>

      <section className="home-final">
        <Container width="wide">
          <div className="home-final-inner">
            <p className="home-eyebrow">YOUR NEXT MOVE</p>
            <h2>
              Build the business.
              <br />
              <span>Bring it together in Jarvis.</span>
            </h2>
            <div className="home-final-actions">
              <Link
                href="/pricing"
                className={cn(buttonVariants({ size: "lg" }), "home-primary")}
              >
                Explore Jarvis plans
                <ArrowRightIcon aria-hidden className="size-4" />
              </Link>
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "home-primary",
                )}
              >
                Browse products &amp; services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
