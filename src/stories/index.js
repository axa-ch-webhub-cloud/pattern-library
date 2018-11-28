/* global document */
// better to load this only if it's needed
import 'document-register-element'; // ES2015
// load this for browsers which support customElements without builtin (webkit)
import '@ungap/custom-elements-builtin';
import { storiesOf } from '@storybook/html';

storiesOf('Demo', module)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  });
