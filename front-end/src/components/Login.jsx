import React from "react"
import { Form, Row, Button, Nav, Navbar } from "react-bootstrap"
import logo from "../images/Egg Logo Final-01.png"
function Login() {
  return (
    <div style={{ backgroundColor: "#f4f0db", height: "100vh" }}>
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
      <div className="signup-text">
        <h2>Welcome Back!</h2>
        <p>Don't forget to tell your friends about us.</p>
      </div>

      <div className="form-container">
        <Form>
          <Row style={{ paddingBottom: "18px" }}></Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button style={{ backgroundColor: "#2e9a9a" }} type="submit">
            Login
          </Button>
          <Nav.Link style={{ color: "#2e9a9a" }} href="/signup">
            Need An Account?
          </Nav.Link>
        </Form>
      </div>
    </div>
  )
}

export default Login
