import React from "react";
import { AbsoluteFill } from "remotion";

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

const Pill: React.FC<{
  label: string;
  icon: "doc" | "wrench";
}> = ({ label, icon }) => {
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
        boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
        border: "1px solid rgba(255,255,255,0.75)",
        backdropFilter: "blur(6px)",
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
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
          fontSize: 24,
          color: "#111827",
          letterSpacing: -0.2,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export const HelpHomeScreenshot: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(1200px 700px at 50% 20%, rgba(255,243,200,0.75) 0%, rgba(255,242,226,0.72) 45%, rgba(255,243,205,0.6) 100%)",
      }}
    >
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

      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 250,
        }}
      >
        <div
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
            fontSize: 56,
            fontWeight: 700,
            color: "#111827",
            letterSpacing: -1.2,
            marginBottom: 46,
          }}
        >
          How can I help?
        </div>

        <div
          style={{
            width: 1260,
            height: 250,
            backgroundColor: "#ffffff",
            borderRadius: 26,
            border: "2px solid rgba(17,24,39,0.12)",
            boxShadow:
              "0 10px 20px rgba(17,24,39,0.12), 0 1px 0 rgba(17,24,39,0.06)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 26,
              top: 26,
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
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
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                fontSize: 22,
                fontWeight: 600,
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
              }}
            >
              <IconArrowUp color="#ffffff" size={26} />
            </div>
          </div>
        </div>

        <div style={{ height: 42 }} />

        <div
          style={{
            width: 1260,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 22,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pill label="Personal website" icon="doc" />
            <Pill label="Customer support email" icon="wrench" />
            <Pill label="Outbound sales calls" icon="wrench" />
            <Pill label="Lead gen" icon="doc" />
          </div>

          <div
            style={{
              display: "flex",
              gap: 22,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pill label="Meeting recorder" icon="wrench" />
            <Pill label="LinkedIn outreach" icon="doc" />
            <Pill label="Support chatbot" icon="wrench" />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};