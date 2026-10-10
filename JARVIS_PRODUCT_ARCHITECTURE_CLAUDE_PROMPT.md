# JARVIS WEBSITE — PRODUCT CLARITY + HOMEPAGE RESTRUCTURE PROMPT

> **Premium AI agents — October 9, 2026:** The owner now includes four AI agents in the Jarvis CRM Premium plan. Show the inclusion in Premium pricing and checkout details. The supplied operating manual is a client-specific example of four real estate roles; do not publish its client data, phone numbers, internal rules, or approval thresholds. Standalone or additional xCerebro deployments, Lead Scraper, and Custom Builds remain separate offers. This direction supersedes older blanket statements below that all agents are separate from CRM plans.

> **Build My System:** General and CRM buttons open `/checkout`, where visitors choose Standard, Elite, or Premium and continue directly to that plan's configured payment link. Use `site.cta.primary` for these CTAs. On the Custom Builds page, use `site.cta.customBuild` for the header, navigation menus, and section CTA to open `/custom-build-request`. The Custom CRM bundle on pricing also opens that form. Plan prices remain unchanged; Premium includes four AI agents.

> **Legacy build links:** `/build` must render the same plan choices and payment links as `/checkout`, including in the GitHub Pages static export. The custom-build intake lives at `/custom-build-request`. It asks for first name, last name, email, phone, business or industry, preferred date and time, and city or time zone, with optional business name, other availability, and project notes. A request does not reserve an appointment. Submission delivery is not connected yet; do not show a success confirmation or log personal details until requests are saved through a real hosted form or backend. See `docs/custom-build-intake.md`.

> **Payments:** Use the owner's replacement SaaS Configurator sale links in `src/content/payments.ts`: **Standard $97/month** on Stripe, **Elite $197/month** and **Premium $297/month** on FastPayDirect. Each replacement checkout was inspected and matched its plan and monthly amount. `/checkout/standard`, `/checkout/elite`, and `/checkout/premium` open their respective hosted payment pages; `/checkout/basic` remains a compatible alias for Standard. Preserve GitHub Pages compatibility with hosted checkout. Keep visitor-facing provider copy neutral when shared across plans. `/checkout/return` is informational and is never proof of payment. SaaS provisioning and post-payment automations require verification in the owning account; no purchase or account-creation test has been performed. See `docs/stripe-setup.md`.

> **Copy style:** Do not use em dashes in visitor-facing sentences, headings, labels, captions, accessibility text, or page metadata. Use natural sentence breaks, commas, colons, or parentheses instead. Preserve numeric ranges and ordinary hyphenated words.

> **Plan inclusions:** The Elite hosted payment description mentions mentorship, but the owner explicitly chose to keep the current website features. Keep full mentorship under Premium only unless the owner changes that direction.

> **Private onboarding:** Offer a separate **one-time $300** package covering **A2P setup, website creation, and two private coaching sessions**. `/onboarding` opens the supplied FastPayDirect payment with the provider's post-purchase redirect to the supplied LeadConnector onboarding calendar. Show booking after payment in this flow. Never treat a browser flag as verified payment. Payment-side contacts, payments, workflows, and webhooks belong in location `eooxTNmjSBiqrf0deOuU`; calendar booking belongs in `zsODNuiVWJqICpsgxCNF`. Keep API tokens out of repository/public files. See `docs/private-onboarding.md` for verified resource IDs, the public-calendar limitation, and pending workflow work.

> **Typography and text motion — September 10, 2026:** Use the supplied word-stagger entrance sparingly on the CRM and xCerebro hero headlines. Inherit the existing Space Grotesk heading font, Inter body/UI font, and JetBrains Mono labels. Preserve natural word spacing and line wrapping. Text must remain readable in server-rendered HTML and with reduced motion; do not introduce a new font or animate every section.

> **Standalone website — September 10, 2026:** The owner supplied **https://xcerebro.ai/** for xCerebro AI Agents. Link its homepage preview, navigation, and footer entry to that website. Keep the existing local overview available with a clear link to the standalone site. Lead Scraper and Custom Builds still use their current pages until external URLs are provided.

> **Dashboard display preference:** Keep the original collapsible-sidebar dashboard in desktop views. Use the phone-style CRM board in mobile views. Show one view at a time, with no phone overlay on desktop. The current breakpoint is 1024px; smaller screens use the mobile board.

