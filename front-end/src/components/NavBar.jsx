import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import "./navBar.css"
import logo from "../images/Egg Logo Final-01.png"

function NavBar() {
  return (
    <Navbar>
      <img
        src={logo}
        width="75"
        height="90"
        className="d-inline-block align-top"
        href="/"
        alt=''
      />
      <Navbar.Brand
        style={{ fontSize: "27px", fontWeight: 300, paddingLeft: "10px" }}
        href="/"
      >
        the egg
      </Navbar.Brand>

      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/roadmap">Roadmap</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/community">Community</Nav.Link>
        <Nav.Link href="/support">Support</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar
