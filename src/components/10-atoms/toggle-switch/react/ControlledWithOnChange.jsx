import React, { useState } from 'react';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';

const ControlledWithOnChange = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return <AXAToggleSwitchReact checked={checked} onToggle={handleToggle} />;
};

export default ControlledWithOnChange;
