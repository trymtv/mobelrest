import { useState } from "react";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "Tjenester - Tone Eriksen Møbelrestaurering" },
        { name: "description", content: "Mine tjenester innen møbelrestaurering" },
    ];
};

const images = [
    { src: "/images/saws.jpeg", alt: "Sager" },
    { src: "/images/files.jpeg", alt: "Files" },
    { src: "/images/clamps.jpeg", alt: "Tvinger" },
    { src: "/images/workbench.jpeg", alt: "Arbeidsbenk og tvinge" },
];

    export default function TjenesterRoute() {
        const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

        return (
            <main className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-12 items-center lg:justify-center">
                    {/* Left side: Text content */}
                    <div className="w-full md:w-1/2 lg:max-w-md">
                        <h1 className="text-3xl font-serif font-bold mb-6 text-stone-800 uppercase tracking-wide">
                            Tjenester
                        </h1>
                        <p className="text-lg font-medium mb-6 text-stone-600">
                            Jeg tilbyr et bredt spekter av tjenester innen restaurering og vedlikehold av møbler.
                        </p>
                        <ul className="space-y-4 text-stone-700 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-stone-400">•</span>
                                <span>Restaurering av finérte møbler, intarsia og andre innleggingsarbeider.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-stone-400">•</span>
                                <span>Trereparasjoner, komplimenteringer og konstrusskader.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-stone-400">•</span>
                                <span>Ulike tradisjonelle overflatebhandlinger; transparent lakk, skjellakk (fransk polering), voksing mm.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-stone-400">•</span>
                                <span>Samarbeider med møbeltapetserer, lakkerer, tredreier, treskjærer, forgyller, smed m.fl.</span>
                            </li>
                        </ul>
                    </div>
                    {/* Right side: Images */}
                    <div className="w-full md:w-5/12">
                        <div className="grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
                            {images.slice(0, 4).map((img, index) => (
                                <button
                                    key={index}
                                    className="aspect-square overflow-hidden rounded-lg shadow-lg bg-stone-100 hover:opacity-90 transition-opacity cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-stone-400"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal for larger image view */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-5xl w-full max-h-full flex items-center justify-center">
                            <button
                                className="absolute top-4 right-4 text-white text-3xl hover:text-stone-300 z-10 p-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                            >
                                &times;
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[90vh] object-contain rounded-sm"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )}
            </main>
        );
    }