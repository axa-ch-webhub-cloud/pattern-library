import React from 'react';
import ReactDOM from 'react-dom';
import withReact from '../js/with-react';
import AXAButton from '../components/m-button';

import './todomvc/app';

const AXAButtonReact = withReact(React)(AXAButton);

// components are loaded already in the body cause this demo is a the end of the body

class MyEventDemoReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }

  handleClick = () => {
    console.log('click');
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return ([
      <axa-button onClick={this.handleClick} key={0}>
        <span>{this.state.isToggleOn ? 'ON' : 'OFF'}</span>
      </axa-button>,
      <AXAButtonReact onAxaclick={this.handleClick} key={1}>{this.state.isToggleOn ? 'ON' : 'OFF'}</AXAButtonReact>,
    ]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<MyEventDemoReact />, document.querySelector('.my-event-demo-react'));
});
