import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
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

    const container = document.createElement('div');

    if (variant && variant.includes('inverted')) {
      container.style.backgroundColor = '#027180';
      container.style.padding = '10px';
    }

    const root = createRoot(container);
    root.render(
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
      </>
    );

    return container;
  });
