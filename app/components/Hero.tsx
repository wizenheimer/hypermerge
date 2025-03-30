import Image from 'next/image';

export default function Hero() {
    return (
        <main
            className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-16 md:py-24 space-y-16 md:space-y-24"
            data-oid="aj03:u9"
        >
            <div className="text-center max-w-4xl mx-auto" data-oid="7pbr5w5">
                <h2 className="text-3xl md:text-5xl font-bold mb-4" data-oid="v-7ncon">
                    Engineering Management
                    <br data-oid="uiih76y" />
                    <span className="text-gray-500" data-oid="s38qpf-">
                        Without The Guesswork
                    </span>
                </h2>
                <p
                    className="text-lg md:text-xl mb-10 max-w-4xl mx-auto text-gray-600"
                    data-oid="m-pq76a"
                >
                    Identify your highest-ROI engineering efforts. Spot blockers before they derail
                    your sprint.
                    <br className="hidden md:block" data-oid="ucqrnyr" />
                    Eliminate guesswork from engineering management.
                </p>
                <div className="flex flex-wrap justify-center gap-6" data-oid="wkazhd.">
                    <button
                        className="bg-white text-black border border-gray-300 px-6 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors"
                        data-oid="meja-2g"
                    >
                        View Demo
                    </button>
                    <button
                        className="bg-black text-white px-6 py-2.5 rounded-md font-medium hover:bg-gray-800 transition-colors"
                        data-oid="0.erzwy"
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* Dashboard Preview */}
            <div
                className="w-full max-w-5xl rounded-lg overflow-hidden shadow-xl relative"
                data-oid="tk.35._"
            >
                <Image
                    src="/images/dashboard.png"
                    alt="Engineering metrics dashboard showing cycle time, coding time, review time and other key metrics"
                    width={1024}
                    height={576}
                    className="w-full h-auto"
                    priority
                    data-oid="xza49kd"
                />

                <div
                    className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none opacity-70"
                    data-oid="vz.9seg"
                ></div>
            </div>
        </main>
    );
}
