import React from 'react';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';

export default class example extends React.Component {
  constructor() {
    super();

    this.state = {
      active: true,
      receivedEvent: '-',
    };
  }

  change = ev => {
    this.setState({ active: ev.target.checked });
    this.setState({ receivedEvent: String(ev.target.checked) });
  };

  render() {
    return (
      <div>
        <AXAToggleSwitchReact
          active={this.state.active}
          onChange={this.change}
        />
        <p>
          Received onchange event:
          <span className="axa-toggle-switch-demo__event-info">
            {this.state.receivedEvent}
          </span>
        </p>
      </div>
    );
  }
}
