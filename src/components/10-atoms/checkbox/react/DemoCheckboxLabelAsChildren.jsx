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
        I agree to{' '}
        <a
          href="https://www.google.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          conditions of data protection.
        </a>
      </p>
    </AXACheckbox>
  );
};

export default DemoCheckboxLabelAsChildren;
