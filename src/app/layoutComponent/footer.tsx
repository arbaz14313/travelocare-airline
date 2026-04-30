"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, FormEvent, memo, useRef } from "react";

import {
  LogoImg2,
  SubscribeIcon,
} from "../utils/images";

import "../globals.css"; // ← adjust path to match your project structure

const quickLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about-us" },
  { label: "Flights",    href: "/flights" },
  { label: "Contact Us", href: "/contact" },
];

const supportLinks = [
  { label: "Contact",               href: "/contact" },
  { label: "Privacy Policy",        href: "/privacy-policy" },
  { label: "Terms & Conditions",    href: "/terms-conditions" },
  { label: "Refund & Cancellation", href: "/refund-cancellation" },
];

// ── Component ───────────────────────────────────────────────────────────────
const Footer = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [email,      setEmail]      = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const colsRef = useRef<HTMLDivElement>(null);

  /* scroll-to-top visibility */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* staggered column reveal via IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".tc-col-anim")
              .forEach((el) => el.classList.add("in-view"));
          }
        });
      },
      { threshold: 0.12 }
    );
    if (colsRef.current) observer.observe(colsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await res.json();
      if (result?.status) {
        setEmail("");
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 3500);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          SUBSCRIBE BAR
      ══════════════════════════════════════════ */}
      <section className="tc-subscribe-bar">
        <div className="container">
          <div className="row align-items-center gy-4">

            {/* left: icon + text */}
            <div className="col-12 col-lg-6">
              <div className="d-flex align-items-center gap-3">
                <div className="tc-subscribe-icon-wrap">
                  <Image src={SubscribeIcon} alt="subscribe" width={80} height={80} />
                </div>
                <div>
                  <h4 className="tc-subscribe-title">Your Travel Journey Starts Here</h4>
                  <p className="tc-subscribe-sub">
                    Sign up and we&apos;ll send the best deals to you
                  </p>
                </div>
              </div>
            </div>

            {/* right: form */}
            <div className="col-12 col-lg-5 offset-lg-1">
              {subscribed ? (
                <p className="tc-subscribed-msg">
                  ✓ You&apos;re subscribed — great deals coming your way!
                </p>
              ) : (
                <form className="tc-subs-form" onSubmit={handleSubscribe}>
                  <input
                    className="tc-subs-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                  />
                  <button className="tc-subs-btn" type="submit">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAIN FOOTER
      ══════════════════════════════════════════ */}
      <footer className="tc-footer">
        <div className="container">
          <div className="row gy-5" ref={colsRef}>

            {/* ── Col 1 : Logo + Contact ─────────────────── */}
            <div className="col-12 col-sm-6 col-lg-3 tc-col-anim">

              {/* Logo with white background */}
              <div className="tc-logo-wrap mb-2">
                <div className="tc-logo-bg">
                  <Image
                    src={LogoImg2}
                    alt="Travelocare"
                    className="tc-logo-img"
                    width={180}
                    height={80}
                  />
                </div>
              </div>

              <p className="tc-tagline">Travel With Trust &amp; Care</p>

              <div className="tc-col-divider" />
              <p className="tc-col-heading">Contact Us</p>

              <p className="tc-contact-label">Location</p>
              <address className="tc-contact-value" style={{ fontStyle: "normal" }}>
                1309 Coffeen Avenue STE 19309<br />
                Sheridan Wyoming 82801, USA
              </address>

              <p className="tc-contact-label">Customer Care</p>
              <div className="mb-3">
                <Link href="tel:+16176694209" className="tc-contact-link">
                  +1 6176694209
                </Link>
              </div>

              <p className="tc-contact-label">Email Support</p>
              <div className="mb-3">
                <Link href="mailto:support@travelocare.com" className="tc-contact-link">
                  support@travelocare.com
                </Link>
              </div>

              {/* Social icons */}
              <ul className="tc-social-list mt-3">
                <li>
                  <Link href="" target="_blank" className="tc-social-link" aria-label="Facebook">
                    <i className="bi bi-facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank" className="tc-social-link" aria-label="LinkedIn">
                    <i className="bi bi-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank" className="tc-social-link" aria-label="Instagram">
                    <i className="bi bi-instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="tc-social-link" aria-label="WhatsApp">
                    <i className="bi bi-whatsapp" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* ── Col 2 : Quick Links ────────────────────── */}
            <div className="col-12 col-sm-6 col-lg-3 tc-col-anim">
              <div className="tc-col-divider" />
              <p className="tc-col-heading">Quick Links</p>
              <ul className="tc-nav-list">
                {quickLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="tc-nav-link">
                      <i className="tc-arrow">→</i>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3 : Support ───────────────────────── */}
            <div className="col-12 col-sm-6 col-lg-3 tc-col-anim">
              <div className="tc-col-divider" />
              <p className="tc-col-heading">Support</p>
              <ul className="tc-nav-list">
                {supportLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="tc-nav-link">
                      <i className="tc-arrow">→</i>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4 : Why Choose Us ─────────────────── */}
            <div className="col-12 col-sm-6 col-lg-3 tc-col-anim">
              <div className="tc-col-divider" />
              <p className="tc-col-heading">Why Travelocare</p>
              <ul className="tc-nav-list">
                {[
                  { icon: "bi-shield-check", text: "100% Secure Booking" },
                  { icon: "bi-headset",      text: "24/7 Customer Support" },
                  { icon: "bi-tags",         text: "Best Price Guarantee" },
                  { icon: "bi-airplane",     text: "1000+ Destinations" },
                ].map(({ icon, text }) => (
                  <li
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <i
                      className={`bi ${icon}`}
                      style={{
                        color: "#00b4d8",
                        fontSize: "1rem",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>{/* /row */}

          {/* ── Bottom bar ─────────────────────────────── */}
          <div className="tc-bottom-bar">
            <p className="tc-copy">
              &copy; 2026{" "}
              <span className="tc-copy-brand">Travelocare.com</span>{" "}
              — All rights reserved.
            </p>
            <p className="tc-copy">Designed with ♥ for travellers worldwide</p>
          </div>
        </div>

        {/* Scroll-to-top */}
        <button
          className={`tc-scroll-top${scrolled ? " visible" : ""}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <i className="bi bi-chevron-double-up" />
        </button>
      </footer>
    </>
  );
};

export default memo(Footer);