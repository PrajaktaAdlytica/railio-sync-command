import { Link } from "@tanstack/react-router";
import { RailixaLogo } from "./railixa-logo";
import { ArrowUpRight } from "lucide-react";

const DLABS_PORTFOLIO_URL = "https://d-labs-site.vercel.app/companies";
const LINKEDIN_URL = "https://www.linkedin.com/company/railixa/";
const CRUNCHBASE_URL = "https://www.crunchbase.com/organization/railixa";

const cols = [
  {
    title: "Products",
    links: [
      { label: "Railixa Incidents", to: "/products/incidents" },
      { label: "Railixa Assets", to: "/products/assets" },
      { label: "Railixa Crew", to: "/products/crew" },
      { label: "Platform", to: "/platform" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Regional operators", to: "/products" },
      { label: "Maintenance teams", to: "/products" },
      { label: "Transport authorities", to: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Funding announcement", to: "/news/funding-announcement" },
      { label: "Request demo", to: "/request-demo" },
      { label: "Sign in", to: "/sign-in" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "Security", to: "/security" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="signal-grid-dark bg-steel text-steel-foreground">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <RailixaLogo className="h-7 w-7" tone="light" />
              <span className="text-[17px] font-semibold tracking-tight">Railixa</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-steel-foreground/70 leading-relaxed">
              A Polish product concept for connected regional rail operations.
            </p>
            <p className="mt-6 text-xs text-steel-foreground/50">
              Railixa · demonstration company
              <br />
              Poznań, Polska
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-steel-foreground/50">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-steel-foreground/85 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-steel-foreground/50">
              Company record · Apr 14, 2026
            </p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-white">
              <span>Backed by Dlabs</span>
              <span>$510K funding</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-steel-foreground/75">
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
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-steel-foreground/55">
            © {new Date().getFullYear()} Railixa demonstration.
          </p>
          <div className="flex items-center gap-4 text-xs text-steel-foreground/55">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.18_152)] pulse-dot" />
              Demo environment
            </span>
            <span>Synthetic data</span>
            <span>No customer claims</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
