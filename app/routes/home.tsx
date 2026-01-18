import {useRef} from "react";
import {Welcome} from "../welcome/welcome";
import About from "./about"; // Export the inner component from about.tsx
import Services from "./services"; // Export the inner component from services.tsx
import Contact from "./contact"; // Export the inner component from contact.tsx

export default function Home() {

    return (
        <div className="flex flex-col">
            <section id="hjem" className="min-h-screen">
                <Welcome/>
            </section>

            <section id="tjenester" className="py-20 bg-stone-50">
                <Services/>
            </section>

            <section id="om-oss" className="py-20 border-t border-stone-100">
                <About/>
            </section>

            <section id="kontakt" className="py-20">
                <Contact/>
            </section>
        </div>
    );
}
