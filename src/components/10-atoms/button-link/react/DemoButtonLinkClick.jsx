import React, { useState } from 'react';
import AXAButtonLink from './AXAButtonLink';

const DemoButtonLinkClick = () => {
  const [count, setCount] = useState(0);

  const handleAXAButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>With the react wrapper - callback props are possible!</p>
      <AXAButtonLink onClick={handleAXAButtonClick}>
        You clicked me: {count} times!
      </AXAButtonLink>
    </div>
  );
};

export default DemoButtonLinkClick;
