"use client";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import Loader from "./layoutComponent/loader";

import SearchEngine from "./container/searchEngine";
import Service from "./component/Services"
import { CallModal } from "./component";
import {
  bestflightData,
  featuredDeals,
  flightDestinations,
  recommendations,
  
} from "./utils/data";
import {
  EasyImg,
  ExcImg,
  LowestImg,
  Support,
  RecomandationImage1,
  RecomandationImage2,
  RecomandationImage3,
  RecomandationImage4,
  RecomandationImage5,
  RecomandationImage6,
  HeroImg,
} from "./utils/images";


const whyItems = [
  {
    icon: "🔒",
    title: "Secure Payment Processing",
    desc: "Your transactions are protected with industry-grade encryption and secure payment gateways.",
  },
  {
    icon: "📧",
    title: "Quick Email Confirmation",
    desc: "Receive instant booking confirmations straight to your inbox — no waiting, no hassle.",
  },
  {
    icon: "🎧",
    title: "Dedicated Customer Support",
    desc: "Our expert team is always on hand to resolve queries and personalise your travel experience.",
  },
  {
    icon: "✈️",
    title: "Reliable Travel Assistance",
    desc: "From booking to boarding, count on us for dependable help at every step of your journey.",
  },
];

const steps = [
  {
    id: 1,
    icon: "📞",
    stepTitle: "Contact Our Support Team",
    stepDescription:
      "Reach out to our travel experts via phone, chat, or email — available around the clock.",
  },
  {
    id: 2,
    icon: "🗺️",
    stepTitle: "Get Travel Options & Assistance",
    stepDescription:
      "Our team presents the best flights, hotels, and packages tailored to your needs and budget.",
  },
  {
    id: 3,
    icon: "✅",
    stepTitle: "Confirm Your Booking",
    stepDescription:
      "Review your itinerary and confirm securely with our trusted payment system.",
  },
  {
    id: 4,
    icon: "✉️",
    stepTitle: "Receive E-Ticket via Email",
    stepDescription:
      "Get your confirmed e-ticket and travel documents delivered instantly to your inbox.",
  },
];
const Home = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow(!show);
  };

  // loader //
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <section className="hero-section" id="home">
        {/* Background */}
        <Image
          src={HeroImg}
          alt="Travel"
          fill
          priority
          className="hero-bg-img"
        />

        {/* Multi-layer overlay */}
        <div className="hero-overlay" />

        {/* Ambient glow orbs */}
        <div className="glow-orb glow-orb--left" />
        <div className="glow-orb glow-orb--right" />

        {/* Main content */}
        <div className="hero-inner">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            Available 24/7 — Expert Flight Assistance
          </div>

          {/* Headline */}
          <h5 className="hero-headline">
           Travel Assistance & Booking Support You Can Trust
          </h5>

          {/* Sub-copy */}
          <p className="hero-sub">
           We provide professional travel assistance services including flight booking support, itinerary management, and reservation help. Our team ensures a smooth and hassle-free experience for all your travel needs.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="tel:+16176694209" className="cta-primary">
              <span className="cta-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
              </span>
              Call Now
            </a>

            <a href="/flights" className="cta-secondary">
              Explore Flights
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="16"
                height="16"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stat pills */}
          <div className="hero-stats">
            {[
              { value: "50K+", label: "Happy Travelers" },
              { value: "200+", label: "Destinations" },
              { value: "25%", label: "Avg. Savings" },
            ].map(({ value, label }) => (
              <div key={label} className="stat-pill">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating promo card */}
        <div className="promo-card">
          <div className="promo-card__icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          </div>
          {/* <div className="promo-card__text">
            <span className="promo-card__title">Limited Offer</span>
            <span className="promo-card__sub">
              Save up to <strong>25% off</strong> on new bookings
            </span>
          </div>
          <span className="promo-card__badge">NEW</span> */}
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-indicator__line" />
        </div>
      </section>
      {/* Search Box */}
      <div className="mt-5">
        <SearchEngine handleToggle={handleToggle} />
      </div>

      {/* Amazing travel deals section start */}
      <section className="travel-deal py-5 border-top" id="travelDeals">
        <div className="container">
          {/* ── Section Header ── */}
          <div className="row my-5 text-center" data-aos="fade-up">
            <div className="col-12">
              <div
                style={{
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
                  textTransform: "uppercase" as const,
                  marginBottom: "14px",
                }}
              >
                ✈ Limited Time Offers
              </div>
              <h3 className="h3 theme-text-secondary fw-bold mb-3">
                Amazing Travel Deals &amp; More
              </h3>
              <p className="theme-text-accent-two mb-0">
                Explore the best of travel with our exclusive deals —{" "}
                <span style={{ fontWeight: 600, color: "#0b1f3a" }}>
                  fares from as low as shown below*
                </span>
              </p>
            </div>
          </div>

          {/* ── Cards Grid ── */}
          <div className="row" data-aos="fade-down">
            {bestflightData.map((flights) => (
              <div
                className="col-12 col-md-6 col-xl-4 mb-4"
                key={flights.arriving}
              >
                <div
                  className="card h-100 border-0 card-hover"
                  style={{
                    borderRadius: "14px",
                    boxShadow: "0 4px 20px rgba(11,31,58,0.08)",
                    overflow: "hidden",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                >
                  {/* Card top accent bar */}
                  <div
                    style={{
                      height: "3px",
                      background: "linear-gradient(90deg, #2a6dd9, #0b97bf)",
                    }}
                  />

                  <div className="card-body" style={{ padding: "22px 24px" }}>
                    {/* Route */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#0b1f3a",
                        }}
                      >
                        {flights.arriving}
                      </span>
                      <span style={{ color: "#2a6dd9", fontSize: "16px" }}>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#0b1f3a",
                        }}
                      >
                        {flights.destination}
                      </span>
                    </div>

                    {/* Date */}
                    <p
                      className="card-text"
                      style={{
                        fontSize: "13px",
                        color: "#6b7f96",
                        marginBottom: "18px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <i
                        className="bi bi-calendar3"
                        style={{ color: "#2a6dd9" }}
                      ></i>
                      {flights.date}
                    </p>

                    {/* Divider */}
                    <div
                      style={{
                        borderTop: "1px solid #f0f4fa",
                        marginBottom: "16px",
                      }}
                    />

                    {/* Price */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "11px",
                            fontWeight: 600,
                            color: "#6b7f96",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase" as const,
                            marginBottom: "4px",
                          }}
                        >
                          Starting from
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "2px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#0b97bf",
                              marginTop: "4px",
                            }}
                          >
                            $
                          </span>
                          <span
                            style={{
                              fontSize: "28px",
                              fontWeight: 800,
                              color: "#0b97bf",
                              lineHeight: 1,
                            }}
                          >
                            {flights.price}
                          </span>
                          {/* ✅ Asterisk — pricing disclaimer */}
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: 700,
                              color: "#e8a020",
                              marginTop: "2px",
                            }}
                          >
                            *
                          </span>
                        </div>
                      </div>

                      {/* Book now chip */}
                      <a href="tel:+16176694209" className="deal-call-btn">
                        <i className="bi bi-telephone-fill" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section Starts */}
      <section className="featured-deal " id="featuredFlights">
        <div className="container">
          {/* Section Header */}
          <div className="row my-5" data-aos="fade-up">
            <div className="col-12 text-center">
              <h2 className="h1 theme-text-secondary fw-bold mb-3">
                Trending Routes
              </h2>
              <p className="theme-text-accent-two mb-0">
                Everything You Want &amp; More
              </p>
            </div>
          </div>
          {/* Featured Deals Grid */}
          <div className="row" data-aos="fade-down">
            {featuredDeals.map((deal) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={deal.price}>
                <div className="card border-0 theme-box-shadow theme-border-radius h-100">
                  <div className="picHeight overflow-hidden theme-border-radius-top">
                    <Image
                      src={deal.imageSrc}
                      className="card-img-top img-fluid"
                      alt={deal.imageAlt}
                      title={deal.imageTitle}
                    />
                  </div>
                  <div className="card-body theme-bg-white theme-border-radius-bottom">
                    <span className="d-block theme-text-accent-one mb-2">
                      {deal.destination}
                    </span>
                    <span className="d-flex font-small theme-text-accent-two mb-2">
                      {deal.tripType}
                      <span className="ms-1">{deal.class}</span>
                    </span>
                    <a href="tel:+16176694209" className="featured-call-btn">
                      <i className="bi bi-telephone-fill" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
    <section id="whyBookWithUs" className="why-section">
        <div className="container my-5">
 
          <div className="text-center mb-5">
            <h2 className="why-title">Why Book With Us?</h2>
            <p className="why-subtitle">
              Experience smooth, affordable and reliable travel services
            </p>
          </div>
 
          <div className="row">
            {whyItems.map((item) => (
              <div className="col-md-3 mb-4" key={item.title}>
                <div className="why-card text-center">
                  <div className="why-icon">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
 
        </div>
      </section>

      {/*  Most destination place start */}
      <section
        className="flight-destination py-5 border-top"
        id="topDestination"
      >
        <div className="container">
          {/* <!-- Section Header --> */}
          <div className="row my-5" data-aos="fade-down">
            <div className="col-12 text-center">
              <h4 className="h3 fw-bold theme-text-secondary mb-3">
                Flights to top destinations
              </h4>
              <p className="theme-text-accent-two mb-0">
                Everything You Want &amp; More
              </p>
            </div>
          </div>
          {/* <!-- Destination Cards --> */}
          <div className="row" data-aos="fade-up">
            {/* <!-- Repeatable Card Item --> */}
            {flightDestinations.map((destination) => (
              <div
                className="col-12 col-md-6 col-lg-4 mb-4"
                key={destination.title}
              >
                <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                  <div className="pictureHeight overflow-hidden theme-border-radius-top img-container">
                    <Image
                      src={destination.imageSrc}
                      className="card-img-top img-fluid"
                      alt={destination.imageAlt}
                      title={destination.imageTitle}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{destination.title}</h5>
                    <p className="card-text theme-text-accent-two">
                      {destination.description}
                    </p>
                    <Link href="#" className="text-link text-link-effect">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <Service />
      {/* Servides section start */}
      <section className="services-section py-5">
        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="service-card text-center">
                <div className="icon-box">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <h5>Advice & Support</h5>
                <p>
                  Travel with confidence knowing our team is available 24/7 to
                  assist you anytime.
                </p>
                <a href="tel:+16176694209" className="service-btn">
                  <i className="bi bi-telephone-fill"></i> Call Now
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="service-card text-center">
                <div className="icon-box">
                  <i className="bi bi-globe"></i>
                </div>
                <h5>Air Ticketing</h5>
                <p>
                  Book flights worry-free with expert assistance available at
                  every step.
                </p>
                <a href="tel:+16176694209" className="service-btn">
                  <i className="bi bi-telephone-fill"></i> Call Now
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="service-card text-center">
                <div className="icon-box">
                  <i className="bi bi-building"></i>
                </div>
                <h5>Hotel Services</h5>
                <p>
                  Enjoy comfortable stays with 24/7 assistance and best price
                  guarantee.
                </p>
                <a href="tel:+16176694209" className="service-btn">
                  <i className="bi bi-telephone-fill"></i> Call Now
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="service-card text-center">
                <div className="icon-box">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <h5>Tour Packages</h5>
                <p>
                  Explore destinations stress-free with our customized travel
                  packages.
                </p>
                <a href="tel:+16176694209" className="service-btn">
                  <i className="bi bi-telephone-fill"></i> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section end */}

      {/* How it Work  start */}
       <section className="py-5 bg-white border-top hiw-section" id="howWork">
        <div className="container">
          <div className="hiw-outer">
 
            {/* Intro */}
            <div className="hiw-intro-col">
              <span className="hiw-intro-tag">How it works?</span>
              <h3 className="hiw-intro-heading">
                Amazing Deals &amp; Best Prices
              </h3>
              <p className="hiw-intro-sub">Book in 4 Simple Steps</p>
            </div>
 
            {/* Steps */}
            <div className="hiw-grid">
              {steps.map((step) => (
                <div className="hiw-card" key={step.id}>
                  <div className="hiw-icon">{step.icon}</div>
                  <p className="hiw-step-title">{step.stepTitle}</p>
                  <p className="hiw-step-desc">{step.stepDescription}</p>
                  <div className="hiw-badge">{step.id}</div>
                </div>
              ))}
            </div>
 
          </div>
        </div>
      </section>

      {/* Recommandation section Start */}
      <section className="recom-sec py-5 border-top" id="Recommendations">
        <div className="container">
          <div className="row my-5">
            <div className="col-12" data-aos="fade-up" data-aos-delay="200">
              <p className="text-center text-primary mb-3">
                <span className="ribbon">Recommendations</span>
              </p>
              <h5 className="text-secondary h3 fw-bold text-center mb-0">
                Only Unique Experiences
              </h5>
            </div>
          </div>
          <div className="row">
            {recommendations.map((item, index) => (
              <div
                className="col-12 col-md-4 mb-4"
                data-aos="fade-down"
                data-aos-delay={300 + index * 100}
                key={index}
              >
                <div className="card border-0 rounded-3 shadow-sm item-effect position-relative">
                  <Image
                    src={item.image}
                    className="card-img-top img-fluid"
                    alt={item.alt}
                    title={item.title}
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      width: "100%",
                    }}
                  />
                  <div className="card-body position-absolute top-0 start-0 p-3">
                    <h6 className="card-title fw-bold text-white">
                      {item.title}
                    </h6>
                    <span className="d-flex text-white font-14">
                      Get prices
                    </span>
                  </div>
                  <a href={item.link} className="stretched-link"></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOader */}

      {/* call us modal */}
      <CallModal show={show} handleClose={handleToggle} setShow={setShow} />
    </main>
  );
};

export default Home;
