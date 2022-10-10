import React, { useState } from 'react';
import AXAAccordion from './AXAAcordion';

const DemoAccordionStateChange = () => {
  const [text, setText] = useState('');
  const [content, setContent] = useState('');

  const handleOnStateChange = isOpen => {
    setText(`${isOpen}`);
  };

  const changeAccordionContent = () => {
    if (content === '') {
      setContent(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur explicabo officia quos rem repellendus! Aliquam, amet assumenda delectus dolorem expedita fuga labore laboriosam magnam nisi numquam possimus quis sed vero?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur explicabo officia quos rem repellendus! Aliquam, amet assumenda delectus dolorem expedita fuga labore laboriosam magnam nisi numquam possimus quis sed vero?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur explicabo officia quos rem repellendus! Aliquam, amet assumenda delectus dolorem expedita fuga labore laboriosam magnam nisi numquam possimus quis sed vero?'
      );
    } else {
      setContent('');
    }
  };

  return (
    <div>
      <button
        type="button"
        style={{ marginBottom: '16px' }}
        onClick={changeAccordionContent}
      >
        Toggle Accordion content
      </button>
      <AXAAccordion
        title="Test Accordion on state change"
        onStateChange={handleOnStateChange}
      >
        {content}
        <AXAAccordion title="Test Accordion on state change 2">
          {content}
        </AXAAccordion>
      </AXAAccordion>
      <p>{text}</p>
    </div>
  );
};

export default DemoAccordionStateChange;
