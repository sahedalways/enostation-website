import React from 'react';
import { FiClipboard, FiLayout, FiCode, FiCheckCircle, FiTruck } from 'react-icons/fi';
import ScrollReveal from '../common/ScrollReveal';
import './Process.css';

const AGENCY_STEPS = [
    { label: 'Stage 01', title: 'Discovery', description: 'We analyze your requirements, goals, and budget to plan the right solution.' },
    { label: 'Stage 02', title: 'Design', description: 'Wireframes and UI/UX design so you can see the product before development.' },
    { label: 'Stage 03', title: 'Development', description: 'Milestone-based coding with regular progress updates and transparency.' },
    { label: 'Stage 04', title: 'Testing & QA', description: 'Thorough testing for bugs, performance, and cross-device compatibility.' },
    { label: 'Stage 05', title: 'Delivery & Support', description: 'Deployment, handover with documentation, and ongoing support.' }
];

const ICONS = [FiClipboard, FiLayout, FiCode, FiCheckCircle, FiTruck];

const Process = () => {
    return (
        <section id="process" className="process__section section--alt">
            <ScrollReveal direction="none">
                <p className="section-eyebrow">How We Build</p>
                <h2>Our 5-Step Agency Workflow</h2>
                <p className="section-subtitle">Every project moves through the same build track — no skipped steps, no guesswork.</p>
            </ScrollReveal>

            <div className="container process__container">
                {AGENCY_STEPS.map((step, index) => {
                    const Icon = ICONS[index % ICONS.length];
                    return (
                        <ScrollReveal key={step.title} delay={index * 0.1}>
                            <article className="process__step">
                                <span className="process__border-arc" aria-hidden="true" />
                                <span className="process__ghost-num">0{index + 1}</span>
                                <div className="process__icon">
                                    <Icon />
                                </div>
                                <div className="process__step-label">{step.label}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </article>
                        </ScrollReveal>
                    );
                })}
            </div>
        </section>
    );
};

export default Process;
