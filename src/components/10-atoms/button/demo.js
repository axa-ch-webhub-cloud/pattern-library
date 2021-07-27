/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

storiesOf('Examples/Button/Pure HTML', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
    knobs: { disable: true },
  })
  .add(
    'Icon visible',
    () => '<axa-button icon="arrow-right">Next step</axa-button>'
  )
  .add('Clickable', () => {
    const btn = document.createElement('axa-button');
    let counter = 0;
    btn.innerHTML = `You clicked me: ${counter}, btw my event name is click`;
    btn.addEventListener('click', () => {
      counter += 1;
      btn.innerHTML = `You clicked me: ${counter} times, btw my event name is click`;
    });

    return btn;
  })
  .add('In a form', () => {
    let count = 0;
    const handleSubmit = ev => {
      const { target } = ev;
      ev.preventDefault();
      count += 1;

      const el = target.nodeName === 'AXA-BUTTON' ? target : target.parentNode;
      // this code is for test purposes. Its ok to write it as is only a demo
      // It also make sure the structure of the DOM is correct with the fake button
      el.dataset.count = count;
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
          <axa-button class="js-submit-prevent" type="submit">
            Click me I prevent submit
          </axa-button>
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
  })
  .add(
    'Css width',
    () =>
      '<axa-button variant="red" style="width: 100%">This red button has "width: 100%"</axa-button>' +
      '<axa-text>You can simply set width by setting css width.</axa-text>'
  )
  .add('Side by side', () => {
    const template = html`
      <div style="display: flex">
        <axa-button variant="red" style="width: 20%">
          This button has "width: 20%"
        </axa-button>
        <axa-button style="width: 500px">
          This button has "width: 500px"
        </axa-button>
      </div>
      <axa-text>Place two buttons side by side with flexbox.</axa-text>
    `;
    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
