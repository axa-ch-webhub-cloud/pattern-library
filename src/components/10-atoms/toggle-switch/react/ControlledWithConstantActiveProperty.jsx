import React from 'react';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';

export default class example extends React.Component {
  constructor() {
    super();
    this.change = this.change.bind(this);

    this.state = {
      active: true,
      receivedEvent: '-',
    };
  }

  change(ev) {
    // We expect 'ev.target.checked' to always contain the same value, as the active flag.
    this.setState({
      active: ev.target.checked,
      receivedEvent: String(ev.target.checked),
    });
  }

  render() {
    const { receivedEvent, active } = this.state;
    return (
      <div>
        <AXAToggleSwitchReact active={active} onChange={this.change} />
        <p>
          Received onChange event:
          <span className="axa-toggle-switch-demo__event-info">
            {receivedEvent}
          </span>
        </p>
      </div>
    );
  }
}
