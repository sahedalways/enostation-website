import React from 'react';
import LegalPage from '../../common/LegalPage';

const RefundPolicy = () => (
    <LegalPage
        eyebrow="PAYMENTS & REFUNDS"
        title="Refund Policy"
        subtitle="Our approach to deposits, project payments, and refund requests."
        introduction="This policy applies to services provided by Enostation. Specific project agreements or proposals may include additional terms that take precedence over this general policy."
        sections={[
            {
                title: 'Project Deposits',
                content: 'Deposits reserve time and resources for your project. Unless a written agreement states otherwise, deposits become non-refundable once project planning, discovery, design, development, or other billable work has begun.',
            },
            {
                title: 'Milestone Payments',
                content: 'Payments for completed milestones are non-refundable because they cover work already delivered, approved, or made available for review. We encourage clients to review each milestone promptly and share feedback before the next phase begins.',
            },
            {
                title: 'Eligible Refund Requests',
                content: 'If Enostation is unable to begin an agreed service or if a prepaid service has not been used, we may review a refund request on a case-by-case basis. Any approved refund will be limited to the unused portion of the payment.',
            },
            {
                title: 'Third-Party Costs',
                content: 'Fees paid to third parties, including hosting providers, domain registrars, payment processors, software vendors, or advertising platforms, are not refundable by Enostation. Their own refund policies will apply.',
            },
            {
                title: 'Changes and Cancellations',
                content: 'If you need to pause, change, or cancel a project, please contact us as soon as possible. Work completed up to the date of cancellation, along with any non-recoverable costs, remains payable.',
            },
            {
                title: 'How to Request a Refund',
                content: <>Send your request, project name, and the reason for the request to <a href="mailto:hello.enostation@gmail.com">hello.enostation@gmail.com</a>. We will review it and respond within a reasonable timeframe.</>,
            },
        ]}
    />
);

export default RefundPolicy;
