/* global document */
import { storiesOf } from '@storybook/html';
import { select, boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

import Readme from './README.md';

const variantOptions = {
  none: '',
  icon: 'icon',
  red: 'red',
  white: 'white',
  'icon-red': 'icon-red',
  'icon-white': 'icon-white',
  arrowright: 'arrowright',
  arrowleft: 'arrowleft',
  'arrowright-animated': 'arrowright-animated',
  'arrowleft-animated': 'arrowleft-animated',
  'arrowright-red': 'arrowright-red',
  'arrowleft-red': 'arrowleft-red',
  'arrowright-white': 'arrowright-white',
  'arrowleft-white': 'arrowleft-white',
  'arrowright-animated-red': 'arrowright-animated-red',
  'arrowleft-animated-red': 'arrowleft-animated-red',
  'arrowright-animated-white': 'arrowright-animated-white',
  'arrowleft-animated-white': 'arrowleft-animated-white',
  'hyperlink-white': 'hyperlink-white',
  'hyperlink-white-underline': 'hyperlink-white-underline',
  'hyperlink-red': 'hyperlink-red',
  'hyperlink-red-underline': 'hyperlink-red-underline',
};

const iconOptions = {
  none: '',
  'arrow-right': 'arrow-right',
  collapse: 'collapse',
  document: 'document',
  download: 'download',
  email: 'email',
  expand: 'expand',
  mobile: 'mobile',
  phone: 'phone',
  search: 'search',
  upload: 'upload',
  'cloud-upload': 'cloud-upload',
  'axa-logo': 'axa-logo',
  'axa-logo-open': 'axa-logo-open',
};

storiesOf('Atoms/Link', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Hyperlink', () => {
      const link = text(
        'link',
        'https://axa.ch/en/private-customers.html'
      );
      const linkText = text(
        'Link text',
        'This is a simple link'
      );
      const external = boolean('external', false)
      const variant = select('variant', variantOptions)
      const icon = select('icon', iconOptions);
      const backgrounds = select(
        'Background color',
        ['red', 'blue', 'white', 'black'],
        'white'
      );

      const wrapper = document.createElement('div');
      const template = html`
      <style>
        body {
          background-color: ${backgrounds};
        }
      </style>
      <axa-link href="${link}" ?external="${external}" variant="${variant}" icon="${icon}">${linkText}</axa-link>
    `;

      render(template, wrapper);
      return wrapper;
    }
  );
