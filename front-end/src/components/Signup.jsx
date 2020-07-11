import React, { useState } from "react"
import { Form, Row, Col, Button, Nav, Navbar } from "react-bootstrap"
import "./signup.css"
import logo from "../images/Egg Logo Final-01.png"
import "./landingpage.css"
import axios from "axios"

function Signup() {
  const [authState, setAuthState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    registrationErrors: "",
  })

  const handleChange = (event) => {
    setAuthState({
      ...authState,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event) => {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation: passwordConfirmation,
    } = authState
    axios.post(
      "http://localhost:3000/signup",
      {
        user: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          passwordConfirmation: passwordConfirmation,
        },
      },
      { withCredentials: true }
    ).then(response => {
      console.log('registration response', response)
    }).catch(error => {
      console.log('registration error', error)
    })
    event.preventDefault()
  }
  return (
    <div style={{ backgroundColor: "#f4f0db", height: "100vh" }}>
      <Navbar>
        <img
          src={logo}
          width="75"
          height="90"
          className="d-inline-block align-top"
          href="/"
          alt=""
        />
        <Navbar.Brand
          style={{ fontSize: "27px", fontWeight: 300, paddingLeft: "10px" }}
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
        <h2>Make An Account</h2>
        <p>
          Sign up to connect with tons of entreprenuerial college students and
          gain access to digestable entreprenuerial curriculum and resources
        </p>
      </div>

      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Row style={{ paddingBottom: "18px" }}>
            <Col>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First name"
                value={authState.firstName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last name"
                value={authState.lastName}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={authState.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={authState.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              value={authState.passwordConfirmation}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button style={{ backgroundColor: "#2e9a9a" }} type="submit">
            Register
          </Button>
          <Nav.Link style={{ color: "#2e9a9a" }} href="/login">
            Already Have An Account?
          </Nav.Link>
        </Form>
      </div>
    </div>
  )
}

export default Signup
