import React, { useState, handleSubmit, validated } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <Container>
        <Row>
          <Col>
            <h2>Peds Nutrition, LLC</h2>
            <h4>Tucson AZ </h4>
            <h4>(520)777-6784</h4>
            <h4> caitlin@pedsnutrition.com</h4>
          </Col>
          <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First name *</Form.Label>
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Last name *</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Phone Number *</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    placeholder="123-456-7890"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>What is your primary concern? *</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Row>

              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* <p>Insert form here: Your Name* (First Name and Last Name), Phone*((###)### ####), Email, Primary Concern*, Submit Btn</p> */}
      <h2>Form Coming Soon</h2>
    </div>
  );
}
export default Contact;
