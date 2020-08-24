import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import { AXAText, AXAHeading } from './plib-components';
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
    callout(
      'github-mark.png',
      'ReadMe',
      'You have a question or want to get to know us? The readme is the best way to start.',
      'https://github.com/axa-ch/patterns-library/blob/develop/README.md',
      'Read me'
    ),
    callout(
      'github-mark.png',
      'Contribute',
      `You want to contribute to us? Nice! Here you'll find the "how-to".`,
      'https://github.com/axa-ch/patterns-library/blob/develop/CONTRIBUTION.md',
      'Take a look'
    ),
    callout(
      'github-mark.png',
      'Architecture',
      'Read more about the big picture of V2 and how we got here. This includes framework choices and much more.',
      'https://github.com/axa-ch/patterns-library/blob/develop/ARCHITECTURE.md',
      'take a look'
    ),
    callout(
      'github-mark.png',
      'Code of Conduct',
      'We as the Pattern Library Team commited ourselves to a  set of rules, responsibilities and practices.',
      'https://github.com/axa-ch/patterns-library/blob/develop/CODE_OF_CONDUCT.md',
      'take a look'
    ),
    callout(
      'figma.png',
      'AXA Design System UI Kit',
      'To see how to use our AXA Design System and be on sync with the Pattern Library take a look ate the AXA UI Kit',
      'https://www.figma.com/proto/6zurYk3bJpzUg0H2THSxGF/AXA-UI-Kit?chrome=DOCUMENTATION&embed_host=share&kind=&node-id=0%3A8209&scaling=min-zoom',
      'take a look'
    ),
  ];

  const div = document.createElement('div');

  ReactDOM.render(
    <div>
      <style>{styles}</style>

      <div className="accessory-story-content">
        <AXAHeading rank="1" variant="secondary">
          Getting started
        </AXAHeading>
        <AXAText variant="size-1">
          The AXA Design System is a toolbox of resources to create beautiful
          user interfaces, consistent with the AXA Brand guidelines, principles,
          and best practices. Instead of focusing on pixels, developers can
          focus on application logic, while designers can focus on the user
          experience, interactions, and flows.
        </AXAText>
        <header className="getting-started__header">
          <p className="getting-started__subtitle">A perfect start for a</p>
          <AXAHeading rank="2" variant="secondary">
            Developer
          </AXAHeading>
        </header>
        <AXAText variant="size-1">
          The library provides front-end developers & engineers a collection of
          reusable Web components to build websites and user interfaces, aligned
          with the AXA Brand guidelines. Adopting the AXA components library
          enables you to use consistent markup, styles, and behavior in
          prototype and production work.
        </AXAText>
        <AXAHeading rank="3">Install and use components</AXAHeading>
        <AXAText>
          AXA Design System is made up of multiple web components and tools
          which you can import one by one. All you need to do is install the
          @axa-ch/ corresponding package. Here is an example with a button:
        </AXAText>
        <ReactSyntaxHighlighter language="html">
          {`<code class="language-css">$ npm install @axa-ch/button</code>`}
        </ReactSyntaxHighlighter>
        <AXAText>
          Import the button-defining script and use a button like this:
        </AXAText>
        <ReactSyntaxHighlighter language="html">
          {`<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Your awesome title</title>
          </head>
          <body>
            <axa-button>I am a button</axa-button>
            <script src="node_modules/@axa-ch/button/dist/index.js"></script>
          </body>
        </html>`}
        </ReactSyntaxHighlighter>
        <AXAText>
          <span role="img" aria-label="important">
            ⚠️
          </span>{' '}
          Important: If this component needs to run in Internet Explorer 11, you
          need to use our polyfill. Using React ? not a big deal, we covered
          this scenario. You need to create a React-ified button with the
          createElement function from your React.
        </AXAText>
        <ReactSyntaxHighlighter language="javascript">
          {`import {createElement} from 'react'; import createAXAButtonReact
            from '@axa-ch/button/lib/index.react'; const AXAButtonReact =
            createAXAButtonReact(createElement); export default AXAButtonReact;`}
        </ReactSyntaxHighlighter>
        <ReactSyntaxHighlighter language="html">
          {`<AXAButtonReact motionOff onClick={handler}>
              I am a Button
            </AxaButtonReact>`}
        </ReactSyntaxHighlighter>
        {/* 
        {callouts[0]}
        {callouts[1]}
        {callouts[2]}
        {callouts[3]} */}

        <header className="getting-started__header">
          <p className="getting-started__subtitle">A perfect start for a</p>
          <AXAHeading rank="2" variant="secondary">
            Designer
          </AXAHeading>
        </header>
        <AXAText variant="size-1">
          It is our aim to offer our customers security and trust when using our
          services. To achieve this, we rely on uniform visual communication and
          use existing and tested interactions.
        </AXAText>
        <div className="getting-started__last-text">
          <AXAText variant="size-1">
            In order for us to release your application for go-live, the
            following requirements have to be considered during product
            development:
          </AXAText>
        </div>

        {/* {callouts[4]} */}
      </div>

      {/* {contact} */}
    </div>,
    div
  );
  return div;
});
