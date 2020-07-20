import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../../components/10-atoms/text';
import '../../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../../utils/contact-footer';

const story = storiesOf('Guides|Design Pattern', module);
story.addParameters({
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
  options: { showPanel: false },
});

story.add('Design Pattern', () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  const template = html`
    <style>
      ${styles}
    </style>
    <axa-container class="accessory-story-content">
      <axa-heading rank="1">Design Pattern</axa-heading>
      <axa-text variant="size-1">
        Test
      </axa-text>
    </axa-container>
    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
});
