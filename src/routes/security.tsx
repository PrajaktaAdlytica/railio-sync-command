import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — Railixa" },
      {
        name: "description",
        content: "Security direction and production requirements for Railixa.",
      },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <LegalPage
      eyebrow="Security direction"
      title="Security claims should follow evidence."
      introduction="Railixa is not presented here as certified, production-hosted, or approved for safety-critical use. The website identifies the security workstreams a real pilot would need to resolve."
      icon={ShieldCheck}
      tone="blueprint"
      sections={[
        {
          title: "Identity and access",
          body: "A production design would define identity providers, strong authentication, role and line-level permissions, joiner-mover-leaver controls, privileged access, and auditable administrative actions. The current sign-in screen is visual only.",
        },
        {
          title: "Data and infrastructure",
          body: "Hosting region, encryption, key management, backup, recovery, retention, logging, subprocessors, and incident response would be selected and documented for the agreed pilot scope. No specific provider or region is claimed by this demo.",
        },
        {
          title: "Rail and regulatory assessment",
          body: "Railway safety applicability, NIS2 obligations, data protection roles, accessibility, supplier assurance, and relevant standards would require specialist assessment. Product copy must only reference alignment or certification after that evidence exists.",
        },
      ]}
    />
  );
}
