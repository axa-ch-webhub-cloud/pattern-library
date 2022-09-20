import React from 'react';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';

export default class example extends React.Component {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      checked: true,
      receivedEvent: '-',
    };
  }

  handleToggle(checked) {
    // We expect 'ev.target.checked' to always contain the same value, as the active flag.
    this.setState({
      checked,
      receivedEvent: String(checked),
    });
  }

  render() {
    const { receivedEvent, checked } = this.state;
    return (
      <div>
        <AXAToggleSwitchReact checked={checked} onToggle={this.handleToggle} />
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
