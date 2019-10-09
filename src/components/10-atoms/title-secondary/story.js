/* global document */
import { storiesOf } from '@storybook/html';
import { select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const variantOptions = {
  none: '',
  'size-1': 'size-1',
  'size-2': 'size-2',
  'size-3': 'size-3',
  'size-4': 'size-4',
  'size-5': 'size-5',
  'size-6': 'size-6',
};

storiesOf('Atoms/Title secondary', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Title secondary',
    () => {
      const variant = select('variant', variantOptions, '')

      const wrapper = document.createElement('div');
      const template = html`
        <axa-title-secondary variant="${variant}">Title secondary</axa-title-secondary>
      `;

      render(template, wrapper);
      return wrapper;
    }
  );
