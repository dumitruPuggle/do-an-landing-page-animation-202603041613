import React, {useMemo} from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const IconWrench: React.FC<{ color: string; size?: number }> = ({
  color,
  size = 18,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: "block" }}
      fill="none"
    >
      <path
        d="M14.7 6.1a5.2 5.2 0 0 0-6.6 6.6l-5.5 5.5a1.2 1.2 0 0 0 0 1.7l1.5 1.5a1.2 1.2 0 0 0 1.7 0l5.5-5.5a5.2 5.2 0 0 0 6.6-6.6l-2.7 2.7-2.8-2.8 2.8-2.6Z"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

const IconDoc: React.FC<{ color: string; size?: number }> = ({
  color,
  size = 18,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: "block" }}
      fill="none"
    >
      <path
        d="M7.5 3.5h7.2l2.8 2.8v12.6c0 1.5-1.2 2.6-2.6 2.6H7.5c-1.4 0-2.6-1.1-2.6-2.6V6.1c0-1.5 1.2-2.6 2.6-2.6Z"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M8 11.3h7.4"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M8 15.2h6.2"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

const IconPaperclip: React.FC<{ color: string; size?: number }> = ({
  color,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ display: "block" }}
    fill="none"
  >
    <path
      d="M8.5 12.5l6.8-6.8a3.1 3.1 0 0 1 4.4 4.4l-8.2 8.2a5 5 0 0 1-7.1-7.1l8.3-8.3"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMic: React.FC<{ color: string; size?: number }> = ({
  color,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ display: "block" }}
    fill="none"
  >
    <path
      d="M12 14.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 12 4a3.2 3.2 0 0 0-3.2 3.2v4.2A3.2 3.2 0 0 0 12 14.6Z"
      stroke={color}
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M6.5 11.2a5.5 5.5 0 0 0 11 0"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M12 16.7v3.1"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

const IconArrowUp: React.FC<{ color: string; size?: number }> = ({
  color,
  size = 22,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ display: "block" }}
    fill="none"
  >
    <path
      d="M12 20V6"
      stroke={color}
      strokeWidth={2.6}
      strokeLinecap="round"
    />
    <path
      d="M5.5 12.2 12 5.7l6.5 6.5"
      stroke={color}
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBuildApps: React.FC<{ color: string; size?: number }> = ({
  color,
  size = 18,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ display: "block" }}
    fill="none"
  >
    <path
      d="M5.5 6.8c0-1.3 1-2.3 2.3-2.3h8.3c1.3 0 2.3 1 2.3 2.3v6.2c0 1.3-1 2.3-2.3 2.3H7.8c-1.3 0-2.3-1-2.3-2.3V6.8Z"
      stroke={color}
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M8.2 8.2h2.2"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M8.2 11h5.6"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M18.9 18.9v-4.1"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M16.85 16.85H21"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

const FONT =
  'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif';

const Pill: React.FC<{
  label: string;
  icon: "doc" | "wrench";
  delay: number;
  floatSeed: number;
}> = ({ label, icon, delay, floatSeed }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    fps,
    frame: frame - delay,
    config: { damping: 14, stiffness: 180, mass: 0.7 },
  });

  const t = (frame + floatSeed * 19) / fps;
  const floatY = Math.sin(t * 1.1) * 4.5;
  const floatX = Math.cos(t * 0.9) * 2.5;

  const iconColor = icon === "doc" ? "#16a34a" : "#2d74ff";

  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.72)",
        borderRadius: 999,
        padding: "14px 22px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        boxShadow: "0 10px 30px rgba(17,24,39,0.10)",
        border: "1px solid rgba(255,255,255,0.75)",
        backdropFilter: "blur(6px)",
        transform: `translate3d(${(1 - enter) * -26 + floatX}px, ${(1 - enter) * 22 + floatY}px, 0) scale(${0.94 + enter * 0.06})`,
        opacity: enter,
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon === "doc" ? (
          <IconDoc color={iconColor} size={20} />
        ) : (
          <IconWrench color={iconColor} size={20} />
        )}
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontSize: 24,
          color: "#111827",
          letterSpacing: -0.2,
          fontWeight: 600,
        }}
      >
        {label}
      </div>
    </div>
  );
};

