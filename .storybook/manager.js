import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from '../src/static/svg/logo-axa.svg';

// Storybook saves certain UI settings to the local- and/or sessionStorage.
const UI_STORE = '@storybook/ui/store';

// When you open 'patterns.axa.ch' or 'localhost:6006', Storybook shows
// by default 'What is new' but ignores that we deactivated the addons panel
// for this story. It only respects the UI settings mentioned above, which we
// therefore have to manipulate ourselves.
const manipulateUISettings = storage => {
  if (storage.getItem(UI_STORE)) {
    const uiStore = JSON.parse(storage.getItem(UI_STORE));

    if (!uiStore.layout) {
      uiStore.layout = {};
    }

    uiStore.layout.showPanel = false;
    storage.setItem(UI_STORE, JSON.stringify(uiStore));
  } else {
    storage.setItem(UI_STORE, '{"layout":{"showPanel":false}}');
  }
};

manipulateUISettings(localStorage);
manipulateUISettings(sessionStorage);

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'AXA Living Styleguide',
    brandUrl: 'https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop',
    brandImage: logo,
  }),
});
