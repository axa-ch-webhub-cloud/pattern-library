/* global document */
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Examples/Button Link/Pure HTML',
  parameters: {
    readme,
    changelog,
    controls: { disabled: true },
  },
};

export const IconVisible = () =>
  '<axa-button-link icon="arrow-right">Next step</axa-button-link>';

export const Clickable = () => {
  const btn = document.createElement('axa-button-link');
  let counter = 0;
  btn.innerHTML = `You clicked me: ${counter}`;
  btn.addEventListener('click', e => {
    e.preventDefault();
    counter += 1;
    btn.innerHTML = `You clicked me: ${counter}`;
  });

  return btn;
};
