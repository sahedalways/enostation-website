import TermsConditions from '@/Components/Screens/TermsConditions/TermsConditions';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'Terms & Conditions',
    description:
        "Review the terms and conditions for using Enostation's website and services.",
    url: 'https://enostation.netlify.app/terms-and-conditions',
});

export default function TermsConditionsPage() {
    return <TermsConditions />;
}
