type Props = { className?: string; tone?: "dark" | "light" };

export function RailiXaLogo({ className, tone = "dark" }: Props) {
  const base = tone === "light" ? "#D94F30" : "#1B3A57";
  const rail = "#FFFFFF";
  const mutedRail = tone === "light" ? "#F8FAFC" : "#D7E1EA";
  const signal = tone === "light" ? "#1B3A57" : "#D94F30";

  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="28" height="28" rx="7" fill={base} />
      <path d="M7 8.2L21 19.8" stroke={mutedRail} strokeWidth="2.3" strokeLinecap="round" />
      <path d="M21 8.2L7 19.8" stroke={rail} strokeWidth="2.3" strokeLinecap="round" />
      <path d="M8 14H20" stroke={rail} strokeOpacity="0.44" strokeWidth="1.35" strokeLinecap="round" />
      <rect x="11.3" y="11.3" width="5.4" height="5.4" rx="1.35" fill={signal} />
      <path d="M14 7.2V10.3" stroke={signal} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 17.7V20.8" stroke={signal} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
