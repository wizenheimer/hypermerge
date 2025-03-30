import Image from 'next/image';

const logos = [
    { src: '/images/logos/github.svg', alt: 'GitHub Logo' },
    { src: '/images/logos/gitlab.svg', alt: 'GitLab Logo' },
    { src: '/images/logos/bitbucket.svg', alt: 'BitBucket Logo' },
    { src: '/images/logos/linear.svg', alt: 'Linear Logo' },
    { src: '/images/logos/clickup.svg', alt: 'ClickUp Logo' },
    { src: '/images/logos/slack.svg', alt: 'Slack Logo' },
];

function LogoCarousel() {
    return (
        <div className="relative w-full overflow-hidden" data-oid="lslmetz">
            <div className="flex animate-infinite-scroll" data-oid="a:d009t">
                {[1, 2, 3].map((set) => (
                    <div
                        key={set}
                        className={`flex space-x-16 shrink-0 ${set > 1 ? 'ml-16' : ''}`}
                        data-oid=":.rykd-"
                    >
                        {logos.map((logo, index) => (
                            <div
                                key={`${set}-${index}`}
                                className="w-[60px] flex items-center justify-center"
                                data-oid="-osvizj"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={36}
                                    height={18}
                                    className="opacity-60 hover:opacity-100 transition-opacity"
                                    data-oid=":zqj46p"
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
        <section className="py-16 md:py-24 overflow-hidden" data-oid="rawqmep">
            <div className="max-w-7xl mx-auto px-6 md:px-12" data-oid="ayp-yu-">
                <div className="text-center mb-12" data-oid="rm4usg-">
                    <p className="text-zinc-600" data-oid="fl-3a72">
                        Seamlessly integrate with your favorite tools
                    </p>
                </div>

                <div className="relative" data-oid="neyzw0c">
                    {/* Gradient Overlays */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"
                        data-oid="--ju2vr"
                    ></div>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"
                        data-oid="-60gbzr"
                    ></div>

                    {/* Logo Carousel */}
                    <LogoCarousel data-oid="fgenln-" />
                </div>
            </div>
        </section>
    );
}
