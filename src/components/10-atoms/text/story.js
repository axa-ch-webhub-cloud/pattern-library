import { select, boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Changelog from './CHANGELOG.md';

const variantOptions = {
  default: '',
  'size-1': 'size-1',
  'size-2': 'size-2',
  'size-3': 'size-3',
  semibold: 'semibold',
  bold: 'bold',
};

export default {
  title: 'Components',
  decorators: [withKnobs],

  parameters: {
    changelog: Changelog,
  },
};

export const Text = () => {
  const variant = select('variant', variantOptions, '');
  const addSpanTag = boolean('Add <span> tag', false);
  const content = text(
    'text',
    `Is your car your pride and joy, or just a means of getting from A to
    B ? Whichever applies to you, it will certainly have the best
    insurance with us. Calculate your premium online – You keep your
    advisor even when you purchase from us online.`
  );
  const wrapper = document.createElement('div');
  const template = addSpanTag
    ? html`
        <axa-text variant="${variant}">
          <span>${content}</span>
        </axa-text>
      `
    : html`
        <axa-text variant="${variant}">${content}</axa-text>
      `;
  render(template, wrapper);
  return wrapper;
};
