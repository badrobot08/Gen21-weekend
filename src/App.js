import logo from "./logo.svg";
import React, { useState } from "react";
import Form from "./CRUD BootStrap/FormBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FormList from "./CRUD BootStrap/FormList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [persons, setpersons] = useState([
    {
      name: "Joel",
      description: "Like coding",
      id: uuidv4(),
    },
    {
      name: "Frank",
      description: "Like programming",
      id: uuidv4(),
    },
  ]);

  //console.log(persons);

  const updateState = (userName, userDescription) => {
    const newPerson = {
      name: userName,
      description: userDescription,
      id: uuidv4(),
    };

    setpersons([...persons, newPerson]);
  };

  //deletes the element with the same id
  const deletePerson = (id) => {
    const newPerson = persons.filter((person) => person.id !== id);
    setpersons(newPerson);
    // console.log(newPerson);
  };

  //edits the user data already present in the array
  const editPerson = (id, modifiedPerson) => {
    const newPerson = persons.map((person) =>
      person.id === id ? modifiedPerson : person
    );
    //{
    //   if (person.id === id) {
    //     return modifiedPerson;
    //   } else {
    //     return person;
    //   }
    // });

    setpersons(newPerson);
  };

  return (
    <div className="App">
      <Form getData={updateState} />
      <FormList listData={persons} delete={deletePerson} edit={editPerson} />
    </div>
  );
}

export default App;
