import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import 'github-markdown-css/github-markdown.css';
import React from 'react';

const ADDON_ID = 'axa-ch/usage';
const PANEL_ID = `${ADDON_ID}/panel`;

const getTagName = () => {
  let result;

  try {
    const iframe = document.querySelector('iframe');
    const root = iframe.contentWindow.document.querySelector('#root');
    const nodeList = root.querySelectorAll('*:not(div)');

    for (let index = 0; index < nodeList.length; index++) {
      const tagName = nodeList[index].tagName;

      if (tagName.substring(0, 4) === 'AXA-') {
        result = tagName;
        break;
      }
    }
  } finally {
    return result;
  }
};

const formatTagName = tagName => {
  if (tagName === undefined) {
    return {};
  }

  const pureHTML = tagName.substr(4).toLowerCase();
  const formatReactTag = tagName => {
    let result = tagName.substring(0, 1).toUpperCase();

    for (let index = 1; index < tagName.length; index++) {
      const char = tagName.charAt(index);

      if (char === '-') {
        index++;
        result = result + tagName.charAt(index).toUpperCase();
      } else {
        result = result + char;
      }
    }

    return result;
  };

  return {
    PURE_HTML_TAG: pureHTML,
    REACT_TAG: formatReactTag(pureHTML),
  };
};

const getFormattedTagNames = () => {
  let tagName = useParameter('usage', {}).tagName;

  if (tagName === undefined) {
    tagName = getTagName();
  }

  return formatTagName(tagName);
};

const beginsWithVowel = (tagName = '') => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = tagName.substr(0, 1);
  let beginsWithVowel = false;

  for (let index = 0; index < vowels.length; index++) {
    if (firstLetter === vowels[index]) {
      beginsWithVowel = true;
      break;
    }
  }

  return beginsWithVowel;
};

const MyPanel = () => {
  const { PURE_HTML_TAG, REACT_TAG } = getFormattedTagNames();
  const { innerHTML, propsPureHTML, propsReact, usageReact } = useParameter(
    'usage',
    {}
  );

  return (
    <div className="markdown-body" style={{ margin: '15px' }}>
      <h2 id="usage">Usage</h2>
      <p>
        <strong>Important:</strong> If this component needs to run in Internet
        Explorer 11,{' '}
        <a href="https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill">
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
              &lt;/Axa{REACT_TAG}React&gt;
            </code>
          </pre>
        </>
      )}
      <h3 id="pure-html-pages">Pure HTML pages</h3>
      <p>
        Import the {PURE_HTML_TAG}-defining script and use{' '}
        {beginsWithVowel(PURE_HTML_TAG) ? 'an' : 'a'} {PURE_HTML_TAG} like this:
      </p>
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
