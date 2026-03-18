// pages/refund-cancellation.js

import { Hero } from "../component";

const RefundCancellation = () => {
  return (
    <>
      <Hero title="Refund and Cancellation Policy" description="" />

      <div className="container mt-4">
        <h1 className="mb-4">Refund and Cancellation Policy</h1>

        <div className="mt-4">
          <h5 className="title fw-bold">Cancellation Policy</h5>
          <p className="text">
            <i className="bi bi-dot"></i>
            If you wish to cancel your booking, you can do so through our website
            or by contacting our customer service. Cancellation fees may apply
            depending on the fare rules of your ticket.
          </p>
          <ul>
            <h6 className="fw-bold">24-Hour Risk-Free Cancellation:</h6>
            <li>
              <i className="bi bi-dot"></i>Cancellations made within 24 hours of
              booking are free of charge.
            </li>
            <li>
              <i className="bi bi-dot"></i>Cancellations made after 24 hours will
              incur a fee.
            </li>
            <li>
              <i className="bi bi-dot"></i>No cancellations are allowed 24 hours
              before departure.
            </li>

            <h6 className="fw-bold mt-4">Cancellation Fees:</h6>
            <li>
              <i className="bi bi-dot"></i> Cancellation fees may apply if the
              booking is canceled after the 24-hour risk-free period. The fee
              structure can vary based on the fare type and the time remaining
              before the departure date.{" "}
            </li>
            <li>
              {" "}
              <i className="bi bi-dot"></i> Example: Economy class tickets may
              incur higher fees compared to business or first-class tickets
            </li>

            <h6 className="fw-bold mt-4">
              {" "}
              Refundable vs. Non-Refundable Tickets:
            </h6>
            <li>
              <i className="bi bi-dot"></i> Refundable tickets allow customers to
              cancel their booking and receive a full refund minus any service
              fees.
            </li>
            <li>
              <i className="bi bi-dot"></i> Non-refundable tickets do not qualify
              for a monetary refund. However, customers may receive a credit or
              voucher for future travel, subject to applicable rebooking fees.
            </li>
            <h6 className="fw-bold mt-4"> Rebooking and Change Fees:</h6>
            <li>
              <i className="bi bi-dot"></i> Instead of canceling, customers may
              have the option to rebook or change their flight. Change fees may
              apply, and fare differences will be charged if the new flight is
              more expensive.
            </li>

            <h6 className="fw-bold mt-4">Special Circumstances:</h6>
            <li>
              <i className="bi bi-dot"></i>In cases of emergencies (e.g., medical
              emergencies, death of an immediate family member), customers may be
              eligible for a waiver of cancellation or change fees upon providing
              appropriate documentation
            </li>
            <li>
              <i className="bi bi-dot"></i> Policies for military personnel, where
              cancellations or changes may be accommodated with fewer or no
              penalties.
            </li>

            <h6 className="fw-bold mt-4"> Flight Cancellations by Airline:</h6>
            <li>
              {" "}
              <i className="bi bi-dot"></i>If the airline cancels the flight,
              customers are entitled to a full refund or rebooking on an
              alternative flight without additional charges.
            </li>

            <h6 className="fw-bold mt-4"> Travel Insurance:</h6>
            <li>
              {" "}
              <i className="bi bi-dot"></i> Recommending customers purchase travel
              insurance to cover unforeseen events that may necessitate
              cancellation
            </li>

            <h6 className="fw-bold mt-4"> Refund Processing Time:</h6>
            <li>
              {" "}
              <i className="bi bi-dot"></i> Refunds for eligible cancellations
              will be processed within a specific time frame, usually within 7-10
              business days.
            </li>
            <h6 className="fw-bold mt-4">Method of Refund:</h6>
            <li>
              {" "}
              <i className="bi bi-dot"></i> Refunds will be issued to the original
              form of payment. For bookings made through travel agencies or
              third-party platforms, customers should contact the agency directly.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h5 className="title fw-bold">Refund Policy</h5>
          <p className="text">
            <i className="bi bi-dot"></i>
            Refunds are processed according to the fare rules of your ticket.
            Please note that service fees and certain surcharges are
            non-refundable.
          </p>
          <ul>
            <li>
              <h6 className="fw-bold mt-4">Refund and Non-refund Process:</h6>
              <i className="bi bi-dot"></i>Refunds for refundable tickets are
              processed within 7-10 business days.
            </li>
            <li>
              <i className="bi bi-dot"></i>Non-refundable tickets are not eligible
              for refunds.
            </li>
            <li>
              <i className="bi bi-dot"></i>In case of flight cancellation by the
              airline, a full refund will be provided.
            </li>
          
            <h6 className=" fw-bold mt-4">Significant Schedule Changes:</h6>
            <li>
              {" "}
              <i className="bi bi-dot"></i> Customers are eligible for a full
              refund if there is a significant schedule change or delay (typically
              2 hours or more) and they choose not to travel.
            </li>
            <h6 className="fw-bold mt-4">Refund Processing Time:</h6>
            <li>
              <i className="bi bi-dot"></i> Refunds will be processed within a
              specific time frame, usually within 7-10 business days, but it can
              vary depending on the original payment method.
            </li>

            <h6 className="fw-bold mt-4">Refund Method:</h6>
            <li>
              <i className="bi bi-dot"></i> Refunds will be issued to the original
              form of payment. For bookings made through travel agencies or
              third-party platforms, refunds should be processed through the
              respective agencies.
            </li>

            <h6 className="fw-bold mt-4"> Service Fees and Taxes:</h6>
            <li>
              <i className="bi bi-dot"></i> ervice fees, booking fees, and certain
              surcharges may be non-refundable. Taxes may be refunded depending on
              the rules of the originating and destination countries.
            </li>

            <h6 className="fw-bold mt-4"> Partial Refunds:</h6>
            <li>
              {" "}
              <i className="bi bi-dot"></i>In some cases, a partial refund may be
              available if part of the journey has been completed, with the refund
              amount calculated based on the unused portion of the ticket.
            </li>

            <h6 className="fw-bold mt-4">Documentation Requirements:</h6>

            <li>
              <i className="bi bi-dot"></i> In case of refunds due to medical
              emergencies, death, or other special circumstances, appropriate
              documentation may be required to process the refund.
            </li>

            <h6 className="fw-bold mt-4">Refund Requests:</h6>
            <li>
              <i className="bi bi-dot"></i> Refund requests can be made through
              the airlines website, customer service, or the travel agency where
              the ticket was purchased.
            </li>

            <h6 className="fw-bold mt-4 ">Travel Insurance:</h6>
            <li className="mb-4">
              <i className="bi bi-dot"></i> Encouraging customers to purchase
              travel insurance to cover unforeseen events that may not be eligible
              for a refund.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RefundCancellation;
