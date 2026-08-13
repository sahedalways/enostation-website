'use client';
import React, { useState, useRef } from 'react';
import './Testimonial.css';
import TestimonialsData from './TestimonialsData';
import ReviewModal from './ReviewModal';
import ScrollReveal from '../common/ScrollReveal';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const ReviewCard = ({ name, company, avatar, review }) => (
    <div className="review-card">
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

const ReviewRow = ({ reviews, direction }) => {
    const duplicated = [...reviews, ...reviews];
    const rowRef = useRef(null);
    const cardsRef = useRef(null);
    const offsetRef = useRef(0);
    const dragRef = useRef({ active: false, lastX: 0 });

    const onPointerDown = (e) => {
        dragRef.current = { active: true, lastX: e.clientX };
        rowRef.current.classList.add('is-dragging');
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
        const drag = dragRef.current;
        if (!drag.active) return;
        offsetRef.current += e.clientX - drag.lastX;
        drag.lastX = e.clientX;
        cardsRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    };

    const onPointerUp = () => {
        if (!dragRef.current.active) return;
        dragRef.current.active = false;
        rowRef.current.classList.remove('is-dragging');
    };

    return (
        <div className={`review-marquee__row review-marquee__row--${direction}`} ref={rowRef}>
            <div
                className="review-marquee__track"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
            >
                <div className="review-marquee__cards" ref={cardsRef}>
                    {duplicated.map((review, i) => (
                        <ReviewCard key={`${review.id}-${i}`} {...review} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Testimonial = () => {
    const [reviewOpen, setReviewOpen] = useState(false);
    const mid = Math.ceil(TestimonialsData.length / 2);
    const row1 = TestimonialsData.slice(0, mid);
    const row2 = TestimonialsData.slice(mid);

    return (
        <section id="testimonials" className="section--alt">
            <ScrollReveal>
                <h5>Client Proof & Reviews</h5>
                <h2>What Founders & Executives Say</h2>
                <p className="section-subtitle">Trusted by startups and enterprises — hear from the teams we've helped grow.</p>
            </ScrollReveal>

            <div className="review-marquee">
                <ReviewRow reviews={row1} direction="left" />
                <ReviewRow reviews={row2} direction="right" />
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
