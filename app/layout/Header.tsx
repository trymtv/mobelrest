import React from 'react'
import type { NavLinkProps } from "react-router";
import { NavLink } from "react-router";
import { mainRoutes } from "~/routes";

export default function Header() {
  return (
    <div
      className={
        "w-full flex justify-center grow-0 border-b-dbrown border-b-4 bg-lbrown"
      }
    >
      <div className={"h-24 w-1/2 flex justify-between items-center"}>
        <NavLink to={"/"}>
          <div className={"h-22 w-44 border-2"}> LOGO</div>
        </NavLink>
        <NavLinks />
      </div>
    </div>
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
  const className = "h-fit";
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return className + (isActive ? " border-b-2" : "");
      }}
    >
      <div className={"text-xl"}>{text}</div>
    </NavLink>
  );
}
