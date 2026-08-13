import { allBlogs } from '@/Components/Blog/BlogData';
import { SITE_URL } from '@/utils/seo';

export default async function sitemap() {
    const routes = [
        '',
        'about',
        'experience',
        'services',
        'portfolio',
        'pricing',
        'privacy-policy',
        'refund-policy',
        'terms-and-conditions',
        'testimonial',
        'contact',
        'projects',
        'blogs',
    ];

    const staticRoutes = routes.map((route) => ({
        url: `${SITE_URL}/${route}`.replace(/\/$/, ''),
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    const blogRoutes = allBlogs.map((blog) => ({
        url: `${SITE_URL}/blog-details/${blog.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
}
