import React from "react"

import { Nav } from "react-bootstrap"

const CollapsableItem = ({ title, icon }) => {
   return (
      <Nav.Item as="li" className="small">
         <Nav.Link active={false} className="text-white">
            {icon}
            <span style={{ verticalAlign: "middle" }}>{title}</span>
         </Nav.Link>
      </Nav.Item>
   )
}

export default CollapsableItem