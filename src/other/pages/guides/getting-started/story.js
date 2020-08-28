import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../../../components/10-atoms/text';
import '../../../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../../utils/contact-footer';
import callout from '../../utils/callout';

const story = storiesOf('Guides|Getting started', module);
story.addParameters({
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
  options: { showPanel: false },
});

story.add('Getting started', () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  const template = html`
    <style>
      ${styles}
    </style>
    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary">Getting started</axa-heading>
      <axa-text variant="size-1">
        The AXA Design System is a toolbox of resources to create beautiful user
        interfaces, consistent with the AXA Brand guidelines, principles, and
        best practices. Instead of focusing on pixels, developers can focus on
        application logic, while designers can focus on the user experience,
        interactions, and flows.
      </axa-text>
      <header class="getting-started-header">
        <p class="getting-started-subtitle">A perfect start for a</p>
        <axa-heading rank="2" variant="secondary">Developer</axa-heading>
      </header>
      <axa-text variant="size-1"
        >The library provides front-end developers & engineers a collection of
        reusable Web components to build websites and user interfaces, aligned
        with the AXA Brand guidelines. Adopting the AXA components library
        enables you to use consistent markup, styles, and behavior in prototype
        and production work.</axa-text
      >
      <axa-heading rank="3">Install and use components</axa-heading>
      <header class="getting-started-header">
        <p class="getting-started-subtitle">A perfect start for a</p>
        <axa-heading rank="2" variant="secondary">Designer</axa-heading>
      </header>
      <axa-text variant="size-1"
        >It is our aim to offer our customers security and trust when using our
        services. To achieve this, we rely on uniform visual communication and
        use existing and tested interactions.</axa-text
      >
      <br />
      <axa-text variant="size-1"
        >In order for us to release your application for go-live, the following
        requirements have to be considered during product development:</axa-text
      >
      <axa-heading rank="3">Design- and Product Development Guide</axa-heading>
      <!-- TODO: Minimal requirements Go live (Figma) -->
      <iframe
        style="border: 1px solid rgba(0, 0, 0, 0.1);"
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6zurYk3bJpzUg0H2THSxGF%2FAXA-UI-Kit%3Fnode-id%3D0%253A8209%26scaling%3Dmin-zoom&chrome=DOCUMENTATION"
        allowfullscreen
      ></iframe>
      ${callout}
    </div>
    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
});
