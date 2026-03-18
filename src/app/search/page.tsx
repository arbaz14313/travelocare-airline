"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SearchEngine from "../container/searchEngine";

const BookingDetails = () => {
  const searchParams = useSearchParams();

  const departFrom     = searchParams.get("departFrom");
  const arrivalTo      = searchParams.get("arrivalTo");
  const departureDate  = searchParams.get("departureDate");
  const returnDate     = searchParams.get("returnDate");
  const selectedTab    = searchParams.get("selectedTab");
  const adults         = searchParams.get("adults") || "1";
  const children       = searchParams.get("children") || "0";
  const infants        = searchParams.get("infants") || "0";
  const totalTravelers = Number(adults) + Number(children) + Number(infants);

  if (!departFrom || !arrivalTo) return null;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div style={{ paddingBottom: "60px" }}>

      {/* ── Search Summary Header ── */}
      <div style={{
        background: "linear-gradient(135deg, #0b1f3a 0%, #1a3a6b 100%)",
        borderRadius: "16px",
        padding: "32px",
        marginBottom: "28px",
        boxShadow: "0 8px 32px rgba(11,31,58,0.15)",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Background pattern */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />

        {/* Trip type badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "100px",
          padding: "5px 16px",
          fontSize: "11px", fontWeight: 600,
          color: "rgba(255,255,255,0.9)",
          letterSpacing: "0.08em",
          textTransform: "uppercase" as const,
          marginBottom: "20px",
        }}>
          <span style={{ fontSize: "14px" }}>✈</span>
          {selectedTab || "One Way"}
        </div>

        {/* Route display */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: "16px", flexWrap: "wrap" as const,
          marginBottom: "24px",
        }}>
          <div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>From</div>
            <div style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>{departFrom}</div>
          </div>

          <div style={{
            display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "4px",
            padding: "0 8px",
          }}>
            <div style={{ width: "60px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
            <span style={{ fontSize: "18px" }}>✈</span>
            <div style={{ width: "60px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
          </div>

          <div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: "4px", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>To</div>
            <div style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>{arrivalTo}</div>
          </div>
        </div>

        {/* Info pills */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" as const }}>
          <div style={pillStyle}>📅 {formatDate(departureDate!)}</div>
          {returnDate && <div style={pillStyle}>🔄 {formatDate(returnDate)}</div>}
          <div style={pillStyle}>👤 {totalTravelers} Traveler{totalTravelers > 1 ? "s" : ""}</div>
        </div>
      </div>

      {/* ── Detail Cards ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
        gap: "16px",
        marginBottom: "32px",
      }}>

        <DetailCard label="Departure From" value={departFrom!} accent="#2a6dd9" icon="🛫" />
        <DetailCard label="Arrival At" value={arrivalTo!} accent="#2a6dd9" icon="🛬" />
        <DetailCard label="Departure Date" value={formatDate(departureDate!)} accent="#2a6dd9" icon="📅" small />
        {returnDate && (
          <DetailCard label="Return Date" value={formatDate(returnDate)} accent="#2a6dd9" icon="🔄" small />
        )}

        {/* Travelers card */}
        <div style={{
          background: "#fff",
          border: "1px solid #d6e0ef",
          borderRadius: "14px",
          padding: "20px 22px",
          borderTop: "3px solid #e8a020",
          boxShadow: "0 2px 12px rgba(11,31,58,0.05)",
        }}>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "#6b7f96", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "6px" }}>
            🧳 No. of Travelers
          </div>
          <div style={{ fontSize: "22px", fontWeight: 800, color: "#0b1f3a", marginBottom: "10px" }}>
            {totalTravelers} <span style={{ fontSize: "13px", fontWeight: 500, color: "#6b7f96" }}>Total</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "5px" }}>
            {Number(adults) > 0 && <TravelerRow icon="👤" label={`${adults} Adult${Number(adults) > 1 ? "s" : ""}`} sub="12+ yrs" />}
            {Number(children) > 0 && <TravelerRow icon="🧒" label={`${children} Child${Number(children) > 1 ? "ren" : ""}`} sub="2–11 yrs" />}
            {Number(infants) > 0 && <TravelerRow icon="👶" label={`${infants} Infant${Number(infants) > 1 ? "s" : ""}`} sub="Under 2" />}
          </div>
        </div>

      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: "1px solid #d6e0ef", marginBottom: "32px" }} />

      {/* ── Call to Book Section ── */}
      <div style={{
        background: "linear-gradient(135deg, #fff8ed, #fffaf4)",
        border: "1.5px solid #f5d9a0",
        borderRadius: "16px",
        padding: "32px",
        textAlign: "center" as const,
        boxShadow: "0 4px 24px rgba(232,160,32,0.1)",
      }}>

        {/* Live badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "#edfaf3",
          border: "1px solid #a8eac8",
          borderRadius: "100px",
          padding: "4px 14px",
          fontSize: "11px", fontWeight: 600, color: "#1a9c5b",
          marginBottom: "16px",
          letterSpacing: "0.06em",
        }}>
          <span style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#1a9c5b",
            display: "inline-block",
            animation: "pulse 2s infinite",
          }} />
          AGENTS AVAILABLE NOW
        </div>

        <h3 style={{
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 800,
          color: "#0b1f3a",
          marginBottom: "8px",
          letterSpacing: "-0.01em",
        }}>
          Ready to Book Your Flight?
        </h3>
        <p style={{
          fontSize: "14px", color: "#6b7f96",
          marginBottom: "28px", lineHeight: 1.6,
          maxWidth: "420px", margin: "0 auto 28px",
        }}>
          Our travel specialists are standing by to confirm your booking from{" "}
          <strong style={{ color: "#0b1f3a" }}>{departFrom}</strong> to{" "}
          <strong style={{ color: "#0b1f3a" }}>{arrivalTo}</strong>. No hidden fees.
        </p>

        {/* Call button */}
        <a
          href="tel:+1 6176694209"
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "linear-gradient(135deg, #e8a020, #f0b832)",
            color: "#fff",
            padding: "16px 36px",
            borderRadius: "10px",
            fontSize: "16px", fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 6px 24px rgba(232,160,32,0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
            marginBottom: "16px",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <span style={{ fontSize: "20px" }}>📞</span>
          Call to Book: +1 6176694209
        </a>

        <br />

        {/* Trust row */}
        <div style={{
          display: "inline-flex", gap: "24px",
          flexWrap: "wrap" as const,
          justifyContent: "center",
          marginTop: "16px",
        }}>
          {[
            { icon: "🔒", text: "Secure Booking" },
            { icon: "🚫", text: "No Hidden Fees" },
            { icon: "🕐", text: "24/7 Support" },
            { icon: "✅", text: "Best Price Guarantee" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#6b7f96", fontWeight: 500 }}>
              <span>{item.icon}</span> {item.text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

// ── Reusable sub-components ──

const pillStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "8px",
  padding: "7px 14px",
  fontSize: "13px", fontWeight: 500,
  color: "rgba(255,255,255,0.9)",
  display: "flex", alignItems: "center", gap: "6px",
};

const DetailCard = ({
  label, value, accent, icon, small = false
}: {
  label: string; value: string; accent: string; icon: string; small?: boolean;
}) => (
  <div style={{
    background: "#fff",
    border: "1px solid #d6e0ef",
    borderRadius: "14px",
    padding: "20px 22px",
    borderTop: `3px solid ${accent}`,
    boxShadow: "0 2px 12px rgba(11,31,58,0.05)",
  }}>
    <div style={{ fontSize: "11px", fontWeight: 600, color: "#6b7f96", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "6px" }}>
      {icon} {label}
    </div>
    <div style={{ fontSize: small ? "15px" : "20px", fontWeight: 800, color: "#0b1f3a", lineHeight: 1.3 }}>
      {value}
    </div>
  </div>
);

const TravelerRow = ({ icon, label, sub }: { icon: string; label: string; sub: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
    <span style={{ fontSize: "13px" }}>{icon}</span>
    <span style={{ fontSize: "13px", color: "#0b1f3a", fontWeight: 600 }}>{label}</span>
    <span style={{ fontSize: "11px", color: "#6b7f96" }}>({sub})</span>
  </div>
);

// ── Main Page ──

const Search = () => {
  return (
    <div style={{ paddingTop: "70px" }}> {/* ✅ Navigation se neeche shift */}
      <div className="container">
        <SearchEngine />
      </div>

      <div className="container mt-10">
        <Suspense fallback={
          <div style={{ textAlign: "center", padding: "40px", color: "#6b7f96" }}>
            Loading results... 
          </div>
        }>
          <BookingDetails />
        </Suspense>
      </div>
    </div>
  );
};

export default Search;