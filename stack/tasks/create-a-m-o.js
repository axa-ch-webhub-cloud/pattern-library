#!/usr/bin/env node
const fs = require('fs');
const mkdirp = require('mkdirp'); // eslint-disable-line import/no-extraneous-dependencies
const outdent = require('outdent');

const CWD = process.cwd();

process.stdin.setEncoding('utf8');

// TODO, evaluate https://github.com/chalk/chalk

// ref: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
  outdent`

    Hello Dear developer, thank you for contributing with us. 😊

    I will help you to create a new web component 😎.

    You can choose between ATOM📗, MOLECULE📘 or ORGANISM📙.

    As a general guideline, an ATOM📗 is indivisible and is the smallest component.
    It won't make sense to use it on its own, but is an essential builing block. An ATOM📗 should not have dependencies to other elements

    An ORGANISM📙 is the finished and ready to use component. It must have at least one element as dependency.

    A MOLECULE📘 is a not completly finished component and can be resused somewhere else. It must contain at least one ATOM📗.

    Now, please tell me what do you wan to create
  `,
);

let element = '';

const mapElement = {
  a: 'ATOM📗',
  m: 'MOLECULE📘',
  o: 'ORGANISM📙',
};


const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
const camelCase = string => string.split(/[-_]+/).map(capitalizeFirstLetter).join('');

const displayNameText = () => {
  console.log('\x1b[40m', '\x1b[37m', // eslint-disable-line
    outdent`

    Please enter the name of the new ${mapElement[element]} ( something that make sense 😉 ).

    `,
  );
};

const displayElementSelector = () => {
  console.log('\x1b[40m', '\x1b[37m', // eslint-disable-line
    outdent`

      Press:

      1 for ATOM 📗
      2 for MOLECULE 📘
      3 for ORGANISM 📙

    `,
  );
};

const writeIndexJs = (path, _name) => {
  const className = `AXA${camelCase(_name)}`;

  fs.writeFileSync(
    `${path}/index.js`,
    outdent`import { BaseComponentGlobal } from '../_abstract/component-types';
      // import the styles used for this component
      import styles from './index.scss';
      // import the template used for this component
      import template from './_template';
      import wcdomready from '../../js/wcdomready';

      class ${className} extends BaseComponentGlobal {
        constructor() {
          super(styles, template);

          // does this provide context (See docs for context) ?
          // this.enableContext()

          // or do you want to consume a specific context
          // this.selectContext('axa-context-provider');
        }

        /**
         * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
         */
        connectedCallback() {
          super.connectedCallback();

          this.className = \`\${this.initialClassName} ${element}-${_name}\`;
          // Your DOM interaction here, but keep it decoupled.
          // If you don't have any, just remove this function
        }

        disconnectedCallback() {
          super.disconnectedCallback();

          // Don't forget to cleanup :)
        }

        // Do you consume context?
        // contextCallback(contextNode) {
        //   contextNode is now available.
        // }
      }

      wcdomready(() => {
        window.customElements.define('axa-${_name}', ${className});
      });

      export default ${className};

    `
    , (err) => {
      if (err) {
        console.error(err); // eslint-disable-line
        process.exit(1);
      }
    },
  );
};

const writeIndexScss = (path, _name) => {
  fs.writeFileSync(
    `${path}/index.scss`,
    outdent`
      .${element}-${_name} {
        display: block;
      }

    `
    , (err) => {
      if (err) {
        console.error(err); // eslint-disable-line
        process.exit(1);
      }
    },
  );
};

const writePreviewAndHtml = (path, _name) => {
  fs.writeFileSync(
    `${path}/_preview.html`,
    outdent`<axa-${_name} classes="${element}-${_name}"></axa-${_name}>
    `
    , (err) => {
      if (err) {
        console.error(err); // eslint-disable-line
        process.exit(1);
      }
    },
  );
  fs.writeFileSync(
    `${path}/_example.html`,
    outdent`<!--Please create here a HTML example by using just default HTML tags-->
    `
    , (err) => {
      if (err) {
        console.error(err); // eslint-disable-line
        process.exit(1);
      }
    },
  );
};

const writeTemplateJs = (path) => {
  fs.writeFileSync(
    `${path}/_template.js`,
    outdent`import html from 'nanohtml';

      export default ({ classes }) => html\`
        <article class=\${classes}>Ready to start</article>
      \`;

    `
    , (err) => {
      if (err) {
        console.error(err); // eslint-disable-line
        process.exit(1);
      }
    },
  );
};

const createBoilerplate = (_name) => {
  const path = `${CWD}/src/components/${element}-${_name}`;

  if (fs.existsSync(`${path}/index.js`)) {
    console.log('\x1b[41m', '\x1b[36m', '\nComponent already exists. Please start over again 😥 \n'); //eslint-disable-line
    element = '';
    displayElementSelector();
  } else {
    console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
      outdent`

      I'm creating a ${mapElement[element]} called ${_name} for you...

      `,
    );
    mkdirp(`${path}`, () => {
      writeIndexJs(path, _name);
      writeIndexScss(path, _name);
      writePreviewAndHtml(path, _name);
      writeTemplateJs(path);
      console.log('\x1b[40m', '\x1b[36m', // eslint-disable-line
        outdent`

          Created under ${path}
          happy Coding 😊

        `,
      );
      process.exit(0);
    });
  }
};


process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  switch (parseInt(chunk, 10)) {
    case 1:
      element = 'a';
      displayNameText();
      break;
    case 2:
      element = 'm';
      displayNameText();
      break;
    case 3:
      element = 'o';
      displayNameText();
      break;
    default:
      if (element && chunk) {
        createBoilerplate(chunk.trim().replace(/\s+/g, '-'));
      } else {
        displayElementSelector();
      }
      break;
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
