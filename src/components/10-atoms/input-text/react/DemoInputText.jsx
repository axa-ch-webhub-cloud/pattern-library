import React, { useState } from 'react';
import AXAInputTextReact from './AXAInputTextReact';

const DemoInputText = () => {
  const [firstName, setFirstName] = useState('controlled');
  const [name, setName] = useState('');

  const handleChange = ev => {
    setFirstName(ev.target.value);
  };

  const handleNameChange = ev => {
    setName(ev.target.value);
  };

  return (
    <div>
      <AXAInputTextReact
        required
        label="Controlled"
        name="firstname"
        value={firstName}
        onChange={handleChange}
      />
      <AXAInputTextReact
        required
        label="Controlled value freeze"
        name="freeze"
        value="freeze"
        onChange={handleChange}
      />
      <AXAInputTextReact required label="Uncontrolled" name="lastname" />
      <AXAInputTextReact
        required
        label="Uncontrolled Default Value"
        name="lastname_3"
        defaultValue="test"
      />

      <AXAInputTextReact
        label="embedded: type checkmark or error"
        name="name"
        value={name}
        embedded
        checkMark={name === 'checkmark'}
        invalid={name === 'error'}
        error="Error Message"
        onChange={handleNameChange}
      />
    </div>
  );
};

export default DemoInputText;
