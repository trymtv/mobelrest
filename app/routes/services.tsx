import { useState } from "react";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "Tjenester - Tone Eriksen Møbelrestaurering" },
        { name: "description", content: "Våre tjenester innen møbelrestaurering" },
    ];
};

const images = [
    { src: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1200&auto=format&fit=crop", alt: "Restaurering detalj 1" },
    { src: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop", alt: "Trearbeid" },
    { src: "https://images.unsplash.com/photo-1622325514515-5645671168f1?q=80&w=1200&auto=format&fit=crop", alt: "Verktøy og lakk" },
    { src: "https://images.unsplash.com/photo-1590055531615-f16d36efe8ec?q=80&w=1200&auto=format&fit=crop", alt: "Møbeldetalj" },
    { src: "https://images.unsplash.com/photo-1541604193435-22287d32c2c2?q=80&w=1200&auto=format&fit=crop", alt: "Ferdig produkt" },
    { src: "https://images.unsplash.com/photo-1493144476024-991f9c84b967?q=80&w=1200&auto=format&fit=crop", alt: "Verkstedmiljø" },
];

export default function TjenesterRoute() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto mb-16">
                <h1 className="text-3xl font-serif font-bold mb-8 text-stone-800 uppercase tracking-wide">
                    Tjenester
                </h1>
                <ul className="space-y-4 text-stone-700 leading-relaxed text-lg">
                    <li className="flex gap-3">
                        <span className="text-stone-400">—</span>
                        <span>Restaurering av finérte møbler, intarsia og andre innleggingsarbeider.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-stone-400">—</span>
                        <span>Trereparasjoner, komplimenteringer og konstruksjonsskader.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-stone-400">—</span>
                        <span>Ulike tradisjonelle overflatebhandlinger; transparent lakk, skjellakk (fransk polering), voksing mm.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-stone-400">—</span>
                        <span>Samarbeider med møbeltapetserer, lakkerer, tredreier, treskjærer, forgyller, smed m.fl.</span>
                    </li>
                </ul>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(img.src)}
                        className="relative group aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-stone-100"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wider uppercase text-sm">Se større</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Lightbox / Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl max-h-[90vh]">
                        <button
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-stone-300"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt="Forstørret bilde"
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}