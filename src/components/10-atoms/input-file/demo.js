/* global document */
import { storiesOf } from '@storybook/html';
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

    inputFile.addEventListener('change', e => {
      counter = e.target.files.length;
      inputFile.querySelector(
        '.a-input-file'
      ).innerHTML = `You have chosen ${counter} files`;
      console.log('counter!!', counter);
    });
    return inputFile;
  });
