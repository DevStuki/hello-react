import React, { Component } from "react";
// import MyComponent from "./MyComponent";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";
// import ScrollBox from "./ScrollBox";
// import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import "./App.css";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000"
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Random Color</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
