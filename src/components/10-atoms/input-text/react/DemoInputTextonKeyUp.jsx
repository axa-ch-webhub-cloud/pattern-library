import React from 'react';
import AXAInputText from './AXAInputText';

function DemoInputTextonKeyUp() {
  return (
    <div>
      <p>
        <span>Last key pressed: </span>
        <span id="inputtext-react-testoutput" />
      </p>
      <AXAInputText
        name="onkeyup"
        id="inputtext-react-inputfield-on-key-pressed"
        onKeyUp={e => {
          document.querySelector('#inputtext-react-testoutput').innerHTML =
            e.key;
        }}
      />
    </div>
  );
}

export default DemoInputTextonKeyUp;
