'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './portfolio.css';
import { usePortfolioProject } from '../../hooks/usePortfolioProject';
import Skeleton from '../common/Skeleton';
import ScrollReveal from '../common/ScrollReveal';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const AGENCY_CATEGORIES = [
    { id: 'all', label: 'All Projects' },
    { id: 'webApp', label: 'Web / Software' },
    { id: 'reactFullApp', label: 'SaaS Platforms' },
    { id: 'mernApp', label: 'AI & Full Stack' },
    { id: 'mobileApp', label: 'Mobile Apps' },
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { data: projects = [], isLoading } = usePortfolioProject();
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        if (projects.length > 0) {
            if (selectedCategory === 'all') {
                setFilteredProjects(projects);
            } else {
                setFilteredProjects(projects.filter((item) => item.category === selectedCategory));
            }
        }
    }, [projects, selectedCategory]);

    const handleCategoryFilter = (catId) => {
        setSelectedCategory(catId);
    };

    return (
        <section id="portfolio">
            <ScrollReveal direction="none">
                <p className="section-eyebrow">Case Studies & Client Work</p>
                <h2>Featured Client Projects</h2>
                <p className="section-subtitle">Real results from real projects — see what we've built for businesses like yours.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} direction="none">
                <div className="portfolio-filter-tabs">
                    {AGENCY_CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            className={`agency-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                            onClick={() => handleCategoryFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </ScrollReveal>

            {isLoading ? (
                <div className="container portfolio__container">
                    {[...Array(6)].map((_, i) => (
                        <article key={i} className="portfolio__item glass-card">
                            <Skeleton height="200px" style={{ borderRadius: '12px' }} />
                            <Skeleton height="24px" style={{ marginTop: '16px' }} />
                            <Skeleton height="40px" style={{ marginTop: '16px' }} />
                        </article>
                    ))}
                </div>
            ) : filteredProjects.length === 0 ? (
                <div className="portfolio-empty-state">
                    <p>No featured projects found in this category.</p>
                </div>
            ) : (
                <div className="container portfolio__container">
                    {filteredProjects.slice(0, 9).map(({ id, image, title, github, demo, category }, index) => (
                        <ScrollReveal key={id} delay={Math.min(index * 0.06, 0.36)}>
                            <article className="portfolio__item glass-card">
                                <div className="portfolio-card-media">
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        sizes="(max-width: 650px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="portfolio-img"
                                    />
                                    <div className="portfolio-overlay">
                                        <Link href={`/project-details/${id}`} className="view-case-study-btn">
                                            Case Study <FiArrowUpRight />
                                        </Link>
                                    </div>
                                    <span className="case-study-badge">{category || 'Client Work'}</span>
                                </div>

                                <div className="portfolio-card-content">
                                    <h3 className="portfolio-title">{title}</h3>
                                    <p className="portfolio-subtitle">Full-stack web application optimized for reliability and user conversion.</p>

                                    <div className="portfolio-card-actions">
                                        {demo && (
                                            <a href={demo} className="btn btn-primary btn-sm" rel="noreferrer" target="_blank">
                                                Live Preview <FiExternalLink />
                                            </a>
                                        )}
                                        {github && (
                                            <a href={github} className="btn btn-outline btn-sm" rel="noreferrer" target="_blank">
                                                Code <FiGithub />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            )}

            <ScrollReveal delay={0.2}>
                <div className="seeMore__btn">
                    <Link href="/projects" className="btn btn-outline">
                        Explore All Case Studies <FiArrowUpRight />
                    </Link>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default Portfolio;
