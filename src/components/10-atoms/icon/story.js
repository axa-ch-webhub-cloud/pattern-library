/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
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
  const icon = select('Select icon:', iconList, 'download');
  const noIcon = boolean('Do not set icon property', false);
  const loadFromUrl = boolean('Load icon from URL', false);
  const itemIconUrl = text('Load icon from this URL:', '/svg/logo-axa.svg');
  const showAll = boolean('Show list of available icons', false);

  const createListWithAllIcons = () => {
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
  };

  const wrapper = document.createElement('div');
  const template = html`
    ${showAll
      ? html`
          ${createListWithAllIcons()}
        `
      : html`
          ${noIcon
            ? html`
                <axa-icon></axa-icon>
              `
            : html`
                <axa-icon icon="${loadFromUrl ? itemIconUrl : icon}"></axa-icon>
              `}
        `}
  `;

  render(template, wrapper);
  return wrapper;
});
