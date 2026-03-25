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

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollPosition > 0;

  return (
    <header
      className={`header fixed-top ${isScrolled ? "header-scrolled" : "header-top"}`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3 py-lg-2 px-0">

          {/* LOGO */}
          <Link href="/" className="navbar-brand py-1">
            <Image
              src={LogoImg2}
              alt="Travelocare"
              height={50}
              width={155}
              className={`logo ${isScrolled ? "logo-scrolled" : "logo-top"}`}
              priority
            />
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler px-1 btn rounded-0"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}>
            <ul className="navbar-nav me-auto"></ul>

            <ul className="navbar-nav mb-3 mb-lg-0 align-items-lg-center">

              <li className="nav-item">
                <Link
                  className={`nav-link pe-4 ${isScrolled ? "link-scrolled" : "link-top"}`}
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link pe-4 ${isScrolled ? "link-scrolled" : "link-top"}`}
                  href="/flights"
                >
                  Flights
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link pe-4 ${isScrolled ? "link-scrolled" : "link-top"}`}
                  href="/about-us"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link pe-4 ${isScrolled ? "link-scrolled" : "link-top"}`}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>

              {/* CALL BUTTON */}
              <Link
                href="tel:+16176694209"
                className={`nav-link d-flex align-items-center gap-2 fw-bold phone-link ${
                  isScrolled ? "phone-scrolled" : "phone-top"
                }`}
              >
                <i className="bi bi-telephone-fill"></i>
                16176694209
              </Link>

            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);