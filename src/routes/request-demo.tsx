import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PageBackdrop } from "@/components/page-backdrop";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Request a demo — Railixa" },
      {
        name: "description",
        content: "Explore Railixa with a synthetic Polish regional rail scenario.",
      },
    ],
  }),
  component: RequestDemo,
});

type Form = {
  name: string;
  email: string;
  company: string;
  role: string;
  fleet: string;
  country: string;
  message: string;
};

const initial: Form = {
  name: "",
  email: "",
  company: "",
  role: "",
  fleet: "1-50",
  country: "",
  message: "",
};

function RequestDemo() {
  const [form, setForm] = useState<Form>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
  };

  const set = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section className="relative overflow-hidden">
      <PageBackdrop tone="mint" />
      <div className="container-x relative pt-20 pb-24 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Request demo
              </span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
                See Railixa through a synthetic Polish network.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Explore a 30-minute product walkthrough covering incidents, asset context, and crew
                response. The current experience is a demonstration and does not connect to a live
                operator network.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Walkthrough of Incidents, Assets and Crew",
                  "Live response on a simulated P1 event",
                  "Architecture & integration Q&A",
                  "Security and procurement requirements discussion",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-success" /> {p}
                  </li>
                ))}
              </ul>
              <div className="card-rail-mint mt-10 rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4 text-success" /> Synthetic data · no live customer
                  systems
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  This demo form does not send or store your submission.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="card-rail-blue rounded-2xl border border-border p-8 shadow-card lg:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="ok"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-10 text-center"
                    >
                      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/12 text-success">
                        <Check className="h-7 w-7" />
                      </div>
                      <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                        Request preview complete.
                      </h2>
                      <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                        Thanks {form.name?.split(" ")[0] || "for trying the form"}. This
                        demonstration does not send an email to{" "}
                        <span className="text-foreground font-medium">{form.email || "you"}</span>.
                        A production handoff would connect this flow to a secure scheduling
                        workflow.
                      </p>
                      <div className="mt-7 flex justify-center gap-3">
                        <Link
                          to="/"
                          className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium"
                        >
                          Back home
                        </Link>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setForm(initial);
                          }}
                          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
                        >
                          Submit another <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={onSubmit}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                    >
                      <Field label="Full name" required>
                        <input
                          required
                          name="name"
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          className={input}
                          placeholder="Anna Kowalska"
                        />
                      </Field>
                      <Field label="Work email" required>
                        <input
                          required
                          name="email"
                          autoComplete="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          className={input}
                          placeholder="anna@operator.example"
                        />
                      </Field>
                      <Field label="Organisation" required>
                        <input
                          required
                          name="organisation"
                          autoComplete="organization"
                          value={form.company}
                          onChange={(e) => set("company", e.target.value)}
                          className={input}
                          placeholder="Kolej Regionalna Mazowsze (fictional)"
                        />
                      </Field>
                      <Field label="Role">
                        <input
                          name="role"
                          autoComplete="organization-title"
                          value={form.role}
                          onChange={(e) => set("role", e.target.value)}
                          className={input}
                          placeholder="Dyrektorka operacyjna"
                        />
                      </Field>
                      <Field label="Fleet size">
                        <select
                          name="fleet"
                          value={form.fleet}
                          onChange={(e) => set("fleet", e.target.value)}
                          className={input}
                        >
                          <option>1-50</option>
                          <option>50-200</option>
                          <option>200-500</option>
                          <option>500+</option>
                        </select>
                      </Field>
                      <Field label="Country">
                        <input
                          name="country"
                          autoComplete="country-name"
                          value={form.country}
                          onChange={(e) => set("country", e.target.value)}
                          className={input}
                          placeholder="Polska"
                        />
                      </Field>
                      <Field label="What would you like to see?" className="sm:col-span-2">
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={(e) => set("message", e.target.value)}
                          className={input}
                          placeholder="We coordinate nine regional lines and want to review incident handovers…"
                        />
                      </Field>
                      <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-2">
                        <p className="text-xs text-muted-foreground">
                          No data leaves this browser in the demo. Read the{" "}
                          <Link to="/privacy" className="font-medium text-primary">
                            privacy note
                          </Link>
                          .
                        </p>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lift hover:bg-primary/90 transition disabled:opacity-60"
                        >
                          {submitting ? (
                            "Submitting…"
                          ) : (
                            <>
                              Request demo <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const input =
  "w-full rounded-md border border-input bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className || ""}`}>
      <span className="text-xs font-medium text-foreground/80">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
