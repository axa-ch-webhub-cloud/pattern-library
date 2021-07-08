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
  .add('Get files from onChange event', () => {
    const changeHandler = e => {
      const files = e.detail;

      if (files.length > 0) {
        const listWrapper = html`
          <div class="js-file-upload__list-wrapper">
            <h3>The following files were selected:</h3>
            <ol>
              ${files.map(file => {
                return html`
                  <li>${file.name}</li>
                `;
              })}
            </ol>
          </div>
        `;

        render(listWrapper, document.getElementById('listWrapper'));
      } else {
        render('', document.getElementById('listWrapper'));
      }
    };

    const template = html`
      <div style="width:455px;">
        <axa-file-upload
          @change="${changeHandler}"
          maxSizeOfSingleFileKB="500"
          class="js-file-upload__file-upload"
          >These files are going to be uploaded</axa-file-upload
        >
      </div>
      <div id="listWrapper"></div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
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
    const wrapperWidth = '455px';
    const inputFileText = 'Upload file';
    const maxSizeOfSingleFileKB = 100;
    const maxSizeOfAllFilesKB = 500;
    const maxNumberOfFiles = 10;
    const deleteStatusText = 'Delete';
    const addStatusText = 'Add more';
    const allowedFileTypes =
      'image/jpg, image/jpeg, application/pdf, image/png';
    const fileTooBigStatusText = 'File size exceeds maximum size';
    const filesTooBigStatusText = 'File sizes exceed maximum size';
    const tooManyFilesStatusText = 'You exceeded the maximum number of files';
    const orText = 'or';
    const infoText = 'Drag and drop to upload your file';
    const wrongFileTypeStatusText =
      'Your file does not correspond with our allowed file-types';
    const icon = iconList;
    const headerText = 'The following files are being transferred:';
    const preventFileCompression = false;

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
      <div style="width:${wrapperWidth};">
        <axa-file-upload
          inputFileText="${inputFileText}"
          maxSizeOfSingleFileKB="${maxSizeOfSingleFileKB}"
          maxSizeOfAllFilesKB="${maxSizeOfAllFilesKB}"
          maxNumberOfFiles="${maxNumberOfFiles}"
          deleteStatusText="${deleteStatusText}"
          addStatusText="${addStatusText}"
          fileTooBigStatusText="${fileTooBigStatusText}"
          ?preventFileCompression="${preventFileCompression}"
          filesTooBigStatusText="${filesTooBigStatusText}"
          tooManyFilesStatusText="${tooManyFilesStatusText}"
          orText="${orText}"
          infoText="${infoText}"
          wrongFileTypeStatusText="${wrongFileTypeStatusText}"
          icon="${icon}"
          allowedFileTypes="${allowedFileTypes}"
          >${headerText}</axa-file-upload
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
