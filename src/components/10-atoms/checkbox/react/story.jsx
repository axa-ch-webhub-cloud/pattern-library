/* global document */
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXACheckboxReact from './AXACheckboxReact';
import AXATextReact from './AXATextReact';

storiesOf('Examples/Checkbox/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .addDecorator(withKnobs)
  .add('Story - uncontrolled', () => {
    const label = text('label', 'I agree to conditions of data protection.');
    const name = text('name', 'my-checkbox');
    const variant = select('variant', [
      'square',
      'checkmark',
      'checkmark-inverted',
    ]);
    boolean('checked (no effect, uncontrolled mode!)', false);
    const disabled = boolean('disabled', false);
    const errortext = boolean('error', false);
    const required = boolean('required', false);
    const styled = boolean('styled', false);

    const div = document.createElement('div');

    if (variant && variant.includes('inverted')) {
      div.style.backgroundColor = '#027180';
      div.style.padding = '10px';
    }

    ReactDOM.render(
      <>
        <AXACheckboxReact
          name={name}
          label={label}
          disabled={disabled}
          variant={variant}
          required={required}
          styled={styled}
          onChange={e =>
            (document.getElementById(
              'checkbox-output'
            ).innerHTML = `checkbox ${name} state changed to: ${e.target.checked}`)
          }
          error={errortext ? 'Please accept our terms and conditions.' : ''}
        />
        <AXATextReact id="checkbox-output">
          checkbox {name} state changed to:
        </AXATextReact>
      </>,
      div
    );
    return div;
  });
