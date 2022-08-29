import React, { useState } from 'react';
import AXAInputText from './AXAInputText';

const DemoInputTextonKeyDown = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p>
        <span>Last key pressed: </span>
        <span id="inputtext-react-testoutput">{value}</span>
      </p>
      <AXAInputText
        name="onkeydown"
        id="inputtext-react-inputfield-on-key-pressed"
        onKeyDown={e => setValue(e.key)}
      />
    </div>
  );
};

export default DemoInputTextonKeyDown;
