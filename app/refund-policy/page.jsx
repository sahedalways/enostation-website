import RefundPolicy from '@/Components/Screens/RefundPolicy/RefundPolicy';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'Refund Policy',
    description:
        "Review Enostation's refund policy for project deposits, milestone payments, and refund requests.",
    url: 'https://enostation.netlify.app/refund-policy',
});

export default function RefundPolicyPage() {
    return <RefundPolicy />;
}
