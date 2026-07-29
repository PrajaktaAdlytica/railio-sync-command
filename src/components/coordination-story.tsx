import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Radio,
  Users,
  Wrench,
} from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Detect",
    title: "A signal fault is reported near Poznań.",
    description:
      "The incident record opens with the affected service, location, severity, and response owner.",
    icon: AlertTriangle,
    meta: "RE 9 · KM 42.6 · P1",
  },
  {
    number: "02",
    label: "Connect",
    title: "The affected asset and service are linked.",
    description:
      "Maintenance context joins the same timeline without replacing the operator’s existing EAM or TMS.",
    icon: Wrench,
    meta: "EMU ED160-017 · illustrative",
  },
  {
    number: "03",
    label: "Mobilise",
    title: "Qualified crew receive one shared brief.",
    description:
      "Anna Kowalska and Marek Nowak acknowledge the assignment while the control room sees status in real time.",
    icon: Users,
    meta: "Poznań Główny · synthetic crew",
  },
  {
    number: "04",
    label: "Resolve",
    title: "Every update stays on the operational timeline.",
    description:
      "The handover, decisions, and closure notes remain together for review and export.",
    icon: CheckCircle2,
    meta: "Illustrative workflow complete",
  },
] as const;

export function CoordinationStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progressHeight = useTransform(scrollYProgress, [0.04, 0.92], ["0%", "100%"]);
  const pulseY = useTransform(scrollYProgress, [0.04, 0.92], ["0%", "97%"]);

  return (
    <section
      ref={sectionRef}
      id="coordination"
      className="relative border-y border-white/10 bg-steel text-steel-foreground"
    >
      <div aria-hidden="true" className="absolute inset-0 signal-grid-dark opacity-80" />
      <div className="container-x relative grid gap-12 py-24 lg:min-h-[225vh] lg:grid-cols-12 lg:gap-16 lg:py-0">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 lg:flex lg:min-h-[calc(100vh-7rem)] lg:flex-col lg:justify-center lg:py-16">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Follow the response
            </span>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
              One disruption.
              <br />
              One shared operational picture.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-steel-foreground/68">
              Scroll through a synthetic Polish rail incident and see how Incidents, Assets, and
              Crew keep the same response moving.
            </p>
            <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs text-steel-foreground/65">
              <Radio className="h-3.5 w-3.5 text-accent" />
              Illustrative product environment
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-7 lg:py-[28vh]">
          <div
            aria-hidden="true"
            className="absolute bottom-[28vh] left-[21px] top-[28vh] hidden w-px bg-white/12 lg:block"
          >
            <motion.div
              className="absolute left-0 top-0 w-px bg-accent"
              style={{ height: reduceMotion ? "100%" : progressHeight }}
            />
            <motion.span
              className="absolute -left-[5px] top-0 h-[11px] w-[11px] rounded-full border-2 border-steel bg-accent shadow-[0_0_0_5px_rgba(217,79,48,0.15)]"
              style={{ top: reduceMotion ? "97%" : pulseY }}
            />
          </div>

          <div className="space-y-7 lg:space-y-[24vh]">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0.32, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.58 }}
                transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative pl-0 lg:pl-16"
              >
                <div className="absolute left-[12px] top-8 hidden h-[19px] w-[19px] items-center justify-center rounded-full border border-white/15 bg-steel lg:flex">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === 0 ? "bg-accent" : "bg-white/35"
                    }`}
                  />
                </div>
                <div className="card-rail-night overflow-hidden rounded-2xl border border-white/12">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/12 text-accent">
                        <step.icon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                          {step.number} · {step.label}
                        </div>
                        <div className="mt-0.5 text-xs text-steel-foreground/48">{step.meta}</div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-steel-foreground/35" />
                  </div>
                  <div className="grid gap-6 px-5 py-6 sm:px-6 md:grid-cols-[1fr_auto] md:items-end">
                    <div>
                      <h3 className="max-w-md text-xl font-semibold tracking-tight sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-steel-foreground/62">
                        {step.description}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/10 p-3 text-xs text-steel-foreground/58">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        Poznań · Polska
                      </div>
                      <div className="mt-2 h-1.5 w-28 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={reduceMotion ? false : { scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.12 }}
                          className="h-full origin-left rounded-full bg-accent"
                          style={{ width: `${44 + index * 17}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
