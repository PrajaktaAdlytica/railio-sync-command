import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Building2, CalendarDays, ExternalLink } from "lucide-react";
import { PageBackdrop } from "@/components/page-backdrop";
import { Reveal } from "@/components/reveal";

const DLABS_PORTFOLIO_URL = "https://d-labs-site.vercel.app/companies";
const LINKEDIN_URL = "https://www.linkedin.com/company/railixa/";
const CRUNCHBASE_URL = "https://www.crunchbase.com/organization/railixa";

export const Route = createFileRoute("/news/funding-announcement")({
  head: () => ({
    meta: [
      { title: "Railixa secures $510K in funding from Dlabs | Railixa" },
      {
        name: "description",
        content: "Railixa has secured $510K in funding from Dlabs. Announced Apr 14, 2026.",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Railixa secures $510K in funding from Dlabs." },
      {
        property: "og:description",
        content:
          "Railixa is part of Dlabs’ global portfolio of companies building rail coordination for complex operating environments.",
      },
      { property: "article:published_time", content: "2026-04-14" },
    ],
  }),
  component: FundingArticle,
});

function FundingArticle() {
  return (
    <article className="relative overflow-hidden">
      <PageBackdrop tone="blueprint" />
      <div className="container-x relative py-14 sm:py-20 lg:py-24">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Railixa
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <main>
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-3.5 w-3.5" />
                  Funding announcement
                </span>
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <time dateTime="2026-04-14">Apr 14, 2026</time>
                </span>
              </div>
              <h1 className="mt-6 max-w-4xl text-balance text-[42px] font-bold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-[56px] lg:text-[68px]">
                Railixa secures $510K in funding from Dlabs.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Railixa is part of Dlabs’ global portfolio of companies building rail coordination
                for complex operating environments.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="section-paper mt-12 rounded-2xl border border-border p-6 shadow-card sm:p-8">
                <p className="text-lg font-medium leading-relaxed text-foreground">
                  Railixa has secured $510K in funding from Dlabs.
                </p>
                <a
                  href={DLABS_PORTFOLIO_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-card transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  View Dlabs portfolio
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </main>

          <Reveal delay={0.12}>
            <aside className="card-rail-blue rounded-2xl border border-border p-6 shadow-card lg:sticky lg:top-24">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Company record
              </p>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-xs text-muted-foreground">Backing</dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">Backed by Dlabs</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Funding</dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">$510K funding</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Announced</dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">Apr 14, 2026</dd>
                </div>
              </dl>
              <div className="mt-6 space-y-2 border-t border-border pt-5">
                {[
                  ["Dlabs portfolio", DLABS_PORTFOLIO_URL],
                  ["LinkedIn", LINKEDIN_URL],
                  ["Crunchbase", CRUNCHBASE_URL],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {label}
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
