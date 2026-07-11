import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — RailiXa" },
      { name: "description", content: "RailiXa is built in Poznań for European regional rail operators. Meet the team and the mission." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-x pt-20 pb-16 lg:pt-28">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">About</span>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Built in Poznań,<br/>for European regional rail.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            RailiXa was founded by operations engineers and former duty managers who spent a decade watching
            small faults turn into large delays. We believe regional rail deserves software with the same care
            as the rolling stock it coordinates.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { k: "2023", v: "Founded in Poznań" },
            { k: "42", v: "Engineers, operations specialists and RAMS analysts" },
            { k: "EU27", v: "Operators served across the continent" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-border bg-surface p-8">
              <div className="text-4xl font-semibold tracking-tight">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-x py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Principles</span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight">How we build.</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              {[
                { t: "Operators in the room", d: "Every feature is shaped with a real duty manager, not from a Figma file in isolation." },
                { t: "Calm by default", d: "Software in a control room must reduce cognitive load, not compete for it." },
                { t: "Evidence over claims", d: "Every change RailiXa makes leaves a record a regulator can read without translation." },
                { t: "Sovereign by design", d: "European data, European hosting, European compliance — non-negotiable." },
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

      <section className="container-x py-24">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Office</span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight">Poznań, Poland.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                Stary Browar district. Five minutes from the central railway station, which is where we run most
                of our customer workshops.
              </p>
              <address className="mt-6 not-italic text-sm text-foreground">
                RailiXa sp. z o.o.<br />
                ul. Półwiejska 32<br />
                61-888 Poznań, Poland
              </address>
              <div className="mt-6">
                <Link to="/request-demo" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  Visit us · Book a session <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
              <div className="aspect-[4/3] w-full rounded-lg rail-grid border border-border bg-[oklch(0.985_0.003_247)] flex items-end p-5">
                <div>
                  <div className="text-[11px] font-mono text-muted-foreground">52.4064° N · 16.9252° E</div>
                  <div className="mt-1 text-lg font-semibold">Poznań HQ</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
