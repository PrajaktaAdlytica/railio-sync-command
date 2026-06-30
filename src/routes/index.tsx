import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Play, AlertTriangle, Wrench, Users, ShieldCheck,
  TrendingUp, Clock, Activity, ChevronDown, Quote
} from "lucide-react";
import { HeroDashboard } from "@/components/hero-dashboard";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Railio — Coordination infrastructure for regional rail" },
      { name: "description", content: "Railio connects incident response, asset maintenance and crew scheduling into one platform for regional rail operators." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Problem />
      <Products />
      <DashboardPreview />
      <Benefits />
      <Stats />
      <Testimonial />
      <Faq />
      <FinalCta />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 rail-grid opacity-70 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] -z-10 rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />

      <div className="container-x relative pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-card"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
              New · Railio 2026.1 release notes
              <ArrowRight className="h-3 w-3" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-balance text-[44px] sm:text-[56px] lg:text-[68px] leading-[0.98] font-bold tracking-[-0.03em] text-foreground"
            >
              Coordination<br/>infrastructure for<br/>
              <span className="relative inline-block">
                regional rail.
                <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-accent rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground"
            >
              Railio connects incident response, asset maintenance and crew scheduling
              into one operational platform — so regional rail operators respond in
              minutes instead of hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/request-demo"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lift hover:bg-primary/90 transition-all"
              >
                Request demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/platform"
                className="group inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground hover:border-border-strong hover:bg-surface transition-all"
              >
                <Play className="h-3.5 w-3.5 text-accent fill-accent" />
                Watch platform tour
              </Link>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-success" /> EN 50126 aligned</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-success" /> ISO 27001</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-success" /> GDPR · EU hosted</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUSTED ---------------- */
