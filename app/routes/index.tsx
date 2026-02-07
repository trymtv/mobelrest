import {useRef} from "react";
import Services from "./services"; // Export the inner component from services.tsx
import Contact from "./contact";
import Directions from "~/routes/directions";
import {Welcome} from "~/routes/welcome";
import About from "~/routes/about"; // Export the inner component from contact.tsx

export default function Index() {

    return (
        <div className="flex flex-col">
            <section id="hjem">
                <Welcome/>
            </section>

            <section id="tjenester">
                <Services/>
            </section>

            <section id="veibeskrivelse">
                <Directions/>
            </section>

            <section id="om-verkstedet">
                <About/>
            </section>

            <section id="kontakt">
                <Contact/>
            </section>
        </div>
    );
}
