import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Wrench, Users, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Railio" },
      { name: "description", content: "Railio Incidents, Assets and Crew — three operational surfaces on one platform for regional rail." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    id: "incidents",
    icon: AlertTriangle,
    name: "Railio Incidents",
    tag: "Real-time command",
    desc: "Bring the radio chatter, the geographic context and the response playbooks into a single, time-stamped incident record.",
    features: [
      "Live geo-aware dispatching across lines and depots",
      "Standardised cause-code library aligned to UIC",
      "Role-aware response playbooks with one-tap escalation",
      "Auditable timeline ready for regulator review",
      "Native push to driver and conductor mobile apps",
    ],
  },
  {
    id: "assets",
    icon: Wrench,
    name: "Railio Assets",
    tag: "Condition-based maintenance",
    desc: "Move rolling stock, track and signalling from interval-based maintenance to a condition-driven, evidence-backed plan.",
    features: [
      "Sensor + telemetry ingest with custom thresholds",
      "Predictive wear modelling per asset class",
      "Work-order orchestration across depots",
      "EN 50126 / EN 50128 evidence pack export",
      "Spare-parts forecasting with lead-time awareness",
    ],
  },
  {
    id: "crew",
    icon: Users,
    name: "Railio Crew",
    tag: "Live rostering",
    desc: "A rostering surface that actually talks to operations. Reassign drivers and conductors in seconds when reality moves.",
    features: [
      "EU driving-time and fatigue rule enforcement",
      "Real-time availability visible to dispatch",
      "Native mobile app for drivers and conductors",
      "Qualification + route-knowledge matching",
      "Shift-swap workflows with full audit trail",
    ],
  },
];

function ProductsPage() {
  return (
    <>
      <section className="container-x pt-20 pb-12 lg:pt-28">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Products</span>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            One platform.<br />Three operational surfaces.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Each Railio product solves a real, painful problem on its own — and together they remove the seams
            between the control room, the depot and the cab.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-24 space-y-3">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl border border-border bg-surface p-8 lg:p-12 shadow-card hover:shadow-lift hover:border-border-strong transition-all">
              <div className="lg:col-span-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{p.tag}</div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">{p.name}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                <Link to="/request-demo" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Book a walkthrough <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 border-l border-border pl-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 text-success shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="rounded-2xl bg-primary p-10 lg:p-14 text-primary-foreground flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight">See all three in your network.</h3>
            <p className="mt-2 text-primary-foreground/70 max-w-xl">A 30-minute working session on a synthetic version of your lines.</p>
          </div>
          <Link to="/request-demo" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-95">
            Request demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
