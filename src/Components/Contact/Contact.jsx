"use client";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { FiDollarSign } from "react-icons/fi";
import "./contact.css";
import Modal from "../common/Modal";
import ScrollReveal from "../common/ScrollReveal";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BUDGET_OPTIONS = [
  "< $2,500",
  "$2,500 - $5,000",
  "$5,000 - $15,000",
  "$15,000+",
];

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [sending, setSending] = useState(false);

  const [selectedBudget, setSelectedBudget] = useState("$2,500 - $5,000");
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Web & SaaS Application",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formValues.name.trim()) newErrors.name = "Full name is required";
    if (!formValues.email.trim()) {
      newErrors.email = "Valid email is required";
    } else if (!EMAIL_PATTERN.test(formValues.email)) {
      newErrors.email = "Valid email is required";
    }
    if (formValues.message.trim().length < 10) {
      newErrors.message = "Please provide details (minimum 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const formData = new FormData(e.target);
    formData.append("budget", selectedBudget);
    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xnngnynw", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setModalType("success");
        setModalOpen(true);
        setFormValues({
          name: "",
          email: "",
          phone: "",
          projectType: "Web & SaaS Application",
          message: "",
        });
      } else {
        setModalType("error");
        setModalOpen(true);
      }
    } catch (error) {
      setModalType("error");
      setModalOpen(true);
      console.error("Error sending message:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <ScrollReveal>
        <h5>Let's Build Something Great</h5>
        <h2>Start Your Agency Project</h2>
        <p className="section-subtitle">
          Get in touch to discuss your project — we typically respond within 24
          hours.
        </p>
      </ScrollReveal>

      <div className="container contact__container">
        <ScrollReveal direction="right" className="contact__options">
          <div className="contact-card-info glass-card">
            <h3>Direct Agency Channels</h3>
            <p>
              Prefer instant communication? Connect directly with our lead
              engineering team.
            </p>
          </div>

          <article className="contact__option glass-card">
            <AiOutlineMail className="contact__option__icon" />
            <h4>Email Us</h4>
            <h5>hello.enostation@gmail.com</h5>
            <a href="mailto:hello.enostation@gmail.com">Send Direct Email</a>
          </article>

          <article className="contact__option glass-card">
            <BsWhatsapp className="contact__option__icon" />
            <h4>WhatsApp Inquiry</h4>
            <h5>+8801616 516753</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8809638616438"
              rel="noreferrer"
              target="_blank"
            >
              Chat on WhatsApp
            </a>
          </article>

          <article className="contact__option glass-card">
            <RiMessengerLine className="contact__option__icon" />
            <h4>Facebook Messenger</h4>
            <h5>Enostation Agency</h5>
            <a
              href="https://www.m.me/sahedstar"
              rel="noreferrer"
              target="_blank"
            >
              Open Messenger
            </a>
          </article>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.1}>
          <form
            className="agency-inquiry-form glass-card"
            onSubmit={handleSubmit}
            noValidate
          >
            <h3>Project Details & Budget</h3>
            <p className="form-subtitle">
              Fill out the brief below and receive a project estimate within 24
              hours.
            </p>

            <div className="budget-selection-wrapper">
              <label className="input-label">
                <FiDollarSign /> Estimated Project Budget
              </label>
              <div className="budget-pills-grid">
                {BUDGET_OPTIONS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`budget-pill ${selectedBudget === b ? "active" : ""}`}
                    onClick={() => setSelectedBudget(b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-grid-row">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name or Company *"
                  value={formValues.name}
                  onChange={handleChange}
                  className={errors.name ? "form-error" : ""}
                  required
                />
                {errors.name && (
                  <small className="form-error-msg">{errors.name}</small>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email *"
                  value={formValues.email}
                  onChange={handleChange}
                  className={errors.email ? "form-error" : ""}
                  required
                />
                {errors.email && (
                  <small className="form-error-msg">{errors.email}</small>
                )}
              </div>
            </div>

            <div className="form-grid-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp Number (Optional)"
                value={formValues.phone}
                onChange={handleChange}
              />

              <select
                name="projectType"
                value={formValues.projectType}
                onChange={handleChange}
              >
                <option value="Web & SaaS Application">
                  Web & SaaS Application
                </option>
                <option value="AI Automation & Custom LLMs">
                  AI Automation & Custom LLMs
                </option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="UI/UX & Product Design">
                  UI/UX & Product Design
                </option>
                <option value="Cloud DevOps & Maintenance">
                  Cloud DevOps & Maintenance
                </option>
              </select>
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your project goals, timelines, or requirements... *"
              value={formValues.message}
              onChange={handleChange}
              className={errors.message ? "form-error" : ""}
              required
            ></textarea>
            {errors.message && (
              <small className="form-error-msg">{errors.message}</small>
            )}

            <button
              type="submit"
              className="btn btn-primary submit-inquiry-btn"
              disabled={sending}
            >
              {sending ? "Sending Inquiry..." : "Submit Project Request"}{" "}
              <AiOutlineSend />
            </button>
          </form>
        </ScrollReveal>
      </div>

      <Modal
        open={modalOpen}
        type={modalType}
        message={
          modalType === "success"
            ? "Thank you! Your agency project inquiry has been received. We will contact you within 24 hours."
            : "Something went wrong while sending your request. Please try contacting us via WhatsApp or Email."
        }
        closeLabel="Close"
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default Contact;
