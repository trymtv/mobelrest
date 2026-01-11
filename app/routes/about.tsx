export function meta() {
    return [
        { title: "Om Oss - Tone Eriksen Møbelrestaurering" },
        { name: "description", content: "Lær mer om Tone Eriksen Møbelrestaurering" },
    ];
}

export default function AboutRoute() {
    return <About />;
}

function About() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-12 items-center lg:justify-center">
                {/* Left Column: Text Content */}
                <div className="w-full md:w-1/2 lg:max-w-md">
                    <h1 className="text-3xl font-serif font-bold mb-6 text-stone-800 uppercase tracking-wide">
                        Om verkstedet
                    </h1>
                    <div className="space-y-6 text-stone-700 leading-relaxed">
                        <p className="text-lg">
                            Restaureringsverkstedet ligger på Nordstrand i Oslo, tilknyttet Nordstrand håndverksenter med bl.a møbeltapetserer Anne Vasstveit og Oslo Møbelsnekkeri AS.
                        </p>
                        <p>
                            Verkstedet ble etablert i -96 etter endt restaureringseksamen ved Carl Malmsten skola i Stockholm og praksis i Paris. Tidligere utdannet og praktisert som møbelsnekker (svennebrev -87/ mesterbrev -93).
                        </p>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="w-full md:w-1/2">
                    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop"
                            alt="Verksted interiør"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}