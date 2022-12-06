import React from 'react';
import AXAInputText from './AXAInputText';

const DemoInputTextOnPaste = () => (
  <div>
    <p>
      <span>See console.log </span>
    </p>
    <AXAInputText
      name="onkeyup"
      id="inputtext-react-inputfield-on-key-pressed"
      onPaste={ev => {
        /* eslint-disable-next-line no-console */
        console.log(ev)
      }}
    />
  </div>
);

export default DemoInputTextOnPaste;
