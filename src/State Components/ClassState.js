import React, { Component } from 'react'

class ClassState extends Component {

    constructor(props){
        super(props)

        this.state={
            counter:0,

        }

        this.handleIncrease = this.handleIncrease.bind(this)
    }

    handleIncrease(e){
        e.preventDefault();

        this.setState({
            counter: this.state.counter +1
        })
        
    }


    handleDecrease=(e)=>{
        e.preventDefault();

        this.setState({
            counter:this.state.counter -1
        })

    }


  render() {
    return (
      <div>
          <h1>Counter: {this.state.counter}</h1>
          <br/>
          <button onClick={this.handleIncrease}>Increase</button>
          <button onClick={this.handleDecrease}>Decrease</button>
      </div>
    )
  }
}



export default ClassState
