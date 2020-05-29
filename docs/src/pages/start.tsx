import React from 'react';

import SyntaxHighlighter from '../components/SyntaxHighlighter';
import Layout from '../components/Layout';
import PageIntroduction from '../components/PageIntroduction';
import { NativeLink } from '../components/NativeLinks';
import SEO from '../components/SEO';
import Explore from '../components/Explore';

export default function startPage() {
  return (
    <Layout withCallToAction>
      <SEO title="Introduction" />

      <section className="MainLayout-contentRight">
        <div className="Container-nextToSidebar" style={{ marginBottom: 160 }}>
          <div className="Content">
            <PageIntroduction
              title="Getting started"
              description="The AXA Design System is a toolbox of resources to create
              beautiful user interfaces, consistent with the AXA Brand
              guidelines, principles, and best practices. Instead of
              focusing on pixels, developers can focus on application
              logic, while designers can focus on the user experience,
              interactions, and flows."
            />
            <h2>The AXA Way of Doing Things</h2>
            <p>
              When we write, talk and design, we need to think about embodying
              our principles.
            </p>
            <p>
              Building knowledge and trust-based relationships that are{' '}
              <strong>empathetic and engaging</strong>
            </p>
            <p>
              Making things <strong>clear and easy</strong>, inspiring people to
              take action
            </p>
            <p>
              <strong>Being modern</strong> in creating an ambitious and
              positive future for customers, the industry and the AXA business
            </p>
          </div>
        </div>
      </section>

      <section className="MainLayout-contentRight bg-neutral-800">
        <div className="Container-nextToSidebar">
          <div className="Content">
            <Explore />
          </div>
        </div>
      </section>

      <section className="MainLayout-contentRight">
        <div className="Container-nextToSidebar">
          <div className="Content">
            <p className="kicker">A perfect start for</p>
            <h2 className="h2 mt-0">Developer</h2>
            <p>
              The library provides front-end developers & engineers a collection
              of reusable Web components to build websites and user interfaces,
              aligned with the AXA Brand guidelines. Adopting the AXA components
              library enables you to use consistent markup, styles, and behavior
              in prototype and production work.
            </p>
            <h2>Install and use components</h2>
            <p>
              AXA Design System is made up of multiple web components and tools
              which you can import one by one. All you need to do is install the{' '}
              <code>@axa-ch/</code> corresponding package. Here is an example
              with a button:
            </p>
          </div>
          <SyntaxHighlighter>
            {`$ npm install @axa-ch/button`.trim()}
          </SyntaxHighlighter>
          <div className="Content">
            <p>
              A working version, assuming you are using something like{' '}
              <NativeLink href="https://github.com/facebookincubator/create-react-app">
                Create React App
              </NativeLink>
              , might look like this:
            </p>
          </div>

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

          <div className="Content">
            <p>
              <strong>⚠️ Important:</strong> If this component needs to run in
              Internet Explorer 11,{' '}
              <NativeLink href="https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill">
                you need to use our polyfill
              </NativeLink>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
