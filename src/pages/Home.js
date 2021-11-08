import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div>
      
      <Card className="text-center">
        <Card.Title>What We Do</Card.Title>
        <Card.Header>
          Our dietitian will work with you to help you meet your child’s
          nutritional goals.
        </Card.Header>
        <Card.Body>
          We want to give your child a jump start to their healthy ever after
          <Card.Text>Personalized Nutrition</Card.Text>
          <p>
            Getting you and your child from where you are to where you want to
            be
          </p>
        </Card.Body>
      </Card>
      <CardGroup className="text-center">
      <Card  style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Infants </Card.Title>
          <Card.Text>
            We can help with growth issues, fortification, and introducing
            solids.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Toddlers</Card.Title>
          <Card.Text>
            We want to eliminate meal time battles and put an end to picky
            eating.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>All Children</Card.Title>
          <Card.Text>
            We want to help any child with growth issues, food allergies, GI
            issues, and more.
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
    </div>
  );
}
export default Home;
