import { Hero } from "../component";

const RefundCancellation = () => {
  return (
    <>
      <Hero
        title="Refund & Cancellation Policy"
        description="Flexible travel planning with transparent terms and conditions."
      />

      <div className="container py-5">
        {/* Intro */}
        <div className="mb-5">
          <h2 className="fw-bold mb-3">Refund & Cancellation Policy</h2>
          <p className="text-muted">
            At <strong>TravelOCare</strong>, we aim to provide flexibility while
            maintaining commitments with our global partners. Please review the
            following terms before confirming your booking.
          </p>
        </div>

        {/* Cancellation Table */}
        <div className="card shadow-sm mb-5">
          <div className="card-body">
            <h4 className="fw-bold mb-4">Standard Cancellation Schedule</h4>

            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Cancellation Period</th>
                    <th>Refund Amount</th>
                    <th>Fees Applied</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>60+ Days</td>
                    <td>Full Refund</td>
                    <td>10% Administrative Fee</td>
                  </tr>
                  <tr>
                    <td>45 – 59 Days</td>
                    <td>80% Refund</td>
                    <td>20% Cancellation Fee</td>
                  </tr>
                  <tr>
                    <td>15 – 44 Days</td>
                    <td>75% Refund</td>
                    <td>25% Cancellation Fee</td>
                  </tr>
                  <tr>
                    <td>7 – 14 Days</td>
                    <td>50% Refund</td>
                    <td>50% Cancellation Fee</td>
                  </tr>
                  <tr>
                    <td>Less than 7 Days</td>
                    <td className="text-danger fw-bold">No Refund</td>
                    <td>100% Cancellation Fee</td>
                  </tr>
                  <tr>
                    <td>No-Show</td>
                    <td className="text-danger fw-bold">No Refund</td>
                    <td>100% Cancellation Fee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="row g-4">
          {/* Single Day Tours */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Single-Day Tours & Activities</h5>
                <p className="text-muted">
                  Cancellations must be made at least 7 days in advance to be
                  eligible for a refund.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Processing */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Refund Processing</h5>
                <p className="text-muted">
                  Refunds are processed within <strong>15–45 business days</strong>,
                  depending on your bank and payment method.
                </p>
              </div>
            </div>
          </div>

          {/* Unutilized Services */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Unutilized Services</h5>
                <p className="text-muted">
                  No refunds will be provided for unused services such as meals,
                  activities, or entry tickets.
                </p>
              </div>
            </div>
          </div>

          {/* Force Majeure */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Force Majeure</h5>
                <p className="text-muted">
                  In cases like natural disasters, pandemics, or political
                  unrest, refunds are handled individually based on supplier
                  policies.
                </p>
              </div>
            </div>
          </div>

          {/* Important Exclusions */}
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Important Exclusions</h5>
                <ul className="text-muted">
                  <li>
                    Flights, trains, and hotels follow their own provider policies.
                  </li>
                  <li>
                    Peak season or premium bookings may have stricter rules.
                  </li>
                  <li>
                    <strong>Service fees are non-refundable</strong> under all conditions.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-success">
              <div className="card-body">
                <h5 className="fw-bold text-success">Travel Insurance</h5>
                <p className="text-muted">
                  We strongly recommend purchasing travel insurance to protect
                  against medical emergencies, delays, or cancellations.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-warning">
              <div className="card-body">
                <h5 className="fw-bold text-warning">
                  Independent Concierge Disclaimer
                </h5>
                <p className="text-muted">
                  TravelOCare is an independent travel concierge service. We are
                  not directly affiliated with airlines. Pricing and availability
                  may change based on third-party providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundCancellation;