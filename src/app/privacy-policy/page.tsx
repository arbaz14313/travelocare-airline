import { Hero } from "../component";

const Policy = () => {
  return (
    <>
      <Hero
        title="Privacy Policy"
        description="Your data, your control. Learn how we collect and protect your information."
      />

      <div className="container py-5 refund-policy">

        {/* Header */}
        <div className="mb-5">
          <h2 className="main-heading">Privacy Policy</h2>
          <p className="small-text">
            Effective Date: 16th March 2026 (Monday)
          </p>
          <p className="small-text">
            At <strong>TravelOcare</strong>, we respect your privacy and are committed to protecting your personal data.
          </p>
        </div>

        {/* Sections */}

        <section>
          <h4 className="section-heading">Information We Collect</h4>
          <ul className="policy-list">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number, address, and payment details.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, device type, browser, and browsing behavior.
            </li>
            <li>
              <strong>Preferences:</strong> Travel interests and booking history to personalize your experience.
            </li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">How We Use Your Information</h4>
          <ul className="policy-list">
            <li>Process and manage your bookings.</li>
            <li>Send important travel updates and notifications.</li>
            <li>Personalize your experience and recommendations.</li>
            <li>Improve website performance and prevent fraud.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Sharing & Disclosure</h4>
          <ul className="policy-list">
            <li>Shared with airlines, hotels, and travel partners.</li>
            <li>Shared with payment processors and analytics providers.</li>
            <li>Disclosed when required by law or legal authorities.</li>
            <li className="highlight">We do not sell your personal data.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Data Protection</h4>
          <ul className="policy-list">
            <li>We use industry-standard security measures.</li>
            <li>Your data is protected against unauthorized access.</li>
            <li>No online system is 100% secure.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Your Rights & Choices</h4>
          <ul className="policy-list">
            <li>You can request access, update, or deletion of your data.</li>
            <li>You can opt-out of marketing communications.</li>
            <li>You can disable cookies through browser settings.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Policy Updates</h4>
          <ul className="policy-list">
            <li>We may update this policy from time to time.</li>
            <li>Changes will be reflected with a new effective date.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Independent Concierge Disclaimer</h4>
          <ul className="policy-list">
            <li>TravelOcare is an independent travel service provider.</li>
            <li>We are not directly affiliated with airlines.</li>
            <li>Pricing and availability may change due to third-party providers.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Contact Us</h4>
          <ul className="policy-list">
            <li>
              Email:{" "}
              <a href="mailto:info@travelocare.com">
                info@travelocare.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+16176694209">
                +1 6176694209
              </a>
            </li>
          </ul>
        </section>

      </div>
    </>
  );
};

export default Policy;