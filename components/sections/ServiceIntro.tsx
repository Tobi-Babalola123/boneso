"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const SERVICES = [
  {
    id: "01",
    title: "Plumbing",
    shortTitle: "Plumbing Systems",
    desc: "Plumbing design, installation and construction support for residential and commercial projects of any scale.",
    img: "/images/plumbing.webp",
    alt: "Professional plumbing installation on a construction site",
    tags: ["Design", "Installation", "Maintenance"],
  },
  {
    id: "02",
    title: "Heating & HVAC",
    shortTitle: "Heating & HVAC",
    desc: "Heating, ventilation and air-conditioning solutions designed around the specific needs of the property.",
    img: "/images/hvac.jpg",
    alt: "Commercial HVAC mechanical installation",
    tags: ["HVAC", "Ventilation", "Climate"],
  },
  {
    id: "03",
    title: "Mechanical",
    shortTitle: "Mechanical Systems",
    desc: "Mechanical systems and project support integrated into the wider construction process from the ground up.",
    img: "/images/mechanical.jpg",
    alt: "Industrial mechanical construction project",
    tags: ["Systems", "Coordination", "Engineering"],
  },
  {
    id: "04",
    title: "Construction",
    shortTitle: "Construction",
    desc: "Practical construction and mechanical coordination from planning and design through to project completion.",
    img: "/images/construction.jpg",
    alt: "Professional commercial construction project",
    tags: ["Planning", "Execution", "Completion"],
  },
];

const C = {
  ink: "#111827",
  inkDeep: "#0B1220",
  blue: "#18A2DF",
  blueDark: "#087CB5",
  muted: "#64748B",
  white: "#FFFFFF",
};

export default function ServiceIntro() {
  const [active, setActive] = useState(0);

  const activeService = SERVICES[active];

  return (
    <section
      id="services"
      style={{
        backgroundColor: C.white,
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      <div
        className="services-container"
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
          boxSizing: "border-box",
        }}
      >
        {/* =====================================
            HEADER
        ====================================== */}
        <div
          className="services-header"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 80,
            alignItems: "end",
            marginBottom: 64,
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
                What We Do
              </span>
            </div>

            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(46px, 6vw, 78px)",
                lineHeight: 0.94,
                letterSpacing: "-0.025em",
                color: C.inkDeep,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Systems that
              <br />
              <span style={{ color: C.blue }}>keep projects</span>
              <br />
              moving.
            </h2>
          </div>

          {/* Intro */}
          <div
            style={{
              borderLeft: "1px solid rgba(15,23,42,0.12)",
              paddingLeft: 30,
              paddingBottom: 4,
            }}
          >
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: C.muted,
                margin: 0,
                maxWidth: 430,
              }}
            >
              From plumbing and HVAC to mechanical systems and construction,
              Boneso delivers practical solutions designed around the
              requirements of every project.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                marginTop: 24,
                fontSize: 11,
                fontWeight: 700,
                color: C.inkDeep,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <Check size={14} color={C.blue} strokeWidth={3} />
              Professional project execution
            </div>
          </div>
        </div>

        {/* =====================================
            FEATURED SERVICE
        ====================================== */}
        <div
          className="featured-service"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            minHeight: 500,
            borderRadius: 9,
            overflow: "hidden",
            backgroundColor: C.inkDeep,
            marginBottom: 24,
          }}
        >
          {/* Image */}
          <div
            className="featured-service-image"
            style={{
              position: "relative",
              minHeight: 500,
              overflow: "hidden",
            }}
          >
            <img
              src={activeService.img}
              alt={activeService.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                transition: "opacity 0.35s ease, transform 0.6s ease",
              }}
            />

            {/* Image overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(11,18,32,0.02), rgba(11,18,32,0.45))",
              }}
            />

            {/* Project number */}
            <div
              style={{
                position: "absolute",
                top: 28,
                left: 28,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: C.white,
                  letterSpacing: "0.14em",
                }}
              >
                {activeService.id}
              </span>

              <span
                style={{
                  width: 34,
                  height: 1,
                  backgroundColor: C.blue,
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              padding: "52px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: C.blue,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Featured capability
            </div>

            <h3
              style={{
                fontSize: "clamp(38px, 4vw, 58px)",
                fontWeight: 800,
                color: C.white,
                textTransform: "uppercase",
                lineHeight: 0.95,
                letterSpacing: "-0.015em",
                margin: "0 0 22px",
              }}
            >
              {activeService.shortTitle}
            </h3>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
                margin: "0 0 28px",
                maxWidth: 430,
              }}
            >
              {activeService.desc}
            </p>

            {/* Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 34,
              }}
            >
              {activeService.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "8px 11px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 5,
                    fontSize: 9,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.58)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                width: "fit-content",
                padding: "14px 20px",
                backgroundColor: C.blue,
                color: C.white,
                textDecoration: "none",
                borderRadius: 7,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.blueDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.blue;
              }}
            >
              Discuss Your Project
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* =====================================
            SERVICE SELECTOR
        ====================================== */}
        <div
          className="service-selector"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 12,
          }}
        >
          {SERVICES.map((service, index) => {
            const isActive = active === index;

            return (
              <button
                key={service.id}
                onClick={() => setActive(index)}
                style={{
                  position: "relative",
                  minHeight: 150,
                  textAlign: "left",
                  padding: "22px 22px 24px",
                  border: isActive
                    ? `1px solid ${C.blue}`
                    : "1px solid rgba(15,23,42,0.10)",
                  borderRadius: 9,
                  backgroundColor: isActive ? "rgba(24,162,223,0.05)" : C.white,
                  cursor: "pointer",
                  transition:
                    "border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.borderColor = "rgba(24,162,223,0.45)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(15,23,42,0.10)";
                  }
                }}
              >
                {/* Number */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 22,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: isActive ? C.blue : C.muted,
                      letterSpacing: "0.14em",
                    }}
                  >
                    {service.id}
                  </span>

                  <ArrowRight
                    size={14}
                    color={isActive ? C.blue : C.muted}
                    style={{
                      transform: isActive ? "translateX(2px)" : "translateX(0)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </div>

                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: C.inkDeep,
                    textTransform: "uppercase",
                    lineHeight: 1,
                    letterSpacing: "0.01em",
                  }}
                >
                  {service.title}
                </div>

                {/* Active indicator */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 22,
                    width: isActive ? 32 : 0,
                    height: 2,
                    backgroundColor: C.blue,
                    transition: "width 0.25s ease",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================
          RESPONSIVE
      ====================================== */}
      <style jsx>{`
        @media (max-width: 900px) {
          .services-header {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          .services-header > div:last-child {
            border-left: none !important;
            border-top: 1px solid rgba(15, 23, 42, 0.12);
            padding-left: 0 !important;
            padding-top: 24px;
          }

          .featured-service {
            grid-template-columns: 1fr !important;
          }

          .featured-service-image {
            min-height: 420px !important;
          }

          .service-selector {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 640px) {
          .services-container {
            padding: 0 20px !important;
          }

          .featured-service {
            margin-bottom: 16px !important;
          }

          .featured-service-image {
            min-height: 300px !important;
          }

          .featured-service > div:last-child {
            padding: 38px 26px !important;
          }

          .service-selector {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          .service-selector button {
            min-height: 120px !important;
          }
        }
      `}</style>
    </section>
  );
}