const AnimatedPromptCard: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const inSpr = spring({
    fps,
    frame: frame - delay,
    config: { damping: 16, stiffness: 160, mass: 0.9 },
  });

  const loopT = frame / fps;
  const sheen = (Math.sin(loopT * 1.2) + 1) / 2; // 0..1

  const sendPulse = (Math.sin(loopT * 2.4) + 1) / 2;

  return (
    <div
      style={{
        width: 1260,
        height: 250,
        backgroundColor: "#ffffff",
        borderRadius: 26,
        border: "2px solid rgba(17,24,39,0.12)",
        boxShadow:
          "0 18px 40px rgba(17,24,39,0.16), 0 1px 0 rgba(17,24,39,0.06)",
        position: "relative",
        overflow: "hidden",
        transform: `translate3d(0, ${(1 - inSpr) * 28}px, 0) scale(${0.96 + inSpr * 0.04})`,
        opacity: inSpr,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -2,
          background: `linear-gradient(120deg, rgba(135,167,255,${0.18 * sheen}) 0%, rgba(255,210,125,${0.14 * (1 - sheen)}) 40%, rgba(255,255,255,0) 70%)`,
          filter: "blur(0px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 26,
          top: 26,
          fontFamily: FONT,
          fontSize: 28,
          color: "#6b7280",
          letterSpacing: -0.2,
        }}
      >
        Build an agent or perform a task
      </div>

      <div
        style={{
          position: "absolute",
          left: 26,
          bottom: 34,
          height: 56,
          padding: "0 20px",
          borderRadius: 999,
          border: "1.5px solid rgba(17,24,39,0.1)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 0 rgba(17,24,39,0.03)",
        }}
      >
        <IconBuildApps color="#4b5563" size={20} />
        <div
          style={{
            fontFamily: FONT,
            fontSize: 22,
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Build apps
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 28,
          bottom: 34,
          display: "flex",
          alignItems: "center",
          gap: 22,
        }}
      >
        <div style={{ opacity: 0.6 }}>
          <IconPaperclip color="#374151" size={22} />
        </div>
        <div style={{ opacity: 0.6 }}>
          <IconMic color="#374151" size={22} />
        </div>
        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: 999,
            backgroundColor: "#87a7ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 0 rgba(17,24,39,0.06)",
            transform: `scale(${1 + sendPulse * 0.04})`,
          }}
        >
          <IconArrowUp color="#ffffff" size={26} />
        </div>
      </div>
    </div>
  );
};

