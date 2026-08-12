"use client";

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const C = {
  ink: "#111827",
  inkDeep: "#0B1220",
  blue: "#18A2DF",
  blueDark: "#087CB5",
  muted: "#64748B",
  white: "#FFFFFF",
};

const NAV_LINKS = ["Services", "Projects", "About", "Contact"];
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
export default function Footer() {
  const footerLinkStyle: React.CSSProperties = {
    fontSize: 13,
    color: "rgba(255,255,255,0.48)",
    textDecoration: "none",
    transition: "color 0.2s ease",
  };

  return (
    <footer
      style={{
        backgroundColor: C.inkDeep,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Main footer */}
      <div
        className="inner footer-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "76px 40px 64px",
          display: "grid",
          gridTemplateColumns: "1.5fr 0.8fr 0.9fr 1.1fr",
          gap: 64,
        }}
      >
        {/* Brand */}
        <div className="footer-brand">
          <a
            href="#home"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              marginBottom: 24,
            }}
          >
            <Image
              src="/images/logo.png"
              className="brightness-0 invert"
              alt="Boneso Plumbing & Mechanical"
              width={180}
              height={60}
              style={{
                width: 180,
                height: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </a>

          <p
            style={{
              margin: 0,
              maxWidth: 320,
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
            }}
          >
            Practical plumbing, HVAC, mechanical and construction solutions
            delivered with professionalism, precision and purpose.
          </p>

          {/* Socials */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 28,
            }}
          >
            <a
              href="https://www.facebook.com/BonesoPM/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: C.white,
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.blue;
                e.currentTarget.style.color = C.blue;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                e.currentTarget.style.color = C.white;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://www.instagram.com/boneso_pm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: C.white,
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.blue;
                e.currentTarget.style.color = C.blue;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                e.currentTarget.style.color = C.white;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              margin: "0 0 22px",
              fontSize: 10,
              fontWeight: 800,
              color: C.blue,
              letterSpacing: "0.17em",
              textTransform: "uppercase",
            }}
          >
            Navigation
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {["Home", ...NAV_LINKS].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={footerLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.white;
                  e.currentTarget.style.transform = "translateX(3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.48)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              margin: "0 0 22px",
              fontSize: 10,
              fontWeight: 800,
              color: C.blue,
              letterSpacing: "0.17em",
              textTransform: "uppercase",
            }}
          >
            Services
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href="#services"
                style={footerLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.white;
                  e.currentTarget.style.transform = "translateX(3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.48)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              margin: "0 0 22px",
              fontSize: 10,
              fontWeight: 800,
              color: C.blue,
              letterSpacing: "0.17em",
              textTransform: "uppercase",
            }}
          >
            Get In Touch
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {/* Email */}
            <a
              href="mailto:admin@boneso-pm.com"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                color: "rgba(255,255,255,0.52)",
                textDecoration: "none",
                fontSize: 13,
                lineHeight: 1.5,
                overflowWrap: "anywhere",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.52)";
              }}
            >
              <Mail
                size={15}
                color={C.blue}
                style={{
                  marginTop: 1,
                  flexShrink: 0,
                }}
              />

              <span>admin@boneso-pm.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+18052274450"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                color: "rgba(255,255,255,0.52)",
                textDecoration: "none",
                fontSize: 13,
                lineHeight: 1.5,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.52)";
              }}
            >
              <Phone
                size={15}
                color={C.blue}
                style={{
                  marginTop: 1,
                  flexShrink: 0,
                }}
              />

              <span>(805) 227-4450</span>
            </a>

            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=1446%20Spring%20St%20Suite%20201%20Paso%20Robles%20CA%2093446%20USA"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                color: "rgba(255,255,255,0.52)",
                textDecoration: "none",
                fontSize: 13,
                lineHeight: 1.6,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.52)";
              }}
            >
              <MapPin
                size={15}
                color={C.blue}
                style={{
                  marginTop: 2,
                  flexShrink: 0,
                }}
              />

              <span>
                1446 Spring St. Suite 201
                <br />
                Paso Robles, CA 93446
                <br />
                USA
              </span>
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              marginTop: 26,
              padding: "12px 18px",
              backgroundColor: C.blue,
              color: C.white,
              borderRadius: 7,
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              transition: "background-color 0.2s ease, transform 0.2s ease",
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
            Start a Project
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          className="inner footer-bottom"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "22px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 11,
              color: "rgba(255,255,255,0.28)",
            }}
          >
            © 2026 Boneso Plumbing & Mechanical. All rights reserved.
          </p>

          <div
            className="footer-values"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 10,
              color: "rgba(255,255,255,0.28)",
              letterSpacing: "0.04em",
            }}
          >
            <span>Professional workmanship</span>
            <span style={{ color: C.blue }}>·</span>
            <span>Clear communication</span>
            <span style={{ color: C.blue }}>·</span>
            <span>Reliable execution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
