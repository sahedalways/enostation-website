'use client';
import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let rafId = null;

        const measure = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(100, Math.max(0, value)));
        };

        const updateProgress = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                rafId = null;
                measure();
            });
        };

        measure();
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, []);

    return (
        <div className="scroll-progress" aria-hidden="true">
            <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
        </div>
    );
};

export default ScrollProgress;
