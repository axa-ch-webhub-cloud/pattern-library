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
    const label = text('Label Text', 'this is a label');
    const checked = boolean('checked', true);
    const disabled = boolean('disabled', false);
    const errortext = boolean('Error Text', false);
    const className = text('className', 'hover');

    const div = document.createElement('div');

    ReactDOM.render(
      <AXACheckboxReact
        name="my-checkbox"
        label={label}
        checked={checked}
        disabled={disabled}
        onChange='console.log("checkbox", this.name, " changed to: ", this.checked)'
        error={
          errortext
            ? 'Bitte akzeptieren Sie die allgemeinen Versicherungsbedingungen.'
            : ''
        }
        className={className}
      />,
      div
    );
    return div;
  });
