import React, { useState } from 'react';
import AXATextareaReact from './AXATextareaReact';

const DemoContUncontTextarea = () => {
  const [message, setMessage] = useState('controlled');
  const [name, setName] = useState('');

  const handleChange = ev => {
    setMessage(ev.target.value);
  };

  const handleNameChange = ev => {
    setName(ev.target.value);
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
      <AXATextareaReact
        label="type checkmark or error"
        checkMark={name === 'checkmark'}
        invalid={name === 'error'}
        error="Error Message"
        onChange={handleNameChange}
      />
    </div>
  );
};

export default DemoContUncontTextarea;
