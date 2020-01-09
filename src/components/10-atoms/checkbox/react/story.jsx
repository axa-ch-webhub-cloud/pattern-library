/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import AXACheckboxReact from './AXACheckboxReact';
import Readme from '../README.md';

storiesOf('Atoms/Checkbox/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .addDecorator(withKnobs)
  .add('Checkbox - uncontrolled', () => {
    const label = text('label', 'this is a label');
    const name = text('name', 'my-checkbox');
    const checked = boolean('checked', true);
    const disabled = boolean('disabled', false);
    const errortext = boolean('error', false);
    const required = boolean('required', false);
    const variant = text('varinant', 'square');

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
        error={
          errortext
            ? 'Bitte akzeptieren Sie die allgemeinen Versicherungsbedingungen.'
            : ''
        }
      />,
      div
    );
    return div;
  });
