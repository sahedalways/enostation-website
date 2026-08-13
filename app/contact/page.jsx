import Contact from '@/Components/Contact/Contact';
import { buildMetadata } from '@/utils/seo';

export const metadata = buildMetadata({
    title: 'Contact',
    description:
        'Get in touch with Enostation for web & mobile app development. Email, WhatsApp, Messenger or use the contact form to discuss your project.',
    url: 'https://enostation.netlify.app/contact',
});

export default function ContactPage() {
    return <Contact />;
}
