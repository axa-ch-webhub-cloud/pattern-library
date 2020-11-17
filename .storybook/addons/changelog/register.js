import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import 'github-markdown-css/github-markdown.css';
import marked from 'marked';
import React from 'react';

const ADDON_ID = 'axa-ch/changelog';
const PANEL_ID = `${ADDON_ID}/panel`;

const MyPanel = () => {
  const value = useParameter('changelog', null);

  const mdToHTML = value => {
    if (value) {
      let lines = value.split(/\\n/);

      lines[0] = lines[0].substring(22);
      lines = lines.slice(0, lines.length - 1);

      value = lines.join('');
    } else {
      value = 'No CHANGELOG found.';
    }

    return marked(value);
  };

  return (
    <div
      className="markdown-body"
      style={{ margin: '20px' }}
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
    title: 'CHANGELOG',
    paramKey: 'changelog',
    render,
  });
});
