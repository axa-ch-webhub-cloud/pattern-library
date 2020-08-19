import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from '../src/static/svg/logo-axa.svg';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'AXA Living Styleguide',
    brandUrl: 'https://github.com/axa-ch/patterns-library/tree/develop',
    brandImage: logo,
  }),
});
