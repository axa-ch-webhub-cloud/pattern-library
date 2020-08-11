import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../../components/10-atoms/text';
import '../../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../../utils/contact-banner';

const story = storiesOf('Guides|Getting started', module);
story.addParameters({
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
  options: { showPanel: false },
});

story.add('Getting started', () => {
  const wrapper = document.createElement('div');

  const template = html`
    <style>
      ${styles}
    </style>
    <axa-container>
      <axa-heading rank="1">Getting started</axa-heading>
      <axa-text variant="size-1">
        The AXA Design System is a toolbox of resources to create beautiful user
        interfaces, consistent with the AXA Brand guidelines, principles, and
        best practices. Instead of focusing on pixels, developers can focus on
        application logic, while designers can focus on the user experience,
        interactions, and flows.
      </axa-text>
    </axa-container>
    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
});
