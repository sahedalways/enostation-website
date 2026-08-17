'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Force an instant reset so the global `scroll-behavior: smooth`
        // (and any in-flight smooth animation) can't leave the page
        // scrolled down after a client-side navigation.
        const root = document.documentElement;
        const prevBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';

        window.scrollTo(0, 0);

        // Restore the smooth behavior for in-page anchor scrolling.
        requestAnimationFrame(() => {
            root.style.scrollBehavior = prevBehavior;
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
