import { Metadata } from 'next';
import { getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    return {
        title: `${post.title} | Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="w-full min-h-screen bg-white flex flex-col">
            <Navigation />
            <main className="flex-grow">
                <article className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="flex justify-between items-center mb-8">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-gray-600 hover:text-primary"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Back to Blog
                        </Link>
                    </div>
                    <header className="mb-12">
                        <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
                        <div className="flex items-center text-gray-600">
                            <time className="mr-6">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </time>
                            <span>Posted by {post.author}</span>
                        </div>
                    </header>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <MDXRemote source={post.content} />
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
