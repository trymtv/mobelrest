import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["om-oss", "tjenester", "kontakt"];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjusts when the section is considered "active"
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
      <header
          className={
            "w-full flex flex-col items-center grow-0 border-b border-brand-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm"
          }
      >
        <div className={"min-h-20 py-4 w-full max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-4"}>
          <NavLink to={"/"}>
            <div className={"font-bold text-xl md:text-2xl tracking-tight text-brand-800 text-center md:text-left"}>
              TONE ERIKSEN <span className="text-brand-500">MØBELRESTAURERING</span>
            </div>
          </NavLink>

          <nav className="flex gap-6 md:gap-8">
            <NavLinks activeSection={activeSection} />
          </nav>
        </div>
      </header>
  );
}

const NavLinks = ({ activeSection }: { activeSection: string }): React.ReactElement[] => {
    const sections = [
        { id: "tjenester", label: "Tjenester", href: "#tjenester" },
        { id: "om-oss", label: "Om Oss", href: "#om-oss" },
        { id: "kontakt", label: "Kontakt", href: "#kontakt" },
    ];

    return sections.map((section) => (
        <a
            key={section.id}
            href={section.href}
            className={`text-xs md:text-sm font-medium transition-colors hover:text-brand-600 ${
                activeSection === section.id ? "text-brand-800 border-b-2 border-brand-800" : "text-brand-500"
            }`}
            onClick={(e) => {
                if (section.href.startsWith("#")) {
                    e.preventDefault();
                    const element = document.getElementById(section.id);
                    if (element) {
                        const offset = 80; // Header height
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = element.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                    window.history.pushState(null, "", `/#${section.id}`);
                }
            }}
        >
            {section.label}
        </a>
    ));
};
