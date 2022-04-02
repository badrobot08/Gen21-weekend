import logo from "./logo.svg";
import React, { useState } from "react";
import Form from "./CRUD BootStrap/FormBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FormList from "./CRUD BootStrap/FormList";

function App() {
  const [persons, setpersons] = useState([
    {
      name: "Joel",
      description: "Like coding",
    },
    {
      name: "Frank",
      description: "Like programming",
    },
  ]);

  console.log(persons);

  const updateState = (userName, userDescription) => {
    const newPerson = {
      name: userName,
      description: userDescription,
    };

    setpersons([...persons, newPerson]);
  };

  return (
    <div className="App">
      <Form getData={updateState} />
      <FormList listData={persons} />
    </div>
  );
}

export default App;
