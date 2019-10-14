/* global document */
import { storiesOf } from '@storybook/html';
import { select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import AXAIcon from './index';
import Readme from './README.md';

const storyIcon = storiesOf('Atoms/Icon', module);
storyIcon.addDecorator(withKnobs);
storyIcon.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyIcon.add('Icon', () => {
  const icon = select('icon', iconList, 'download');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-icon icon="${icon}"></axa-icon>
  `;

  render(template, wrapper);
  return wrapper;
});

storyIcon.add('Icon - show all icons', () => {
  const list = document.createElement('ul');

  Object.keys(AXAIcon.iconsMapping).forEach(iconName => {
    const listEl = document.createElement('li');
    listEl.innerHTML = `${iconName} `;

    const axaIcon = document.createElement('axa-icon');
    axaIcon.icon = iconName;

    listEl.appendChild(axaIcon);
    list.appendChild(listEl);
  });

  return list;
});

storyIcon.add(
  'Icon - icon from a resource',
  () => '<axa-icon icon="/svg/logo-axa.svg"></axa-icon>'
);
storyIcon.add(
  'Icon - icon undefined case',
  () => 'should be empty: <axa-icon></axa-icon>'
);
