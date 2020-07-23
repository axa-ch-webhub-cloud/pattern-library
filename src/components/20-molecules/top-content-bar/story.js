/* global document */
import { storiesOf } from '@storybook/html';
import { text, select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';
import withNoBorder from '../../../../.storybook/addons/no-border';

const variantOptions = {
  none: '',
  warning: 'warning',
};

storiesOf('Components', module)
  .addDecorator(withNoBorder)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Top Content Bar', () => {
    const wrapper = document.createElement('div');

    const ctatext = text('ctatext', '');
    const variant = select('variant', variantOptions, '');
    const href = text('href', '');
    const textValue = text(
      'Text',
      'Undefined flighting object detected in your region. People are paniking. Stay calm'
    );
    const link = text('Add axa-link', '');

    const template = html`
      <axa-top-content-bar
        variant="${variant}"
        href="${href}"
        ctatext="${ctatext}"
      >
        ${textValue}
        ${link
          ? html`
              <axa-link>${link}</axa-link>
            `
          : ''}
      </axa-top-content-bar>
    `;

    render(template, wrapper);
    return wrapper;
  });
