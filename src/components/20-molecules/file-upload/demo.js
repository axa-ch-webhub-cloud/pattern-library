/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import { iconList } from '../../10-atoms/icon/icon-list';
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
        <axa-file-upload class="js-file-upload__file-upload"
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
  .add('invalid', () => {
    const wrapper = document.createElement('div');

    setTimeout(() => {
      document.querySelector('axa-button').addEventListener('click', () => {
        const textSelector = document.querySelector('axa-text');
        if (document.querySelector('axa-file-upload').hasAttribute('invalid')) {
          textSelector.innerHTML =
            'could not submit because file-upload is invalid';
          textSelector.style.color = '#c91432';
        } else {
          textSelector.innerHTML = 'submitted successfully';
          textSelector.style.color = '#000000';
        }
      });
    });

    const template = html`
      <div style="width: 455px">
        <axa-file-upload
          inputFileText="Upload file"
          maxSizeOfSingleFileKB="100"
          maxSizeOfAllFilesKB="500"
          maxNumberOfFiles="10"
          deleteStatusText="Delete"
          addStatusText="Add more"
          fileTooBigStatusText="File size exceeds maximum size"
          filesTooBigStatusText="File sizes exceed maximum size"
          tooManyFilesStatusText="You exceeded the maximum number of files"
          orText="or"
          infoText="Drag and drop to upload your file"
          wrongFileTypeStatusText="Your file does not correspond with our allowed file-types"
          icon="${iconList}"
          allowedFileTypes="image/jpg, image/jpeg, application/pdf, image/png"
          >The following files are being transferred:</axa-file-upload
        >
      </div>

      <axa-button style="margin: 10px 0">
        Submit
      </axa-button>

      <br />
      <axa-text variant="size-2"></axa-text>
    `;

    render(template, wrapper);
    return wrapper;
  });
