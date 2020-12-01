import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from '../src/static/svg/logo-axa.svg';

const UI_STORE = '@storybook/ui/store';

const setDefault = storage => {
  if (storage.getItem(UI_STORE)) {
    const uiStore = JSON.parse(storage.getItem(UI_STORE));
    uiStore.layout.showPanel = false;

    storage.setItem(UI_STORE, JSON.stringify(uiStore));
  } else {
    storage.setItem(UI_STORE, '{"layout":{"showPanel":false}}');
  }
};

setDefault(localStorage);
setDefault(sessionStorage);

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'AXA Living Styleguide',
    brandUrl: 'https://github.com/axa-ch/patterns-library/tree/develop',
    brandImage: logo,
  }),
});
