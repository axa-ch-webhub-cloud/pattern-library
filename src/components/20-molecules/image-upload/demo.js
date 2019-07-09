/* global document */
import { storiesOf } from '@storybook/html';
// import { html, render } from 'lit-html';
import Readme from './README.md';
import './index';

storiesOf('Molecules/Image Upload/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Feature - image upload in a form', () => {
    const form = document.createElement('form');

    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit';
    submitButton.style = 'margin-top: 40px;';
    submitButton.setAttribute('type', 'submit');

    const wrapper = document.createElement('div');
    wrapper.setAttribute('style', 'width:453px');

    const imgUpload = document.createElement('axa-image-upload');
    imgUpload.innerHTML = 'Folgende Dateien werden übertragen';

    form.appendChild(wrapper);
    wrapper.appendChild(imgUpload);
    form.appendChild(submitButton);

    form.addEventListener('submit', e => {
      e.preventDefault();
      const listWrapperElement = document.querySelector(
        '.js-image-upload__list-wrapper'
      );

      if (listWrapperElement) {
        listWrapperElement.parentNode.removeChild(listWrapperElement);
      }

      if (imgUpload.finalFiles.length > 0) {
        const listWrapper = document.createElement('div');
        listWrapper.classList.add('js-image-upload__list-wrapper');

        const header = document.createElement('h3');
        const textNode = document.createTextNode(
          'Folgende Dateien wurden ausgewählt'
        );

        const ol = document.createElement('ol');
        imgUpload.finalFiles.forEach(file => {
          const li = document.createElement('li');
          li.innerHTML = file.name;
          ol.appendChild(li);
        });
        header.appendChild(textNode);
        form.appendChild(listWrapper);
        listWrapper.appendChild(header);
        listWrapper.appendChild(ol);
      }
    });
    return form;
  });
