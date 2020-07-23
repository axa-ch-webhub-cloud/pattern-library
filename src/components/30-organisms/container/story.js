/* global document */
import { storiesOf } from '@storybook/html';
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Container', () => {
    const wrapper = document.createElement('div');

    const childsText = text('text', 'Some children');

    const template = html`
      <axa-container>${childsText}</axa-container>
    `;

    render(template, wrapper);
    return wrapper;
  });
