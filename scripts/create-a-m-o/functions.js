const chalk = require('chalk');
const outdent = require('outdent');
const fs = require('fs');
const templateJson = require('./templates/template-package.json');

const getAMOType = (type) => {
  console.log(chalk.cyan(outdent`

    Ok good, you choose to create a new component of type ${chalk.bold(type)}.

    Now, tell me how your new component should be called

  `));
};

const capitalizeFirstLetter = string => string
  .charAt(0)
  .toUpperCase() + string
  .slice(1);

const prepareName = done => (userInput) => {
  const camelCase = string => string
    .split(/[-_ ]+/)
    .map(capitalizeFirstLetter)
    .join('');
  const fileName = userInput.replace(/ /g, '-').toLowerCase();
  const className = `AXA${camelCase(fileName)}`;

  console.log(chalk.cyan(outdent`
    Ok good, we will setup all the files for your new component

    Class name: ${chalk.bold(className)}
    Folder name: ${chalk.bold(fileName)}
  `));

  done({
    className,
    fileName
  });
};

const createFiles = (store, a, m, o, done) => () => {
  const { type, fileName, className } = store;
  const folderMap = {
    [a]: '10-atoms',
    [m]: '20-molecules',
    [o]: '30-organisms',
  };

  const titleMap = {
    [a]: 'Atoms',
    [m]: 'Molecules',
    [o]: 'Organisms',
  };

  const BASE_FOLDER = `./src/components/${folderMap[type]}/${fileName}`;
  const upperCaseWithSpace = string => string
    .split(/[-_ ]+/)
    .map(capitalizeFirstLetter)
    .join(' ');
  const compTitle = upperCaseWithSpace(fileName.replace(/-/g, ' '));

  if (!fs.existsSync(BASE_FOLDER)) {
    fs.mkdirSync(`${BASE_FOLDER}`);
  }

  templateJson.name = `@axa-ch/${fileName}`;
  templateJson.version = '0.0.0-beta.0';
  templateJson.homepage = `https://github.com/axa-ch/patterns-library/tree/develop/src/components/${folderMap[type]}/${fileName}#readme`;

  fs.writeFileSync(
    `${BASE_FOLDER}/package.json`,
    JSON.stringify(templateJson, null, 2),
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/README.md`,
    outdent`
    # ${compTitle}

    TODO Description

    ## Usage

    **Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

    \`\`\`bash
    npm install @axa-ch/${fileName}
    \`\`\`

    \`\`\`js
    import '@axa-ch/${fileName}';
    ...
    <axa-${fileName}></axa-${fileName}>
    \`\`\`

    ### React

    Create a React-ified ${fileName} with the createElement function from your React version and then use it like this:

    \`\`\`js
    import { createElement } from 'react';
    import create${className}React from '@axa-ch/${fileName}/lib/index.react';

    const ${className}React = create${className}React(createElement);

    export default ${className}React;
    \`\`\`

    \`\`\`js
    <${className}React onClick={handler}>
    </${className}React>
    \`\`\`

    ### Pure HTML pages

    Import the ${fileName}-defining script and use a ${fileName} like this:

    \`\`\`html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Your awesome title</title>
      </head>
      <body>
        <axa-${fileName}></axa-${fileName}>
        <script src="node_modules/@axa-ch/${fileName}/dist/index.js"></script>
      </body>
    </html>
    \`\`\`

    ## Properties

    ### Variant

    | Attribute             | Details                 |
    | --------------------- | ----------------------- |
    | \`variant="foo"\`       | Desc of Variant         |

    ### Bar

    The attribute \`bar\` specifies...

    ### onClick

    The function-valued attribute \`onClick\` can be used as a callback prop for React and other frameworks.
    
    ### Migration Notes
    
    You don't have to pay attention to anything for upgrading to newer version.

    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.scss`,
    outdent`
      .${type}-${fileName} {
        display: block;
      }
    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.react.js`,
    outdent`
    import withReact from '../../../utils/with-react';
    import ${className} from './index';

    export default createElement => ({
      /* props here, same as in the constructor of index.js */
      className,
      children,
    }) =>
      withReact(createElement)(
        ${className}.tagName,
        {
          /* props here, same as in the constructor of index.js */
          className,
        },
        children
      );

    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/story.js`,
    outdent`
    /* global document */
    import { storiesOf } from '@storybook/html';
    // if your need more boolean, select, radios
    import { text, withKnobs } from '@storybook/addon-knobs';
    import { html, render } from 'lit-html';
    import './index';
    import Readme from './README.md';

    const story${className} = storiesOf('${titleMap[type]}/${compTitle}', module);
    story${className}.addDecorator(withKnobs);
    story${className}.addParameters({
      readme: {
        sidebar: Readme,
      },
    });
    
    story${className}.add('${compTitle}', () => {
      const children = text('Text', 'Some Children');
      
      const wrapper = document.createElement('div');
      const template = html\`
        <axa-${fileName}>\${children}<axa-${fileName}>
      \`;
      
      render(template, wrapper);
      return wrapper;
    });
    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.react.d.ts`,
    outdent`
    import React from 'react';

    type Variant = 'foo' | 'bar';

    interface ${className}Props {
      className?: string;
      variant?: Variant;
      onClick?: () => void;
    }

    declare function create${className}(
      createElement: typeof React.createElement
    ): React.ComponentType<${className}Props>;

    export = create${className};
    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/ui.test.js`,
    outdent`
    import { Selector } from 'testcafe';

    const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

    fixture('${compTitle} - basic functionality').page(\`\${host}/iframe.html?id=${titleMap[type].toLowerCase()}-${fileName}--${fileName}\`);

    const TAG = 'axa-${fileName}';
    const CLASS = '.${type}-${fileName}';

    test('should render ${fileName}', async t => {
      const $axaElem = await Selector(TAG);
      await t.expect($axaElem.exists).ok();
      const $axaElemShadow = await Selector(() => document.querySelector('axa-${fileName}').shadowRoot);
      const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
      await t.expect($axaElemShadowEl.exists).ok();
    });
    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.js`,
    outdent`
    import { LitElement, html, css, unsafeCSS } from 'lit-element';

    /* eslint-disable import/no-extraneous-dependencies */
    import defineOnce from '../../../utils/define-once';
    import styles from './index.scss';

    class ${className} extends LitElement {
      static get tagName() {
        return 'axa-${fileName}';
      }

      static get styles() {
        return css\`
          \${unsafeCSS(styles)}
        \`;
      }

      static get properties() {
        // Define properties and types
        return {
          onClick: { type: Function },
        };
      }

      constructor() {
        super();
        this.onClick = () => {};
      }

      firstUpdated() {
        // Add DOM changes here
        // This will be rendered when the component is connected to the DOM
      }

      render() {
        return html\`
          <article class="${type}-${fileName}">
            <slot></slot>
          </article>
        \`;
      }

      disconnectedCallback() {
        super.disconnectedCallback();

        // Cleanup and reset (i.e event listeners)
      }
    }

    defineOnce(${className}.tagName, ${className});

    export default ${className};
    `,
    'utf8',
  );

  done();
};


module.exports = {
  getAMOType,
  prepareName,
  createFiles,
};
