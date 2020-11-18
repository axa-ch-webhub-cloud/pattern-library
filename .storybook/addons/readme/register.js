import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import 'github-markdown-css/github-markdown.css';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github-gist.css';
import marked from 'marked';
import React from 'react';

const ADDON_ID = 'axa-ch/readme';
const PANEL_ID = `${ADDON_ID}/panel`;

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('bash', bash);

marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value,
});

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
