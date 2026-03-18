"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchEngine from "../container/searchEngine";

// ── Popular destinations data ──
const popularRoutes = [
  {
    from: "New York",
    fromCode: "JFK",
    to: "London",
    toCode: "LHR",
    price: 349,
    duration: "7h 10m",
    tag: "Most Popular",
  },
  {
    from: "Los Angeles",
    fromCode: "LAX",
    to: "Tokyo",
    toCode: "NRT",
    price: 589,
    duration: "11h 30m",
    tag: "Best Value",
  },
  {
    from: "Chicago",
    fromCode: "ORD",
    to: "Paris",
    toCode: "CDG",
    price: 420,
    duration: "8h 55m",
    tag: "Hot Deal",
  },
  {
    from: "Miami",
    fromCode: "MIA",
    to: "Cancun",
    toCode: "CUN",
    price: 189,
    duration: "1h 40m",
    tag: "Weekend Getaway",
  },
  {
    from: "San Francisco",
    fromCode: "SFO",
    to: "Dubai",
    toCode: "DXB",
    price: 710,
    duration: "16h 20m",
    tag: "Business Fav",
  },
  {
    from: "Dallas",
    fromCode: "DFW",
    to: "Mexico City",
    toCode: "MEX",
    price: 210,
    duration: "2h 50m",
    tag: "Top Pick",
  },
];

const airlines = [
  { name: "Delta", code: "DL", color: "#003087" },
  { name: "United", code: "UA", color: "#002244" },
  { name: "American", code: "AA", color: "#0078D2" },
  { name: "Emirates", code: "EK", color: "#C60C30" },
  { name: "British Airways", code: "BA", color: "#075AAA" },
  { name: "Air France", code: "AF", color: "#002157" },
];

const whyUs = [
  {
    icon: "🏷️",
    title: "Best Price Guarantee",
    desc: "We match any lower price you find within 24 hours of booking.",
  },
  {
    icon: "🔄",
    title: "Free Cancellation",
    desc: "Plans change. Cancel within 24 hours at no charge on most fares.",
  },
  {
    icon: "📞",
    title: "24/7 Expert Support",
    desc: "Real travel specialists available around the clock for assistance.",
  },
  {
    icon: "✈️",
    title: "500+ Airlines",
    desc: "Access to over 500 global carriers and 1M+ routes worldwide.",
  },
];

const faqs = [
  {
    q: "How early should I book for the best price?",
    a: "For domestic flights, 1–3 months in advance. For international, 2–6 months ahead typically yields the best fares.",
  },
  {
    q: "Can I change my flight after booking?",
    a: "Yes. Changes depend on your fare type. Flexible fares allow free changes; standard fares may incur a fee.",
  },
  {
    q: "What is the baggage policy?",
    a: "Baggage allowance varies by airline and fare class. Details are shown at checkout before you confirm.",
  },
  {
    q: "Are the prices shown inclusive of taxes?",
    a: "All prices shown include base taxes. Final price with all applicable fees is shown at checkout. Prices marked * are subject to availability.",
  },
];

const FlightsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "#f4f7fc", minHeight: "100vh" }}>
      {/* ══════════════════════════════════
          HERO — Search Section
      ══════════════════════════════════ */}
      <section
        style={{
          background:
            "linear-gradient(160deg, #061629 0%, #0b2d58 50%, #0f3d7a 100%)",
          paddingTop: "60px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative plane trails */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 500"
            preserveAspectRatio="none"
            style={{ opacity: 0.06 }}
          >
            <path
              d="M0,200 Q360,80 720,200 T1440,200"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="8 6"
            />
            <path
              d="M0,300 Q480,160 960,300 T1440,260"
              stroke="white"
              strokeWidth="1"
              fill="none"
              strokeDasharray="6 8"
            />
            <path
              d="M200,0 Q500,250 800,100 T1440,350"
              stroke="white"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 10"
            />
          </svg>
        </div>

        <div className="container" style={{ position: "relative" }}>
          {/* Breadcrumb */}
          <div
            style={{
              marginBottom: "28px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
              ›
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.85)",
                fontWeight: 500,
              }}
            >
              Flights
            </span>
          </div>

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "100px",
                padding: "6px 18px",
                fontSize: "12px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                marginBottom: "20px",
              }}
            >
              ✈ 500+ Airlines · 1M+ Routes
            </div>
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "14px",
                letterSpacing: "-0.02em",
              }}
            >
              Find Your Perfect Flight
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.6)",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Search hundreds of airlines for the lowest fares — one way, round
              trip, or multi-city.
            </p>
          </div>

          {/* Search Engine */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "8px",
              backdropFilter: "blur(12px)",
            }}
          >
            <SearchEngine />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          AIRLINE LOGOS STRIP
      ══════════════════════════════════ */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8f0f7",
          padding: "20px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              flexWrap: "wrap" as const,
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#9aacbe",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                whiteSpace: "nowrap" as const,
              }}
            >
              We partner with
            </span>
            {airlines.map((a) => (
              <div
                key={a.code}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  border: "1px solid #e8f0f7",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: a.color,
                  letterSpacing: "0.02em",
                }}
              >
                {a.code}{" "}
                <span
                  style={{
                    fontWeight: 400,
                    color: "#9aacbe",
                    fontSize: "12px",
                  }}
                >
                  {a.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          POPULAR ROUTES
      ══════════════════════════════════ */}
      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <div style={{ marginBottom: "36px" }}>
            <div style={sectionBadge}>🔥 Top Routes</div>
            <h2 style={sectionTitle}>Popular Flight Routes</h2>
            <p style={sectionSub}>
              Hand-picked deals on the world&apos;s most travelled routes. Fares
              from as shown.*
            </p>
          </div>

          <div className="row g-3">
            {popularRoutes.map((route, i) => (
              <div className="col-12 col-md-6 col-xl-4" key={i}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #e4edf8",
                    borderRadius: "16px",
                    padding: "22px 24px",
                    height: "100%",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "pointer",
                    position: "relative" as const,
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(-3px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 12px 32px rgba(11,31,58,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "none";
                  }}
                >
                  {/* Top accent */}
                  <div
                    style={{
                      height: "3px",
                      background: "linear-gradient(90deg, #2a6dd9, #0b97bf)",
                      borderRadius: "3px",
                      marginBottom: "16px",
                    }}
                  />

                  {/* Tag */}
                  <div
                    style={{
                      position: "absolute" as const,
                      top: "18px",
                      right: "18px",
                      background: "#fff8ed",
                      border: "1px solid #f5d9a0",
                      borderRadius: "100px",
                      padding: "3px 10px",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#c47f00",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {route.tag}
                  </div>

                  {/* Route */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "14px",
                    }}
                  >
                    <div style={{ textAlign: "center" as const }}>
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: 800,
                          color: "#0b1f3a",
                        }}
                      >
                        {route.fromCode}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#9aacbe",
                          fontWeight: 500,
                        }}
                      >
                        {route.from}
                      </div>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column" as const,
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <div style={{ fontSize: "11px", color: "#9aacbe" }}>
                        {route.duration}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          gap: "4px",
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            height: "1px",
                            background: "#d6e0ef",
                          }}
                        />
                        <span style={{ color: "#2a6dd9", fontSize: "14px" }}>
                          ✈
                        </span>
                        <div
                          style={{
                            flex: 1,
                            height: "1px",
                            background: "#d6e0ef",
                          }}
                        />
                      </div>
                      <div style={{ fontSize: "10px", color: "#b0c0d4" }}>
                        Direct
                      </div>
                    </div>
                    <div style={{ textAlign: "center" as const }}>
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: 800,
                          color: "#0b1f3a",
                        }}
                      >
                        {route.toCode}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#9aacbe",
                          fontWeight: 500,
                        }}
                      >
                        {route.to}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      borderTop: "1px dashed #e4edf8",
                      margin: "14px 0",
                    }}
                  />

                  {/* Price + CTA */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#9aacbe",
                          fontWeight: 500,
                          marginBottom: "2px",
                        }}
                      >
                        From
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "1px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#0b97bf",
                            fontWeight: 700,
                            marginTop: "3px",
                          }}
                        >
                          $
                        </span>
                        <span
                          style={{
                            fontSize: "26px",
                            fontWeight: 800,
                            color: "#0b97bf",
                            lineHeight: 1,
                          }}
                        >
                          {route.price}
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#e8a020",
                            marginTop: "2px",
                          }}
                        >
                          *
                        </span>
                      </div>
                    </div>
                    <a
                      href="tel:16176694209"
                      style={{
                        background: "linear-gradient(135deg, #2a6dd9, #1a5bbf)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px 18px",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                       Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p
            style={{
              fontSize: "12px",
              color: "#9aacbe",
              marginTop: "20px",
              lineHeight: 1.7,
            }}
          >
            * All prices are per person in USD, inclusive of base taxes. Fares
            are subject to availability and may change without notice.
            Additional fees for baggage, seat selection, and other services may
            apply.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════ */}
      <section
        style={{
          background: "#fff",
          padding: "60px 0",
          borderTop: "1px solid #e8f0f7",
          borderBottom: "1px solid #e8f0f7",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={sectionBadge}>⭐ Why TraveloCare</div>
            <h2 style={sectionTitle}>Book with Confidence</h2>
            <p style={sectionSub}>
              Millions of travelers trust us every year for the best fares and
              service.
            </p>
          </div>

          <div className="row g-4">
            {whyUs.map((item, i) => (
              <div className="col-12 col-sm-6 col-lg-3" key={i}>
                <div
                  style={{
                    textAlign: "center" as const,
                    padding: "28px 20px",
                    borderRadius: "14px",
                    border: "1px solid #e8f0f7",
                    height: "100%",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 28px rgba(42,109,217,0.1)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "#2a6dd9";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "none";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "#e8f0f7";
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "14px" }}>
                    {item.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0b1f3a",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#6b7f96",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CALL TO BOOK BANNER
      ══════════════════════════════════ */}
      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, #0b1f3a 0%, #133258 100%)",
              borderRadius: "20px",
              padding: "48px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap" as const,
              gap: "28px",
              position: "relative" as const,
              overflow: "hidden",
            }}
          >
            {/* BG decoration */}
            <div
              style={{
                position: "absolute",
                right: "-40px",
                top: "-40px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(42,109,217,0.15)",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "80px",
                bottom: "-60px",
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                background: "rgba(42,109,217,0.1)",
              }}
            />

            <div style={{ position: "relative" as const }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#edfaf3",
                  border: "1px solid #a8eac8",
                  borderRadius: "100px",
                  padding: "4px 14px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#1a9c5b",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#1a9c5b",
                    display: "inline-block",
                    animation: "none",
                  }}
                />
                Agents Available Now — 24/7
              </div>
              <h3
                style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "8px",
                  letterSpacing: "-0.01em",
                }}
              >
                Can&apos;t find what you need?
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: "420px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Our flight specialists can find unpublished fares and exclusive
                deals not available online. Call us now.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "12px",
                alignItems: "flex-start",
                position: "relative" as const,
              }}
            >
              <a
                href="tel:16176694209"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #e8a020, #f0b832)",
                  color: "#fff",
                  padding: "16px 32px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(232,160,32,0.35)",
                  whiteSpace: "nowrap" as const,
                }}
              >
                📞 Call: 1-617-669-4209
              </a>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap" as const,
                }}
              >
                {["🔒 Secure", "🚫 No Hidden Fees", "✅ Best Price"].map(
                  (t, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.55)",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FAQ
      ══════════════════════════════════ */}
      <section style={{ padding: "0 0 60px" }}>
        <div className="container">
          <div style={{ marginBottom: "32px" }}>
            <div style={sectionBadge}>❓ FAQs</div>
            <h2 style={sectionTitle}>Frequently Asked Questions</h2>
          </div>

          <div style={{ maxWidth: "720px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #e4edf8",
                  borderRadius: "12px",
                  marginBottom: "10px",
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                  borderColor: openFaq === i ? "#2a6dd9" : "#e4edf8",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "18px 22px",
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left" as const,
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#0b1f3a",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#2a6dd9",
                      flexShrink: 0,
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 0.2s",
                      display: "inline-block",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: "0 22px 18px",
                      fontSize: "13px",
                      color: "#6b7f96",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ── Shared style helpers ──
const sectionBadge: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  background: "#eef6ff",
  border: "1px solid #c5deff",
  borderRadius: "100px",
  padding: "5px 16px",
  fontSize: "11px",
  fontWeight: 600,
  color: "#2a6dd9",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: "12px",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "clamp(22px, 3vw, 32px)",
  fontWeight: 800,
  color: "#0b1f3a",
  letterSpacing: "-0.01em",
  marginBottom: "8px",
};

const sectionSub: React.CSSProperties = {
  fontSize: "14px",
  color: "#6b7f96",
  marginBottom: 0,
  lineHeight: 1.65,
};

export default FlightsPage;
