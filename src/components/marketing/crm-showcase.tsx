import { DashboardPanel } from "@/components/product/dashboard-panel";
import { ProductFrame } from "@/components/product/product-frame";
import { WorkflowCanvas } from "@/components/product/workflow-canvas";
import { Container } from "@/components/ui/container";
import { ParallaxFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import { Section, SectionHeader } from "@/components/ui/section";
import { brand } from "@/content/products";

/**
 * Two CRM surfaces the product page does not otherwise show — reporting and
 * automation — each revealed as it scrolls in. The page already frames
 * pipelines and conversations above; showing them a second time here would
 * be the same mockup twice on one page.
 *
 * The panels describe capabilities without showing invented account data.
 */
export function CrmShowcase() {
  return (
    <Section id="crm-showcase">
      <Container width="wide" className="flex flex-col gap-4">
        <SectionHeader
          eyebrow={`${brand.crm} / in use`}
          title="The parts you see every day"
          description="Organize the information your team uses to review activity and configure the next steps in your process."
        />

        <ParallaxFeatureSection
          features={[
            {
              id: "reporting",
              eyebrow: "Reporting",
              title: "Read from the records the team already works",
              description:
                "Build reporting around the opportunity, appointment, conversation, and task data available in your account.",
              visual: (
                <ProductFrame label="Dashboards / Revenue">
                  <DashboardPanel />
                </ProductFrame>
              ),
            },
            {
              id: "automation",
              eyebrow: "Automation",
              title: "Workflows that fire from what happens in the pipeline",
              description:
                "Configure stage changes and other events to trigger follow-up tasks, reminders, and handoffs, with human review where your process requires it.",
              visual: (
                <ProductFrame label="Workflows / Human approval">
                  <WorkflowCanvas />
                </ProductFrame>
              ),
              reverse: true,
            },
          ]}
        />
      </Container>
    </Section>
  );
}
