/* eslint-disable react/prop-types */
import React from 'react';
import AXADropdownReact from './AXADropdownReact';
import AXATextReact from './AXATextReact';

const DemoUncontrolledDropdown = ({
  item1,
  item2,
  item3,
  label,
  defaultTitle,
  name,
  invalid,
  error,
  native,
  required,
  checkMark,
  disabled,
}) => {
  const items = [
    { name: item1, value: 'Item 1' },
    { name: item2, value: 'Item 2', selected: true },
    { name: item3, value: 'Item 3' },
  ];

  return (
    <>
      <AXADropdownReact
        data-test-id="uncontrolled-dropdown-react"
        items={items}
        label={label}
        defaultTitle={defaultTitle}
        name={name}
        invalid={invalid}
        error={error}
        native={native}
        required={required}
        checkMark={checkMark}
        disabled={disabled}
        onChange={value =>
          (document.getElementById(
            'checkbox-output'
          ).innerHTML = `Value: ${JSON.stringify(value)}`)
        }
      />
      <br />
      <AXATextReact id="checkbox-output">Value:</AXATextReact>
    </>
  );
};

export default DemoUncontrolledDropdown;
