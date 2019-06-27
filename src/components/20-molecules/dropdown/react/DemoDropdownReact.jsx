import React, { useState } from 'react';
import AXADropdownReact from './AXADropdownReact';
import AXACheckboxReact from '../../../10-atoms/checkbox/react/AXACheckboxReact';

const DemoDropdown = () => {
  const items = [
    {
      name: 'Please Select',
      value: 'Please Select',
      selected: true,
      disabled: true,
    },
    { name: 'Item A', value: 'Item 1' },
    { name: 'Item B', value: 'Item 2' },
    { name: 'Item C', value: 'Item 3' },
  ];

  const [value, setValue] = useState(items[0].value);
  const [frozen, setFrozen] = useState(false);
  const [error, setError] = useState('');

  const findName = val =>
    items[items.findIndex(item => item.value === val)].name;

  const handleChange = event => {
    setValue(frozen ? value : event.target.value);
    const oldName = findName(value);
    const newName = event.target.name;
    setError(
      frozen
        ? `invariant '${oldName}' despite user change to '${newName}'!`
        : ''
    );
  };

  const handleValueFreeze = () => {
    setFrozen(!frozen);
  };

  return (
    <div>
      <p>
        With the React wrapper - controlled &lt;axa-dropdown&gt; component with
        callback prop, valid checkmark and error message!
      </p>
      <AXACheckboxReact onChange={handleValueFreeze} label="freeze value" />
      <br />
      <AXADropdownReact
        data-test-id="dropdown-react"
        items={items}
        onChange={handleChange}
        value={value}
        valid={!frozen}
        error={error}
      />
    </div>
  );
};

export default DemoDropdown;
