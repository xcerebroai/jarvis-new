import { MailIcon, MessageSquareIcon, PhoneIcon } from "lucide-react";

const channels = [
  {
    name: "Text messages",
    icon: MessageSquareIcon,
    detail: "Two-way SMS conversations",
  },
  { name: "Email", icon: MailIcon, detail: "Messages attached to contacts" },
  { name: "Calls", icon: PhoneIcon, detail: "Call activity and follow-up" },
];

export function ConversationInbox() {
  return (
    <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-[1fr_1.5fr]">
      <ul className="flex flex-col gap-px bg-line">
        {channels.map((channel) => (
          <li
            key={channel.name}
            className="flex items-start gap-3 bg-ink-850 p-4"
          >
            <channel.icon
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-cobalt-400"
              strokeWidth={1.5}
            />
            <div>
              <h3 className="text-sm font-medium text-paper">{channel.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {channel.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-4 bg-ink-850 p-5">
        <h3 className="type-label text-cobalt-400">Contact context</h3>
        <ul className="flex flex-col gap-3 text-sm text-muted">
          <li>Communication history</li>
          <li>Notes and assigned owner</li>
          <li>Pipeline stage</li>
          <li>Tasks and next steps</li>
        </ul>
        <p className="hairline-t pt-4 text-xs leading-relaxed text-faint">
          Bring supported communication channels into your account so your team
          can follow the conversation.
        </p>
      </div>
    </div>
  );
}
