import React, { useState } from 'react';
import AXAInputTextReact from './AXAInputTextReact';

const DemoInputText = () => {
  const [firstName, setFirstName] = useState('controlled');

  const handleChange = ev => {
    setFirstName(ev.target.value);
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
      <AXAInputTextReact
        required
        label="Uncontrolled"
        name="lastname"
      />
      <AXAInputTextReact
        required
        label="Uncontrolled Default Value"
        name="lastname_3"
        defaultValue="test"
      />
    </div>
  );
};

export default DemoInputText;
