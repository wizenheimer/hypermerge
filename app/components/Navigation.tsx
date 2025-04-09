import Link from 'next/link';

export default function Navigation() {
    return (
        <header className="sticky top-0 z-50 w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md">
            <Link href="/" className="font-bold text-xl hover:text-gray-600 transition-colors">
                Hypermerge
            </Link>
            <nav className="hidden md:flex space-x-8">
                <Link href="/#features" className="hover:text-gray-600 transition-colors">
                    Features
                </Link>
                <Link href="/#pricing" className="hover:text-gray-600 transition-colors">
                    Pricing
                </Link>
                <Link href="/blog" className="hover:text-gray-600 transition-colors">
                    Blog
                </Link>
                <Link href="/docs" className="hover:text-gray-600 transition-colors">
                    Docs
                </Link>
            </nav>
            <a href="https://cal.com/nayann/hypermerge" target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                    Get Started
                </button>
            </a>
        </header>
    );
}
