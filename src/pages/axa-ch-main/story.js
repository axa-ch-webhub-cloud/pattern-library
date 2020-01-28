import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Readme from '../../../README.md';
import '../../components/10-atoms/text/lib';
import '../../components/10-atoms/heading/lib';

import commercialHeroBanner from './commercial-hero-banner';
import footer from './footer';
import policyFeatures from './policy-features';

const story = storiesOf('Pages|AXA', module);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

story.add('Main Page', () => {
  const wrapper = document.createElement('div');

  const template = html`
    ${commercialHeroBanner} ${policyFeatures}${footer}
  `;

  render(template, wrapper);
  return wrapper;
});
