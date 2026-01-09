import React from 'react'
import type { NavLinkProps } from "react-router";
import { NavLink } from "react-router";
import { mainRoutes } from "~/routes";

export default function Header() {
  return (
      <header
          className={
            "w-full flex justify-center grow-0 border-b border-brand-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm"
          }
      >
        <div className={"h-20 w-full max-w-6xl px-6 flex justify-between items-center"}>
          <NavLink to={"/"}>
            <div className={"font-bold text-2xl tracking-tight text-brand-800"}>
              MOBEL<span className="text-brand-500">REST</span>
            </div>
          </NavLink>
          <nav className="flex gap-8">
            <NavLinks />
          </nav>
        </div>
      </header>
  );
}

const NavLinks = (): React.ReactElement[] => {
  return mainRoutes.map((route) => (
    <MainLinkButton to={route.path!!} text={route.id!!} />
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
