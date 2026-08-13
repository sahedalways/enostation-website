"use client";
import React from "react";
import { BsLightningChargeFill, BsShieldCheck } from "react-icons/bs";
import { FaCode, FaBrain } from "react-icons/fa";
import "./about.css";
import Link from "next/link";
import ScrollReveal from "../common/ScrollReveal";

const LOGO = "/assets/enostation.jpeg";

const About = () => {
  const agencyPillars = [
    {
      icon: <FaCode className="about__icon" />,
      title: "Modern Architecture",
      desc: "Clean, scalable React, Next.js & Laravel codebase optimized for performance and security.",
    },
    {
      icon: <FaBrain className="about__icon" />,
      title: "AI Automation Integration",
      desc: "Custom OpenAI/LLM integrations, AI chatbots, and intelligent workflow automation.",
    },
    {
      icon: <BsLightningChargeFill className="about__icon" />,
      title: "Rapid Agile Execution",
      desc: "Accelerated development cycles with transparent weekly sprint demos and updates.",
    },
    {
      icon: <BsShieldCheck className="about__icon" />,
      title: "Enterprise Guarantee",
      desc: "Dedicated post-launch maintenance, 99.9% uptime architecture, and 24/7 technical support.",
    },
  ];

  return (
    <section id="about" className="section--alt">
      <ScrollReveal className="about__section_heading">
        <h5>Why Choose Us</h5>
        <h2>Partner With Enostation Agency</h2>
        <p className="section-subtitle">
          A dedicated team focused on delivering measurable results for your
          business.
        </p>
      </ScrollReveal>

      <div className="container about__container">
        <ScrollReveal direction="scale" className="about__visual">
          <div className="about__visual__image glass-card">
            <div className="about__visual__glow" aria-hidden="true" />
            <img src={LOGO} alt="Enostation Digital Agency" />
            <div className="about__visual__overlay">
              <p>Where Ideas Become Innovation</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="about__content">
          <ScrollReveal direction="left">
            <div className="about__intro_block">
              <p className="intro-text">
                Enostation is a full-service software development agency. We
                craft high-converting web applications, robust SaaS platforms,
                cross-platform mobile apps, and custom AI systems tailored to
                accelerate business growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="about__pillars_grid">
            {agencyPillars.map((pillar, idx) => (
              <ScrollReveal
                key={pillar.title}
                delay={idx * 0.08}
                className="pillar-card glass-card"
              >
                <div className="pillar-icon-box">{pillar.icon}</div>
                <div>
                  <h5>{pillar.title}</h5>
                  <small>{pillar.desc}</small>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="about-actions">
              <Link href="/contact" className="btn btn-primary">
                Discuss Your Project
              </Link>
              <Link href="/services" className="btn btn-outline">
                Our Capabilities
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
