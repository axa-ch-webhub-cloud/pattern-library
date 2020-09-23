import React from 'react';
import AXAInputText from './AXAInputText';

const DemoInputTextOnInput = () => {
  return (
    <div>
      <p>
        <span>Last key pressed: </span>
        <span id="inputtext-react-testoutput" />
      </p>
      <AXAInputText
        id="inputtext-react-on-input"
        onInput={e => {
          document.querySelector('#inputtext-react-testoutput').innerHTML =
            e.key;
        }}
      />
    </div>
  );
};

export default DemoInputTextOnInput;
