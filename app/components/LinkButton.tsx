import React from "react";
import { NavLink, type NavLinkProps } from "react-router";

type LinkButtonProps = {} & NavLinkProps;

export default function LinkButton({ id, ...navLinkPops }: LinkButtonProps) {
  return <NavLink {...navLinkPops}>{id}</NavLink>;
}
