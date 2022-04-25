const chalk = require('chalk');
const outdent = require('outdent');
const fs = require('fs');

const { cwd } = process;
const templateJson = require('./templates/template-package.json');

const getAMOType = type => {
  // eslint-disable-next-line no-console
  console.log(
    chalk.cyan(outdent`

    Ok good, you choose to create a new component of type ${chalk.bold(type)}.

    Now, tell me how your new component should be called (minus the axa- prefix),
    and submit with Enter:

  `)
  );
};

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const prepareName = done => userInput => {
  const camelCase = string =>
    string
      .split(/[-_ ]+/)
      .map(capitalizeFirstLetter)
      .join('');
  const fileName = userInput.replace(/ /g, '-').toLowerCase();
  const className = `AXA${camelCase(fileName)}`;

  // eslint-disable-next-line no-console
  console.log(
    chalk.cyan(outdent`

    Ok good, now we will set up all the files for your new component.

    Class name: ${chalk.bold(className)}
    Folder name: ${chalk.bold(fileName)}

  `)
  );

  done({
    className,
    fileName,
  });
};

const createFiles = (store, a, m, o, done) => () => {
  const { type, fileName, className } = store;
  const folderMap = {
    [a]: '10-atoms',
    [m]: '20-molecules',
    [o]: '30-organisms',
  };

  const BASE_FOLDER = `./src/components/${folderMap[type]}/${fileName}`;
  const upperCaseWithSpace = string =>
    string
      .split(/[-_ ]+/)
      .map(capitalizeFirstLetter)
      .join(' ');
  const compTitle = upperCaseWithSpace(fileName.replace(/-/g, ' '));

  if (!fs.existsSync(BASE_FOLDER)) {
    fs.mkdirSync(`${BASE_FOLDER}`);
  }

  templateJson.name = `@axa-ch/${fileName}`;
  templateJson.version = '0.0.0-beta.0';
  templateJson.homepage = `https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/${folderMap[type]}/${fileName}#readme`;
  templateJson.description = `The ${fileName} component for the AXA Pattern Library`;

  fs.writeFileSync(
    `${BASE_FOLDER}/package.json`,
    JSON.stringify(templateJson, null, 2),
    'utf8'
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/CHANGELOG.md`,
    outdent`
    ## [Unreleased]
    * short description of bugfix/feature that is not released yet
    
    ## 0.0.1
    * first release of component
    `,
    'utf8'
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/README.md`,
    outdent`
    # ${compTitle}

    TODO Description

    ## Usage

    **Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/05-utils/polyfill).

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
    <${className}React onClick={() => alert("you clicked me")}>
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

    `,
    'utf8'
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.scss`,
    outdent`
      .${type}-${fileName} {
        display: block;
      }
    `,
    'utf8'
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.react.js`,
    outdent`
    import withReact from '../../../utils/with-react';
    import ${className} from './index';

    export default (createElement, version) =>
      withReact(createElement, ${className}, version);
    `,
    'utf8'
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/story.js`,
    outdent`
    import { text, withKnobs } from '@storybook/addon-knobs';
    import { html, render } from 'lit';
    import './index';

    export default {
      title: 'Components',
      decorators: [withKnobs],
    };
    
    export const ${compTitle} = () => {
      const textknob = text('This is a knob', 'Value of text knob');
      
      const wrapper = document.createElement('div');
      const template = html\`
        <axa-${fileName}>\${textknob}</axa-${fileName}>
      \`;
      
      render(template, wrapper);
      return wrapper;
    }
    `,
    'utf8'
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.react.d.ts`,
    outdent`
    import React from 'react';

    export type Variant = 'foo' | 'bar';

    export interface ${className}Props {
      className?: string;
      variant?: Variant;
      onClick?: () => void;
    }

    declare function create${className}(
      createElement: typeof React.createElement,
      version?: string
    ): React.ComponentType<${className}Props>;

    export default create${className};
    `,
    'utf8'
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/pw.ui.test.js`,
    outdent`
const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-${fileName}';

describe('${compTitle}', () => {
  it('should render component', async () => {
    await page.goto(
      \`\${host}/iframe.html?id=components-${fileName}--${fileName}&viewMode=story\`
    );
    await page.waitForSelector(tag);
    const visible = await page.isVisible(tag);
    expect(visible).toBeTruthy();
  });
});

    `,
    'utf8'
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/unit.test.js`,
    outdent`
    import ${className} from './index';
    
    describe('${compTitle}', () => {
      test('firstUpdated() should not call another method', () => {
        ${className}.prototype.methodThatShouldNotBeCalled = jest.fn();
    
        ${className}.prototype.firstUpdated();
    
        expect(${className}.prototype.methodThatShouldNotBeCalled).not.toHaveBeenCalled();
      });
    });
    `,
    'utf8'
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.js`,
    outdent`
    import { LitElement, html, css, unsafeCSS } from 'lit';

    /* eslint-disable import/no-extraneous-dependencies */

    //    If you need other axa-XXX components inside your new component,
    //    import them here like this:
    //
    //    import myDependentComponent1 from '@axa-ch/XXX;

    import {
      defineVersioned,
      /* versionedHtml, */
    } from '../../../utils/component-versioning';
    import { applyDefaults } from '../../../utils/with-react';
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
          foo: { type: String, defaultValue: 'bar' },
        };
      }

      constructor() {
        super();
        // this functions applies default values per type and verifies if
        // the HTML attribute has been set before defining the custom element
        applyDefaults(this);
        this.onClick = () => {};
        // if you depend on *other* axa-XXX components and imported them above,
        // then you declare them as versioned here like this:
        // defineVersioned([myDependentComponent1, myDependentComponent2, ...], __VERSION_INFO__, this);
      }

      firstUpdated() {
        // Add DOM changes here
        // This will be rendered when the component is connected to the DOM
      }

      // if you use dependent components inside your html-tagged string templates below,
      // first uncomment versionedHTML above.
      // Then, wrap them using a new tag versionedHTML(this), like so:
      // versionedHTML(this)\`<axa-XXX foo="bar"></axa-XXX>\`
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

    defineVersioned([${className}], __VERSION_INFO__);

    export default ${className};
    `,
    'utf8'
  );

  // update lerna.json
  const lernaPath = `${cwd()}/lerna.json`;
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const lerna = require(lernaPath);
  const { packages = [] } = lerna;
  const newComponentPackageName = BASE_FOLDER.replace(/^\.\//, '');
  if (packages.indexOf(newComponentPackageName) < 0) {
    packages.push(newComponentPackageName);
    packages.sort();

    fs.writeFileSync(lernaPath, JSON.stringify(lerna, null, 2), 'utf8');
  }

  done(BASE_FOLDER);
};

module.exports = {
  getAMOType,
  prepareName,
  createFiles,
};
