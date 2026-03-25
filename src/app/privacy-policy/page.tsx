import { Hero } from "../component";

const Policy = () => {
  return (
    <>
      <Hero
        title="Privacy Policy"
        description="Your data, your control. Learn how we collect and protect your information."
      />

      <div className="container py-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 d-none d-md-block">
            <div style={{ position: "sticky", top: "100px" }}>
              <h6 className="fw-bold mb-3">On this page</h6>
              <ul className="list-unstyled small">
                <li><a href="#collect" className="text-decoration-none d-block mb-2">Data We Collect</a></li>
                <li><a href="#use" className="text-decoration-none d-block mb-2">How We Use Data</a></li>
                <li><a href="#sharing" className="text-decoration-none d-block mb-2">Sharing</a></li>
                <li><a href="#security" className="text-decoration-none d-block mb-2">Security</a></li>
                <li><a href="#rights" className="text-decoration-none d-block mb-2">Your Rights</a></li>
                <li><a href="#updates" className="text-decoration-none d-block mb-2">Updates</a></li>
                <li><a href="#contact" className="text-decoration-none d-block">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="col-md-9">
            {/* Header */}
            <div className="mb-5">
              <h2 className="fw-bold mb-2">Privacy Policy</h2>
              <p className="text-muted mb-1">
                Effective Date: 16th March 2026 (Monday)
              </p>
              <p className="text-muted">
                At <strong>TravelOcare</strong>, we respect your privacy and are
                committed to protecting your personal data.
              </p>
            </div>

            {/* Collect */}
            <section id="collect" className="mb-5">
              <h4 className="fw-bold mb-3">Information We Collect</h4>
              <p className="text-muted">
                We collect information to provide a seamless travel experience.
              </p>
              <ul className="text-muted ps-3">
                <li>
                  <strong>Personal Information:</strong> Name, email, phone,
                  address, and payment details.
                </li>
                <li>
                  <strong>Usage Data:</strong> IP address, device type, browser,
                  and browsing behavior.
                </li>
              </ul>
            </section>

            {/* Use */}
            <section id="use" className="mb-5">
              <h4 className="fw-bold mb-3">How We Use Your Information</h4>
              <ul className="text-muted ps-3">
                <li>Process and manage bookings</li>
                <li>Send updates and important notifications</li>
                <li>Personalize your travel experience</li>
                <li>Prevent fraud and improve security</li>
              </ul>
            </section>

            {/* Sharing */}
            <section id="sharing" className="mb-5">
              <h4 className="fw-bold mb-3">Sharing & Disclosure</h4>
              <ul className="text-muted ps-3">
                <li>Travel providers like airlines and hotels</li>
                <li>Payment processors and analytics partners</li>
                <li>Legal authorities when required</li>
              </ul>
              <p className="text-muted">
                <strong>We do not sell your personal data.</strong>
              </p>
            </section>

            {/* Security */}
            <section id="security" className="mb-5">
              <h4 className="fw-bold mb-3">Data Protection</h4>
              <p className="text-muted">
                We use industry-standard security measures to protect your data.
                However, no online system is completely secure.
              </p>
            </section>

            {/* Rights */}
            <section id="rights" className="mb-5">
              <h4 className="fw-bold mb-3">Your Rights & Choices</h4>
              <ul className="text-muted ps-3">
                <li>Access or update your data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing emails</li>
                <li>Disable cookies via browser settings</li>
              </ul>
            </section>

            {/* Updates */}
            <section id="updates" className="mb-5">
              <h4 className="fw-bold mb-3">Policy Updates</h4>
              <p className="text-muted">
                We may update this policy from time to time. Changes will be
                reflected with a new effective date.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="mb-5">
              <div className="p-4 rounded bg-light border">
                <h5 className="fw-bold mb-2">
                  Independent Concierge Disclaimer
                </h5>
                <p className="text-muted mb-0">
                  TravelOcare is an independent travel service provider. We are
                  not directly affiliated with airlines. Pricing and availability
                  may change based on third-party providers.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-5">
              <h4 className="fw-bold mb-3">Contact Us</h4>
              <p className="text-muted">
                If you have any questions, feel free to contact us:
              </p>
              <ul className="text-muted ps-3">
                <li>
                  Email:{" "}
                  <a href="mailto:info@travelocare.com">
                    info@travelocare.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:+16176694209">+1 6176694209</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;