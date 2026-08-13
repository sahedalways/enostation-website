import About from '@/Components/About/About';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'About Enostation',
    description:
        'Learn more about Enostation, a web development agency building modern web & mobile applications with React, Next.js, Laravel and more.',
    url: 'https://enostation.netlify.app/about',
});

export default function AboutPage() {
    return <About />;
}
