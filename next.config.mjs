/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: ['react-icons'],
        cssChunking: 'graph',
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'media.linkedin.com' },
            { protocol: 'https', hostname: 'media.licdn.com' },
            { protocol: 'https', hostname: 'i.ytimg.com' },
            { protocol: 'https', hostname: 'qalbit.com' },
            { protocol: 'https', hostname: 'cdn-images-1.medium.com' },
            { protocol: 'https', hostname: 'inspector.dev' },
            { protocol: 'https', hostname: 'miro.medium.com' },
            { protocol: 'https', hostname: '*.supabase.co' },
        ],
    },
};

export default nextConfig;
