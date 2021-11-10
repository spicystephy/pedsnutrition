import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <Container>
        <Row xs={2} lg={2}>
          <Col >
            <Image src="holder.js/100px250" fluid />
          </Col>
          <Col >
            Caitlin is a native Tucsonan and University of Arizona alum. She is
            a mother of 3 who enjoys swimming, dancing, and jigsaw puzzles.
            Before starting Peds Nutrition, LLC, Caitlin worked at Yuma County
            and Pima County WIC, Banner- University Medical Center, and Tucson
            Medical Center as a registered dietitian.
          </Col>
        </Row>
      </Container>
      {/* <Image src="holder.js/100px250" fluid /> */}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Caitlin Provencio, RD</Card.Title>
          <Card.Text>
            Caitlin is a native Tucsonan and University of Arizona alum. She is
            a mother of 3 who enjoys swimming, dancing, and jigsaw puzzles.
            Before starting Peds Nutrition, LLC she worked at Yuma County and
            Pima County WIC, Banner- University Medical Center, and Tucson
            Medical Center.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
}
export default About;
