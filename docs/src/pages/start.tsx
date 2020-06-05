import React from 'react';

import SyntaxHighlighter from '../components/SyntaxHighlighter';
import Layout from '../components/Layout';
import PageIntroduction from '../components/PageIntroduction';
import { NativeLink } from '../components/NativeLinks';
import SEO from '../components/SEO';
import Explore from '../components/Explore';
import VerticalItems from '../components/VerticalItems';
import Container from '../components/Container';

import personnalIcon from '../images/icons/personal.svg';
import proactiveIcon from '../images/icons/proactive.svg';
import progressiveIcon from '../images/icons/progressive.svg';
import sketchIcon from '../images/icons/sketch.png';
import Callout from '../components/Callout';

const doingItems = [
  {
    kicker: 'Personnal',
    text:
      'Building knowledge and trust-based relationships that are empathetic and engaging',
    imageUrl: personnalIcon,
  },
  {
    kicker: 'Proactive',
    text: 'Making things clear and easy, inspiring people  to take action',
    imageUrl: proactiveIcon,
  },
  {
    kicker: 'Progressive',
    text:
      'Being modern in creating an ambitious and positive future for customers, the industry and the AXA business',
    imageUrl: progressiveIcon,
  },
];

export default function startPage() {
  return (
    <Layout withCallToAction>
      <SEO title="Introduction" />

      <Container>
        <PageIntroduction
          title="Getting started"
          description="The AXA Design System is a toolbox of resources to create
              beautiful user interfaces, consistent with the AXA Brand
              guidelines, principles, and best practices. Instead of
              focusing on pixels, developers can focus on application
              logic, while designers can focus on the user experience,
              interactions, and flows."
        />
        <h2 className="h2">The AXA Way of Doing Things</h2>
        <p className="paragraph">
          When we write, talk and design, we need to think about embodying our
          principles.
        </p>

        <VerticalItems items={doingItems} />
      </Container>

      <Container background="bg-neutral-200">
        <Explore />
      </Container>

      <Container>
        <p className="kicker">A perfect start for</p>
        <h2 className="h2 mt-0">Developer</h2>
        <p>
          The library provides front-end developers & engineers a collection of
          reusable Web components to build websites and user interfaces, aligned
          with the AXA Brand guidelines. Adopting the AXA components library
          enables you to use consistent markup, styles, and behavior in
          prototype and production work.
        </p>
        <h2>Install and use components</h2>
        <p>
          AXA Design System is made up of multiple web components and tools
          which you can import one by one. All you need to do is install the{' '}
          <code>@axa-ch/</code> corresponding package. Here is an example with a
          button:
        </p>

        <SyntaxHighlighter>
          {`$ npm install @axa-ch/button`.trim()}
        </SyntaxHighlighter>

        <p>
          A working version, assuming you are using something like{' '}
          <NativeLink href="https://github.com/facebookincubator/create-react-app">
            Create React App
          </NativeLink>
          , might look like this:
        </p>

        <SyntaxHighlighter>
          {`
<!DOCTYPE html>
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
</html>
`}
        </SyntaxHighlighter>

        <p style={{ marginBottom: 96 }}>
          <strong>⚠️ Important:</strong> If this component needs to run in
          Internet Explorer 11,{' '}
          <NativeLink href="https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill">
            you need to use our polyfill
          </NativeLink>
          .
        </p>

        <p className="kicker">A perfect start for</p>
        <h2 className="h2 mt-0">Designer</h2>
        <p>
          Rapidly build beautiful and accessible experiences. The AXA Design
          System UI kit contains all resources you need to get started on your
          AXA digital projects, and save precious time and effort.{' '}
        </p>
        <p className="text-2xl font-bold">Direct on Slack</p>
        <Callout
          imageUrl={sketchIcon}
          title="AXA Design System UI Kit"
          description="To design with AXA Design System you need the most recent version of Sketch installed."
          linkToTitle="Download"
          linkToUrl={'/axa-design-system-v3.sketch'}
        />
      </Container>
    </Layout>
  );
}
