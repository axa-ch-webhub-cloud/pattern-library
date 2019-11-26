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
  .add('Feature - Use your own label as a parant', () => {
    const template = html`
      <div>
        <label style="display:flex;"
          >Label as a parent 1<axa-checkbox
            class="hover"
            name="checkbox"
            ?checked="false"
            ?required="true"
            onchange='console.log("checkbox", this.name, " changed to: ", this.checked)'
            style="margin-left: 10px;"
          ></axa-checkbox>
        </label>
        <label style="display:flex;"
          >Label as a parent 2<axa-checkbox
            class="hover"
            name="checkbox"
            ?checked="false"
            ?required="true"
            onchange='console.log("checkbox", this.name, " changed to: ", this.checked)'
            style="margin-left: 10px;"
          ></axa-checkbox>
        </label>
      </div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  })
  .add('Feature - Use your own label as a sibling', () => {
    const template = html`
      <div>
        <span style="display:flex;">
          <label for="checkbox-sibling-1">Label as a sibling 1</label>
          <axa-checkbox
            refId="checkbox-sibling-1"
            class="hover"
            name="checkbox-sibling-1"
            ?checked="false"
            ?required="true"
            onchange='console.log("checkbox", this.name, " changed to: ", this.checked)'
            style="margin-left: 10px;"
          >
          </axa-checkbox>
        </span>
        <span style="display:flex;">
          <label for="checkbox-sibling-2">Label as a sibling 2</label>
          <axa-checkbox
            refId="checkbox-sibling-2"
            class="hover"
            name="checkbox-sibling-2"
            ?checked="false"
            ?required="true"
            onchange='console.log("checkbox", this.name, " changed to: ", this.checked)'
            style="margin-left: 10px;"
          >
          </axa-checkbox>
        </span>
      </div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
