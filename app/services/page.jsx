import Services from '@/Components/Services/Services';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'Services',
    description:
        'Services by Enostation: Frontend development with React & Next.js, Backend development with PHP & Laravel, and AI Automation systems.',
    url: 'https://enostation.netlify.app/services',
});

export default function ServicesPage() {
    return <Services />;
}
