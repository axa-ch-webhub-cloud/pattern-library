import React, { useState } from 'react';
import AXACheckbox from './AXACheckboxReact';

const DemoCheckboxLabelAsChildren = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <AXACheckbox checked={checked} onChange={handleCheckboxChange}>
      <p>
        click{' '}
        <a href="https://www.google.ch" target="_blank">
          here
        </a>
        if you dare
      </p>
    </AXACheckbox>
  );
};

export default DemoCheckboxLabelAsChildren;
