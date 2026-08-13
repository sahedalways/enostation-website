import Portfolio from '@/Components/Portfolio/Portfolio';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'Portfolio & Projects',
    description:
        'Explore projects by Enostation: web applications, mobile apps, React apps, MERN apps, PHP apps and more.',
    url: 'https://enostation.netlify.app/portfolio',
});

export default function PortfolioPage() {
    return <Portfolio />;
}
