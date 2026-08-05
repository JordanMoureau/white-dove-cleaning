"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdaqkwge";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setError(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-info">
          <h2>Reach out & book your first cleaning</h2>
          <p>
            Welcome to White Dove Cleaning NW! We provide top-notch home
            cleaning services in Pierce County and Spokane, WA, including the
            areas of Puyallup, Tacoma, and Spokane. Contact us today for a free
            quote and experience the difference in home cleaning services!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <span>(123) 456-7890</span>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <span>info@whitedove.com</span>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <span>Serving Spokane & Coeur D&apos;Alene</span>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-sparkle" aria-hidden="true">
            <span>✦</span>
            <span>✦</span>
          </div>

          {submitted ? (
            <div className="contact-success">
              <h3>Message sent! 🕊️</h3>
              <p>We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <>
              <div className="contact-form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="phone">Your Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(509) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Your Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you need..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              {error && <p className="contact-error">{error}</p>}

              <button
                className="contact-submit-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}
