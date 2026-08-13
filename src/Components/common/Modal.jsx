'use client';
import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ open, message, type = 'success', closeLabel = 'OK', onClose }) => {
    useEffect(() => {
        if (!open) return;
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [open, onClose]);

    if (!open) return null;

    const isSuccess = type === 'success';

    return (
        <div className="modal__overlay" onClick={onClose} role="presentation">
            <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                <button className="modal__close" onClick={onClose} aria-label="Close">
                    <FaTimes />
                </button>

                <div
                    className={`modal__icon ${
                        isSuccess ? 'modal__icon--success' : 'modal__icon--error'
                    }`}
                >
                    {isSuccess ? <FaCheckCircle /> : <FaTimesCircle />}
                </div>

                <p className="modal__message">{message}</p>

                <button className="btn btn-primary modal__btn" onClick={onClose}>
                    {closeLabel}
                </button>
            </div>
        </div>
    );
};

export default Modal;
