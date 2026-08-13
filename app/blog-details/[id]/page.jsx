import BlogDetails from '@/Components/Blog/BlogDetails';
import { allBlogs } from '@/Components/Blog/BlogData';
import { buildMetadata, SITE_URL } from '@/utils/seo';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const item = allBlogs.find((b) => b.id === parseInt(id, 10));

    if (!item) {
        return buildMetadata({
            title: 'Blog Not Found',
            url: `${SITE_URL}/blog-details/${id}`,
        });
    }

    const description =
        typeof item.desc === 'string'
            ? item.desc.replace(/<[^>]*>/g, '').slice(0, 160)
            : 'Blog by Enostation';

    return buildMetadata({
        title: item.title,
        description,
        image: item.image,
        url: `${SITE_URL}/blog-details/${id}`,
        type: 'article',
    });
}

export default async function BlogDetailsPage({ params }) {
    await params;
    return <BlogDetails />;
}
