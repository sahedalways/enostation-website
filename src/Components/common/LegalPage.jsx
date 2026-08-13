import React from 'react';
import './legalPage.css';

const LegalPage = ({ eyebrow, title, subtitle, introduction, sections }) => (
    <section className="legal-page">
        <div className="container legal-page__container">
            <header className="legal-page__header">
                <p className="legal-page__eyebrow"><span /> {eyebrow}</p>
                <h1>{title}</h1>
                <p className="legal-page__subtitle">{subtitle}</p>
                <div className="legal-page__meta">
                    <span>Last updated: August 12, 2026</span>
                    <span>Enostation Digital Agency</span>
                </div>
            </header>

            <article className="legal-page__content glass-card">
                <div className="legal-page__intro">
                    <span>Please read carefully</span>
                    <p>{introduction}</p>
                </div>

                {sections.map(({ title: sectionTitle, content }, index) => (
                    <section className="legal-page__section" key={sectionTitle}>
                        <span className="legal-page__section-number">{String(index + 1).padStart(2, '0')}</span>
                        <div>
                            <h2>{sectionTitle}</h2>
                            <p>{content}</p>
                        </div>
                    </section>
                ))}
            </article>
        </div>
    </section>
);

export default LegalPage;
