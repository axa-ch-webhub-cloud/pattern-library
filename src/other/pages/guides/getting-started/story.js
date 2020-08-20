import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../../../components/10-atoms/text';
import '../../../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../../utils/contact-footer';
import { callout } from '../../utils/callout';

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

  const callouts = [
    {
      icon: 'github-mark.png',
      header: 'ReadMe',
      text:
        'You have a question or want to get to know us? The readme is the best way to start.',
      link: 'https://github.com/axa-ch/patterns-library/blob/develop/README.md',
      linkText: 'Read me',
    },
    {
      icon: 'github-mark.png',
      header: 'Contribute',
      text: `You want to contribute to us? Nice! Here you'll find the "how-to".`,
      link:
        'https://github.com/axa-ch/patterns-library/blob/develop/CONTRIBUTION.md',
      linkText: 'take a look',
    },
    {
      icon: 'github-mark.png',
      header: 'Architecture',
      text:
        'Read more about the big picture of V2 and how we got here. This includes framework choices and much more.',
      link:
        'https://github.com/axa-ch/patterns-library/blob/develop/ARCHITECTURE.md',
      linkText: 'take a look',
    },
    {
      icon: 'github-mark.png',
      header: 'Code of Conduct',
      text:
        'We as the Pattern Library Team commited ourselves to a  set of rules, responsibilities and practices.',
      link:
        'https://github.com/axa-ch/patterns-library/blob/develop/CODE_OF_CONDUCT.md',
      linkText: 'take a look',
    },
    {
      icon: 'figma.png',
      header: 'AXA Design System UI Kit',
      text:
        'To see how to use our AXA Design System and be on sync with the Pattern Library take a look ate the AXA UI Kit',
      link:
        'https://www.figma.com/proto/6zurYk3bJpzUg0H2THSxGF/AXA-UI-Kit?chrome=DOCUMENTATION&embed_host=share&kind=&node-id=0%3A8209&scaling=min-zoom',
      linkText: 'take a look',
    },
  ];
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
      <header class="getting-started__header">
        <p class="getting-started__subtitle">A perfect start for a</p>
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
      <axa-text
        >AXA Design System is made up of multiple web components and tools which
        you can import one by one. All you need to do is install the @axa-ch/
        corresponding package. Here is an example with a button:</axa-text
      >
      ${callout(
        callouts[0].icon,
        callouts[0].header,
        callouts[0].text,
        callouts[0].link,
        callouts[0].linkText
      )}
      ${callout(
        callouts[1].icon,
        callouts[1].header,
        callouts[1].text,
        callouts[1].link,
        callouts[1].linkText
      )}
      ${callout(
        callouts[2].icon,
        callouts[2].header,
        callouts[2].text,
        callouts[2].link,
        callouts[2].linkText
      )}
      ${callout(
        callouts[3].icon,
        callouts[3].header,
        callouts[3].text,
        callouts[3].link,
        callouts[3].linkText
      )}
      <header class="getting-started__header">
        <p class="getting-started__subtitle">A perfect start for a</p>
        <axa-heading rank="2" variant="secondary">Designer</axa-heading>
      </header>
      <axa-text variant="size-1" style="margin-bottom:3rem;"
        >It is our aim to offer our customers security and trust when using our
        services. To achieve this, we rely on uniform visual communication and
        use existing and tested interactions.</axa-text
      >
      <div class="getting-started__last-text">
        <axa-text variant="size-1"
          >In order for us to release your application for go-live, the
          following requirements have to be considered during product
          development:</axa-text
        >
      </div>
      ${callout(
        callouts[4].icon,
        callouts[4].header,
        callouts[4].text,
        callouts[4].link,
        callouts[4].linkText
      )}
    </div>
    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
});
