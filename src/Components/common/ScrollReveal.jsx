'use client';
import { useEffect, useRef } from 'react';

const directionMap = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
    none: 'reveal-none',
};

const ScrollReveal = ({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    as: Tag = 'div',
    ...props
}) => {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        if (typeof IntersectionObserver === 'undefined') {
            node.classList.add('is-visible');
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const dirClass = directionMap[direction] || directionMap.up;

    return (
        <Tag
            ref={ref}
            className={`scroll-reveal ${dirClass} ${className}`.trim()}
            style={delay ? { '--reveal-delay': `${delay}s` } : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default ScrollReveal;
