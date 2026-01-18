import React, { useState } from 'react'
import type { NavLinkProps } from "react-router";
import { NavLink } from "react-router";
import { mainRoutes } from "~/routes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <header
          className={
            "w-full flex flex-col items-center grow-0 border-b border-brand-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm"
          }
      >
        <div className={"h-20 w-full max-w-6xl px-6 flex justify-between items-center"}>
          <NavLink to={"/"}>
            <div className={"font-bold text-2xl tracking-tight text-brand-800"}>
              TONE ERIKSEN <span className="text-brand-500">MØBELRESTAURERING</span>
            </div>
          </NavLink>

              {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <NavLinks />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <nav className="md:hidden w-full bg-white border-t border-brand-100 flex flex-col p-4 gap-4 shadow-inner">
            <NavLinks />
          </nav>
        )}
      </header>
  );
}

const NavLinks = (): React.ReactElement[] => {
    const sections = [
        { id: "hjem", label: "Hjem", href: "#" },
        { id: "om-oss", label: "Om Oss", href: "#om-oss" },
        { id: "tjenester", label: "Tjenester", href: "#tjenester" },
        { id: "kontakt", label: "Kontakt", href: "#kontakt" },
    ];

    return sections.map((section) => (
        <a
            key={section.id}
            href={section.href}
            className="text-sm font-medium transition-colors hover:text-brand-600 text-brand-500"
            onClick={(e) => {
                if (section.href.startsWith("#")) {
                    e.preventDefault();
                    document.getElementById(section.id.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", `/${section.id}`);
                }
            }}
        >
            {section.label}
        </a>
    ));
};

type LinkButtonProps = {
  to: String;
  text: String;
} & NavLinkProps;

function MainLinkButton({ to, text }: LinkButtonProps) {
  return (
      <NavLink
          to={to}
          className={({ isActive }) => {
            return `text-sm font-medium transition-colors hover:text-brand-600 ${
                isActive ? "text-brand-800 border-b-2 border-brand-800" : "text-brand-500"
            }`;
          }}
      >
        {text}
      </NavLink>
  );
}
