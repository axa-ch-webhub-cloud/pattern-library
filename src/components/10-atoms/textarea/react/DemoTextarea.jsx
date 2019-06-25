import React, { useState } from 'react';
import AXATextareaReact from './AXATextareaReact';

const DemoTextarea = () => {
  const [message, setMessage] = useState('controlled');

  const handleChange = ev => {
    setMessage(ev.target.value);
  };

  return (
    <div>
      <AXATextareaReact
        required
        label="Message controlled"
        name="message"
        value={message}
        onChange={handleChange}
      />
      <AXATextareaReact
        required
        label="Message controlled freeze"
        name="message"
        value="freeze"
      />
      <AXATextareaReact
        required
        label="Message uncontrolled"
        name="message_2"
      />
      <AXATextareaReact
        required
        label="Message uncontrolled default value"
        name="message_3"
        defaultValue="prefilled value"
      />
    </div>
  );
};

export default DemoTextarea;
