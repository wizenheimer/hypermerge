import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-black text-white mt-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Product Links */}
                    <div className="space-y-4">
                        <div className="text-sm font-medium">Product</div>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/#features"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#pricing"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="space-y-4">
                        <div className="text-sm font-medium">Resources</div>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/docs"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    Docs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Hypermerge Links */}
                    <div className="space-y-4">
                        <div className="text-sm font-medium">Hypermerge</div>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:hey@hypermerge.dev"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-4 ml-auto">
                        <div className="text-sm font-medium">Legal</div>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Extended Footer with Logo */}
            <div className="bg-black py-16 md:py-24 pb-0">
                <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
                    <div className="flex justify-center">
                        {'HYPERMERGE'.split('').map((char, index) => (
                            <span
                                key={index}
                                className="text-[8rem] md:text-[12rem] font-bold tracking-tighter text-white inline-block"
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
