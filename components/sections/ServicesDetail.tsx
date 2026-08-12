"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const C = {
  ink: "#111827",
  inkDeep: "#0B1220",
  blue: "#18A2DF",
  blueDark: "#087CB5",
  muted: "#94A3B8",
  white: "#FFFFFF",
};

const SERVICES = [
  {
    id: "01",
    title: "Plumbing",
    desc: "Plumbing design, installation and construction support for residential and commercial projects of any scale.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&h=480&fit=crop&auto=format",
    alt: "Underground plumbing pipe installation on a construction site",
  },
  {
    id: "02",
    title: "Heating & HVAC",
    desc: "Heating, ventilation and air-conditioning solutions designed around the specific needs of the property.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=640&h=480&fit=crop&auto=format",
    alt: "Commercial HVAC mechanical unit being craned into position",
  },
  {
    id: "03",
    title: "Mechanical",
    desc: "Mechanical systems and project support integrated into the wider construction process from the ground up.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=640&h=480&fit=crop&auto=format",
    alt: "Industrial mechanical construction site with workers",
  },
  {
    id: "04",
    title: "Construction",
    desc: "Practical construction and mechanical coordination from planning and design through to project completion.",
    img: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=640&h=480&fit=crop&auto=format",
    alt: "Commercial construction coordination and site management",
  },
];

export default function ServicesDetail() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: C.white,
        padding: "clamp(80px, 10vw, 140px) 0",
        position: "relative",
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
            gridTemplateColumns: "1fr auto",
            alignItems: "end",
            gap: 40,
            marginBottom: 72,
          }}
        >
          <div style={{ maxWidth: 700 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 30,
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
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Our Services
              </span>
            </div>

            <h2
              style={{
                margin: 0,
                fontWeight: 800,
                fontSize: "clamp(38px, 5vw, 68px)",
                color: C.ink,
                textTransform: "uppercase",
                letterSpacing: "-0.035em",
                lineHeight: 0.98,
              }}
            >
              SOLUTIONS BUILT
              <br />
              <span style={{ color: C.blue }}>AROUND THE JOB.</span>
            </h2>
          </div>

          <div
            style={{
              maxWidth: 360,
              paddingBottom: 4,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 15,
                color: C.muted,
                lineHeight: 1.75,
              }}
            >
              From plumbing and HVAC to mechanical construction support, Boneso
              delivers practical solutions designed around the requirements of
              each project.
            </p>
          </div>
        </div>

        {/* Services */}
        <div
          style={{
            borderTop: "1px solid rgba(17,24,39,0.12)",
          }}
        >
          {SERVICES.map((s, i) => {
            const isHovered = hovered === i;

            return (
              <div
                key={s.id}
                className="services-detail-row"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "80px minmax(240px, 1fr) minmax(280px, 1.1fr) 52px",
                  alignItems: "center",
                  gap: 32,
                  minHeight: 150,
                  padding: "28px 20px",
                  margin: "0 -20px",
                  borderBottom: "1px solid rgba(17,24,39,0.1)",
                  backgroundColor: isHovered ? C.blue : "transparent",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                  transform: isHovered ? "translateX(6px)" : "translateX(0)",
                }}
              >
                {/* Number */}
                <div
                  style={{
                    alignSelf: "start",
                    paddingTop: 6,
                    fontSize: 12,
                    fontWeight: 800,
                    color: isHovered ? C.blue : C.muted,
                    letterSpacing: "0.12em",
                    transition: "color 0.25s ease",
                  }}
                >
                  {s.id}
                </div>

                {/* Service title */}
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontWeight: 800,
                      fontSize: "clamp(25px, 3vw, 42px)",
                      color: C.ink,
                      textTransform: "uppercase",
                      letterSpacing: "-0.025em",
                      lineHeight: 1,
                    }}
                  >
                    {s.title}
                  </h3>

                  <div
                    style={{
                      width: isHovered ? 48 : 24,
                      height: 2,
                      marginTop: 18,
                      backgroundColor: C.blue,
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    // color: C.muted,
                    lineHeight: 1.75,
                    color: isHovered ? C.ink : C.muted,
                    maxWidth: 460,
                  }}
                >
                  {s.desc}
                </p>

                {/* Arrow */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: `1px solid ${
                      isHovered ? C.white : "rgba(17,24,39,0.15)"
                    }`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isHovered ? C.white : C.ink,
                    transform: isHovered ? "rotate(0deg)" : "rotate(-45deg)",
                    transition:
                      "transform 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  <ArrowUpRight size={17} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
            marginTop: 48,
            padding: "28px 0 0",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: C.muted,
              lineHeight: 1.6,
            }}
          >
            Have a project that requires a tailored solution?
          </p>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 24px",
              backgroundColor: C.ink,
              color: C.white,
              borderRadius: "9px",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "background-color 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.blue;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = C.ink;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Discuss Your Project
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 900px) {
          .services-detail-row {
            grid-template-columns: 55px 1fr 44px !important;
            gap: 20px !important;
            min-height: 130px !important;
          }

          .services-detail-row p {
            grid-column: 2 / 3;
            grid-row: 2;
          }

          .services-detail-row > div:last-child {
            grid-column: 3;
            grid-row: 1 / span 2;
          }
        }

        @media (max-width: 700px) {
          .inner {
            padding: 0 20px !important;
          }

          .inner > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            margin-bottom: 52px !important;
          }

          .services-detail-row {
            grid-template-columns: 42px 1fr !important;
            gap: 14px !important;
            padding: 26px 14px !important;
            margin: 0 -14px !important;
          }

          .services-detail-row p {
            grid-column: 2 !important;
            grid-row: auto !important;
          }

          .services-detail-row > div:last-child {
            display: none !important;
          }

          .services-detail-row h3 {
            font-size: 27px !important;
          }
        }

        @media (max-width: 480px) {
          .services-detail-row {
            grid-template-columns: 32px 1fr !important;
          }

          .services-detail-row h3 {
            font-size: 24px !important;
          }

          .services-detail-row p {
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
}
