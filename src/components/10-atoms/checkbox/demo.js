/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

storiesOf('Examples/Checkbox/Pure HTML', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Use your own label as a child of the component', () => {
    const template = html`
      <axa-checkbox
        class="hover"
        name="checkbox"
        .checked="${false}"
        required="true"
        ><p>
          <span class="non-link-label-text">I agree to</span>
          <a href="https://www.google.ch" target="_blank"
            >conditions of data protection.</a
          >
        </p>
      </axa-checkbox>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  })
  .add('Use a styled HTML label', () => {
    const template = html`
      <axa-checkbox
        class="hover"
        name="checkbox"
        .checked="${false}"
        required="true"
        variant="checkmark"
        label="<p><span class='non-link-label-text'>This is an HTML label with a </span><a href='https://www.google.ch' target='_blank'>link.</a></p>"
        styled
      >
      </axa-checkbox>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
