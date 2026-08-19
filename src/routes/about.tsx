import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { ArrowRight } from "lucide-react";
import { PageBackdrop } from "@/components/page-backdrop";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Railixa" },
      {
        name: "description",
        content: "Railixa is a Polish product concept for coordinated regional rail operations.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <PageBackdrop tone="signal" />
        <div className="container-x relative pt-20 pb-16 lg:pt-28 lg:pb-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              About
            </span>
            <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              Built in Poznań,
              <br />
              for European regional rail.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Railixa is a Polish product concept exploring how regional rail teams can coordinate
              incidents, assets, and crews with less fragmentation and clearer operational context.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs text-muted-foreground shadow-card backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
              Demonstration company profile · details are illustrative
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-20">
          {[
            { k: "Poznań", v: "Polish product direction" },
            { k: "03", v: "Connected operational surfaces" },
            { k: "EU", v: "Regional rail focus" },
          ].map((s) => (
            <Reveal key={s.k}>
              <div
                className={`h-full rounded-2xl border border-border p-8 transition-all hover:-translate-y-0.5 hover:shadow-lift ${
                  s.k === "Poznań"
                    ? "card-rail-signal"
                    : s.k === "03"
                      ? "card-rail-blue"
                      : "card-rail-mint"
                }`}
              >
                <div className="text-4xl font-semibold tracking-tight">{s.k}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-mint border-y border-border">
        <div className="container-x py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Principles
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight">
                  How we build.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              {[
                {
                  t: "Operational context first",
                  d: "Every workflow starts with the people, systems, and decisions that have to move together.",
                },
                {
                  t: "Calm by default",
                  d: "Software in a control room must reduce cognitive load, not compete for it.",
                },
                {
                  t: "Evidence over assumptions",
                  d: "The product direction prioritises time-stamped actions and reviewable handovers over unsupported claims.",
                },
                {
                  t: "Interoperability over replacement",
                  d: "Railixa is conceived as a coordination layer around the systems an operator already trusts.",
                },
              ].map((p, i) => (
                <Reveal key={p.t} delay={i * 0.05}>
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x section-blueprint my-8 rounded-3xl py-24">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Office
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight">
                Salt Lake City, United States.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                This demonstration uses a US office identity to make the company profile feel
                complete. The address below is illustrative and is not presented as a registered
                office.
              </p>
              <address className="mt-6 not-italic text-sm text-foreground">
                Railixa · demonstration office
                <br />
                6809 Crescent Loop
                <br />
                Salt Lake City, UT 84113
                <br />
                United States
                <br />
                Phone: (385) 546-9672
                <br />
                Lat: 40.7534, Lng: -111.8822
              </address>
              <div className="mt-6">
                <Link
                  to="/request-demo"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Book a product session <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="card-rail-blue rounded-2xl border border-border p-8 shadow-card">
              <div className="aspect-[4/3] w-full rounded-lg rail-grid border border-border bg-[oklch(0.985_0.003_247)] flex items-end p-5">
                <div>
                  <div className="text-[11px] font-mono text-muted-foreground">
                    52.4064° N · 16.9252° E
                  </div>
                  <div className="mt-1 text-lg font-semibold">Poznań · product studio</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
