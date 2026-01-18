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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left side: Text content */}
                    <div className="py-4">
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

                    <div className="grid grid-cols-4 gap-4">
                        {images.slice(0, 4).map((img, index) => (
                            <div
                                key={index}
                                className="aspect-square overflow-hidden rounded-lg shadow-sm bg-stone-100"
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
            </main>
        );
    }