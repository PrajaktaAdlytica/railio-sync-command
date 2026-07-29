import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Wrench, Users, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PageBackdrop } from "@/components/page-backdrop";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Railixa" },
      {
        name: "description",
        content:
          "Railixa Incidents, Assets and Crew — three connected operational surfaces for regional rail.",
      },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    id: "incidents",
    icon: AlertTriangle,
    name: "Railixa Incidents",
    tag: "Real-time command",
    desc: "Bring the operational brief, geographic context, ownership and response actions into one time-stamped incident record.",
    to: "/products/incidents" as const,
    features: [
      "Location and service-aware incident context",
      "Configurable cause and event categories",
      "Role-aware response playbooks with one-tap escalation",
      "Review-ready operational timeline",
      "Mobile acknowledgement concept",
    ],
  },
  {
    id: "assets",
    icon: Wrench,
    name: "Railixa Assets",
    tag: "Maintenance-event coordination",
    desc: "Connect asset events, service impact, work context and operational release without replacing the maintenance system of record.",
    to: "/products/assets" as const,
    features: [
      "Telemetry and defect-event context",
      "Operational impact assessment",
      "Linked work-order references",
      "Restriction and release workflow",
      "Asset and incident history",
    ],
  },
  {
    id: "crew",
    icon: Users,
    name: "Railixa Crew",
    tag: "Incident-time mobilisation",
    desc: "Bring qualified availability, acknowledgement and handover context into the operational response while the roster stays authoritative.",
    to: "/products/crew" as const,
    features: [
      "Qualification and route-knowledge context",
      "Availability visible to the duty team",
      "Mobile response brief concept",
      "Assignment acknowledgement",
      "Shift handover timeline",
    ],
  },
];

function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <PageBackdrop tone="signal" />
        <div className="container-x relative pt-20 pb-16 lg:pt-28 lg:pb-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Products
            </span>
            <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              One platform.
              <br />
              Three operational surfaces.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Start with one operational workflow or connect all three. The demonstration shows how
              context can move between the control room, depot, and mobile crew without replacing
              their existing systems.
            </p>
          </Reveal>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/75 px-3 py-1.5 text-xs text-muted-foreground shadow-card backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
            Illustrative product environment · synthetic Polish operator data
          </div>
        </div>
      </section>

      <section className="container-x section-paper my-8 space-y-5 rounded-3xl py-24">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <div
              className={`grid grid-cols-1 gap-8 rounded-2xl border border-border p-8 shadow-card transition-all hover:border-border-strong hover:shadow-lift lg:grid-cols-12 lg:p-12 ${
                i === 0 ? "card-rail-signal" : i === 1 ? "card-rail-blue" : "card-rail-mint"
              }`}
            >
              <div className="lg:col-span-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  {p.tag}
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">{p.name}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                <Link
                  to={p.to}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary"
                >
                  Explore {p.name.replace("Railixa ", "")} <ArrowRight className="h-3.5 w-3.5" />
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
        <div className="signal-grid-dark flex flex-col gap-6 rounded-2xl bg-primary p-10 text-primary-foreground shadow-lift lg:flex-row lg:items-center lg:justify-between lg:p-14">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              See all three in your network.
            </h3>
            <p className="mt-2 text-primary-foreground/70 max-w-xl">
              A 30-minute working session using illustrative Polish network data.
            </p>
          </div>
          <Link
            to="/request-demo"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-95"
          >
            Request demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
