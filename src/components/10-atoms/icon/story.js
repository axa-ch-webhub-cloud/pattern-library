import {
  boolean,
  radios,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import changelog from './CHANGELOG.md';
import AXAIcon from './index';
import readme from './README.md';

export default {
  title: 'Components/Icon',
  decorators: [withKnobs],
  parameters: {
    usage: {
      propsPureHTML: 'icon="arrow-right"',
      usageReact:
        'You can use this component directly in your JSX without further React-ification (see Usage above).',
    },
    readme,
    changelog,
  },
};

export const Icon = () => {
  const showAll = boolean('Show list of available icons', false);
  const noIcon = boolean('Do not set attribute "icon"', false);
  const noSize = boolean('Do not set attribute "size"', false);

  const size = select(
    'size',
    ['small', 'medium', 'large', 'original'],
    'medium'
  );

  const loadIconType = radios(
    'Load icon this way (Fill values below):',
    { 'Named property': 'prop', URL: 'url', 'SVG string': 'string' },
    'prop'
  );
  const icon = select('Value for "Named property"', iconList, 'download');
  const itemIconUrl = text('Value for "URL"', './svg/logo-axa.svg');
  const itemIconString = text(
    'Value for "SVG string"',
    '<svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M34.11 74.27v4.6m34.5-48.23A21.21 21.21 0 0 0 48 15.5a21.23 21.23 0 0 0-20.53 15.07m.43 12.23a21.61 21.61 0 0 0 40.29-.07m1.19-12.18a4.91 4.91 0 0 0-.77.09 19.36 19.36 0 0 1-.42 12.09 5.23 5.23 0 0 0 1.19.14A5.92 5.92 0 0 0 75 36.71a5.92 5.92 0 0 0-5.62-6.16zm-1.19 12.18a19.36 19.36 0 0 0 .42-12.09"/><path d="M27.31 42.87a4 4 0 0 0 .59-.07 19.34 19.34 0 0 1-.43-12.23h-.16m29.51-8.23c-2.77 0-5-3.45-5-6.47m2.49 10.58c-4.85 0-8.79-5.29-8.79-10.58M24.33 76.94l12.84 2.53a61.28 61.28 0 0 0 22.35 0l12.84-2.53m-9.78-2.67v4.6"/><path d="M24.33 76.94c0-13.26 10.75-20.46 24-20.46s24 7.2 24 20.46M54.57 57.37a6.23 6.23 0 1 1-12.45 0M27.81 42.73a5.23 5.23 0 0 1-1.19.14A5.92 5.92 0 0 1 21 36.71a5.92 5.92 0 0 1 5.65-6.16 4.91 4.91 0 0 1 .77.09"/></g></svg>'
  );

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

  const getIconValue = iconType => {
    switch (iconType) {
      case 'url':
        return itemIconUrl;
      case 'string':
        return itemIconString;
      default:
        return icon;
    }
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
                ${noSize
                  ? html`
                      <axa-icon icon="${getIconValue(loadIconType)}"></axa-icon>
                    `
                  : html`
                      <axa-icon
                        icon="${getIconValue(loadIconType)}"
                        size="${size}"
                      ></axa-icon>
                    `}
              `}
        `}
  `;

  render(template, wrapper);
  return wrapper;
};

Icon.parameters = {
  knobs: {
    escapeHTML: false,
  },
};
