type Props = { className?: string; tone?: "dark" | "light" };

export function RailioLogo({ className, tone = "dark" }: Props) {
  const base = tone === "light" ? "#D94F30" : "#1B3A57";
  const rail = "#FFFFFF";
  const switchStroke = tone === "light" ? "#1B3A57" : "#D94F30";
  const node = tone === "light" ? "#1B3A57" : "#D94F30";

  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="28" height="28" rx="7" fill={base} />
      <path d="M7 7.5V20.5" stroke={rail} strokeOpacity="0.98" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12.5 7.5V20.5" stroke={rail} strokeOpacity="0.98" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M18 7.5V13.5" stroke={rail} strokeOpacity="0.98" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M18 13.5L24 19.8" stroke={switchStroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10.5H18" stroke={rail} strokeOpacity="0.42" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7 17.5H18" stroke={rail} strokeOpacity="0.42" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="24" cy="19.8" r="1.9" fill={node} />
    </svg>
  );
}
