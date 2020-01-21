/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

storiesOf('Components|Atoms/Checkbox/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Feature - Use your own label as a child of the component', () => {
    const template = html`
      <axa-checkbox
        class="hover"
        name="checkbox"
        checked="false"
        required="true"
        ><p>
          I agree to
          <a href="https://www.google.ch" target="_blank"
            >conditions of data protection.</a
          >
        </p>
      </axa-checkbox>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
