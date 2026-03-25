"use client";
import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { contactInitialValues } from "../utils/data";
import { contactValidationSchema } from "../utils/schema";
import { Hero } from "../component";

const Contact = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (result.status === 201) {
          router.push("/thank-you");
        } else {
          alert("Something went wrong. Please try again.");
        }

        setSubmitting(false);
      } catch (error) {
        setSubmitting(false);
      }
    },
  });

  const { handleChange, errors, handleSubmit, isSubmitting } = formik;

  return (
    <>
      <Hero
        title="Contact Us"
        description="We’re here to help you with your travel plans."
      />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">

            {/* LEFT SIDE */}
            <div className="col-lg-6">

              {/* MAP */}
              <div className="mb-4 rounded-4 overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.9044748527463!2d-106.94323151635325!3d44.78275277176496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335f1770937b28d%3A0x38aabd600a7d02ad!2s1309%20Coffeen%20Ave!5e0!3m2!1sen!2sin!4v1773206702176!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>

              {/* CONTACT INFO */}
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h5 className="fw-bold mb-3">Get in Touch</h5>

                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle p-3 me-3">📧</div>
                  <div>
                    <small className="text-muted">Email</small>
                    <div>
                      <a href="mailto:info@travelocare.com" className="fw-semibold text-decoration-none">
                        info@travelocare.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle p-3 me-3">📞</div>
                  <div>
                    <small className="text-muted">Phone</small>
                    <div>
                      <a href="tel:+16176694209" className="fw-semibold text-decoration-none">
                        +1 6176694209
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-3 bg-light rounded">
                  <small className="text-muted">
                    Our support team usually responds within 24 hours.
                  </small>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="col-lg-6">
              <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">

                <h4 className="fw-bold mb-4">Send a Message</h4>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    <div className="col-12">
                      <label className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <small className="text-danger">{errors.phone}</small>
                      )}
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        name="message"
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-dark w-100 py-2 mt-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;