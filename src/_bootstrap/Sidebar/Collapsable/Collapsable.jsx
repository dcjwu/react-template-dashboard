import React from "react"

import { Collapse, Nav } from "react-bootstrap"

const Collapsable = ({ title, children, isNested = false }) => {
   const [isOpen, setIsOpen] = React.useState(false)

   return (
      <Nav.Item>
         <Nav.Link active={false} aria-controls="collapse" aria-expanded={isOpen}
                   as="button" className="text-white" onClick={() => setIsOpen(prevState => !prevState)}>
            <svg className="bi bi-arrow-down-square me-2" fill="currentColor" height="16"
                 style={{
                    transform: !isOpen ? "rotate(-90deg)" : "rotate(0deg)",
                    transition: "all .2s ease-in-out"
                 }}
                 viewBox="0 0 16 16"
                 width="16" xmlns="http://www.w3.org/2000/svg">
               <path d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                     fillRule="evenodd"/>
            </svg>
            <span className={isNested ? "small" : ""} style={{ verticalAlign: "middle" }}>{title}</span>
         </Nav.Link>
         <Collapse in={isOpen}>
            <ul className="btn-toggle-nav list-unstyled fw-normal mb-0" style={{ paddingLeft: ".5rem" }}>
               {children}
            </ul>
         </Collapse>
      </Nav.Item>
   )
}

export default Collapsable