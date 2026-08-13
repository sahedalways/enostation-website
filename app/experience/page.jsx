import Experience from '@/Components/Experience/Experience';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'Technologies & Skills',
    description:
        'Technologies used by Enostation: Frontend (React, Next.js, JavaScript, Tailwind) and Backend (PHP, Laravel, MySQL, Node.js) development.',
    url: 'https://enostation.netlify.app/experience',
});

export default function ExperiencePage() {
    return <Experience />;
}
