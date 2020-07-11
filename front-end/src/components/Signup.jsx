import React, { useState } from "react"
import { Form, Row, Col, Button, Nav, Navbar } from "react-bootstrap"
import "./signup.css"
import logo from "../images/Egg Logo Final-01.png"
import "./landingpage.css"

function Signup() {
  const [userInfo, setUserInfo] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  })

  const emailRegex = RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

  const formValid = formErrors => {
    let valid = true;
    Object.vlaues(formErrors).forEach(val => val.length > 0 && (valid = false))
    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValid(userInfo.formErrors)) {
      console.log(`
    --Submitting--
    First Name: ${userInfo.firstName}
    Last Name: ${userInfo.lastName}
    Email: ${userInfo.email}
    Password: ${userInfo.password}
    `)
    } else {
      console.error("FORM INVALID - DISPAY ERROR MESSAGE")
    }
  }

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target;
    let formErrors = userInfo.formErrors;

    
    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : ""
        break;
      case 'lastName':
        formErrors.lastName = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : ""
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : "invalid email adress"
        break;
      case 'password':
        formErrors.password = value.length < 6 && value.length > 0 ? 'minimum 3 characters required' : ""
        break;
        default:
          break;
    }
    setUserInfo({formErrors, [name]: value}, () => console.log(userInfo))
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
        <h2>Make An Account</h2>
        <p>
          Sign up to connect with tons of entreprenuerial college students and
          gain access to digestable entreprenuerial curriculum and resources
        </p>
      </div>

      <div className="form-container">
        <Form>
          <Row style={{ paddingBottom: "18px" }}>
            <Col>
              <Form.Control name='firstName' onChange={handleChange} placeholder="First name" />
            </Col>
            <Col>
              <Form.Control name='lastName' onChange={handleChange} placeholder="Last name" />
            </Col>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={handleChange}
              type="email"
              name='email'
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              onChange={handleChange}
              type="password"
              name='password'
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button
            onSubmit={handleSubmit}
            style={{ backgroundColor: "#2e9a9a" }}
            type="submit"
          >
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
