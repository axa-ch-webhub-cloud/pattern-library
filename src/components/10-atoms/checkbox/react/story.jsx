/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/html';
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs';
import AXACheckboxReact from './AXACheckboxReact';
import Readme from '../README.md';

storiesOf('Components|Atoms/Checkbox/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .addDecorator(withKnobs)
  .add('Checkbox - uncontrolled', () => {
    const label = text('label', 'I agree to conditions of data protection.');
    const name = text('name', 'my-checkbox');
    const variant = select('variant', ['square', 'checkmark']);
    const checked = boolean('checked', true);
    const disabled = boolean('disabled', false);
    const errortext = boolean('error', false);
    const required = boolean('required', false);

    const div = document.createElement('div');

    ReactDOM.render(
      <AXACheckboxReact
        name={name}
        label={label}
        checked={checked}
        disabled={disabled}
        variant={variant}
        required={required}
        onChange={e => console.log('checkbox', name, ' changed to: ', checked)}
        error={errortext ? 'Please accept our terms and conditions.' : ''}
      />,
      div
    );
    return div;
  });
