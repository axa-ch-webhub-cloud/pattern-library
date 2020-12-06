/* global document */
import React from 'react';
import wrap from '../../../../other/demo/react/utils/wrap-render-react';
import { iconList } from '../../icon/icon-list';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXALinkReact from './AXALinkReact';

export default {
  title: 'Examples/Link/React',
  parameters: {
    readme,
    changelog,
    controls: { disabled: false },
    options: { showPanel: true },
  },
};

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

export const Story = ({
  linkText,
  link,
  external,
  variant,
  icon,
  backgrounds,
}) => {
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
};

Story.args = {
  linkText: 'Data protection statement',
  backgrounds: 'white',
  link: 'https://www.axa.ch/en/information/data-protection.html',
  external: false,
  variant: '',
  icon: '',
};

Story.argTypes = {
  link: {
    name: 'href',
  },
  linkText: {
    name: 'set link text',
  },
  variant: { control: { type: 'select', options: variantOptions } },
  icon: { control: { type: 'select', options: iconList } },
  backgrounds: {
    name: 'set a story background color',
    control: { type: 'select', options: ['red', 'blue', 'white', 'black'] },
  },
};
