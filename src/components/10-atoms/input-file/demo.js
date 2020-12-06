/* global document */
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Examples/Input File/Pure HTML',
  parameters: {
    readme,
    changelog,
    controls: { disabled: true },
  },
};

export const Clickable = () => {
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
};
