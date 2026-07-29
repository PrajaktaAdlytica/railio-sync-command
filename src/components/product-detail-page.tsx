import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, Check, Network } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { PageBackdrop } from "@/components/page-backdrop";

export type ProductDetail = {
  name: string;
  theme: "signal" | "blueprint" | "mint";
  eyebrow: string;
  headline: string;
  summary: string;
  icon: LucideIcon;
  scenario: string;
  capabilities: Array<{ title: string; description: string }>;
  steps: Array<{ number: string; title: string; description: string; meta: string }>;
  connects: string[];
};

export function ProductDetailPage({ product }: { product: ProductDetail }) {
  const sectionTheme = {
    signal: "section-signal",
    blueprint: "section-blueprint",
    mint: "section-mint",
  }[product.theme];
  const cardTheme = {
    signal: "card-rail-signal",
    blueprint: "card-rail-blue",
    mint: "card-rail-mint",
  }[product.theme];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70">
        <PageBackdrop tone={product.theme} />
        <div className="container-x relative py-20 lg:py-28">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All products
          </Link>
          <div className="mt-10 grid items-end gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/10 bg-primary/[0.07] text-primary shadow-card">
                <product.icon className="h-5 w-5" />
              </span>
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {product.eyebrow}
              </div>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
                {product.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {product.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/request-demo"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lift transition hover:bg-primary/90"
                >
                  Request demo <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#workflow"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition hover:border-border-strong"
                >
                  See the workflow
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <div
                className={`${cardTheme} rounded-2xl border border-border p-6 shadow-lift backdrop-blur`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    Synthetic scenario
                  </span>
                  <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
                </div>
                <p className="mt-4 text-lg font-medium leading-relaxed text-foreground">
                  {product.scenario}
                </p>
                <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                  Illustrative Polish operator data. No real customer, operational, or passenger
                  data is shown.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="workflow" className={`relative ${sectionTheme}`}>
        <div className="container-x grid gap-14 py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Product workflow
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                From first signal to a controlled handover.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Each step becomes visible as the response moves forward, while the source systems
                remain in place.
              </p>
            </div>
          </div>
          <div className="space-y-5 lg:col-span-8">
            {product.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.04}>
                <article
                  className={`${cardTheme} group relative overflow-hidden rounded-2xl border border-border p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lift sm:p-8`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-primary opacity-70"
                  />
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <span className="font-mono text-xs text-muted-foreground">{step.number}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    <span className="w-fit rounded-full border border-border bg-muted/55 px-3 py-1 text-[11px] text-muted-foreground">
                      {step.meta}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border">
        <PageBackdrop tone="paper" className="opacity-75" />
        <div className="container-x relative py-24 lg:py-32">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Core capabilities
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Built for operational clarity, not another data silo.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {product.capabilities.map((capability, index) => (
              <Reveal
                key={capability.title}
                delay={index * 0.04}
                className={index % 2 === 0 ? cardTheme : "card-rail"}
              >
                <div className="h-full p-7 transition-colors hover:bg-white/35">
                  <Check className="h-4 w-4 text-success" />
                  <h3 className="mt-4 text-lg font-semibold">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-paper my-8 rounded-3xl py-24 lg:py-32">
        <Reveal>
          <div className="signal-grid-dark grid gap-8 rounded-2xl bg-primary p-8 text-primary-foreground shadow-lift lg:grid-cols-12 lg:items-center lg:p-12">
            <div className="lg:col-span-7">
              <Network className="h-5 w-5 text-accent" />
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
                Connect {product.name} to the systems already in your operation.
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.connects.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/[0.055] px-3 py-1.5 text-xs text-primary-foreground/72"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-sm leading-relaxed text-primary-foreground/68">
                Integration names describe the intended product direction for this demonstration
                site, not certified or production-ready connectors.
              </p>
              <Link
                to="/request-demo"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:brightness-105"
              >
                Walk through a synthetic network <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
