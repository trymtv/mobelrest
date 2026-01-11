import type { Route } from "./+types/contact";

export function meta() {
    return [
        { title: "Kontakt - Restaureringsverkstedet" },
        { name: "description", content: "Kontakt oss for spørsmål eller pristilbud på restaurering av dine møbler." },
    ];
}

export default function Contact() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-12 items-start lg:justify-center">
                {/* Left Column: Text Content */}
                <div className="w-full md:w-1/2 lg:max-w-md">
                    <h1 className="text-3xl font-serif font-bold mb-6 text-stone-800 uppercase tracking-wide">
                        Kontakt
                    </h1>
                    <div className="space-y-6 text-stone-700 leading-relaxed">
                        <p className="text-lg">
                            Har du spørsmål om restaurering eller ønsker du et uforpliktende pristilbud for restaurering av dine møbler?
                        </p>
                        <p>
                            Ta gjerne kontakt per telefon eller e-post for en hyggelig samtale om ditt prosjekt. Du er også velkommen til å sende bilder av møbelet for en første vurdering.
                        </p>
                    </div>
                </div>

                {/* Right Column: Contact Information Card */}
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
                                <span className="text-xl" aria-hidden="true">📞</span>
                                <div>
                                    <p className="font-medium">Telefon:</p>
                                    <a href="tel:92425720" className="hover:text-stone-900 transition-colors">
                                        924 25 720
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="text-xl" aria-hidden="true">✉️</span>
                                <div>
                                    <p className="font-medium">E-post:</p>
                                    <a href="mailto:tiltone@online.no" className="hover:text-stone-900 transition-colors break-all">
                                        tiltone@online.no
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}