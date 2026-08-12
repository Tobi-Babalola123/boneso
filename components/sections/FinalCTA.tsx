"use client";

import { ArrowRight, Phone, CheckCircle, ArrowUpRight } from "lucide-react";
const C = {
  ink: "#111827",
  inkDeep: "#0B1220",
  blue: "#18A2DF",
  blueDark: "#087CB5",
  muted: "#64748B",
  white: "#FFFFFF",
};
export default function FinalCTA() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: C.inkDeep,
        minHeight: 560,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image */}
      <img
        src="/images/cta.jpg"
        alt="Boneso construction and mechanical project environment"
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />

      {/* Dark brand overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(7,18,31,0.97) 0%, rgba(7,18,31,0.90) 42%, rgba(7,18,31,0.72) 72%, rgba(7,18,31,0.82) 100%)",
        }}
      />

      {/* Blue atmospheric glow */}
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(24,162,223,0.10)",
          filter: "blur(80px)",
          top: -180,
          right: -100,
          pointerEvents: "none",
        }}
      />

      <div
        className="inner"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          padding: "100px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 780,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 34,
                height: 2,
                backgroundColor: C.blue,
                flexShrink: 0,
              }}
            />

            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.blue,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Start Your Project
            </span>

            <div
              style={{
                width: 34,
                height: 2,
                backgroundColor: C.blue,
                flexShrink: 0,
              }}
            />
          </div>

          {/* Heading */}
          <h2
            style={{
              margin: 0,
              fontWeight: 800,
              fontSize: "clamp(42px, 6vw, 82px)",
              color: C.white,
              textTransform: "uppercase",
              letterSpacing: "-0.035em",
              lineHeight: 0.98,
            }}
          >
            LET'S BUILD
            <br />
            <span style={{ color: C.blue }}>WHAT WORKS.</span>
          </h2>

          {/* Supporting copy */}
          <p
            style={{
              margin: "28px auto 0",
              maxWidth: 560,
              fontSize: 16,
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.75,
            }}
          >
            From plumbing and HVAC to mechanical and construction work, Boneso
            delivers practical solutions built around your project, your
            requirements and your timeline.
          </p>

          {/* CTA buttons */}
          <div
            className="final-cta-row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 14,
              marginTop: 42,
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:admin@boneso-pm.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                minHeight: 54,
                padding: "0 30px",
                backgroundColor: C.blue,
                color: C.white,
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                border: "1px solid transparent",
                borderRadius: 8,
                transition:
                  "background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.blueDark;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(24,162,223,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.blue;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Request a Quote
              <ArrowRight size={16} />
            </a>

            <a
              href="mailto:admin@boneso-pm.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                minHeight: 54,
                padding: "0 30px",
                backgroundColor: "rgba(255,255,255,0.04)",
                color: C.white,
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.20)",
                borderRadius: 8,
                transition:
                  "background-color 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.09)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contact Boneso
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom information strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 28,
            flexWrap: "wrap",
            marginTop: 72,
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {[
            "Professional Workmanship",
            "Clear Communication",
            "Reliable Execution",
            "Safety First",
          ].map((item, index) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(255,255,255,0.42)",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: C.blue,
                  opacity: 0.8,
                }}
              />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corner lines */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 32,
          width: 72,
          height: 72,
          borderTop: "1px solid rgba(24,162,223,0.45)",
          borderLeft: "1px solid rgba(24,162,223,0.45)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 32,
          right: 32,
          width: 72,
          height: 72,
          borderBottom: "1px solid rgba(24,162,223,0.30)",
          borderRight: "1px solid rgba(24,162,223,0.30)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
