"use client";
import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import CTA from "./CTA";
import ScrollReveal from "../common/ScrollReveal";
import "./header.css";
import { FiCpu, FiGlobe } from "react-icons/fi";
import FeaturedClients from "../FeaturedClients/FeaturedClients";

const LOGO = "/assets/enostation.jpeg";

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
          <ScrollReveal direction="down">
            <div className="agency-badge">
              <span className="badge-dot"></span>
              <span>Digital Solutions That Drive Growth</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="right">
            <h1 className="agency-hero-title">
              Where Ideas <br />
              <span className="gradient-text gradient-text--animated">
                Become Innovation
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="agency-hero-sub">
              <TypeAnimation
                sequence={[
                  "Custom Web & SaaS Engineering",
                  2500,
                  "AI Automation & Custom LLMs",
                  2500,
                  "Mobile Application Development",
                  2500,
                  "Enterprise Cloud Architecture",
                  2500,
                ]}
                repeat={Infinity}
                wrapper="div"
                className="typical-wrapper"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="agency-hero-description">
              Enostation transforms ambitious ideas into scalable digital
              products. We partner with startups and enterprises to design,
              engineer, and deploy high-performance web applications and
              intelligent AI software.
            </p>
          </ScrollReveal>

          <CTA />

          <ScrollReveal delay={0.35}>
            <div className="hero-tech-pills">
              <span className="tech-pill-label">Core Technologies:</span>
              <div className="pills-list">
                {techPills.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    className="tech-pill-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.05, duration: 0.4 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15} direction="scale">
          <div className="hero-visual-wrapper">
            <div className="visual-card-glass">
              <div className="visual-glow-ring" aria-hidden="true" />
              <div className="visual-brand-circle">
                <img id="pic" src={LOGO} alt="Enostation Digital Agency" />
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
        </ScrollReveal>
      </div>

      <FeaturedClients />

      <ScrollReveal delay={0.2}>
        <div className="agency-stats-banner">
          <div className="container stats-banner-grid">
            {agencyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-banner-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3 className="stat-banner-number">{stat.number}</h3>
                <p className="stat-banner-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </header>
  );
};

export default Header;
