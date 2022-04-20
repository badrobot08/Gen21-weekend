import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Modaledit = (props) => {
  const [userName, setuserName] = useState(props.data.name);
  const [userDescription, setDescription] = useState(props.data.description);

  //modifies the data in the state for each element
  const handleSubmit = (e) => {
    e.preventDefault();

    const modifiedData = {
      name: userName,
      description: userDescription,
      id: props.data.id,
    };

    props.edit(props.data.id, modifiedData);
  };

  return (
    <div>
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
    </div>
  );
};

export default Modaledit;
