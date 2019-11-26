/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import createRefId from '../../../utils/create-ref-id';

storiesOf('Atoms/Checkbox/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Feature - Use your own label as a parant', () => {
    const template = html`
      <div>
        <label style="position:relative;display:inline-block;"
          >Label as a parent
          <axa-checkbox
            class="hover"
            name="checkbox"
            ?checked="false"
            ?required="true"
            onchange='console.log("checkbox", this.name, " changed to: ", this.checked)'
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
        <label for="checkbox-${createRefId}">Label as a </label>
        <axa-checkbox
          refId="checkbox-${createRefId}"
          class="hover"
          name="checkbox-${createRefId}"
          ?checked="false"
          ?required="true"
          onchange='console.log("checkbox", this.name, " changed to: ", this.checked)'
        >
        </axa-checkbox>
      </div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
