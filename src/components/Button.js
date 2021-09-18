import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div
        className={this.props.class_name}
        onClick={() => this.props.action(this.props.number)}
      >
        <p>{this.props.text}</p>
      </div>
    );
  }
}
