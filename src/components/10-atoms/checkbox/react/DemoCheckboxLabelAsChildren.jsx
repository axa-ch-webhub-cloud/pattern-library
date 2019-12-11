import React, { useState } from 'react';
import AXACheckbox from './AXACheckboxReact';

const DemoCheckboxLabelAsChildren = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <AXACheckbox checked={checked} onChange={handleCheckboxChange}>
      <p>or click here if you prefere</p>
    </AXACheckbox>
  );
};

export default DemoCheckboxLabelAsChildren;
