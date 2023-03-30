import React from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist';
import PLCallout from '../../utils/callout/index.react';
import PLContactFooter from '../../utils/contact-footer/index.react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { AXAHeading, AXAText } from './plib-components';
import styles from './index.scss';

export default {
  title: 'Guides/Getting Started',
  decorators: [],
  parameters: {
    readme: { disable: true },
    usage: { disable: true },
    changelog: { disable: true },
    options: { showPanel: false },
    layout: 'fullscreen',
  },
};

export const GettingStarted = () =>
  createReactContainer(
    <div className="accessory-story-wrapper">
      <style>{styles}</style>
      <div className="accessory-story-content">
        <AXAHeading size="1" secondary>
          Getting started
        </AXAHeading>
        <AXAText size="2">
          The AXA Design System is a toolbox of resources to create beautiful
          user interfaces that are consistent with AXA brand guidelines,
          principles, and best practices. Instead of focusing on pixels,
          developers can focus on application logic, while designers can focus
          on user experience, interactions, and flows.
        </AXAText>
        <header className="getting-started__header">
          <p className="getting-started__subtitle">A perfect start for a</p>
          <AXAHeading size="2" secondary>
            Developer
          </AXAHeading>
        </header>
        <AXAText size="2">
          The library provides front-end developers & engineers with a
          collection of reusable Web Components to build websites and user
          interfaces that are aligned with AXA brand guidelines. Adopting the
          AXA components library empowers you to use consistent markup, styling
          and behavior in both prototype and production work.
        </AXAText>
        <AXAHeading size="3">Install and use components</AXAHeading>
        <p className="getting-started__dependency-wrapper">
          To get access to the Github Packages Registry, you need to add the
          following line to your .npmrc file.
        </p>
        <ReactSyntaxHighlighter
          language="shell"
          style={String.prototype.trimRight ? style : undefined}
        >
          @axa-ch-webhub-cloud:registry=https://npm.pkg.github.com/
        </ReactSyntaxHighlighter>
        <p className="getting-started__dependency-wrapper">
          AXA&rsquo;s Design System is made up of multiple web components and
          tools, which you can import one by one. All you need to do is install
          the corresponding <em>npm</em> package under the &nbsp;
          <code className="getting-started__dependency">
            @axa-ch-webhub-cloud/
          </code>
          &nbsp; namespace. Here is an example featuring a button:
        </p>
        <ReactSyntaxHighlighter
          language="shell"
          style={String.prototype.trimRight ? style : undefined}
        >
          $ npm install @axa-ch-webhub-cloud/button
        </ReactSyntaxHighlighter>
        <AXAText>
          Importing the button-defining script and using a button is then as
          simple as this:
        </AXAText>
        <ReactSyntaxHighlighter
          language="html"
          style={String.prototype.trimRight ? style : undefined}
        >
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
            <script type="module" src="main.js"></script>
          </body>
        </html>`}
        </ReactSyntaxHighlighter>
        <div className="getting-started__text">
          <span className="getting-started__text--bold">Using React?</span> Not
          a big deal, we got you covered! You can easily create a React-ified
          button with our wrapper plus the &nbsp;<em>createElement</em>&nbsp;
          function provided by every React version:
        </div>
        <ReactSyntaxHighlighter
          language="javascript"
          style={String.prototype.trimRight ? style : undefined}
        >
          {`import { createElement } from 'react';
import createAXAButtonReact from '@axa-ch-webhub-cloud/button/lib/index.react';
const AXAButtonReact = createAXAButtonReact(createElement);
export default AXAButtonReact;`}
        </ReactSyntaxHighlighter>
        <ReactSyntaxHighlighter
          language="html"
          style={String.prototype.trimRight ? style : undefined}
        >
          {`<AXAButtonReact motionOff onClick={() => alert("you clicked me")}>
  I am a Button
</AXAButtonReact>`}
        </ReactSyntaxHighlighter>
        <AXAHeading size="3">Read more about the Pattern Library</AXAHeading>
        <PLCallout
          className="getting-started__callout-first"
          icon="icons/github-mark.png"
          header="README"
          text="You have a question or just want to see what it's all about? The README is the best way to start."
          link="https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/README.md"
          linkText="READ MORE"
        />
        <PLCallout
          icon="icons/github-mark.png"
          header="Contribute"
          text="You want to contribute? Nice! Here you'll find out how."
          link="https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/CONTRIBUTION.md"
          linkText="READ MORE"
        />
        <PLCallout
          icon="icons/github-mark.png"
          header="Architecture"
          text="Read more about the big picture and how we got here. This includes framework choices and much more."
          link="https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/ARCHITECTURE.md"
          linkText="READ MORE"
        />
        <PLCallout
          icon="icons/github-mark.png"
          header="Code of Conduct"
          text="We as the Pattern Library Team commited ourselves to a set of rules, responsibilities and prudent practices."
          link="https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/CODE_OF_CONDUCT.md"
          linkText="READ MORE"
        />
        <header className="getting-started__header">
          <p className="getting-started__subtitle">A perfect start for a</p>
          <AXAHeading size="2" secondary>
            Designer
          </AXAHeading>
        </header>
        <div className="getting-started__last-text">
          <AXAText size="2">
            It is our aim to offer our customers safety and trust when using our
            services. To achieve this, we rely on uniform visual communication
            and use existing and tested interactions.
          </AXAText>
        </div>
        <PLCallout
          icon="icons/figma.png"
          header="AXA Design System UI Kit"
          text="To see how to use AXA's Design System and be in sync with the Pattern Library, take a look at the AXA UI Kit!"
          link="https://www.figma.com/file/6zurYk3bJpzUg0H2THSxGF/AXA-UI-Kit?node-id=0%3A8208"
          linkText="READ MORE"
        />
        <AXAHeading size="3">Our development guide</AXAHeading>
        <div className="getting-started__last-text">
          <AXAText size="2">
            In order for us to screen your application for go-live, the
            following requirements have to be considered during product
            development:
          </AXAText>
        </div>
        <iframe
          title="figma dev guide"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="100%"
          height="500"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGBd1NZWB94Ek4WVUDROCE6%2FDX-Product-Development-Guide%3Fnode-id%3D196%253A502%26viewport%3D17094%252C-15509%252C0.3761351704597473%26scaling%3Dmin-zoom&chrome=DOCUMENTATION"
          allowFullScreen
        />
        <PLContactFooter />
      </div>
    </div>
  );
