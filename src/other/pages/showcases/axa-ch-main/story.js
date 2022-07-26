import { html } from 'lit';
import '../../../../components/10-atoms/heading';
import '../../../../components/10-atoms/text';
import commercialHeroBanner from './commercial-hero-banner';
import footer from './footer';
import footerSmall from './footer-small';
import navbar from './navbar';
import policyFeatures from './policy-features';

export default {
  title: 'Pages/AXA',
  parameters: {
    readme: { disable: true },
    usage: { disable: true },
    changelog: { disable: true },
    a11y: { disable: true },
  },
  args: {
    highlightAXAWebcomponents: false,
  },
  argTypes: {
    highlightAXAWebcomponents: { control: 'boolean' },
  },
};

function getFirstChildOfEachAxaCustomElement() {
  return Array.prototype.slice
    .call(document.querySelectorAll('*'))
    .filter(el => el.tagName.toUpperCase().startsWith('AXA-'))
    .map(el =>
      el.shadowRoot ? el.shadowRoot.querySelector('*') : el.querySelector('*')
    );
}

function drawOrRemoveBorderAroundElements(shouldDrawBorder, elements) {
  if (shouldDrawBorder) {
    elements.forEach(el => {
      el.style.border = '5px red solid';
    });
  } else {
    elements.forEach(el => {
      el.style.border = 'none';
    });
  }
}

export const AXA = ({ highlightAXAWebcomponents }) => {
  // Execution is guaranteed to happen after the render, by putting it at the
  // end of the event loop.
  setTimeout(() => {
    const allChildrenOfWebcomponents = getFirstChildOfEachAxaCustomElement();
    drawOrRemoveBorderAroundElements(
      highlightAXAWebcomponents,
      allChildrenOfWebcomponents
    );
  });

  const resetBrowserDefaultStyles = html`
    <style>
      html,
      body {
        padding: 0;
        margin: 0;
      }

      ul {
        display: block;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin: 0;
        padding: 0;
      }
    </style>
  `;

  const style = html`
    <style>
      .pages-axa-main-page {
        font-family: Source Sans Pro, Arial, sans-serif;
      }
    </style>
  `;

  return html`
    ${resetBrowserDefaultStyles} ${style}

    <div class="pages-axa-main-page">
      ${navbar} ${commercialHeroBanner} ${policyFeatures} ${footer}
      ${footerSmall}
    </div>
  `;
};
