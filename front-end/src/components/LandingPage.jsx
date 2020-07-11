import React from "react"
import "./landingpage.css"
import { Nav, Navbar, Carousel } from "react-bootstrap"
import logo from "../images/Egg Logo Final-01.png"
import photo1 from "../images/The-Egg-pg1.png"
import photo3 from "../images/The-Egg-pg3.png"
import photo4 from "../images/The-Egg-pg4.png"
import photo5 from "../images/The-Egg-pg5.png"
function LandingPage() {
  return (
    <div className="main-container">
      <Navbar>
        <img
          src={logo}
          width="75"
          height="90"
          className="d-inline-block align-top"
          href="/"
        />
        <Navbar.Brand
          style={{ fontSize: "27px", fontWeight: 300, paddingLeft: "10px" }}
          exact
          href="/landingpage"
        >
          the egg
        </Navbar.Brand>

        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
      <p className="p-carousel">
        {" "}
        At The Egg, we strive to make entrepreneurship more accessible to
        students by providing access to the foundational tools, mentors, and
        hands-on experience crucial to launching their ventures with confidence.{" "}
      </p>

      <div className="c-container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={photo1} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={photo3} alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={photo4} alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={photo5} alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default LandingPage
