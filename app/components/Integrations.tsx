import Image from 'next/image';

const logos = [
    { src: '/images/logos/Github.svg', alt: 'GitHub Logo' },
    { src: '/images/logos/Gitlab.svg', alt: 'GitLab Logo' },
    { src: '/images/logos/BitBucket.svg', alt: 'BitBucket Logo' },
    { src: '/images/logos/Linear.svg', alt: 'Linear Logo' },
    { src: '/images/logos/Clickup.svg', alt: 'ClickUp Logo' },
    { src: '/images/logos/Slack.svg', alt: 'Slack Logo' },
];

function LogoCarousel() {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex animate-infinite-scroll">
                {[1, 2, 3].map((set) => (
                    <div key={set} className={`flex space-x-16 shrink-0 ${set > 1 ? 'ml-16' : ''}`}>
                        {logos.map((logo, index) => (
                            <div
                                key={`${set}-${index}`}
                                className="w-[60px] flex items-center justify-center"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={36}
                                    height={18}
                                    className="opacity-60 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Integrations() {
    return (
        <section className="py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <p className="text-zinc-600">Seamlessly integrate with your favorite tools</p>
                </div>

                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Logo Carousel */}
                    <LogoCarousel />
                </div>
            </div>
        </section>
    );
}
