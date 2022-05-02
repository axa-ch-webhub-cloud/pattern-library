/* eslint-disable no-console */
import React from 'react';
import AXADropdownReact from './AXADropdownReact';

const DemoFocussableDropdown = () => {
  let output;

  const items = [
    { name: 'Item A', value: 'Item 1' },
    { name: 'Item B', value: 'Item 2', selected: true },
    { name: 'Item C', value: 'Item 3' },
  ];

  return (
    <>
      <input
        type="text"
        placeholder="focus before dropdown"
        style={{ marginBottom: '24px' }}
      />
      <AXADropdownReact
        data-test-id="focussable-dropdown-react"
        defaultTitle="Please Select"
        items={items}
        onChange={value => {
          output.innerHTML += `${value.target.name},`;
        }}
        onFocus={() => {
          output.innerHTML += 'focus,';
        }}
        onBlur={() => {
          output.innerHTML += 'blur,';
        }}
      />
      <input
        type="text"
        placeholder="focus after dropdown"
        style={{
          marginBottom: '24px',
          marginRight: '10px',
        }}
      />
      <span
        data-test-id="focussable-dropdown-react-event-log"
        ref={element => {
          output = element;
        }}
        style={{
          border: '1px solid #ddd',
          marginBottom: '24px',
          padding: '0 5px',
          background: 'azure',
        }}
      >
        events:
      </span>

      <br />
      <select defaultValue="0">
        <option disabled value="0">
          Native &lt;select&gt;
        </option>
        <option value="1">Item A</option>
        <option value="2">Item B</option>
        <option value="3">Item C</option>
      </select>
    </>
  );
};

export default DemoFocussableDropdown;
