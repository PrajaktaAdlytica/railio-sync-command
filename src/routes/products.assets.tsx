import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { ProductDetailPage, type ProductDetail } from "@/components/product-detail-page";

export const Route = createFileRoute("/products/assets")({
  head: () => ({
    meta: [
      { title: "Railixa Assets — Operational asset context" },
      {
        name: "description",
        content:
          "Explore the Railixa Assets demonstration workflow for maintenance-event coordination.",
      },
    ],
  }),
  component: AssetsPage,
});

const assets: ProductDetail = {
  name: "Railixa Assets",
  theme: "blueprint",
  eyebrow: "Maintenance-event coordination",
  headline: "Turn an asset alert into an operational decision.",
  summary:
    "Railixa Assets gives the control room and depot the same view of affected equipment, work status, restrictions, and operational release—alongside the systems already used for maintenance.",
  icon: Wrench,
  scenario:
    "EMU ED160-017 reports a brake-pad threshold event at Poznań Główny while the duty team assesses service impact and maintenance readiness.",
  steps: [
    {
      number: "01",
      title: "Receive a condition or defect event",
      description:
        "Ingest the alert or enter the defect manually with its source, asset, location, and current operating state.",
      meta: "ED160-017",
    },
    {
      number: "02",
      title: "Assess operational impact",
      description:
        "Connect the affected service, restrictions, replacement options, and responsible depot.",
      meta: "RE 9",
    },
    {
      number: "03",
      title: "Coordinate the maintenance response",
      description:
        "Share work status, required competency, handover notes, and release expectations without replacing the EAM.",
      meta: "Depot Poznań",
    },
    {
      number: "04",
      title: "Return the asset with a clear record",
      description:
        "Keep operational release, limitations, and linked incident history visible for the next shift.",
      meta: "Illustrative release",
    },
  ],
  capabilities: [
    {
      title: "Shared asset status",
      description:
        "Present the operational state that matters to control, maintenance, and duty teams.",
    },
    {
      title: "Linked work context",
      description:
        "Reference work orders, inspections, telemetry, and attachments from the source maintenance system.",
    },
    {
      title: "Restriction and release workflow",
      description:
        "Track temporary restrictions, approvals, responsible roles, and operational release notes.",
    },
    {
      title: "Fleet event history",
      description:
        "Connect incidents and maintenance events so recurring operational patterns are easier to review.",
    },
  ],
  connects: ["EAM / CMMS", "Telematics", "TMS", "Depot planning", "Parts data", "BI"],
};

function AssetsPage() {
  return <ProductDetailPage product={assets} />;
}
