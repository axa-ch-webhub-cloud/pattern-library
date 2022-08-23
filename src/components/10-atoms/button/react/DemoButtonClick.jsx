import React, { useState } from 'react';
import AXAButton from './AXAButton';

const DemoButtonClick = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>With the react wrapper - callback props are possible!</p>
      <AXAButton onClick={handleClick}>counter: {counter}</AXAButton>
    </div>
  );
};

export default DemoButtonClick;
