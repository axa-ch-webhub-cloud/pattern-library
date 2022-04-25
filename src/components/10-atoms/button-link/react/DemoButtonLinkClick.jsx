import React, { useState } from 'react';
import AXAButtonLink from './AXAButtonLink';

function DemoButtonLinkClick() {
  const [count, setCount] = useState(0);

  const handleAXAButtonClick = e => {
    e.preventDefault();
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
}

export default DemoButtonLinkClick;
