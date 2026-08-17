import '../src/Index.css';

import Providers from './providers';
import AppShell from './AppShell';
import { plusJakartaSans, poppins } from '../src/utils/fonts';
import {
    SITE_URL,
    SITE_NAME,
    DEFAULT_IMAGE,
    DEFAULT_DESCRIPTION,
} from '../src/utils/seo';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    keywords: [
        'Enostation',
        'web development agency',
        'React',
        'Next.js',
        'Laravel',
        'mobile app development',
        'SaaS',
        'AI automation',
    ],
    authors: [{ name: 'Enostation' }],
    creator: 'Enostation',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        siteName: SITE_NAME,
        images: [
            {
                url: DEFAULT_IMAGE,
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
    },
    icons: {
        icon: '/favicon.ico',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${plusJakartaSans.variable} ${poppins.variable}`} suppressHydrationWarning>
                <Providers>
                    <AppShell>{children}</AppShell>
                </Providers>
            </body>
        </html>
    );
}
