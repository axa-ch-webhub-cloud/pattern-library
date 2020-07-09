/* global document */
import { storiesOf } from '@storybook/html';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoUncontrolledDropdownReact from './DemoUncontrolledDropdownReact';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';

storiesOf('Components|Dropdown/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Story - uncontrolled', () => {
    const div = document.createElement('div');

    const item1 = text('First Item', '< CHF 1,000');
    const item2 = text('Second Item', 'From CHF 1,000 to 10,000');
    const item3 = text('Third Item', '> CHF 10,000');

    const label = text('label', '');
    const value = text('value', '');
    const defaultTitle = text('defaulttitle', '');
    const name = text('name', '');
    const invalid = boolean('invalid', false);
    const error = text('error', 'Error Message');
    const native = boolean('native', false);
    const required = boolean('required', false);
    const checkMark = boolean('checkmark', false);
    const disabled = boolean('disabled', false);
    const maxHeight = text('max-height', '');

    ReactDOM.render(
      <DemoUncontrolledDropdownReact
        item1={item1}
        item2={item2}
        item3={item3}
        label={label}
        value={value}
        defaultTitle={defaultTitle}
        name={name}
        invalid={invalid}
        error={error}
        native={native}
        required={required}
        checkMark={checkMark}
        disabled={disabled}
        maxHeight={maxHeight}
      />,
      div
    );
    return div;
  });
