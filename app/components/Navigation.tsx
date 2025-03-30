import Link from 'next/link';

export default function Navigation() {
    return (
        <header
            className="sticky top-0 z-50 w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-200/50"
            data-oid="c46a6lj"
        >
            <Link
                href="/"
                className="font-bold text-xl hover:text-gray-600 transition-colors"
                data-oid="u084z4q"
            >
                Hypermerge
            </Link>
            <nav className="hidden md:flex space-x-8" data-oid="crlnr5s">
                <Link
                    href="/#features"
                    className="hover:text-gray-600 transition-colors"
                    data-oid="i.6h1eg"
                >
                    Features
                </Link>
                <Link
                    href="/#pricing"
                    className="hover:text-gray-600 transition-colors"
                    data-oid="6o:s66x"
                >
                    Pricing
                </Link>
                <Link
                    href="/blog"
                    className="hover:text-gray-600 transition-colors"
                    data-oid="qv02oki"
                >
                    Blog
                </Link>
                <Link
                    href="/docs"
                    className="hover:text-gray-600 transition-colors"
                    data-oid="8pqf75k"
                >
                    Docs
                </Link>
            </nav>
            <button
                className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
                data-oid="5rnd5ck"
            >
                Get Started
            </button>
        </header>
    );
}
