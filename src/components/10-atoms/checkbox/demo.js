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
        <label style="position:relative;display:inline-block;"
          >Label<axa-checkbox
            refId="checkbox-demo-54"
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
  });
