import React, { useState, handleSubmit, validated } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
}
function Referrals() {
  return (
    <div>
      <h1>Referrals</h1>
      <h2>
        Fill out the following. We will contact the client within 2 business
        days to schedule an appointment.
      </h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Child's First Name *</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Child's Last name *</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Child's Date of Birth *</Form.Label>
            <Form.Control required type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Reason for Referral *</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Provider's Name *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First Last, Credentials"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Provider's Phone Number *</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom06">
            <Form.Label>Provider's Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
      </Form>

      {/* <form action="skinnyskittles@hotmail.com" method="POST" autoComplete="on">
        <h3>
          Child's Name{" "}
          <span class="required" aria-hidden="true">
            *
          </span>
        </h3>
        <label>
          First Name:
          <input type="text" name="fname" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lname" />
        </label>
        <br></br>
        <h3>
          Child's Date of Birth{" "}
          <span class="required" aria-hidden="true">
            *
          </span>
        </h3>
        <label>
          <input type="date" name="dob" />
        </label>
        <br></br>
        <h3>
          Reason for Referral{" "}
          <span class="required" aria-hidden="true">
            *
          </span>
        </h3>
        <label>
          <textarea type="text" name="referral" rows="5" cols="30" />
        </label>
        <br></br>
        <h3>
          Your Name and Preferred Contact Method{" "}
          <span class="required" aria-hidden="true">
            *
          </span>
        </h3>
        <label>
          If you prefer email, please provide one:
          <textarea type="text" name="contact" rows="5" cols="30" />
        </label>
        <br></br>
        <h3>
          Phone{" "}
          <span class="required" aria-hidden="true">
            *
          </span>
        </h3>
        <label>
          <input
            type="tel"
            name="phone"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>*/}
    </div>
  );
}
export default Referrals;
