import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiMail } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../common/ScrollReveal";
import "./footer.css";

const LOGO = "/assets/enostation-80.png";

const Footer = () => {
  return (
    <>
      <ScrollReveal direction="none">
        <section className="footer-cta-banner">
          <div className="container footer-cta-inner">
            <div className="footer-cta-text">
              <h2>Ready to Build Something Extraordinary?</h2>
              <p>
                Let's turn your vision into a high-performing digital product.
                Schedule a free strategy call today.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary footer-cta-btn">
              Start a Project <FiArrowRight />
            </Link>
          </div>
        </section>
      </ScrollReveal>

      <footer className="agency-footer">
        <div className="container agency-footer-container">
          <div className="footer-brand-col">
            <Link href="/" className="agency-footer-logo">
              <Image
                src={LOGO}
                alt="Enostation logo"
                width={44}
                height={44}
                sizes="44px"
              />
              <div className="agency-footer-title">
                <span>ENOSTATION</span>
                <small></small>
              </div>
            </Link>
            <p className="footer-tagline">Where Ideas Become Innovation</p>
          </div>

          <div className="footer-links-col">
            <h3>Navigation</h3>
            <ul className="permalinks">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">Case Studies</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/refund-policy">Refund Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="footer-services-col">
            <h3>Services</h3>
            <ul className="permalinks">
              <li>
                <Link href="/services">Web & SaaS Development</Link>
              </li>
              <li>
                <Link href="/services">AI Automation & LLMs</Link>
              </li>
              <li>
                <Link href="/services">Mobile App Development</Link>
              </li>
              <li>
                <Link href="/services">Cloud DevOps</Link>
              </li>
              <li>
                <Link href="/services">UI/UX Design Systems</Link>
              </li>
            </ul>
          </div>

          <div className="footer-social-col">
            <h3>Connect With Us</h3>
            <div className="footer__socials">
              <a
                href="https://www.linkedin.com/in/sahedstar"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/sahedalways"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/sahedstar"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <FaFacebookSquare />
              </a>
            </div>

            <div className="footer-newsletter">
              <p className="newsletter-label">Stay Updated</p>
              <div className="newsletter-input-wrap">
                <FiMail className="newsletter-icon" />
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  className="newsletter-input"
                />
                <button type="button" className="newsletter-btn" aria-label="Subscribe to newsletter">
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
