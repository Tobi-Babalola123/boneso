"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
const C = {
  ink: "#111827",
  inkDeep: "#0B1220",
  blue: "#18A2DF",
  blueDark: "#087CB5",
  blueLight: "#EAF7FD",
  muted: "#94A3B8",
  white: "#FFFFFF",
};

export default function Location() {
  return (
    <section
      id="location"
      style={{
        backgroundColor: C.white,
        padding: "0",
        borderTop: "1px solid rgba(17,24,39,0.08)",
      }}
    >
      <div
        className="location-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          minHeight: 500,
        }}
      >
        {/* Location information */}
        <div
          style={{
            backgroundColor: C.inkDeep,
            padding: "72px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 22,
            }}
          >
            <div
              style={{
                width: 28,
                height: 2,
                backgroundColor: C.blue,
              }}
            />

            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: C.blue,
                letterSpacing: "0.17em",
                textTransform: "uppercase",
              }}
            >
              Our Location
            </span>
          </div>

          <h2
            style={{
              margin: 0,
              fontWeight: 850,
              fontSize: "clamp(34px, 4vw, 58px)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              color: C.white,
              textTransform: "uppercase",
            }}
          >
            Based in
            <br />
            <span style={{ color: C.blue }}>Paso Robles.</span>
          </h2>

          <p
            style={{
              margin: "24px 0 0",
              maxWidth: 390,
              fontSize: 15,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.48)",
            }}
          >
            Boneso provides professional plumbing, HVAC, mechanical and
            construction services from our Paso Robles office.
          </p>

          {/* Address */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              marginTop: 36,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.09)",
              maxWidth: 390,
            }}
          >
            <MapPin
              size={18}
              color={C.blue}
              style={{
                marginTop: 2,
                flexShrink: 0,
              }}
            />

            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: C.white,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Office Address
              </div>

              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.52)",
                }}
              >
                1446 Spring St. Suite 201
                <br />
                Paso Robles, CA 93446
                <br />
                USA
              </p>
            </div>
          </div>

          {/* Directions */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=1446%20Spring%20St%20Suite%20201%20Paso%20Robles%20CA%2093446%20USA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              width: "fit-content",
              marginTop: 30,
              padding: "13px 19px",
              backgroundColor: C.blue,
              color: C.white,
              borderRadius: 7,
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.1em",
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
            Get Directions
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Map */}
        <div
          style={{
            position: "relative",
            minHeight: 500,
            overflow: "hidden",
            backgroundColor: "#E5E7EB",
          }}
        >
          <iframe
            title="Boneso Plumbing & Mechanical location"
            src="https://www.google.com/maps?q=1446%20Spring%20St%20Suite%20201%20Paso%20Robles%20CA%2093446%20USA&output=embed"
            style={{
              width: "100%",
              height: "100%",
              minHeight: 500,
              border: 0,
              display: "block",
              filter: "grayscale(0.15) contrast(1.02)",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Map overlay branding */}
          <div
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              padding: "10px 14px",
              backgroundColor: "rgba(11,18,32,0.92)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 6,
              color: C.white,
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              backdropFilter: "blur(8px)",
            }}
          >
            Boneso · Paso Robles
          </div>
        </div>
      </div>
    </section>
  );
}
