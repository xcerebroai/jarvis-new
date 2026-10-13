import { communityMembershipPolicy } from "./community-membership";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  description: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description:
    "How Jarvis collects, uses, protects, and shares information provided through our website and services.",
  sections: [
    {
      id: "privacy",
      title: "Our privacy commitment",
      paragraphs: [
        "Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, software, and other sites or services we own and operate.",
        "We only ask for personal information when we need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent, and explain why it is being collected and how it will be used.",
      ],
    },
    {
      id: "information",
      title: "Information we collect",
      paragraphs: [
        "The information we collect depends on how you use Jarvis and what you choose to provide. It may include your name, email address, phone number, business details, billing and subscription records, appointment information, account activity, customer records entered into the CRM, and technical information used to operate and secure the services.",
        "Payment details are entered on hosted checkout pages operated by our payment providers. Jarvis may receive transaction details needed to administer your purchase, but the marketing website does not collect complete card information directly.",
      ],
    },
    {
      id: "use",
      title: "How information is used",
      paragraphs: [
        "We use information to provide requested services, manage accounts and subscriptions, respond to inquiries, arrange onboarding, operate CRM and automation features, troubleshoot problems, improve our services, maintain security, comply with legal obligations, and resolve disputes.",
        "If you use Jarvis to manage your own contacts, you are responsible for having the rights and permissions required to collect, upload, process, and contact those individuals.",
      ],
    },
    {
      id: "retention-security",
      title: "Retention and security",
      paragraphs: [
        "We retain collected information only for as long as necessary to provide the requested service, operate accounts, meet legal or accounting obligations, maintain security, or resolve disputes.",
        "We protect stored information using commercially reasonable safeguards designed to prevent loss, theft, unauthorized access, disclosure, copying, use, or modification. No online service or storage system can guarantee complete security.",
      ],
    },
    {
      id: "sharing",
      title: "Sharing and service providers",
      paragraphs: [
        "We do not publicly disclose personally identifying information or share it with third parties for their own purposes except with your direction or consent, when needed to provide the requested service, or when required by law.",
        "We may use service providers for hosting, CRM functionality, payments, calendars, communications, integrations, support, analytics, and approved AI features. Those providers may process information needed to perform their services and may apply their own terms and privacy notices.",
        "Mobile numbers and SMS opt-in information are not sold or shared with third parties or affiliates for their own marketing. They may be provided to vendors that support message delivery and when disclosure is legally required.",
      ],
    },
    {
      id: "cookies-links",
      title: "Cookies and external links",
      paragraphs: [
        "Our website and services may use cookies or similar browser technologies to operate features, remember preferences, understand service usage, and maintain security. You can control cookies through your browser, although disabling necessary cookies may affect functionality.",
        "Our website may link to external sites that we do not operate. We do not control their content or practices and cannot accept responsibility for their privacy policies. Review the policies of each external service you use.",
      ],
    },
    {
      id: "choices",
      title: "Your choices",
      paragraphs: [
        "You may refuse a request for personal information, with the understanding that we may be unable to provide some requested services. Depending on applicable law, you may also have rights to request access, correction, or deletion of certain personal information.",
        "Marketing messages include the applicable opt-out method. Opting out of marketing does not cancel a paid subscription or prevent service and account notices permitted by law.",
      ],
    },
    {
      id: "acceptance-updates",
      title: "Acceptance and updates",
      paragraphs: [
        "Your continued use of the website or services is regarded as acceptance of this Privacy Policy. If you do not agree with this policy, do not use the website or services.",
        "We may update this policy as our services or legal requirements change. The revised policy will be posted here. If you have questions about how we handle personal information, contact Jarvis through the contact options provided on the website or inside your account.",
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  title: "Terms and Conditions",
  description:
    "The terms governing access to the Jarvis website, software subscriptions, purchases, and related services.",
  sections: [
    {
      id: "terms",
      title: "Terms",
      paragraphs: [
        "By accessing the Jarvis website, creating an account, subscribing, or purchasing a Jarvis product or service, you agree to these Terms and Conditions. These terms apply to all users, and you are responsible for complying with applicable laws and regulations. If you do not agree with these terms, do not use the website or services.",
        "You must be at least 18 years old and authorized to enter into this agreement for yourself or the business you represent. Materials on the website and services are protected by applicable copyright and trademark laws.",
      ],
    },
    {
      id: "services",
      title: "Services and purchases",
      paragraphs: [
        "Jarvis CRM subscriptions include the plan and billing interval shown at checkout. xCerebro AI Agents, Lead Scraper, Custom Builds, private onboarding, communications usage, integrations, and third-party services may be purchased or priced separately unless the checkout page or a written agreement expressly includes them.",
        "You are responsible for reviewing the final price, billing frequency, included features, usage charges, scope, and any written order or statement of work before purchasing. A signed order or statement of work may add terms for a specific service and controls for that service if it conflicts with these general terms.",
      ],
    },
    {
      id: "accounts",
      title: "Accounts and acceptable use",
      paragraphs: [
        "Provide accurate account and billing information, keep it current, protect your login credentials, and manage access for your authorized users. You are responsible for activity performed through your account and connected services.",
      ],
      bullets: [
        "Do not use the services unlawfully, deceptively, or to violate another person's rights.",
        "Do not send spam, impersonate others, harass recipients, or ignore required consent and opt-out rules.",
        "Do not upload malware, bypass security or access controls, disrupt the services, or attempt to access another customer's information.",
        "Do not reverse engineer, decompile, copy, resell, mirror, or publicly display Jarvis software or materials except as expressly permitted in writing.",
        "Do not submit data that you do not have the right or permission to use.",
      ],
    },
    {
      id: "billing",
      title: "Subscriptions and billing",
      paragraphs: [
        "By completing a recurring checkout, you authorize Jarvis and its payment provider to charge the amount and billing frequency shown at checkout. Subscriptions renew automatically until canceled. Usage charges and separately purchased services may be billed in addition to the subscription price when disclosed at checkout or in a written agreement.",
        "A payment confirmation or return page does not by itself confirm that payment was received, provisioning is complete, or an account is ready. Failed or reversed payments may interrupt access to the services.",
      ],
    },
    {
      id: "refunds-cancellation",
      title: "No refunds and cancellation",
      paragraphs: [
        "All purchases, subscription charges, usage charges, onboarding fees, and service payments made to Jarvis are final and non-refundable. By purchasing, clients agree that there are no refunds under any circumstances, except where a refund is required by applicable law.",
        "This no-refund policy applies regardless of usage, satisfaction, implementation status, appointment attendance, account activity, or whether the client chooses to stop using the service during a paid billing period.",
        `AI Cheat Codes and Real Estate Cheat Codes: ${communityMembershipPolicy}`,
        "You may cancel a recurring Jarvis subscription at any time through the subscription management options available in your account or through the cancellation method provided with your purchase. Cancellation stops future renewals and does not refund or credit any amount already paid.",
        "After cancellation, access continues until the end of the current paid billing period unless access is suspended earlier for a violation, security risk, payment reversal, or another reason permitted by these terms. After the paid period ends, the account may be deactivated and access to software, data, and related services may end.",
        "Deleting a bookmark, disconnecting an integration, stopping use, or opting out of marketing messages does not cancel a subscription.",
      ],
    },
    {
      id: "license",
      title: "Use license and ownership",
      paragraphs: [
        "Jarvis grants you a limited, non-exclusive, non-transferable right to use the purchased services during the applicable subscription or service period. This is a license to use the services and is not a transfer of ownership.",
        "Jarvis and its licensors retain all rights in the software, website, branding, templates, documentation, and pre-existing tools. You retain rights in materials you provide, subject to the permissions needed for Jarvis and its service providers to perform the requested services.",
        "This license terminates when your paid access ends or if you violate these terms. Upon termination, you must stop using protected Jarvis materials and destroy downloaded copies when requested or required.",
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      paragraphs: [
        "The website, software, AI outputs, data, and related materials are provided on an 'as is' and 'as available' basis. To the fullest extent permitted by law, Jarvis disclaims express and implied warranties, including merchantability, fitness for a particular purpose, non-infringement, accuracy, and uninterrupted availability.",
        "Jarvis does not guarantee leads, revenue, sales, approvals, delivery rates, business outcomes, or that AI-generated or sourced information will be complete or error-free. Review outputs and records before relying on them for customer communications or business decisions.",
      ],
    },
    {
      id: "limitations",
      title: "Limitations of liability",
      paragraphs: [
        "To the fullest extent permitted by law, Jarvis and its suppliers are not liable for indirect, incidental, special, consequential, or punitive damages, including loss of data, profit, revenue, opportunity, or business interruption, arising from use of or inability to use the website or services.",
        "Some jurisdictions do not allow certain warranty exclusions or liability limitations, so portions of these limitations may not apply to you. Nothing in these terms excludes a right or liability that cannot lawfully be excluded.",
      ],
    },
    {
      id: "accuracy-links",
      title: "Accuracy and external services",
      paragraphs: [
        "Website and service materials may contain technical, typographical, photographic, AI-generated, or data-source errors. Jarvis does not warrant that all materials are accurate, complete, or current and may change them without notice.",
        "Jarvis has not reviewed every external website or third-party service linked or connected to its services. A link or integration does not imply endorsement. Your use of payment providers, communications providers, calendars, AI providers, data sources, or other third-party services is subject to their own terms, charges, policies, and availability.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: [
        "Jarvis may use necessary, functionality, analytics, and third-party cookies or similar technologies to operate the website and services, remember preferences, maintain security, and understand usage. You can manage cookies in your browser, although blocking necessary cookies may prevent parts of the services from working.",
      ],
    },
    {
      id: "modifications",
      title: "Changes to these terms",
      paragraphs: [
        "Jarvis may revise these Terms and Conditions by posting an updated version on the website. Any revised terms are subject to applicable notice or consent requirements. Continued use after the updated terms take effect constitutes acceptance of the revised terms.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      paragraphs: [
        "These Terms and Conditions are governed by and construed in accordance with the laws of the State of Texas, without regard to conflict-of-law principles. Subject to any rights that cannot be waived by law, you submit to the jurisdiction of the courts located in Texas for disputes arising from these terms or the services.",
      ],
    },
  ],
};
