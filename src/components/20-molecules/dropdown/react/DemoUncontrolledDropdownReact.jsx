/* eslint-disable react/prop-types */
import React from 'react';
import AXADropdownReact from './AXADropdownReact';

const DemoUncontrolledDropdown = props => {
  const items = [
    {
      name: 'Please Select',
      value: 'Please Select',
      disabled: true,
    },
    { name: props.item1, value: 'Item 1' },
    { name: props.item2, value: 'Item 2', selected: true },
    { name: props.item3, value: 'Item 3' },
  ];

  return (
    <div
      style={{
        height: 80,
        display: 'flex',
        alignItems: 'center',
        border: '2px solid blue',
        padding: '0 20px',
      }}
    >
      <AXADropdownReact
        data-test-id="uncontrolled-dropdown-react"
        title="Please Select"
        items={items}
        label={props.label}
        defaultTitle={props.defaultTitle}
        name={props.name}
        invalid={props.invalid}
        error={props.error}
        native={props.native}
        required={props.required}
        checkMark={props.checkMark}
        disabled={props.disabled}
        // eslint-disable-next-line no-console
        onChange={value => console.log(JSON.stringify(value))}
      />
    </div>
  );
};

export default DemoUncontrolledDropdown;
