import React, { useState } from 'react';
import AXAButton from './AXAButton';

const DemoButtonClick = () => {
  const [count, setCount] = useState(0);

  const handleAXAButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>With the react wrapper - callback props are possible!</p>
      <AXAButton onClick={handleAXAButtonClick}>
        You clicked me: {count} times!
      </AXAButton>
    </div>
  );
};

export default DemoButtonClick;
