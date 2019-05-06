import React, { useState } from 'react';
import AXAButtonReact from './AXAButtonReact';

const DemoButtonClick = () => {
  const [count, setCount] = useState(0);

  const handleAXAButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>With the react wrapper - callback props are possible!</p>
      <AXAButtonReact onClick={handleAXAButtonClick}>
        You clicked me: {count} times!
      </AXAButtonReact>
    </div>
  );
};

export default DemoButtonClick;
