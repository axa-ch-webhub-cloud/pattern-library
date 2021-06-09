import { html, render } from 'lit-html';
import '../../../components/10-atoms/heading';
import '../../../components/10-atoms/text';
import styles from './index.scss';

export default {
  title: 'Others/Contact',
  decorators: [],
  parameters: {
    knobs: { disable: true },
    readme: { disable: true },
    usage: { disable: true },
    changelog: { disable: true },
    a11y: { disable: true },
    options: { showPanel: false },
    layout: 'fullscreen',
  },
};

export const Contact = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  const template = html`
    <style>
      ${styles}
    </style>
    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary">Help & Contact</axa-heading>
      <axa-text variant="size-1">
        The AXA core team provides support for users in adopting AXA's Design
        System. Reach out to us with the details of your project and we will do
        our best to provide you with tailored advice on how to reach your
        objectives.
      </axa-text>
      <axa-heading rank="2" variant="secondary">Support</axa-heading>
      <axa-text variant="size-2"
        >Part of our mission is to guide AXA product teams during their digital
        journey with respect to our areas of competency.</axa-text
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
          <p class="contact-support-visuals__kicker">Day-to-day questions</p>
          <p class="contact-support-visuals__paragraph">
            <strong>You need a clarification</strong> on any of the design/code
            elements? Something is too vague in our guidelines or processes?
            Don’t hesitate to reach out to us - we are happy to help.
          </p>
        </div>
      </div>
      <div class="contact-support-visuals">
        <div class="contact-col-wrapper">
          <img src="support-advice.jpg" alt="support advice" height="215" />
        </div>
        <div class="contact-col-wrapper">
          <p class="contact-support-visuals__kicker">
            Design advice and assessments
          </p>
          <p class="contact-support-visuals__paragraph">
            You have a digital project and
            <strong>want to make sure its design is compliant</strong>
            to AXA brand standards? You need help and advice in adopting AXA's
            Design System in your project? We are here to accompany you through
            all of your project's phases.
          </p>
        </div>
      </div>
      <axa-heading rank="2" variant="secondary">Contact Us</axa-heading>
      <axa-text variant="size-1">
        For any questions or feedback — don’t hesitate to be in touch via the
        channel that suits you best.
      </axa-text>
      <div class="contact-grid">
        <div>
          <img src="github-black-and-white.png" width="40" alt="Github Icon" />
          <axa-heading rank="6">GitHub</axa-heading>
          <axa-text variant="size-2">
            Bug reports, small change requests, "wishes":
          </axa-text>
          <axa-link href="https://github.com/axa-ch/patterns-library/issues"
            >Go to GitHub</axa-link
          >
        </div>
        <div>
          <img src="email.svg" width="40" alt="Email Icon" />
          <axa-heading rank="6">Feature request</axa-heading>
          <axa-text variant="size-2">
            You need a feature?
          </axa-text>
          <axa-link href="mailto:martin.stuedle@axa-winterthur.ch"
            >Message our product owner</axa-link
          >
        </div>
        <div>
          <img src="slack-black-and-white.png" width="40" alt="Slack Icon" />
          <axa-heading rank="6">Slack for Developers</axa-heading>
          <axa-text variant="size-2">
            Questions, requests for help, requests for product presentations,
            etc:
          </axa-text>
          <axa-link href="https://axa-ch.slack.com/messages/patterns-lib-devs/"
            >Go to Slack</axa-link
          >
        </div>
        <div>
          <img src="email.svg" width="40" alt="Email Icon" />
          <axa-heading rank="6">Ask a Designer</axa-heading>
          <axa-text variant="size-2">
            Questions and requests for help regarding design issues:
          </axa-text>
          <axa-link href="mailto:webstyleguide@axa.ch"
            >Email the design team</axa-link
          >
        </div>
      </div>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
};
