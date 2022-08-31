import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Examples/Button Link/Pure HTML',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
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
