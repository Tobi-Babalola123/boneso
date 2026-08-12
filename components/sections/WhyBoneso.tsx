"use client";

import { ArrowRight, Check } from "lucide-react";

const C = {
  ink: "#111827",
  inkDeep: "#0B1220",
  blue: "#18A2DF",
  blueDark: "#087CB5",
  muted: "#94A3B8",
  white: "#FFFFFF",
};

const WHY_POINTS = [
  {
    id: "01",
    title: "Quality Workmanship",
    desc: "Attention to detail from installation through completion.",
  },
  {
    id: "02",
    title: "Clear Communication",
    desc: "Straightforward communication throughout the project.",
  },
  {
    id: "03",
    title: "Reliable Execution",
    desc: "Planned properly. Built properly. Delivered properly.",
  },
  {
    id: "04",
    title: "Tailored Solutions",
    desc: "Every system designed around the actual project requirements.",
  },
  {
    id: "05",
    title: "Safety First",
    desc: "Professional site practices followed on every project.",
  },
  {
    id: "06",
    title: "Complete Support",
    desc: "From initial consultation through final handover.",
  },
];

export default function WhyBoneso() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: C.inkDeep,
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      <div
        className="inner why-boneso-container"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* =========================
            TOP CONTENT
        ========================== */}
        <div
          className="why-boneso-top"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 420px)",
            gap: 80,
            alignItems: "end",
            marginBottom: 72,
          }}
        >
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 30,
                  height: 2,
                  backgroundColor: C.blue,
                  display: "block",
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
                Why Boneso
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(46px, 6vw, 82px)",
                lineHeight: 0.94,
                letterSpacing: "-0.025em",
                color: C.white,
                textTransform: "uppercase",
                margin: 0,
                maxWidth: 800,
              }}
            >
              Engineered for
              <br />
              <span style={{ color: C.blue }}>real-world</span>
              <br />
              performance.
            </h2>
          </div>

          {/* Intro */}
          <div
            style={{
              borderLeft: "1px solid rgba(255,255,255,0.12)",
              paddingLeft: 28,
              paddingBottom: 4,
            }}
          >
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.58)",
                margin: 0,
              }}
            >
              Boneso combines practical engineering knowledge with disciplined
              project execution to deliver plumbing, HVAC and mechanical systems
              that work the way they should — reliably, safely and efficiently.
            </p>
          </div>
        </div>

        {/* =========================
            IMAGE + POINTS
        ========================== */}
        <div
          className="why-boneso-main"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(320px, 0.85fr) minmax(0, 1.15fr)",
            gap: 56,
            alignItems: "stretch",
          }}
        >
          {/* IMAGE */}
          <div
            className="why-boneso-image"
            style={{
              position: "relative",
              minHeight: 650,
              borderRadius: 9,
              overflow: "hidden",
              backgroundColor: "#111827",
            }}
          >
            <img
              src="/images/engineer.jpg"
              alt="Professional mechanical installation work on a construction project"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />

            {/* Image overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(11,18,32,0.82) 0%, rgba(11,18,32,0.15) 55%, rgba(11,18,32,0.02) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Blue corner detail */}
            <div
              style={{
                position: "absolute",
                top: 24,
                left: 24,
                width: 54,
                height: 54,
                borderTop: `2px solid ${C.blue}`,
                borderLeft: `2px solid ${C.blue}`,
              }}
            />

            {/* Image label */}
            <div
              style={{
                position: "absolute",
                left: 30,
                right: 30,
                bottom: 30,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: C.blue,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: 9,
                }}
              >
                Built for the job
              </div>

              <div
                style={{
                  fontSize: 27,
                  fontWeight: 700,
                  lineHeight: 1,
                  color: C.white,
                  textTransform: "uppercase",
                }}
              >
                Practical expertise.
                <br />
                Professional execution.
              </div>
            </div>
          </div>

          {/* POINTS */}
          <div
            className="why-boneso-points"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              borderTop: "1px solid rgba(255,255,255,0.10)",
              borderLeft: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {WHY_POINTS.map((point) => (
              <div
                key={point.id}
                className="why-boneso-point"
                style={{
                  padding: "30px 28px 32px",
                  borderRight: "1px solid rgba(255,255,255,0.10)",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                  transition:
                    "background-color 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(24,162,223,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {/* Number */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 24,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.blue,
                      letterSpacing: "0.12em",
                    }}
                  >
                    {point.id}
                  </span>

                  <span
                    style={{
                      width: 24,
                      height: 24,
                      border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Check size={12} color={C.blue} strokeWidth={2.5} />
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: C.white,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    lineHeight: 1.05,
                    margin: "0 0 12px",
                  }}
                >
                  {point.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.48)",
                    margin: 0,
                    maxWidth: 260,
                  }}
                >
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <div
          className="why-boneso-cta"
          style={{
            marginTop: 56,
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.blue,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                margin: "0 0 8px",
              }}
            >
              Ready to get started?
            </p>

            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.48)",
                margin: 0,
              }}
            >
              Let's discuss your next project.
            </p>
          </div>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "15px 24px",
              backgroundColor: C.blue,
              color: C.white,
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              borderRadius: 9,
              transition: "background-color 0.2s ease, transform 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.blueDark;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = C.blue;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Talk to Our Team
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* =========================
          RESPONSIVE STYLES
      ========================== */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .why-boneso-top {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .why-boneso-top > div:last-child {
            max-width: 600px;
          }

          .why-boneso-main {
            grid-template-columns: 1fr !important;
          }

          .why-boneso-image {
            min-height: 520px !important;
            height: 520px;
          }
        }

        @media (max-width: 700px) {
          .why-boneso-container {
            padding: 0 20px !important;
          }

          .why-boneso-top {
            margin-bottom: 48px !important;
          }

          .why-boneso-top > div:last-child {
            border-left: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            padding-left: 0 !important;
            padding-top: 24px;
          }

          .why-boneso-main {
            gap: 32px !important;
          }

          .why-boneso-image {
            min-height: 430px !important;
            height: 430px;
          }

          .why-boneso-points {
            grid-template-columns: 1fr !important;
          }

          .why-boneso-point {
            padding: 26px 22px 28px !important;
          }

          .why-boneso-cta {
            align-items: flex-start !important;
            flex-direction: column !important;
          }

          .why-boneso-cta a {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .why-boneso-image {
            min-height: 380px !important;
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
}
