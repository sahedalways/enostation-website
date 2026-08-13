import NotFound from '@/Components/Screens/NotFound/NotFound';

export const metadata = {
    title: 'Page Not Found | Enostation',
    description:
        'The page you are looking for does not exist. Return to the homepage of Enostation.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFoundPage() {
    return <NotFound />;
}
