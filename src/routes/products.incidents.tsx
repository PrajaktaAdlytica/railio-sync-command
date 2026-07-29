import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { ProductDetailPage, type ProductDetail } from "@/components/product-detail-page";

export const Route = createFileRoute("/products/incidents")({
  head: () => ({
    meta: [
      { title: "Railixa Incidents — Controlled rail incident response" },
      {
        name: "description",
        content:
          "Explore the Railixa Incidents demonstration workflow for regional rail operators.",
      },
    ],
  }),
  component: IncidentsPage,
});

const incidents: ProductDetail = {
  name: "Railixa Incidents",
  theme: "signal",
  eyebrow: "Real-time operational command",
  headline: "Give every disruption one accountable response.",
  summary:
    "Railixa Incidents brings the location, affected service, asset context, crew actions, and stakeholder updates into one controlled timeline.",
  icon: AlertTriangle,
  scenario:
    "A P1 signal failure on RE 9 near Poznań opens a coordinated response shared by the duty manager, depot, and mobile crew.",
  steps: [
    {
      number: "01",
      title: "Open the incident with operational context",
      description:
        "Capture severity, service impact, location, source, and ownership in a single record.",
      meta: "Poznań · 09:14",
    },
    {
      number: "02",
      title: "Trigger the right response playbook",
      description:
        "Guide acknowledgements, escalation, checks, and handovers without hiding operator judgement.",
      meta: "P1 workflow",
    },
    {
      number: "03",
      title: "Connect the affected asset and crew",
      description:
        "Pull relevant context from maintenance and roster systems into the same operational picture.",
      meta: "ED160-017",
    },
    {
      number: "04",
      title: "Close with a review-ready timeline",
      description:
        "Keep decisions, messages, attachments, and resolution notes together for internal review and export.",
      meta: "Synthetic closure",
    },
  ],
  capabilities: [
    {
      title: "Role-aware ownership",
      description:
        "Make the current owner, expected action, acknowledgement, and escalation path visible to everyone involved.",
    },
    {
      title: "Rail-specific event context",
      description:
        "Connect services, lines, locations, rolling stock, infrastructure assets, and operational impact.",
    },
    {
      title: "Controlled stakeholder updates",
      description:
        "Prepare approved operational messages and maintain a timestamped record of what changed and when.",
    },
    {
      title: "Review-ready evidence",
      description:
        "Export the illustrative incident timeline for post-event review without claiming automated regulatory compliance.",
    },
  ],
  connects: ["TMS", "EAM / CMMS", "Crew roster", "Passenger information", "Email / SMS", "BI"],
};

function IncidentsPage() {
  return <ProductDetailPage product={incidents} />;
}
