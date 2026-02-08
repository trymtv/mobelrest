import type { Route } from "./+types/contact";

export function meta() {
    return [
        { title: "Kontakt - Tone Eriksen Møbelrestaurering" },
        { name: "description", content: "Kontakt meg for møbelrestaurering" },
    ];
}

export default function Contact() {
    return (
        <main className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row gap-12 items-start lg:justify-center">
                {/* left Column: Contact Information Card */}
                <div className="w-full md:w-1/2 lg:max-w-md">
                    <div className="bg-stone-50 p-8 rounded-lg border border-stone-200 shadow-sm">
                        <h2 className="font-serif font-bold text-xl mb-6 text-stone-800 border-b border-stone-200 pb-4">
                            Tone Eriksen Møbelrestaurering
                        </h2>

                        <ul className="space-y-6 text-stone-700">
                            <li className="flex items-start gap-4">
                                <span className="text-xl" aria-hidden="true">📍</span>
                                <div>
                                    <p className="font-medium">Besøksadresse:</p>
                                    <p>Munkerudkleiva 9</p>
                                    <p>1164 Oslo</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <a href="tel:92425720" className="flex items-start gap-4 w-full p-2 -m-2 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-all duration-200">
                                    <span className="text-xl" aria-hidden="true">📞</span>
                                    <div>
                                        <p className="font-medium text-stone-700">Telefon:</p>
                                        <p>924 25 720</p>
                                    </div>
                                </a>
                            </li>

                            <li className="flex items-start gap-4">
                                <a href="mailto:tiltone@online.no" className="flex items-start gap-4 w-full p-2 -m-2 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-all duration-200">
                                    <span className="text-xl" aria-hidden="true">✉️</span>
                                    <div>
                                        <p className="font-medium text-stone-700">E-post:</p>
                                        <p className="break-all">tiltone@online.no</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* right Column: Text Content */}
                <div className="w-full md:w-1/2 lg:max-w-md">
                    <h1 className="text-3xl font-serif font-bold mb-6 text-stone-800 uppercase tracking-wide">
                        Kontakt
                    </h1>
                    <p className="text-lg font-medium mb-6 text-stone-600">
                        Ta kontakt for en uforpliktende samtale om ditt møbelprosjekt.
                    </p>
                    <div className="space-y-6 text-stone-700 leading-relaxed">
                        <p>
                            Har du spørsmål om restaurering eller ønsker du et uforpliktende pristilbud for restaurering av dine møbler?
                        </p>
                        <p>
                            Ta gjerne kontakt per telefon eller e-post for en hyggelig samtale om ditt prosjekt. Du er også velkommen til å sende bilder av møbelet for en første vurdering.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}