> **Latest direction — September 9, 2026:** Use the GitHub build as the baseline. The landing page focuses on **Jarvis CRM**: features, how it works, product demos, and CRM pricing. Give xCerebro AI Agents, Lead Scraper, and Custom Builds only a compact introduction with links to their separate pages, plus the **Products & Services** navigation menu. Keep detailed demos, comparisons, and AI/service explanations off the landing page. Preserve each product's name and optional **CRM bundle** positioning; additional products are scoped separately from the $97/month CRM plan. Use the existing product/service pages until the owner provides finished external website URLs. This direction supersedes conflicting homepage/navigation guidance below. Do not commit or publish new changes without approval.

You are working inside the existing `jarvis-new` Next.js project.

IMPORTANT: This is an iteration on the CURRENT build, not a rebuild.

## PRIMARY GOAL

The current site looks good visually, but the product architecture is too blended. Visitors must immediately understand that we offer different products/services that can work independently or together.

Do NOT name everything "Jarvis."

The commercial structure is:

1. **Jarvis CRM** — the CRM/platform
2. **xCerebro AI Agents** — the AI workforce product
3. **Lead Scraper** — the lead/data scraping product
4. **Custom Builds** — the done-for-you implementation/service offering

Jarvis is the master company/umbrella brand, but these offers need distinct customer-facing identities.

The user should understand the difference between these four within 10 seconds.

## NON-NEGOTIABLE NAMING

### Jarvis CRM

The core CRM and revenue workflow platform.

### xCerebro AI Agents

The AI workforce product.
Do NOT rename this Jarvis AI Staff, Jarvis Agents, or Jarvis Workforce.
Use "xCerebro AI Agents" or "xCerebro AI Workforce."

### Lead Scraper

The lead-generation/data product.
Do NOT use "Jarvis Lead Engines" as the primary product name.
You may use "lead engine" descriptively inside product copy, but the product heading must be "Lead Scraper."

### Custom Builds

The service offering.
Do NOT call this "Jarvis Custom" in primary customer-facing copy.

## POSITIONING

Jarvis remains the umbrella brand and can still use:
**AI Revenue Operating System**
and:
**Built around your business.**

Core idea:
**Use one. Or connect the entire system.**

## HOMEPAGE STRUCTURE

Do not remove the existing hero unless necessary.

Restructure the homepage to follow this order:

1. Navigation
2. Hero
3. Products & Services
4. How the products connect
5. Jarvis CRM proof / product UI
6. xCerebro AI Agents
7. Lead Scraper
8. Custom Builds
9. Software stack comparison
10. Industry/custom pipeline section
11. Customer proof/testimonials
12. Team / human + AI distinction
13. Final CTA
14. Footer

Do NOT duplicate sections that already exist. Reuse/refactor current components where possible.

## HERO

Keep the futuristic premium direction.

Eyebrow:
**THE AI REVENUE OPERATING SYSTEM**

Headline:
**Run the CRM. Deploy the agents. Generate the leads. Connect the whole operation.**

Supporting copy:
**Jarvis gives you the CRM. xCerebro gives you the AI workforce. Lead Scraper finds and prepares targeted opportunities. And when your business needs something different, we build it.**

Primary CTA:
**Build My System**

Secondary CTA:
**Explore Products**

The hero must make the product separation clearer than the current version.
Do not turn the hero into a four-card grid. Keep it visually cinematic and premium.

## PRODUCTS & SERVICES SECTION

Place this immediately after the hero.

Eyebrow:
**PRODUCTS & SERVICES**

Headline:
**One company. Different tools for different jobs.**

Supporting copy:
**Start with the product you need today, or connect the full system as your operation grows.**

Create four distinct premium product cards.

### CARD 1 — JARVIS CRM

Title: **Jarvis CRM**
Tagline: **Run the business.**
Copy:
**Manage leads, conversations, pipelines, follow-up, appointments, workflows, reporting, websites, forms, and sales activity from one operating hub.**
Capabilities:

- CRM & contacts
- Custom pipelines
- SMS, email & calling
- Workflow automation
- Calendars & appointments
- Forms & funnels
- Reporting & dashboards
  CTA:
  **Explore Jarvis CRM**
  Visual:
  Show a real software/dashboard/pipeline visual.

### CARD 2 — XCEREBRO AI AGENTS

Title: **xCerebro AI Agents**
Tagline: **Put AI on the work.**
Copy:
**Deploy role-based AI agents for sales, follow-up, operations, marketing, support, research, and custom business responsibilities.**
Capabilities:

- Lead management
- Follow-up
- Appointment setting
- Sales support
- Operations
- Marketing
- Custom AI roles
  CTA:
  **Meet the AI Agents**
  Visual:
  Use professional AI role/status cards, activity feeds, permissions, approvals, and agent states.
  Do not use robots or human-like AI portraits.

