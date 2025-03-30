interface PricingFeature {
    text: string;
    included: boolean;
}

interface PricingPlan {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: PricingFeature[];
    ctaText: string;
    isPopular?: boolean;
    isEnterprise?: boolean;
}

function PricingFeature({ text, included }: PricingFeature) {
    return (
        <li className="flex items-center gap-3 text-sm" data-oid="4igzokw">
            <svg
                className={`w-5 h-5 ${included ? 'text-green-500' : 'text-gray-300'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="rh057p."
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                    data-oid="olhkgnt"
                />
            </svg>
            {text}
        </li>
    );
}

function PricingPlan({
    name,
    price,
    period,
    description,
    features,
    ctaText,
    isPopular,
    isEnterprise,
}: PricingPlan) {
    return (
        <div
            className={`flex flex-col ${isPopular ? 'bg-black text-white shadow-xl' : 'bg-white border border-zinc-200 shadow-sm'} rounded-xl p-8 relative`}
            data-oid="gh-uorg"
        >
            {isPopular && (
                <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                    data-oid="4m1nv5c"
                >
                    Most Popular
                </div>
            )}
            <div className="mb-8" data-oid="ynyhf7.">
                <h3 className="text-xl font-semibold mb-2" data-oid="7f_hoka">
                    {name}
                </h3>
                <div className="flex items-baseline gap-2" data-oid="aunbzfu">
                    <span className="text-4xl font-bold" data-oid="qr6th27">
                        {price}
                    </span>
                    {period && (
                        <span
                            className={isPopular ? 'text-gray-400' : 'text-gray-500'}
                            data-oid="6xqupz1"
                        >
                            {period}
                        </span>
                    )}
                </div>
                <p
                    className={`mt-4 text-sm ${isPopular ? 'text-gray-400' : 'text-gray-600'}`}
                    data-oid="zpzsiy7"
                >
                    {description}
                </p>
            </div>
            <ul className="space-y-4 mb-8 flex-1" data-oid="da985sf">
                {features.map((feature, index) => (
                    <PricingFeature key={index} {...feature} data-oid="x.5_v3j" />
                ))}
            </ul>
            <button
                className={`w-full ${
                    isPopular
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
                } px-6 py-2.5 rounded-md font-medium transition-colors`}
                data-oid="gqe2i7_"
            >
                {ctaText}
            </button>
        </div>
    );
}

export default function Pricing() {
    const plans: PricingPlan[] = [
        {
            name: 'Starter',
            price: 'Free',
            period: '/month',
            description: 'Perfect for small teams getting started',
            features: [
                { text: 'Up to 5 Developers', included: true },
                { text: 'Up to 3 Repos', included: true },
                { text: '3 months data history', included: true },
                { text: 'Email/Chat support', included: true },
                { text: 'Up to 3 Integrations', included: true },
            ],

            ctaText: 'Get Started',
        },
        {
            name: 'Scaleup',
            price: '$10',
            period: '/dev/month',
            description: 'For growing teams that need more',
            features: [
                { text: 'Unlimited Developers', included: true },
                { text: 'Unlimited Repos', included: true },
                { text: 'Unlimited Integrations', included: true },
                { text: '6 months of data history', included: true },
                { text: 'Priority Support', included: true },
            ],

            ctaText: 'Get Started',
            isPopular: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For large teams with custom needs',
            features: [
                { text: 'Unlimited Developers', included: true },
                { text: 'Unlimited Repos', included: true },
                { text: 'Unlimited Integrations', included: true },
                { text: 'Unlimited data history', included: true },
                { text: 'Multiple Git Org support', included: true },
                { text: 'Dedicated Success Manager', included: true },
            ],

            ctaText: 'Contact Sales',
            isEnterprise: true,
        },
    ];

    return (
        <section
            className="py-16 md:py-24 px-6 md:px-12 scroll-mt-20"
            id="pricing"
            data-oid="4xeibd-"
        >
            <div className="max-w-4xl mx-auto text-center mb-16" data-oid="07y.zow">
                <h2 className="text-3xl md:text-5xl font-bold mb-4" data-oid="2ob5xpn">
                    Simple, transparent
                    <br data-oid="modukvb" />
                    <span className="text-gray-500" data-oid=":s:gf_-">
                        pricing for all
                    </span>
                </h2>
                <p className="text-lg text-gray-600" data-oid="b7mt41.">
                    Start free and scale as your team grows. No hidden fees or surprises.
                </p>
            </div>

            <div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
                data-oid="m2ktc35"
            >
                {plans.map((plan, index) => (
                    <PricingPlan key={index} {...plan} data-oid="6pltly3" />
                ))}
            </div>
        </section>
    );
}
