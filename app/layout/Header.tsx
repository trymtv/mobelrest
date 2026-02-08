import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router";
import logo from "../../images/mestermerket.png";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const isScrollingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sections = ["hjem", "tjenester", "veibeskrivelse", "om-verkstedet", "kontakt"];
    
    const handleScrollEnd = () => {
      isScrollingRef.current = false;
    };

    // scrollend has limited support, so we use it where available
    window.addEventListener("scrollend", handleScrollEnd);

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1,
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
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
      <header
          className={
            "w-full flex flex-col items-center grow-0 border-b border-brand-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm"
          }
      >
        <div className={"min-h-20 py-4 w-full max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-4"}>
          <NavLink to={"/"} className="flex items-center gap-4">
            <img src={logo} alt="Mestermerket" className="h-10 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <div className={"font-bold text-xl md:text-2xl tracking-tight text-brand-800 text-center md:text-left"}>
              TONE ERIKSEN <span className="text-brand-500">MØBELRESTAURERING</span>
            </div>
          </NavLink>

          <nav className="flex gap-6 md:gap-8">
            <NavLinks 
                activeSection={activeSection} 
                setActiveSection={setActiveSection} 
                isScrollingRef={isScrollingRef}
                scrollTimeoutRef={scrollTimeoutRef}
            />
          </nav>
        </div>
      </header>
  );
}

const NavLinks = ({
  activeSection,
  setActiveSection,
  isScrollingRef,
  scrollTimeoutRef
}: {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isScrollingRef: React.MutableRefObject<boolean>;
  scrollTimeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
}): React.ReactElement[] => {
    const sections = [
        { id: "tjenester", label: "Tjenester", href: "#tjenester" },
        { id: "veibeskrivelse", label: "Veibeskrivelse", href: "#veibeskrivelse" },
        { id: "om-verkstedet", label: "Om verkstedet", href: "#om-verkstedet" },
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
                        (e.currentTarget as HTMLAnchorElement).blur();
                    
                        isScrollingRef.current = true;
                        setActiveSection(section.id);

                        // Fallback for browsers (like older iOS Safari) that don't support 'scrollend'
                        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
                        scrollTimeoutRef.current = setTimeout(() => {
                            isScrollingRef.current = false;
                        }, 1000); // Typical smooth scroll duration safety
                    
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
