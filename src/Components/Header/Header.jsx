import Image from "next/image";
import CTA from "./CTA";
import ScrollReveal from "../common/ScrollReveal";
import "./header.css";
import { FiCpu, FiGlobe } from "react-icons/fi";
import FeaturedClients from "../FeaturedClients/FeaturedClients";

const Header = () => {
  const agencyStats = [
    { number: "50+", label: "Delivered Projects" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "15+", label: "Global Clients" },
    { number: "24/7", label: "Dedicated Support" },
  ];

  const techPills = [
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "Python AI",
    "Tailwind",
    "Supabase",
  ];

  return (
    <header id="header" className="agency-hero-section">
      <div className="hero-mesh-bg" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />

      <div className="container agency-hero-container">
        <div className="hero-content-wrapper">
          <div className="agency-badge">
            <span className="badge-dot"></span>
            <span>Digital Solutions That Drive Growth</span>
          </div>

          <h1 className="agency-hero-title">
            Where Ideas <br />
            <span className="gradient-text gradient-text--animated">
              Become Innovation
            </span>
          </h1>

          <div className="agency-hero-sub">
            <div className="typical-wrapper">
              Custom Web & SaaS Engineering
            </div>
          </div>

          <p className="agency-hero-description">
            Enostation transforms ambitious ideas into scalable digital
            products. We partner with startups and enterprises to design,
            engineer, and deploy high-performance web applications and
            intelligent AI software.
          </p>

          <CTA />

          <ScrollReveal delay={0.35}>
            <div className="hero-tech-pills">
              <span className="tech-pill-label">Core Technologies:</span>
              <div className="pills-list">
                {techPills.map((tech) => (
                  <span key={tech} className="tech-pill-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="hero-visual-wrapper">
          <div className="visual-card-glass">
            <div className="visual-glow-ring" aria-hidden="true" />
            <div className="visual-brand-circle">
              <Image
                id="pic"
                src="/assets/enostation.jpeg"
                alt="Enostation logo"
                width={190}
                height={190}
                priority
              />
            </div>
            <div className="floating-badge badge-top-right">
              <FiCpu className="badge-icon" />
              <div>
                <strong>AI Driven</strong>
                <small>Automation Ready</small>
              </div>
            </div>
            <div className="floating-badge badge-bottom-left">
              <FiGlobe className="badge-icon" />
              <div>
                <strong>Global Scale</strong>
                <small>Enterprise Grade</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturedClients />

      <ScrollReveal delay={0.2}>
        <div className="agency-stats-banner">
          <div className="container stats-banner-grid">
            {agencyStats.map((stat) => (
              <div key={stat.label} className="stat-banner-item">
                <h3 className="stat-banner-number">{stat.number}</h3>
                <p className="stat-banner-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </header>
  );
};

export default Header;
