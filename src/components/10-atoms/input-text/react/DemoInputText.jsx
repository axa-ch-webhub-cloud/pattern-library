import React, { useState } from 'react';
import AXAInputText from './AXAInputText';

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
      <AXAInputText
        required
        label="Controlled"
        name="firstname"
        value={firstName}
        onChange={handleChange}
      />
      <p>
        <AXAInputText
          currency="chf"
          label="Controlled with currency attribute set to 'CHF'"
          error="Please enter at least one number"
          id="controlled_currency"
          value={firstName}
          onChange={handleChange}
        />
      </p>
      <AXAInputText
        required
        label="Controlled value freeze"
        name="freeze"
        value="freeze"
        onChange={handleChange}
      />
      <AXAInputText required label="Uncontrolled" name="lastname" />
      <AXAInputText
        required
        label="Uncontrolled Default Value"
        name="lastname_3"
        defaultValue="test"
      />

      <AXAInputText
        label="Type checkmark or error"
        name="name"
        value={name}
        checkMark={name === 'checkmark'}
        invalid={name === 'error'}
        error="Error Message"
        onChange={handleNameChange}
      />
    </div>
  );
};

export default DemoInputText;
