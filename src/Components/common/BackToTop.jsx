'use client';
import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './BackToTop.css';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
                opacity: visible ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden',
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
            }}
        >
            <FiArrowUp />
        </button>
    );
};

export default BackToTop;
