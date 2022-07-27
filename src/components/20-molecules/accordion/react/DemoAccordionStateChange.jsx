import React, { useState } from 'react';
import AXAAccordion from './AXAAcordion';

const DemoAccordionStateChange = () => {
  const [text, setText] = useState('');

  const handleOnStateChange = isOpen => {
    setText(`${isOpen}`);
  };

  return (
    <AXAAccordion
      title="Test Accordion on state change"
      onStateChange={handleOnStateChange}
    >
      {text}
    </AXAAccordion>
  );
};

export default DemoAccordionStateChange;
