import React, { useState } from 'react';
import AXAInputText from './AXAInputText';

const DemoInputTextonKeyUp = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p>
        <span>Last key pressed: </span>
        <span id="inputtext-react-testoutput">{value}</span>
      </p>
      <AXAInputText
        name="onkeyup"
        id="inputtext-react-inputfield-on-key-pressed"
        onKeyUp={e => setValue(e.key)}
      />
    </div>
  );
};

export default DemoInputTextonKeyUp;
