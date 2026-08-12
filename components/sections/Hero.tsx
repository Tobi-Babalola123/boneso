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
        minHeight: "calc(100svh - 72px)",
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
          objectPosition: "center center",
          display: "block",
          zIndex: 0,
        }}
      />

      {/* Main overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(11,18,32,0.97) 0%, rgba(11,18,32,0.88) 38%, rgba(11,18,32,0.52) 72%, rgba(11,18,32,0.28) 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(11,18,32,0.82) 0%, rgba(11,18,32,0.18) 48%, transparent 75%)",
          zIndex: 1,
        }}
      />

      {/* Mobile-specific darkening layer */}
      <div
        className="hero-mobile-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(11,18,32,0.48) 0%, rgba(11,18,32,0.72) 55%, rgba(11,18,32,0.96) 100%)",
          zIndex: 1,
          pointerEvents: "none",
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
          minHeight: "calc(100svh - 72px)",
          boxSizing: "border-box",
        }}
      >
        {/* Eyebrow */}
        <div
          className="hero-eyebrow"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 30,
          }}
        >
          <div style={blueBar} />

          <span style={eyebrow()}>
            Plumbing & Mechanical Design & Construction
          </span>
        </div>

        {/* Heading */}
        <h1
          className="hero-title"
          style={{
            fontWeight: 800,
            fontSize: "clamp(46px, 5.5vw, 84px)",
            color: C.white,
            lineHeight: 0.98,
            textTransform: "uppercase",
            letterSpacing: "-0.025em",
            margin: "0 0 28px",
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
          className="hero-description"
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 0 40px",
          }}
        >
          Professional plumbing, HVAC and mechanical solutions for residential,
          commercial and construction projects.
        </p>

        {/* CTA */}
        <div
          className="cta-row hero-cta"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            marginBottom: 34,
          }}
        >
          <a
            href="#contact"
            style={{
              ...btnBlue,
              fontSize: 14,
              padding: "16px 36px",
              borderRadius: "9px",
              justifyContent: "center",
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
              justifyContent: "center",
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
          className="hero-trust"
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.04em",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Professional service &nbsp;·&nbsp; Clear communication &nbsp;·&nbsp;
          Quality workmanship
        </p>

        {/* Decorative vertical rule */}
        <div
          className="hero-vertical-rule"
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
        className="hero-corner-accent"
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          width: 80,
          height: 80,
          border: "1px solid rgba(24,162,223,0.4)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Responsive styling */}
      <style jsx>{`
        .hero-mobile-overlay {
          display: none;
        }

        @media (max-width: 900px) {
          .hero-content {
            padding: 100px 36px 64px !important;
          }

          .hero-title {
            font-size: clamp(42px, 8vw, 68px) !important;
          }
        }

        @media (max-width: 640px) {
          .hero-grid {
            min-height: calc(100svh - 64px) !important;
          }

          .hero-grid > img {
            object-position: 63% center !important;
          }

          .hero-mobile-overlay {
            display: block !important;
          }

          .hero-content {
            justify-content: flex-end !important;
            min-height: calc(100svh - 64px) !important;
            padding: 100px 20px 42px !important;
          }

          .hero-eyebrow {
            gap: 9px !important;
            margin-bottom: 20px !important;
          }

          .hero-eyebrow span {
            font-size: 9px !important;
            letter-spacing: 0.12em !important;
            line-height: 1.4 !important;
          }

          .hero-eyebrow > div {
            width: 22px !important;
          }

          .hero-title {
            font-size: clamp(40px, 12vw, 58px) !important;
            line-height: 0.94 !important;
            letter-spacing: -0.035em !important;
            margin-bottom: 22px !important;
            max-width: 100% !important;
          }

          .hero-description {
            font-size: 14px !important;
            line-height: 1.65 !important;
            max-width: 390px !important;
            margin-bottom: 28px !important;
            color: rgba(255, 255, 255, 0.68) !important;
          }

          .hero-cta {
            width: 100%;
            flex-direction: column !important;
            gap: 10px !important;
            margin-bottom: 24px !important;
          }

          .hero-cta a {
            width: 100% !important;
            min-height: 52px !important;
            padding: 15px 20px !important;
            box-sizing: border-box !important;
          }

          .hero-trust {
            font-size: 9px !important;
            max-width: 330px;
            line-height: 1.7 !important;
          }

          .hero-vertical-rule {
            left: 20px !important;
            height: 42px !important;
          }

          .hero-corner-accent {
            width: 54px !important;
            height: 54px !important;
            right: 20px !important;
            bottom: 22px !important;
          }
        }

        @media (max-width: 380px) {
          .hero-content {
            padding-left: 18px !important;
            padding-right: 18px !important;
            padding-bottom: 34px !important;
          }

          .hero-title {
            font-size: 37px !important;
          }

          .hero-description {
            font-size: 13px !important;
          }

          .hero-trust {
            font-size: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
