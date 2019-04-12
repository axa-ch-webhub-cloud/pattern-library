import addons, { types, makeDecorator } from '@storybook/addons';
import React, { Component } from 'react';

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

const e = React.createElement;

addons.register(ADDON_ID, (api) => {
  const title = 'Readme';
  const channel = addons.getChannel();
  let initalText = DEFAULT_MSG;

  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        html: initalText,
      };
      this.onAddonAdded = this.onAddonAdded.bind(this);
    }

    onAddonAdded ({ html }) {
      initalText = html;
      this.setState({ html });
    }

    componentDidMount() {
      channel.on(ADDON_EVENT, this.onAddonAdded);
    }

    componentWillUnmount() {
      channel.removeListener(ADDON_EVENT, this.onAddonAdded);
    }

    render() {
      return e('div', {
        key: uuidv4(),
        dangerouslySetInnerHTML: { __html: this.state.html },
      });
    }
  };

  const render = () => e(Wrapper, { key: uuidv4() });

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
  });
});

export const withMarkdown = makeDecorator({
  name: 'withMarkdown',
  parameterName: 'markdown',
  wrapper: (storyFn, context, { options : html }) => {
    const channel = addons.getChannel();
    channel.emit(ADDON_EVENT, { html: html || DEFAULT_MSG });
    return storyFn(context);
  },
});
