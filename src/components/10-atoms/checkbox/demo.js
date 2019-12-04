/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Checkbox/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Feature - Use your own label as a child of the component', () => {
    const template = html`
      <div>
        <axa-checkbox
          class="hover"
          name="checkbox"
          checked="false"
          required="true"
          onchange='console.log("checkbox", this.name, " changed to: ", this.checked)'
          ><p>click
          <a href="https://www.google.ch" target="_blank">here</a></axa-checkbox</p>
        >
        <axa-checkbox
          class="hover"
          name="checkbox"
          checked="false"
          required="true"
          onchange='console.log("checkbox", this.name, " changed to: ", this.checked)'
          ><p></p></p>or click <a href="https://www.google.ch" target="_blank">here</a> if
          you prefere</axa-checkbox</p>
        >
      </div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
