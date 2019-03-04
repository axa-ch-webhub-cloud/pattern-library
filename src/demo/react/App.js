/* eslint-disable react/jsx-filename-extension */

import React, { Component, createElement } from 'react';
import '../../components/molecules/button';
import createAXAButtonReact from '../../components/molecules/button/index.react';

const AXAButtonReact = createAXAButtonReact(createElement);

class App extends Component {
  handleAXAButtonClick = () => {
    /* eslint-disable no-alert */

    window.alert('Oo yeah you clicked me');

    /* eslint-enable no-alert */
  };

  render() {
    return (
      <div>
        <div>
          <p>with react wrapper - callback props are possible:</p>
          <AXAButtonReact color="red" onClick={this.handleAXAButtonClick}>
            I&apos;m clickable
          </AXAButtonReact>
        </div>
        <div>
          <p>Disabled state:</p>
          <axa-button disabled>I&apos;m disabled</axa-button>
        </div>

        <div>
          <p>Type states:</p>
          <axa-button>I&apos;m type button(default)</axa-button>
          <axa-button type="submit">I&apos;m type submit</axa-button>
          <axa-button type="reset">I&apos;m type reset</axa-button>
        </div>

        <div>
          <p>Size states:</p>
          <axa-button icon-dir="right" icon-name="" size="sm">
            I&apos;m small
          </axa-button>
          <axa-button>I&apos;m default</axa-button>
          <axa-button size="lg">I&apos;m large</axa-button>
        </div>

        <div>
          <p>Color states:</p>
          <axa-button>I&apos;m default</axa-button>
          <axa-button color="red">I&apos;m red</axa-button>
        </div>

        <div>
          <p>Color with ghost states:</p>
          <axa-button ghost>I&apos;m ghost and default</axa-button>
          <axa-button ghost color="red">
            I&apos;m ghost and red
          </axa-button>
          <div style={{ background: '#00008f', marginTop: 10, height: '100px', width: '500px', paddingTop: '30px', paddingBottom: '30px' }}>
            <p style={{ color: '#fff', marginTop: 0 }}>Style focus color: axa-button color: hotpink</p>
            <axa-button ghost color="white">
              I&apos;m ghost and white
            </axa-button>
          </div>
        </div>

        <div>
          <p>Motion with colors states:</p>
          <axa-button motion>I&apos;m motion and default</axa-button>
          <axa-button motion color="red">
            I&apos;m Motion and default
          </axa-button>
        </div>

        <div>
          <p>Motion and ghost with Color states:</p>
          <axa-button motion ghost>
            I&apos;m Motion, ghost and default
          </axa-button>
          <axa-button motion ghost color="red">
            I&apos;m motion, ghost and red
          </axa-button>
          <div style={{ background: '#00008f', marginTop: 10, height: '100px', width: '500px', paddingTop: '30px', paddingBottom: '30px' }}>
            <p style={{ color: '#fff', marginTop: 0 }}>Style focus color: axa-button color: hotpink</p>
            <axa-button ghost motion color="white">
              I&apos;m motion, ghost and white
            </axa-button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
