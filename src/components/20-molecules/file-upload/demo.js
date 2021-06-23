/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

storiesOf('Examples/File Upload/Pure HTML', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('In a form', () => {
    const handleSubmit = e => {
      e.preventDefault();

      const imgUpload = document.querySelector('.js-file-upload__file-upload');

      if (imgUpload.files.length > 0) {
        const listWrapper = html`
          <div class="js-file-upload__list-wrapper">
            <h3>The following files were selected:</h3>
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
      <div style="width:455px;">
        <axa-file-upload
          maxSizeOfSingleFileKB="500"
          class="js-file-upload__file-upload"
          @change="${e => console.log('change 123')}"
          >These files are going to be uploaded</axa-file-upload
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
  })
  .add('Change Event', () => {
    const changeHandler = e => {
      e.preventDefault();

      const imgUpload = document.querySelector('.js-file-upload__file-upload');

      if (imgUpload.files.length > 0) {
        const listWrapper = html`
          <div class="js-file-upload__list-wrapper">
            <h3>The following files were selected:</h3>
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
      <div style="width:455px;">
        <axa-file-upload
          maxSizeOfSingleFileKB="500"
          class="js-file-upload__file-upload"
          @change="${changeHandler}"
          >These files are going to be uploaded</axa-file-upload
        >
      </div>
      <div id="listWrapper"></div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
