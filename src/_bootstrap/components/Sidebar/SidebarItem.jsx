import React from "react"

import { Nav } from "react-bootstrap"

const SidebarItem = ({ title, icon }) => {
   return (
      <Nav.Link active={false} className="text-white">
         {icon}
         <span style={{ verticalAlign: "middle" }}>{title}</span>
      </Nav.Link>
   )
}

export default SidebarItem