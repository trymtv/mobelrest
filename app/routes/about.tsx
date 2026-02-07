import { useState } from "react";

export function meta() {
    return [
        { title: "Om Oss - Tone Eriksen Møbelrestaurering" },
        { name: "description", content: "Lær mer om Tone Eriksen Møbelrestaurering" },
    ];
}

function DropdownSection({ title, children }: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-stone-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left focus:outline-none group"
            >
                <h2 className="text-xl font-serif font-semibold text-stone-800 group-hover:text-stone-600 transition-colors">
                    {title}
                </h2>
                <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-stone-50 text-stone-500 transform transition-all duration-300 group-hover:bg-stone-100 group-hover:text-stone-800 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div className={`mt-4 space-y-2 text-stone-700 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {children}
            </div>
        </div>
    );
}

export default function About() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-12 items-start lg:justify-center">
                {/* Left Column: Text Content */}
                <div className="w-full md:w-1/2 lg:max-w-md">
                    <h1 className="text-3xl font-serif font-bold mb-6 text-stone-800 uppercase tracking-wide">
                        Om verkstedet
                    </h1>
                    <p className="text-lg font-medium mb-6 text-stone-600">
                        Restaureringsverksted sentralt på Nordstrand i Oslo med lang erfaring.
                    </p>
                    <div className="space-y-6 text-stone-700 leading-relaxed mb-8">
                        <p>
                            Siden april 1996 har jeg drevet Tone Eriksen Møbelrestaurering i Munkerudkleiva 9 på Nordstrand.
                        </p>
                    </div>

                    <div className="border-t border-stone-200">
                        <DropdownSection title="Utdannelse og arbeidserfaring">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Endt møbelsnekkerutdannelse ved Hotet videregående, svennebrev våren 1987</li>
                                <li>Mesterbrev 1993</li>
                                <li>Møbelrestaurering ved Carl Malmstens Verkstadskola Stockholm, Lidingö Universitet, eksamen våren 1995</li>
                                <li>Ansatt ved Hugo Hodt møbelsnekkerverksted fra august -87 til våren -93.</li>
                                <li>Conservateur Jean Perfettini, Paris (hospitering under utdannelse høsten -94)</li>
                                <li>Etablering av Tone Eriksen Møbelrestaurering 1996</li>
                                <li>Oslo Snekkermesterlaug, styremedlem</li>
                            </ul>
                        </DropdownSection>

                        <DropdownSection title="Diverse kurs">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Restaureringskurs ved Nääs handverkscentrum (Folkeuniversitetet i Sverige) 1988 og 1992</li>
                                <li>Intarsiakurs ved professor Pierre Ramond fra Ecole Boulle, Paris sommeren 1995</li>
                                <li>International Symposium on Wood and Furniture Conservation i Amsterdam siden 1994</li>
                                <li>Restaureringskurs ved Høyskolen i Telemark, Institutt for folkekultur, Rauland 1998</li>
                            </ul>
                        </DropdownSection>

                        <DropdownSection title="Utmerkelser">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Mottok medalje for utmerket svenneprøve fra Norges Håndverksforbund og svenneprøvemedalje fra Oslo Håndverks og Industriforening 1987</li>
                            </ul>
                        </DropdownSection>

                        <DropdownSection title="Annen praksis">
                            <p className="mb-2">Har gjentatte ganger jobbet i Paris på flere store restaureringsprosjekter, deriblant for:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Musée du Petit-Palais</li>
                                <li>Eglise St. Gervais</li>
                                <li>Eglise St. Germain</li>
                                <li>Musée Nissim de Camondo</li>
                                <li>Musée Carnavalet</li>
                                <li>Art décoratifs</li>
                                <li>Louvre, Paris/Abu Dabi</li>
                                <li>Hôtel Lambert</li>
                                <li>Musée Guimet, des arts asiatiques</li>
                            </ul>
                        </DropdownSection>

                        <DropdownSection title="Andre større restaureringsjobber">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Centre regional de restauration et de conservation des oeuvres d’art, Vesoul, Frankrike</li>
                                <li>Alteret i St. Michael & St. Gudula katedralen i Brüssel, IRPA Belgia.</li>
                                <li>Borgarsyssel Museum, Sarpsborg</li>
                                <li>Ladegården, Oslo Bymuseum</li>
                                <li>Statsrådsbordet, Slottet</li>
                                <li>Nasjonalmuseet, Oslo</li>
                                <li>Den Norske Kirke</li>
                                <li>NIKU, Norsk Institutt for kunst, arkitektur og design</li>
                                <li>Hotel Union Øye (Corniche Interior Design)</li>
                            </ul>
                        </DropdownSection>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="w-full md:w-1/2">
                    <div className="relative w-full h-64 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
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