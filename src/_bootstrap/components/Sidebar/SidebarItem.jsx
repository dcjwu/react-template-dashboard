import React from "react"

import { Nav } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const SidebarItem = ({
   title,
   icon,
   to
}) => {
   const location = useLocation()

   return (
      <Nav.Link active={to === location.pathname} as={Link} className="text-white"
                to={to}>
         {icon}
         <span style={{ verticalAlign: "middle" }}>{title}</span>
      </Nav.Link>
   )
}

export default SidebarItem