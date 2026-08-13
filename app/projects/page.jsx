import SeeMore from '@/Components/Screens/See_More/SeeMore';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'All Projects',
    description:
        'Browse all projects by Enostation: web applications, mobile apps, React apps, MERN apps, PHP apps and more.',
    url: 'https://enostation.netlify.app/projects',
});

export default function ProjectsPage() {
    return <SeeMore />;
}
