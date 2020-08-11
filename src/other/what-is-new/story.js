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
    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary">What's new</axa-heading>
      <axa-text variant="size-1">
        Here you will find the latest updates on the AXA Design System
        development.
      </axa-text>
      <axa-heading rank="2" variant="secondary">Update log</axa-heading>
      <axa-heading rank="5">Component versioning is now live!</axa-heading>
      <p class="what-is-new-text-with-link">
        We are happy to introduce to you the AXA Design System V1! Following the
        MVP, developed at the end of 2019, the V1 comes with improved UX and
        code integration structure. For more information check out our
        <axa-link>Introduction</axa-link>
      </p>
    </div>
    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
});
