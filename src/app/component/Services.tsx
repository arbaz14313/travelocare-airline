"use client";

import { useState } from "react";
import Image from "next/image";

const thumbnails = [
  { id: 1, src: "/images/service1.png", label: "Maldives" },
  { id: 2, src: "/images/service1.png", label: "Santorini" },
  { id: 3, src: "/images/service1.png", label: "Florence" },
  { id: 4, src: "/images/service1.png", label: "Lauterbrunnen" },
];

const heroImages = [
  { src: "/images/service2.png", title: "Mountain Adventure", icon: "🏔️" },
  { src: "/images/service2.png", title: "Tropical Beach", icon: "🏝️" },
  { src: "/images/service2.png", title: "Historic City", icon: "🏛️" },
  { src: "/images/service2.png", title: "Alpine Lake", icon: "🏞️" },
];

const services = [
  {
    icon: "✈️",
    title: "Flight Booking Assistance",
    desc: "Find the best fares and routes tailored to your schedule and budget.",
  },
  {
    icon: "📋",
    title: "Reservation Management",
    desc: "Seamlessly manage hotels, transfers, and activity bookings in one place.",
  },
  {
    icon: "🗺️",
    title: "Itinerary Planning Support",
    desc: "Get personalised day-by-day plans crafted by seasoned travel experts.",
  },
  {
    icon: "🎧",
    title: "Customer Support for Travel Changes",
    desc: "24/7 assistance for rebooking, cancellations, and last-minute changes.",
  },
];

export default function TravelServiceShowcase() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ── inject scoped styles ── */}
      <style>{`
        /* ─── Section ─── */
        .ts-section {
          padding: 80px 0 0;
          background: #fff;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }

        /* ─── Left column ─── */
        .ts-left { padding-right: 12px; }

        .ts-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1a6eff;
          background: #e8f0ff;
          border-radius: 20px;
          padding: 4px 14px;
          margin-bottom: 16px;
        }

        .ts-heading {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 800;
          line-height: 1.15;
          color: #0d1b2a;
          margin-bottom: 16px;
        }
        .ts-heading em {
          font-style: normal;
          color: #1a6eff;
        }

        .ts-divider {
          width: 48px;
          height: 3px;
          background: #1a6eff;
          border-radius: 2px;
          margin-bottom: 16px;
        }

        .ts-text {
          font-size: 14px;
          line-height: 1.7;
          color: #5a6a7a;
          margin-bottom: 24px;
        }

        .ts-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1a6eff;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .ts-btn:hover {
          background: #0050d0;
          color: #fff;
          transform: translateY(-1px);
        }

        /* ─── Hero image ─── */
        .ts-hero {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(26,110,255,.18);
        }

        .ts-hero-img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .ts-hero:hover .ts-hero-img { transform: scale(1.04); }

        .ts-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(8px);
          border-radius: 14px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,.12);
        }
        .ts-badge span { font-size: 26px; line-height: 1; }
        .ts-badge strong {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #0d1b2a;
        }
        .ts-badge small { font-size: 11px; color: #1a6eff; font-weight: 600; }

        /* ─── Thumbnails ─── */
        .ts-thumbs {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ts-thumb {
          position: relative;
          height: 80px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: border-color 0.2s, transform 0.2s;
        }
        .ts-thumb img { object-fit: cover; }
        .ts-thumb span {
          position: absolute;
          bottom: 8px;
          left: 10px;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          text-shadow: 0 1px 4px rgba(0,0,0,.5);
          z-index: 1;
        }
        .ts-thumb::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,.25);
          transition: background 0.2s;
        }
        .ts-thumb.active,
        .ts-thumb:hover {
          border-color: #1a6eff;
          transform: translateX(-4px);
        }
        .ts-thumb.active::after { background: rgba(26,110,255,.25); }

        /* ─── Services strip ─── */
        .ts-services {
          margin-top: 64px;
          border-top: 1px solid #edf0f5;
          padding: 48px 0 64px;
          background: #f8faff;
        }

        .ts-services-label {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #1a6eff;
          margin-bottom: 36px;
        }

        .ts-services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 991px) {
          .ts-services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 575px) {
          .ts-services-grid { grid-template-columns: 1fr; }
        }

        .ts-service-card {
          background: #fff;
          border: 1px solid #e8edf5;
          border-radius: 16px;
          padding: 28px 24px;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          position: relative;
          overflow: hidden;
        }
        .ts-service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(135deg, #e8f0ff 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ts-service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(26,110,255,.12);
          border-color: #1a6eff;
        }
        .ts-service-card:hover::before { opacity: 1; }

        .ts-service-icon {
          font-size: 32px;
          margin-bottom: 16px;
          display: block;
          line-height: 1;
          position: relative;
          z-index: 1;
        }

        .ts-service-title {
          font-size: 15px;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 8px;
          line-height: 1.3;
          position: relative;
          z-index: 1;
        }

        .ts-service-desc {
          font-size: 13px;
          color: #6b7a8d;
          line-height: 1.6;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .ts-service-arrow {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 700;
          color: #1a6eff;
          margin-top: 14px;
          text-decoration: none;
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .ts-service-card:hover .ts-service-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <section className="ts-section">
        <div className="container-xl">
          <div className="row align-items-center g-4">

            {/* LEFT */}
            <div className="col-lg-3 col-12">
              <div className="ts-left">
                <span className="ts-tag">Premium Travel</span>
                <h2 className="ts-heading">
                  Travel <em>Services</em>
                </h2>
                <div className="ts-divider" />
                <p className="ts-text">
                  Book flights, hotels and packages with expert support.
                  Enjoy stress-free travel with 24/7 assistance.
                </p>
                <a href="tel:+16176694209" className="ts-btn">
                  <i className="bi bi-telephone-fill"></i>
                  Call Now
                </a>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="col-lg-6 col-12">
              <div className="ts-hero">
                <Image
                  src={heroImages[active].src}
                  alt="travel"
                  fill
                  className="ts-hero-img"
                />
                <div className="ts-badge">
                  <span>{heroImages[active].icon}</span>
                  <div>
                    <strong>{heroImages[active].title}</strong>
                    <small>Featured</small>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT THUMBNAILS */}
            <div className="col-lg-3 col-12">
              <div className="ts-thumbs">
                {thumbnails.map((item, i) => (
                  <div
                    key={item.id}
                    className={`ts-thumb ${active === i ? "active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <Image src={item.src} alt="" fill />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── SERVICES STRIP ── */}
        <div className="ts-services">
          <div className="container-xl">
            <p className="ts-services-label">What we offer</p>
            <div className="ts-services-grid">
              {services.map((s) => (
                <div className="ts-service-card" key={s.title}>
                  <span className="ts-service-icon">{s.icon}</span>
                  <p className="ts-service-title">{s.title}</p>
                  <p className="ts-service-desc">{s.desc}</p>
                  <a href="#" className="ts-service-arrow">
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}