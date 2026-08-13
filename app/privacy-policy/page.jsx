import PrivacyPolicy from '@/Components/Screens/PrivacyPolicy/PrivacyPolicy';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'Privacy Policy',
    description:
        "Read Enostation's privacy policy and learn how we collect, use, and protect personal information.",
    url: 'https://enostation.netlify.app/privacy-policy',
});

export default function PrivacyPolicyPage() {
    return <PrivacyPolicy />;
}
