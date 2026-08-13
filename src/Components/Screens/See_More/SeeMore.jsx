'use client';
import React from 'react';
import Link from 'next/link';
import './SeeMore.css';
import { HashLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';
import { usePortfolioProject } from '../../../hooks/usePortfolioProject';

const SeeMore = () => {
    const { t } = useTranslation();
    const { data: projects = [], isLoading } = usePortfolioProject();

    // Group projects by category dynamically
    const categories = [...new Set(projects.map((p) => p.category))];

    // Optional: Custom category title formatting
    const formatCategoryTitle = (category) => {
        return t(`portfolio.filter.${category}`, { defaultValue: category });
    };

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
                <HashLoader color="#7EC834" loading={isLoading} size={100} />
            </div>
        );
    }

    return (
        <>
            <section id="portfolio">
                <h5>{t('portfolio.subtitle')}</h5>
                <h2>{t('portfolio.title')}</h2>

                {/* Dynamically render categories */}
                {categories.map((category) => {
                    const filteredProjects = projects.filter((p) => p.category === category);
                    return (
                        <div key={category}>
                            <h3 className="project__category__title">
                                {formatCategoryTitle(category)}
                            </h3>

                            <div className="container portfolio__container">
                                {filteredProjects.map(({ id, image, title, github, demo }) => (
                                    <article
                                        key={id}
                                        data-aos="slide-left"
                                        className="portfolio__item"
                                    >
                                        <div className="portfolio__item__image">
                                            <img src={image} alt={title} />
                                            <h3>{title}</h3>
                                            <Link href={`/project-details/${id}`}>
                                                <h4 className="view__Details">{t('portfolio.view_details')}</h4>
                                            </Link>
                                        </div>

                                        <a
                                            href={github}
                                            className="btn"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            {t('portfolio.github')}
                                        </a>
                                        <a
                                            href={demo}
                                            className="btn btn-primary"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            {t('portfolio.live_demo')}
                                        </a>
                                    </article>
                                ))}
                            </div>
                        </div>
                    );
                })}

                <div className="seeMore__btn">
                    <a
                        href="https://github.com/sahedalways"
                        className="btn"
                        rel="noreferrer"
                        target="_blank"
                    >
                        {t('portfolio.more_projects')}
                    </a>
                </div>
            </section>
        </>
    );
};

export default SeeMore;
