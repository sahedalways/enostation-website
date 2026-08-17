'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './SeeMore.css';
import { HashLoader } from 'react-spinners';
import { usePortfolioProject } from '../../../hooks/usePortfolioProject';

const CATEGORY_TITLES = {
    webApp: 'Web | Software Development',
    mobileApp: 'Mobile Apps Development',
    reactFullApp: 'React Full App',
    reactMiniApp: 'React Mini App',
    mernApp: 'MERN App',
    domManipulations: 'DOM Manipulations',
    phpApp: 'PHP App',
    jqueryApp: 'jQuery App',
};

const SeeMore = () => {
    const { data: projects = [], isLoading } = usePortfolioProject();

    // Group projects by category dynamically
    const categories = [...new Set(projects.map((p) => p.category))];

    // Optional: Custom category title formatting
    const formatCategoryTitle = (category) => CATEGORY_TITLES[category] || category;

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
                <p className="section-eyebrow">Our Recent Works</p>
                <h2>Portfolio</h2>

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
                                            <Image
                                                src={image}
                                                alt={title}
                                                fill
                                                sizes="(max-width: 650px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <h3>{title}</h3>
                                            <Link href={`/project-details/${id}`}>
                                                <h4 className="view__Details">View Details</h4>
                                            </Link>
                                        </div>

                                        <a
                                            href={github}
                                            className="btn"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            Github
                                        </a>
                                        <a
                                            href={demo}
                                            className="btn btn-primary"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            Live Demo
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
                        More Projects
                    </a>
                </div>
            </section>
        </>
    );
};

export default SeeMore;
