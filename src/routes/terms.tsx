import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Railixa" },
      { name: "description", content: "Demonstration terms for the Railixa product website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="A product demonstration, not a production rail service."
      introduction="This website presents an illustrative Railixa product direction. It is intended for concept review and does not provide operational, safety, dispatch, maintenance, or rostering services."
      icon={FileText}
      tone="paper"
      sections={[
        {
          title: "Demonstration use",
          body: "You may explore the pages, synthetic workflows, navigation, and local form states for evaluation. Do not rely on any screen, status, timeline, or suggested action for real railway operations.",
        },
        {
          title: "No service commitment",
          body: "Product capabilities, integrations, architecture, availability, security controls, and implementation details shown here are directions to validate. They are not contractual commitments, service levels, certifications, or statements of current deployment.",
        },
        {
          title: "Names and scenarios",
          body: "Polish personal names, company names, routes, incidents, assets, and addresses are illustrative. Any resemblance to an actual operator, employee, event, or registered office is coincidental unless explicitly stated otherwise.",
        },
      ]}
    />
  );
}
