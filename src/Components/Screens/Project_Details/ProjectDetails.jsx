'use client';
import React, { useEffect, useRef } from 'react';
import { BsFileCodeFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { useParams } from 'next/navigation';
import { HashLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';

import './ProjectDetails.css';
import { usePortfolioProject } from '../../../hooks/usePortfolioProject';

const ProjectDetails = () => {
    const { id } = useParams();
    const descRef = useRef(null);
    const { t } = useTranslation();

    const processSteps = t('process.steps', { returnObjects: true });

    const { data: projects = [], isLoading } = usePortfolioProject();

    const item = projects.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (descRef.current) {
            descRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [item]);

    return (
        <>
            {item ? (
                <>
                    {isLoading ? (
                        <HashLoader
                            color="#7EC834"
                            loading={isLoading}
                            className="override"
                            size={100}
                        />
                    ) : (
                        <>
                            <section id="project__view">
                                <div className="container project__container">
                                    <div className="project__sahed__wrapper">
                                        <div className="project__img__wrapper">
                                            <img
                                                data-aos="zoom-in-up"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                        </div>
                                    </div>

                                    <div className="project__content">
                                        <h5 className="project__subtitle">{t('project_details.subtitle')}</h5>
                                        <h2 className="project__title">{item.title}</h2>

                                        <div className="project__cards">
                                            <article
                                                data-aos="fade-right"
                                                className="project__card"
                                            >
                                                <CgProfile className="project__icon" />
                                                <h5>{t('project_details.author')}</h5>
                                                <small>{item.authorName}</small>
                                            </article>

                                            <article data-aos="fade-left" className="project__card">
                                                <BsFileCodeFill className="project__icon" />
                                                <h5>{t('project_details.technologies')}</h5>
                                                <small>{item.use}</small>
                                            </article>
                                        </div>

                                        <div dangerouslySetInnerHTML={{ __html: item.desc }} />

                                        <div className="project__btn">
                                            <a
                                                href={item.github}
                                                className="btn"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                {t('project_details.github')}
                                            </a>
                                            <a
                                                href={item.demo}
                                                className="btn btn-primary"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                {t('project_details.live_demo')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* =========================
                                CASE STUDY / DELIVERY PROCESS
                            ========================= */}
                            <section id="case-study" className="case-study">
                                <h5>{t('case_study.subtitle')}</h5>
                                <h2>{t('case_study.title')}</h2>

                                <div className="container case-study__container">
                                    {processSteps.map((step, index) => (
                                        <article key={index} className="case-study__step">
                                            <span className="case-study__step__number">
                                                0{index + 1}
                                            </span>
                                            <h3>{step.title}</h3>
                                            <p>{step.description}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}
                </>
            ) : (
                <h1>{t('project_details.not_found')}</h1>
            )}
        </>
    );
};

export default ProjectDetails;
