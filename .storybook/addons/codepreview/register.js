import React from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';

import Panel from './Panel';

addons.register('ws/htmlMarkup', () => {
  addons.add('markup/panel', {
    title: 'HTML',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Panel />
      </AddonPanel>
    ),
  });
});
