import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../../components/10-atoms/text';
import '../../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../../utils/contact-footer';

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
      <axa-heading rank="3" variant="">Install and use components</axa-heading>
      <header class="getting-started-header">
        <p class="getting-started-subtitle">A perfect start for a</p>
        <axa-heading rank="2" variant="secondary">Designer</axa-heading>
      </header>
      <axa-text variant="size-1"
        >Rapidly build beautiful and accessible experiences. The AXA Design
        System UI kit contains all resources you need to get started on your AXA
        digital projects, and save precious time and effort.</axa-text
      >
    </div>
    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
});
