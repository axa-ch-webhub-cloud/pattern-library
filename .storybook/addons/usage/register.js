import { addons, types } from '@storybook/addons';
import { useParameter, useStorybookState } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import 'github-markdown-css/github-markdown-light.css';
import React from 'react';

const ADDON_ID = 'axa-ch/usage';
const PANEL_ID = `${ADDON_ID}/panel`;

const formatComponentNameReact = componentName =>
  componentName && componentName.replace(/\s/g, '');
const formatComponentNameHtml = componentName => {
  return (
    componentName &&
    formatComponentNameReact(componentName)
      .replace(/[A-Z]/g, match => `-${match.toLowerCase()}`) // uppercase to lowercase and add "-"
      .replace(/^-/, '')
  ); // remove the "-" from the beginning of string
};

const MyPanel = () => {
  const param = useParameter('usage', {});
  const { storyId, storiesHash } = useStorybookState();
  const componentName = storiesHash[storyId]?.name; // "name" is the const at story.js, f.a. "export const CommercialHeroBanner"

  const PURE_HTML_TAG = formatComponentNameHtml(componentName);
  const REACT_TAG = formatComponentNameReact(componentName);
  const { innerHTML, propsPureHTML, propsReact, usageReact } = param;

  return (
    <div className="markdown-body" style={{ margin: '15px' }}>
      <h2 id="usage">{componentName}</h2>
      <p>
        <strong>Important:</strong> If this component needs to run in Internet
        Explorer 11,{' '}
        <a href="https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/05-utils/polyfill">
          you need to use our polyfill
        </a>
        .
      </p>
      <pre>
        <code className="language-bash">
          npm install @axa-ch/{PURE_HTML_TAG}
        </code>
      </pre>
      <pre>
        <code className="language-js">
          import '@axa-ch/{PURE_HTML_TAG}';
          <br />
          ...
          <br />
          &lt;axa-{PURE_HTML_TAG}
          {propsPureHTML && ` ${propsPureHTML}`}&gt;{innerHTML}&lt;/axa-
          {PURE_HTML_TAG}&gt;
        </code>
      </pre>
      <h3 id="react">React</h3>
      {usageReact ? (
        usageReact
      ) : (
        <>
          <p>
            Create a React-ified {PURE_HTML_TAG} with the createElement function
            from your React version and then use it like this:
          </p>
          <pre>
            <code className="language-js">
              import {'{ createElement }'} from 'react';
              <br />
              import createAXA{REACT_TAG}React from '@axa-ch/
              {PURE_HTML_TAG}
              /lib/index.react';
              <br />
              <br />
              const AXA{REACT_TAG}React = createAXA
              {REACT_TAG}React(createElement);
              <br />
              <br />
              export default AXA{REACT_TAG}React;
            </code>
          </pre>
          <pre>
            <code className="language-js">
              &lt;AXA{REACT_TAG}React{propsReact && ` ${propsReact}`}&gt;
              {innerHTML && (
                <>
                  <br />
                  {`  ${innerHTML}`}
                  <br />
                </>
              )}
              &lt;/AXA{REACT_TAG}React&gt;
            </code>
          </pre>
        </>
      )}
      <h3>Pure HTML pages</h3>
      <p>Import the {PURE_HTML_TAG}-defining script and use it like this:</p>
      <pre>
        <code className="language-html">
          &lt;!DOCTYPE html&gt;
          <br />
          &lt;html lang="en"&gt;
          <br />
          {'  '}&lt;head&gt;
          <br />
          {'    '}&lt;meta charset="UTF-8" /&gt;
          <br />
          {'    '}&lt;meta name="viewport" content="width=device-width,
          initial-scale=1.0" /&gt;
          <br />
          {'    '}&lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
          <br />
          {'    '}&lt;title&gt;Your awesome title&lt;/title&gt;
          <br />
          {'  '}&lt;/head&gt;
          <br />
          {'  '}&lt;body&gt;
          <br />
          {'    '}&lt;axa-{PURE_HTML_TAG}
          {propsPureHTML && ` ${propsPureHTML}`}&gt;{innerHTML}
          &lt;/axa-
          {PURE_HTML_TAG}&gt;
          <br />
          {'    '}&lt;script src="node_modules/@axa-ch/
          {PURE_HTML_TAG}
          /dist/index.js"&gt;&lt;/script&gt;
          <br />
          {'  '}&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </code>
      </pre>
      <h3>Component versioning</h3>
      <p>
        Different versions of our web components can coexist on the same web
        page! Read more about component versioning&nbsp;
        <a href="https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/COMPONENT_VERSIONING.md">
          here
        </a>
        .
      </p>
      <h4>Best practice</h4>
      <p>
        Here is the recommended{' '}
        <strong>
          new way of including <i>user-versioned</i> components
        </strong>
        .
      </p>
      <pre>
        <code className="language-js">
          import {'{ createElement }'} from 'react';
          <br />
          import createAXA{REACT_TAG}React from '@axa-ch/
          {PURE_HTML_TAG}
          /lib/index.react';
          <br />
          <br />
          const podNameAsVersionSuffix = 'YOUR UNIQUE SPA SHORT-NAME HERE'; //
          e.g. 'rsv'
          <br />
          <br />
          export const AXA{REACT_TAG}React = createAXA
          {REACT_TAG}React(createElement, podNameAsVersionSuffix);
        </code>
      </pre>
      <p>
        Apart from the best practice, <strong>other versioning schemes</strong>{' '}
        are possible.
      </p>
      <h4>Numeric versioning</h4>
      <pre>
        <code className="language-js">
          import {'{ createElement }'} from 'react';
          <br />
          import createAXA{REACT_TAG}React from '@axa-ch/
          {PURE_HTML_TAG}
          /lib/index.react';
          <br />
          <br />
          const numericalVersion = '4.1.2'; // must match with SPA dependency
          @axa-ch/button's version
          <br />
          <br />
          export const AXA{REACT_TAG}React = createAXA
          {REACT_TAG}React(createElement, numericalVersion);
          <br />
          // In the DOM, the button would appear as &lt;axa-{PURE_HTML_TAG}
          -4-1-2&gt;
        </code>
      </pre>
      <h4>Automatic npm versioning</h4>
      <pre>
        <code className="language-js">
          import {'{ createElement }'} from 'react';
          <br />
          import createAXA{REACT_TAG}React from '@axa-ch/
          {PURE_HTML_TAG}
          /lib/index.react';
          <br />
          <br />
          const automaticVersion = tagName =&gt;
          window.customElements.get(tagName).versions[tagName];
          <br />
          <br />
          export const AXA{REACT_TAG}React = createAXA
          {REACT_TAG}React(createElement, automaticVersion('{PURE_HTML_TAG}'));
        </code>
      </pre>
    </div>
  );
};

addons.register(ADDON_ID, () => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <MyPanel />
    </AddonPanel>
  );

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Usage',
    paramKey: 'usage',
    render,
  });
});
