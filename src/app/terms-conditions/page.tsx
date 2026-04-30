import { Hero } from "../component";

const TermsAndConditions = () => {
  return (
    <>
      <Hero
        title="Terms & Conditions"
        description="Please read these terms carefully before using our services."
      />

      <div className="container py-5 refund-policy">

        {/* Header */}
        <div className="mb-5">
          <h2 className="main-heading">Terms and Conditions</h2>
          <p className="small-text">
            Effective Date: 16th March 2026 (Monday)
          </p>
          <p className="small-text">
            By using TravelOcare, you agree to these terms and our policies.
          </p>
        </div>

        {/* Sections */}

        <section>
          <h4 className="section-heading">Our Role as Your Travel Concierge</h4>
          <ul className="policy-list">
            <li>
              TravelOcare acts as an independent intermediary between you and travel providers.
            </li>
            <li>
              We facilitate bookings but do not own or operate travel services.
            </li>
            <li>
              Airlines, hotels, and tour operators remain responsible for their services.
            </li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Bookings & Payments</h4>
          <ul className="policy-list">
            <li>All bookings are subject to availability and confirmation.</li>
            <li>Prices may change until full payment is completed.</li>
            <li>You must provide accurate traveler details (as per passport).</li>
            <li>Full payment is required unless stated otherwise.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Cancellations & Refunds</h4>
          <ul className="policy-list">
            <li>Cancellation policies depend on airlines and service providers.</li>
            <li>TravelOcare may charge service fees for changes or cancellations.</li>
            <li>No refunds for unused or partially used services.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Your Responsibilities</h4>
          <ul className="policy-list">
            <li>You must carry valid passport, visa, and required documents.</li>
            <li>TravelOcare is not responsible for documentation issues.</li>
            <li>Travel insurance is strongly recommended.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">
            Limitations of Liability
          </h4>
          <ul className="policy-list">
            <li>We are not responsible for acts or errors of travel providers.</li>
            <li>We do not guarantee accuracy of third-party information.</li>
            <li>No liability for injury, loss, delays, or damages.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Force Majeure</h4>
          <ul className="policy-list">
            <li>Includes natural disasters, pandemics, war, or civil unrest.</li>
            <li>We are not liable for events beyond our control.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">
            Errors & Modifications
          </h4>
          <ul className="policy-list">
            <li>Pricing or information may occasionally be incorrect.</li>
            <li>You may proceed with corrected pricing.</li>
            <li>Or cancel booking without any penalty.</li>
          </ul>
        </section>

      </div>
    </>
  );
};

export default TermsAndConditions;