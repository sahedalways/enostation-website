'use client';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal';
import './FAQ.css';

const FAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(0);

    const items = t('faq.items', { returnObjects: true });

    return (
        <section id="faq" className="faq__section">
            <ScrollReveal direction="none">
                <h5>{t('faq.subtitle')}</h5>
                <h2>{t('faq.title')}</h2>
                <p className="section-subtitle">Quick answers to common questions about working with us.</p>
            </ScrollReveal>

            <div className="container faq__container">
                {items.map((item, index) => {
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
