import React from 'react';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';

export default class example extends React.Component {
  constructor() {
    super();

    this.state = {
      active: true,
      receivedEvent: '-'
    };
  }

  render() {
    return (
        <div>
            <AXAToggleSwitchReact active={this.state.active} onChange={this.change} />
            <p>
                Received onchange event: {this.state.receivedEvent}
            </p>
        </div>
    );
  }

  change = (ev) => {
    this.setState({ active: ev.target.checked });
    this.setState({ receivedEvent: String(ev.target.checked) });
  };
}
