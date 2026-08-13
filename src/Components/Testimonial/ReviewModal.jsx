'use client';
import React, { useEffect, useState } from 'react';
import { FaStar, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Modal from '../common/Modal';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ReviewModal = ({ open, onClose }) => {
    const { t } = useTranslation();
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        rating: 0,
        review: '',
    });
    const [hoverRating, setHoverRating] = useState(0);
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (open) {
            setFormValues({ name: '', email: '', rating: 0, review: '' });
            setErrors({});
            setResult(null);
        }
    }, [open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formValues.name.trim()) newErrors.name = t('review_form.errors.name');
        if (!formValues.email.trim()) {
            newErrors.email = t('review_form.errors.email');
        } else if (!EMAIL_PATTERN.test(formValues.email)) {
            newErrors.email = t('review_form.errors.email');
        }
        if (!formValues.rating) newErrors.rating = t('review_form.errors.rating');
        if (formValues.review.trim().length < 5) {
            newErrors.review = t('review_form.errors.review');
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        const formData = new FormData();
        formData.append('_subject', 'New Review from Portfolio');
        formData.append('name', formValues.name);
        formData.append('email', formValues.email);
        formData.append('rating', `${formValues.rating} / 5`);
        formData.append('review', formValues.review);

        setSending(true);
        try {
            const response = await fetch('https://formspree.io/f/xnngnynw', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData,
            });
            setResult(response.ok ? 'success' : 'error');
        } catch (error) {
            console.error('Error sending review:', error);
            setResult('error');
        } finally {
            setSending(false);
        }
    };

    if (!open) return null;

    return (
        <div className="review-modal__overlay" onClick={onClose} role="presentation">
            <div
                className="review-modal"
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="review-modal__close" onClick={onClose} aria-label="Close">
                    <FaTimes />
                </button>

                <h3 className="review-modal__title">{t('review_form.title')}</h3>
                <p className="review-modal__subtitle">{t('review_form.subtitle')}</p>

                <form onSubmit={handleSubmit} noValidate>
                    <input
                        type="text"
                        name="name"
                        placeholder={t('review_form.name')}
                        value={formValues.name}
                        onChange={handleChange}
                        className={errors.name ? 'form-error' : ''}
                        required
                    />
                    {errors.name && <small className="form-error-msg">{errors.name}</small>}

                    <input
                        type="email"
                        name="email"
                        placeholder={t('review_form.email')}
                        value={formValues.email}
                        onChange={handleChange}
                        className={errors.email ? 'form-error' : ''}
                        required
                    />
                    {errors.email && <small className="form-error-msg">{errors.email}</small>}

                    <div className="review-modal__rating">
                        <span className="review-modal__rating-label">
                            {t('review_form.rating')}
                        </span>
                        <div className="review-modal__stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className="review-modal__star-btn"
                                    aria-label={`${star} star`}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    onClick={() => setFormValues((prev) => ({ ...prev, rating: star }))}
                                >
                                    <FaStar
                                        className={
                                            star <= (hoverRating || formValues.rating)
                                                ? 'review-modal__star review-modal__star--active'
                                                : 'review-modal__star'
                                        }
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    {errors.rating && (
                        <small className="form-error-msg">{errors.rating}</small>
                    )}

                    <textarea
                        name="review"
                        rows="5"
                        cols="10"
                        placeholder={t('review_form.review')}
                        value={formValues.review}
                        onChange={handleChange}
                        className={errors.review ? 'form-error' : ''}
                        required
                    ></textarea>
                    {errors.review && <small className="form-error-msg">{errors.review}</small>}

                    <button type="submit" className="btn btn-primary" disabled={sending}>
                        {sending ? t('review_form.sending') : t('review_form.submit')}
                    </button>
                </form>

                <Modal
                    open={result !== null}
                    type={result === 'success' ? 'success' : 'error'}
                    message={
                        result === 'success' ? t('review_form.success') : t('review_form.error')
                    }
                    closeLabel={t('review_form.modal_close')}
                    onClose={() => {
                        setResult(null);
                        if (result === 'success') onClose();
                    }}
                />
            </div>
        </div>
    );
};

export default ReviewModal;
