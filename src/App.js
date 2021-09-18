import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import NumberButton from "./components/NumberButton";

import React, { Component } from "react";

export default class App extends Component {
  inputs = [];
  operationType = null;

  initialState = {
    display: "0",
    operation: null,
    result: 0,
  };

  state = Object.assign(this.initialState);

  componentDidUpdate() {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
    console.log("this.inputs");
    console.log(this.inputs);
    console.log("this.inputs.length");
    console.log(this.inputs.length);

    console.log("display:");
    console.log(this.state.display);
    console.log("operation:");
    console.log(this.operationType);
    console.log("bbbbbbbbbbbbbbbbbb");
  }

  clear = () => {
    this.inputs = [];
    this.setState(this.initialState);
  };

  getDigit = (d) => {
<<<<<<< HEAD
    let str_res;

    if (!this.state.new_input_active) {
      console.log("if....");

      // setting the first number
      str_res = this.state.numbers[0]; //using existing number to concatenate

      let new_str_res = str_res + d;
      if (new_str_res.charAt(0) == "0") {
        new_str_res = new_str_res.slice(1);
      }
      console.log("new_str_res");
      console.log(new_str_res);
      this.setState({ numbers: [new_str_res] });
    } else {
      console.log("else....");
      if (this.state.jumped) {
        str_res = this.state.numbers[0];
      } else {
        str_res = "0";
      }
      let new_str_res = str_res + d;
      if (new_str_res.charAt(0) == "0") {
        new_str_res = new_str_res.slice(1);
      }
      console.log("new_str_res");
      console.log(new_str_res);
      console.log("this.state.numbers[0]");
      console.log(this.state.numbers[0]);
      this.setState({
        jumped: true,
        numbers: [new_str_res, this.state.numbers[0]],
      });
=======
    let combined_display;

    if (this.state.display.includes("Enter 2nd input for")) {
      combined_display = d;
    } else {
      let display = this.state.display;
      combined_display = display + d;
    }

    if (combined_display.charAt(0) === "0" && combined_display.length > 1) {
      combined_display = combined_display.slice(1);
>>>>>>> 4states
    }
    this.setState({ display: combined_display });
  };

  operation = (operation) => {
    this.inputs.push(this.state.display);
    if (this.operationType && this.inputs.length === 2) {
      this.calculate();
    }
    this.operationType = operation;
    this.setState({ display: `Enter 2nd input for ${operation}` });
  };

  percent = () => {
    let screenumber = Number(this.state.display);
    let percented = screenumber / 100;

    this.setState({ display: percented.toString() });
    // this.inputs[0] = Number(this.state.display);
    // this.inputs[1] = 100;
    // this.operationType = "divide";
    // this.setState({ operation: "divide" });
    // this.calculate();
  };

  equal = () => {
    this.inputs.push(this.state.display);
    this.calculate();

    this.setState({ operation: null, display: "0" });
  };

  negate = () => {
    if (!this.state.display.includes("Enter 2nd input for")) {
      let negated;
      if (this.state.display.charAt(0) === "-") {
        negated = this.state.display.slice(1);
      } else {
        negated = "-" + this.state.display;
      }
      this.setState({ display: negated });
    }
  };

  calculate = () => {
    let num1 = Number(this.inputs[0]);
    let num2 = Number(this.inputs[1]);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    let result;

    console.log("this.operationType: " + this.operationType);
    switch (this.operationType) {
      case "addition":
        result = num1 + num2;
        break;

      case "divide":
        result = num1 / num2;
        break;

      case "multiply":
        result = num1 * num2;
        break;

      case "minus":
        result = num1 - num2;
        break;

      default:
        break;
    }

    console.log("result: " + result);
    this.inputs = [result];
    this.setState({ result });
  };

  render() {
    return (
      <div className="App">
        <div className="display">
          <p>{this.state.display}</p>
        </div>
        <div className="result">
          <p>Result: {this.state.result}</p>
        </div>
        <Button text="Clear" class_name="ac" action={this.clear} />
        <Button text="+/-" class_name="polarity" action={this.negate} />
        <Button text="%" class_name="percent" action={this.percent} />

        <Button
          text="/"
          class_name="divide"
          action={() => this.operation("divide")}
        />
        <NumberButton number="7" class_name="seven" action={this.getDigit} />
        <NumberButton number="8" class_name="eight" action={this.getDigit} />
        <NumberButton number="9" class_name="nine" action={this.getDigit} />
        <Button
          text="x"
          class_name="multi"
          action={() => this.operation("multiply")}
        />
        <NumberButton number="4" class_name="four" action={this.getDigit} />
        <NumberButton number="5" class_name="five" action={this.getDigit} />
        <NumberButton number="6" class_name="six" action={this.getDigit} />
        <Button
          text="-"
          class_name="minus"
          action={() => this.operation("minus")}
        />
        <NumberButton number="1" class_name="one" action={this.getDigit} />
        <NumberButton number="2" class_name="two" action={this.getDigit} />
        <NumberButton number="3" class_name="three" action={this.getDigit} />
        <Button
          text="+"
          class_name="plus"
          action={() => this.operation("addition")}
        />
        <NumberButton number="0" class_name="zero2" action={this.getDigit} />
        <NumberButton number="." class_name="dot1" action={this.getDigit} />
        <Button text="=" class_name="equal" action={this.equal} />
      </div>
    );
  }
}
