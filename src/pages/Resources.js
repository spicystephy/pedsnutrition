import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Resources() {
  return (
    <div>
      <h1>Feeding your child(ren) doesn’t have to be difficult</h1>
      <h4>Click on the topic below for a printable guide</h4>
      <p>
        *All information below is generalized. Please contact your child’s
        dietitian or pediatrician for personalized information
      </p>
      <Card>
        <Card.Header as="h5">Food Log</Card.Header>
        <Card.Body>
          <Card.Text>
            Print out and use it to keep track of your child's food intake.
          </Card.Text>
          <Button
            variant="warning"
            a
            href="assets/log.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            Click Here
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Iron</Card.Header>
        <Card.Body>
          <Card.Text>
            List of foods that are good sources of iron and tips to get the most
            out of the foods your child eats.
          </Card.Text>
          <Button
            variant="warning"
            a
            href="assets/iron.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            Click Here
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Picky Eaters</Card.Header>
        <Card.Body>
          <Card.Text>Tips to help feed your picky eater. </Card.Text>
          <Button
            variant="warning"
            a
            href="assets/picky.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            Click Here
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Snacks</Card.Header>
        <Card.Body>
          <Card.Text>Ideas for nutritious and delicious snacks!</Card.Text>
          <Button
            variant="warning"
            a
            href="assets/snacks.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            Click Here
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Starting Solids</Card.Header>
        <Card.Body>
          <Card.Text>
            Tips for your infant's first foods. "Setting the table" from the
            beginning leads to successful eating and feeding skills.
          </Card.Text>
          <Button
            variant="warning"
            a
            href="assets/solids.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            Click Here
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Resources;
