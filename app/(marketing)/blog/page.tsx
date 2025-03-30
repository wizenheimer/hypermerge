import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import Navigation from '@/app/components/Navigation';
import BlogCard from '@/app/components/blog/BlogCard';
import BlogHeader from '@/app/components/blog/BlogHeader';
import Pagination from '@/app/components/blog/Pagination';
import Footer from '@/app/components/Footer';

interface BlogPageProps {
    searchParams: { page?: string };
}

export const metadata: Metadata = {
    title: 'Blog | Hypermerge',
    description: 'Read our latest articles and insights',
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const currentPage = Number(searchParams.page) || 1;
    const { posts, totalPages } = await getAllPosts(currentPage);

    return (
        <div className="min-h-screen flex flex-col" data-oid="9brfngo">
            <Navigation data-oid="hdk4_y:" />
            <main className="flex-1" data-oid="vs8x3tc">
                <section className="py-16 md:py-24 px-6 md:px-12 scroll-mt-20" data-oid="af3ox1u">
                    <div className="max-w-7xl mx-auto" data-oid="pnlfy.s">
                        <BlogHeader data-oid="apq:xfp" />

                        <div
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                            data-oid="83f.5yi"
                        >
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} data-oid="01q0sdk" />
                            ))}
                        </div>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            data-oid="h9_iywa"
                        />
                    </div>
                </section>
            </main>
            <Footer data-oid="jgbqljk" />
        </div>
    );
}
