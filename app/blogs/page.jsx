import SeeMoreBlogs from '@/Components/Screens/See_More_Blogs/SeeMoreBlogs';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'All Blogs',
    description:
        'Browse all technical blogs by Enostation on web development, React, Next.js, Laravel and software engineering.',
    url: 'https://enostation.netlify.app/blogs',
});

export default function BlogsPage() {
    return <SeeMoreBlogs />;
}
