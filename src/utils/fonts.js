import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';

export const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-plus-jakarta',
    display: 'swap',
});

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-poppins',
    display: 'swap',
});
