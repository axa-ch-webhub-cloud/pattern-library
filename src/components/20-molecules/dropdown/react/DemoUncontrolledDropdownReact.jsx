import React from 'react';
import AXADropdownReact from './AXADropdownReact';

const DemoUncontrolledDropdown = () => {
  const items = [
    {
      name: 'Please Select',
      value: 'Please Select',
      disabled: true,
    },
    { name: 'Item A', value: 'Item 1' },
    { name: 'Item B', value: 'Item 2', selected: true },
    { name: 'Item C', value: 'Item 3' },
  ];

  return (
    <AXADropdownReact
      data-test-id="uncontrolled-dropdown-react"
      title="Please Select"
      items={items}
      // eslint-disable-next-line no-console
      onChange={value => console.log(JSON.stringify(value))}
    />
  );
};

export default DemoUncontrolledDropdown;
