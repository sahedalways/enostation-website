import React from 'react';
import LegalPage from '../../common/LegalPage';

const TermsConditions = () => (
    <LegalPage
        eyebrow="SERVICE TERMS"
        title="Terms & Conditions"
        subtitle="The terms that apply when you use our website or engage Enostation for services."
        introduction="By using this website or engaging Enostation for services, you agree to these terms. A signed proposal, statement of work, or service agreement may add to or replace specific parts of these terms."
        sections={[
            {
                title: 'Our Services',
                content: 'Enostation provides web, mobile, software, design, automation, and related digital services. The exact scope, deliverables, schedule, and fees for a project will be defined in the relevant proposal or written agreement.',
            },
            {
                title: 'Quotes and Payments',
                content: 'Quotes are estimates unless stated otherwise and may change when the project scope changes. Clients are responsible for paying agreed fees according to the payment schedule in their proposal or agreement.',
            },
            {
                title: 'Client Responsibilities',
                content: 'Clients must provide accurate information, timely feedback, required content, access credentials, approvals, and any necessary rights to materials supplied to us. Project timelines may be affected when these items are delayed.',
            },
            {
                title: 'Intellectual Property',
                content: 'Ownership of final deliverables transfers as set out in the applicable project agreement and after all required payments have been received. Enostation retains ownership of its pre-existing tools, methods, templates, and reusable components.',
            },
            {
                title: 'Confidentiality',
                content: 'We will handle non-public project information with reasonable care and use it only to provide our services, except where disclosure is required by law or agreed in writing.',
            },
            {
                title: 'Third-Party Services',
                content: 'Projects may rely on third-party services, platforms, APIs, hosting providers, or software. Their availability, pricing, and terms are outside Enostation’s control, and clients are responsible for complying with their applicable terms.',
            },
            {
                title: 'Updates to These Terms',
                content: <>We may update these terms from time to time. Continued use of our website or services after an update means you accept the revised terms. For questions, contact <a href="mailto:hello.enostation@gmail.com">hello.enostation@gmail.com</a>.</>,
            },
        ]}
    />
);

export default TermsConditions;
