/* global document */
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import React from 'react';
import wrap from '../../../../other/demo/react/utils/wrap-render-react';
import { iconList } from '../../icon/icon-list';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXALinkReact from './AXALinkReact';

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
  secondary: 'secondary',
};

storiesOf('Examples/Link/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Story', () => {
    const link = text(
      'link',
      'https://www.axa.ch/en/information/data-protection.html'
    );
    const linkText = text('Link text', 'Data protection statement');
    const external = boolean('external', false);
    const variant = select('variant', variantOptions, '');
    const icon = select('icon', iconList);
    const backgrounds = select(
      'Background color',
      ['red', 'blue', 'white', 'black'],
      'white'
    );
    const css = `
        body {
            background-color: ${backgrounds};
        }
      `;

    return wrap(
      <div>
        <style>{css}</style>
        <AXALinkReact
          href={link}
          external={external}
          variant={variant}
          icon={icon}
          onClick={() => {
            // eslint-disable-next-line no-alert, no-undef
            alert('on link click');
          }}
        >
          {linkText}
        </AXALinkReact>
      </div>
    );
  });
