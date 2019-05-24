/* global document */
import { storiesOf } from '@storybook/html';
// import { html, render } from 'lit-html';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';
import './index';

storiesOf('Molecules/Image Upload/Demos', module)
  .addDecorator(withMarkdown(Readme))

  .add('Feature - image upload in a form', () => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('style', 'width:440px');
    const imgUpload = document.createElement('axa-image-upload');
    imgUpload.innerHTML = 'Image Upload';
    wrapper.appendChild(imgUpload);
    return wrapper;
  });
