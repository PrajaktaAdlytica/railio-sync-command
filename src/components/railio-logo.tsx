type Props = { className?: string; tone?: "dark" | "light" };

export function RailioLogo({ className, tone = "dark" }: Props) {
  const fg = tone === "light" ? "#FFFFFF" : "#1B3A57";
  const accent = "#D94F30";
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="28" height="28" rx="7" fill={fg} />
      <path d="M6 18.5 L22 18.5" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1.2" />
      <path d="M6 9.5 L22 9.5" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1.2" />
      <path d="M9 6.5 L9 21.5" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="1.4" />
      <path d="M19 6.5 L19 21.5" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="1.4" />
      <circle cx="14" cy="14" r="2.6" fill={accent} />
    </svg>
  );
}
