import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../components/10-atoms/text';
import '../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../utils/contact-footer';

const story = storiesOf("Overview|What's new", module);
story.addParameters({
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
  options: { showPanel: false },
});

story.add("What's new", () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  const template = html`
    <style>
      ${styles}
    </style>
    <axa-container>
      <axa-heading rank="1">What's new</axa-heading>
      <axa-text variant="size-1">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </axa-text>
    </axa-container>
    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
});
