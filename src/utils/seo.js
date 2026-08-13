export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://enostation.netlify.app';

export const SITE_NAME = 'Enostation - Web Development Agency';

export const DEFAULT_IMAGE = `${SITE_URL}/assets/enostation-logo.png`;

export const DEFAULT_TITLE = 'Enostation - Web Development Agency';

export const DEFAULT_DESCRIPTION =
    'Enostation is a web development agency specializing in modern web applications, mobile apps, and AI-powered solutions using React, Next.js, Laravel and more.';

export const buildMetadata = ({
    title,
    description,
    image,
    url,
    type = 'website',
    jsonLd,
} = {}) => {
    const pageTitle = title ? `${title} | Enostation` : DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const pageImage = image || DEFAULT_IMAGE;
    const pageUrl = url || SITE_URL;

    const metadata = {
        title: pageTitle,
        description: pageDescription,
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            type,
            url: pageUrl,
            siteName: SITE_NAME,
            images: [
                {
                    url: pageImage,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description: pageDescription,
            images: [pageImage],
        },
    };

    if (jsonLd) {
        metadata.other = {
            jsonLd: JSON.stringify(jsonLd),
        };
    }

    return metadata;
};
