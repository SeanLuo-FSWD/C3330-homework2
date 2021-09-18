import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import NumberButton from "./components/NumberButton";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    numbers: ["0"],
    decimal: false,
    new_input_active: false,
    operation: null,
    jumped: false,
  };

  componentDidUpdate() {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
    console.log("numbers:");
    console.log(this.state.numbers);
    console.log("decimal:");
    console.log(this.state.decimal);
    console.log("new_input_active:");
    console.log(this.state.new_input_active);
    console.log("operation:");
    console.log(this.state.operation);
    console.log("bbbbbbbbbbbbbbbbbb");
  }

  setDecimal = () => {
    this.setState({ decimal: true });
    if (!this.state.decimal) {
      this.getDigit(".");
    }
  };

  clear = () => {
    this.setState({ decimal: false, numbers: ["0"] });
  };

  getDigit = (d) => {
    let str_res;

    if (!this.state.new_input_active) {
      // setting the first number
      str_res = this.state.numbers[0]; //using existing number to concatenate

      let new_str_res = str_res + d;
      console.log("new_str_res.charAt(0)");
      console.log(new_str_res.charAt(0));
      if (new_str_res.charAt(0) == "0") {
        new_str_res = new_str_res.slice(1);
      }
      this.setState({ numbers: [new_str_res] });
    } else {
      if (this.state.jumped) {
        str_res = this.state.numbers[0];
      } else {
        str_res = "0";
      }
      let new_str_res = str_res + d;
      if (new_str_res.charAt(0) == "0") {
        new_str_res = new_str_res.slice(1);
      }
      this.setState({
        jumped: true,
        numbers: [new_str_res, this.state.numbers[0]],
      });
    }
  };

  operation = (operation) => {
    this.setState({ new_input_active: true, operation });
    if (this.state.operation && this.state.numbers.length > 1) {
      this.calculate();
    }

    this.setState({ operation });
  };

  calculate = () => {
    let num1 = Number(this.state.numbers[0]);
    let num2 = Number(this.state.numbers[1]);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    let result;

    console.log("this.state.operation: " + this.state.operation);
    switch (this.state.operation) {
      case "addition":
        result = num1 + num2;
        break;

      default:
        break;
    }

    console.log("result: " + result);

    this.setState({ numbers: [result.toString()], new_input_active: false });
  };

  render() {
    return (
      <div className="App">
        <div className="result">
          <p>{this.state.numbers[0]}</p>
        </div>
        <Button text="AC" class_name="ac" action={this.clear} />
        <Button text="+/-" class_name="polarity" />
        <Button text="%" class_name="percent" />
        <Button text="/" class_name="divide" />
        <NumberButton number="7" class_name="seven" action={this.getDigit} />
        <NumberButton number="8" class_name="eight" action={this.getDigit} />
        <NumberButton number="9" class_name="nine" action={this.getDigit} />
        <Button text="x" class_name="multi" />
        <NumberButton number="4" class_name="four" action={this.getDigit} />
        <NumberButton number="5" class_name="five" action={this.getDigit} />
        <NumberButton number="6" class_name="six" action={this.getDigit} />
        <Button text="-" class_name="minus" />
        <NumberButton number="1" class_name="one" action={this.getDigit} />
        <NumberButton number="2" class_name="two" action={this.getDigit} />
        <NumberButton number="3" class_name="three" action={this.getDigit} />
        <Button
          text="+"
          class_name="plus"
          action={() => this.operation("addition")}
        />
        <NumberButton number="0" class_name="zero2" />

        <Button text="." class_name="dot1" action={this.setDecimal} />
        <Button text="=" class_name="equal" />
      </div>
    );
  }
}