function TrustedBy() {
  const logos = ["Koleje Wielkopolskie", "ÖBB Regional", "SNCB / NMBS", "VR Transpoint", "DB Regio Nord", "Trenord"];
  return (
    <section className="border-y border-border/70 bg-surface">
      <div className="container-x py-10">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Trusted by European transport authorities & operators
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-x-8 gap-y-6">
          {logos.map((l) => (
            <div key={l} className="text-center text-sm font-semibold tracking-tight text-foreground/55 hover:text-foreground/85 transition-colors">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">The problem</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Disconnected systems<br/>turn a 4-minute fault<br/>into a 4-hour delay cascade.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
              Most regional operators still run incidents in radio chatter, assets in spreadsheets,
              and crews in a separate roster tool. By the time three systems agree on the truth,
              the disruption has already reached three lines.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { t: "Radio + paper logs", d: "Incidents recorded after the fact, never queryable in real time.", n: "01" },
              { t: "Asset spreadsheets", d: "Maintenance state lives in 14 Excel files across 4 depots.", n: "02" },
              { t: "Standalone rostering", d: "Crew availability never reaches the operations control room.", n: "03" },
              { t: "Manual handoffs", d: "Every delay needs three phone calls before action is taken.", n: "04" },
            ].map((b, i) => (
              <Reveal key={b.n} delay={i * 0.06}>
                <div className="group h-full rounded-xl border border-border bg-surface p-5 shadow-card hover:shadow-lift hover:border-border-strong transition-all">
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-mono text-muted-foreground">{b.n}</span>
                    <AlertTriangle className="h-4 w-4 text-accent/70" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{b.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCTS ---------------- */
function Products() {
  const items = [
    {
      icon: AlertTriangle,
      name: "Railio Incidents",
      desc: "Real-time incident command. From first signal to resolution, every action timestamped, attributable and auditable.",
      bullets: ["Geo-aware dispatching", "Cause-code library", "Post-mortem timeline"],
    },
    {
      icon: Wrench,
      name: "Railio Assets",
      desc: "Condition-based maintenance for rolling stock, track and signalling. Plan with data, not with intuition.",
      bullets: ["Predictive thresholds", "Work-order orchestration", "Compliance evidence"],
    },
    {
      icon: Users,
      name: "Railio Crew",
      desc: "Live rostering that talks to operations. Reassign drivers and conductors with one tap when reality moves.",
      bullets: ["Fatigue & rest rules", "EU driving-time limits", "Mobile crew app"],
    },
  ];

  return (
    <section className="bg-surface border-y border-border/70">
      <div className="container-x py-24 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Products</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              One platform. Three operational surfaces.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Each Railio product is usable on its own. Together they remove the seams between
              the control room, the depot and the cab.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift hover:border-primary/30">
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.03] group-hover:to-accent/[0.04] transition-all" />
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-border/70 pt-5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/85">
                      <span className="h-1 w-1 rounded-full bg-accent" /> {b}
                    </li>
                  ))}
                </ul>
                <Link to="/products" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary group/link">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DASHBOARD PREVIEW ---------------- */
function DashboardPreview() {
  return (
    <section className="container-x py-24 lg:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Operations cockpit</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Built like control-room software, not a SaaS dashboard.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Dense when it needs to be, calm when it doesn't. Every screen built with operators in the room.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mt-14">
          <div className="absolute -inset-10 -z-10 rounded-3xl bg-gradient-to-b from-primary/8 to-transparent blur-2xl" />
          <BigDashboard />
        </div>
      </Reveal>
    </section>
  );
}

function BigDashboard() {
  return (
    <div className="rounded-2xl border border-border bg-surface shadow-dash overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-[oklch(0.985_0.003_247)] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.02_27)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.88_0.05_75)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.05_152)]" />
          </div>
          <div className="ml-3 hidden sm:flex items-center gap-1 text-[11px] text-muted-foreground">
            {["Incidents", "Assets", "Crew", "Network", "Reports"].map((t, i) => (
              <span key={t} className={`rounded px-2 py-1 ${i === 0 ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>{t}</span>
            ))}
          </div>
        </div>
        <span className="text-[11px] font-mono text-muted-foreground">control-room · live</span>
      </div>

      <div className="grid grid-cols-12 gap-3 p-4 bg-[oklch(0.985_0.003_247)]">
        {/* KPI strip */}
        <div className="col-span-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { k: "Active incidents", v: "3", d: "P1 · P2 · P3", color: "text-accent" },
            { k: "Trains in service", v: "126", d: "of 134", color: "text-foreground" },
            { k: "On-time perf.", v: "94.7%", d: "+1.2 vs LW", color: "text-[oklch(0.5_0.13_152)]" },
            { k: "Crew utilisation", v: "82%", d: "Within rest limits", color: "text-foreground" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-surface px-4 py-3">
              <div className="text-[10.5px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
              <div className={`mt-1 text-2xl font-semibold tracking-tight ${s.color}`}>{s.v}</div>
              <div className="text-[11px] text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>

        {/* Incident timeline */}
        <div className="col-span-12 lg:col-span-8 rounded-xl border border-border bg-surface p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-semibold">Incident timeline · today</h3>
            <span className="text-[11px] text-muted-foreground font-mono">06:00 – 22:00</span>
          </div>
          <div className="mt-4 space-y-2">
            {[
              { l: "RE 1", c: "bg-primary/70", spans: [[5, 15], [40, 6]] },
              { l: "RE 9", c: "bg-accent/80", spans: [[22, 28]] },
              { l: "RB 33", c: "bg-[oklch(0.74_0.14_75)]/80", spans: [[60, 10]] },
              { l: "S 5", c: "bg-primary/70", spans: [[15, 8], [55, 14]] },
              { l: "RE 11", c: "bg-[oklch(0.65_0.16_152)]/80", spans: [[78, 6]] },
              { l: "RB 7", c: "bg-primary/70", spans: [[30, 12], [70, 8]] },
            ].map((row, idx) => (
              <div key={row.l} className="flex items-center gap-3">
                <span className="w-10 text-[11px] font-mono text-muted-foreground">{row.l}</span>
                <div className="relative h-5 flex-1 rounded-md bg-muted overflow-hidden">
                  {row.spans.map((s, j) => (
                    <motion.div
                      key={j}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.05, duration: 0.5, ease: "easeOut" }}
                      style={{ left: `${s[0]}%`, width: `${s[1]}%`, transformOrigin: "left" }}
                      className={`absolute top-0 h-full rounded ${row.c}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10.5px] text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-primary/70" />Normal</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-accent/80" />Incident</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-[oklch(0.74_0.14_75)]/80" />Maintenance</span>
            </div>
            <span className="font-mono">Δ 02h 14m total disruption</span>
          </div>
        </div>

        {/* Crew board */}
        <div className="col-span-12 lg:col-span-4 rounded-xl border border-border bg-surface p-4">
          <h3 className="text-[13px] font-semibold">Crew board</h3>
          <div className="mt-3 space-y-2.5">
            {[
              { n: "M. Lewandowska", r: "Driver · RE 9", s: "Standby", c: "text-accent bg-accent/10" },
              { n: "J. Kowalski", r: "Conductor · S 5", s: "On duty", c: "text-[oklch(0.45_0.13_152)] bg-[oklch(0.95_0.05_152)]" },
              { n: "A. Nowak", r: "Driver · RE 1", s: "On duty", c: "text-[oklch(0.45_0.13_152)] bg-[oklch(0.95_0.05_152)]" },
              { n: "P. Wójcik", r: "Dispatcher", s: "Break", c: "text-[oklch(0.45_0.14_70)] bg-[oklch(0.95_0.08_75)]" },
              { n: "K. Zieliński", r: "Driver · RB 33", s: "Off", c: "text-muted-foreground bg-muted" },
            ].map((p) => (
              <div key={p.n} className="flex items-center justify-between rounded-lg border border-border/70 px-3 py-2">
                <div>
                  <div className="text-[12.5px] font-medium">{p.n}</div>
                  <div className="text-[11px] text-muted-foreground">{p.r}</div>
                </div>
                <span className={`rounded px-1.5 py-0.5 text-[10.5px] font-medium ${p.c}`}>{p.s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Asset monitoring */}
        <div className="col-span-12 lg:col-span-7 rounded-xl border border-border bg-surface p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-semibold">Asset monitoring · brake-pad wear</h3>
            <span className="text-[11px] text-muted-foreground font-mono">EMU fleet · 14 units</span>
          </div>
          <svg viewBox="0 0 600 160" className="mt-3 h-44 w-full">
            <defs>
              <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#1B3A57" stopOpacity="0.18" />
                <stop offset="1" stopColor="#1B3A57" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* gridlines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="0" x2="600" y1={20 + i * 30} y2={20 + i * 30} stroke="#1B3A57" strokeOpacity="0.06" />
            ))}
            <path d="M0,120 C60,110 80,90 130,95 S220,70 280,80 S380,40 440,55 S560,35 600,28 L600,160 L0,160 Z" fill="url(#g2)" />
            <path d="M0,120 C60,110 80,90 130,95 S220,70 280,80 S380,40 440,55 S560,35 600,28" fill="none" stroke="#1B3A57" strokeWidth="2" />
            <path d="M0,135 C80,130 140,128 200,120 S300,108 360,112 S480,95 600,80" fill="none" stroke="#D94F30" strokeWidth="1.6" strokeDasharray="3 3" />
            <circle cx="440" cy="55" r="3.5" fill="#1B3A57" />
            <circle cx="440" cy="55" r="8" fill="#1B3A57" fillOpacity="0.15" />
          </svg>
          <div className="mt-2 flex items-center gap-4 text-[10.5px] text-muted-foreground">
            <span className="inline-flex items-center gap-1"><span className="h-0.5 w-3 bg-primary" />Actual wear (mm)</span>
            <span className="inline-flex items-center gap-1"><span className="h-0.5 w-3 bg-accent" style={{ backgroundImage: "repeating-linear-gradient(90deg,#D94F30 0 3px,transparent 3px 6px)" }} />Predicted threshold</span>
          </div>
        </div>

        {/* Maintenance planning */}
        <div className="col-span-12 lg:col-span-5 rounded-xl border border-border bg-surface p-4">
          <h3 className="text-[13px] font-semibold">Maintenance · next 14 days</h3>
          <div className="mt-3 grid grid-cols-7 gap-1.5">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
              <div key={d} className="text-center text-[10px] uppercase tracking-wider text-muted-foreground">{d}</div>
            ))}
            {Array.from({ length: 14 }).map((_, i) => {
              const loads = [2,1,3,0,2,1,0,1,2,4,1,0,2,1];
              const load = loads[i];
              const bg = load === 0 ? "bg-muted" :
                         load === 1 ? "bg-primary/15" :
                         load === 2 ? "bg-primary/30" :
                         load === 3 ? "bg-primary/55" : "bg-accent/70";
              return (
                <div key={i} className={`aspect-square rounded-md ${bg} flex items-end justify-end p-1`}>
                  <span className={`text-[10px] font-mono ${load >= 3 ? "text-white" : "text-muted-foreground"}`}>{i+1}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>4 critical inspections this period</span>
            <Link to="/platform" className="text-primary font-medium">Open plan →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- BENEFITS ---------------- */
function Benefits() {
  const items = [
    { icon: Clock, t: "Faster incident response", d: "Cut mean time-to-action from 18 minutes to under 7." },
    { icon: ShieldCheck, t: "Better compliance", d: "Audit-grade evidence for EN 50126 and national regulators." },
    { icon: Activity, t: "Improved asset utilisation", d: "Move from interval-based to condition-based maintenance." },
    { icon: TrendingUp, t: "Reduced delays", d: "Avoid cascade effects with coordinated, role-aware response." },
  ];
  return (
    <section className="bg-surface border-y border-border/70">
      <div className="container-x py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Benefits</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
                Operational outcomes, not feature lists.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {items.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.06}>
                <div className="border-t border-border pt-6">
                  <b.icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{b.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const stats = [
    { v: 40, suf: "+", k: "Regional lines coordinated" },
    { v: 27, pre: "EU", k: "Member-state coverage" },
    { v: 62, suf: "%", k: "Faster incident response" },
    { v: 50126, k: "EN aligned", isLabel: true, label: "EN 50126" },
  ];
  return (
    <section className="container-x py-24 lg:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">By the numbers</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Numbers that matter in the control room.
          </h2>
        </div>
      </Reveal>
      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.05} className="bg-surface">
            <div className="p-8 lg:p-10">
              {s.isLabel ? (
                <div className="text-4xl lg:text-5xl font-semibold tracking-tight">{s.label}</div>
              ) : (
                <Counter value={s.v} prefix={s.pre} suffix={s.suf} />
              )}
              <div className="mt-3 text-sm text-muted-foreground">{s.k}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Counter({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.6, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [inView, mv, rounded, value]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
      {prefix && <span className="text-muted-foreground/70">{prefix}</span>}
      <span>{display}</span>
      {suffix && <span className="text-accent">{suffix}</span>}
    </div>
  );
}

/* ---------------- TESTIMONIAL ---------------- */
function Testimonial() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-x py-24 lg:py-32">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <Quote className="h-8 w-8 text-accent" />
            <p className="mt-6 text-2xl sm:text-3xl lg:text-[34px] leading-[1.25] font-medium tracking-tight text-balance">
              "Before Railio, an overhead-line fault on RE 9 took forty minutes to localise and another hour to communicate. Now the depot, the duty manager and the next cab are aligned in under seven. The line is genuinely calmer."
            </p>
            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20" />
              <div>
                <div className="font-medium">Marta Sobolewska</div>
                <div className="text-sm text-primary-foreground/65">Director of Operations · Koleje Wielkopolskie</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const items = [
    { q: "How does Railio integrate with our existing TMS or ERTMS layer?", a: "Railio sits above your TMS, ETCS/ERTMS and CMMS through a published REST + event API. We ship native connectors for the most common European stacks and a typed integration SDK for everything else." },
    { q: "Is Railio aligned with EN 50126 / EN 50128?", a: "Yes. Railio's incident, change-management and traceability surfaces are designed to produce evidence directly consumable by RAMS assessors and national regulators." },
    { q: "Where is data hosted?", a: "Exclusively in the EU. Default region is Frankfurt with regional replicas in Warsaw and Stockholm. Customer-managed key options available on the Enterprise plan." },
    { q: "Can we start with just one product?", a: "Yes. Most operators start with Railio Incidents, then layer Assets and Crew once the control-room workflows are stable." },
    { q: "What does onboarding look like?", a: "A typical regional operator goes from kickoff to production cutover in 6–10 weeks, including data migration, role workshops and on-site shadowing of two duty shifts." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">FAQ</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Questions we hear from operators.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Don't see yours? <Link to="/request-demo" className="text-primary font-medium underline-offset-4 hover:underline">Talk to our team</Link>.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-foreground">{it.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : ""}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.21,0.47,0.32,0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-8 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  return (
    <section className="container-x pb-24 lg:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-10 lg:p-16 shadow-card">
          <div className="absolute inset-0 rail-grid opacity-60 [mask-image:linear-gradient(to_right,black_20%,transparent_80%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
                Ready to modernise regional<br/>rail operations?
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                See Railio running on a synthetic version of your network in a 30-minute working session.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end gap-3 flex-wrap">
              <Link to="/request-demo" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lift hover:bg-primary/90 transition">
                Request demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/platform" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground hover:border-border-strong">
                Explore platform
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
