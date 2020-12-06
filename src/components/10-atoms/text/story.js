import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

const variantOptions = {
  default: '',
  'size-1': 'size-1',
  'size-2': 'size-2',
  'size-3': 'size-3',
  semibold: 'semibold',
  bold: 'bold',
};

export default {
  title: 'Components/Text',
  parameters: {
    readme,
    changelog,
  },
};

export const Text = ({ variant, addSpanTag, content }) => {
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

Text.args = {
  variant: '',
  content: `Is your car your pride and joy, or just a means of getting from A to
  B ? Whichever applies to you, it will certainly have the best
  insurance with us. Calculate your premium online – You keep your
  advisor even when you purchase from us online.`,
  addSpanTag: false,
};

Text.argTypes = {
  variant: { control: { type: 'select', options: variantOptions } },
  addSpanTag: { name: 'add a span tag around the content' },
  content: { name: 'set content' },
};
