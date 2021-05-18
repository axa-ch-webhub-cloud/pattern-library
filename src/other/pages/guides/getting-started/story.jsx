import React from 'react';
import ReactDOM from 'react-dom';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist';
import PLCallout from '../../utils/callout/index.react';
import PLContactFooter from '../../utils/contact-footer/index.react';
import styles from './index.scss';
import { AXAHeading, AXAText } from './plib-components';

export default {
  title: 'Guides/Getting Started',
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

export const GettingStarted = () => {
  const devGuideStyle = {
    border: '1px solid rgba(0, 0, 0, 0.1)',
  };

  const div = document.createElement('div');
  div.classList.add('accessory-story-wrapper');

  ReactDOM.render(
    <div>
      <style>{styles}</style>
      <div className="accessory-story-content">
        <AXAHeading rank="1" variant="secondary">
          Getting started
        </AXAHeading>
        <AXAText variant="size-2">The AXA Design System is a toolbox of resources to create beautiful user interfaces that are consistent with AXA brand guidelines, principles, and best practices. Instead of focusing on pixels, developers can focus on application logic, while designers can focus on user experience, interactions, and flows.</AXAText>
        <header className="getting-started__header">
          <p className="getting-started__subtitle">A perfect start for a</p>
          <AXAHeading rank="2" variant="secondary">
            Developer
          </AXAHeading>
        </header>
        <AXAText variant="size-2">The library provides front-end developers & engineers with a collection of reusable Web Components to build websites and user interfaces that are aligned with AXA brand guidelines. Adopting the AXA components library empowers you to use consistent markup, styling and behavior in both prototype and production work.</AXAText>
        <AXAHeading rank="3">Install and use components</AXAHeading>
        <p className="getting-started__dependency-wrapper">
          AXA's Design System is made up of multiple web components and tools, which you can import one by one. All you need to do is install the corresponding <em>npm</em> package under the &nbsp;
          <code className="getting-started__dependency">@axa-ch/</code>&nbsp; namespace. Here is an example featuring a button:
        </p>
        <ReactSyntaxHighlighter language="shell" style={String.prototype.trimRight ? style : undefined}>
          $ npm install @axa-ch/button
        </ReactSyntaxHighlighter>
        <AXAText>Importing the button-defining script and using a button is then as simple as this:</AXAText>
        <ReactSyntaxHighlighter language="html" style={String.prototype.trimRight ? style : undefined}>
          {`<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Your awesome title</title>
          </head>
          <body>
            /* Your button component */
            <axa-button>I am a button</axa-button>
            <script src="node_modules/@axa-ch/button/dist/index.js"></script>
          </body>
        </html>`}
        </ReactSyntaxHighlighter>
        <div className="getting-started__text getting-started__text--important">
          <span className="getting-started__text--bold">
            <span role="img" aria-label="important">
              ⚠️
            </span>
            &nbsp;Important:&nbsp;
          </span>
          If this component needs to run in Internet Explorer 11, you need to use our polyfill.
        </div>
        <div className="getting-started__text">
          <span className="getting-started__text--bold">Using React?</span> Not a big deal, we got you covered! You can easily create a React-ified button with our wrapper plus the &nbsp;<em>createElement</em>&nbsp; function provided by every React version:
        </div>
        <ReactSyntaxHighlighter language="javascript" style={String.prototype.trimRight ? style : undefined}>
          {`import { createElement } from 'react';
import createAXAButtonReact from '@axa-ch/button/lib/index.react';
const AXAButtonReact = createAXAButtonReact(createElement);
export default AXAButtonReact;`}
        </ReactSyntaxHighlighter>
        <ReactSyntaxHighlighter language="html" style={String.prototype.trimRight ? style : undefined}>
          {`<AXAButtonReact motionOff onClick={handler}>
  I am a Button
</AxaButtonReact>`}
        </ReactSyntaxHighlighter>
        <AXAHeading rank="3">Read more about the Pattern Library</AXAHeading>
        <PLCallout className="getting-started__callout-first" icon="github-mark.png" header="README" text="You have a question or just want to see what it's all about? The README is the best way to start." link="https://github.com/axa-ch/patterns-library/blob/develop/README.md" linkText="READ MORE" />
        <PLCallout icon="github-mark.png" header="Contribute" text="You want to contribute? Nice! Here you'll find out how." link="https://github.com/axa-ch/patterns-library/blob/develop/CONTRIBUTION.md" linkText="READ MORE" />
        <PLCallout icon="github-mark.png" header="Architecture" text="Read more about the big picture and how we got here. This includes framework choices and much more." link="https://github.com/axa-ch/patterns-library/blob/develop/ARCHITECTURE.md" linkText="READ MORE" />
        <PLCallout icon="github-mark.png" header="Code of Conduct" text="We as the Pattern Library Team commited ourselves to a set of rules, responsibilities and prudent practices." link="https://github.com/axa-ch/patterns-library/blob/develop/CODE_OF_CONDUCT.md" linkText="READ MORE" />
        <header className="getting-started__header">
          <p className="getting-started__subtitle">A perfect start for a</p>
          <AXAHeading rank="2" variant="secondary">
            Designer
          </AXAHeading>
        </header>
        <div className="getting-started__last-text">
          <AXAText variant="size-2">It is our aim to offer our customers safety and trust when using our services. To achieve this, we rely on uniform visual communication and use existing and tested interactions.</AXAText>
        </div>
        <PLCallout icon="figma.png" header="AXA Design System UI Kit" text="To see how to use AXA's Design System and be in sync with the Pattern Library, take a look at the AXA UI Kit!" link="https://www.figma.com/file/6zurYk3bJpzUg0H2THSxGF/AXA-UI-Kit?node-id=0%3A8208" linkText="READ MORE" />
        <AXAHeading rank="3">Our development guide</AXAHeading>
        <div className="getting-started__last-text">
          <AXAText variant="size-2">In order for us to screen your application for go-live, the following requirements have to be considered during product development:</AXAText>
        </div>
        <iframe title="figma dev guide" style={devGuideStyle} width="100%" height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGBd1NZWB94Ek4WVUDROCE6%2FDX-Product-Development-Guide%3Fnode-id%3D196%253A502%26viewport%3D17094%252C-15509%252C0.3761351704597473%26scaling%3Dmin-zoom&chrome=DOCUMENTATION" allowFullScreen />
        <PLContactFooter />
      </div>
    </div>,
    div
  );

  return div;
};
