import React from "react";
import { Card, Button } from "react-bootstrap";
import Eachlist from "./EachList";

function FormList(props) {
  return (
    <div>
      {props.listData.map((item) => {
        return (
          <div key={item.id} style={{ margin: 10 }}>
            <Eachlist item={item} delete={props.delete} edit={props.edit} />
          </div>
        );
      })}
    </div>
  );
}

export default FormList;
