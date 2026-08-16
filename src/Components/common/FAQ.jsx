'use client';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';
import './FAQ.css';

const FAQ_ITEMS = [
    {
        question: 'How much does a website or app cost?',
        answer: 'Pricing depends on project requirements, features and complexity. Simple landing pages start from $150, web/mobile apps from $500, and complex platforms like SaaS or ERP are custom quoted. Share your requirements for an exact estimate.'
    },
    {
        question: 'How long does a project take?',
        answer: 'Simple projects: 3-7 days. Medium projects: 1-3 weeks. Large platforms (SaaS/ERP): 1-3+ months. Timelines are finalized after requirement analysis.'
    },
    {
        question: 'What are the payment terms?',
        answer: '35% advance before starting, 35% milestone payment at 50% completion, and the remaining 30% after final delivery.'
    },
    {
        question: 'Do you provide support after delivery?',
        answer: 'Yes. Every project includes free support after delivery. Ongoing maintenance and feature updates are also available.'
    },
    {
        question: 'Can you work on an existing project?',
        answer: 'Yes. We can take over, fix, upgrade or complete existing projects including code reviews and performance improvements.'
    },
    {
        question: 'How do we communicate during the project?',
        answer: 'We can communicate via WhatsApp, Messenger, email or scheduled video calls. You get regular progress updates at every milestone.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="faq__section">
            <ScrollReveal direction="none">
                <h5>Common Questions</h5>
                <h2>Frequently Asked Questions</h2>
                <p className="section-subtitle">Quick answers to common questions about working with us.</p>
            </ScrollReveal>

            <div className="container faq__container">
                {FAQ_ITEMS.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <ScrollReveal key={index} delay={index * 0.06}>
                            <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                                <button
                                    type="button"
                                    className="faq__question"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.question}</span>
                                    <FiChevronDown className="faq__icon" />
                                </button>
                                {isOpen && <div className="faq__answer">{item.answer}</div>}
                            </div>
                        </ScrollReveal>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;
