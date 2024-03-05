import React, { Component } from "react";
import './ClassComponent.css'

export default class ClassCom extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

    increement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = () => {
        if (this.state.count > 0) {
          this.setState({
            count: this.state.count - 1
          });
        }
      };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <div className="counter">{this.state.count}</div>
        <div className="button-container">
          <button className="button" onClick={this.increement}>+</button>
          <button className="button" onClick={this.decrement}>-</button>
          <button className="button" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
