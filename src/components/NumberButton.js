import React, { Component } from "react";

export default class NumberButton extends Component {
  render() {
    const btn = {
      backgroundColor: "grey",
      color: "white",
    };
    return (
      <div
        className={this.props.class_name}
        onClick={() => this.props.action(this.props.number)}
      >
        <p>{this.props.number}</p>
      </div>
    );
  }
}
