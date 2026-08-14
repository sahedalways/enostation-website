'use client';
import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import TestimonialsData from './TestimonialsData';
import ReviewModal from './ReviewModal';
import ScrollReveal from '../common/ScrollReveal';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AUTOPLAY_MS = 4500;

const ReviewCard = ({ name, company, avatar, review, position }) => (
    <div className={`review-card ${position}`}>
        <div className="review-card__avatar">
            <img src={avatar} alt={name} />
        </div>
        <div className="review-card__stars">
            {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="review-card__star" />
            ))}
        </div>
        <h5 className="review-card__name">{name}</h5>
        {company && <small className="review-card__company">{company}</small>}
        <FaQuoteLeft className="review-card__quote" />
        <p className="review-card__text">"{review}"</p>
    </div>
);

const Testimonial = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [reviewOpen, setReviewOpen] = useState(false);

    const total = TestimonialsData.length;

    const goPrev = () => setCurrent((c) => (c - 1 + total) % total);
    const goNext = () => setCurrent((c) => (c + 1) % total);

    useEffect(() => {
        if (paused) return undefined;
        const id = setInterval(goNext, AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [paused, total]);

    const getSlot = (index) => {
        let diff = (index - current + total) % total;
        if (diff > Math.floor(total / 2)) diff -= total;
        switch (diff) {
            case 0:
                return { x: 0, scale: 1, z: 3, opacity: 1 };
            case 1:
                return { x: 110, scale: 0.82, z: 2, opacity: 0.55 };
            case -1:
                return { x: -110, scale: 0.82, z: 2, opacity: 0.55 };
            case 2:
                return { x: 230, scale: 0.7, z: 1, opacity: 0 };
            case -2:
                return { x: -230, scale: 0.7, z: 1, opacity: 0 };
            default:
                return { x: 0, scale: 0.7, z: 0, opacity: 0 };
        }
    };

    return (
        <section id="testimonials" className="section--alt">
            <ScrollReveal direction="none">
                <h5>Client Proof & Reviews</h5>
                <h2>What Founders & Executives Say</h2>
                <p className="section-subtitle">
                    Trusted by startups and enterprises — hear from the teams we've helped grow.
                </p>
            </ScrollReveal>

            <div
                className="review-carousel"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <button
                    type="button"
                    className="review-carousel__nav review-carousel__nav--prev"
                    onClick={goPrev}
                    aria-label="Previous review"
                >
                    <FaChevronLeft />
                </button>

                <div className="review-carousel__viewport">
                    <div className="review-carousel__stage">
                        {TestimonialsData.map((review, i) => {
                            const { x, scale, z, opacity } = getSlot(i);
                            return (
                                <div
                                    key={review.id}
                                    className="review-carousel__slide"
                                    style={{
                                        transform: `translate(-50%, 0) translateX(${x}%) scale(${scale})`,
                                        zIndex: z,
                                        opacity,
                                        pointerEvents: opacity === 0 ? 'none' : 'auto',
                                    }}
                                >
                                    <ReviewCard {...review} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    type="button"
                    className="review-carousel__nav review-carousel__nav--next"
                    onClick={goNext}
                    aria-label="Next review"
                >
                    <FaChevronRight />
                </button>
            </div>

            <div className="review-carousel__dots">
                {TestimonialsData.map((review, i) => (
                    <button
                        key={review.id}
                        type="button"
                        className={`review-carousel__dot ${i === current ? 'active' : ''}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to review ${i + 1}`}
                    />
                ))}
            </div>

            <ScrollReveal delay={0.25}>
                <div className="testimonial__review-btn-wrap">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setReviewOpen(true)}
                    >
                        Leave a Review
                    </button>
                </div>
            </ScrollReveal>

            <ReviewModal open={reviewOpen} onClose={() => setReviewOpen(false)} />
        </section>
    );
};

export default Testimonial;
