/* eslint-disable react/prop-types */
import React from 'react';
import AXADropdownVersionedReact, {
  numericalVersion,
} from './AXADropdownVersionedReact';
import AXATextReact from './AXATextReact';

const DemoVersionedDropdown = () => {
  const props = {
    item1: 'item1',
    item2: 'item2',
    item3: 'item3',
    name: 'my-versioned-dropdown',
    defaultTitle: 'Please Select',
  };
  const items = [
    { name: props.item1, value: 'Item 1' },
    { name: props.item2, value: 'Item 2', selected: true },
    { name: props.item3, value: 'Item 3' },
  ];

  return (
    <>
      <AXADropdownVersionedReact
        data-test-id="versioned-dropdown-react"
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
        onChange={value =>
          (document.getElementById(
            'checkbox-output'
          ).innerHTML = `axa-dropdown version ${numericalVersion} 
          new value: ${JSON.stringify(value)}`)
        }
      />
      <br />
      <AXATextReact id="checkbox-output">
        axa-dropdown version {numericalVersion} new value:
      </AXATextReact>
    </>
  );
};

export default DemoVersionedDropdown;
