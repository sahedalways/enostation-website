import Pricing from '@/Components/Pricing/Pricing';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'Agency Pricing & Engagement Models',
    description:
        'Transparent agency pricing packages for Web, Mobile, and AI Engineering by Enostation.',
    url: 'https://enostation.netlify.app/pricing',
});

export default function PricingPage() {
    return <Pricing />;
}
