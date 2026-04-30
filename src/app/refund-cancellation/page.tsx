import { Hero } from "../component";

const TermsConditions = () => {
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
            By using the services of <strong>Travel O Care</strong>, you agree to the following terms and conditions.
          </p>
        </div>

        {/* Service Scope */}
        <section>
          <h4 className="section-heading">Service Scope</h4>
          <ul className="policy-list">
            <li>Travel O Care provides travel assistance and booking support services.</li>
            <li>We are not the airline, hotel, or direct travel service provider.</li>
            <li>All bookings are subject to the terms and conditions of the respective airline or provider.</li>
          </ul>
        </section>

        {/* Pricing */}
        <section>
          <h4 className="section-heading">Pricing & Availability</h4>
          <ul className="policy-list">
            <li>Prices and availability may change without prior notice.</li>
            <li>Final pricing is confirmed at the time of booking.</li>
          </ul>
        </section>

        {/* Customer Responsibility */}
        <section>
          <h4 className="section-heading">Customer Responsibility</h4>
          <ul className="policy-list">
            <li>Customers must provide accurate and complete travel information.</li>
            <li>We are not responsible for issues caused by incorrect details provided by the customer.</li>
          </ul>
        </section>

        {/* Payments */}
        <section>
          <h4 className="section-heading">Payments</h4>
          <ul className="policy-list">
            <li>Payments are securely processed through trusted third-party payment providers.</li>
            <li>We do not store full payment details.</li>
          </ul>
        </section>

        {/* Cancellation */}
        <section>
          <h4 className="section-heading">Cancellations & Refunds</h4>
          <ul className="policy-list">
            <li>All cancellations and refunds are subject to airline fare rules and policies.</li>
            <li className="highlight">Service fees charged by Travel O Care are non-refundable.</li>
            <li>Refunds are not guaranteed and depend on airline or provider policies.</li>
          </ul>
        </section>

        {/* Changes */}
        <section>
          <h4 className="section-heading">Changes & Modifications</h4>
          <ul className="policy-list">
            <li>Changes to bookings are subject to airline rules.</li>
            <li>Additional charges may apply depending on fare conditions.</li>
          </ul>
        </section>

        {/* Liability */}
        <section>
          <h4 className="section-heading">Liability Disclaimer</h4>
          <ul className="policy-list">
            <li>Travel O Care is not responsible for delays, cancellations, or schedule changes by airlines.</li>
            <li>We act only as a facilitator for booking assistance.</li>
          </ul>
        </section>

        {/* Disputes */}
        <section>
          <h4 className="section-heading">Dispute Resolution</h4>
          <ul className="policy-list">
            <li>Any disputes must be reported within 24 hours of booking.</li>
          </ul>
        </section>

        {/* Acceptance */}
        <section>
          <h4 className="section-heading">Acceptance of Terms</h4>
          <ul className="policy-list">
            <li>By using our website and services, you agree to these Terms and Conditions.</li>
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

      </div>
    </>
  );
};

export default TermsConditions;