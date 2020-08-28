import { html, render } from 'lit-html';
import '../../../../components/10-atoms/text';
import '../../../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../../utils/contact-footer';
import { callout } from '../../utils/callout';

export default {
  title: 'Guides/Structure Approach',
  decorators: [],
  parameters: {
    knobs: { disabled: true },
    changelog: { disabled: true },
    codepreview: { disabled: true },
    a11y: { disabled: true },
  },
};

export const StructureApproach = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  const calloutHeaderAtomic = 'Atomic Design by Brad Frost';
  const calloutTextAtomic = `A methodology for creating design systems. Go deeper and discover Brad Frost Approach`;
  const calloutLinkTextAtomic = 'Know more';
  const calloutLinkAtomic =
    'https://bradfrost.com/blog/post/atomic-web-design/';

  const calloutHeaderNewElements = 'Create and categorize new elements';
  const calloutTextNewElements = `If you need to create new elements and you ask yourself how to categorize them, try out this tool`;
  const calloutLinkTextNewElements = 'Categorize';
  const calloutLinkNewElements = 'https://dan503.github.io/Atomic-Categorizer/';

  const template = html`
    <style>
      ${styles}
    </style>
    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary">Structure approach</axa-heading>
      <axa-heading rank="2" variant="secondary"
        >What is atomic design?</axa-heading
      >
      <axa-text variant="size-2">
        Atomic Design by Brad Frost is the one of methodology that can
        accelerate the process of creating modular designs. He introduced the
        concept of atomic design about 5 years ago.
      </axa-text>
      <blockquote class="structure-approach__quote">
        <p>
          “As the craft of web design continues to evolve, We’re recognizing the
          need to develop thoughtful design systems, rather than creating simple
          collections of web pages. Atomic design is a methodology for creating
          design systems.”
        </p>
        <cite class="structure-approach__cite">— Brad Frost</cite>
      </blockquote>
      <div class="structure-approach__last-text">
        <axa-text variant="size-2">
          In my word, Build systems mean that not design or develop the
          front-end full pages. It’s like small element like as buttons. And all
          small components combine to a large unit like a label, box, table,
          forms. The final full pages are then just a combination of these
          units.it is the idea of the building system.
        </axa-text>
      </div>
      ${callout(
        'molecules.svg',
        calloutHeaderAtomic,
        calloutTextAtomic,
        calloutLinkAtomic,
        calloutLinkTextAtomic
      )}
      <axa-heading rank="2" variant="secondary"
        >How to categorize an element?</axa-heading
      >
      <axa-text variant="size-2">
        Atomic Design, is an approch that allows you to decompose your UI
        elements in order to standardelize and organize them. An important
        question that we need to ask ourselves is “to what category does a given
        component belong to?”.
      </axa-text>
      <div class="structure-approach__vertical-content">
        <div class="structure-approach__vertical-content-item">
          <img
            class="structure-approach__vertical-content-image"
            src="materials.svg"
            alt="Materials"
          />
          <div class="structure-approach__vertical-content-col">
            <p class="structure-approach__vertical-content-kicker">Materials</p>
            <p class="structure-approach__vertical-content-text">
              Elements that we categorize in the “Materials” category will be
              transversal element as font-size, line-height, colors, spacing
              units, elevation, etc. This are also elements that are not
              specific to a given component.
            </p>
          </div>
        </div>
        <div class="structure-approach__vertical-content-item">
          <img
            class="structure-approach__vertical-content-image"
            src="atoms.svg"
            alt="Atoms"
          />
          <div class="structure-approach__vertical-content-col">
            <p class="structure-approach__vertical-content-kicker">Atoms</p>
            <p class="structure-approach__vertical-content-text">
              Elements that we categorize in the “Atoms” category will be basic
              elements, generally used more than once on a web page. They are
              generally embedded in other elements (larger ones), and have
              various states and variations.
            </p>
          </div>
        </div>
        <div class="structure-approach__vertical-content-item">
          <img
            class="structure-approach__vertical-content-image"
            src="molecules.svg"
            alt="Molecules"
          />
          <div class="structure-approach__vertical-content-col">
            <p class="structure-approach__vertical-content-kicker">Molecules</p>
            <p class="structure-approach__vertical-content-text">
              Elements that we categorize in the “Molecules” category will
              generally be elements that contain smaller and simpler elements
              (atoms). Generally this elements are made for specific cases and
              can be used more than once.
            </p>
          </div>
        </div>
        <div class="structure-approach__vertical-content-item">
          <img
            class="structure-approach__vertical-content-image"
            src="organisms.svg"
            alt="Organisms"
          />
          <div class="structure-approach__vertical-content-col">
            <p class="structure-approach__vertical-content-kicker">Organisms</p>
            <p class="structure-approach__vertical-content-text">
              Elements that we categorize in the “Organisms” category will
              generally be complex elements that are composed of smaller
              elements. You can think of Organisms as a “part” of a web page. A
              web page will be the result of the somme of organisms.
            </p>
          </div>
        </div>
      </div>
      <div class="structure-approach__last-text">
        <axa-text variant="size-2">
          Each design system can have its own categorization depending on the
          context and purpose. The objectif of the Axa design system is to be of
          use to all Axa entities, how have differents needs and constraints.
          The way we’ve thought the categorization of the elements is to allow
          for as much possibilities as possible.
        </axa-text>
      </div>
      ${callout(
        'organisms.svg',
        calloutHeaderNewElements,
        calloutTextNewElements,
        calloutLinkNewElements,
        calloutLinkTextNewElements
      )}
    </div>

    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
};
