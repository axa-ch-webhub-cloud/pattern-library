import React, { Fragment } from 'react';
import { useChannel, useAddonState } from '@storybook/api';

import SyntaxHighlighter from './SyntaxHighlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist';
import { format as prettierFormat } from 'prettier/standalone';
import prettierHtml from 'prettier/parser-html';

import { EVENT_CODE_RECEIVED } from './shared';

const HTMLPanel = () => {
  const [state, setState] = useAddonState(EVENT_CODE_RECEIVED, '');
  useChannel({
    [EVENT_CODE_RECEIVED]: ({ html, options }) => {
      html = html.replace(/<!---->/g, '');

      const { prettier = {} } = options;
      const prettierConfig = {
        ...prettier,
        // Ensure we always pick the html parser
        parser: 'html',
        plugins: [prettierHtml],
        htmlWhitespaceSensitivity: 'ignore',
        // from .prettierrc
        "semi": true,
        "singleQuote": true,
        "endOfLine": "lf",
        "printWidth": 80,
        "trailingComma": "es5"
      };
      const code = prettierFormat(html, prettierConfig);
      setState(code);
    },
  });
  return (
    <Fragment>
      <SyntaxHighlighter
        language={'html'}
        copyable={true}
        padded={true}
        style={String.prototype.trimRight ? style : undefined }
      >
        {state}
      </SyntaxHighlighter>
    </Fragment>
  );
};

export default HTMLPanel;
