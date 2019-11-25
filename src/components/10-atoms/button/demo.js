/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Button/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Feature - Button icon visible',
    () => '<axa-button icon="arrow-right">Icon</axa-button>'
  )
  .add('Feature - Button clickable', () => {
    const btn = document.createElement('axa-button');
    let counter = 0;
    btn.innerHTML = `You clicked me: ${counter}, btw my event name is click`;
    btn.addEventListener('click', () => {
      counter += 1;
      btn.innerHTML = `You clicked me: ${counter} times, btw my event name is click`;
    });

    return btn;
  })
  .add('Feature - Button in a form', () => {
    const handleSubmit = ev => {
      ev.preventDefault();
    };

    const template = html`
      <div>
        <form>
          <axa-button type="submit">Click me, I send you to Nirvana</axa-button>
        </form>
        <p>
          I&apos;m type submit Button in a form, on click I stop submit event
          for you for example you can validate me
        </p>
        <form @click="${handleSubmit}">
          <axa-button type="submit">Click me I prevent submit</axa-button>
        </form>
        <form>
          <p>
            I&apos;m type reset Button in a form, if you type something - on
            click I should reset the input
          </p>
          <input type="text" />
          <axa-button type="reset">Reset Input</axa-button>
        </form>
      </div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
