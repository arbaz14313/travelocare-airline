import { Hero } from "../component";

const RefundCancellation = () => {
  return (
    <>
      <Hero
        title="Refund & Cancellation Policy"
        description="Clear and transparent cancellation and refund terms."
      />

      <div className="container py-5 refund-policy">

        {/* Header */}
        <div className="mb-5">
          <h2 className="main-heading">Refund & Cancellation Policy</h2>
          <p className="small-text">
            Please review our refund and cancellation terms carefully before booking.
          </p>
        </div>

        {/* Table */}
        <section>
          <h4 className="section-heading">Standard Cancellation Schedule</h4>

          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Cancellation Period</th>
                  <th>Refund</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>60+ Days</td>
                  <td>Full Refund</td>
                  <td>10% Admin Fee</td>
                </tr>
                <tr>
                  <td>45 – 59 Days</td>
                  <td>80% Refund</td>
                  <td>20% Fee</td>
                </tr>
                <tr>
                  <td>15 – 44 Days</td>
                  <td>75% Refund</td>
                  <td>25% Fee</td>
                </tr>
                <tr>
                  <td>7 – 14 Days</td>
                  <td>50% Refund</td>
                  <td>50% Fee</td>
                </tr>
                <tr>
                  <td>Less than 7 Days</td>
                  <td className="text-danger fw-semibold">No Refund</td>
                  <td>100% Fee</td>
                </tr>
                <tr>
                  <td>No-Show</td>
                  <td className="text-danger fw-semibold">No Refund</td>
                  <td>100% Fee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sections */}
        <section>
          <h4 className="section-heading">Single-Day Tours & Activities</h4>
          <ul className="policy-list">
            <li>Cancellations must be made at least 7 days in advance.</li>
            <li>Late cancellations are not eligible for refunds.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Refund Processing</h4>
          <ul className="policy-list">
            <li>Refunds are processed within 15–45 business days.</li>
            <li>Processing time depends on your bank and payment method.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Unutilized Services</h4>
          <ul className="policy-list">
            <li>No refunds for unused services.</li>
            <li>Includes meals, entry tickets, and optional tours.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Force Majeure</h4>
          <ul className="policy-list">
            <li>Applies to natural disasters, pandemics, or political unrest.</li>
            <li>Refunds are handled on a case-by-case basis.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Important Exclusions</h4>
          <ul className="policy-list">
            <li>Flights, hotels, and trains follow provider policies.</li>
            <li>Peak season bookings may have stricter terms.</li>
            <li className="highlight">Service fees are strictly non-refundable.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Travel Insurance</h4>
          <ul className="policy-list">
            <li>Strongly recommended for all travelers.</li>
            <li>Covers medical emergencies and unexpected delays.</li>
          </ul>
        </section>

        <section>
          <h4 className="section-heading">Disclaimer</h4>
          <ul className="policy-list">
            <li>TravelOcare is an independent travel concierge service.</li>
            <li>We are not directly affiliated with airlines.</li>
            <li>Pricing may change due to third-party updates.</li>
          </ul>
        </section>

      </div>
    </>
  );
};

export default RefundCancellation;