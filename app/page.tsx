'use client';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function Page() {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col" data-oid="n-y-gfk">
            <Navigation data-oid="gqg.xjb" />
            <Hero data-oid="qjijw12" />
            <Features data-oid="bk0b5fu" />
            <Integrations data-oid="j:h4__." />
            <Pricing data-oid="2b49qcc" />
            <Footer data-oid="m::zf2g" />
        </div>
    );
}
