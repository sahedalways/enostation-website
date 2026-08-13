import Testimonial from '@/Components/Testimonial/Testimonial';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'Testimonials',
    description:
        'Read reviews from clients who have worked with Enostation on web & mobile app development projects.',
    url: 'https://enostation.netlify.app/testimonial',
});

export default function TestimonialPage() {
    return <Testimonial />;
}
