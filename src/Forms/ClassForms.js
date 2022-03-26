import React, { Component } from "react";
import ClassState from "../State Components/ClassState";

class ClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        {
          personName: "Abubakar Nyarko",
          personGen: 21,
        },
        {
          personName: "Valdimir Doris",
          personGen: 11,
        },
        {
          personName: "Demitry Selorm",
          personGen: 11,
        },
      ],

      userName: "",
      userGen: 0,
    };
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit=(e)=>{
      e.preventDefault();
      let newPerson ={
          personName: this.state.userName,
          personGen:this.state.userGen
      }

      this.setState({
          persons:[...this.state.persons,newPerson],
          userName:'',
          userGen:0
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <br />
          <input
            placeholder="name"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <br />
          <label>Gen</label>
          <br />
          <input
            placeholder="Gen"
            type={"number"}
            name="userGen"
            value={this.state.userGen}
            onChange={this.handleChange}
          />
          <br />
          <button>submit</button>
        </form>

        <br />
        {this.state.persons.map((item, index) => {
          return (
            <div key={index}>
              <h2>Name: {item.personName}</h2>
              <h2>Gen: {item.personGen}</h2>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ClassForm;
