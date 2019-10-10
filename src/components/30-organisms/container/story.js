/* global document */
import { storiesOf } from '@storybook/html';
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

storiesOf('Organisms/Container', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Container - default',
    () => {
      const wrapper = document.createElement('div');

      const childsText = text('text', 'Some children');

      const template = html`
        <axa-container>${childsText}</axa-container>
      `;

      render(template, wrapper);
      return wrapper;
    }
  );
