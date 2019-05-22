/* global document */
import { storiesOf } from '@storybook/html';
// import { html, render } from 'lit-html';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';
import './index';

storiesOf('Atoms/Input File/Demos', module)
  .addDecorator(withMarkdown(Readme))

  .add('Feature - InputFile clickable', () => {
    const inputFile = document.createElement('axa-input-file');
    inputFile.setAttribute('multiple', 'multiple');
    let counter = 0;
    inputFile.innerHTML = `You have chosen ${counter} files`;

    inputFile.addEventListener('input', e => {
      const {
        target: { files },
      } = e;
      counter += files.length;
      inputFile.querySelector(
        '.a-input-file__flex-wrapper'
      ).innerHTML = `You have chosen ${counter} files`;
    });
    return inputFile;
  });
