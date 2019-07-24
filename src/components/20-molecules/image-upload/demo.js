/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Readme from './README.md';
import './index';

storiesOf('Molecules/Image Upload/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Feature - image-upload in a form', () => {
    const handleSubmit = e => {
      e.preventDefault();

      const imgUpload = document.querySelector(
        '.js-image-upload__image-upload'
      );

      if (imgUpload.files.length > 0) {
        const listWrapper = html`
          <div class="js-image-upload__list-wrapper">
            <h3>Folgende Dateien wurden ausgewählt</h3>
            <ol>
              ${imgUpload.files.map(file => {
                return html`
                  <li>${file.name}</li>
                `;
              })}
            </ol>
          </div>
        `;

        render(listWrapper, document.getElementById('listWrapper'));
      }
    };

    const template = html`
      <div style="width:453px;">
        <axa-image-upload class="js-image-upload__image-upload"
          >These files are going to be uploaded</axa-image-upload
        >
      </div>
      <form @click="${handleSubmit}" style="margin-top:40px;">
        <axa-button type="submit">Submit</axa-button>
      </form>
      <div id="listWrapper"></div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
