import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import marked from 'marked';
import React from 'react';

const ADDON_ID = 'axa-ch/readme';
const PANEL_ID = `${ADDON_ID}/panel`;

const MyPanel = () => {
  const value = useParameter('readme', null);

  const mdToHTML = value => {
    if (!value) {
      value = 'No README found.';
    }

    return marked(value);
  };

  return (
    <div
      className="markdown-body"
      style={{ margin: '15px' }}
      dangerouslySetInnerHTML={{ __html: mdToHTML(value) }}
    ></div>
  );
};

addons.register(ADDON_ID, () => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <MyPanel />
    </AddonPanel>
  );

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Readme',
    paramKey: 'readme',
    render,
  });
});
