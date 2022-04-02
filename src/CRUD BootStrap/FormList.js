import React from "react";
import { Card, Button } from "react-bootstrap";

function FormList(props) {
  return (
    <div>
      {props.listData.map((item, index) => {
        return (
          <>
            <div key={index} style={{ margin: 10 }}>
              <Card style={{ width: "16rem" }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default FormList;
