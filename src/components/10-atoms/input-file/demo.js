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
    let counter = 0;
    inputFile.innerHTML = `You have chosen ${counter} files`;

    inputFile.addEventListener('input', (e) => {
      console.log('abc', e.target.files, inputFile.files)
      counter += inputFile.files.length();
      inputFile.innerHTML = `You have chosen ${counter} files`;
    });
    return inputFile;
  });
