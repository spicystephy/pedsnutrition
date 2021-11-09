import React from "react";
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"

function Footer() {
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Location</Card.Title>
          <Card.Text>Tucson, AZ</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>(520)777-6784</Card.Text>
          <Card.Text>caitlin@pedsnutrition.com</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Follow</Card.Title>
          <Card.Text>
            Instagram, Facebook
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    // <div>
    //   <h1>Let's Talk!</h1>
    //   <h2>Contact us today to get started</h2>
    //   {/* <h2>referral btn</h2> */}
    //   <div>
    //     <p>Location: Tucson, Az</p>
    //     <p>Contact:</p>
    //     <a href="tel:520-777-6784">(520)777-6784</a> <a href="mailto:caitlin@pedsnutrition.com">caitlin@pedsnutrition.com</a>
    //     <p>Follow: Insta Link, FB Link</p>
    //   </div>
    // </div>
  );
}

export default Footer;
