/* global document */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

const story = storiesOf('Components|Atoms/Toggle Switch', module);
story.addDecorator(withKnobs);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
  changelog: Changelog
});

story.add('Toggle Switch', () => {
  const textknob = text('This is a knob', 'Value of text knob');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-toggle-switch>${textknob}</axa-toggle-switch>
  `;

  render(template, wrapper);
  return wrapper;
});