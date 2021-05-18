/* eslint-disable react/prop-types */
import React from 'react';
import AXADropdownReact from './AXADropdownReact';
import AXATextReact from './AXATextReact';

const DemoUncontrolledDropdown = props => {
  const items = [
    { name: props.item1, value: 'Item 1' },
    { name: props.item2, value: 'Item 2', selected: true },
    { name: props.item3, value: 'Item 3' },
  ];

  return (
    <>
      <AXADropdownReact
        data-test-id="uncontrolled-dropdown-react"
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
        onChange={value => (document.getElementById('checkbox-output').innerHTML = `Value: ${JSON.stringify(value)}`)}
      />
      <br />
      <AXATextReact id="checkbox-output">Value:</AXATextReact>
    </>
  );
};

export default DemoUncontrolledDropdown;
