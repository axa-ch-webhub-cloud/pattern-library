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
  let initalTemplate = '';

  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        html: initalText,
        template: initalTemplate,
      };
      this.onAddonAdded = this.onAddonAdded.bind(this);
    }

    onAddonAdded ({ template, html }) {
      initalText = html;
      initalTemplate = template;
      this.setState({ html, template });
    }

    componentDidMount() {
      channel.on(ADDON_EVENT, this.onAddonAdded);
    }

    componentWillUnmount() {
      channel.removeListener(ADDON_EVENT, this.onAddonAdded);
    }

    render() {
      return [
        e('style', {
          key: uuidv4(),
          dangerouslySetInnerHTML: { __html: 'code { background-color: #F0F0F0; }' },
        }),
        e('div', {
          key: uuidv4(),
          dangerouslySetInnerHTML: { __html: this.state.html },
        }),
        e('div', {
          key: uuidv4(),
          dangerouslySetInnerHTML: { __html: '<h3>Code Snipped</h3>' },
        }),
        e('pre', {
          key: uuidv4()
        }, e('code', { key: uuidv4() }, this.state.template.trim())),
      ]
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
    const template = storyFn(context);
    channel.emit(ADDON_EVENT, { template, html: html || DEFAULT_MSG });
    return template;
  },
});
