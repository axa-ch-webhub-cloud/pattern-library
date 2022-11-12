import { html, render } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';
import '../../10-atoms/button';
import '../../10-atoms/text';

export default {
  title: 'Examples/File Upload/Pure HTML',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const GetFilesFromOnchange = () => {
  const changeHandler = e => {
    const files = e.detail;
    if (files.length > 0) {
      const listWrapper = html`
        <div class="js-file-upload__list-wrapper">
          <h3>The following files were selected:</h3>
          <ol>
            ${files.map(file => {
              return html` <li>${file.name}</li> `;
            })}
          </ol>
        </div>
      `;

      render(listWrapper, document.getElementById('listWrapper'));
    } else {
      render('', document.getElementById('listWrapper'));
    }
  };

  return html`
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
};

export const InAForm = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const imgUpload = document.querySelector('.js-file-upload__file-upload');

    if (imgUpload.files.length > 0) {
      const listWrapper = html`
        <div class="js-file-upload__list-wrapper">
          <h3>The following files were selected:</h3>
          <ol>
            ${imgUpload.files.map(file => {
              return html` <li>${file.name}</li> `;
            })}
          </ol>
        </div>
      `;

      render(listWrapper, document.getElementById('listWrapper'));
    }
  };

  return html`
    <div style="width:455px;">
      <axa-file-upload
        maxSizeOfSingleFileKB="500"
        class="js-file-upload__file-upload"
        >These files are going to be uploaded
      </axa-file-upload>
    </div>
    <form @click="${handleSubmit}" style="margin-top:40px;">
      <axa-button type="submit">Submit</axa-button>
    </form>
    <div id="listWrapper"></div>
  `;
};

export const Invalid = () => {
  const handleSubmit = () => {
    const textSelector = document.querySelector('axa-text');
    if (document.querySelector('axa-file-upload').hasAttribute('invalid')) {
      textSelector.innerHTML =
        'could not submit because file-upload is invalid';
      textSelector.style.color = '#c91432';
    } else {
      textSelector.innerHTML = 'submitted successfully';
      textSelector.style.color = '#000000';
    }
  };

  return html`
    <div style="width: 455px">
      <axa-file-upload
        allowedFileTypes="image/jpg, image/jpeg, application/pdf, image/png"
      >
        The following files are being transferred:
      </axa-file-upload>
    </div>

    <axa-button style="margin: 10px 0" @click="${handleSubmit}">
      Submit
    </axa-button>

    <br />
    <axa-text size="2"></axa-text>
  `;
};
