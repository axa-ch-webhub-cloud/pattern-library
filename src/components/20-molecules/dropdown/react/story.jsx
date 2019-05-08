/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXADropdownReact from './AXADropdownReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Molecules/Dropdown/React', module)
  .addDecorator(withMarkdown(Readme))
  .add('Dropdown as React Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXADropdownReact
        items={[
          {
            name: 'Please Select',
            value: 'Please Select',
            url: '#',
            isSelected: true,
            isInitialItem: true,
          },
          { name: 'Item 1', value: 'Item 1', url: '#', isSelected: false },
          { name: 'Item 2', value: 'Item 2', url: '#', isSelected: false },
          { name: 'Item 3', value: 'Item 3', url: '#', isSelected: false },
        ]}
      />,
      div
    );
    return div;
  });
