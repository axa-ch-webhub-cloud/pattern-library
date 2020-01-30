/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import Readme from '../../../README.md';
import '../../components/10-atoms/text';
import '../../components/10-atoms/heading';
import commercialHeroBanner from './commercial-hero-banner';
import footer from './footer';
import policyFeatures from './policy-features';
import navbar from './navbar';
import footerSmall from './footer-small';

const story = storiesOf('Pages|AXA', module);
story.addDecorator(withKnobs);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

function getFirstChildOfAllAxaCustomElements() {
  return Array.prototype.slice
    .call(document.querySelectorAll('*'))
    .filter(function(el) {
      return el.tagName.toUpperCase().startsWith('AXA-');
    })
    .map(el => {
      if (el.shadowRoot) {
        return el.shadowRoot.querySelector('*');
      }
      return el.querySelector('*');
    });
}

story.add('Main Page', () => {
  const markWebcomponents = boolean('Highlight Webcomponents', false);
  const wrapper = document.createElement('div');

  // Execution is guaranteed to happen after the render.
  setTimeout(() => {
    // const a = document.querySelectorAll('*');

    const allChildrenOfWebcomponents = getFirstChildOfAllAxaCustomElements();
    if (markWebcomponents) {
      allChildrenOfWebcomponents.forEach(el => {
        el.style.border = '5px red solid';
      });
    } else {
      allChildrenOfWebcomponents.forEach(el => {
        el.style.border = 'none';
      });
    }
    console.log(allChildrenOfWebcomponents);
  });

  const resetBrowserDefaultStyles = html`
    <style>
      html,
      body {
        padding: 0;
        margin: 0;
      }

      ul {
        display: block;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin: 0;
        padding: 0;
      }
    </style>
  `;

  const style = html`
    <style>
      .pages-axa-main-page {
        font-family: Source Sans Pro, Arial, sans-serif;
      }

      .pages-axa-main-page--marked-webcomponents [] {
        background: black;
      }
    </style>
  `;

  const template = html`
    ${resetBrowserDefaultStyles} ${style}

    <div class="pages-axa-main-page">
      ${navbar} ${commercialHeroBanner} ${policyFeatures} ${footer}
      ${footerSmall}
    </div>
  `;

  render(template, wrapper);
  return wrapper;
});
