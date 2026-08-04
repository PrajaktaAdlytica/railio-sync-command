import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AlertTriangle, ChevronDown, LayoutGrid, Menu, Users, Wrench, X } from "lucide-react";
import { RailixaLogo } from "./railixa-logo";

const links = [
  { to: "/platform", label: "Platform" },
  { to: "/news/funding-announcement", label: "Funding" },
  { to: "/about", label: "About" },
] as const;

const products = [
  {
    to: "/products/incidents",
    label: "Railixa Incidents",
    description: "Controlled response from first signal to review.",
    icon: AlertTriangle,
  },
  {
    to: "/products/assets",
    label: "Railixa Assets",
    description: "Operational context for asset and maintenance events.",
    icon: Wrench,
  },
  {
    to: "/products/crew",
    label: "Railixa Crew",
    description: "Qualified availability, acknowledgement, and handover.",
    icon: Users,
  },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProductsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <RailixaLogo className="h-7 w-7" />
          <span className="text-[17px] font-semibold tracking-tight text-foreground">Railixa</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null))
                setProductsOpen(false);
            }}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen(true)}
              className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Products
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`card-rail-blue absolute left-1/2 top-[calc(100%+0.35rem)] w-[430px] -translate-x-1/2 rounded-xl border border-border p-2 shadow-lift transition-all ${
                productsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div role="menu" aria-label="Railixa products" className="grid gap-1">
                {products.map((product) => (
                  <Link
                    key={product.to}
                    to={product.to}
                    role="menuitem"
                    onClick={() => setProductsOpen(false)}
                    className="group grid grid-cols-[38px_1fr] gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted/70 focus:bg-muted/70 focus:outline-none"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-primary">
                      <product.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">
                        {product.label}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                        {product.description}
                      </span>
                    </span>
                  </Link>
                ))}
                <Link
                  to="/products"
                  role="menuitem"
                  onClick={() => setProductsOpen(false)}
                  className="mt-1 flex items-center justify-between rounded-lg border-t border-border px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/70 focus:bg-muted/70 focus:outline-none"
                >
                  <span className="inline-flex items-center gap-2">
                    <LayoutGrid className="h-4 w-4 text-accent" />
                    All products
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-medium text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/sign-in"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            to="/request-demo"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-card hover:bg-primary/90 transition-all"
          >
            Request demo
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface">
          <div className="container-x flex flex-col gap-1 py-3">
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Products
            </Link>
            <div className="mb-2 ml-3 border-l border-border pl-2">
              {products.map((product) => (
                <Link
                  key={product.to}
                  to={product.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <product.icon className="h-3.5 w-3.5 text-accent" />
                  {product.label}
                </Link>
              ))}
            </div>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/sign-in"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Sign in
            </Link>
            <Link
              to="/request-demo"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Request demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
