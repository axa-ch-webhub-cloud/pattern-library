import React, { useState } from 'react';
import AXACheckbox from './AXACheckboxReact';

const DemoCheckboxCallbackProps = () => {
  const [frozen, setFrozen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [focus, setFocus] = useState(false);
  const [blur, setBlur] = useState(false);

  const handleFreeze = () => {
    setFrozen(!frozen);
  };

  const handleCheckboxChange = () => {
    if (!frozen) {
      setChecked(!checked);
    }
  };

  const handleCheckboxBlur = () => {
    setBlur(!blur);
  };

  const handleCheckboxFocus = () => {
    setFocus(!focus);
  };

  return (
    <fieldset>
      <legend>
        Checkbox Callback Props: frozen
        <input type="checkbox" data-test-id="frozen" onChange={handleFreeze} />
      </legend>
      <AXACheckbox
        label="I'm a checkbox that is controlled"
        checked={checked}
        onFocus={handleCheckboxFocus}
        onBlur={handleCheckboxBlur}
        onChange={handleCheckboxChange}
      />
      <div
        style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}
      >
        <span>checked: {String(checked)}</span>
        <span>focus: {String(focus)}</span>
        <span>blur: {String(blur)}</span>
      </div>
    </fieldset>
  );
}

export default DemoCheckboxCallbackProps;
