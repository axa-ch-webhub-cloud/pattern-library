import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../../components/10-atoms/text';
import '../../../components/10-atoms/heading';
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
      <axa-heading rank="2" variant="secondary">Help & Contact</axa-heading>
      <axa-text variant="size-1">
        The AXA core team provides support for users in adopting the AXA Design
        System. Reach out to us with the details of your project and we will do
        our bet to provide you with a tailored advice on how to reach your
        project objectives.
      </axa-text>
      <axa-heading rank="3" variant="secondary">Support</axa-heading>
      <axa-text variant="size-2"
        >Part of our mission is to guide you, AXA production teams, with the
        adoption of the tool during your digital journey.</axa-text
      >
      <div class="contact-support-visuals">
        <div class="contact-col-wrapper">
          <img
            src="support-questions.jpg"
            alt="support question"
            height="215"
          />
        </div>
        <div class="contact-col-wrapper">
          <p class="support-kicker">Day-to-day questions</p>
          <p class="support-paragraph">
            <strong>You need a clarification</strong> on any of the design/code
            elements? Something is not clear in the guidelines or processes?
            Don’t hesitate to reach out to us - we are happy to help.
          </p>
        </div>
      </div>
      <div class="contact-support-visuals">
        <div class="contact-col-wrapper">
          <img src="support-advice.jpg" alt="support advice" height="215" />
        </div>
        <div class="contact-col-wrapper">
          <p class="support-kicker">Design advice and assessments</p>
          <p class="support-paragraph">
            You have a digital project and
            <strong>you want to make sure the design is compliant</strong>
            to the AXA Brand standards? You need help and advice in adopting the
            AXA Design System in your project? We are here to accompany you
            through all phases.
          </p>
        </div>
      </div>
      <axa-heading rank="3" variant="secondary">Contact Us</axa-heading>
      <axa-text variant="size-1">
        For any questions or feedback — don’t hesitate to be in touch via the
        channel that suits you best.
      </axa-text>
      <div class="contact-grid">
        <div>
          <img src="slack-black-and-white.png" width="40" alt="Slack Icon" />
          <axa-heading rank="6">Slack</axa-heading>
          <axa-text variant="size-2">
            It is the best choice for quick, day-to-day inquiries:
          </axa-text>
          <axa-link href="https://axa-ch.slack.com/messages/patterns-lib-devs/"
            >Go to slack</axa-link
          >
        </div>
        <div>
          <img src="github-black-and-white.png" width="40" alt="Github Icon" />
          <axa-heading rank="6">GitHub</axa-heading>
          <axa-text variant="size-2">
            Let’s talk about the code:
          </axa-text>
          <axa-link href="https://github.com/axa-ch/patterns-library"
            >Go to GitHub</axa-link
          >
        </div>
      </div>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
});
