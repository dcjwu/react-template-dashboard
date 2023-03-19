import React from "react"

import { Container, Dropdown, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"

import { sidebarWidth, topBarHeight } from "../_constants/sidebarWidth"

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
   <a ref={ref}
      href=""
      onClick={(e) => {
         e.preventDefault()
         onClick(e)
      }}
   >
      <Image roundedCircle height={44}
             src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
             width={44}/>
   </a>
))

CustomToggle.displayName = "CustomToggle"

const Topbar = () => {

   return (
      <Navbar bg="light" fixed="top"
              style={{
                 left: sidebarWidth,
                 height: topBarHeight
              }}>
         <Container fluid>
            <Nav className="me-auto">
               <Nav.Link href="#">Example Link</Nav.Link>
               <NavDropdown id="basic-nav-dropdown" title="Dropdown">
                  <NavDropdown.Item href="#action/3.1">Link</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                     Another Link
                  </NavDropdown.Item>
                  <NavDropdown.Item as="button">Button</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="#action/3.4">
                     Separated Link
                  </NavDropdown.Item>
               </NavDropdown>
            </Nav>
            <Dropdown align="end">
               <Dropdown.Toggle as={CustomToggle} id="profile"/>
               <Dropdown.Menu>
                  <Dropdown.Item href="#">
                     Profile
                  </Dropdown.Item>
                  <Dropdown.Item as="button" href="#">
                     Logout Button
                  </Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
         </Container>
      </Navbar>
   )
}

export default Topbar