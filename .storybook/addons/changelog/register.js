import { types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import addonAPI, { addons } from '@storybook/addons';
import React from 'react';

const ADDON_ID = 'axa-ch/changelog';
const PANEL_ID = `${ADDON_ID}/panel`;

const MyPanel = () => {
  const value = useParameter('changelog', null);

  const replaceUnneeded = (value) => {
    if (value) {
      return value
        .replace('module.exports = "', '')
        .replace(/\\n";/g, '<br>')
        .replace(/\\n/g, '<br>');
    }
    return 'No ChangeLog found.';
  };

  return <div style={{ margin: '8px' }}
              dangerouslySetInnerHTML={{ __html: replaceUnneeded(value) }}></div>;
};

addonAPI.register(ADDON_ID, api => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <MyPanel/>
    </AddonPanel>
  );
  const title = 'ChangeLog';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
  });
});
