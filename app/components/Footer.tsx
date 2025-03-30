import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-black text-white mt-24" data-oid="v87nojd">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12" data-oid="4r6..hg">
                <div
                    className="flex flex-col md:flex-row justify-between items-start gap-8"
                    data-oid="58de:yf"
                >
                    {/* Product Links */}
                    <div className="space-y-4" data-oid="product-links">
                        <div className="text-sm font-medium" data-oid="product-title">
                            Product
                        </div>
                        <ul className="space-y-3" data-oid="product-list">
                            <li data-oid="8k.:yys">
                                <Link
                                    href="/features"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    data-oid="h8nzhb6"
                                >
                                    Features
                                </Link>
                            </li>
                            <li data-oid="tbivxy8">
                                <Link
                                    href="/pricing"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    data-oid=".3_3dp9"
                                >
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="space-y-4" data-oid="resources-links">
                        <div className="text-sm font-medium" data-oid="resources-title">
                            Resources
                        </div>
                        <ul className="space-y-3" data-oid="resources-list">
                            <li data-oid="kg22ea6">
                                <Link
                                    href="/blog"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    data-oid="vw0d.2l"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li data-oid="mdzf_p.">
                                <Link
                                    href="/docs"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    data-oid="ibonnkz"
                                >
                                    Docs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Hypermerge Links */}
                    <div className="space-y-4" data-oid="hypermerge-links">
                        <div className="text-sm font-medium" data-oid="hypermerge-title">
                            Hypermerge
                        </div>
                        <ul className="space-y-3" data-oid="hypermerge-list">
                            <li data-oid="ads2o41">
                                <Link
                                    href="/about"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    data-oid="ay964xp"
                                >
                                    About
                                </Link>
                            </li>
                            <li data-oid="h7d47ca">
                                <a
                                    href="mailto:contact@hypermerge.com"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    data-oid="vcvupts"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-4 ml-auto" data-oid="f-ukri0">
                        <div className="text-sm font-medium" data-oid="_ze3vgh">
                            Legal
                        </div>
                        <ul className="space-y-3" data-oid="vk150pv">
                            <li data-oid="c77p2o7">
                                <Link
                                    href="/privacy"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    data-oid="p9k10j2"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li data-oid="vtdt5_t">
                                <Link
                                    href="/terms"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    data-oid="itk6.7h"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Extended Footer with Logo */}
            <div className="bg-black py-16 md:py-24 pb-0" data-oid="puvbekf">
                <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-hidden" data-oid="9cd33h:">
                    <div className="flex justify-center" data-oid="8iigt2d">
                        {'HYPERMERGE'.split('').map((char, index) => (
                            <span
                                key={index}
                                className="text-[8rem] md:text-[12rem] font-bold tracking-tighter text-white inline-block"
                                data-oid="wuu2hqt"
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
