import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function FormBootstrap(props) {
  const [userName, setuserName] = useState("");
  const [userDescription, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.getData(userName, userDescription);
  };

  return (
    <div>
      <Card style={{ width: 500 }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={userName}
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={userDescription}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