const ProductMock: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const inSpr = spring({
    fps,
    frame: frame - delay,
    config: { damping: 18, stiffness: 120, mass: 1.1 },
  });

  const t = frame / fps;
  const tilt = Math.sin(t * 0.7) * 0.6;
  const bob = Math.cos(t * 0.9) * 6;

  return (
    <div
      style={{
        width: 560,
        height: 560,
        borderRadius: 36,
        background: "rgba(255,255,255,0.55)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 30px 70px rgba(17,24,39,0.22)",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        transform: `translate3d(0, ${(1 - inSpr) * 24 + bob}px, 0) rotate(${tilt}deg) scale(${0.92 + inSpr * 0.08})`,
        opacity: inSpr,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.45) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 18,
          borderRadius: 26,
          background: "#ffffff",
          border: "1px solid rgba(17,24,39,0.08)",
          overflow: "hidden",
        }}
      >
        <Img
          // Provided by the runtime (see prompt)
          src={(globalThis as any).AttachedImages?.[0]}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export const HelpHomeScreenshot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgShift = Math.sin(frame / fps * 0.35) * 18;
  const bgShift2 = Math.cos(frame / fps * 0.28) * 14;

  const heroIn = spring({
    fps,
    frame: frame - 10,
    config: { damping: 16, stiffness: 140, mass: 0.9 },
  });

  const subtitleIn = spring({
    fps,
    frame: frame - 18,
    config: { damping: 18, stiffness: 140, mass: 0.9 },
  });

  const layoutIn = spring({
    fps,
    frame: frame - 24,
    config: { damping: 18, stiffness: 120, mass: 1.0 },
  });

  const headlineY = interpolate(heroIn, [0, 1], [24, 0]);
  const headlineOpacity = heroIn;

  const pills = useMemo(
    () => [
      { label: "Personal website", icon: "doc" as const },
      { label: "Customer support email", icon: "wrench" as const },
      { label: "Outbound sales calls", icon: "wrench" as const },
      { label: "Lead gen", icon: "doc" as const },
      { label: "Meeting recorder", icon: "wrench" as const },
      { label: "LinkedIn outreach", icon: "doc" as const },
      { label: "Support chatbot", icon: "wrench" as const },
    ],
    []
  );

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(1200px 700px at 50% 20%, rgba(255,243,200,0.75) 0%, rgba(255,242,226,0.72) 45%, rgba(255,243,205,0.6) 100%)",
      }}
    >
      {/* Soft moving blobs */}
      <div
        style={{
          position: "absolute",
          left: -220 + bgShift,
          top: -240 + bgShift2,
          width: 620,
          height: 620,
          borderRadius: 999,
          background:
            "radial-gradient(circle at 30% 30%, rgba(135,167,255,0.55) 0%, rgba(135,167,255,0.0) 70%)",
          filter: "blur(2px)",
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -260 - bgShift2,
          bottom: -280 - bgShift,
          width: 720,
          height: 720,
          borderRadius: 999,
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,210,125,0.55) 0%, rgba(255,210,125,0.0) 70%)",
          filter: "blur(2px)",
          opacity: 0.9,
        }}
      />

      {/* subtle top-right crop hint */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 46,
          height: 120,
          background:
            "linear-gradient(180deg, rgba(12,18,40,0.55) 0%, rgba(12,18,40,0.2) 100%)",
          boxShadow: "-2px 2px 10px rgba(0,0,0,0.18)",
          borderLeft: "1px solid rgba(255,255,255,0.12)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 20,
          height: 80,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Main layout */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 90px",
          gap: 70,
          transform: `translate3d(0, ${(1 - layoutIn) * 14}px, 0)`,
        }}
      >
        {/* Left: hero */}
        <div style={{ width: 980 }}>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 78,
              fontWeight: 800,
              color: "#0b1220",
              letterSpacing: -1.6,
              lineHeight: 1.03,
              transform: `translate3d(0, ${headlineY}px, 0)`,
              opacity: headlineOpacity,
            }}
          >
            Do an landing page
            <br />
            animation
          </div>

          <div style={{ height: 18 }} />

          <div
            style={{
              fontFamily: FONT,
              fontSize: 26,
              color: "rgba(17,24,39,0.70)",
              letterSpacing: -0.2,
              lineHeight: 1.35,
              maxWidth: 860,
              transform: `translate3d(0, ${interpolate(subtitleIn, [0, 1], [18, 0])}px, 0)`,
              opacity: subtitleIn,
            }}
          >
            A clean, modern hero section with a product mock, prompt card, and
            floating use-cases—animated in with smooth springs and subtle looping
            motion.
          </div>

          <div style={{ height: 34 }} />

          <AnimatedPromptCard delay={34} />

          <div style={{ height: 34 }} />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              width: 1260,
              transform: `translate3d(0, ${interpolate(layoutIn, [0, 1], [10, 0])}px, 0)`,
              opacity: interpolate(layoutIn, [0, 1], [0, 1]),
            }}
          >
            {pills.map((p, i) => (
              <Pill
                key={p.label}
                label={p.label}
                icon={p.icon}
                delay={52 + i * 4}
                floatSeed={i + 1}
              />
            ))}
          </div>
        </div>

        {/* Right: product mock image */}
        <div
          style={{
            width: 620,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: layoutIn,
          }}
        >
          <ProductMock delay={40} />
        </div>
      </div>
    </AbsoluteFill>
  );
};