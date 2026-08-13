'use client';
import { motion } from 'framer-motion';

const directionMap = {
    up: { y: 48, x: 0 },
    down: { y: -48, x: 0 },
    left: { x: -48, y: 0 },
    right: { x: 48, y: 0 },
    scale: { scale: 0.88, y: 20 },
    none: { x: 0, y: 0 },
};

const ScrollReveal = ({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 0.65,
    as = 'div',
    ...props
}) => {
    const Component = motion[as] || motion.div;
    const offset = directionMap[direction] || directionMap.up;

    return (
        <Component
            className={`scroll-reveal ${className}`.trim()}
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15, margin: '-40px' }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default ScrollReveal;
