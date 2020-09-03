/* global document */
import { storiesOf } from '@storybook/html';
import Changelog from './CHANGELOG.md';
import './index';

storiesOf('Examples/Input File/Pure HTML', module)
  .addParameters({
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
    });

    return inputFile;
  });
