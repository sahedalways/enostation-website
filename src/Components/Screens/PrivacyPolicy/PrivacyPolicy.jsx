import React from "react";
import "./privacyPolicy.css";

const PrivacyPolicy = () => (
  <section className="privacy-policy">
    <div className="container privacy-policy__container">
      <header className="privacy-policy__header">
        <p className="privacy-policy__eyebrow">
          <span /> PRIVACY &amp; TRUST
        </p>
        <h1>Privacy Policy</h1>
        <p className="privacy-policy__subtitle">
          How Enostation handles the information you share with us.
        </p>
        <div className="privacy-policy__meta">
          <span>Last updated: August 12, 2026</span>
          <span>Enostation </span>
        </div>
      </header>

      <article className="privacy-policy__content glass-card">
        <div className="privacy-policy__intro">
          <span>Our commitment</span>
          <p>
            Enostation respects your privacy. This policy explains what
            information we collect, how we use it, and the choices available to
            you when you use our website or contact us.
          </p>
        </div>

        <section className="privacy-policy__section">
          <span className="privacy-policy__section-number">01</span>
          <div>
            <h2>Information We Collect</h2>
            <p>
              We may collect information you choose to provide, such as your
              name, company name, email address, phone number, project
              requirements, and estimated budget when you submit an inquiry or
              communicate with us.
            </p>
          </div>
        </section>

        <section className="privacy-policy__section">
          <span className="privacy-policy__section-number">02</span>
          <div>
            <h2>How We Use Your Information</h2>
            <p>
              We use this information to respond to inquiries, prepare project
              estimates, provide our services, and improve our website and
              communications.
            </p>
          </div>
        </section>

        <section className="privacy-policy__section">
          <span className="privacy-policy__section-number">03</span>
          <div>
            <h2>Cookies and Analytics</h2>
            <p>
              Our website may use essential browser storage, cookies, or
              analytics tools to understand site usage and improve performance.
              You can manage cookies through your browser settings.
            </p>
          </div>
        </section>

        <section className="privacy-policy__section">
          <span className="privacy-policy__section-number">04</span>
          <div>
            <h2>Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share information
              only with service providers needed to operate our website or
              deliver services, when required by law, or with your consent.
            </p>
          </div>
        </section>

        <section className="privacy-policy__section">
          <span className="privacy-policy__section-number">05</span>
          <div>
            <h2>Data Retention and Security</h2>
            <p>
              We retain information only as long as necessary for the purposes
              described above or to meet legal and business obligations. We use
              reasonable safeguards to protect information, but no method of
              online transmission or storage is completely secure.
            </p>
          </div>
        </section>

        <section className="privacy-policy__section">
          <span className="privacy-policy__section-number">06</span>
          <div>
            <h2>Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information, subject to applicable law. You may also opt
              out of non-essential communications at any time.
            </p>
          </div>
        </section>

        <section className="privacy-policy__section privacy-policy__section--contact">
          <span className="privacy-policy__section-number">07</span>
          <div>
            <h2>Contact Us</h2>
            <p>
              For privacy questions or requests, email us at{" "}
              <a href="mailto:hello.enostation@gmail.com">
                hello.enostation@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </article>
    </div>
  </section>
);

export default PrivacyPolicy;
