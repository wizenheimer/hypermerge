import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://hypermerge.com'),
    title: 'HyperMerge',
    description: 'Engineering Management Without The Guesswork',
    openGraph: {
        title: 'HyperMerge',
        description: 'Engineering Management Without The Guesswork',
        type: 'website',
        locale: 'en_US',
        siteName: 'HyperMerge',
        images: [
            {
                url: '/og-image.png', // You'll need to create this image
                width: 1200,
                height: 630,
                alt: 'HyperMerge - Engineering Management Without The Guesswork',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'HyperMerge',
        description: 'Engineering Management Without The Guesswork',
        images: ['/og-image.png'], // Same image as OpenGraph
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
