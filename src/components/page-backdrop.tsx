import { motion, useReducedMotion } from "motion/react";

type PageBackdropProps = {
  tone?: "light" | "steel" | "blueprint" | "signal" | "mint" | "paper";
  className?: string;
};

export function PageBackdrop({ tone = "light", className = "" }: PageBackdropProps) {
  const reduceMotion = useReducedMotion();
  const backgrounds = {
    light: "signal-grid",
    steel: "signal-grid-dark",
    blueprint: "blueprint-grid",
    signal: "signal-wash",
    mint: "mint-wash",
    paper: "paper-lines",
  } as const;
  const glowOne = {
    light: "bg-primary/[0.07]",
    steel: "bg-accent/[0.08]",
    blueprint: "bg-primary/[0.1]",
    signal: "bg-accent/[0.1]",
    mint: "bg-success/[0.09]",
    paper: "bg-warning/[0.07]",
  } as const;
  const glowTwo = {
    light: "bg-accent/[0.055]",
    steel: "bg-white/[0.04]",
    blueprint: "bg-accent/[0.055]",
    signal: "bg-primary/[0.075]",
    mint: "bg-primary/[0.055]",
    paper: "bg-accent/[0.06]",
  } as const;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className={`absolute inset-0 ${backgrounds[tone]}`} />
      <motion.div
        className={`absolute -left-[18%] top-[8%] h-[70%] w-[72%] rounded-full blur-3xl ${glowOne[tone]}`}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 48, 0],
                y: [0, -24, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -right-[14%] bottom-[-24%] h-[68%] w-[68%] rounded-full blur-3xl ${glowTwo[tone]}`}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -36, 0],
                y: [0, 20, 0],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
