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
];

    export default function TjenesterRoute() {
        return (
            <main className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-12 items-center lg:justify-center">
                    {/* Left side: Text content */}
                    <div className="w-full md:w-1/2 lg:max-w-md">
                        <h1 className="text-3xl font-serif font-bold mb-6 text-stone-800 uppercase tracking-wide">
                            Tjenester
                        </h1>
                        <p className="text-lg font-medium mb-6 text-stone-600">
                            Vi tilbyr et bredt spekter av tjenester innen restaurering og vedlikehold av møbler.
                        </p>
                        <ul className="space-y-4 text-stone-700 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-stone-400">•</span>
                                <span>Restaurering av finérte møbler, intarsia og andre innleggingsarbeider.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-stone-400">•</span>
                                <span>Trereparasjoner, komplimenteringer og konstruksjonsskader.</span>
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
                                <div
                                    key={index}
                                    className="aspect-square overflow-hidden rounded-lg shadow-lg bg-stone-100"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }