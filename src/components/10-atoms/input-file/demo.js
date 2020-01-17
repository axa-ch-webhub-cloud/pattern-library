/* global document */
import { storiesOf } from '@storybook/html';
import Readme from './README.md';
import './index';

storiesOf('Components|Atoms/Input File/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Feature - InputFile clickable', () => {
    const inputFile = document.createElement('axa-input-file');
    inputFile.setAttribute('multiple', 'multiple');
    let counter = 0;
    inputFile.innerHTML = `You have chosen ${counter} files`;

    inputFile.addEventListener('change', e => {
      counter = e.target.files.length;
      inputFile.querySelector('.a-input-file').innerHTML = `
        <span class="a-input-file__flex-wrapper">You have chosen ${counter} files</span>
      `;
      // eslint-disable-next-line no-console
      console.log('counter!!', counter);
    });
    return inputFile;
  });
