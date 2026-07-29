import { createFileRoute } from "@tanstack/react-router";
import { Database } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Railixa" },
      { name: "description", content: "Privacy note for the Railixa demonstration website." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy note"
      title="Clear about what this demonstration does with data."
      introduction="The current request-demo and sign-in experiences are local product demonstrations. They do not send the details you enter to Railixa or authenticate against a production service."
      icon={Database}
      tone="mint"
      sections={[
        {
          title: "Information entered in forms",
          body: "Form values are held temporarily in your browser while you use the page. Submitting the demo form only changes the on-screen state. A production release would need an identified controller, lawful basis, retention period, security controls, and contact route before collecting personal data.",
        },
        {
          title: "Operational data",
          body: "Names, organisations, rail services, locations, incidents, assets, and crew events shown across the website are synthetic. They are designed to demonstrate a Polish regional rail scenario and should not be treated as customer or passenger data.",
        },
        {
          title: "Production requirements",
          body: "Before launch, Railixa would publish a complete privacy notice covering analytics, subprocessors, international transfers, data subject rights, retention, contact details, and any product telemetry. Those decisions are intentionally not represented as complete in this demo.",
        },
      ]}
    />
  );
}
