import { Hero } from "../component";

const TermsAndConditions = () => {
  return (
    <>
      <Hero
        title="Terms & Conditions"
        description="Please read these terms carefully before using our services."
      />

      <div className="container py-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 d-none d-md-block">
            <div
              style={{
                position: "sticky",
                top: "100px",
              }}
            >
              <h6 className="fw-bold mb-3">On this page</h6>
              <ul className="list-unstyled small">
                <li><a href="#role" className="text-decoration-none d-block mb-2">Our Role</a></li>
                <li><a href="#booking" className="text-decoration-none d-block mb-2">Bookings</a></li>
                <li><a href="#cancellation" className="text-decoration-none d-block mb-2">Cancellations</a></li>
                <li><a href="#responsibility" className="text-decoration-none d-block mb-2">Your Responsibility</a></li>
                <li><a href="#liability" className="text-decoration-none d-block mb-2">Liability</a></li>
                <li><a href="#force" className="text-decoration-none d-block mb-2">Force Majeure</a></li>
                <li><a href="#errors" className="text-decoration-none d-block">Errors</a></li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="col-md-9">
            {/* Header */}
            <div className="mb-5">
              <h2 className="fw-bold mb-2">Terms and Conditions</h2>
              <p className="text-muted mb-1">
                Effective Date: 16th March 2026 (Monday)
              </p>
              <p className="text-muted">
                By using TravelOcare, you agree to these terms and our policies.
              </p>
            </div>

            {/* Section */}
            <section id="role" className="mb-5">
              <h4 className="fw-bold mb-3">Our Role as Your Travel Concierge</h4>
              <p className="text-muted">
                TravelOcare operates as an independent intermediary between you
                and third-party travel providers such as airlines, hotels, and
                tour operators. We facilitate bookings but do not directly own
                or operate any travel services.
              </p>
            </section>

            <section id="booking" className="mb-5">
              <h4 className="fw-bold mb-3">Bookings & Payments</h4>
              <ul className="text-muted ps-3">
                <li>All bookings are subject to availability.</li>
                <li>Prices may change until booking is confirmed.</li>
                <li>You must provide accurate traveler details.</li>
                <li>Full payment is required unless stated otherwise.</li>
              </ul>
            </section>

            <section id="cancellation" className="mb-5">
              <h4 className="fw-bold mb-3">Cancellations & Refunds</h4>
              <ul className="text-muted ps-3">
                <li>Policies depend on airlines, hotels, or providers.</li>
                <li>Service fees may apply for changes or cancellations.</li>
                <li>No refunds for unused services after trip starts.</li>
              </ul>
            </section>

            <section id="responsibility" className="mb-5">
              <h4 className="fw-bold mb-3">Your Responsibilities</h4>
              <ul className="text-muted ps-3">
                <li>You must carry valid passport, visa, and documents.</li>
                <li>We are not responsible for documentation issues.</li>
                <li>Travel insurance is strongly recommended.</li>
              </ul>
            </section>

            <section id="liability" className="mb-5">
              <h4 className="fw-bold mb-3 text-danger">Limitations of Liability</h4>
              <ul className="text-muted ps-3">
                <li>We are not responsible for actions of travel providers.</li>
                <li>Third-party data may not always be accurate.</li>
                <li>No liability for loss, delay, or damages during travel.</li>
              </ul>
            </section>

            <section id="force" className="mb-5">
              <h4 className="fw-bold mb-3 text-warning">Force Majeure</h4>
              <p className="text-muted">
                We are not liable for events beyond control such as natural
                disasters, pandemics, war, or civil unrest.
              </p>
            </section>

            <section id="errors" className="mb-5">
              <h4 className="fw-bold mb-3 text-primary">Errors & Modifications</h4>
              <p className="text-muted">
                Pricing or information may occasionally be incorrect due to
                technical issues.
              </p>
              <ul className="text-muted ps-3">
                <li>You may continue with corrected pricing</li>
                <li>Or cancel without any penalty</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;