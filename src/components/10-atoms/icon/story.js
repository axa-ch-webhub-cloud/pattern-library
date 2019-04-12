/* global document */
import { storiesOf } from '@storybook/html';
import AXAIcon from "./index";

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Icon', module)
  .addDecorator(withMarkdown(Readme))
  .add('Icon - show all icons', () => {
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
  })
  .add('Icon - icon from a resource', () => '<axa-icon icon="/svg/logo-axa.svg"></axa-icon>')
  .add('Icon - icon undefined case', () => 'should be empty: <axa-icon></axa-icon>');
