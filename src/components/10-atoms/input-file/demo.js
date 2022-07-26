import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Examples/Input File/Pure HTML',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
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
