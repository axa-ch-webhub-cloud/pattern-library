import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

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

export default {
  title: 'Components/Link',
  parameters: {
    readme,
    changelog,
  },
};

export const Link = ({
  link,
  linkText,
  external,
  variant,
  icon,
  backgrounds,
}) => {
  const wrapper = document.createElement('div');
  const template = html`
    <style>
      body {
        background-color: ${backgrounds};
      }
    </style>
    <axa-link
      href="${link}"
      ?external="${external}"
      variant="${variant}"
      icon="${icon}"
      >${linkText}</axa-link
    >
  `;

  render(template, wrapper);
  return wrapper;
};
Link.args = {
  link: 'https://www.axa.ch/en/information/data-protection.html',
  linkText: 'Data protection statement',
  external: false,
  variant: '',
  icon: '',
  backgrounds: 'white',
};

Link.argTypes = {
  variant: { control: { type: 'select', options: variantOptions } },
  icon: { control: { type: 'select', options: iconList } },
  backgrounds: {
    control: { type: 'select', options: ['red', 'blue', 'white', 'black'] },
  }, // TODO description or set as not required
};
