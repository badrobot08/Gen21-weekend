import React from "react";

export default function (props) {
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <h3>{item.gen}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
