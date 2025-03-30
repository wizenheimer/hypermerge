import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function Page() {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col">
            <Navigation />
            <Hero />
            <Features />
            <Integrations />
            <Pricing />
            <Footer />
        </div>
    );
}
