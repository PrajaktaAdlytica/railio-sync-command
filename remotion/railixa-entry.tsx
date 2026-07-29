import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import {
  AbsoluteFill,
  Composition,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

type RailixaEntryProps = {
  readonly incidentId: string;
  readonly routeLabel: string;
};

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
const easeInOut = Easing.bezier(0.45, 0, 0.55, 1);

const progress = (frame: number, start: number, end: number, easing = easeOut) =>
  interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

const fadeWindow = (frame: number, start: number, peak: number, end: number) =>
  interpolate(frame, [start, peak, end], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const routePaths = [
  "M-80 965 C280 882 480 805 790 670 C1050 558 1245 425 1530 245 C1680 150 1810 98 1990 35",
  "M-110 1025 C260 942 520 842 820 710 C1064 602 1275 470 1545 295 C1690 200 1830 132 2000 74",
  "M-70 902 C330 825 555 748 845 622 C1110 506 1288 382 1518 225 C1695 104 1840 58 1998 5",
] as const;

function StatusPlate({
  label,
  value,
  frame,
  from,
  x,
  y,
  accent,
}: {
  label: string;
  value: string;
  frame: number;
  from: number;
  x: number;
  y: number;
  accent: string;
}) {
  const appear = progress(frame, from, from + 22);
  const exit = progress(frame, 232, 258, easeInOut);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 360,
        boxSizing: "border-box",
        padding: "18px 20px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(8, 18, 28, 0.66)",
        boxShadow: `0 20px 70px rgba(0,0,0,0.34), inset 3px 0 0 ${accent}`,
        backdropFilter: "blur(16px)",
        opacity: appear * (1 - exit),
        translate: interpolate(appear, [0, 1], ["0px 18px", "0px 0px"]),
        color: "#f7f9fb",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          color: "rgba(255,255,255,0.52)",
          fontSize: 18,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: 29,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function OperationalField({ incidentId, routeLabel }: RailixaEntryProps) {
  const frame = useCurrentFrame();
  const imageIn = progress(frame, 0, 38, easeInOut);
  const imageOut = progress(frame, 238, 284, easeInOut);
  const paleIn = progress(frame, 244, 298, easeInOut);
  const gridIn = progress(frame, 4, 45);
  const diagramOut = progress(frame, 235, 280, easeInOut);
  const primaryDraw = progress(frame, 20, 82);
  const secondaryDraw = progress(frame, 96, 154);
  const crewDraw = progress(frame, 142, 198);
  const incidentIn = progress(frame, 68, 80);
  const incidentContain = progress(frame, 196, 222);
  const finalLine = progress(frame, 250, 292, easeInOut);
  const topMeta = progress(frame, 5, 30);
  const logoIn = progress(frame, 260, 292);

  return (
    <AbsoluteFill style={{ backgroundColor: "#08131d", overflow: "hidden" }}>
      <Img
        src={staticFile("motion/railixa-operational-corridor.png")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 52%",
          opacity: imageIn * (1 - imageOut),
          scale: interpolate(frame, [0, 260], [1.025, 1.105], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeInOut,
          }),
          translate: interpolate(frame, [0, 260], ["0px 10px", "0px -18px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeInOut,
          }),
        }}
      />

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, rgba(3,10,16,0.84) 0%, rgba(3,10,16,0.34) 47%, rgba(3,10,16,0.18) 72%, rgba(3,10,16,0.54) 100%), linear-gradient(180deg, rgba(3,10,16,0.42) 0%, transparent 45%, rgba(3,10,16,0.8) 100%)",
          opacity: (1 - paleIn) * imageIn,
        }}
      />

      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,190,210,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(167,190,210,0.08) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.35))",
          opacity: gridIn * (1 - diagramOut),
        }}
      />

      <svg
        viewBox="0 0 1920 1080"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 1 - diagramOut,
        }}
      >
        <defs>
          <filter id="routeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="incidentGlow">
            <stop offset="0%" stopColor="#F17B55" stopOpacity="1" />
            <stop offset="38%" stopColor="#D94F30" stopOpacity="0.74" />
            <stop offset="100%" stopColor="#D94F30" stopOpacity="0" />
          </radialGradient>
        </defs>

        {routePaths.map((path, index) => {
          const draw = index === 0 ? primaryDraw : index === 1 ? secondaryDraw : crewDraw;
          const color = index === 0 ? "#E9F2F8" : index === 1 ? "#7DB3D5" : "#98D0B0";

          return (
            <g key={path}>
              <path
                d={path}
                fill="none"
                stroke={color}
                strokeOpacity={0.16}
                strokeWidth={index === 0 ? 15 : 10}
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={1 - draw}
                filter="url(#routeGlow)"
              />
              <path
                d={path}
                fill="none"
                stroke={color}
                strokeOpacity={0.8}
                strokeWidth={index === 0 ? 3.5 : 2.5}
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={1 - draw}
              />
            </g>
          );
        })}

        <circle
          cx="974"
          cy="589"
          r={interpolate(incidentIn - incidentContain, [0, 1], [0, 98])}
          fill="url(#incidentGlow)"
          opacity={(incidentIn - incidentContain) * 0.76}
        />
        {[0, 1, 2].map((ring) => {
          const ringProgress = progress(frame, 76 + ring * 9, 112 + ring * 9);
          return (
            <circle
              key={ring}
              cx="974"
              cy="589"
              r={interpolate(ringProgress, [0, 1], [8, 78])}
              fill="none"
              stroke="#F17B55"
              strokeWidth={2}
              opacity={(1 - ringProgress) * incidentIn * (1 - incidentContain)}
            />
          );
        })}
        <circle
          cx="974"
          cy="589"
          r={interpolate(incidentContain, [0, 1], [10, 5])}
          fill="#F17B55"
          opacity={incidentIn * (1 - diagramOut)}
          filter="url(#routeGlow)"
        />
      </svg>

      <StatusPlate
        frame={frame}
        from={78}
        x={1045}
        y={528}
        label="Incident"
        value={`${incidentId} · ${routeLabel}`}
        accent="#D94F30"
      />
      <StatusPlate
        frame={frame}
        from={130}
        x={1250}
        y={714}
        label="Asset"
        value="ED160-017 · linked"
        accent="#7DB3D5"
      />
      <StatusPlate
        frame={frame}
        from={175}
        x={390}
        y={742}
        label="Crew"
        value="Poznań · assigned"
        accent="#77B691"
      />

      <div
        style={{
          position: "absolute",
          top: 76,
          left: 92,
          display: "flex",
          alignItems: "center",
          gap: 16,
          opacity: topMeta * (1 - diagramOut),
          color: "rgba(245,248,250,0.72)",
          fontFamily: "Inter, sans-serif",
          fontSize: 19,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#D94F30",
            boxShadow: "0 0 24px rgba(217,79,48,0.9)",
          }}
        />
        Operational weave · 06:42 CET
      </div>

      <AbsoluteFill
        style={{
          backgroundColor: "#F2F3F5",
          opacity: paleIn,
        }}
      />
      <AbsoluteFill
        style={{
          opacity: paleIn,
          backgroundImage:
            "linear-gradient(rgba(27,58,87,0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(27,58,87,0.065) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 130,
          right: 130,
          top: "52%",
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(27,58,87,0.25) 11%, #1B3A57 37%, #D94F30 66%, rgba(27,58,87,0.18) 91%, transparent 100%)",
          scale: `${finalLine} 1`,
          opacity: paleIn,
          transformOrigin: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "52%",
          width: 16,
          height: 16,
          borderRadius: 5,
          background: "#D94F30",
          boxShadow: "0 0 0 10px rgba(217,79,48,0.11)",
          opacity: logoIn,
          translate: "-50% -50%",
          scale: interpolate(logoIn, [0, 1], [0.65, 1]),
        }}
      />

      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 46%, transparent 0%, transparent 43%, rgba(4,12,19,0.34) 100%)",
          opacity: (1 - paleIn) * 0.72,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: fadeWindow(frame, 0, 2, 14) * 0.7,
          background: "#02070b",
        }}
      />
    </AbsoluteFill>
  );
}

export function RailixaMotionRoot() {
  return (
    <Composition
      id="RailixaEntry"
      component={OperationalField}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        incidentId: "INC-024",
        routeLabel: "KM 42.6",
      }}
    />
  );
}
