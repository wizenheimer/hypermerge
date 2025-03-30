import Link from 'next/link';

interface BlogCardProps {
    post: {
        slug: string;
        date: string;
        author: string;
        title: string;
        excerpt: string;
    };
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <div
            className="flex flex-col border border-gray-200 rounded-lg overflow-hidden h-full"
            data-oid="-llv-ez"
        >
            <div className="flex flex-col h-full p-6" data-oid="a1x9v4z">
                {/* Meta info - fixed height */}
                <div className="flex flex-row justify-between mb-4 h-5" data-oid="q_w-hcy">
                    <span className="text-[var(--font-color-muted)] text-sm" data-oid="5rxxx3z">
                        {post.date}
                    </span>
                    <span className="text-[var(--font-color-muted)] text-sm" data-oid="qxs6y59">
                        Posted by {post.author}
                    </span>
                </div>

                {/* Content area - flex growing */}
                <div className="flex flex-col flex-grow min-h-0" data-oid="i_sty9a">
                    {/* Title - fixed height */}
                    <header className="h-14 mb-4" data-oid="nk9vne1">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-xl font-bold tracking-tight hover:text-[var(--primary-color)] line-clamp-2 block"
                            data-oid="u24208q"
                        >
                            {post.title}
                        </Link>
                    </header>

                    {/* Excerpt - flex growing */}
                    <div className="flex-grow min-h-0 mb-6" data-oid="51wz9oh">
                        <p
                            className="text-[var(--font-color-muted)] line-clamp-3"
                            data-oid="s5352nj"
                        >
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Read more - fixed at bottom */}
                    <div className="mt-auto pt-4 border-t border-gray-100" data-oid="4id48jf">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--primary-color-hover)]"
                            data-oid="fac377:"
                        >
                            <span data-oid="71awds4">Read more</span>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 256 256"
                                className="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                data-oid="psdd7qc"
                            >
                                <path
                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                                    data-oid="emj-cbs"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
