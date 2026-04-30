"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, memo } from "react";
import { LogoImg2 } from "../utils/images";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const path = usePathname();

  const toggleNavbar = () => setCollapsed((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollPosition > 0;

  return (
    <header
      className={`header fixed-top ${isScrolled ? "header-scrolled" : "header-top"}`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg px-0">
          {/* ── LOGO — floating / raised ── */}
          <Link href="/" className="navbar-brand py-0 me-4">
            <Image
              src={LogoImg2}
              alt="Travelocare"
              height={100} 
              width={400} 
              className="logo-img"
              priority
            />
          </Link>

          {/* ── TOGGLER ── */}
          <button
            className="navbar-toggler px-1 border-0"
            type="button"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* ── COLLAPSE MENU ── */}
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          >
            <ul className="navbar-nav me-auto" />

            <ul className="navbar-nav mb-3 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link header-nav-link ${path === "/" ? "header-nav-active" : ""}`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/flights"
                  className={`nav-link header-nav-link ${path === "/flights" ? "header-nav-active" : ""}`}
                >
                  Flights
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/about-us"
                  className={`nav-link header-nav-link ${path === "/about-us" ? "header-nav-active" : ""}`}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link header-nav-link ${path === "/contact" ? "header-nav-active" : ""}`}
                >
                  Contact
                </Link>
              </li>

              {/* ── CALL NOW BUTTON ── */}
              <li className="nav-item">
                <Link href="tel:+16176694209" className="btn-call-now">
                  <i className="bi bi-telephone-fill" />
                  Call Now
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
