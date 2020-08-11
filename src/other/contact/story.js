import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../components/10-atoms/text';
import '../../components/10-atoms/heading';
import styles from './index.scss';

const story = storiesOf('Contact', module);
story.addParameters({
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
  options: { showPanel: false },
});

story.add('Contact', () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  const template = html`
    <style>
      ${styles}
    </style>
    <div class="accessory-story-content">
      <axa-heading rank="2" variant="secondary">Contact</axa-heading>
      <axa-text variant="size-1">
        The AXA core team provides support for users in adopting the AXA Design
        System. Reach out to us with the details of your project and we will do
        our bet to provide you with a tailored advice on how to reach your
        project objectives.
      </axa-text>
      <axa-heading rank="3" variant="secondary">Contact Us</axa-heading>
      <axa-text variant="size-1">
        For any questions or feedback — don’t hesitate to be in touch via the
        channel that suits you best.
      </axa-text>
      <div class="contact-grid">
        <div>
          <axa-heading rank="6">Slack</axa-heading>
          <axa-text variant="size-3">
            It is the best choice for quick, day-to-day inquiries:
          </axa-text>
          <axa-link>Go to slack</axa-link>
        </div>
        <div>
          <axa-heading rank="6">GitHub</axa-heading>
          <axa-text variant="size-3">
            Let’s talk about the code:
          </axa-text>
          <axa-link>Go to GitHub</axa-link>
        </div>
      </div>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
});
