import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { ProductDetailPage, type ProductDetail } from "@/components/product-detail-page";

export const Route = createFileRoute("/products/crew")({
  head: () => ({
    meta: [
      { title: "Railixa Crew — Incident-time crew coordination" },
      {
        name: "description",
        content:
          "Explore the Railixa Crew demonstration workflow for availability, qualification, acknowledgement, and handover.",
      },
    ],
  }),
  component: CrewPage,
});

const crew: ProductDetail = {
  name: "Railixa Crew",
  theme: "mint",
  eyebrow: "Incident-time mobilisation",
  headline: "Put the right qualified people into the response.",
  summary:
    "Railixa Crew adds availability, qualification, acknowledgement, and handover context to operational incidents while the existing roster and HR systems remain the source of record.",
  icon: Users,
  scenario:
    "Anna Kowalska and Marek Nowak are identified as an available qualified pairing at Poznań Główny for the synthetic RE 9 response.",
  steps: [
    {
      number: "01",
      title: "See the operational requirement",
      description:
        "Define the location, role, qualification, route knowledge, and expected response window.",
      meta: "RE 9 response",
    },
    {
      number: "02",
      title: "Check qualified availability",
      description:
        "Bring relevant roster context into the incident without presenting Railixa as payroll or full workforce optimisation.",
      meta: "2 candidates",
    },
    {
      number: "03",
      title: "Send one accountable assignment",
      description:
        "Share the incident brief, required action, contact point, and acknowledgement deadline.",
      meta: "Mobile brief",
    },
    {
      number: "04",
      title: "Keep the handover visible",
      description:
        "Record acceptance, arrival, reassignment, and the next-shift handover on the same timeline.",
      meta: "Synthetic handover",
    },
  ],
  capabilities: [
    {
      title: "Qualification context",
      description:
        "Surface route knowledge, role, and competency fields relevant to the operational assignment.",
    },
    {
      title: "Live acknowledgement",
      description:
        "Show whether the assigned person has received, accepted, or declined the response request.",
    },
    {
      title: "Mobile response brief",
      description:
        "Give the crew the incident context, location, owner, and next action in a compact mobile view.",
    },
    {
      title: "Shift handover record",
      description:
        "Keep changes and responsibilities visible as the response moves between duty periods.",
    },
  ],
  connects: ["Crew roster", "HR", "Identity", "TMS", "Mobile notifications", "Incident timeline"],
};

function CrewPage() {
  return <ProductDetailPage product={crew} />;
}
