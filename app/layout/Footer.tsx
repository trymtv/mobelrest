import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full bg-brand-900 text-brand-100 py-12 mt-auto">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="space-y-4">
                    <div className="font-bold text-xl tracking-tight">
                        TONE ERIKSEN MØBELRESTAURERING
                    </div>
                    <div className="text-brand-400 text-sm space-y-1">
                        <p>Tone Eriksen Møbelrestaurering</p>
                        <p>Munkerudkleiva 9, 1164 Oslo</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                    <div className="space-y-2">
                        <h4 className="text-xs uppercase tracking-widest text-brand-500 font-semibold">Kontakt</h4>
                        <ul className="text-sm space-y-1">
                            <li>
                                <a href="tel:92425720" className="hover:text-white transition-colors">924 25 720</a>
                            </li>
                            <li>
                                <a href="mailto:tiltone@online.no" className="hover:text-white transition-colors">tiltone@online.no</a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-2 self-end md:self-start">
                        <p className="text-brand-400 text-sm">
                            © {new Date().getFullYear()} Tone Eriksen Møbelrestaurering. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}