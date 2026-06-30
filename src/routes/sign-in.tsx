import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ShieldCheck, Mail, Lock } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: "Sign in — Railio" },
      { name: "description", content: "Sign in to your Railio operations workspace." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Signed in. Redirecting to your workspace…");
    setTimeout(() => nav({ to: "/" }), 900);
  };

  return (
    <section className="container-x py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <Reveal>
          <div className="hidden lg:flex h-full flex-col justify-between rounded-2xl bg-primary p-10 text-primary-foreground overflow-hidden relative">
            <div className="absolute inset-0 rail-grid opacity-20" />
            <div className="relative">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/55">Railio · Control room</span>
              <h2 className="mt-4 text-3xl xl:text-4xl font-semibold tracking-tight leading-tight text-balance">
                Coordination<br/>infrastructure<br/>for regional rail.
              </h2>
              <p className="mt-5 max-w-sm text-primary-foreground/75 leading-relaxed">
                Sign in to your operational workspace. Live incidents, asset health and crew board — exactly as your duty shift left them.
              </p>
            </div>
            <div className="relative mt-10 grid grid-cols-3 gap-3">
              {[
                { k: "Active incidents", v: "3" },
                { k: "Trains in service", v: "126" },
                { k: "On-time perf.", v: "94.7%" },
              ].map((s) => (
                <div key={s.k} className="rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm p-3">
                  <div className="text-[10px] uppercase tracking-wider text-primary-foreground/55">{s.k}</div>
                  <div className="mt-1 text-xl font-semibold">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto w-full max-w-md lg:max-w-none lg:mx-0">
            <div className="rounded-2xl border border-border bg-surface p-8 lg:p-10 shadow-card">
              <h1 className="text-2xl font-semibold tracking-tight">Sign in to Railio</h1>
              <p className="mt-1.5 text-sm text-muted-foreground">Welcome back. Enter your operations credentials.</p>

              <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} className="mt-7 space-y-4">
                <label className="block">
                  <span className="text-xs font-medium text-foreground/80">Work email</span>
                  <div className="mt-1.5 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@operator.eu"
                      className="w-full rounded-md border border-input bg-surface pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                </label>
                <label className="block">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground/80">Password</span>
                    <a href="#" className="text-xs text-primary font-medium">Forgot?</a>
                  </div>
                  <div className="mt-1.5 relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-md border border-input bg-surface pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition disabled:opacity-60"
                >
                  {loading ? "Signing in…" : <>Sign in <ArrowRight className="h-4 w-4" /></>}
                </button>

                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
                  <div className="relative flex justify-center text-[11px] uppercase tracking-wider"><span className="bg-surface px-2 text-muted-foreground">or</span></div>
                </div>

                <button type="button" className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium hover:bg-muted">
                  Continue with SSO
                </button>
              </motion.form>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                Need access? <Link to="/request-demo" className="text-primary font-medium">Request a demo</Link>
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-success" /> Protected by enterprise SSO · EU hosted
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
