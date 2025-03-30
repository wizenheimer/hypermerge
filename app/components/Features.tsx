import Image from 'next/image';

interface FeatureCardProps {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
}

function FeatureCard({ image, imageAlt, title, description }: FeatureCardProps) {
    return (
        <div
            className="relative flex flex-col bg-white rounded-xl border border-zinc-200 shadow-sm"
            data-oid="s0ufho0"
        >
            <div className="flex-none px-6 pt-6" data-oid="ugmb8nd">
                <div className="relative aspect-video" data-oid="pyn5hw9">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover object-left-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-oid="cu.r7tq"
                    />

                    <div
                        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent"
                        data-oid="p64eey."
                    ></div>
                </div>
            </div>
            <div className="flex-none px-6 pb-6" data-oid="-495rlk">
                <h3
                    className="text-base font-medium leading-6 text-zinc-900 mb-2"
                    data-oid="pechm1s"
                >
                    {title}
                </h3>
                <p className="text-sm text-zinc-600 leading-5" data-oid="ckhasrn">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function Features() {
    const features = [
        {
            image: '/images/dora-metrics.png',
            imageAlt: 'DORA metrics visualization',
            title: 'Measure What Matters',
            description: 'Understand what truely moves the product forward',
        },
        {
            image: '/images/deployment-metrics.png',
            imageAlt: 'Deployment metrics visualization',
            title: 'Make Every Sprint Count',
            description: 'Spot blockers before they become bottlenecks',
        },
        {
            image: '/images/pr-metrics.png',
            imageAlt: 'Pull request metrics visualization',
            title: 'See More. Ship More.',
            description: 'Stop Guessing What Your Engineers Are Doing',
        },
        {
            image: '/images/incident-metrics.png',
            imageAlt: 'Incident metrics visualization',
            title: 'Drive Outcome. Not Output.',
            description: 'Track investment across features, bugs, and maintenance',
        },
    ];

    return (
        <section
            className="py-16 md:py-24 px-6 md:px-12 scroll-mt-20"
            id="features"
            data-oid="i71v9pl"
        >
            <div className="max-w-4xl mx-auto text-center mb-16" data-oid="qr28bah">
                <h2 className="text-3xl md:text-5xl font-bold mb-4" data-oid="v-7ncon">
                    Shipping is a Metric
                    <br data-oid="uiih76y" />
                    <span className="text-gray-500" data-oid="s38qpf-">
                        Measure it
                    </span>
                </h2>
                <p className="text-lg text-gray-600" data-oid="urn8k:n">
                    Stop building in the dark. See which efforts actually matter and which teams
                    need support.
                </p>
            </div>

            <div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                data-oid="d4.zmc-"
            >
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} data-oid="p9a6fqt" />
                ))}
            </div>
        </section>
    );
}
