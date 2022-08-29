import { html } from 'lit';
import '../../../../components/10-atoms/heading';
import '../../../../components/10-atoms/text';
import '../../utils/callout';
import '../../utils/contact-footer';
import styles from './index.scss';

export default {
  title: 'Guides/Modular Design',
  decorators: [],
  parameters: {
    readme: { disable: true },
    usage: { disable: true },
    changelog: { disable: true },
    a11y: { disable: true },
    options: { showPanel: false },
    layout: 'fullscreen',
  },
};

export const ModularDesign = () => html`
  <style>
    ${styles}
  </style>
  <div class="accessory-story-wrapper accessory-story-content">
    <axa-heading rank="1" variant="secondary">Modular Design</axa-heading>
    <axa-text variant="size-2"
      >AXA's Design System is expressed through Web Components that loosely
      follow the Atomic Design approach.</axa-text
    >

    <axa-heading rank="2" variant="secondary"
      >What is atomic design?</axa-heading
    >
    <axa-text variant="size-2">
      Atomic Design is a systematic approach that can accelerate the process of
      creating modular designs. It was first proposed by Brad Frost in 2013.
    </axa-text>
    <blockquote class="structure-approach__quote">
      <p>
        “As the craft of web design continues to evolve, we’re recognizing the
        need to develop thoughtful design systems, rather than creating simple
        collections of web pages. Atomic design is a methodology for creating
        design systems.”
      </p>
      <cite class="structure-approach__cite">— Brad Frost</cite>
    </blockquote>
    <div class="structure-approach__last-text">
      <axa-text variant="size-2">
        In plain English, having a design systems means that we will no longer
        design or develop entire web pages in one go. Rather, we start with some
        smallest components, for example buttons or input fields. Using
        combinations of small components, we can then compose larger units like
        tables or forms. Web pages or applications are then again composed from
        these lower-level components. That's Atomic Design in a nutshell.
      </axa-text>
    </div>
    <pl-callout
      icon="molecules.svg"
      header="Atomic Design by Brad Frost"
      text="A methodology for creating design systems. Go deeper and discover Frost's approach!"
      link="https://bradfrost.com/blog/post/atomic-web-design/"
      linkText="Learn more"
    ></pl-callout>
    <axa-heading rank="2" variant="secondary"
      >How to categorize an element?</axa-heading
    >
    <axa-text variant="size-2">
      So, Atomic Design helps you to decompose your UI into components which are
      standardized and organized in a hierarchical fashion. An important next
      question then is: “What category does a given component belong to?” Here's
      a little overview to help with the answer:
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
            transversal elements such as font-size, line-height, colors, spacing
            units, elevation, etc. These are design dimensions that are not
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
            Elements that we categorize as “Atoms” will be basic elements that
            are generally used more than once on a web page. They are often
            embedded in larger components, and have various states and
            variations.
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
            Elements that we categorize as “Molecules” will generally be
            elements that contain smaller and simpler Atom elements. Generally
            they are made for specific cases and can be used more than once.
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
            Elements that we categorize as “Organisms” will generally be complex
            elements that are composed of smaller elements. You can think of
            Organisms as entire “parts” of a web page. A web page will often be
            the result of a collection of Organisms.
          </p>
        </div>
      </div>
    </div>
    <div class="structure-approach__last-text">
      <axa-text variant="size-2">
        Each design system can have its own categorization depending on context
        and purpose. The objective of AXA's Design System is to be of use to all
        AXA entities, notwithstanding their different needs and constraints. The
        way we have thought about the categorization of the elements is to allow
        as much combinatoric variation as possible.
      </axa-text>
    </div>
    <pl-callout
      icon="organisms.svg"
      header="Create and categorize new elements"
      text="If you need to create new elements and ask yourself how to categorize them, try out this tool!"
      link="https://dan503.github.io/Atomic-Categorizer/"
      linkText="Categorize"
    ></pl-callout>
  </div>
  <pl-contact-footer></pl-contact-footer>
`;
