"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
const C = {
  ink: "#111827",
  inkDeep: "#0B1220",
  blue: "#18A2DF",
  blueDark: "#087CB5",
  blueLight: "#EAF7FD",
  muted: "#94A3B8",
  white: "#FFFFFF",
};
const eyebrow = (light = false): React.CSSProperties => ({
  fontSize: 11,
  fontWeight: 600,
  color: C.blue,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
});

const btnBlue: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 14,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  backgroundColor: C.blue,
  color: C.white,
  padding: "15px 36px",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.2s",
};

const blueBar: React.CSSProperties = {
  width: 28,
  height: 2,
  backgroundColor: C.blue,
  flexShrink: 0,
};

const btnGhost: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 14,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  backgroundColor: "transparent",
  color: C.white,
  padding: "15px 36px",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  border: `1px solid rgba(255,255,255,0.28)`,
  cursor: "pointer",
  transition: "border-color 0.2s",
};

export default function Hero() {
  return (
    <section
      className="hero-grid"
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: C.inkDeep,
        minHeight: "calc(100vh - 72px)",
      }}
    >
      {/* Background image */}
      <img
        src="/images/bonesohero.webp"
        alt="Construction site workers coordinating a mechanical installation project"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 35%, rgba(11,18,32,0.55) 65%, rgba(11,18,32,0.25) 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(11,18,32,0.7) 0%, transparent 45%)",
          zIndex: 1,
        }}
      />

      {/* Hero content */}
      <div
        className="hero-content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 64px 80px 80px",
          position: "relative",
          zIndex: 2,
          minHeight: "calc(100vh - 72px)",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <div style={blueBar} />

          <span style={eyebrow()}>
            Plumbing & Mechanical Design & Construction
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontWeight: 800,
            fontSize: "clamp(46px, 5.5vw, 84px)",
            color: C.white,
            lineHeight: 1.0,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          PLUMBING &amp;
          <br />
          MECHANICAL
          <br />
          <span style={{ color: C.blue }}>SYSTEMS</span>
          <br />
          BUILT TO WORK.
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.72,
            maxWidth: 520,
            marginBottom: 44,
          }}
        >
          Professional plumbing, HVAC and mechanical solutions for residential,
          commercial and construction projects.
        </p>

        {/* CTA */}
        <div
          className="cta-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            marginBottom: 36,
          }}
        >
          <a
            href="#contact"
            style={{
              ...btnBlue,
              fontSize: 14,
              padding: "16px 36px",
              borderRadius: "9px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.blueDark;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = C.blue;
            }}
          >
            Request a Quote
            <ArrowRight size={15} />
          </a>

          <a
            href="#services"
            style={{
              ...btnGhost,
              fontSize: 14,
              padding: "16px 36px",
              borderRadius: "9px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.65)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
            }}
          >
            Explore Services
          </a>
        </div>

        {/* Trust indicators */}
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.04em",
          }}
        >
          Professional service &nbsp;·&nbsp; Clear communication &nbsp;·&nbsp;
          Quality workmanship
        </p>

        {/* Decorative vertical rule */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 80,
            width: 1,
            height: 64,
            background:
              "linear-gradient(to bottom, transparent, rgba(24,162,223,0.6))",
          }}
        />
      </div>

      {/* Corner accent */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          width: 80,
          height: 80,
          border: "1px solid rgba(24,162,223,0.4)",
          zIndex: 2,
        }}
      />
    </section>
  );
}
