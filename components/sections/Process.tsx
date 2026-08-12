"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const C = {
  ink: "#111827",
  inkDeep: "#0B1220",
  blue: "#18A2DF",
  blueDark: "#087CB5",
  muted: "#94A3B8",
  white: "#FFFFFF",
};
const blueBar: React.CSSProperties = {
  width: 28,
  height: 2,
  backgroundColor: C.blue,
  flexShrink: 0,
};

const STEPS = [
  {
    num: "01",
    title: "Tell Us What You Need",
    desc: "Share the scope, timeline, and any specific requirements for your project.",
  },
  {
    num: "02",
    title: "We Assess the Project",
    desc: "Our team reviews the details and determines the right approach for the job.",
  },
  {
    num: "03",
    title: "We Plan the Solution",
    desc: "A clear, practical plan is developed and agreed before any work begins.",
  },
  {
    num: "04",
    title: "We Get to Work",
    desc: "Professional execution with the focus and accountability your project requires.",
  },
];

export default function Process() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: C.blue,
        padding: "clamp(80px, 9vw, 120px) 0",
        overflow: "hidden",
      }}
    >
      <div
        className="inner"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 0.55fr)",
            gap: 60,
            alignItems: "end",
            marginBottom: 70,
          }}
          className="process-header"
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div style={blueBar} />

              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.blue,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                How We Work
              </span>
            </div>

            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(38px, 5vw, 68px)",
                color: C.ink,
                textTransform: "uppercase",
                letterSpacing: "-0.035em",
                lineHeight: 0.98,
                margin: 0,
              }}
            >
              A SIMPLE PROCESS.
              <br />
              <span style={{ color: C.blue }}>A BETTER EXPERIENCE.</span>
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: 15,
                color: C.ink,
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 360,
              }}
            >
              From the first conversation to final handover, we keep the process
              clear, practical and focused on getting the job done properly.
            </p>
          </div>
        </div>

        {/* Process */}
        <div
          className="process-list"
          style={{
            position: "relative",
          }}
        >
          {/* Connecting line */}
          <div
            className="process-line"
            style={{
              position: "absolute",
              top: 31,
              left: 31,
              right: 31,
              height: 1,
              backgroundColor: "rgba(17,24,39,0.12)",
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))`,
              position: "relative",
              zIndex: 1,
            }}
            className="process-grid"
          >
            {STEPS.map((step, i) => {
              const isHovered = hovered === i;

              return (
                <article
                  key={step.num}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    padding: "0 22px",
                    cursor: "default",
                  }}
                >
                  {/* Number */}
                  <div
                    style={{
                      width: 62,
                      height: 62,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        isHovered || i === 0 ? C.blueDark : C.white,
                      border:
                        isHovered || i === 0
                          ? `1px solid ${C.blue}`
                          : "1px solid rgba(17,24,39,0.12)",
                      color: isHovered || i === 0 ? C.white : C.ink,
                      fontSize: 14,
                      fontWeight: 800,
                      transition:
                        "background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease",
                      transform: isHovered
                        ? "translateY(-4px)"
                        : "translateY(0)",
                      boxShadow:
                        isHovered || i === 0
                          ? "0 10px 25px rgba(24,162,223,0.18)"
                          : "none",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Step content */}
                  <div
                    style={{
                      paddingTop: 28,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 13,
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 2,
                          backgroundColor: C.blue,
                          opacity: isHovered || i === 0 ? 1 : 0.45,
                          transition: "opacity 0.25s ease",
                        }}
                      />

                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: C.blue,
                          letterSpacing: "0.13em",
                          textTransform: "uppercase",
                        }}
                      >
                        Step {i + 1}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontWeight: 800,
                        fontSize: 20,
                        color: C.ink,
                        textTransform: "uppercase",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.08,
                        margin: "0 0 12px",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 13,
                        color: C.ink,
                        lineHeight: 1.7,
                        margin: 0,
                        maxWidth: 220,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom reassurance */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 28,
            borderTop: "1px solid rgba(17,24,39,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
          }}
          className="process-footer"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: C.ink,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: C.blue,
                color: C.blue,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Check size={13} strokeWidth={3} />
            </div>
            Clear communication throughout
          </div>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: C.ink,
              borderRadius: "9px",
              borderColor: C.ink,
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = C.blueDark;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = C.white;
            }}
          >
            Start Your Project
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 900px) {
          .process-header {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            margin-bottom: 52px !important;
          }

          .process-line {
            top: 31px !important;
            bottom: 31px !important;
            left: 31px !important;
            right: auto !important;
            width: 1px !important;
            height: auto !important;
          }

          .process-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 42px !important;
          }

          .process-grid article {
            display: grid !important;
            grid-template-columns: 62px 1fr !important;
            gap: 24px !important;
            padding: 0 !important;
          }

          .process-grid article > div:last-child {
            padding-top: 4px !important;
          }

          .process-grid article p {
            max-width: 520px !important;
          }

          .process-footer {
            margin-top: 50px !important;
          }
        }

        @media (max-width: 640px) {
          .process-footer {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
