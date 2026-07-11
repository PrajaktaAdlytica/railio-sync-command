import { Link } from "@tanstack/react-router";
import { RailiXaLogo } from "./railixa-logo";

const cols = [
  {
    title: "Products",
    links: [
      { label: "RailiXa Incidents", to: "/products" },
      { label: "RailiXa Assets", to: "/products" },
      { label: "RailiXa Crew", to: "/products" },
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
      { label: "Request demo", to: "/request-demo" },
      { label: "Sign in", to: "/sign-in" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/about" },
      { label: "Terms", to: "/about" },
      { label: "EN 50126", to: "/platform" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-steel text-steel-foreground">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <RailiXaLogo className="h-7 w-7" tone="light" />
              <span className="text-[17px] font-semibold tracking-tight">RailiXa</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-steel-foreground/70 leading-relaxed">
              Coordination infrastructure for regional rail. Built in Europe for safety-critical operations.
            </p>
            <p className="mt-6 text-xs text-steel-foreground/50">
              RailiXa sp. z o.o.<br />
              Poznań, Poland
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-steel-foreground/50">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-steel-foreground/85 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-steel-foreground/55">© {new Date().getFullYear()} RailiXa. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-steel-foreground/55">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.18_152)] pulse-dot" />
              All systems operational
            </span>
            <span>EN 50126 aligned</span>
            <span>GDPR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
