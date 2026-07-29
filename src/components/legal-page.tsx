import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PageBackdrop } from "@/components/page-backdrop";

export type LegalSection = {
  title: string;
  body: string;
};

export function LegalPage({
  eyebrow,
  title,
  introduction,
  sections,
  icon: Icon,
  tone = "paper",
}: {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: LegalSection[];
  icon: LucideIcon;
  tone?: "paper" | "mint" | "blueprint" | "signal";
}) {
  const cardTheme = {
    paper: "card-rail",
    mint: "card-rail-mint",
    blueprint: "card-rail-blue",
    signal: "card-rail-signal",
  }[tone];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <PageBackdrop tone={tone} />
        <div className="container-x relative py-20 lg:py-28">
          <Reveal>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-primary shadow-card">
              <Icon className="h-5 w-5" />
            </span>
            <div className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {eyebrow}
            </div>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {introduction}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x section-paper my-8 rounded-3xl py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div
              className={`${cardTheme} rounded-2xl border border-border p-6 shadow-card lg:sticky lg:top-28`}
            >
              <p className="text-sm font-semibold">Demonstration status</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Railixa.com is represented here as a product demonstration. These notes describe the
                current demo and the documentation needed before a production launch.
              </p>
              <Link
                to="/request-demo"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Discuss requirements <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
          <div className="space-y-5 lg:col-span-8">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.04}>
                <article
                  className={`${index % 2 === 0 ? cardTheme : "card-rail"} rounded-2xl border border-border p-7 shadow-card sm:p-8`}
                >
                  <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
