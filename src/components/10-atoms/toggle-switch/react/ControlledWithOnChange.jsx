import React from 'react';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';

export default class example extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <AXAToggleSwitchReact active={this.state.active} onChange={this.change} />
    );
  }

  change = () => {
    this.setState({ active: !this.state.active });
  };
}
