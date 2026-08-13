'use client';
import React from 'react';
import { FiArrowRight, FiBriefcase } from 'react-icons/fi';
import Link from 'next/link';
import ScrollReveal from '../common/ScrollReveal';

const CTA = () => {
    return (
        <ScrollReveal delay={0.3} className="cta agency-cta">
            <Link href="/contact" className="btn btn-primary">
                Start a Project <FiArrowRight />
            </Link>
            <Link href="/portfolio" className="btn btn-outline">
                <FiBriefcase /> View Case Studies
            </Link>
        </ScrollReveal>
    );
};

export default CTA;
