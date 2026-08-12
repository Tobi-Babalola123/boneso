"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    title: "Commercial Plumbing Installation",
    category: "Plumbing",
    img: "/images/project1.webp",
    alt: "Commercial plumbing installation project",
  },
  {
    title: "Mechanical Systems",
    category: "Mechanical",
    img: "/images/project2.webp",
    alt: "Mechanical systems installation project",
  },
  {
    title: "HVAC Installation",
    category: "HVAC",
    img: "/images/project3.webp",
    alt: "HVAC installation project",
  },
  {
    title: "HVAC",
    category: "HVAC",
    img: "/images/project7.webp",
    alt: "plumbing project",
  },
  {
    title: "Construction Support",
    category: "Construction",
    img: "/images/project4.webp",
    alt: "Construction and mechanical project support",
  },
];

const C = {
  ink: "#111827",
  inkDeep: "#0B1220",
  blue: "#18A2DF",
  blueDark: "#087CB5",
  blueLight: "#EAF7FD",
  muted: "#94A3B8",
  white: "#FFFFFF",
};

const eyebrow = {
  fontSize: 11,
  fontWeight: 700,
  color: C.blue,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
};

const blueBar = {
  width: 28,
  height: 2,
  backgroundColor: C.blue,
  flexShrink: 0,
};

const btnGhost = {
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  backgroundColor: "transparent",
  color: C.white,
  padding: "14px 32px",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  border: "1px solid rgba(255,255,255,0.22)",
  borderRadius: 9,
  cursor: "pointer",
  transition:
    "border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease",
};

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        backgroundColor: C.inkDeep,
        padding: "clamp(80px, 8vw, 120px) 0",
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
          className="projects-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 40,
            marginBottom: 56,
          }}
        >
          <div style={{ maxWidth: 650 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div style={blueBar} />

              <span style={eyebrow}>Our Work</span>
            </div>

            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(38px, 5vw, 68px)",
                color: C.white,
                textTransform: "uppercase",
                letterSpacing: "-0.035em",
                lineHeight: 0.98,
                margin: 0,
              }}
            >
              WORK THAT
              <br />
              <span style={{ color: C.blue }}>SPEAKS FOR ITSELF.</span>
            </h2>
          </div>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.48)",
              lineHeight: 1.75,
              maxWidth: 330,
              margin: 0,
            }}
          >
            A selection of plumbing, HVAC, mechanical and construction work
            delivered with practical expertise and disciplined execution.
          </p>
        </div>

        {/* Project Showcase */}
        <div
          className="projects-showcase"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 0.65fr)",
            gap: 16,
          }}
        >
          {/* Featured Project */}
          <article
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: 560,
              borderRadius: 9,
              backgroundColor: "#111827",
              cursor: "pointer",
            }}
          >
            <Image
              src={PROJECTS[0].img}
              alt={PROJECTS[0].alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 65vw"
              style={{
                objectFit: "cover",
                transition: "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
                transform: hovered === 0 ? "scale(1.045)" : "scale(1)",
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(11,18,32,0.92) 0%, rgba(11,18,32,0.45) 38%, rgba(11,18,32,0.05) 75%, rgba(11,18,32,0) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Featured label */}
            <div
              style={{
                position: "absolute",
                top: 24,
                left: 24,
                padding: "8px 12px",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 999,
                backgroundColor: "rgba(11,18,32,0.55)",
                color: C.white,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
              }}
            >
              Featured Project
            </div>

            {/* Project information */}
            <div
              style={{
                position: "absolute",
                left: 32,
                right: 32,
                bottom: 30,
              }}
            >
              <div
                style={{
                  color: C.blue,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 9,
                }}
              >
                {PROJECTS[0].category}
              </div>

              <h3
                style={{
                  color: C.white,
                  fontSize: "clamp(24px, 3vw, 38px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  margin: 0,
                  maxWidth: 520,
                }}
              >
                {PROJECTS[0].title}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 18,
                  color: hovered === 0 ? C.blue : C.white,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "color 0.25s ease",
                }}
              >
                View Project
                <ArrowUpRight size={14} />
              </div>
            </div>
          </article>

          {/* Supporting Projects */}
          <div
            className="projects-supporting"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {PROJECTS.slice(1).map((project, index) => {
              const projectIndex = index + 1;

              return (
                <article
                  key={projectIndex}
                  onMouseEnter={() => setHovered(projectIndex)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 272,
                    borderRadius: 9,
                    backgroundColor: "#111827",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={project.img}
                    alt={project.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 900px) 50vw, 32vw"
                    style={{
                      objectFit: "cover",
                      transition:
                        "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                      transform:
                        hovered === projectIndex ? "scale(1.055)" : "scale(1)",
                    }}
                  />

                  {/* Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(11,18,32,0.88) 0%, rgba(11,18,32,0.25) 55%, rgba(11,18,32,0.02) 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Content */}
                  <div
                    style={{
                      position: "absolute",
                      left: 20,
                      right: 20,
                      bottom: 20,
                    }}
                  >
                    <div
                      style={{
                        color: C.blue,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.13em",
                        textTransform: "uppercase",
                        marginBottom: 7,
                      }}
                    >
                      {project.category}
                    </div>

                    <h3
                      style={{
                        color: C.white,
                        fontSize: 18,
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: "-0.01em",
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 12,
                        color:
                          hovered === projectIndex
                            ? C.blue
                            : "rgba(255,255,255,0.75)",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        transition: "color 0.25s ease",
                      }}
                    >
                      View
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="#contact"
            style={btnGhost}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.blue;
              e.currentTarget.style.backgroundColor = "rgba(24,162,223,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Discuss Your Project
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Responsive styling */}
      <style jsx>{`
        @media (max-width: 900px) {
          .projects-showcase {
            grid-template-columns: 1fr !important;
          }

          .projects-supporting {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .projects-showcase > article {
            min-height: 500px !important;
          }
        }

        @media (max-width: 640px) {
          .projects-header {
            align-items: flex-start !important;
            flex-direction: column !important;
            margin-bottom: 40px !important;
          }

          .projects-header p {
            max-width: 100% !important;
          }

          .projects-showcase {
            gap: 12px !important;
          }

          .projects-supporting {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .projects-showcase > article {
            min-height: 420px !important;
          }

          .projects-supporting article {
            min-height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
