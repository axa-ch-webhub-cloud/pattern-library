import React from 'react';
import AXAInputText from './AXAInputText';

const DemoInputTextonKeyDown = () => {
  return (
    <div>
      <p>
        <span>Last key pressed: </span>
        <span id="inputtext-react-testoutput" />
      </p>
      <AXAInputText
        name="onkeydown"
        id="inputtext-react-inputfield-on-key-pressed"
        onKeyDown={e => {
          document.querySelector('#inputtext-react-testoutput').textContent =
            e.key;
        }}
      />
    </div>
  );
};

export default DemoInputTextonKeyDown;
