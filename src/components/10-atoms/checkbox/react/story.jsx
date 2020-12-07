/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import AXACheckboxReact from './AXACheckboxReact';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import createRefId from '../../../../utils/create-ref-id';
import AXATextReact from './AXATextReact';

export default {
  title: 'Examples/Checkbox/React',
  parameters: {
    readme,
    changelog,
  },
};

export const Story = ({
  checked,
  disabled,
  errortext,
  required,
  styled,
  refId,
  label,
  name,
  variant,
}) => {
  const div = document.createElement('div');

  if (variant && variant.includes('inverted')) {
    div.style.backgroundColor = '#027180';
    div.style.padding = '10px';
  }

  ReactDOM.render(
    <>
      <AXACheckboxReact
        checked={checked}
        refId={refId}
        name={name}
        label={label}
        disabled={disabled}
        variant={variant}
        required={required}
        styled={styled}
        onChange={e =>
          console.log('checkbox', name, ' changed to: ', e.target.checked)
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
};

Story.story = {
  name: 'Story - Uncontrolled',
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

Story.args = {
  checked: false,
  disabled: false,
  errortext: false,
  required: false,
  styled: false,
  refId: `checkbox-${createRefId()}`,
  label: 'I agree to conditions of data protection.',
  name: 'my-checkbox',
  variant: 'square',
};

Story.argTypes = {
  checked: { name: 'checked (no effect -> uncontrolled mode)' },
  errorText: {
    name: 'error',
  },
  variant: {
    control: {
      type: 'radio',
      options: [
        'square',
        'checkmark',
        // 'inverted-square', // not officially supported yet
        'checkmark-inverted',
      ],
    },
  },
};
