/* global document */
import { storiesOf } from '@storybook/html';
import Changelog from './CHANGELOG.md';
import './index';
import Readme from './README.md';

storiesOf('Components|Input File/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Clickable', () => {
    const inputFile = document.createElement('axa-input-file');
    inputFile.setAttribute('multiple', 'multiple');

    let counter = 0;
    inputFile.text = `You have chosen ${counter} files`;

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
