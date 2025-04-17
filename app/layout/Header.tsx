import React from 'react'
import { NavLink } from 'react-router'
import { mainRoutes } from '~/routes'


const NavLinks = (): React.ReactElement[] => {
  return mainRoutes.map((route)=>(
    <NavLink to={route.path!!}>
        {route.id}
    </NavLink>
  ))
}


export default function Header() {
  return (
    <div className={"w-full flex justify-center grow-0 border-b-1 border-b-blue-300"}>
    <div className={"h-24 w-1/2 flex justify-between"}>
        <div className={"h-22 w-44 border-2"}> LOGO</div>
        <NavLinks/>
    </div>
    </div>
  )
}
