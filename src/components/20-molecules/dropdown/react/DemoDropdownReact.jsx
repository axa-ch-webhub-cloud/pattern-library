import React, { useState } from 'react';
import AXADropdownReact from './AXADropdownReact';
import AXACheckboxReact from '../../../10-atoms/checkbox/react/AXACheckboxReact';
import findIndex from '../../../../utils/find-index';

const DemoDropdown = () => {
  const items = [
    { name: 'Item A', value: 'Item 1' },
    { name: 'Item B', value: 'Item 2' },
    { name: 'Item C', value: 'Item 3' },
  ];

  const [value, setValue] = useState('Please Select');
  const [frozen, setFrozen] = useState(false);
  const [error, setError] = useState('');
  const [native, setNative] = useState(false);

  const findName = (val) =>
    (items[findIndex(items, (item) => item.value === val)] || { name: '' })
      .name;

  const handleChange = (event) => {
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

  const handleNative = () => {
    setNative(!native);
  };

  return (
    <div>
      <p>
        With the React wrapper - controlled &lt;axa-dropdown&gt; component with
        callback prop, valid checkmark and error message!
      </p>
      <AXACheckboxReact
        className="freeze-checkbox"
        onChange={handleValueFreeze}
        label="freeze value"
      />
      <AXACheckboxReact
        className="native-checkbox"
        onChange={handleNative}
        label="native"
      />
      <br />
      <AXADropdownReact
        native={native}
        data-test-id="dropdown-react"
        items={items}
        onChange={handleChange}
        value={value}
        invalid={frozen}
        checkMark={!frozen}
        error={error}
        defaultTitle="Please Select"
      />
      <br />
      <p>
        Controlled value &quot;
        <span data-test-id="dropdown-react-controlled-value">{value}</span>
        &quot;.
      </p>
    </div>
  );
};

export default DemoDropdown;
