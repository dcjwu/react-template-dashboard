import React from "react"

import {Container, Dropdown, Image, Nav, Navbar, NavDropdown} from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

import { sidebarWidth, topBarHeight } from "../../_constants/sidebarWidth"

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <a
    ref={ref}
    href="src/_bootstrap/components/Topbar"
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
  >
    <Image
      roundedCircle
      height={44}
      src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
      width={44}
    />
  </a>
))

CustomToggle.displayName = "CustomToggle"

function Topbar() {
  const location = useLocation()

  return (
    <Navbar
      bg="light"
      fixed="top"
      style={{
        left: sidebarWidth,
        height: topBarHeight,
      }}
    >
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link active={location.pathname === "/example"} as={Link} to="/example">Example Link</Nav.Link>
          <NavDropdown id="basic-nav-dropdown" title="Dropdown">
            <NavDropdown.Item active={location.pathname === "/dashboard"} as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="/table">
              Show Table
            </NavDropdown.Item>
            <NavDropdown.Item as="button" data-bs-target="#staticBackdrop" data-bs-toggle="modal">Show Modal</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/charts">
              Show Charts
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Dropdown align="end">
          <Dropdown.Toggle as={CustomToggle} id="profile" />
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
