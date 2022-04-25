import React, { useState } from 'react';
import AXATextarea from './AXATextarea';

function DemoContUncontTextarea() {
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
      <AXATextarea
        required
        label="Message controlled"
        name="message"
        value={message}
        maxLength
        onChange={handleChange}
      />
      <AXATextarea
        required
        label="Message controlled freeze"
        name="message"
        value="freeze"
      />
      <AXATextarea required label="Message uncontrolled" name="message_2" />
      <AXATextarea
        required
        label="Message uncontrolled default value"
        name="message_3"
        defaultValue="prefilled value"
      />
      <AXATextarea
        label="type checkmark or error"
        checkMark={name === 'checkmark'}
        invalid={name === 'error'}
        error="Error Message"
        onChange={handleNameChange}
      />
    </div>
  );
}

export default DemoContUncontTextarea;
