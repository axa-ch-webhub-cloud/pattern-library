/* global document */
import { storiesOf } from '@storybook/html';
import { select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const variantOptions = {
  default: '',
  'size-1': 'size-1',
  'size-2': 'size-2',
  'size-3': 'size-3',
  'size-4': 'size-4',
  'size-5': 'size-5',
  'size-6': 'size-6',
};

storiesOf('Atoms/Title primary', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Title primary',
    () => {
      const variant = select('variant', variantOptions, '')

      const wrapper = document.createElement('div');
      const template = html`
        <axa-title-primary variant="${variant}">Title primary</axa-title-primary>
      `;

      render(template, wrapper);
      return wrapper;
    }
  );
