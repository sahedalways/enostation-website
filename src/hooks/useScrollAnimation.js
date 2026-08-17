'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

let observer = null;

export default function useScrollAnimation() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return undefined;

        if (!observer) {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('aos-animate');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
            );
        }

        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach((el) => {
            el.classList.add('aos-init');
            observer.observe(el);
        });

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [pathname]);
}