export default function Directions() {
    function nativeMapUrl(address): string {
        const encodedAddress = encodeURIComponent(address);
        const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);

        if (isIOS) {
            // Opens Apple Maps on iOS
            return `maps://maps.apple.com/?q=${encodedAddress}`;
        } else {
            // Opens Google Maps on Android/Others
            return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        }
    }
    const workshopAddress = "Munkerudkleiva 9, 1164 Oslo";
    return (
        <main className="container mx-auto px-4 py-12 space-y-30">
            <div className="flex flex-col md:flex-row gap-12 items-center lg:justify-center">
                {/* Left Column: Text Content */}
                <div className="w-full md:w-1/2 lg:max-w-md">
                    <h2 className="text-3xl font-serif font-bold mb-4 text-stone-800">
                        Besøk verkstedet
                    </h2>
                    <p className="text-lg font-medium mb-6 text-stone-600">
                        Du finner meg i tilgjengelige lokaler med bra med parkering.
                    </p>
                    <div className="space-y-4 text-stone-700 leading-relaxed mb-8">
                        <p>
                            Verkstedet er åpent fra mandag til fredag kl. 08:30 til 16:30, eller etter avtale. Ta gjerne <a href={"#kontakt"}><u>kontakt</u></a> for å avtale et tidspunkt for befaring av dine møbler.
                        </p>
                        <div className="pt-2">
                            <p className="font-bold text-stone-800">Adresse:</p>
                            <p>{workshopAddress}</p>
                        </div>
                    </div>

                    <a
                        href={nativeMapUrl(workshopAddress)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-stone-800 text-stone-50 px-6 py-3 rounded-md font-medium hover:bg-stone-700 transition-colors shadow-sm"
                    >
                        Åpne veibeskrivelse 🔗
                    </a>
                </div>

                {/* Right Column: Workshop Image */}
                <div className="w-full md:w-1/2">
                    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
                            alt="Interiør fra verkstedet"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