### CARD 3 — LEAD SCRAPER

Title: **Lead Scraper**
Tagline: **Find the opportunities.**
Copy:
**Turn county records, public data, and custom sources into clean, organized leads that can be enriched, scored, and routed into your sales process.**
Capabilities:

- County/public records
- Foreclosure
- Pre-foreclosure
- Probate
- Tax delinquent
- Code violations
- Vacant property data
- Custom data sources
- Cleanup & deduplication
- Enrichment
- Lead scoring
- CRM routing
  CTA:
  **Explore Lead Scraper**
  Visual:
  This must look like a real independent product, not a small feature.

Create a strong scraper UI visual showing demo data such as:
SOURCE: Richland County Public Records
STATUS: RUNNING
Records found: 1,284
Cleaned: 1,284
Enriched: 1,109
Duplicates removed: 337
Priority leads: 312

Pipeline:
SOURCE → SCRAPE → CLEAN → ENRICH → DEDUPE → SCORE → ROUTE

Final status:
**Sent to CRM**

Use a premium data-console/dashboard style.
Use motion to show records moving through stages, but keep it subtle and SSR-safe.

### CARD 4 — CUSTOM BUILDS

Title: **Custom Builds**
Tagline: **We build the system around you.**
Copy:
**For businesses with non-standard workflows, we map the process and build the pipelines, automations, integrations, agents, dashboards, and data flows around how the company actually operates.**
Capabilities:

- Custom CRM pipelines
- Multi-pipeline systems
- Workflow automation
- Custom integrations
- Custom AI agents
- Custom lead systems
- Dashboards
- Data flows
  CTA:
  **Build My System**
  Visual:
  Show a workflow/system map, not another generic card.

## CONNECTED SYSTEM SECTION

Immediately after Products & Services, add a visual system section.

Eyebrow:
**CONNECTED WHEN YOU NEED IT**

Headline:
**Use one. Or connect the entire system.**

Supporting copy:
**Each product can stand on its own. Together, they create a connected revenue operation from lead generation to follow-up and execution.**

Create an animated system diagram:
LEAD SCRAPER
↓
JARVIS CRM
↙           ↘
XCEREBRO     HUMAN TEAM
AI AGENTS
↘           ↙
CUSTOM AUTOMATION / BUILDS

The diagram should communicate:

- Lead Scraper finds/prepares data
- Jarvis CRM stores and manages the opportunity
- xCerebro works assigned tasks
- Humans approve and close material actions
- Custom Builds connects non-standard processes

Motion must represent data movement and handoffs, not decorative animation.

## LEAD SCRAPER DEDICATED SECTION

Give Lead Scraper its own full-width section later on the homepage.

Headline:
**From public data to a sales-ready lead.**

Copy:
**Lead Scraper collects targeted records, cleans the data, removes duplicates, enriches what can be enriched, scores the opportunity, and routes it into the workflow you choose.**

Show a large product UI mockup.

Create tabs or filters for example source types:

- Foreclosure
- Probate
- Tax Delinquent
- Code Violations
- Vacant Properties
- Custom Source

Include a small note:
**Available sources and data fields vary by market, source, and public access.**

Do NOT promise unlimited or guaranteed leads.

## XCEREBRO DEDICATED SECTION

Headline:
**AI agents with a job, a scope, and a set of rules.**

Supporting copy:
**xCerebro agents are assigned defined responsibilities, connected to approved tools, and governed by permissions, approvals, logs, and escalation rules.**

Show agent role cards such as:

- Lead Manager
- Appointment Setter
- Follow-Up Agent
- Operations Agent
- Marketing Agent
- Custom Agent

Each card can show:

- status
- responsibilities
- connected tools
- last action
- approvals
- escalations

CTA:
**Explore xCerebro**

## JARVIS CRM DEDICATED SECTION

Headline:
**The operating hub for your revenue workflow.**

Copy:
**Jarvis CRM gives your team one place to manage leads, conversations, pipelines, tasks, appointments, automations, and reporting.**

Show product UI.

Do not imply every xCerebro agent or Lead Scraper service is automatically included in the base CRM subscription.

Clearly separate Jarvis CRM from add-on products and services.

## CUSTOM BUILDS DEDICATED SECTION

Headline:
**Your process does not need to fit our template.**

Supporting copy:
**We map how your business works, then build the system around it.**

Show examples:

- Real estate acquisition
- Home services
- Agency sales
- Professional services
- Custom sales process

CTA:
**Map My Workflow**

## NAVIGATION

