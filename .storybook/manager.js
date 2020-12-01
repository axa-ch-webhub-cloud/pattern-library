import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from '../src/static/svg/logo-axa.svg';

const UI_STORE = '@storybook/ui/store';
let uiStore = { layout: { showPanel: false } };

if (localStorage.getItem(UI_STORE)) {
  uiStore = JSON.parse(localStorage.getItem(UI_STORE));
  uiStore.layout.showPanel = false;
}

localStorage.setItem(UI_STORE, JSON.stringify(uiStore));

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'AXA Living Styleguide',
    brandUrl: 'https://github.com/axa-ch/patterns-library/tree/develop',
    brandImage: logo,
  }),
});
