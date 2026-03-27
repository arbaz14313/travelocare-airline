"use client";

import { useState } from "react";
import Image from "next/image";

const thumbnails = [
  {
    id: 1,
    src: "/images/service1.png",
    label: "Maldives",
  },
  {
    id: 2,
    src: "/images/service1.png",
    label: "Santorini",
  },
  {
    id: 3,
    src: "/images/service1.png",
    label: "Florence",
  },
  {
    id: 4,
    src: "/images/service1.png",
    label: "Lauterbrunnen",
  },
];

const heroImages = [
  {
    src: "/images/service2.png",
    title: "Mountain Adventure",
    icon: "🏔️",
  },
  {
    src: "/images/service2.png",
    title: "Tropical Beach",
    icon: "🏝️",
  },
  {
    src: "/images/service2.png",
    title: "Historic City",
    icon: "🏛️",
  },
  {
    src: "/images/service2.png",
    title: "Alpine Lake",
    icon: "🏞️",
  },
];

export default function TravelServiceShowcase() {
  const [active, setActive] = useState(0);

  return (
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
    </section>
  );
}