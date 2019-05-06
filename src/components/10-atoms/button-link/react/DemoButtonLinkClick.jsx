import React, { useState } from 'react';
import AXAButtonLinkReact from './AXAButtonLinkReact';

const DemoButtonLinkClick = () => {
  const [count, setCount] = useState(0);

  const handleAXAButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>With the react wrapper - callback props are possible!</p>
      <AXAButtonLinkReact onClick={handleAXAButtonClick}>
        You clicked me: {count} times!
      </AXAButtonLinkReact>
    </div>
  );
};

export default DemoButtonLinkClick;
