import React from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import "./signup.css"
function Signup() {
  return (
    <div style={{ backgroundColor: "#f4f0db", height: "100vh" }}>
      <div className='signup-text'> 
      <h2 >Make An Account</h2>
      <p>
        Sign up to connect with tons of entreprenuerial college students and
        gain access to digestable entreprenuerial curriculum and resources
      </p></div>
     
      <div className="form-container">
      
        <Form>
          <Row style={{ paddingBottom: '18px' }}>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button style={{ backgroundColor: "#2e9a9a" }} type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Signup