Update the main navigation.

Use:

**Products**

- Jarvis CRM
- xCerebro AI Agents
- Lead Scraper

**Services**

- Custom Builds
- Custom Pipelines
- AI Agent Installation
- Automation & Integrations

Then:

- Solutions
- Customers
- Pricing
- Resources

Right side:

- Sign In
- Build My System

Do not show "AI Staff" or "Lead Engines" as top-level primary product names anymore.

## PRICING / COMMERCIAL CLARITY

Do not imply that all four products are included in $97/month.

Where pricing is shown:

**Jarvis CRM**
Starting from $97/month

**xCerebro AI Agents**
Separate product / deployment options

**Lead Scraper**
Separate product/service; pricing based on source, market, and scope

**Custom Builds**
Custom quote / scoped implementation

Do not fabricate prices beyond already verified/public pricing.

## SOFTWARE STACK COMPARISON

Keep the existing software-stack comparison section.

Make clear the comparison is specifically about **Jarvis CRM/core platform capabilities**, not all products/services.

Add a note:
**Comparison reflects Jarvis CRM platform capabilities. AI agent deployments, lead scraping/data services, communications usage, and custom implementation may be priced separately.**

## VISUAL DIRECTION

Keep the current premium futuristic direction.

Use:

- deep black/navy
- electric cobalt
- cyan accents
- restrained neon
- subtle HUD/system lines
- Space Grotesk headings
- Inter body/UI
- JetBrains Mono for labels/metrics/system text

Avoid:

- AI robots
- generic AI faces
- excessive glassmorphism
- random gradients
- glowing everything
- gaming-site aesthetic
- excessive 3D
- unnecessary parallax
- huge blocks of text

The experience should feel:
**futuristic enterprise SaaS + operating system**
not
**AI template / cyberpunk game**

## MOTION RULES

Use purposeful motion only for:

- data moving through Lead Scraper
- CRM pipeline movement
- AI agent activity/status
- handoffs between products
- approval states
- connected-system diagram

Keep all animation deterministic between SSR and first client render.

Respect:
`prefers-reduced-motion`

Do not reintroduce the hydration bug that was previously fixed.

Do not use random values, Date.now(), Math.random(), or client-only initial animation states that differ from SSR.

## TECHNICAL REQUIREMENTS

Work inside the current architecture.
Do not rebuild the site from scratch.
Reuse existing components where appropriate.

Keep Server Components by default.
Use Client Components only when required for interactions, motion, tabs, product demos, or animated diagrams.

Maintain:

- accessibility
- mobile responsiveness
- keyboard navigation
- reduced-motion support
- strong contrast
- semantic HTML
- performance

## CONTENT RULES

Do not fabricate:

- testimonials
- case-study results
- usage metrics
- lead counts presented as real customer results
- pricing
- customer logos
- data availability claims

Any demo data inside UI mockups must be clearly presented as example/demo data.

Do not promise:

- guaranteed leads
- guaranteed revenue
- "never miss a deal"
- unlimited data

## IMPLEMENTATION APPROACH

Do not ask me a series of small design questions.

Make reasonable implementation decisions based on the existing Jarvis design system and this specification.

If something is not explicitly defined:

1. preserve the current design language
2. choose the cleaner/more premium option
3. avoid introducing new dependencies unless necessary
4. document the assumption in your completion summary

Only stop and ask me if a missing decision would create destructive changes or materially change product truth.

## BEFORE IMPLEMENTING

First inspect:

- current homepage sections
- current navigation
- current content data files
- existing animation utilities
- existing product components
- current mobile behavior

Then give me ONE concise implementation plan.

After I approve the plan, implement the full scope without asking section-by-section questions.

## FINAL ACCEPTANCE CHECK

Before saying the work is complete, verify:

1. A first-time visitor can distinguish Jarvis CRM, xCerebro AI Agents, Lead Scraper, and Custom Builds within 10 seconds.
2. xCerebro is not renamed as a Jarvis feature.
3. Lead Scraper looks like a separate product/service.
4. The homepage clearly explains how the products connect.
5. The base CRM price is not presented as including every product.
6. Desktop navigation reflects Products vs Services.
7. Mobile navigation reflects the same architecture.
8. No existing important homepage content was accidentally removed.
9. No hydration warnings.
10. Reduced-motion works.
11. Responsive layout works at mobile/tablet/desktop.
12. `npm run lint` passes.
13. `npx tsc --noEmit` passes.
14. `npm run build` passes.
15. Summarize every file changed.
16. Do NOT commit automatically. Wait for my approval before committing.
