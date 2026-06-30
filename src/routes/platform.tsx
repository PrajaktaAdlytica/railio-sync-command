import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Layers, Database, Shield, Workflow, Globe, GitBranch, Lock, Cpu, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Railio" },
      { name: "description", content: "The Railio platform: integration, security and architecture built for safety-critical rail operations." },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  const pillars = [
    { icon: Workflow, t: "Event-driven core", d: "Every action — incident, work order, shift change — is an immutable event, fan-out to every operational surface in milliseconds." },
    { icon: Database, t: "Operational data lake", d: "Years of incidents, telemetry and crew history queryable in one place, with native exports to your BI stack." },
    { icon: Shield, t: "Safety & compliance", d: "EN 50126/50128 aligned change-management. Tamper-evident audit log. Customer-managed keys on Enterprise." },
    { icon: GitBranch, t: "Open integration", d: "Typed REST + webhook API, native connectors for the major European TMS, CMMS and rostering systems." },
    { icon: Globe, t: "EU sovereignty", d: "Hosted exclusively in the EU. Default region Frankfurt with regional replicas in Warsaw and Stockholm." },
    { icon: Lock, t: "Zero-trust access", d: "SSO/SAML, SCIM, fine-grained role + line-level permissions, hardware key support for control-room roles." },
  ];

  return (
    <>
      <section className="container-x pt-20 pb-16 lg:pt-28">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Platform</span>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Infrastructure-grade foundations for safety-critical rail.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Railio is not a dashboard bolted onto your TMS. It is the coordination layer that sits between your
            operational systems, your people and your regulator.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <ArchDiagram />
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-x py-24">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Platform pillars</span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight">Six things every regional operator asks us about first.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.04} className="bg-surface">
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

      <section className="container-x py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <Cpu className="h-5 w-5 text-accent" />
              <h3 className="mt-3 text-xl font-semibold tracking-tight">Standards & alignment</h3>
              <ul className="mt-5 divide-y divide-border border-y border-border">
                {[
                  ["EN 50126", "RAMS lifecycle"],
                  ["EN 50128", "Software for railway control"],
                  ["ISO 27001", "Information security"],
                  ["ISO 27701", "Privacy information management"],
                  ["GDPR", "EU data protection"],
                  ["NIS2", "Critical infrastructure"],
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
            <div className="rounded-2xl border border-border bg-surface p-8">
              <Layers className="h-5 w-5 text-accent" />
              <h3 className="mt-3 text-xl font-semibold tracking-tight">Reliability SLOs</h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  { k: "API availability", v: "99.95%" },
                  { k: "Event delivery p99", v: "< 600ms" },
                  { k: "RPO", v: "≤ 5 min" },
                  { k: "RTO", v: "≤ 30 min" },
                ].map((s) => (
                  <div key={s.k} className="rounded-lg border border-border p-4">
                    <div className="text-[10.5px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
                    <div className="mt-1 text-2xl font-semibold tracking-tight">{s.v}</div>
                  </div>
                ))}
              </div>
              <Link to="/request-demo" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Request architecture brief <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ArchDiagram() {
  const layer = "rounded-xl border border-border bg-surface px-5 py-4 shadow-card";
  return (
    <Reveal>
      <div className="rounded-2xl border border-border bg-[oklch(0.985_0.003_247)] p-8 lg:p-12 shadow-card">
        <div className="space-y-3">
          <div className={layer}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Surfaces</div>
                <div className="font-semibold">Control room · Depot · Cab · Mobile · Regulator portal</div>
              </div>
              <span className="text-[11px] font-mono text-muted-foreground">UI</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {["Railio Incidents","Railio Assets","Railio Crew"].map((p) => (
              <div key={p} className={`${layer} bg-primary text-primary-foreground border-primary`}>
                <div className="text-[11px] uppercase tracking-wider text-primary-foreground/60">Product</div>
                <div className="font-semibold">{p}</div>
              </div>
            ))}
          </div>
          <div className={layer}>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Coordination layer</div>
            <div className="font-semibold">Event bus · Workflow engine · Policy engine · Audit log</div>
          </div>
          <div className={layer}>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Integrations</div>
            <div className="mt-1 flex flex-wrap gap-2 text-xs text-foreground/80">
              {["TMS","ETCS / ERTMS","CMMS","HR / Rostering","SCADA","BI / Lakehouse","Identity (SSO/SCIM)"].map((x) => (
                <span key={x} className="rounded border border-border bg-[oklch(0.985_0.003_247)] px-2 py-1">{x}</span>
              ))}
            </div>
          </div>
          <div className={`${layer} bg-steel text-steel-foreground border-steel`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-steel-foreground/55">Infrastructure</div>
                <div className="font-semibold">EU regions · Encrypted at rest · Tamper-evident log · BYOK</div>
              </div>
              <span className="text-[11px] font-mono text-steel-foreground/60">EU · DE / PL / SE</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
