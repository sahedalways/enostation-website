import Home from '@/Components/Screens/Home/Home';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'Home',
    description:
        'Enostation is a web development agency building modern web, mobile & SaaS applications using React, Next.js, Laravel and more.',
    url: 'https://enostation.netlify.app',
});

export default function HomePage() {
    return <Home />;
}
