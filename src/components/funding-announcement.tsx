import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, CalendarDays } from "lucide-react";
import { Reveal } from "./reveal";

const DLABS_PORTFOLIO_URL = "https://d-labs-site.vercel.app/companies";

export function FundingAnnouncement() {
  return (
    <section aria-labelledby="funding-announcement-title" className="container-x py-8 lg:py-12">
      <Reveal>
        <div className="card-rail-blue relative overflow-hidden rounded-3xl border border-border px-6 py-8 shadow-lift sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-primary/10 bg-primary/5" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-px w-2/5 bg-gradient-to-l from-accent/80 to-transparent" />

          <div className="relative grid gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
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
              <h2
                id="funding-announcement-title"
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[44px] lg:leading-[1.08]"
              >
                Railixa secures $510K in funding from Dlabs.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Railixa is part of Dlabs’ global portfolio of companies building rail coordination
                for complex operating environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:flex-col lg:items-stretch">
              <a
                href={DLABS_PORTFOLIO_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-card transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                View Dlabs portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/news/funding-announcement"
                className="inline-flex items-center justify-center rounded-md border border-border bg-surface/80 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Read announcement
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
