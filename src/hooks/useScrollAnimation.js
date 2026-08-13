'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const AOS_CONFIG = {
    duration: 750,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
    delay: 0,
    mirror: false,
    anchorPlacement: 'top-bottom',
};

let aosInitialized = false;

export default function useScrollAnimation() {
    const pathname = usePathname();

    useEffect(() => {
        if (!aosInitialized) {
            AOS.init(AOS_CONFIG);
            aosInitialized = true;
        } else {
            AOS.refreshHard();
        }
    }, [pathname]);
}
