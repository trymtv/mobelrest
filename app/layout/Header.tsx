import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const isScrollingRef = React.useRef(false);

  useEffect(() => {
    const sections = ["hjem", "tjenester", "om-oss", "kontakt"];
    
    // Listener to unlock the observer when smooth scroll ends
    const handleScrollEnd = () => {
      isScrollingRef.current = false;
    };
    window.addEventListener("scrollend", handleScrollEnd);

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // If we are currently scrolling via a link click, ignore observer updates
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          // Update the URL hash without jumping the page
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActiveSection(hash);
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
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
            <NavLinks 
                activeSection={activeSection} 
                setActiveSection={setActiveSection} 
                isScrollingRef={isScrollingRef} 
            />
          </nav>
        </div>
      </header>
  );
}

const NavLinks = ({
  activeSection,
  setActiveSection,
  isScrollingRef
}: {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isScrollingRef: React.MutableRefObject<boolean>;
}): React.ReactElement[] => {
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
                    
                    isScrollingRef.current = true;
                    setActiveSection(section.id);
                    
                    const element = document.getElementById(section.id);
                    if (element) {
                        const offset = 80;
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = element.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;

                            window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                            });
                            
                            // No timeout needed! The 'scrollend' listener in useEffect 
                            // will set isScrollingRef.current = false for us.
                        }
                        window.history.pushState(null, "", `/#${section.id}`);
                    }
                }}
        >
            {section.label}
        </a>
    ));
};
