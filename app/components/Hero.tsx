import Image from 'next/image';

export default function Hero() {
    return (
        <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-16 md:py-24 space-y-16 md:space-y-24">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Engineering Management
                    <br />
                    <span className="text-gray-500">Without The Guesswork</span>
                </h2>
                <p className="text-lg md:text-xl mb-10 mt-4 max-w-4xl mx-auto text-gray-600">
                    Identify your highest-ROI engineering efforts. Spot blockers before they derail
                    your sprint.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <button className="bg-white text-black border border-gray-300 px-6 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors">
                        View Demo
                    </button>
                    <button className="bg-black text-white px-6 py-2.5 rounded-md font-medium hover:bg-gray-800 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Dashboard Preview */}
            <div className="w-full max-w-5xl rounded-lg overflow-hidden shadow-xl relative">
                <Image
                    src="/images/dashboard.png"
                    alt="Engineering metrics dashboard showing cycle time, coding time, review time and other key metrics"
                    width={1024}
                    height={576}
                    className="w-full h-auto"
                    priority
                />

                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none opacity-70"></div>
            </div>
        </main>
    );
}
