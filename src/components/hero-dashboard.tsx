import { motion } from "motion/react";
import { AlertTriangle, Wrench, Users, Activity, ArrowUpRight } from "lucide-react";

export function HeroDashboard() {
  return (
    <div className="relative">
      {/* floating soft glow */}
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/8 via-transparent to-accent/10 blur-2xl" />

      <div className="relative rounded-2xl border border-border/80 bg-surface shadow-dash overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-border/80 bg-[oklch(0.985_0.003_247)] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.02_27)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.88_0.05_75)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.05_152)]" />
          </div>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono">ops.railixa.com / control-room</span>
          </div>
          <div className="w-12" />
        </div>

        <div className="grid grid-cols-12 gap-3 p-3 bg-[oklch(0.985_0.003_247)]">
          {/* Live Incidents */}
          <div className="col-span-7 rounded-xl border border-border bg-surface p-4 glass">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <AlertTriangle className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-[13px] font-semibold">Live incident feed</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.65_0.18_27)] pulse-dot" />
                3 active
              </span>
            </div>

            <div className="mt-3 space-y-2">
              {[
                { sev: "P1", line: "RE 9 · Poznań ↔ Zbąszynek", t: "Signal failure · KM 42.6", min: "12m", color: "bg-accent/12 text-accent border-accent/25" },
                { sev: "P2", line: "S 5 · Wrocław Główny", t: "Track circuit anomaly", min: "27m", color: "bg-[oklch(0.95_0.08_75)] text-[oklch(0.45_0.14_70)] border-[oklch(0.88_0.09_75)]" },
                { sev: "P3", line: "Depot · Krzesiny", t: "Brake-pad threshold reached", min: "41m", color: "bg-[oklch(0.95_0.04_152)] text-[oklch(0.42_0.1_152)] border-[oklch(0.88_0.05_152)]" },
              ].map((i, idx) => (
                <motion.div
                  key={i.sev + idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
                  className="flex items-center justify-between rounded-lg border border-border/70 bg-surface px-3 py-2.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-semibold ${i.color}`}>{i.sev}</span>
                    <div className="min-w-0">
                      <div className="truncate text-[12.5px] font-medium text-foreground">{i.line}</div>
                      <div className="truncate text-[11px] text-muted-foreground">{i.t}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-muted-foreground">{i.min}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* mini timeline */}
            <div className="mt-4 rounded-lg border border-border/70 bg-[oklch(0.98_0.003_247)] p-3">
              <div className="mb-2 flex items-center justify-between text-[10.5px] uppercase tracking-wider text-muted-foreground">
                <span>Incident response · last 24h</span>
                <span className="font-mono normal-case text-foreground">avg 6m 12s</span>
              </div>
              <svg viewBox="0 0 320 60" className="h-14 w-full">
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#1B3A57" stopOpacity="0.25" />
                    <stop offset="1" stopColor="#1B3A57" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,45 L24,38 L48,42 L72,30 L96,33 L120,22 L144,28 L168,18 L192,24 L216,14 L240,20 L264,12 L288,16 L320,9 L320,60 L0,60 Z" fill="url(#g1)" />
                <path d="M0,45 L24,38 L48,42 L72,30 L96,33 L120,22 L144,28 L168,18 L192,24 L216,14 L240,20 L264,12 L288,16 L320,9" fill="none" stroke="#1B3A57" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Network status */}
          <div className="col-span-5 rounded-xl border border-border bg-surface p-4 glass">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Activity className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-[13px] font-semibold">Network status</h3>
              </div>
              <span className="text-[11px] font-mono text-muted-foreground">42 lines</span>
            </div>

            <div className="mt-3 space-y-2">
              {[
                { l: "RE 1 Poznań–Berlin", v: 98, c: "bg-[oklch(0.65_0.16_152)]" },
                { l: "RE 9 Poznań–Zbąszynek", v: 71, c: "bg-accent" },
                { l: "RB 33 Wolsztyn", v: 92, c: "bg-[oklch(0.65_0.16_152)]" },
                { l: "S 5 Wrocław", v: 84, c: "bg-[oklch(0.74_0.14_75)]" },
                { l: "RE 11 Gniezno", v: 95, c: "bg-[oklch(0.65_0.16_152)]" },
              ].map((row, i) => (
                <div key={row.l} className="space-y-1">
                  <div className="flex items-center justify-between text-[11.5px]">
                    <span className="text-foreground/85">{row.l}</span>
                    <span className="font-mono text-muted-foreground">{row.v}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className={`h-full ${row.c}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${row.v}%` }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.9, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Crew */}
          <div className="col-span-5 rounded-xl border border-border bg-surface p-4 glass">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Users className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-[13px] font-semibold">Crew on shift</h3>
              </div>
              <span className="text-[11px] font-mono text-muted-foreground">128 / 134</span>
            </div>
            <div className="mt-3 grid grid-cols-12 gap-1">
              {Array.from({ length: 60 }).map((_, i) => {
                const tone = i % 11 === 0 ? "bg-accent/70" : i % 5 === 0 ? "bg-[oklch(0.74_0.14_75)]/70" : "bg-primary/70";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.005 * i, duration: 0.3 }}
                    className={`h-3 rounded-[2px] ${tone}`}
                  />
                );
              })}
            </div>
            <div className="mt-3 flex items-center gap-3 text-[10.5px] text-muted-foreground">
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-primary/70" />On duty</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-[oklch(0.74_0.14_75)]/70" />Break</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-accent/70" />Standby</span>
            </div>
          </div>

          {/* Asset health */}
          <div className="col-span-7 rounded-xl border border-border bg-surface p-4 glass">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Wrench className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-[13px] font-semibold">Asset health · fleet</h3>
              </div>
              <span className="text-[11px] text-muted-foreground">14 EMU · 22 DMU</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[
                { k: "Availability", v: "94.2%", d: "+1.4 vs LM", up: true },
                { k: "MTBF", v: "1,820h", d: "+62h", up: true },
                { k: "Open work orders", v: "37", d: "-8", up: true },
              ].map((s) => (
                <div key={s.k} className="rounded-lg border border-border/70 bg-[oklch(0.985_0.003_247)] px-3 py-2.5">
                  <div className="text-[10.5px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
                  <div className="mt-1 text-lg font-semibold tracking-tight">{s.v}</div>
                  <div className="text-[11px] text-[oklch(0.45_0.13_152)] font-medium">{s.d}</div>
                </div>
              ))}
            </div>
            {/* mini calendar */}
            <div className="mt-3 grid grid-cols-12 gap-[3px]">
              {Array.from({ length: 72 }).map((_, i) => {
                const intensity = (Math.sin(i * 0.7) + 1) / 2;
                const op = 0.15 + intensity * 0.85;
                return <div key={i} className="aspect-square rounded-[2px] bg-primary" style={{ opacity: op }} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
