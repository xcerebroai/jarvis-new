import type { LucideIcon } from "lucide-react";
import {
  CalendarCheckIcon,
  GitBranchIcon,
  HandshakeIcon,
  LifeBuoyIcon,
  RepeatIcon,
  SettingsIcon,
  UserRoundCheckIcon,
} from "lucide-react";

export type Agent = {
  id: string;
  name: string;
  role: string;
  icon: LucideIcon;
  summary: string;
  /** What wakes the agent up. */
  triggers: string[];
  /** What it is allowed to do on its own. */
  actions: string[];
  /** Where a human signs off. */
  approval: string;
};

export const agents: Agent[] = [
  {
    id: "lead-concierge",
    name: "Lead Concierge",
    role: "First response",
    icon: UserRoundCheckIcon,
    summary:
      "Supports inbound response, qualification, and routing through the channels and criteria included in your setup.",
    triggers: ["New inbound lead", "Form submission", "Missed call"],
    actions: ["Reply and qualify", "Enrich record", "Route to owner"],
    approval: "Agree on permitted responses and human handoffs during setup.",
  },
  {
    id: "follow-up",
    name: "Follow-Up Agent",
    role: "Persistence",
    icon: RepeatIcon,
    summary:
      "Supports follow-up sequences with timing and stop rules configured around your process.",
    triggers: ["No reply within your chosen window", "Stage stalled", "Reactivation list"],
    actions: ["Send sequence step", "Log attempt", "Pause on reply"],
    approval: "Sequences pre-approved; new messaging needs sign-off.",
  },
  {
    id: "setter",
    name: "Appointment Setter",
    role: "Calendar",
    icon: CalendarCheckIcon,
    summary:
      "Supports scheduling through connected calendars and the booking rules included in your setup.",
    triggers: ["Lead qualified", "Reschedule request", "No-show"],
    actions: ["Offer times", "Book meeting", "Send reminders"],
    approval: "Books inside your rules; conflicts go to the owner.",
  },
  {
    id: "acquisition",
    name: "Acquisition Assistant",
    role: "Deal intake",
    icon: HandshakeIcon,
    summary:
      "Helps collect deal information and prepare a summary for your team to review.",
    triggers: ["New opportunity", "Offer requested", "Data received"],
    actions: ["Gather inputs", "Run criteria", "Prepare summary"],
    approval: "Every offer figure requires human approval.",
  },
  {
    id: "coordinator",
    name: "Pipeline Coordinator",
    role: "Throughput",
    icon: GitBranchIcon,
    summary:
      "Supports configured checks for missing fields, overdue tasks, and opportunities that need attention.",
    triggers: ["Stage timeout", "Missing field", "Task overdue"],
    actions: ["Nudge owner", "Update record", "Reassign"],
    approval: "Reassignment above a threshold needs a manager.",
  },
  {
    id: "support",
    name: "Support Agent",
    role: "Post-sale",
    icon: LifeBuoyIcon,
    summary:
      "Handles recurring customer questions from your own documentation and escalates the rest.",
    triggers: ["Inbound question", "Ticket created", "Status request"],
    actions: ["Answer from docs", "Update ticket", "Escalate"],
    approval: "Answers only from sources you approve.",
  },
  {
    id: "custom",
    name: "Custom Agent",
    role: "Your process",
    icon: SettingsIcon,
    summary:
      "A role built to your operation, with your triggers, tools, and approval gates.",
    triggers: ["Supported system events", "Schedule", "Manual dispatch"],
    actions: ["Defined by you", "Scoped integrations", "Approved record updates"],
    approval: "Scoped during the build.",
  },
];
