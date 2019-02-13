import React from "react";
import ReactDOM from "react-dom";
import withReact from "../js/with-react";
import AXAButton from "../components/m-button";

import "./todomvc/app";

const AXAButtonReact = withReact(AXAButton);

// components are loaded already in the body cause this demo is a the end of the body

class MyEventDemoReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }

  handleClick = () => {
    console.log("click");
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return [
      <axa-button onClick={this.handleClick} key={0}>
        <span>{this.state.isToggleOn ? "ON" : "OFF"}</span>
      </axa-button>,
      <AXAButtonReact onAxaClick={this.handleClick} key={1}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </AXAButtonReact>,
      <AXAButtonReact onAxaClick={this.handleClick} key={2}>
        <span>{this.state.isToggleOn ? "ON" : "OFF"}</span>
        <p>
          <em>foo {this.state.isToggleOn ? "is cool" : "is fui"}</em>
          <strong>bar {this.state.isToggleOn ? "YES" : "NO"}</strong>
        </p>
      </AXAButtonReact>
    ];
  }
}

ReactDOM.render(
  <MyEventDemoReact />,
  document.getElementById("my-event-demo-react")
);
