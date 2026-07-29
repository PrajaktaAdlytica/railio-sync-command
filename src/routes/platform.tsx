import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import {
  Layers,
  Database,
  Shield,
  Workflow,
  Globe,
  GitBranch,
  Lock,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { PageBackdrop } from "@/components/page-backdrop";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Railixa" },
      {
        name: "description",
        content:
          "The Railixa platform concept connects operational systems, people, and reviewable rail workflows.",
      },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  const pillars = [
    {
      icon: Workflow,
      t: "Event-linked workflow",
      d: "The demo models incidents, asset events, acknowledgements, and handovers as one connected operational timeline.",
    },
    {
      icon: Database,
      t: "Shared operational context",
      d: "Product surfaces reuse the same service, location, asset, and response context instead of creating isolated records.",
    },
    {
      icon: Shield,
      t: "Traceability by design",
      d: "The intended workflow keeps actions time-stamped and reviewable. Compliance requirements would still need formal validation.",
    },
    {
      icon: GitBranch,
      t: "Integration-ready direction",
      d: "The concept is designed to sit around TMS, CMMS, rostering, and identity systems through scoped interfaces.",
    },
    {
      icon: Globe,
      t: "EU-first data direction",
      d: "Data location, subprocessors, retention, and transfer safeguards would be documented before any production procurement.",
    },
    {
      icon: Lock,
      t: "Role-aware access concept",
      d: "The product direction includes role, line, and depot context without claiming a production identity implementation.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <PageBackdrop tone="blueprint" />
        <div className="container-x relative pt-20 pb-16 lg:pt-28 lg:pb-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Platform
            </span>
            <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              A coordination layer for systems, people, and decisions.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Railixa is conceived as an operational layer around existing TMS, maintenance, and
              roster systems—not a replacement for their authoritative records.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs text-muted-foreground shadow-card backdrop-blur">
              Platform architecture shown below is an illustrative product direction
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x section-paper my-8 rounded-3xl py-24">
        <ArchDiagram />
      </section>

      <section className="section-blueprint border-y border-border">
        <div className="container-x py-24">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Platform pillars
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight">
                Six design principles for a calmer operational layer.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {pillars.map((p, i) => (
              <Reveal
                key={p.t}
                delay={i * 0.04}
                className={
                  i % 3 === 0
                    ? "card-rail-blue"
                    : i % 3 === 1
                      ? "card-rail-mint"
                      : "card-rail-signal"
                }
              >
                <div className="h-full p-7 hover:bg-[oklch(0.985_0.003_247)] transition-colors">
                  <p.icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-signal my-8 rounded-3xl py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="card-rail-blue rounded-2xl border border-border p-8">
              <Cpu className="h-5 w-5 text-accent" />
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Requirements to validate
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                These are procurement workstreams, not certifications or completed assessments.
              </p>
              <ul className="mt-5 divide-y divide-border border-y border-border">
                {[
                  ["Rail safety", "Applicability assessment"],
                  ["Security", "Controls and evidence"],
                  ["Data protection", "Roles and safeguards"],
                  ["Accessibility", "Operator workflows"],
                  ["Availability", "Service objectives"],
                  ["Interoperability", "Scoped interfaces"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between py-3 text-sm">
                    <span className="font-medium">{k}</span>
                    <span className="text-muted-foreground">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-rail-signal rounded-2xl border border-border p-8">
              <Layers className="h-5 w-5 text-accent" />
              <h3 className="mt-3 text-xl font-semibold tracking-tight">Demonstration scope</h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  { k: "Product surfaces", v: "03" },
                  { k: "Workflow stages", v: "04" },
                  { k: "Shared timeline", v: "01" },
                  { k: "Synthetic region", v: "PL" },
                ].map((s) => (
                  <div key={s.k} className="rounded-lg border border-border p-4">
                    <div className="text-[10.5px] uppercase tracking-wider text-muted-foreground">
                      {s.k}
                    </div>
                    <div className="mt-1 text-2xl font-semibold tracking-tight">{s.v}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/request-demo"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Discuss the architecture direction <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ArchDiagram() {
  const layer = "card-rail rounded-xl border border-border px-5 py-4 shadow-card";
  return (
    <Reveal>
      <div className="card-rail-blue rounded-2xl border border-border p-8 shadow-card lg:p-12">
        <div className="space-y-3">
          <div className={layer}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Surfaces
                </div>
                <div className="font-semibold">
                  Control room · Depot · Cab · Mobile · Regulator portal
                </div>
              </div>
              <span className="text-[11px] font-mono text-muted-foreground">UI</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {["Railixa Incidents", "Railixa Assets", "Railixa Crew"].map((p) => (
              <div key={p} className={`${layer} bg-primary text-primary-foreground border-primary`}>
                <div className="text-[11px] uppercase tracking-wider text-primary-foreground/60">
                  Product
                </div>
                <div className="font-semibold">{p}</div>
              </div>
            ))}
          </div>
          <div className={layer}>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Coordination layer
            </div>
            <div className="font-semibold">
              Event model · Workflow orchestration · Policy context · Activity history
            </div>
          </div>
          <div className={layer}>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Integrations
            </div>
            <div className="mt-1 flex flex-wrap gap-2 text-xs text-foreground/80">
              {[
                "TMS",
                "ETCS / ERTMS",
                "CMMS",
                "HR / Rostering",
                "SCADA",
                "BI / Lakehouse",
                "Identity (SSO/SCIM)",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded border border-border bg-[oklch(0.985_0.003_247)] px-2 py-1"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className={`${layer} bg-steel text-steel-foreground border-steel`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-steel-foreground/55">
                  Deployment architecture
                </div>
                <div className="font-semibold">
                  Region · Encryption · Retention · Recovery · Access controls
                </div>
              </div>
              <span className="text-[11px] font-mono text-steel-foreground/60">
                Confirm per pilot
              </span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
