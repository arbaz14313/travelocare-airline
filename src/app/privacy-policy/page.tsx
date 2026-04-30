import { Hero } from "../component";

const Policy = () => {
  return (
    <>
      <Hero
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your information."
      />

      <div className="container py-5 refund-policy">

        {/* Header */}
        <div className="mb-5">
          <h2 className="main-heading">Privacy Policy</h2>
          <p className="small-text">
            Effective Date: March 16, 2026
          </p>
          <p className="small-text">
            At <strong>Travel O Care</strong>, we are committed to protecting your privacy and handling your data responsibly.
          </p>
        </div>

        {/* Information We Collect */}
        <section>
          <h4 className="section-heading">Information We Collect</h4>
          <ul className="policy-list">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and travel details.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, device information, and pages visited.
            </li>
            <li>
              <strong>Booking Details:</strong> Travel preferences and booking-related information.
            </li>
          </ul>
        </section>

        {/* How We Use */}
        <section>
          <h4 className="section-heading">How We Use Your Information</h4>
          <ul className="policy-list">
            <li>Provide travel assistance and booking support services.</li>
            <li>Communicate booking updates and customer support responses.</li>
            <li>Improve our website functionality and user experience.</li>
            <li>Prevent fraud and ensure security.</li>
          </ul>
        </section>

        {/* Payments */}
        <section>
          <h4 className="section-heading">Payment Processing</h4>
          <ul className="policy-list">
            <li>We do not store your full payment details.</li>
            <li>Payments are securely processed through trusted third-party payment gateways.</li>
          </ul>
        </section>

        {/* Sharing */}
        <section>
          <h4 className="section-heading">Information Sharing</h4>
          <ul className="policy-list">
            <li>Shared with airlines or service providers to complete bookings.</li>
            <li>Shared with payment processors for secure transactions.</li>
            <li>Disclosed if required by law or legal obligation.</li>
            <li className="highlight">We do not sell or rent your personal data.</li>
          </ul>
        </section>

        {/* Cookies */}
        <section>
          <h4 className="section-heading">Cookies & Tracking</h4>
          <ul className="policy-list">
            <li>We use cookies to improve website performance and user experience.</li>
            <li>You can disable cookies through your browser settings.</li>
          </ul>
        </section>

        {/* Data Security */}
        <section>
          <h4 className="section-heading">Data Security</h4>
          <ul className="policy-list">
            <li>We implement industry-standard security measures.</li>
            <li>However, no system can guarantee 100% security.</li>
          </ul>
        </section>

        {/* Data Retention */}
        <section>
          <h4 className="section-heading">Data Retention</h4>
          <ul className="policy-list">
            <li>We retain your data only as long as necessary for service and legal purposes.</li>
          </ul>
        </section>

        {/* Rights */}
        <section>
          <h4 className="section-heading">Your Rights</h4>
          <ul className="policy-list">
            <li>You may request access, correction, or deletion of your data.</li>
            <li>You can opt out of marketing communications at any time.</li>
          </ul>
        </section>

        {/* Consent */}
        <section>
          <h4 className="section-heading">User Consent</h4>
          <ul className="policy-list">
            <li>By using our website, you agree to this Privacy Policy.</li>
          </ul>
        </section>

        {/* Updates */}
        <section>
          <h4 className="section-heading">Policy Updates</h4>
          <ul className="policy-list">
            <li>We may update this policy from time to time.</li>
            <li>Changes will be posted with a revised effective date.</li>
          </ul>
        </section>

        {/* Disclaimer */}
        <section>
          <h4 className="section-heading">Disclaimer</h4>
          <ul className="policy-list">
            <li>Travel O Care is an independent travel assistance service provider.</li>
            <li>We are not affiliated with any airline or travel provider.</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h4 className="section-heading">Contact Us</h4>
          <ul className="policy-list">
            <li>
              Email:{" "}
              <a href="mailto:support@travelocare.com">
                support@travelocare.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+16176694209">
                +1 617 669 4209
              </a>
            </li>
          </ul>
        </section>

      </div>
    </>
  );
};

export default Policy;