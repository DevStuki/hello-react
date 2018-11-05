import React, { Component, Fragment } from "react";
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {console.log(this)}
        <ScrollBox ref={ref => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>Bottom</button>
      </div>
    );
  }
}

export default App;
