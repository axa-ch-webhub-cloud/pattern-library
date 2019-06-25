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
        label="Vorname"
        name="firstname"
        value={firstName}
        onChange={handleChange}
      />
      <AXAInputTextReact
        required
        label="uncontrolled"
        name="lastname"
        value="test"
        defaulValue="test"
      />
    </div>
  );
};

export default DemoInputText;
