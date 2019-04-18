import addons, { types, makeDecorator } from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';
import React, { Component } from 'react';

const ADDON_ID = 'markdown';
const ADDON_EVENT = `${ADDON_ID}/event`;
const PANEL_ID = `${ADDON_ID}/panel`;
const DEFAULT_MSG = '<h2>No Markdown Provided</h2><br>';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const e = React.createElement;

addons.register(ADDON_ID, api => {
  const title = 'Readme';
  const channel = addons.getChannel();
  let initialText = DEFAULT_MSG;
  let initialTemplate = '';

  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        html: initialText,
        template: initialTemplate,
      };
      this.onAddonAdded = this.onAddonAdded.bind(this);
      this.onStoryChanged = this.onStoryChanged.bind(this);
    }

    onAddonAdded({ template, html }) {
      initialText = html || '';
      initialTemplate = typeof template === 'string' ? template.trim() : '';
      this.setState({ html, template: initialTemplate });
    }

    onStoryChanged() {
      initialText = DEFAULT_MSG;
      initialTemplate = '';
      this.setState({ html: initialText, template: initialTemplate });
    }

    componentDidMount() {
      channel.on(ADDON_EVENT, this.onAddonAdded);
      channel.on(STORY_CHANGED, this.onStoryChanged);
    }

    componentWillUnmount() {
      channel.removeListener(ADDON_EVENT, this.onAddonAdded);
      channel.removeListener(STORY_CHANGED, this.onStoryChanged);
    }

    render() {
      const { template, html } = this.state;
      return [
        e('style', {
          key: uuidv4(),
          dangerouslySetInnerHTML: {
            __html: 'code { background-color: #F0F0F0; }',
          },
        }),
        e('div', {
          key: uuidv4(),
          dangerouslySetInnerHTML: { __html: html },
        }),
        e('div', {
          key: uuidv4(),
          dangerouslySetInnerHTML: { __html: '<h3>Code Snipped</h3>' },
        }),
        e(
          'pre',
          {
            key: uuidv4(),
          },
          e('code', { key: uuidv4() }, template)
        ),
      ];
    }
  }

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
  wrapper: (storyFn, context, { options: html }) => {
    const channel = addons.getChannel();
    const template = storyFn(context);
    let generatedTemplate = template;
    if (
      typeof template === 'object' &&
      template !== null &&
      template instanceof HTMLElement
    ) {
      const el = document.createElement('div');
      el.appendChild(template);
      generatedTemplate = el.innerHTML;
    }
    channel.emit(ADDON_EVENT, {
      template: generatedTemplate,
      html: html || DEFAULT_MSG,
    });
    return template;
  },
});
