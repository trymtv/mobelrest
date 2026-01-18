import { useEffect, useRef } from "react";
import {Welcome} from "../welcome/welcome";
import  About  from "./about"; // Export the inner component from about.tsx
import  Services from "./services"; // Export the inner component from services.tsx
import Contact from "./contact"; // Export the inner component from contact.tsx

export default function Home() {
  const sectionRefs = {
    hjem: useRef<HTMLElement | null>(null),
    "om-oss": useRef<HTMLElement | null>(null),
    tjenester: useRef<HTMLElement | null>(null),
    kontakt: useRef<HTMLElement | null>(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust to trigger when section is roughly in the middle
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const newPath = id === "hjem" ? "/" : `/${id}`;
          if (window.location.pathname !== newPath) {
            window.history.replaceState(null, "", newPath);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
      <div className="flex flex-col">
        <section id="hjem" ref={sectionRefs.hjem} className="min-h-screen">
          <Welcome />
        </section>

        <section id="om-oss" ref={sectionRefs["om-oss"]} className="py-20 border-t border-stone-100">
          <About />
        </section>

        <section id="tjenester" ref={sectionRefs.tjenester} className="py-20 bg-stone-50">
          <Services />
        </section>

        <section id="kontakt" ref={sectionRefs.kontakt} className="py-20">
          <Contact />
        </section>
      </div>
  );
}
