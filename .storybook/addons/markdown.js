import addons, { types, makeDecorator } from '@storybook/addons';
import React from 'react';

const ADDON_ID = 'markdown';
const ADDON_EVENT = `${ADDON_ID}/event`;
const PANEL_ID = `${ADDON_ID}/panel`;
const DEFAULT_MSG = 'No Markdown Provided';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

addons.register(ADDON_ID, (api) => {
  let input = DEFAULT_MSG;

  const render = () => {
    return  React.createElement(
      'div',
      { key: uuidv4(), dangerouslySetInnerHTML: { __html: input } }
    );
  };
  const title = 'Readme';
  const channel = addons.getChannel();

  channel.on(ADDON_EVENT, ({ id, html }) => {
    const { render: _render } = addons.getElements(types.PANEL)[PANEL_ID];
    input = html;
    _render();
  });

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
  });
});

export const withMarkdown = makeDecorator({
  name: 'withMarkdown',
  parameterName: 'markdown',
  wrapper: (storyFn, context, { options : html, parameters }) => {
    const channel = addons.getChannel();
    const { id } = context;
    channel.emit(ADDON_EVENT, { id, html: html || DEFAULT_MSG });
    return storyFn(context);
  },
});
