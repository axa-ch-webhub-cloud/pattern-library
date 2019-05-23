import React, { useState } from 'react';
import AXAInputTextReact from './AXAInputTextReact';

const DemoInputText = () => {
  const [firstName, setFirstName] = useState('hjjh');

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
    </div>
  );
};

export default DemoInputText;
