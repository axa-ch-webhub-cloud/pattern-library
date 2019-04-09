import React, { createElement, useState } from 'react';
import createAXAButtonReact from '../../components/10-atoms/button/index.react';

const AXAButtonReact = createAXAButtonReact(createElement);

const DemoButton = () => {
  const [count, setCount] = useState(0);

  const handleAXAButtonClick = () => {
    setCount(count + 1)
  };

  return (
    <div>
      <p>with react wrapper - callback props are possible, too:</p>
      <AXAButtonReact onClick={handleAXAButtonClick}>
        You clicked me: {count} times!
      </AXAButtonReact>
    </div>
  );
};

export default DemoButton;
